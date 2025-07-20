
import { supabase } from '@/integrations/supabase/client';

export const authService = {
  async signUp(email: string, password: string, userData?: any) {
    try {
      console.log('Auth service: Attempting sign up for:', email);
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData || {},
          emailRedirectTo: `${window.location.origin}/auth/callback`
        }
      });
      
      console.log('Auth service: Signup response:', { data, error });
      
      if (error) {
        console.error('Auth service: Sign up error details:', error);
        
        // Handle specific error cases
        if (error.message?.includes('User already registered')) {
          return { 
            data, 
            error: { 
              message: 'Un compte existe déjà avec cette adresse email. Essayez de vous connecter.' 
            }
          };
        }
        
        return { data, error };
      }

      if (data.user) {
        console.log('Auth service: Sign up successful for user:', data.user.email);
        
        // Create or update profile
        if (userData) {
          const { error: profileError } = await supabase
            .from('profiles')
            .upsert({
              id: data.user.id,
              email: data.user.email,
              full_name: userData.full_name || userData.firstName + ' ' + userData.lastName,
              role: userData.role || 'user',
              account_type: userData.account_type || 'user',
              department_or_school: userData.department_or_school,
              fonction: userData.fonction,
              type_poste: userData.type_poste
            });
          
          if (profileError) {
            console.error('Auth service: Profile creation error:', profileError);
          }
        }
        
        return { 
          data, 
          error: null,
          message: 'Compte créé avec succès ! Vous pouvez maintenant vous connecter.'
        };
      }
      
      return { data, error };
    } catch (error) {
      console.error('Auth service: Unexpected sign up error:', error);
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
      console.log('Auth service: Attempting sign in for:', email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        console.error('Auth service: Sign in error:', error.message);
        
        if (error.message?.includes('Invalid login credentials')) {
          return { 
            data, 
            error: { 
              message: 'Email ou mot de passe incorrect.' 
            }
          };
        }
        
        return { data, error };
      } else {
        console.log('Auth service: Sign in successful:', data.user?.email);
      }
      
      return { data, error };
    } catch (error) {
      console.error('Auth service: Unexpected sign in error:', error);
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
      console.log('Auth service: Attempting sign out');
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Auth service: Sign out error:', error);
        throw error;
      }
      console.log('Auth service: Sign out successful');
    } catch (error) {
      console.error('Auth service: Unexpected sign out error:', error);
      throw error;
    }
  },

  async resetPassword(email: string) {
    try {
      console.log('Auth service: Attempting password reset for:', email);
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/password-reset`
      });
      
      if (error) {
        console.error('Auth service: Password reset error:', error);
        return { 
          data, 
          error: { 
            message: 'Erreur lors de l\'envoi de l\'email de réinitialisation.' 
          }
        };
      } else {
        console.log('Auth service: Password reset email sent');
      }
      
      return { data, error };
    } catch (error) {
      console.error('Auth service: Unexpected password reset error:', error);
      return { 
        data: null, 
        error: { 
          message: 'Une erreur s\'est produite. Veuillez réessayer.' 
        }
      };
    }
  }
};
