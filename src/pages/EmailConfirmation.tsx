
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import FloatingBubbles from "../components/FloatingBubbles";

const EmailConfirmation = () => {
  const navigate = useNavigate();

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
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-teal-800">
                Vérifiez votre email
              </CardTitle>
              <CardDescription className="text-teal-600">
                Nous avons envoyé un lien de confirmation à votre adresse email
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Étapes suivantes :
                  </h3>
                  <ol className="text-sm text-blue-800 space-y-1">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">1.</span>
                      Consultez votre boîte de réception
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">2.</span>
                      Cliquez sur le lien de confirmation
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">3.</span>
                      Votre compte sera activé automatiquement
                    </li>
                  </ol>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Vous ne voyez pas l'email ? Vérifiez vos spams ou contactez-nous.
                  </p>
                  
                  <div className="flex flex-col gap-2">
                    <Button 
                      onClick={() => navigate('/login')}
                      className="w-full bg-teal-600 hover:bg-teal-700 shadow-lg"
                    >
                      Aller à la connexion
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={() => navigate('/contact')}
                      className="w-full border-teal-200 hover:bg-teal-50"
                    >
                      Contacter le support
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
