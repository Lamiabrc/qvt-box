
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Shield, 
  Brain,
  Sparkles,
  Calendar,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";

const Famille = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section avec image */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
            <img 
              src="/lovable-uploads/99f6252d-1cb0-42a7-9b79-3930f5264417.png" 
              alt="Famille heureuse" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8">
            <Badge className="mb-4 bg-purple-100 text-purple-800">QVTeen Box Famille</Badge>
            <h1 className="text-5xl font-bold text-purple-800 mb-6">
              Espace Famille Connecté
            </h1>
            <p className="text-xl text-purple-600 mb-8 max-w-4xl mx-auto">
              Un espace d'expression et de régulation émotionnelle pour les ados et leurs parents.
              Créer du lien intergénérationnel et favoriser le dialogue en famille.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Commencer l'aventure famille
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-purple-300 text-purple-700">
                Découvrir les fonctionnalités
              </Button>
            </div>
          </div>
        </div>

        {/* Family Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <img 
                src="/lovable-uploads/15bdba5d-c57a-47fa-b8a1-e9c2168b32fb.png" 
                alt="Bien-être" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">Mood Tracker Familial</CardTitle>
              <CardDescription className="text-gray-600">
                Suivi de l'humeur pour chaque membre de la famille
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-sm text-gray-700">
                Un outil intergénérationnel pour comprendre les émotions de chacun et créer de la bienveillance.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-violet-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">SafeZone Ados</CardTitle>
              <CardDescription className="text-gray-600">
                Espace personnel confidentiel et sécurisé
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Loin des réseaux sociaux, un lieu d'expression libre pour les adolescents.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">Profils Multiples</CardTitle>
              <CardDescription className="text-gray-600">
                Parent, ado, parrain, tuteur...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Chaque membre de la famille a son propre espace personnalisé.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">Diagnostic Rapide</CardTitle>
              <CardDescription className="text-gray-600">
                Évaluation familiale en 2 minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Charge mentale parentale, isolement ado, dépendance numérique.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">Recommandations IA</CardTitle>
              <CardDescription className="text-gray-600">
                Activités personnalisées
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Défis parent-ado, moments de reconnexion, activités apaisantes.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">Rituel Famille</CardTitle>
              <CardDescription className="text-gray-600">
                Moments programmés ensemble
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Planification d'activités bienveillantes selon l'état émotionnel global.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="/lovable-uploads/c06535ca-3da6-476e-8686-9908c0725a0f.png" 
              alt="Joie famille" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Rejoignez l'Aventure Famille
            </h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
              25€/famille/mois pour transformer vos relations familiales
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Commencer maintenant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Famille;
