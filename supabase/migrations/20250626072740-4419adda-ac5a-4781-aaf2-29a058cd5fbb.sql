
-- Table pour stocker le contenu modifiable du site
CREATE TABLE IF NOT EXISTS public.editable_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_name TEXT NOT NULL,
  section_name TEXT NOT NULL,
  content_key TEXT NOT NULL,
  content_type TEXT NOT NULL DEFAULT 'text', -- text, color, image, number
  content_value JSONB NOT NULL DEFAULT '{}',
  default_value JSONB NOT NULL DEFAULT '{}',
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(page_name, section_name, content_key)
);

-- Table pour les thèmes/templates
CREATE TABLE IF NOT EXISTS public.site_themes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  colors JSONB NOT NULL DEFAULT '{}',
  fonts JSONB NOT NULL DEFAULT '{}',
  is_active BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insérer un thème par défaut
INSERT INTO public.site_themes (name, description, colors, is_active) VALUES 
('Default', 'Thème par défaut', '{
  "primary": "#3B82F6",
  "secondary": "#10B981", 
  "accent": "#F59E0B",
  "background": "#F8FAFC",
  "text": "#1F2937",
  "family_primary": "#EC4899",
  "family_secondary": "#8B5CF6",
  "enterprise_primary": "#3B82F6",
  "enterprise_secondary": "#1E40AF"
}', true)
ON CONFLICT (name) DO NOTHING;

-- Insérer du contenu par défaut pour la page d'accueil
INSERT INTO public.editable_content (page_name, section_name, content_key, content_type, content_value, default_value, description) VALUES 
('home', 'hero', 'title', 'text', '{"fr": "QVT Box - Votre bien-être, notre priorité"}', '{"fr": "QVT Box - Votre bien-être, notre priorité"}', 'Titre principal de la page d''accueil'),
('home', 'hero', 'subtitle', 'text', '{"fr": "Découvrez nos solutions personnalisées pour améliorer votre qualité de vie au travail et en famille"}', '{"fr": "Découvrez nos solutions personnalisées pour améliorer votre qualité de vie au travail et en famille"}', 'Sous-titre de la page d''accueil'),
('home', 'universe', 'family_title', 'text', '{"fr": "Univers Famille"}', '{"fr": "Univers Famille"}', 'Titre de l''univers famille'),
('home', 'universe', 'family_description', 'text', '{"fr": "Des solutions fun et colorées pour renforcer les liens familiaux et accompagner les adolescents"}', '{"fr": "Des solutions fun et colorées pour renforcer les liens familiaux et accompagner les adolescents"}', 'Description de l''univers famille'),
('home', 'universe', 'enterprise_title', 'text', '{"fr": "Univers Entreprise"}', '{"fr": "Univers Entreprise"}', 'Titre de l''univers entreprise'),
('home', 'universe', 'enterprise_description', 'text', '{"fr": "Des outils professionnels pour améliorer la qualité de vie au travail et prévenir le burn-out"}', '{"fr": "Des outils professionnels pour améliorer la qualité de vie au travail et prévenir le burn-out"}', 'Description de l''univers entreprise')
ON CONFLICT (page_name, section_name, content_key) DO NOTHING;

-- Activer RLS sur les tables
ALTER TABLE public.editable_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_themes ENABLE ROW LEVEL SECURITY;

-- Politique pour que tout le monde puisse lire le contenu
CREATE POLICY "Anyone can read content" ON public.editable_content FOR SELECT USING (true);
CREATE POLICY "Anyone can read themes" ON public.site_themes FOR SELECT USING (true);

-- Politique pour que seuls les admins puissent modifier
CREATE POLICY "Only admins can modify content" ON public.editable_content 
FOR ALL USING (EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Only admins can modify themes" ON public.site_themes 
FOR ALL USING (EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'));
