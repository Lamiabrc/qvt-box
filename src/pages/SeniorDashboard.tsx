import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const SeniorDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 relative overflow-hidden">
      <FloatingBubbles />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-700 mb-4">
            Bienvenue dans votre espace Grand-parent
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Partagez vos souvenirs, tissez du lien avec vos petits-enfants, et contribuez à l’harmonie familiale avec QVT Box.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <BookOpen className="w-5 h-5" />
                Journal de Mémoire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Racontez votre histoire et transmettez vos souvenirs aux générations futures.
              </p>
              <Button variant="outline" className="text-orange-700 border-orange-300 hover:bg-orange-50">
                Commencer
              </Button>
            </CardContent>
          </Card>

          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <Calendar className="w-5 h-5" />
                Activités intergénérationnelles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Planifiez des moments privilégiés avec vos petits-enfants autour de jeux, balades ou ateliers.
              </p>
              <Button variant="outline" className="text-orange-700 border-orange-300 hover:bg-orange-50">
                Découvrir
              </Button>
            </CardContent>
          </Card>

          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <Heart className="w-5 h-5" />
                Box Senior du mois
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Une box bien-être et culturelle adaptée à vos besoins et envies du moment.
              </p>
              <Link to="/shop">
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white w-full">
                  Voir la box
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SeniorDashboard;
