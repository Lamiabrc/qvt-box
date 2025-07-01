
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
    return await authService.signUp(email, password, userData);
  };

  const signIn = async (email: string, password: string) => {
    return await authService.signIn(email, password);
  };

  const signOut = async () => {
    await authService.signOut();
    setIsAdmin(false);
  };

  const resetPassword = async (email: string) => {
    return await authService.resetPassword(email);
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
