
import React, { createContext, useContext } from 'react';
import { AuthContextType } from '@/types/auth';
import { useAuthState } from '@/hooks/useAuthState';
import { authService } from '@/services/authService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, session, loading, isAdmin, setIsAdmin } = useAuthState();

  const signUp = async (email: string, password: string, userData?: any) => {
    try {
      return await authService.signUp(email, password, userData);
    } catch (error) {
      console.error('SignUp error in AuthContext:', error);
      return { 
        data: null, 
        error: { 
          message: 'Une erreur est survenue lors de la création du compte. Veuillez réessayer.' 
        } 
      };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      return await authService.signIn(email, password);
    } catch (error) {
      console.error('SignIn error in AuthContext:', error);
      return { 
        data: null, 
        error: { 
          message: 'Une erreur est survenue lors de la connexion. Veuillez réessayer.' 
        } 
      };
    }
  };

  const signOut = async () => {
    try {
      await authService.signOut();
      setIsAdmin(false);
    } catch (error) {
      console.error('SignOut error in AuthContext:', error);
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      return await authService.resetPassword(email);
    } catch (error) {
      console.error('ResetPassword error in AuthContext:', error);
      return { 
        data: null, 
        error: { 
          message: 'Une erreur est survenue lors de la réinitialisation. Veuillez réessayer.' 
        } 
      };
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
