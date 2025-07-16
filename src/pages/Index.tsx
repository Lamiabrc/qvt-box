
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Building2, 
  Users, 
  Sparkles, 
  ShoppingBag, 
  Brain, 
  Target,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Zap,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import FloatingBubbles from "../components/FloatingBubbles";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();
  const [selectedUniverse, setSelectedUniverse] = useState<'family' | 'enterprise' | 'independent' | null>(null);

  const universes = [
    {
      id: 'family',
      title: 'Famille',
      description: 'Renforcez les liens familiaux et prévenez les crises',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      features: ['Espace parent & ado', 'Partage émotionnel', 'Box personnalisées', 'Alertes bien-être'],
      route: '/family-portal'
    },
    {
      id: 'enterprise',
      title: 'Entreprise',
      description: 'Optimisez la QVT et prévenez les risques psychosociaux',
      icon: Building2,
      color: 'from-teal-500 to-cyan-500',
      features: ['Dashboard RH', 'Suivi équipes', 'Prévention burn-out', 'Analytics QVT'],
      route: '/enterprise-portal'
    },
    {
      id: 'independent',
      title: 'Indépendant',
      description: 'Votre bien-être personnel, en toute autonomie',
      icon: Sparkles,
      color: 'from-blue-500 to-indigo-500',
      features: ['Suivi personnel', 'IA émotionnelle', 'Box sur-mesure', 'Conseils adaptés'],
      route: '/independent-portal'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'IA Émotionnelle',
      description: 'Bulles attentionnées qui prennent de vos nouvelles et analysent votre bien-être'
    },
    {
      icon: Target,
      title: 'Scoring QVT',
      description: 'Système de notation de 1 (burn-out) à 15 (passion) pour mesurer votre état'
    },
    {
      icon: ShoppingBag,
      title: 'Box Made in France',
      description: 'Produits français personnalisés selon vos besoins émotionnels'
    },
    {
      icon: Shield,
      title: 'Prévention',
      description: 'Anticipez les risques et agissez avant que les problèmes surviennent'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 relative overflow-hidden">
      <FloatingBubbles />
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-teal-600 text-white px-6 py-2 text-lg">
            🇫🇷 Made in France
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              QVT Box
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Plateforme phygitale de bien-être émotionnel et prévention santé mentale
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12">
            Pour familles, entreprises et indépendants • IA émotionnelle • Box personnalisées • Suivi global
          </p>
          
          {!user && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/login">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-4 text-lg">
                  Commencer maintenant
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg">
                Découvrir la démo
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Une approche innovante du bien-être
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-purple-100">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Universe Selection */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Choisissez votre univers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expérience sur mesure selon votre profil et vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {universes.map((universe) => {
              const Icon = universe.icon;
              return (
                <Card 
                  key={universe.id}
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-200 relative overflow-hidden"
                  onClick={() => setSelectedUniverse(universe.id as any)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${universe.color} opacity-5`}></div>
                  <CardHeader className="text-center relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${universe.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-800">{universe.title}</CardTitle>
                    <CardDescription className="text-gray-600">{universe.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-2 mb-6">
                      {universe.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={universe.route}>
                      <Button className={`w-full bg-gradient-to-r ${universe.color} hover:opacity-90 text-white`}>
                        Accéder à {universe.title}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-purple-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1-15</div>
              <p className="text-gray-600">Score QVT</p>
              <p className="text-xs text-gray-500">Burn-out → Passion</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
              <p className="text-gray-600">Made in France</p>
              <p className="text-xs text-gray-500">Produits français</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <p className="text-gray-600">Pays ciblés</p>
              <p className="text-xs text-gray-500">France, Belgique, Suisse</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
              <p className="text-gray-600">IA Émotionnelle</p>
              <p className="text-xs text-gray-500">Suivi permanent</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Prêt à transformer votre bien-être ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez la révolution du bien-être émotionnel avec QVT Box
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/questionnaires">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white">
                <Zap className="w-5 h-5 mr-2" />
                Faire mon bilan
              </Button>
            </Link>
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Découvrir les box
              </Button>
            </Link>
            <Link to="/intelligent-recommendations">
              <Button size="lg" variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50">
                <TrendingUp className="w-5 h-5 mr-2" />
                Recommandations IA
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
