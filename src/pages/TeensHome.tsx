
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Shield, 
  Brain,
  Smartphone,
  Users,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Star,
  Calendar,
  BookOpen,
  Settings,
  Palette,
  Music,
  ShoppingBag,
  UserCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensHome = () => {
  const mainFeatures = [
    {
      icon: Shield,
      title: "Espace Personnel",
      description: "Ton espace privé et sécurisé",
      color: "from-blue-500 to-cyan-500",
      link: "/teens-personal-space"
    },
    {
      icon: Heart,
      title: "Check-in Quotidien",
      description: "Partage ton humeur du jour",
      color: "from-pink-500 to-purple-500",
      link: "/teens-checkin"
    },
    {
      icon: Brain,
      title: "IA d'Évaluation",
      description: "Analyse personnalisée de ton bien-être",
      color: "from-purple-500 to-indigo-500",
      link: "/teens-ai-evaluation"
    },
    {
      icon: Calendar,
      title: "Planning Famille",
      description: "Organise tes activités familiales",
      color: "from-green-500 to-teal-500",
      link: "/teens-calendar"
    },
    {
      icon: BookOpen,
      title: "Journal Intime",
      description: "Écris tes pensées en toute confidentialité",
      color: "from-orange-500 to-red-500",
      link: "/teens-journal"
    },
    {
      icon: Users,
      title: "Espace Famille",
      description: "Reconnecte avec tes proches",
      color: "from-violet-500 to-purple-500",
      link: "/teens-family-space"
    }
  ];

  const additionalFeatures = [
    {
      icon: Sparkles,
      title: "Solutions Fun",
      description: "Activités pour améliorer ton bien-être",
      link: "/teens-fun-solutions"
    },
    {
      icon: Settings,
      title: "Personnalisation",
      description: "Customise ton espace à ton image",
      link: "/teens-customization"
    },
    {
      icon: Music,
      title: "Ma Playlist",
      description: "Musiques qui te font du bien",
      link: "/teens-playlist"
    },
    {
      icon: ShoppingBag,
      title: "Boutique Teen",
      description: "Découvre la Teen Box",
      link: "/teens-shop"
    },
    {
      icon: MessageSquare,
      title: "Alerte Rapide",
      description: "Besoin d'aide immédiate ?",
      link: "/teens-quick-alert"
    },
    {
      icon: UserCheck,
      title: "Accès Parental",
      description: "Gestion des accès parents",
      link: "/teens-parental-access"
    }
  ];

  const testimonials = [
    {
      name: "Emma, 16 ans",
      text: "Enfin un espace où je peux être moi-même sans me prendre la tête !",
      rating: 5
    },
    {
      name: "Lucas, 14 ans", 
      text: "Ma mère et moi on se dispute moins depuis qu'on utilise QVTeen Box.",
      rating: 5
    },
    {
      name: "Chloé, 17 ans",
      text: "J'ai appris à gérer mon stress grâce aux conseils de l'IA.",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Pour les 11-18 ans</Badge>
          <h1 className="text-5xl font-bold text-purple-800 mb-6">
            Ton Espace Ados 🌟
          </h1>
          <p className="text-xl text-purple-600 mb-8 max-w-4xl mx-auto">
            QVTeen Box, c'est TON espace à toi ! Pas de pression, pas de jugement.
            Juste un endroit safe pour explorer tes émotions et créer du lien avec ta famille.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Link key={index} to={feature.link}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-purple-200 hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-purple-800">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">
            Découvre toutes les fonctionnalités
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="hover:shadow-lg transition-all duration-300 border-purple-200 hover:border-purple-300 cursor-pointer group">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-800">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
            Ce que disent les ados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-purple-200 bg-white/80">
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
                  <p className="font-semibold text-purple-700">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Prêt(e) à commencer ton voyage ? 🚀
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            Rejoins des milliers d'ados qui ont trouvé leur équilibre avec QVTeen Box
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/teens-checkin">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Je commence maintenant
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                J'ai des questions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeensHome;
