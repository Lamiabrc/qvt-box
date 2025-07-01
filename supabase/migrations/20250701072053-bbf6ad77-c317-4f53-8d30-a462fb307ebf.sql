
-- Créer le système d'abonnements avec gestion des accès et box
CREATE TABLE public.subscription_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL, -- 'enterprise' ou 'family'
  base_price numeric NOT NULL,
  price_per_user numeric NOT NULL DEFAULT 0,
  max_users integer,
  features jsonb NOT NULL DEFAULT '[]'::jsonb,
  box_included boolean DEFAULT false,
  box_price numeric DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Table des abonnements actifs avec détails
CREATE TABLE public.active_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_id uuid REFERENCES public.subscription_plans(id),
  stripe_subscription_id text,
  status text NOT NULL DEFAULT 'active',
  user_count integer NOT NULL DEFAULT 1,
  box_subscription boolean DEFAULT false,
  total_price numeric NOT NULL,
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Table des accès aux fonctionnalités selon l'abonnement
CREATE TABLE public.feature_access (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subscription_id uuid REFERENCES public.active_subscriptions(id) ON DELETE CASCADE,
  feature_name text NOT NULL,
  is_enabled boolean DEFAULT true,
  usage_limit integer,
  current_usage integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Table des relations entre collègues/potes
CREATE TABLE public.user_connections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  addressee_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  connection_type text NOT NULL, -- 'colleague', 'friend', 'family'
  status text NOT NULL DEFAULT 'pending', -- 'pending', 'accepted', 'blocked'
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(requester_id, addressee_id)
);

-- Table pour partager l'état émotionnel entre connexions
CREATE TABLE public.user_emotional_states (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  mood text NOT NULL,
  stress_level integer CHECK (stress_level BETWEEN 1 AND 10),
  energy_level integer CHECK (energy_level BETWEEN 1 AND 10),
  notes text,
  is_visible_to_connections boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Insérer les plans d'abonnement par défaut
INSERT INTO public.subscription_plans (name, type, base_price, price_per_user, max_users, features, box_included, box_price) VALUES
-- Plans Entreprise
('QVT Starter', 'enterprise', 99, 15, 10, '["dashboard", "basic_analytics", "monthly_checkins"]', false, 25),
('QVT Professional', 'enterprise', 199, 12, 50, '["dashboard", "advanced_analytics", "weekly_checkins", "team_insights", "manager_tools"]', true, 20),
('QVT Enterprise', 'enterprise', 399, 10, null, '["dashboard", "premium_analytics", "daily_checkins", "team_insights", "manager_tools", "custom_reports", "priority_support"]', true, 15),

-- Plans Famille
('QVTeen Basic', 'family', 29, 10, 2, '["teen_dashboard", "parent_dashboard", "monthly_checkins"]', false, 15),
('QVTeen Plus', 'family', 49, 8, 4, '["teen_dashboard", "parent_dashboard", "weekly_checkins", "family_insights", "teen_connections"]', true, 12),
('QVTeen Premium', 'family', 79, 6, null, '["teen_dashboard", "parent_dashboard", "daily_checkins", "family_insights", "teen_connections", "priority_support"]', true, 10);

-- Politiques RLS pour les nouvelles tables
ALTER TABLE public.subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.active_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feature_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_emotional_states ENABLE ROW LEVEL SECURITY;

-- Plans publics en lecture seule
CREATE POLICY "Everyone can view subscription plans"
  ON public.subscription_plans
  FOR SELECT
  TO authenticated, anon
  USING (true);

-- Abonnements : utilisateur propriétaire ou admin
CREATE POLICY "Users can view their own subscriptions"
  ON public.active_subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

CREATE POLICY "Users can insert their own subscriptions"
  ON public.active_subscriptions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Accès aux fonctionnalités
CREATE POLICY "Users can view their feature access"
  ON public.feature_access
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.active_subscriptions 
      WHERE id = subscription_id AND user_id = auth.uid()
    ) OR public.is_admin(auth.uid())
  );

-- Connexions utilisateurs
CREATE POLICY "Users can manage their connections"
  ON public.user_connections
  FOR ALL
  TO authenticated
  USING (auth.uid() = requester_id OR auth.uid() = addressee_id)
  WITH CHECK (auth.uid() = requester_id OR auth.uid() = addressee_id);

-- États émotionnels
CREATE POLICY "Users can manage their emotional state"
  ON public.user_emotional_states
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view connected users emotional states"
  ON public.user_emotional_states
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id OR 
    (is_visible_to_connections = true AND EXISTS (
      SELECT 1 FROM public.user_connections 
      WHERE ((requester_id = auth.uid() AND addressee_id = user_id) OR 
             (requester_id = user_id AND addressee_id = auth.uid()))
      AND status = 'accepted'
    ))
  );

-- Fonctions pour vérifier l'accès aux fonctionnalités
CREATE OR REPLACE FUNCTION public.has_feature_access(
  feature_name text,
  user_id uuid DEFAULT auth.uid()
)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.feature_access fa
    JOIN public.active_subscriptions sub ON fa.subscription_id = sub.id
    WHERE sub.user_id = has_feature_access.user_id
    AND fa.feature_name = has_feature_access.feature_name
    AND fa.is_enabled = true
    AND sub.status = 'active'
    AND sub.current_period_end > now()
  );
$$;

-- Fonction pour obtenir les connexions d'un utilisateur
CREATE OR REPLACE FUNCTION public.get_user_connections(
  connection_type text DEFAULT null,
  user_id uuid DEFAULT auth.uid()
)
RETURNS TABLE (
  connection_id uuid,
  connected_user_id uuid,
  connected_user_name text,
  connected_user_email text,
  connection_status text,
  emotional_state jsonb
)
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT 
    uc.id as connection_id,
    CASE 
      WHEN uc.requester_id = get_user_connections.user_id THEN uc.addressee_id
      ELSE uc.requester_id
    END as connected_user_id,
    p.full_name as connected_user_name,
    p.email as connected_user_email,
    uc.status as connection_status,
    jsonb_build_object(
      'mood', ues.mood,
      'stress_level', ues.stress_level,
      'energy_level', ues.energy_level,
      'updated_at', ues.updated_at
    ) as emotional_state
  FROM public.user_connections uc
  JOIN public.profiles p ON (
    CASE 
      WHEN uc.requester_id = get_user_connections.user_id THEN p.id = uc.addressee_id
      ELSE p.id = uc.requester_id
    END
  )
  LEFT JOIN public.user_emotional_states ues ON (
    ues.user_id = CASE 
      WHEN uc.requester_id = get_user_connections.user_id THEN uc.addressee_id
      ELSE uc.requester_id
    END
    AND ues.is_visible_to_connections = true
  )
  WHERE (uc.requester_id = get_user_connections.user_id OR uc.addressee_id = get_user_connections.user_id)
  AND (get_user_connections.connection_type IS NULL OR uc.connection_type = get_user_connections.connection_type)
  AND uc.status = 'accepted';
$$;
