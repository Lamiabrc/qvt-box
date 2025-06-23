
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Palette, Sparkles, User } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensCustomization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800">Personnalisation</Badge>
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            <Settings className="w-12 h-12 inline-block mr-4" />
            Customise ton Espace
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rends ton espace unique à ton image
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-indigo-200">
            <CardHeader>
              <Palette className="w-12 h-12 text-indigo-600 mb-4" />
              <CardTitle className="text-indigo-800">Thèmes</CardTitle>
              <CardDescription>Choisis tes couleurs préférées</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <User className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle className="text-purple-800">Avatar</CardTitle>
              <CardDescription>Personnalise ton avatar</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-pink-200">
            <CardHeader>
              <Sparkles className="w-12 h-12 text-pink-600 mb-4" />
              <CardTitle className="text-pink-800">Badges</CardTitle>
              <CardDescription>Débloquez des badges uniques</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensCustomization;
