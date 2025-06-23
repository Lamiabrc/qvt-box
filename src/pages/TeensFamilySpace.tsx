
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, MessageSquare, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensFamilySpace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-violet-100 text-violet-800">Espace Famille</Badge>
          <h1 className="text-4xl font-bold text-violet-800 mb-4">
            <Users className="w-12 h-12 inline-block mr-4" />
            Notre Espace Partagé
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Renforce les liens avec ta famille dans un espace bienveillant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-violet-200">
            <CardHeader>
              <MessageSquare className="w-12 h-12 text-violet-600 mb-4" />
              <CardTitle className="text-violet-800">Discussions</CardTitle>
              <CardDescription>Échange avec ta famille en toute sécurité</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <Heart className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle className="text-purple-800">Moments Partagés</CardTitle>
              <CardDescription>Planifiez des activités ensemble</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-pink-200">
            <CardHeader>
              <Camera className="w-12 h-12 text-pink-600 mb-4" />
              <CardTitle className="text-pink-800">Souvenirs</CardTitle>
              <CardDescription>Partagez vos plus beaux moments</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-violet-300 text-violet-700 hover:bg-violet-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensFamilySpace;
