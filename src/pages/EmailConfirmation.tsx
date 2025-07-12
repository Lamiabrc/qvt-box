
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import FloatingBubbles from "../components/FloatingBubbles";

const EmailConfirmation = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          setStatus('error');
          setMessage('Erreur lors de la confirmation de votre email.');
          return;
        }

        if (data.session) {
          setStatus('success');
          setMessage('Votre email a été confirmé avec succès !');
          
          // Rediriger vers le dashboard après 3 secondes
          setTimeout(() => {
            navigate('/dashboard');
          }, 3000);
        } else {
          setStatus('error');
          setMessage('Lien de confirmation invalide ou expiré.');
        }
      } catch (error) {
        console.error('Error confirming email:', error);
        setStatus('error');
        setMessage('Une erreur inattendue s\'est produite.');
      }
    };

    handleEmailConfirmation();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-center min-h-[80vh]">
          <Card className="w-full max-w-md border-teal-200 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                status === 'success' 
                  ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                  : status === 'error'
                  ? 'bg-gradient-to-br from-red-500 to-rose-500'
                  : 'bg-gradient-to-br from-teal-500 to-cyan-500'
              }`}>
                {status === 'loading' && <Mail className="w-8 h-8 text-white animate-pulse" />}
                {status === 'success' && <CheckCircle className="w-8 h-8 text-white" />}
                {status === 'error' && <AlertCircle className="w-8 h-8 text-white" />}
              </div>
              
              <CardTitle className="text-2xl text-teal-800">
                {status === 'loading' && 'Confirmation en cours...'}
                {status === 'success' && 'Email confirmé !'}
                {status === 'error' && 'Erreur de confirmation'}
              </CardTitle>
              
              <CardDescription className="text-teal-600">
                {message}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="text-center space-y-4">
              {status === 'success' && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Redirection automatique vers votre dashboard...
                  </p>
                  <Link to="/dashboard">
                    <Button className="w-full">
                      Accéder au dashboard
                    </Button>
                  </Link>
                </div>
              )}
              
              {status === 'error' && (
                <div className="space-y-2">
                  <Link to="/login">
                    <Button className="w-full">
                      Retour à la connexion
                    </Button>
                  </Link>
                </div>
              )}
              
              {status === 'loading' && (
                <div className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
