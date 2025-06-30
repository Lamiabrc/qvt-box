
-- Create conversations table
CREATE TABLE public.conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  visitor_email TEXT,
  visitor_name TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create messages table
CREATE TABLE public.messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID REFERENCES public.conversations(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_from_visitor BOOLEAN NOT NULL DEFAULT true,
  admin_user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- RLS policies for conversations
CREATE POLICY "Anyone can create conversations" 
  ON public.conversations 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can view conversations" 
  ON public.conversations 
  FOR SELECT 
  USING (true);

CREATE POLICY "Admins can update conversations" 
  ON public.conversations 
  FOR UPDATE 
  USING (public.is_admin(auth.uid()));

-- RLS policies for messages
CREATE POLICY "Anyone can create messages" 
  ON public.messages 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can view messages" 
  ON public.messages 
  FOR SELECT 
  USING (true);

-- Add realtime capabilities
ALTER PUBLICATION supabase_realtime ADD TABLE public.conversations;
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;
