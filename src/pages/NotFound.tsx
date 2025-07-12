
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <Card className="w-full max-w-md border-teal-200 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">404</span>
              </div>
              <CardTitle className="text-2xl text-teal-800">Page non trouvée</CardTitle>
              <CardDescription className="text-teal-600">
                La page que vous recherchez n'existe pas ou a été déplacée.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Link to="/">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <Home className="w-4 h-4 mr-2" />
                    Retour à l'accueil
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  onClick={() => navigate(-1)}
                  className="w-full border-teal-200 text-teal-700 hover:bg-teal-50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Page précédente
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
