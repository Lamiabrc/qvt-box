
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Home, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <Card className="w-full max-w-md border-red-200 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-red-800">Accès non autorisé</CardTitle>
              <CardDescription className="text-red-600">
                Vous n'avez pas les permissions nécessaires pour accéder à cette page.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Link to="/login">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <LogIn className="w-4 h-4 mr-2" />
                    Se connecter
                  </Button>
                </Link>
                
                <Link to="/">
                  <Button 
                    variant="outline" 
                    className="w-full border-red-200 text-red-700 hover:bg-red-50"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Retour à l'accueil
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
