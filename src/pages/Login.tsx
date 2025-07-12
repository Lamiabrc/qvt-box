
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LogIn, UserPlus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import SecureLoginForm from "@/components/auth/SecureLoginForm";
import SecureSignupForm from "@/components/auth/SecureSignupForm";
import FloatingBubbles from "../components/FloatingBubbles";

const Login = () => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-center min-h-[80vh]">
          <Card className="w-full max-w-md border-teal-200 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                {mode === 'login' ? (
                  <LogIn className="w-8 h-8 text-white" />
                ) : (
                  <UserPlus className="w-8 h-8 text-white" />
                )}
              </div>
              <CardTitle className="text-2xl text-teal-800">
                {mode === 'login' ? 'Connexion QVT Box' : 'Créer un compte'}
              </CardTitle>
              <CardDescription className="text-teal-600">
                {mode === 'login' 
                  ? 'Accédez à votre espace bien-être' 
                  : 'Rejoignez la communauté QVT Box'
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {mode === 'login' ? (
                <SecureLoginForm onSuccess={() => console.log('Login successful')} />
              ) : (
                <SecureSignupForm onSuccess={() => setMode('login')} />
              )}
              
              <Separator className="my-4" />
              
              <div className="text-center">
                {mode === 'login' ? (
                  <>
                    <p className="text-sm text-gray-600 mb-2">
                      Pas encore de compte ?
                    </p>
                    <Button 
                      variant="link" 
                      className="text-teal-600 hover:text-teal-800 p-0"
                      onClick={() => setMode('signup')}
                    >
                      Créer un compte
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-gray-600 mb-2">
                      Déjà un compte ?
                    </p>
                    <Button 
                      variant="link" 
                      className="text-teal-600 hover:text-teal-800 p-0"
                      onClick={() => setMode('login')}
                    >
                      Se connecter
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
