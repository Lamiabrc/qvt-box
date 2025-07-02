-- Créer la table subscription_plans si elle n'existe pas
CREATE TABLE IF NOT EXISTS public.subscription_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('enterprise', 'family')),
  base_price DECIMAL(10,2) NOT NULL DEFAULT 0,
  price_per_user DECIMAL(10,2) NOT NULL DEFAULT 0,
  max_users INTEGER,
  features JSONB NOT NULL DEFAULT '[]'::jsonb,
  box_included BOOLEAN NOT NULL DEFAULT false,
  box_price DECIMAL(10,2) NOT NULL DEFAULT 0,
  stripe_price_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Insérer des plans d'abonnement exemple s'ils n'existent pas
INSERT INTO public.subscription_plans (name, type, base_price, price_per_user, max_users, features, box_included, box_price)
VALUES 
  ('Starter Entreprise', 'enterprise', 49.00, 15.00, 10, '["Évaluations QVT", "Dashboard basique", "Support email"]', false, 25.00),
  ('Pro Entreprise', 'enterprise', 99.00, 10.00, 50, '["Évaluations QVT", "Dashboard avancé", "Analyses IA", "Support prioritaire"]', true, 20.00),
  ('Enterprise', 'enterprise', 199.00, 8.00, null, '["Toutes fonctionnalités", "Dashboard premium", "IA avancée", "Support dédié", "Formation équipe"]', true, 15.00),
  ('Famille Essentiel', 'family', 29.00, 10.00, 3, '["Suivi familial", "Activités parents-enfants", "Support communautaire"]', false, 15.00),
  ('Famille Premium', 'family', 49.00, 8.00, 5, '["Suivi familial avancé", "Recommandations IA", "Box mensuelles", "Support prioritaire"]', true, 12.00),
  ('Famille Complete', 'family', 79.00, 6.00, null, '["Toutes fonctionnalités", "Accompagnement personnalisé", "Box premium", "Support dédié"]', true, 10.00)
ON CONFLICT DO NOTHING;

-- Activer RLS sur subscription_plans
ALTER TABLE public.subscription_plans ENABLE ROW LEVEL SECURITY;

-- Créer une politique pour permettre la lecture des plans par tous les utilisateurs authentifiés
CREATE POLICY "subscription_plans_read" ON public.subscription_plans
FOR SELECT
TO authenticated
USING (true);

-- Mise à jour automatique du timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_subscription_plans_updated_at
  BEFORE UPDATE ON public.subscription_plans
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();