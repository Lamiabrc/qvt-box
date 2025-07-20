import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Heart, ArrowRight, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingBubbles from '@/components/FloatingBubbles';

const SimulatorHub = () => {
  const enterpriseSimulators = [
    {
      title: "Évaluation Managériale",
      description: "Analysez vos compétences de management et obtenez des recommandations personnalisées",
      icon: Target,
      color: "from-qvt-turquoise to-qvt-glacier",
      link: "/enterprise-manager-simulator",
      duration: "15-20 min",
      priority: "high"
    },
    {
      title: "Bien-être Employé",
      description: "Évaluez votre bien-être au travail et découvrez des solutions adaptées",
      icon: Heart,
      color: "from-qvt-glacier to-qvt-dark",
      link: "/enterprise-employee-simulator",
      duration: "10-15 min",
      priority: "high"
    },
    {
      title: "Diagnostic Équipe",
      description: "Analysez la dynamique de votre équipe et identifiez les axes d'amélioration",
      icon: Users,
      color: "from-qvt-dark to-qvt-turquoise",
      link: "/enterprise-simulator",
      duration: "20-25 min",
      priority: "medium"
    }
  ];

  const complementarySimulators = [
    {
      title: "Équilibre Familial",
      description: "Harmonisez vie professionnelle et familiale",
      icon: Heart,
      color: "from-pink-400 to-purple-500",
      link: "/family-simulator",
      duration: "12-18 min",
      priority: "low"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-qvt-bubble via-qvt-off-white to-qvt-glacier/20 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-qvt-turquoise text-white">Simulateurs QVT</Badge>
          <h1 className="text-4xl font-bold text-qvt-dark mb-6">
            Évaluez et Améliorez votre QVT
          </h1>
          <p className="text-xl text-qvt-dark/70 mb-8 max-w-3xl mx-auto">
            Découvrez nos outils d'évaluation spécialisés pour diagnostiquer et améliorer 
            la qualité de vie au travail de vos équipes et collaborateurs.
          </p>
        </div>

        {/* Simulateurs Entreprise - Priorité */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-6 h-6 text-qvt-turquoise" />
            <h2 className="text-2xl font-bold text-qvt-dark">Solutions Entreprise</h2>
            <Badge variant="secondary" className="bg-qvt-turquoise text-white">Priorité</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseSimulators.map((simulator, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-qvt-turquoise/30">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${simulator.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <simulator.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-qvt-dark">{simulator.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">{simulator.duration}</Badge>
                    <Badge 
                      variant={simulator.priority === 'high' ? 'default' : 'secondary'}
                      className={simulator.priority === 'high' ? 'bg-qvt-turquoise text-white' : ''}
                    >
                      {simulator.priority === 'high' ? 'Recommandé' : 'Optionnel'}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-qvt-dark/70">{simulator.description}</p>
                  
                  <Link to={simulator.link}>
                    <Button className={`w-full bg-gradient-to-r ${simulator.color} hover:opacity-90 text-white group-hover:scale-105 transition-transform duration-300`}>
                      Commencer l'évaluation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Simulateurs Complémentaires */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-qvt-dark" />
            <h2 className="text-2xl font-bold text-qvt-dark">Solutions Complémentaires</h2>
            <Badge variant="outline">Optionnel</Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complementarySimulators.map((simulator, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 bg-gradient-to-br ${simulator.color} rounded-xl flex items-center justify-center mb-3`}>
                    <simulator.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-qvt-dark">{simulator.title}</CardTitle>
                  <Badge variant="outline" className="text-xs w-fit">{simulator.duration}</Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-qvt-dark/70">{simulator.description}</p>
                  
                  <Link to={simulator.link}>
                    <Button variant="outline" className="w-full border-qvt-dark/20 hover:bg-qvt-dark/5">
                      Découvrir
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-qvt-turquoise to-qvt-glacier rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Besoin d'un accompagnement personnalisé ?</h3>
          <p className="mb-6 opacity-90">
            Nos experts vous aident à interpréter vos résultats et mettre en place des actions concrètes.
          </p>
          <Link to="/contact">
            <Button variant="secondary" className="bg-white text-qvt-turquoise hover:bg-white/90">
              Contacter nos experts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimulatorHub;