
import { supabase } from '@/integrations/supabase/client';

export const authService = {
  async signUp(email: string, password: string, userData?: any) {
    try {
      console.log('Attempting sign up for:', email);
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData || {}
        }
      });
      
      console.log('Signup response:', { data, error });
      
      if (error) {
        console.error('Sign up error details:', error);
        return { data, error };
      }

      if (data.user) {
        console.log('Sign up successful for user:', data.user.email);
        return { 
          data, 
          error: null,
          message: 'Compte créé avec succès ! Vous pouvez maintenant vous connecter.'
        };
      }
      
      return { data, error };
    } catch (error) {
      console.error('Unexpected sign up error:', error);
      return { 
        data: null, 
        error: { 
          message: 'Une erreur s\'est produite. Veuillez réessayer.' 
        }
      };
    }
  },

  async signIn(email: string, password: string) {
    try {
      console.log('Attempting sign in for:', email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        console.error('Sign in error:', error.message);
        return { data, error };
      } else {
        console.log('Sign in successful:', data.user?.email);
      }
      
      return { data, error };
    } catch (error) {
      console.error('Unexpected sign in error:', error);
      return { 
        data: null, 
        error: { 
          message: 'Une erreur s\'est produite. Veuillez réessayer.' 
        }
      };
    }
  },

  async signOut() {
    try {
      console.log('Attempting sign out');
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Sign out error:', error);
        throw error;
      }
      console.log('Sign out successful');
    } catch (error) {
      console.error('Unexpected sign out error:', error);
      throw error;
    }
  },

  async resetPassword(email: string) {
    try {
      console.log('Attempting password reset for:', email);
      const { data, error } = await supabase.auth.resetPasswordForEmail(email);
      
      if (error) {
        console.error('Password reset error:', error);
      } else {
        console.log('Password reset email sent');
      }
      
      return { data, error };
    } catch (error) {
      console.error('Unexpected password reset error:', error);
      return { data: null, error };
    }
  }
};
