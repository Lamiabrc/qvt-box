
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ 
  children, 
  fallback = null, 
  requireAuth = false,
  requireAdmin = false 
}) => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
    );
  }

  if (requireAuth && !user) {
    return <>{fallback}</>;
  }

  if (requireAdmin && !isAdmin) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default AuthGuard;
