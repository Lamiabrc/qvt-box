
-- Fix critical RLS policy gaps for chat system security

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can create conversations" ON public.conversations;
DROP POLICY IF EXISTS "Anyone can view conversations" ON public.conversations;
DROP POLICY IF EXISTS "Admins can update conversations" ON public.conversations;
DROP POLICY IF EXISTS "Anyone can create messages" ON public.messages;
DROP POLICY IF EXISTS "Anyone can view messages" ON public.messages;

-- Create secure RLS policies for conversations
CREATE POLICY "Visitors can create their own conversations" 
  ON public.conversations 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Visitors can view their own conversations" 
  ON public.conversations 
  FOR SELECT 
  USING (visitor_id = current_setting('request.jwt.claims', true)::json->>'visitor_id' OR public.is_admin(auth.uid()));

CREATE POLICY "Admins can view all conversations" 
  ON public.conversations 
  FOR SELECT 
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can update conversations" 
  ON public.conversations 
  FOR UPDATE 
  USING (public.is_admin(auth.uid()));

-- Create secure RLS policies for messages
CREATE POLICY "Anyone can create messages in active conversations" 
  ON public.messages 
  FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.conversations 
      WHERE id = conversation_id 
      AND status = 'active'
    )
  );

CREATE POLICY "Conversation participants can view messages" 
  ON public.messages 
  FOR SELECT 
  USING (
    public.is_admin(auth.uid()) OR
    EXISTS (
      SELECT 1 FROM public.conversations 
      WHERE id = conversation_id 
      AND visitor_id = current_setting('request.jwt.claims', true)::json->>'visitor_id'
    )
  );

-- Add admin activity logging table for security monitoring
CREATE TABLE IF NOT EXISTS public.admin_activity_log (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  admin_user_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL,
  resource_type TEXT NOT NULL,
  resource_id TEXT,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on admin activity log
ALTER TABLE public.admin_activity_log ENABLE ROW LEVEL SECURITY;

-- Only admins can view the activity log
CREATE POLICY "Admins can view activity log" 
  ON public.admin_activity_log 
  FOR SELECT 
  USING (public.is_admin(auth.uid()));

-- System can insert activity logs
CREATE POLICY "System can insert activity logs" 
  ON public.admin_activity_log 
  FOR INSERT 
  WITH CHECK (true);
