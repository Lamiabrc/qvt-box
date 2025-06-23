
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, User, Settings, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensPersonalSpace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Espace Personnel</Badge>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            <Shield className="w-12 h-12 inline-block mr-4" />
            Mon Espace Privé
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ton espace 100% sécurisé où tu peux être toi-même en toute tranquillité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-blue-200">
            <CardHeader>
              <User className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-blue-800">Mon Profil</CardTitle>
              <CardDescription>Personnalise ton profil et tes informations</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <Heart className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle className="text-purple-800">Mes Humeurs</CardTitle>
              <CardDescription>Historique de tes humeurs et émotions</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-pink-200">
            <CardHeader>
              <Settings className="w-12 h-12 text-pink-600 mb-4" />
              <CardTitle className="text-pink-800">Paramètres</CardTitle>
              <CardDescription>Configure ton espace selon tes préférences</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensPersonalSpace;
