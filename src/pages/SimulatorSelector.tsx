
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Heart, 
  Smile,
  ArrowRight,
  Clock,
  Target
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const SimulatorSelector = () => {
  const navigate = useNavigate();

  const simulatorCategories = [
    {
      category: 'Entreprise',
      description: 'Évaluations pour le monde professionnel',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50 border-teal-200',
      simulators: [
        {
          id: 'enterprise-manager',
          title: 'Manager / RH',
          description: 'Évaluez le bien-être de vos équipes',
          icon: Building2,
          route: '/enterprise-manager-simulator',
          duration: '4-5 min',
          target: 'Managers, RH'
        },
        {
          id: 'enterprise-employee',
          title: 'Salarié',
          description: 'Évaluez votre bien-être au travail',
          icon: Users,
          route: '/enterprise-employee-simulator',
          duration: '3-4 min',
          target: 'Salariés'
        }
      ]
    },
    {
      category: 'Famille',
      description: 'Évaluations pour la sphère familiale',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 border-purple-200',
      simulators: [
        {
          id: 'family-parent',
          title: 'Parent',
          description: 'Évaluez votre bien-être parental',
          icon: Heart,
          route: '/family-parent-simulator',
          duration: '3-4 min',
          target: 'Parents'
        },
        {
          id: 'family-teen',
          title: 'Adolescent',
          description: 'Évalue ton bien-être d\'ado',
          icon: Smile,
          route: '/family-teen-simulator',
          duration: '2-3 min',
          target: 'Ados 11-18 ans'
        }
      ]
    }
  ];

  const handleSimulatorSelect = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Simulateurs QVT Box</Badge>
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Choisissez votre évaluation
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto">
            Sélectionnez le simulateur adapté à votre profil pour une évaluation personnalisée 
            de votre bien-être et des recommandations sur mesure.
          </p>
          <div className="flex justify-center items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>2-5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>100% personnalisé</span>
            </div>
          </div>
        </div>

        {/* Simulator Categories */}
        <div className="space-y-16">
          {simulatorCategories.map((category) => (
            <div key={category.category} className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  {category.category}
                </h2>
                <p className="text-lg text-slate-600">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.simulators.map((simulator) => (
                  <Card key={simulator.id} className={`${category.bgColor} hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                    <CardHeader className="text-center pb-4">
                      <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                        <simulator.icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-slate-800 mb-2">
                        {simulator.title}
                      </CardTitle>
                      <CardDescription className="text-base text-gray-600">
                        {simulator.description}
                      </CardDescription>
                      
                      <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{simulator.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{simulator.target}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <Button 
                        onClick={() => handleSimulatorSelect(simulator.route)}
                        className={`w-full ${category.category === 'Entreprise' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-purple-600 hover:bg-purple-700'}`}
                        size="lg"
                      >
                        Commencer l'évaluation
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Pourquoi faire une évaluation ?
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            Nos simulateurs utilisent l'intelligence artificielle pour analyser votre situation 
            et vous proposer des solutions concrètes adaptées à vos besoins spécifiques.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-gray-100"
            onClick={() => navigate('/concept-qvt')}
          >
            En savoir plus sur notre approche
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimulatorSelector;
