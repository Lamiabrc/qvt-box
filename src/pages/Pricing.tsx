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
      name: "Bulle Équipe",
      price: "Sur devis",
      period: "",
      description: "Pour équipes jusqu'à 20 personnes",
      features: [
        "Jusqu'à 20 collaborateurs",
        "Évaluations QVT complètes",
        "Tableau de bord manager",
        "Support email",
        "Box bien-être trimestrielle (option payante)"
      ],
      popular: false,
      contactOnly: true,
      color: "from-qvt-glacier to-qvt-turquoise"
    },
    {
      name: "Bulle Enterprise",
      price: "Sur devis",
      period: "",
      description: "Solution complète entreprise",
      features: [
        "Collaborateurs illimités",
        "Tous les simulateurs",
        "IA personnalisée",
        "Support prioritaire",
        "Box mensuelle incluse (option sans box disponible)",
        "Coaching RH dédié",
        "Dashboard exécutif",
        "Analytics avancés",
        "Interface famille intégrée",
        "Accès à la boutique",
        "Avatars & espace gamifié"
      ],
      popular: true,
      contactOnly: true,
      color: "from-qvt-turquoise to-qvt-dark"
    },
    {
      name: "Bulle Famille",
      price: "8€",
      period: "/mois",
      description: "Abonnement famille sans box — ajoutez des box selon vos besoins",
      features: [
        "Jusqu'à 15 membres",
        "Évaluations familiales",
        "Tableau de bord parents",
        "Support email",
        "Interface ados",
        "Profils enfants/parents",
        "Alertes émotionnelles urgentes",
        "Accès 'Ma bulle attentionnée'",
        "+30€/mois par box famille ajoutée"
      ],
      popular: false,
      contactOnly: false,
      color: "from-pink-400 to-purple-500"
    },
    {
      name: "Bulle Solo",
      price: "12€",
      period: "/mois",
      description: "Pour les utilisateurs individuels",
      features: [
        "Évaluations personnelles",
        "Suivi bien-être",
        "Recommandations IA",
        "Accès à 1 box par trimestre (option)",
        "Tableau personnel",
        "Interface mobile simple"
      ],
      popular: false,
      contactOnly: false,
      color: "from-amber-300 to-orange-400"
    },
    {
      name: "Bulle Retraité",
      price: "45€",
      period: "/mois",
      description: "Pour les seniors & grands-parents",
      features: [
        "Box mémoire ou découverte (option sans box possible)",
        "Partage famille",
        "Activités intergénérationnelles",
        "Espace famille simplifié",
        "Profils petits-enfants",
        "Soutien émotionnel discret"
      ],
      popular: false,
      contactOnly: false,
      color: "from-green-100 to-green-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-qvt-bubble via-qvt-off-white to-qvt-glacier/20 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-qvt-turquoise text-white">Bulles Attentionnées</Badge>
          <h1 className="text-4xl font-bold text-qvt-dark mb-6">
            Nos Bulles Attentionnées QVT
          </h1>
          <p className="text-xl text-qvt-dark/70 mb-8 max-w-3xl mx-auto">
            Des solutions sur-mesure pour vous accompagner dans votre bien-être professionnel et personnel
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

                <Link to={plan.contactOnly ? "/contact" : "/payment"} className="block">
                  <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`}>
                    {plan.contactOnly ? "Demander un devis" : "Commencer"}
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
