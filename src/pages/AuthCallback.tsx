
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import FloatingBubbles from "../components/FloatingBubbles";

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        const token = searchParams.get('token');
        const type = searchParams.get('type');
        
        if (!token || type !== 'signup') {
          setStatus('error');
          setMessage('Lien de confirmation invalide');
          return;
        }

        // Le token sera automatiquement traité par Supabase
        // On attend un moment pour laisser le temps à l'auth de se mettre à jour
        setTimeout(() => {
          if (user) {
            setStatus('success');
            setMessage('Votre email a été confirmé avec succès !');
            toast({
              title: "Email confirmé !",
              description: "Votre compte est maintenant actif. Bienvenue dans QVT Box !",
            });
          } else {
            setStatus('error');
            setMessage('Erreur lors de la confirmation. Veuillez réessayer.');
          }
        }, 2000);

      } catch (error) {
        console.error('Erreur lors de la confirmation:', error);
        setStatus('error');
        setMessage('Une erreur est survenue lors de la confirmation');
      }
    };

    handleEmailConfirmation();
  }, [searchParams, user, toast]);

  const handleContinue = () => {
    if (status === 'success') {
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <>
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
            <CardTitle className="text-2xl text-teal-800 text-center">
              Confirmation en cours...
            </CardTitle>
            <CardDescription className="text-teal-600 text-center">
              Nous confirmons votre email, veuillez patienter
            </CardDescription>
          </>
        );
        
      case 'success':
        return (
          <>
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-green-800 text-center">
              Email confirmé !
            </CardTitle>
            <CardDescription className="text-green-600 text-center">
              {message}
            </CardDescription>
          </>
        );
        
      case 'error':
        return (
          <>
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-red-800 text-center">
              Erreur de confirmation
            </CardTitle>
            <CardDescription className="text-red-600 text-center">
              {message}
            </CardDescription>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <Card className="w-full max-w-md border-teal-200 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <img 
                src="/lovable-uploads/bed0f5ad-cedc-4afa-8b5d-24f9bf8ec5ff.png" 
                alt="QVT Box Logo" 
                className="h-20 w-20 mx-auto mb-4 rounded-full shadow-lg"
              />
              {renderContent()}
            </CardHeader>
            
            <CardContent>
              {status !== 'loading' && (
                <div className="space-y-4">
                  <Button 
                    onClick={handleContinue}
                    className={`w-full shadow-lg ${
                      status === 'success' 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-teal-600 hover:bg-teal-700'
                    }`}
                  >
                    {status === 'success' ? 'Accéder à QVT Box' : 'Retour à la connexion'}
                  </Button>
                  
                  {status === 'error' && (
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">
                        Besoin d'aide ?
                      </p>
                      <Button 
                        variant="link" 
                        className="text-teal-600 hover:text-teal-800 p-0"
                        onClick={() => navigate('/contact')}
                      >
                        Contacter le support
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
