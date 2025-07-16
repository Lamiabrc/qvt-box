
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  User, 
  TrendingUp, 
  Brain, 
  Heart,
  Target,
  ShoppingBag,
  MessageSquare,
  Calendar,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import MoodWeather from "../components/MoodWeather";
import FloatingBubbles from "../components/FloatingBubbles";

const IndependentPortal = () => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  // Météo personnelle simulée
  const personalWeather = {
    globalMood: 74,
    stressLevel: 'Modéré',
    energyLevel: 'Bon',
    motivation: 'Élevée',
    recentProgress: [
      'Amélioration du sommeil',
      'Réduction du stress',
      'Meilleur équilibre'
    ]
  };

  const quickActions = [
    {
      id: 'bilan',
      title: 'Mon Bilan Bien-être',
      description: 'Évaluez votre état émotionnel actuel',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      route: '/questionnaires'
    },
    {
      id: 'recommendations',
      title: 'Recommandations IA',
      description: 'Conseils personnalisés par notre IA',
      icon: Brain,
      color: 'from-teal-500 to-cyan-500',
      route: '/intelligent-recommendations'
    },
    {
      id: 'shop',
      title: 'Ma Box Personnalisée',
      description: 'Découvrez les box adaptées à vos besoins',
      icon: ShoppingBag,
      color: 'from-blue-500 to-indigo-500',
      route: '/shop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Espace Indépendant</Badge>
          <h1 className="text-5xl font-bold text-blue-800 mb-6">
            <Sparkles className="w-12 h-12 inline-block mr-4" />
            Votre Bien-être Personnel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre espace personnel de bien-être émotionnel - Autonomie, personnalisation, accompagnement IA
          </p>
        </div>

        {/* Météo Personnelle */}
        <Card className="mb-12 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-blue-800">
              🌤️ Votre Météo Bien-être
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{personalWeather.globalMood}%</div>
                <p className="text-sm text-gray-600">Bien-être global</p>
              </div>
              <div>
                <Badge className="mb-2 bg-orange-100 text-orange-800">
                  {personalWeather.stressLevel}
                </Badge>
                <p className="text-sm text-gray-600">Niveau de stress</p>
              </div>
              <div>
                <Badge className="mb-2 bg-green-100 text-green-800">
                  {personalWeather.energyLevel}
                </Badge>
                <p className="text-sm text-gray-600">Niveau d'énergie</p>
              </div>
              <div>
                <Badge className="mb-2 bg-purple-100 text-purple-800">
                  {personalWeather.motivation}
                </Badge>
                <p className="text-sm text-gray-600">Motivation</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 text-center">Vos progrès récents</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {personalWeather.recentProgress.map((progress, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Heart className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{progress}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions Rapides */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Vos outils bien-être
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Card 
                  key={action.id}
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200"
                  onClick={() => setSelectedAction(action.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${action.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{action.title}</CardTitle>
                    <p className="text-gray-600">{action.description}</p>
                  </CardHeader>
                  <CardContent>
                    <Link to={action.route}>
                      <Button className={`w-full bg-gradient-to-r ${action.color} hover:opacity-90 text-white`}>
                        Accéder
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bulle IA Attentionnée */}
        <Card className="max-w-3xl mx-auto mb-12 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Brain className="w-6 h-6" />
              Votre Bulle IA Attentionnée
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-4">
                "Bonjour ! J'ai remarqué que votre niveau de stress est modéré aujourd'hui. 
                Souhaitez-vous que je vous propose quelques exercices de relaxation personnalisés ?"
              </p>
              <div className="flex gap-3">
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Oui, aidez-moi
                </Button>
                <Button size="sm" variant="outline" className="border-purple-300 text-purple-700">
                  Plus tard
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/40 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Conseil du jour</h4>
                <p className="text-sm text-gray-700">Prenez 5 minutes pour une respiration consciente</p>
              </div>
              <div className="bg-white/40 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Objectif de la semaine</h4>
                <p className="text-sm text-gray-700">Améliorer la qualité de votre sommeil</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation rapide */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Explorer plus</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/questionnaires">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Target className="w-4 h-4 mr-2" />
                Nouveau bilan
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-50">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Boutique box
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                <MessageSquare className="w-4 h-4 mr-2" />
                Support personnel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndependentPortal;
