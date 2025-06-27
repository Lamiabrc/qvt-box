
-- Table pour les équipes/groupes
CREATE TABLE public.social_groups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('team', 'family', 'friends')),
  description TEXT,
  created_by UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  group_code TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour les membres des groupes
CREATE TABLE public.social_group_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID REFERENCES public.social_groups(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('admin', 'member')),
  joined_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(group_id, user_id)
);

-- Table pour les publications partagées
CREATE TABLE public.shared_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  group_id UUID REFERENCES public.social_groups(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  post_type TEXT NOT NULL CHECK (post_type IN ('activity', 'life_event', 'mood_weather', 'general')),
  media_urls JSONB DEFAULT '[]'::jsonb,
  privacy_level TEXT NOT NULL DEFAULT 'group' CHECK (privacy_level IN ('group', 'friends', 'private')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Types de bulles de récompense
CREATE TYPE public.bubble_type AS ENUM (
  'soin',        -- 🫧 Bulle de Soin (écoute, soutien, entraide)
  'inspiration', -- 🌟 Bulle d'Inspiration (idée originale, initiative)
  'transformation', -- 🌀 Bulle de Transformation (changement visible, avant/après)
  'connexion'    -- 💞 Bulle de Connexion (acte qui renforce le lien collectif)
);

-- Table pour les bulles données
CREATE TABLE public.bubble_rewards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  giver_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  post_id UUID REFERENCES public.shared_posts(id) ON DELETE CASCADE,
  bubble_type public.bubble_type NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(giver_id, post_id, bubble_type)
);

-- Table pour les points de bulle (score utilisateur)
CREATE TABLE public.user_bubble_points (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  soin_points INTEGER NOT NULL DEFAULT 0,
  inspiration_points INTEGER NOT NULL DEFAULT 0,
  transformation_points INTEGER NOT NULL DEFAULT 0,
  connexion_points INTEGER NOT NULL DEFAULT 0,
  total_points INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Table pour les invitations
CREATE TABLE public.group_invitations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID REFERENCES public.social_groups(id) ON DELETE CASCADE,
  inviter_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  invitee_email TEXT NOT NULL,
  invitee_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + interval '7 days')
);

-- Activer RLS sur toutes les tables
ALTER TABLE public.social_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_group_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shared_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bubble_rewards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_bubble_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.group_invitations ENABLE ROW LEVEL SECURITY;

-- Politiques RLS pour social_groups
CREATE POLICY "Users can view groups they belong to" 
  ON public.social_groups FOR SELECT 
  USING (
    id IN (
      SELECT group_id FROM public.social_group_members 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create groups" 
  ON public.social_groups FOR INSERT 
  WITH CHECK (auth.uid() = created_by);

-- Politiques RLS pour social_group_members
CREATE POLICY "Users can view group members of their groups" 
  ON public.social_group_members FOR SELECT 
  USING (
    group_id IN (
      SELECT group_id FROM public.social_group_members 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Group admins can manage members" 
  ON public.social_group_members FOR ALL 
  USING (
    group_id IN (
      SELECT group_id FROM public.social_group_members 
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Politiques RLS pour shared_posts
CREATE POLICY "Users can view posts in their groups" 
  ON public.shared_posts FOR SELECT 
  USING (
    group_id IN (
      SELECT group_id FROM public.social_group_members 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create posts in their groups" 
  ON public.shared_posts FOR INSERT 
  WITH CHECK (
    auth.uid() = author_id AND
    group_id IN (
      SELECT group_id FROM public.social_group_members 
      WHERE user_id = auth.uid()
    )
  );

-- Politiques RLS pour bubble_rewards
CREATE POLICY "Users can view bubble rewards in their groups" 
  ON public.bubble_rewards FOR SELECT 
  USING (
    post_id IN (
      SELECT id FROM public.shared_posts 
      WHERE group_id IN (
        SELECT group_id FROM public.social_group_members 
        WHERE user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Users can give bubble rewards" 
  ON public.bubble_rewards FOR INSERT 
  WITH CHECK (auth.uid() = giver_id);

-- Politiques RLS pour user_bubble_points
CREATE POLICY "Users can view all bubble points" 
  ON public.user_bubble_points FOR SELECT 
  USING (true);

CREATE POLICY "System can update bubble points" 
  ON public.user_bubble_points FOR ALL 
  USING (true);

-- Fonction pour mettre à jour les points de bulle
CREATE OR REPLACE FUNCTION public.update_bubble_points()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_bubble_points (user_id)
  VALUES (NEW.receiver_id)
  ON CONFLICT (user_id) DO NOTHING;

  UPDATE public.user_bubble_points 
  SET 
    soin_points = soin_points + CASE WHEN NEW.bubble_type = 'soin' THEN 1 ELSE 0 END,
    inspiration_points = inspiration_points + CASE WHEN NEW.bubble_type = 'inspiration' THEN 1 ELSE 0 END,
    transformation_points = transformation_points + CASE WHEN NEW.bubble_type = 'transformation' THEN 1 ELSE 0 END,
    connexion_points = connexion_points + CASE WHEN NEW.bubble_type = 'connexion' THEN 1 ELSE 0 END,
    total_points = soin_points + inspiration_points + transformation_points + connexion_points + 
                   CASE WHEN NEW.bubble_type = 'soin' THEN 1 ELSE 0 END +
                   CASE WHEN NEW.bubble_type = 'inspiration' THEN 1 ELSE 0 END +
                   CASE WHEN NEW.bubble_type = 'transformation' THEN 1 ELSE 0 END +
                   CASE WHEN NEW.bubble_type = 'connexion' THEN 1 ELSE 0 END,
    updated_at = now()
  WHERE user_id = NEW.receiver_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour mettre à jour automatiquement les points
CREATE TRIGGER update_bubble_points_trigger
  AFTER INSERT ON public.bubble_rewards
  FOR EACH ROW EXECUTE FUNCTION public.update_bubble_points();

-- Index pour optimiser les performances
CREATE INDEX idx_social_group_members_user_id ON public.social_group_members(user_id);
CREATE INDEX idx_social_group_members_group_id ON public.social_group_members(group_id);
CREATE INDEX idx_shared_posts_group_id ON public.shared_posts(group_id);
CREATE INDEX idx_shared_posts_author_id ON public.shared_posts(author_id);
CREATE INDEX idx_bubble_rewards_post_id ON public.bubble_rewards(post_id);
CREATE INDEX idx_bubble_rewards_receiver_id ON public.bubble_rewards(receiver_id);
