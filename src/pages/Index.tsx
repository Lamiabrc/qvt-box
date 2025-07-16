
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Building2, 
  Users, 
  Sparkles, 
  ShoppingBag, 
  Brain, 
  Target,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Zap,
  Shield,
  Star,
  PlayCircle,
  UserCheck,
  Globe,
  Gift
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import FloatingBubbles from "../components/FloatingBubbles";
import UserAvatar from "../components/UserAvatar";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();
  const [selectedUniverse, setSelectedUniverse] = useState<'family' | 'enterprise' | 'independent' | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const universes = [
    {
      id: 'family',
      title: 'Famille',
      description: 'Renforcez les liens familiaux et prévenez les crises émotionnelles',
      icon: Heart,
      color: 'from-pink-400 via-purple-400 to-indigo-400',
      features: ['Espace parent & ado', 'Partage émotionnel', 'Box personnalisées', 'Alertes bien-être'],
      route: '/family-portal',
      users: '2.3k familles',
      satisfaction: '94%'
    },
    {
      id: 'enterprise',
      title: 'Entreprise',
      description: 'Optimisez la QVT et prévenez les risques psychosociaux',
      icon: Building2,
      color: 'qvt-gradient-primary',
      features: ['Dashboard RH', 'Suivi équipes', 'Prévention burn-out', 'Analytics QVT'],
      route: '/enterprise-portal',
      users: '45+ entreprises',
      satisfaction: '96%'
    },
    {
      id: 'independent',
      title: 'Indépendant',
      description: 'Accompagnement personnalisé pour votre bien-être au quotidien',
      icon: Users,
      color: 'qvt-gradient-secondary',
      features: ['Coaching personnel', 'Suivi émotionnel', 'Box adaptées', 'Communauté bienveillante'],
      route: '/independent-portal',
      users: '1.8k personnes',
      satisfaction: '92%'
    }
  ];

  const testimonials = [
    {
      name: "Sophie M.",
      role: "Maman de 2 ados",
      avatar: "😊",
      qvtScore: 13,
      content: "QVT Box a révolutionné notre communication familiale. Mes ados s'expriment enfin sur leurs émotions !",
      universe: "family"
    },
    {
      name: "Marc L.",
      role: "DRH chez TechCorp",
      avatar: "👨‍💼",
      qvtScore: 12,
      content: "Depuis 6 mois, on a réduit de 40% les arrêts maladie liés au stress. Un outil indispensable !",
      universe: "enterprise"
    },
    {
      name: "Emma K.",
      role: "17 ans, Lycéenne",
      avatar: "🌟",
      qvtScore: 14,
      content: "L'app m'aide trop à gérer mon stress ! Les activités sont stylées et j'adore le système de points ✨",
      universe: "teens"
    }
  ];

  const stats = [
    { value: "15k+", label: "Utilisateurs actifs", icon: Users },
    { value: "89%", label: "Amélioration QVT", icon: TrendingUp },
    { value: "50", label: "Box bien-être", icon: Gift },
    { value: "3", label: "Pays", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-qvt-off-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <FloatingBubbles />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-2 qvt-gradient-primary text-white font-montserrat font-semibold text-lg border-0">
              <Sparkles className="w-5 h-5 mr-2" />
              Révolutionnez votre approche du bien-être
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-qvt-soft-black mb-6 leading-tight">
              QVT Box
              <span className="block text-transparent bg-clip-text qvt-gradient-primary">
                L'écosystème bien-être
              </span>
              <span className="block text-qvt-teal">
                phygital Made in France
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-qvt-soft-black/80 mb-8 max-w-4xl mx-auto font-medium leading-relaxed">
              De l'auto-évaluation émotionnelle aux box bien-être personnalisées, 
              accompagnez vos salariés, votre famille et vos adolescents vers plus de sérénité.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="qvt-gradient-primary text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg shadow-bubble hover:shadow-bubble-lg transition-all duration-300"
              >
                <Brain className="w-6 h-6 mr-2" />
                Tester "Ma Bulle Attentionnée"
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-qvt-teal text-qvt-teal hover:qvt-bg-teal hover:text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg transition-all duration-300"
                onClick={() => setIsVideoPlaying(true)}
              >
                <PlayCircle className="w-6 h-6 mr-2" />
                Voir la démo (2 min)
              </Button>
            </div>
          </div>

          {/* Stats rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="qvt-card text-center border-0 shadow-bubble hover:shadow-bubble-lg transition-all duration-300">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-qvt-teal mx-auto mb-3" />
                  <div className="text-3xl font-bold text-qvt-soft-black font-montserrat">
                    {stat.value}
                  </div>
                  <div className="text-sm text-qvt-soft-black/70 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sélection d'univers */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-qvt-soft-black mb-6">
              Choisissez votre univers QVT
            </h2>
            <p className="text-xl text-qvt-soft-black/70 max-w-3xl mx-auto">
              Une approche personnalisée du bien-être selon vos besoins spécifiques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {universes.map((universe) => {
              const IconComponent = universe.icon;
              return (
                <Card 
                  key={universe.id}
                  className={`qvt-card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-bubble-lg
                            ${selectedUniverse === universe.id ? 'ring-4 ring-qvt-teal shadow-bubble-lg scale-105' : ''}
                            border-2 border-transparent hover:border-qvt-aqua/50`}
                  onClick={() => setSelectedUniverse(universe.id as any)}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center qvt-bubble ${universe.color === 'qvt-gradient-primary' ? 'qvt-gradient-primary' : universe.color === 'qvt-gradient-secondary' ? 'qvt-gradient-secondary' : `bg-gradient-to-br ${universe.color}`}`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <CardTitle className="text-2xl font-montserrat font-bold text-qvt-soft-black text-center">
                      {universe.title}
                    </CardTitle>
                    
                    <CardDescription className="text-center text-qvt-soft-black/70 text-lg leading-relaxed">
                      {universe.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {universe.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-qvt-teal flex-shrink-0" />
                          <span className="text-sm text-qvt-soft-black">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-qvt-off-white">
                      <div className="text-sm text-qvt-soft-black/70">
                        <div>{universe.users}</div>
                        <div>{universe.satisfaction} satisfait(e)s</div>
                      </div>
                      <Button 
                        asChild
                        className="qvt-gradient-primary text-white rounded-full px-6 font-montserrat font-semibold"
                      >
                        <Link to={universe.route}>
                          Découvrir
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Témoignages avec avatars */}
      <section className="py-20 px-4 bg-qvt-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-qvt-soft-black mb-6">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-qvt-soft-black/70 max-w-3xl mx-auto">
              Découvrez comment QVT Box transforme le quotidien de nos utilisateurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="qvt-card border-0 shadow-bubble hover:shadow-bubble-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <UserAvatar 
                      qvtScore={testimonial.qvtScore}
                      userName={testimonial.name}
                      universe={testimonial.universe as any}
                      isEditable={false}
                      size="md"
                    />
                    <div>
                      <h4 className="font-montserrat font-semibold text-qvt-soft-black">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-qvt-soft-black/70">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <blockquote className="text-qvt-soft-black/80 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex justify-end mt-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action final */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="qvt-gradient-primary p-12 rounded-3xl text-white shadow-bubble-lg">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Prêt(e) à transformer votre bien-être ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez des milliers d'utilisateurs qui ont déjà adopté l'approche QVT Box
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-qvt-teal hover:bg-qvt-off-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg"
              >
                <Zap className="w-6 h-6 mr-2" />
                Commencer gratuitement
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-qvt-teal px-8 py-4 rounded-full font-montserrat font-semibold text-lg"
              >
                <UserCheck className="w-6 h-6 mr-2" />
                Demander une démo
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm opacity-75">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Données sécurisées
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Support 7j/7
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Made in France
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal vidéo */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-montserrat font-semibold text-qvt-soft-black">
                Découvrez QVT Box en 2 minutes
              </h3>
              <Button 
                variant="ghost" 
                onClick={() => setIsVideoPlaying(false)}
                className="text-qvt-soft-black"
              >
                ✕
              </Button>
            </div>
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center text-qvt-soft-black/70">
                <PlayCircle className="w-16 h-16 mx-auto mb-4" />
                <p>Vidéo de démonstration QVT Box</p>
                <p className="text-sm">(Intégration vidéo à venir)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
