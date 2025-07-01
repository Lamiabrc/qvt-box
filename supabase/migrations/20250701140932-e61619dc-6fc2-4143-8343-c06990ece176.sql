
-- Fix RLS policies to allow proper message viewing for the chat system

-- Drop existing restrictive policies that prevent message viewing
DROP POLICY IF EXISTS "Allow conversation viewing" ON public.conversations;
DROP POLICY IF EXISTS "Allow message viewing" ON public.messages;

-- Create proper policies for conversations
CREATE POLICY "Allow visitors and admins to view conversations" 
  ON public.conversations 
  FOR SELECT 
  TO anon, authenticated
  USING (true);

-- Create proper policies for messages  
CREATE POLICY "Allow visitors and admins to view messages" 
  ON public.messages 
  FOR SELECT 
  TO anon, authenticated
  USING (true);

-- Ensure conversations can be updated when new messages arrive
DROP POLICY IF EXISTS "Allow conversation updates" ON public.conversations;
CREATE POLICY "Allow conversation updates" 
  ON public.conversations 
  FOR UPDATE 
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);
