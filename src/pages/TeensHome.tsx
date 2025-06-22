
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
  Star
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensHome = () => {
  const features = [
    {
      icon: Shield,
      title: "SafeZone Perso",
      description: "Ton espace privé, loin des réseaux sociaux toxiques",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Mood Tracker",
      description: "Suis tes émotions jour après jour, sans jugement",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Brain,
      title: "IA Bienveillante",
      description: "Des conseils personnalisés qui te comprennent vraiment",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Lien Famille",
      description: "Reconnecte avec tes parents quand tu es prêt(e)",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Smartphone,
      title: "Digital Detox",
      description: "Reprends le contrôle de ton temps d'écran",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Sparkles,
      title: "Teen Box",
      description: "Reçois chaque mois des objets qui te font du bien",
      color: "from-yellow-500 to-orange-500"
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
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Je découvre mon espace
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-300 text-purple-700">
              En savoir plus
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-purple-200 hover:scale-105">
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
          ))}
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

        {/* How it works */}
        <Card className="mb-16 border-purple-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-purple-800">
              Comment ça marche ?
            </CardTitle>
            <CardDescription>
              C'est simple et ça prend 2 minutes !
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2 text-purple-800">Tu réponds</h3>
                <p className="text-sm text-gray-600">À quelques questions sur ton mood</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2 text-purple-800">L'IA analyse</h3>
                <p className="text-sm text-gray-600">Et te propose des solutions qui te correspondent</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2 text-purple-800">Tu reçois</h3>
                <p className="text-sm text-gray-600">Ta Teen Box avec des objets qui font du bien</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2 text-purple-800">Tu progresses</h3>
                <p className="text-sm text-gray-600">À ton rythme, sans pression</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Prêt(e) à commencer ton voyage ? 🚀
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            Rejoins des milliers d'ados qui ont trouvé leur équilibre avec QVTeen Box
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Je commence maintenant
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              J'ai des questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeensHome;
