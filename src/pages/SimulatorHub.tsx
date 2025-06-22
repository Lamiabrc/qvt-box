
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  TrendingUp,
  Building2,
  Heart,
  Brain,
  ArrowRight,
  Clock,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const SimulatorHub = () => {
  const navigate = useNavigate();

  const stats = [
    { value: "15,000+", label: "Évaluations réalisées", icon: Users },
    { value: "94%", label: "Satisfaction utilisateurs", icon: Star },
    { value: "2.3 min", label: "Temps moyen", icon: Clock },
    { value: "89%", label: "Recommandations suivies", icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: "Marie L., DRH",
      company: "TechCorp",
      text: "Le simulateur nous a permis d'identifier les signaux faibles avant qu'ils ne deviennent des problèmes majeurs.",
      rating: 5
    },
    {
      name: "Pierre et Sophie",
      company: "Parents de 2 ados",
      text: "Nous avons enfin trouvé des solutions concrètes pour améliorer la communication avec nos enfants.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800">Hub des Simulateurs</Badge>
          <h1 className="text-5xl font-bold text-indigo-800 mb-6">
            Centre d'Évaluation QVT Box
          </h1>
          <p className="text-xl text-indigo-600 mb-8 max-w-4xl mx-auto">
            Découvrez tous nos outils d'évaluation du bien-être, analysez vos résultats 
            et accédez à un accompagnement personnalisé.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <p className="text-2xl font-bold text-indigo-800 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Simulators */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Enterprise Simulator */}
          <Card className="hover:shadow-xl transition-all duration-300 border-teal-200">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-teal-800">Simulateur Entreprise</CardTitle>
              <CardDescription className="text-base">
                Évaluation complète du bien-être de vos équipes et détection des risques psychosociaux
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <BarChart3 className="w-4 h-4 text-teal-600" />
                  <span>Analyse par service et équipe</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Brain className="w-4 h-4 text-teal-600" />
                  <span>IA prédictive anti burn-out</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Users className="w-4 h-4 text-teal-600" />
                  <span>Dashboard RH en temps réel</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate('/enterprise-simulator')}
                className="w-full bg-teal-600 hover:bg-teal-700"
              >
                Lancer l'évaluation entreprise
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Family Simulator */}
          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-800">Simulateur Famille</CardTitle>
              <CardDescription className="text-base">
                Diagnostic familial pour améliorer la communication et le bien-être de tous
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Heart className="w-4 h-4 text-purple-600" />
                  <span>Climat familial et communication</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Brain className="w-4 h-4 text-purple-600" />
                  <span>Gestion temps d'écran ados</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span>Activités de reconnexion</span>
                </div>
              </div>
              <Button 
                onClick={() => navigate('/family-simulator')}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                Lancer l'évaluation famille
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">
            Témoignages d'utilisateurs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-indigo-200">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 italic text-base">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-indigo-700">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à transformer votre bien-être ?
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            Choisissez le simulateur qui correspond à votre situation et découvrez 
            des solutions personnalisées en quelques minutes.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-gray-100"
              onClick={() => navigate('/simulator-home')}
            >
              Voir tous les simulateurs
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/contact')}
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorHub;
