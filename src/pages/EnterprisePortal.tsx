
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Shield, 
  UserCheck,
  Settings,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import MoodWeather from "../components/MoodWeather";
import FloatingBubbles from "../components/FloatingBubbles";

const EnterprisePortal = () => {
  const [selectedRole, setSelectedRole] = useState<'employee' | 'manager' | null>(null);

  // Météo d'entreprise simulée
  const enterpriseWeather = {
    globalMood: 68,
    riskLevel: 'Modéré',
    activeAlerts: 2,
    teamHealth: 'Bonne',
    trends: {
      wellbeing: '+5%',
      engagement: '+12%',
      productivity: '+8%'
    }
  };

  const roleCards = [
    {
      role: 'employee',
      title: 'Salarié',
      description: 'Accédez à votre espace personnel et évaluez votre bien-être',
      icon: UserCheck,
      color: 'from-blue-500 to-cyan-500',
      features: ['Bilan personnel', 'Activités bien-être', 'Recommandations IA'],
      route: '/employee-dashboard'
    },
    {
      role: 'manager',
      title: 'Manager',
      description: 'Gérez le bien-être de votre équipe et accédez aux analytics',
      icon: Users,
      color: 'from-teal-500 to-green-500',
      features: ['Évaluation équipe', 'Tableaux de bord', 'Prévention risques'],
      route: '/team-leader-dashboard'
    }
  ];

  if (selectedRole) {
    const selectedCard = roleCards.find(card => card.role === selectedRole);
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        <FloatingBubbles />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Button 
                variant="outline" 
                onClick={() => setSelectedRole(null)}
                className="mb-4"
              >
                ← Retour au portail entreprise
              </Button>
              <h1 className="text-4xl font-bold text-teal-800 mb-4">
                Espace {selectedCard?.title}
              </h1>
              <p className="text-xl text-gray-600">{selectedCard?.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <MoodWeather userType={selectedRole === 'manager' ? 'manager' : 'employee'} />
              
              <Card className="border-teal-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-teal-600" />
                    Accès rapides
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {selectedCard?.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link to={selectedCard?.route || '/employee-dashboard'}>
                <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 text-lg">
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-teal-100 text-teal-800">Portail Entreprise</Badge>
          <h1 className="text-5xl font-bold text-teal-800 mb-6">
            <Building2 className="w-12 h-12 inline-block mr-4" />
            QVT Box Entreprise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre portail de bien-être professionnel - Prévenez les risques, optimisez la performance
          </p>
        </div>

        {/* Météo Entreprise */}
        <Card className="mb-12 border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-teal-800">
              🌤️ Météo de l'Entreprise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">{enterpriseWeather.globalMood}%</div>
                <p className="text-sm text-gray-600">Bien-être global</p>
              </div>
              <div>
                <Badge className={`mb-2 ${enterpriseWeather.riskLevel === 'Faible' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                  {enterpriseWeather.riskLevel}
                </Badge>
                <p className="text-sm text-gray-600">Niveau de risque</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <span className="text-xl font-bold text-orange-600">{enterpriseWeather.activeAlerts}</span>
                </div>
                <p className="text-sm text-gray-600">Alertes actives</p>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-600 mb-2">{enterpriseWeather.teamHealth}</div>
                <p className="text-sm text-gray-600">Santé des équipes</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-teal-200">
              <h4 className="font-semibold text-teal-800 mb-3 text-center">Tendances ce mois-ci</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-green-600 font-semibold">{enterpriseWeather.trends.wellbeing}</div>
                  <p className="text-xs text-gray-600">Bien-être</p>
                </div>
                <div>
                  <div className="text-green-600 font-semibold">{enterpriseWeather.trends.engagement}</div>
                  <p className="text-xs text-gray-600">Engagement</p>
                </div>
                <div>
                  <div className="text-green-600 font-semibold">{enterpriseWeather.trends.productivity}</div>
                  <p className="text-xs text-gray-600">Productivité</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sélection du rôle */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Choisissez votre profil
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {roleCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card 
                  key={card.role}
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-teal-200"
                  onClick={() => setSelectedRole(card.role as 'employee' | 'manager')}
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
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white">
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
            <Link to="/intelligent-recommendations">
              <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50">
                <TrendingUp className="w-4 h-4 mr-2" />
                Recommandations IA
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50">
                <Shield className="w-4 h-4 mr-2" />
                Boutique Box
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50">
                <Settings className="w-4 h-4 mr-2" />
                Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePortal;
