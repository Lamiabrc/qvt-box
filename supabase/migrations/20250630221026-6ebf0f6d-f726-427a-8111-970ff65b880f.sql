
-- Fix conversation creation policy to allow visitor chat functionality
DROP POLICY IF EXISTS "Visitors can create their own conversations" ON public.conversations;
CREATE POLICY "Visitors can create their own conversations" 
  ON public.conversations 
  FOR INSERT 
  TO authenticated, anon
  WITH CHECK (true);

-- Allow message creation for chat functionality
DROP POLICY IF EXISTS "Anyone can create messages in active conversations" ON public.messages;
CREATE POLICY "Anyone can create messages in active conversations" 
  ON public.messages 
  FOR INSERT 
  TO authenticated, anon
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.conversations 
      WHERE id = conversation_id 
      AND status = 'active'
    )
  );

-- Fix other critical tables that need proper anonymous access for the application to work
-- Fix profiles table - allow profile creation during signup
DROP POLICY IF EXISTS "Users can insert their own profiles" ON public.profiles;
CREATE POLICY "Users can insert their own profiles" 
  ON public.profiles 
  FOR INSERT 
  TO authenticated, anon
  WITH CHECK (auth.uid() = id OR auth.uid() IS NULL);

-- Fix cart functionality for anonymous users
DROP POLICY IF EXISTS "Users can manage their own cart" ON public.cart_items;
CREATE POLICY "Anonymous users can manage cart items" 
  ON public.cart_items 
  FOR ALL 
  TO anon, authenticated
  USING (user_id IS NULL OR auth.uid() = user_id)
  WITH CHECK (user_id IS NULL OR auth.uid() = user_id);

-- Fix simulator responses for anonymous usage
DROP POLICY IF EXISTS "Users can view their own responses" ON public.simulator_responses;
CREATE POLICY "Allow simulator responses" 
  ON public.simulator_responses 
  FOR ALL 
  TO anon, authenticated
  USING (user_id IS NULL OR auth.uid() = user_id OR public.is_admin(auth.uid()))
  WITH CHECK (user_id IS NULL OR auth.uid() = user_id);

-- Fix user feedback for anonymous usage
DROP POLICY IF EXISTS "Allow anonymous feedback" ON public.user_feedback;
CREATE POLICY "Allow anonymous feedback" 
  ON public.user_feedback 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (user_id IS NULL OR auth.uid() = user_id);

-- Fix metrics for anonymous tracking
DROP POLICY IF EXISTS "Users can view their own metrics" ON public.metrics;
CREATE POLICY "Allow metrics collection" 
  ON public.metrics 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Keep strict authentication for sensitive employee and admin data
-- But allow necessary anonymous access for public features like chat, simulators, and shopping
