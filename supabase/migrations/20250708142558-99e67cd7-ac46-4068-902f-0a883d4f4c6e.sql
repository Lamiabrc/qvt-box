
-- Créer une table pour l'étude de marché et les préinscriptions
CREATE TABLE public.market_research_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  company_name TEXT,
  company_size TEXT,
  role TEXT,
  interest_level INTEGER CHECK (interest_level >= 1 AND interest_level <= 10),
  target_audience TEXT[], -- famille, entreprise, ados
  current_solutions TEXT,
  budget_range TEXT,
  timeline TEXT,
  specific_needs TEXT,
  phone TEXT,
  consent_marketing BOOLEAN DEFAULT false,
  consent_data BOOLEAN DEFAULT false,
  source TEXT, -- d'où vient le lead
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.market_research_submissions ENABLE ROW LEVEL SECURITY;

-- Policy pour permettre aux visiteurs d'insérer leurs données
CREATE POLICY "Anyone can submit market research data"
  ON public.market_research_submissions
  FOR INSERT
  WITH CHECK (true);

-- Policy pour que seuls les admins puissent voir les données
CREATE POLICY "Only admins can view market research data"
  ON public.market_research_submissions
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
    )
  );

-- Trigger pour mettre à jour updated_at
CREATE TRIGGER update_market_research_submissions_updated_at
  BEFORE UPDATE ON public.market_research_submissions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
