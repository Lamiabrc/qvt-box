
-- Table pour les spécificités des salariés
CREATE TABLE employee_specificities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  specificity_type VARCHAR(50) NOT NULL,
  severity_level INTEGER DEFAULT 1 CHECK (severity_level >= 1 AND severity_level <= 5),
  description TEXT,
  start_date DATE,
  end_date DATE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Table pour les événements à signaler
CREATE TABLE employee_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  event_type VARCHAR(50) NOT NULL,
  event_date DATE NOT NULL,
  description TEXT,
  impact_level INTEGER DEFAULT 1 CHECK (impact_level >= 1 AND impact_level <= 5),
  support_needed BOOLEAN DEFAULT false,
  confidential BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Table pour les questionnaires spécifiques aux événements
CREATE TABLE event_questionnaires (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID REFERENCES employee_events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users NOT NULL,
  questionnaire_type VARCHAR(50) NOT NULL,
  responses JSONB NOT NULL DEFAULT '{}',
  wellbeing_score INTEGER,
  support_needs JSONB DEFAULT '{}',
  follow_up_required BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- RLS Policies
ALTER TABLE employee_specificities ENABLE ROW LEVEL SECURITY;
ALTER TABLE employee_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_questionnaires ENABLE ROW LEVEL SECURITY;

-- Policies pour employee_specificities
CREATE POLICY "Users can view their own specificities" ON employee_specificities FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own specificities" ON employee_specificities FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own specificities" ON employee_specificities FOR UPDATE USING (auth.uid() = user_id);

-- Policies pour employee_events
CREATE POLICY "Users can view their own events" ON employee_events FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own events" ON employee_events FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own events" ON employee_events FOR UPDATE USING (auth.uid() = user_id);

-- Policies pour event_questionnaires
CREATE POLICY "Users can view their own event questionnaires" ON event_questionnaires FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own event questionnaires" ON event_questionnaires FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own event questionnaires" ON event_questionnaires FOR UPDATE USING (auth.uid() = user_id);

-- Index pour améliorer les performances
CREATE INDEX idx_employee_specificities_user_id ON employee_specificities(user_id);
CREATE INDEX idx_employee_events_user_id ON employee_events(user_id);
CREATE INDEX idx_event_questionnaires_user_id ON event_questionnaires(user_id);
CREATE INDEX idx_event_questionnaires_event_id ON event_questionnaires(event_id);
