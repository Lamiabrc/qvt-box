
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldX, Home, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const Unauthorized = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <Card className="w-full max-w-md border-red-200 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldX className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-red-800">Accès non autorisé</CardTitle>
              <CardDescription className="text-red-600">
                Vous n'avez pas les permissions nécessaires pour accéder à cette page.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="text-center text-gray-600">
                <p>
                  Cette section est réservée aux utilisateurs avec des permissions spéciales.
                  Contactez votre administrateur si vous pensez qu'il s'agit d'une erreur.
                </p>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button 
                  onClick={() => navigate('/')}
                  className="w-full"
                  variant="outline"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Retour à l'accueil
                </Button>
                
                <Button 
                  onClick={handleSignOut}
                  className="w-full"
                  variant="destructive"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Se déconnecter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
