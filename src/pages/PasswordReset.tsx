
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import FloatingBubbles from "../components/FloatingBubbles";

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await resetPassword(email);
      
      if (error) {
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite. Veuillez réessayer.",
          variant: "destructive"
        });
      } else {
        setIsEmailSent(true);
        toast({
          title: "Email envoyé",
          description: "Vérifiez votre boîte de réception pour réinitialiser votre mot de passe."
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <Card className="w-full max-w-md border-teal-200 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-teal-800">
                {isEmailSent ? 'Email envoyé !' : 'Réinitialiser le mot de passe'}
              </CardTitle>
              <CardDescription className="text-teal-600">
                {isEmailSent 
                  ? 'Vérifiez votre boîte de réception' 
                  : 'Entrez votre email pour recevoir un lien de réinitialisation'
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {!isEmailSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading || !email}
                  >
                    {isLoading ? "Envoi en cours..." : "Envoyer le lien"}
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <p className="text-gray-600">
                    Un email avec les instructions de réinitialisation a été envoyé à <strong>{email}</strong>
                  </p>
                  <Button onClick={() => setIsEmailSent(false)} variant="outline">
                    Renvoyer l'email
                  </Button>
                </div>
              )}
              
              <div className="mt-6 text-center">
                <Button 
                  variant="link" 
                  onClick={() => navigate('/login')}
                  className="text-teal-600 hover:text-teal-800"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à la connexion
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
