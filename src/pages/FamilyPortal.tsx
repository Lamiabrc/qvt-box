import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Sparkles, 
  Shield, 
  User,
  Baby,
  Home,
  TrendingUp,
  MessageSquare,
  Calendar,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import MoodWeather from "../components/MoodWeather";
import FloatingBubbles from "../components/FloatingBubbles";

const FamilyPortal = () => {
  const [selectedRole, setSelectedRole] = useState<'parent' | 'teen' | null>(null);

  // Météo familiale simulée
  const familyWeather = {
    harmony: 72,
    communication: 'Bonne',
    challenges: 1,
    familyMood: 'Sereine',
    weekHighlights: [
      'Soirée jeux en famille réussie',
      'Discussion constructive sur les écrans',
      'Sortie nature ensemble'
    ]
  };

  const roleCards = [
    {
      role: 'parent',
      title: 'Parent',
      description: 'Accompagnez votre ado et renforcez les liens familiaux',
      icon: User,
      color: 'from-purple-500 to-pink-500',
      features: ['Bilan familial', 'Conseils éducatifs', 'Box Parent mensuelle'],
      route: '/parent-dashboard'
    },
    {
      role: 'teen',
      title: 'Ado',
      description: 'Ton espace privé et sécurisé pour grandir sereinement',
      icon: Sparkles,
      color: 'from-cyan-500 to-blue-500',
      features: ['Espace privé', 'Alerte rapide', 'Teen Box mensuelle'],
      route: '/teens-home'
    }
  ];

  if (selectedRole) {
    const selectedCard = roleCards.find(card => card.role === selectedRole);
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 relative overflow-hidden">
        <FloatingBubbles />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Button 
                variant="outline" 
                onClick={() => setSelectedRole(null)}
                className="mb-4"
              >
                ← Retour au portail famille
              </Button>
              <h1 className="text-4xl font-bold text-purple-800 mb-4">
                Espace {selectedCard?.title}
              </h1>
              <p className="text-xl text-gray-600">{selectedCard?.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <MoodWeather userType={selectedRole} />
              
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-purple-600" />
                    Mes outils
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {selectedCard?.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-pink-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link to={selectedCard?.route || '/parent-dashboard'}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
                  Accéder à mon espace
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Portail Famille</Badge>
          <h1 className="text-5xl font-bold text-purple-800 mb-6">
            <Heart className="w-12 h-12 inline-block mr-4" />
            QVTeen Box Famille
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre portail famille - Renforcez les liens, prévenez les crises, grandissez ensemble
          </p>
        </div>

        {/* Météo Familiale */}
        <Card className="mb-12 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-purple-800">
              🏠 Météo de la Famille
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{familyWeather.harmony}%</div>
                <p className="text-sm text-gray-600">Harmonie familiale</p>
              </div>
              <div>
                <Badge className="mb-2 bg-green-100 text-green-800">
                  {familyWeather.communication}
                </Badge>
                <p className="text-sm text-gray-600">Communication</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-orange-500" />
                  <span className="text-xl font-bold text-orange-600">{familyWeather.challenges}</span>
                </div>
                <p className="text-sm text-gray-600">Défis en cours</p>
              </div>
              <div>
                <div className="text-lg font-semibold text-purple-600 mb-2">{familyWeather.familyMood}</div>
                <p className="text-sm text-gray-600">Ambiance générale</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 text-center">Temps forts de la semaine</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {familyWeather.weekHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Heart className="w-4 h-4 text-pink-500 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sélection du rôle */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Qui êtes-vous dans la famille ?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {roleCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card 
                  key={card.role}
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-200"
                  onClick={() => setSelectedRole(card.role as 'parent' | 'teen')}
                >
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-800">{card.title}</CardTitle>
                    <p className="text-gray-600">{card.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-pink-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full bg-gradient-to-r ${card.color} hover:opacity-90 text-white`}>
                      Accéder
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Actions rapides */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Actions rapides famille</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/intelligent-recommendations">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                <TrendingUp className="w-4 h-4 mr-2" />
                Conseils IA
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                <Home className="w-4 h-4 mr-2" />
                Box Famille
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                <MessageSquare className="w-4 h-4 mr-2" />
                Support Famille
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyPortal;
