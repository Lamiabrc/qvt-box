import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, userData?: any) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<any>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state change:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await checkAdminStatus(session.user.id);
        } else {
          setIsAdmin(false);
        }
        
        setLoading(false);
      }
    );

    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Error getting initial session:', error);
        } else {
          setSession(session);
          setUser(session?.user ?? null);
          
          if (session?.user) {
            await checkAdminStatus(session.user.id);
          }
        }
      } catch (error) {
        console.error('Unexpected error getting session:', error);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminStatus = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .eq('role', 'admin')
        .single();
      
      if (!error && data) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
    }
  };

  const signUp = async (email: string, password: string, userData?: any) => {
    try {
      console.log('Attempting sign up for:', email);
      console.log('User data:', userData);
      
      // Use the current domain for email confirmation
      const redirectUrl = `${window.location.origin}/auth/callback`;
      console.log('Using redirect URL:', redirectUrl);
      
      // Try a simpler signup first without extra options
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData || {},
          emailRedirectTo: redirectUrl
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
        if (error.message.includes('captcha') || error.message.includes('CAPTCHA')) {
          return { 
            data, 
            error: { 
              ...error, 
              message: 'Vérification de sécurité requise. Ceci est un problème de configuration. Veuillez contacter le support.' 
            }
          };
        }
        
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
        
        // Return the original error for other cases
        return { data, error };
      } else {
        console.log('Sign up successful:', data.user?.email);
        console.log('User confirmation required:', !data.user?.email_confirmed_at);
        
        // Check if email confirmation is required
        if (data.user && !data.user.email_confirmed_at) {
          console.log('User created, redirecting to email confirmation');
          setTimeout(() => {
            window.location.href = '/email-confirmation';
          }, 1000);
        }
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
  };

  const signIn = async (email: string, password: string) => {
    try {
      console.log('Attempting sign in for:', email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        console.error('Sign in error:', error.message);
        
        // Handle CAPTCHA error for sign in
        if (error.message.includes('captcha')) {
          return { 
            data, 
            error: { 
              ...error, 
              message: 'La vérification de sécurité a échoué. Veuillez réessayer dans quelques instants.' 
            }
          };
        }
        
        // Handle other common errors
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
  };

  const signOut = async () => {
    try {
      console.log('Attempting sign out');
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Sign out error:', error);
        throw error;
      }
      setIsAdmin(false);
      console.log('Sign out successful');
    } catch (error) {
      console.error('Unexpected sign out error:', error);
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
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
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      loading,
      signUp,
      signIn,
      signOut,
      resetPassword,
      isAdmin
    }}>
      {children}
    </AuthContext.Provider>
  );
};
