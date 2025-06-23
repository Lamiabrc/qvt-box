
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Gamepad2, Music, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensFunSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-yellow-100 text-yellow-800">Solutions Fun</Badge>
          <h1 className="text-4xl font-bold text-yellow-800 mb-4">
            <Sparkles className="w-12 h-12 inline-block mr-4" />
            Activités Bien-être
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvre des activités ludiques pour améliorer ton bien-être
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-yellow-200">
            <CardHeader>
              <Gamepad2 className="w-12 h-12 text-yellow-600 mb-4" />
              <CardTitle className="text-yellow-800">Mini-jeux</CardTitle>
              <CardDescription>Jeux relaxants et anti-stress</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-orange-200">
            <CardHeader>
              <Music className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-orange-800">Méditation</CardTitle>
              <CardDescription>Exercices de relaxation guidée</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-red-200">
            <CardHeader>
              <Palette className="w-12 h-12 text-red-600 mb-4" />
              <CardTitle className="text-red-800">Art-thérapie</CardTitle>
              <CardDescription>Activités créatives pour t'exprimer</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-yellow-300 text-yellow-700 hover:bg-yellow-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensFunSolutions;
