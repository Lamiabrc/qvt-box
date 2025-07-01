
import { supabase } from '@/integrations/supabase/client';

export const authService = {
  async signUp(email: string, password: string, userData?: any) {
    try {
      console.log('Attempting sign up for:', email);
      console.log('User data:', userData);
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData || {},
          // Pas de redirection email, connexion directe après inscription
        }
      });
      
      console.log('Signup response:', { data, error });
      
      if (error) {
        console.error('Sign up error details:', {
          message: error.message,
          status: error.status,
          name: error.name
        });
        
        // Handle specific error cases with user-friendly messages
        if (error.message.includes('already registered') || error.message.includes('User already registered')) {
          return { 
            data, 
            error: { 
              ...error, 
              message: 'Cette adresse email est déjà utilisée. Essayez de vous connecter ou utilisez une autre adresse.' 
            }
          };
        }
        
        if (error.message.includes('Invalid email')) {
          return { 
            data, 
            error: { 
              ...error, 
              message: 'Adresse email invalide. Veuillez vérifier votre email.' 
            }
          };
        }
        
        if (error.message.includes('Password')) {
          return { 
            data, 
            error: { 
              ...error, 
              message: 'Le mot de passe doit contenir au moins 6 caractères.' 
            }
          };
        }
        
        return { data, error };
      } else {
        console.log('Sign up successful:', data.user?.email);
        // L'utilisateur sera automatiquement connecté si l'inscription réussit
      }
      
      return { data, error };
    } catch (error) {
      console.error('Unexpected sign up error:', error);
      return { 
        data: null, 
        error: { 
          message: 'Une erreur inattendue s\'est produite. Veuillez réessayer.' 
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
        
        // Handle common errors
        if (error.message.includes('Invalid login credentials')) {
          return { 
            data, 
            error: { 
              ...error, 
              message: 'Email ou mot de passe incorrect.' 
            }
          };
        }
      } else {
        console.log('Sign in successful:', data.user?.email);
      }
      
      return { data, error };
    } catch (error) {
      console.error('Unexpected sign in error:', error);
      return { 
        data: null, 
        error: { 
          message: 'Une erreur inattendue s\'est produite. Veuillez réessayer.' 
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
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      });
      
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
