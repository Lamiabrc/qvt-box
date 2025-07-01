
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useCallback } from 'react';

export const useSecureAuth = () => {
  const { signIn, signUp, signOut, user, isAdmin } = useAuth();
  const { toast } = useToast();

  const secureSignIn = useCallback(async (email: string, password: string) => {
    try {
      // Basic input validation
      if (!email || !password) {
        throw new Error('Email et mot de passe requis');
      }

      if (!email.includes('@')) {
        throw new Error('Format d\'email invalide');
      }

      if (password.length < 6) {
        throw new Error('Le mot de passe doit contenir au moins 6 caractères');
      }

      const result = await signIn(email, password);
      
      if (result.error) {
        console.warn('Failed login attempt:', { email, timestamp: new Date().toISOString() });
      }

      return result;
    } catch (error) {
      console.error('Secure sign in error:', error);
      throw error;
    }
  }, [signIn]);

  const secureSignUp = useCallback(async (email: string, password: string, userData?: any) => {
    try {
      // Enhanced input validation
      if (!email || !password) {
        throw new Error('Email et mot de passe requis');
      }

      if (!email.includes('@') || email.length < 5) {
        throw new Error('Format d\'email invalide');
      }

      if (password.length < 8) {
        throw new Error('Le mot de passe doit contenir au moins 8 caractères');
      }

      // Check for password complexity
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
        throw new Error('Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre');
      }

      // Sanitize user data
      const sanitizedUserData = userData ? {
        ...userData,
        full_name: userData.full_name?.trim()?.substring(0, 100),
        role: userData.role?.trim()?.toLowerCase()
      } : {};

      console.log('Attempting signup with proper redirect URL');
      
      const result = await signUp(email, password, {
        ...sanitizedUserData,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`
        }
      });
      
      if (!result.error) {
        toast({
          title: "Inscription réussie !",
          description: "Vérifiez votre email pour confirmer votre compte. Vous pouvez vous connecter dès maintenant.",
        });
      }

      return result;
    } catch (error) {
      console.error('Secure sign up error:', error);
      throw error;
    }
  }, [signUp, toast]);

  const secureSignOut = useCallback(async () => {
    try {
      await signOut();
      toast({
        title: "Déconnexion réussie",
        description: "À bientôt !"
      });
    } catch (error) {
      console.error('Secure sign out error:', error);
      toast({
        title: "Erreur de déconnexion",
        description: "Une erreur s'est produite lors de la déconnexion",
        variant: "destructive"
      });
    }
  }, [signOut, toast]);

  return {
    secureSignIn,
    secureSignUp,
    secureSignOut,
    user,
    isAdmin,
    isAuthenticated: !!user
  };
};
