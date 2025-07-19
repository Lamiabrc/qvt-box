import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Target, Sparkles, ArrowRight, Star, Shield, Users, Building2, Heart, TrendingUp } from "lucide-react";
import TallyMarketResearchPopup from "@/components/TallyMarketResearchPopup";

const Home = () => {
  const [showMarketResearch, setShowMarketResearch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMarketResearch(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: "Entreprises accompagnées", value: "250+", icon: Building2 },
    { label: "Collaborateurs impactés", value: "15 000+", icon: Users },
    { label: "Amélioration du bien-être", value: "+78%", icon: Heart },
    { label: "Taux de satisfaction", value: "94%", icon: Star }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "DRH, TechCorp",
      comment: "QVT Box a transformé notre approche du bien-être au travail. Les résultats sont mesurables et nos équipes sont plus épanouies.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      role: "Directeur Général, InnovSoft",
      comment: "Une solution complète qui nous permet de prendre soin de nos collaborateurs de manière proactive et personnalisée.",
      rating: 5
    }
  ];

  const portals = [
    {
      title: "Portail Famille",
      description: "Solutions pour l'équilibre vie professionnelle et familiale",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
      link: "/family-portal"
    },
    {
      title: "Portail Entreprise", 
      description: "Outils de pilotage QVT et bien-être collaborateurs",
      icon: Building2,
      color: "from-blue-500 to-teal-500",
      link: "/enterprise-portal"
    },
    {
      title: "Portail Indépendant",
      description: "Accompagnement personnalisé pour entrepreneurs",
      icon: Target,
      color: "from-orange-500 to-red-500", 
      link: "/independent-portal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-qvt-off-white via-white to-qvt-off-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-qvt-gradient-primary opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Sparkles className="w-5 h-5 text-qvt-teal" />
              <span className="text-qvt-teal font-medium">QVT pensée pour les entreprises</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in delay-300">
              Sortez de votre bulle,<br />on veille sur vous
            </h1>

            <p className="text-xl text-qvt-soft-black/80 mb-8 max-w-2xl mx-auto animate-fade-in delay-500">
              Notre solution aide les entreprises à transformer l'attention portée aux collaborateurs en actions concrètes, mesurables et bienveillantes pour améliorer la qualité de vie au travail.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in delay-700">
              <Badge variant="secondary" className="text-qvt-teal bg-qvt-teal/10">
                <Target className="w-4 h-4 mr-1" />
                IA Recommandations
              </Badge>
              <Badge variant="secondary" className="text-qvt-teal bg-qvt-teal/10">
                <Shield className="w-4 h-4 mr-1" />
                Données sécurisées
              </Badge>
              <Badge variant="secondary" className="text-qvt-teal bg-qvt-teal/10">
                <Star className="w-4 h-4 mr-1" />
                Accompagnement expert
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-1000">
              <Link to="/simulator">
                <Button className="qvt-bg-teal hover:bg-qvt-teal/90 text-white px-8 py-3 rounded-full text-lg font-semibold hover-lift">
                  Tester la solution gratuitement
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="px-8 py-3 rounded-full text-lg font-semibold border-qvt-teal text-qvt-teal hover:bg-qvt-teal/10"
                onClick={() => setShowMarketResearch(true)}
              >
                Participer à notre étude
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 qvt-bg-aqua/20 rounded-full animate-bubble-float delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 qvt-bg-teal/20 rounded-full animate-bubble-float delay-1500"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-bubble-float delay-2000"></div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-qvt-teal to-qvt-aqua rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-qvt-teal mb-2">{stat.value}</div>
                <div className="text-qvt-soft-black/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Solutions</h2>
            <p className="text-xl text-qvt-soft-black/70 max-w-2xl mx-auto">
              Découvrez nos portails spécialisés pour répondre aux besoins spécifiques de chaque profil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portals.map((portal, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${portal.color} rounded-full flex items-center justify-center mb-6`}>
                  <portal.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{portal.title}</h3>
                <p className="text-qvt-soft-black/70 mb-6">{portal.description}</p>
                <Link to={portal.link}>
                  <Button className="w-full" variant="outline">
                    Découvrir
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-qvt-teal/5 to-qvt-aqua/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ils nous font confiance</h2>
            <p className="text-xl text-qvt-soft-black/70">
              Découvrez les témoignages de nos clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-qvt-soft-black/80 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-qvt-soft-black/60">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à transformer votre QVT ?
            </h2>
            <p className="text-xl text-qvt-soft-black/70 mb-8">
              Rejoignez les centaines d'entreprises qui ont déjà fait confiance à QVT Box pour améliorer le bien-être de leurs collaborateurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="qvt-bg-teal hover:bg-qvt-teal/90 text-white px-8 py-3 rounded-full text-lg font-semibold">
                  Demander une démo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="px-8 py-3 rounded-full text-lg font-semibold border-qvt-teal text-qvt-teal hover:bg-qvt-teal/10">
                  Voir nos tarifs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popup étude de marché */}
      <TallyMarketResearchPopup
        isOpen={showMarketResearch}
        onClose={() => setShowMarketResearch(false)}
      />
    </div>
  );
};

export default Home;