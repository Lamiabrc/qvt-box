
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, BarChart3, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensAIEvaluation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800">IA d'Évaluation</Badge>
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            <Brain className="w-12 h-12 inline-block mr-4" />
            Mon Analyse Personnalisée
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvre ton profil bien-être grâce à notre intelligence artificielle
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <Sparkles className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle className="text-purple-800">Évaluation Rapide</CardTitle>
              <CardDescription>Analyse de ton bien-être en 5 minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Commencer l'évaluation
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-indigo-200">
            <CardHeader>
              <BarChart3 className="w-12 h-12 text-indigo-600 mb-4" />
              <CardTitle className="text-indigo-800">Mes Résultats</CardTitle>
              <CardDescription>Consulte tes analyses précédentes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full border-indigo-300 text-indigo-700">
                Voir mes résultats
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensAIEvaluation;
