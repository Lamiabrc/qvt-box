
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  Users, 
  Building2,
  Home,
  ArrowRight,
  Clock,
  Target
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const SimulatorHome = () => {
  const navigate = useNavigate();

  const simulators = [
    {
      id: 'enterprise',
      title: 'Simulateur Entreprise',
      description: 'Évaluez le bien-être de vos équipes et identifiez les risques psychosociaux',
      icon: Building2,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50 border-teal-200',
      textColor: 'text-teal-800',
      features: [
        'Analyse QVT par service',
        'Détection précoce du burn-out',
        'Recommandations personnalisées',
        'Dashboard RH complet'
      ],
      duration: '3-5 min',
      participants: 'RH, Managers, Salariés'
    },
    {
      id: 'family',
      title: 'Simulateur Famille',
      description: 'Diagnostic familial pour améliorer la communication et le bien-être de tous',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-800',
      features: [
        'Évaluation climat familial',
        'Gestion temps d\'écran ados',
        'Communication parent-enfant',
        'Recommandations d\'activités'
      ],
      duration: '2-3 min',
      participants: 'Parents, Ados 11-18 ans'
    }
  ];

  const handleSimulatorSelect = (simulatorId: string) => {
    if (simulatorId === 'enterprise') {
      navigate('/simulator-enterprise');
    } else if (simulatorId === 'family') {
      navigate('/family-simulator');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Simulateurs QVT Box</Badge>
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Évaluez votre bien-être en 2 minutes
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto">
            Nos simulateurs intelligents analysent votre situation et vous proposent 
            des solutions personnalisées pour améliorer votre qualité de vie.
          </p>
          <div className="flex justify-center items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Rapide et gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>IA émotionnelle</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>Recommandations précises</span>
            </div>
          </div>
        </div>

        {/* Simulators Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {simulators.map((simulator) => (
            <Card key={simulator.id} className={`${simulator.bgColor} hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 bg-gradient-to-br ${simulator.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <simulator.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className={`text-2xl ${simulator.textColor} mb-2`}>
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
                    <span>{simulator.participants}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Ce que vous découvrirez :</h4>
                  <ul className="space-y-2">
                    {simulator.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <Button 
                  onClick={() => handleSimulatorSelect(simulator.id)}
                  className={`w-full ${simulator.id === 'enterprise' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-purple-600 hover:bg-purple-700'}`}
                  size="lg"
                >
                  Commencer l'évaluation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <Card className="max-w-4xl mx-auto bg-white/80 border-slate-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-800">
              Comment fonctionnent nos simulateurs ?
            </CardTitle>
            <CardDescription>
              Un processus simple et efficace en 4 étapes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Questions ciblées</h3>
                <p className="text-sm text-gray-600">Répondez à quelques questions adaptées à votre situation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Analyse IA</h3>
                <p className="text-sm text-gray-600">Notre intelligence artificielle analyse vos réponses</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Score personnalisé</h3>
                <p className="text-sm text-gray-600">Obtenez votre score de bien-être détaillé</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Recommandations</h3>
                <p className="text-sm text-gray-600">Recevez des conseils personnalisés et actionables</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SimulatorHome;
