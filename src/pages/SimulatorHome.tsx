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
  Target,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const SimulatorHome = () => {
  const navigate = useNavigate();

  const simulators = [
    {
      id: 'enterprise',
      title: 'Simulateurs Entreprise',
      description: 'Évaluations spécialisées pour managers et salariés',
      icon: Building2,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50 border-teal-200',
      textColor: 'text-teal-800',
      features: [
        'Version Manager : Analyse d\'équipe complète',
        'Version Salarié : Bien-être personnel + burnout',
        'Détection précoce des RPS',
        'Recommandations IA personnalisées',
        'Rapport PDF détaillé',
        'Suivi évolution dans le temps'
      ],
      duration: '3-5 min',
      participants: 'Managers, RH, Salariés',
      route: '/simulator-selector',
      stats: { users: '2.3k+', satisfaction: '96%', accuracy: '94%' }
    },
    {
      id: 'family',
      title: 'Simulateurs Famille',
      description: 'Évaluations adaptées pour parents et adolescents',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-800',
      features: [
        'Version Parent : Bien-être parental + stress',
        'Version Ado : Check-up jeune + anxiété',
        'Communication parent-enfant analysée',
        'Gestion du temps d\'écran évaluée',
        'Conseils famille personnalisés',
        'Alerte si situation critique'
      ],
      duration: '2-4 min',
      participants: 'Parents, Ados 11-18 ans',
      route: '/simulator-selector',
      stats: { users: '1.8k+', satisfaction: '98%', accuracy: '92%' }
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Manager RH",
      avatar: "👩‍💼",
      rating: 5,
      comment: "Les simulateurs ont révolutionné notre approche QVT. Détection précoce des risques et solutions concrètes."
    },
    {
      name: "Thomas L.",
      role: "Papa de 2 ados",
      avatar: "👨‍👧‍👦",
      rating: 5,
      comment: "Enfin un outil qui nous aide à mieux comprendre nos ados. Résultats très parlants et conseils utiles."
    },
    {
      name: "Emma D.",
      role: "Salariée",
      avatar: "👩‍💻",
      rating: 4,
      comment: "Super simple à utiliser, résultats détaillés. J'ai pu identifier mes points de stress et agir."
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
          <Badge className="mb-4 bg-blue-100 text-blue-800 soap-bubble-effect">Simulateurs QVT Box</Badge>
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Évaluez votre bien-être en 2 minutes
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto">
            Nos simulateurs intelligents analysent votre situation et vous proposent 
            des solutions personnalisées. Plus de 4000 utilisateurs nous font confiance.
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-slate-500 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Rapide et gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>IA émotionnelle avancée</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>Personnalisé par profil</span>
            </div>
          </div>
          
          {/* Global Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.1k+</div>
              <div className="text-sm text-gray-600">Évaluations réalisées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">97%</div>
              <div className="text-sm text-gray-600">Satisfaction moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">93%</div>
              <div className="text-sm text-gray-600">Précision IA</div>
            </div>
          </div>
        </div>

        {/* Simulators Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {simulators.map((simulator) => (
            <Card key={simulator.id} className={`${simulator.bgColor} hover:shadow-2xl transition-all duration-300 hover:scale-105 soap-bubble-effect`}>
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 bg-gradient-to-br ${simulator.color} rounded-2xl flex items-center justify-center mx-auto mb-6 soap-bubble-effect`}>
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

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                  <div>
                    <div className="font-bold text-sm">{simulator.stats.users}</div>
                    <div className="text-xs text-gray-500">Utilisateurs</div>
                  </div>
                  <div>
                    <div className="font-bold text-sm">{simulator.stats.satisfaction}</div>
                    <div className="text-xs text-gray-500">Satisfaction</div>
                  </div>
                  <div>
                    <div className="font-bold text-sm">{simulator.stats.accuracy}</div>
                    <div className="text-xs text-gray-500">Précision</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Fonctionnalités avancées :</h4>
                  <ul className="space-y-2">
                    {simulator.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <Button 
                  onClick={() => handleSimulatorSelect(simulator.route)}
                  className={`w-full ${simulator.id === 'enterprise' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-purple-600 hover:bg-purple-700'} soap-bubble-effect`}
                  size="lg"
                >
                  Commencer l'évaluation gratuite
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Ce que disent nos utilisateurs
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="soap-bubble-effect hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Overview */}
        <Card className="max-w-4xl mx-auto bg-white/80 border-slate-200 soap-bubble-effect">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-800">
              Comment fonctionnent nos simulateurs ?
            </CardTitle>
            <CardDescription>
              Un processus simple et efficace en 4 étapes, alimenté par l'IA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold soap-bubble-effect">
                  1
                </div>
                <h3 className="font-semibold mb-2">Questions ciblées</h3>
                <p className="text-sm text-gray-600">10-15 questions adaptées à votre profil et situation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold soap-bubble-effect">
                  2
                </div>
                <h3 className="font-semibold mb-2">Analyse IA avancée</h3>
                <p className="text-sm text-gray-600">Notre IA analyse 50+ indicateurs émotionnels et comportementaux</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold soap-bubble-effect">
                  3
                </div>
                <h3 className="font-semibold mb-2">Score personnalisé</h3>
                <p className="text-sm text-gray-600">Score détaillé avec niveau de risque et points d'attention</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold soap-bubble-effect">
                  4
                </div>
                <h3 className="font-semibold mb-2">Plan d'action</h3>
                <p className="text-sm text-gray-600">Recommandations concrètes et ressources personnalisées</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SimulatorHome;
