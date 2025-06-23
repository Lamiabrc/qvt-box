
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Phone, MessageSquare, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensQuickAlert = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-800">Alerte Rapide</Badge>
          <h1 className="text-4xl font-bold text-red-800 mb-4">
            <AlertTriangle className="w-12 h-12 inline-block mr-4" />
            Besoin d'Aide ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tu n'es jamais seul(e). Contacte immédiatement quelqu'un qui peut t'aider
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-red-200 bg-red-50">
            <CardHeader>
              <Phone className="w-12 h-12 text-red-600 mb-4" />
              <CardTitle className="text-red-800">Urgence</CardTitle>
              <CardDescription>Numéro d'urgence national</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Appeler le 3114
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-orange-200">
            <CardHeader>
              <MessageSquare className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-orange-800">Chat d'Aide</CardTitle>
              <CardDescription>Discute avec un professionnel</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Ouvrir le chat
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-yellow-200">
            <CardHeader>
              <Heart className="w-12 h-12 text-yellow-600 mb-4" />
              <CardTitle className="text-yellow-800">Famille</CardTitle>
              <CardDescription>Contacter tes parents</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                Alerter famille
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensQuickAlert;
