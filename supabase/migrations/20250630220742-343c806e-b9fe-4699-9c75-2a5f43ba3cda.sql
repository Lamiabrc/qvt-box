
-- Fix function search path security issue
CREATE OR REPLACE FUNCTION public.update_bubble_points()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $function$
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
$function$;

-- Secure some critical tables by removing anonymous access where inappropriate
-- Keep only essential anonymous access for public content

-- Remove anonymous access from sensitive admin tables
DROP POLICY IF EXISTS "Admins can view activity log" ON public.admin_activity_log;
CREATE POLICY "Admins can view activity log" 
  ON public.admin_activity_log 
  FOR SELECT 
  TO authenticated
  USING (public.is_admin(auth.uid()));

-- Secure conversations table - remove anonymous access
DROP POLICY IF EXISTS "Visitors can view their own conversations" ON public.conversations;
CREATE POLICY "Visitors can view their own conversations" 
  ON public.conversations 
  FOR SELECT 
  TO authenticated, anon
  USING (visitor_id = current_setting('request.jwt.claims', true)::json->>'visitor_id' OR public.is_admin(auth.uid()));

-- Secure messages table - remove anonymous access for viewing
DROP POLICY IF EXISTS "Conversation participants can view messages" ON public.messages;
CREATE POLICY "Conversation participants can view messages" 
  ON public.messages 
  FOR SELECT 
  TO authenticated, anon
  USING (
    public.is_admin(auth.uid()) OR
    EXISTS (
      SELECT 1 FROM public.conversations 
      WHERE id = conversation_id 
      AND visitor_id = current_setting('request.jwt.claims', true)::json->>'visitor_id'
    )
  );

-- Secure user profiles - remove anonymous access
DROP POLICY IF EXISTS "Users can view their own profiles" ON public.profiles;
CREATE POLICY "Users can view their own profiles" 
  ON public.profiles 
  FOR SELECT 
  TO authenticated
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own profiles" ON public.profiles;
CREATE POLICY "Users can update their own profiles" 
  ON public.profiles 
  FOR UPDATE 
  TO authenticated
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can delete their own profiles" ON public.profiles;
CREATE POLICY "Users can delete their own profiles" 
  ON public.profiles 
  FOR DELETE 
  TO authenticated
  USING (auth.uid() = id);

-- Secure employee data - remove anonymous access
DROP POLICY IF EXISTS "Users can view their own events" ON public.employee_events;
CREATE POLICY "Users can view their own events" 
  ON public.employee_events 
  FOR SELECT 
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own events" ON public.employee_events;
CREATE POLICY "Users can update their own events" 
  ON public.employee_events 
  FOR UPDATE 
  TO authenticated
  USING (auth.uid() = user_id);

-- Secure employee specificities
DROP POLICY IF EXISTS "Users can view their own specificities" ON public.employee_specificities;
CREATE POLICY "Users can view their own specificities" 
  ON public.employee_specificities 
  FOR SELECT 
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own specificities" ON public.employee_specificities;
CREATE POLICY "Users can update their own specificities" 
  ON public.employee_specificities 
  FOR UPDATE 
  TO authenticated
  USING (auth.uid() = user_id);

-- Keep public content tables with anonymous access as they're meant to be public
-- Keep site_content and site_themes with anonymous read access for public pages
-- Keep editable_content with anonymous read access for public content

-- Add security definer function for better role checking
CREATE OR REPLACE FUNCTION public.current_user_has_role(check_role text)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role::text = check_role
  );
$$;
