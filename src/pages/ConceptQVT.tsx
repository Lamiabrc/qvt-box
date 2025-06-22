
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  Users, 
  Sparkles, 
  Target, 
  Shield,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Package
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";

const ConceptQVT = () => {
  const principles = [
    {
      icon: Brain,
      title: "IA Émotionnelle Éthique",
      description: "Intelligence artificielle respectueuse qui détecte les signaux faibles sans intrusion",
      features: ["Prédiction des risques", "Recommandations personnalisées", "Respect RGPD total"]
    },
    {
      icon: Heart,
      title: "Vision Interconnectée",
      description: "Connecte bien-être professionnel et personnel sans cloisonnement",
      features: ["Double impact pro/perso", "Accompagnement holistique", "Continuité dans le soin"]
    },
    {
      icon: Package,
      title: "Solution Phygitale",
      description: "Combine numérique et objets physiques pour un impact concret",
      features: ["Box mensuelles", "App intelligente", "Accompagnement humain"]
    },
    {
      icon: Shield,
      title: "Transparence & Éthique",
      description: "Fonctionnement transparent avec contrôle total des données",
      features: ["Algorithmes explicables", "Consentement éclairé", "Sécurité maximale"]
    }
  ];

  const benefits = [
    { icon: Target, title: "Prévention précoce", desc: "Détection avant la crise" },
    { icon: Users, title: "Cohésion renforcée", desc: "Équipes et familles soudées" },
    { icon: Lightbulb, title: "Solutions adaptées", desc: "Personnalisation intelligente" },
    { icon: Sparkles, title: "Bien-être durable", desc: "Impact long terme prouvé" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-teal-100 text-teal-800">Innovation QVT</Badge>
          <h1 className="text-5xl font-bold text-teal-800 mb-6">
            Le Concept QVT Box
          </h1>
          <p className="text-xl text-teal-600 mb-8 max-w-4xl mx-auto">
            Une révolution dans l'approche du bien-être : une solution phygitale qui réconcilie 
            vie professionnelle et personnelle grâce à l'intelligence artificielle éthique.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-teal-600 hover:bg-teal-700">
              Découvrir nos solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-teal-300 text-teal-700">
              Voir la démo
            </Button>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">
            Les 4 Piliers de Notre Approche
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-teal-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-teal-800">{principle.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {principle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {principle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">
            Bénéfices Mesurables
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-teal-800 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </CardContent>
              </card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-teal-800 text-center">
              Comment ça fonctionne ?
            </CardTitle>
            <CardDescription className="text-center">
              Un parcours en 4 étapes simples pour transformer votre bien-être
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Évaluation Express</h3>
                <p className="text-sm text-gray-600">2 minutes pour analyser votre état émotionnel</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">IA Prédictive</h3>
                <p className="text-sm text-gray-600">Analyse intelligente et recommandations personnalisées</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Box Personnalisée</h3>
                <p className="text-sm text-gray-600">Objets bien-être adaptés à vos besoins</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Suivi Continu</h3>
                <p className="text-sm text-gray-600">Accompagnement et ajustement en temps réel</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Statement */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Une Vision Révolutionnaire
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            QVT Box ne se contente pas d'améliorer le bien-être au travail ou en famille. 
            Nous créons un écosystème interconnecté où chaque sphère de vie se renforce mutuellement.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <p className="text-3xl font-bold mb-2">94%</p>
              <p className="opacity-90">Satisfaction utilisateurs</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">67%</p>
              <p className="opacity-90">Réduction du stress</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">89%</p>
              <p className="opacity-90">Amélioration relations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptQVT;
