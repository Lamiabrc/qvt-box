
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  User, 
  Shield,
  ArrowRight,
  Home,
  UserCheck,
  Baby,
  Crown
} from "lucide-react";
import { Link } from "react-router-dom";
import MoodWeather from "../components/MoodWeather";
import FloatingBubbles from "../components/FloatingBubbles";

const FamilyPortal = () => {
  const [selectedRole, setSelectedRole] = useState<'parent' | 'teen' | 'manager' | null>(null);

  const roleCards = [
    {
      role: 'parent',
      title: 'Parent / Référent',
      description: 'Gérez le bien-être familial et accédez aux outils parentaux',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      features: ['Suivi familial', 'Outils parentaux', 'Recommandations famille'],
      route: '/parent-dashboard'
    },
    {
      role: 'teen',
      title: 'Adolescent',
      description: 'Votre espace personnel pour exprimer et gérer vos émotions',
      icon: User,
      color: 'from-purple-500 to-indigo-500',
      features: ['Espace personnel', 'Journal émotionnel', 'Activités bien-être'],
      route: '/teens-home'
    },
    {
      role: 'manager',
      title: 'Manager Familial',
      description: 'Vue d\'ensemble et gestion avancée de l\'espace famille',
      icon: Crown,
      color: 'from-amber-500 to-orange-500',
      features: ['Dashboard famille', 'Analytics', 'Gestion membres'],
      route: '/family-manager-dashboard'
    }
  ];

  if (selectedRole) {
    const selectedCard = roleCards.find(card => card.role === selectedRole);
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden pt-16">
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
              <MoodWeather userType="parent" />
              
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-600" />
                    Accès rapides
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {selectedCard?.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-4">
              <Link to={selectedCard?.route || '/famille'}>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
                  Accéder à mon espace
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <div className="mt-4">
                <Link to="/login">
                  <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Se connecter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden pt-16">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Portail Famille</Badge>
          <h1 className="text-5xl font-bold text-purple-800 mb-6">
            <Heart className="w-12 h-12 inline-block mr-4" />
            QVT Box Famille
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre espace familial de bien-être - Grandir ensemble dans la sérénité
          </p>
        </div>

        {/* Sélection du rôle */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Choisissez votre profil
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {roleCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card 
                  key={card.role}
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-200"
                  onClick={() => setSelectedRole(card.role as 'parent' | 'teen' | 'manager')}
                >
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-800">{card.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
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
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Actions rapides</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/simulator-home">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                <Baby className="w-4 h-4 mr-2" />
                Simulateurs famille
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                <Heart className="w-4 h-4 mr-2" />
                Boutique Box
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <UserCheck className="w-4 h-4 mr-2" />
                Se connecter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyPortal;
