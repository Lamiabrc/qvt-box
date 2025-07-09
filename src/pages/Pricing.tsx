
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingBubbles from '@/components/FloatingBubbles';

const Pricing = () => {
  const plans = [
    {
      name: "Starter Famille",
      price: "29€",
      period: "/mois",
      description: "Parfait pour débuter",
      features: [
        "Jusqu'à 4 membres",
        "Questionnaires QVT",
        "Tableau de bord familial",
        "Support email",
        "Box mensuelle optionnelle"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Premium Famille",
      price: "49€",
      period: "/mois",
      description: "Le plus populaire",
      features: [
        "Membres illimités",
        "Tous les questionnaires",
        "IA personnalisée",
        "Support prioritaire",
        "Box mensuelle incluse",
        "Coaching famille"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      period: "",
      description: "Pour les entreprises",
      features: [
        "Solution complète",
        "Nombre d'employés illimité",
        "Tableau de bord RH",
        "Support dédié",
        "Formations incluses",
        "Compliance RGPD"
      ],
      popular: false,
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Tarifs</Badge>
          <h1 className="text-4xl font-bold text-slate-800 mb-6">
            Choisissez votre abonnement QVT Box
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Des solutions adaptées à tous les besoins pour améliorer votre qualité de vie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-2 border-purple-400 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-500 text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Populaire
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-xl">{plan.name.charAt(0)}</span>
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-gray-600">{plan.description}</p>
                <div className="text-3xl font-bold text-slate-800 mt-4">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/payment" className="block">
                  <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`}>
                    {plan.name === "Enterprise" ? "Nous contacter" : "Commencer"}
                  </Button>
                </Link>

                <div className="text-center text-xs text-gray-500">
                  ✅ 14 jours d'essai gratuit • 🔄 Résiliation facile
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Des questions sur nos tarifs ?</p>
          <Link to="/contact">
            <Button variant="outline">Contactez notre équipe</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
