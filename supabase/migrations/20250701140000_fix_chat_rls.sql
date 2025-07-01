
-- Fix RLS policies for chat system to allow anonymous users

-- Allow anonymous users to create conversations
DROP POLICY IF EXISTS "Visitors can create their own conversations" ON public.conversations;
CREATE POLICY "Allow anonymous conversation creation" 
  ON public.conversations 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anonymous users to view their conversations
DROP POLICY IF EXISTS "Visitors can view their own conversations" ON public.conversations;
CREATE POLICY "Allow conversation viewing" 
  ON public.conversations 
  FOR SELECT 
  TO anon, authenticated
  USING (true);

-- Allow anonymous users to create messages
DROP POLICY IF EXISTS "Anyone can create messages in active conversations" ON public.messages;
CREATE POLICY "Allow message creation" 
  ON public.messages 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anonymous users to view messages
DROP POLICY IF EXISTS "Conversation participants can view messages" ON public.messages;
CREATE POLICY "Allow message viewing" 
  ON public.messages 
  FOR SELECT 
  TO anon, authenticated
  USING (true);

-- Ensure conversations table has proper structure
ALTER TABLE public.conversations 
  ALTER COLUMN visitor_id SET DEFAULT gen_random_uuid()::text;

-- Make sure messages table allows anonymous access
CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON public.messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_conversations_visitor_id ON public.conversations(visitor_id);
