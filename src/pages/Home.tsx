import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Target, Sparkles, ArrowRight, Star, Shield, Users, Building2, Heart, TrendingUp, CheckCircle, Quote } from "lucide-react";
import TallyMarketResearchPopup from "@/components/TallyMarketResearchPopup";
import heroTeamImage from "@/assets/hero-team-discussion.jpg";
import hrLeaderImage from "@/assets/hr-leader-portrait.jpg";
import workLifeBalanceImage from "@/assets/work-life-balance.jpg";
import workplaceWellnessImage from "@/assets/workplace-wellness.jpg";

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
    { label: "Taux de satisfaction RH", value: "94%", icon: Star }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "DRH, TechCorp France",
      comment: "QVT Box a transformé notre approche du bien-être au travail. Nos collaborateurs, qu'ils soient en situation de handicap, parents isolés ou jeunes diplômés, trouvent tous les ressources adaptées à leur situation.",
      rating: 5,
      company: "TechCorp France - 850 collaborateurs"
    },
    {
      name: "Pierre Martin",
      role: "Directeur Général, InnovSoft",
      comment: "Une solution complète qui nous permet de prendre soin de nos équipes de manière proactive. Les tableaux de bord RH nous donnent une vision claire du bien-être de chaque service.",
      rating: 5,
      company: "InnovSoft - 320 collaborateurs"
    }
  ];

  const benefits = [
    {
      title: "Accompagnement personnalisé",
      description: "Prise en compte des spécificités individuelles : situation familiale, handicap, mobilité professionnelle, etc.",
      icon: Heart
    },
    {
      title: "Outils RH intégrés",
      description: "Tableaux de bord, indicateurs QVT, suivi d'équipes et recommandations personnalisées pour les managers",
      icon: TrendingUp
    },
    {
      title: "Solution complète",
      description: "De l'évaluation initiale aux actions concrètes, en passant par l'accompagnement famille si nécessaire",
      icon: CheckCircle
    }
  ];

  const portals = [
    {
      title: "Solutions Entreprise", 
      description: "Plateforme complète QVT pour RH, managers et équipes. Accompagnement personnalisé selon les situations individuelles (couples, célibataires, handicap, etc.)",
      icon: Building2,
      color: "from-blue-600 to-teal-600",
      link: "/enterprise-portal",
      featured: true,
      image: workplaceWellnessImage
    },
    {
      title: "Équilibre Vie Pro/Perso",
      description: "Volet famille complémentaire pour l'équilibre vie professionnelle et familiale des collaborateurs",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
      link: "/family-portal",
      image: workLifeBalanceImage
    },
    {
      title: "Accompagnement Indépendant",
      description: "Support personnalisé pour entrepreneurs et travailleurs indépendants",
      icon: Target,
      color: "from-orange-500 to-red-500", 
      link: "/independent-portal",
      image: hrLeaderImage
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-qvt-off-white via-white to-qvt-off-white">
      {/* Hero Section with Real Photo */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 118, 110, 0.85), rgba(15, 118, 110, 0.75)), url(${heroTeamImage})`,
          }}
        />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
                <Sparkles className="w-5 h-5 text-qvt-aqua" />
                <span className="text-white font-medium">Solution QVT entreprise</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in delay-300">
                Sortez de votre bulle,<br />
                <span className="text-qvt-aqua">on veille sur vos équipes</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 animate-fade-in delay-500">
                Solution QVT complète pour les décideurs d'entreprise. Accompagnez vos collaborateurs dans leur équilibre vie pro/perso, leurs défis d'équipe et leurs spécificités individuelles.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 animate-fade-in delay-700">
                <Badge variant="secondary" className="text-qvt-teal bg-white/20 border-white/30">
                  <Building2 className="w-4 h-4 mr-1" />
                  Solution Entreprise
                </Badge>
                <Badge variant="secondary" className="text-qvt-teal bg-white/20 border-white/30">
                  <Users className="w-4 h-4 mr-1" />
                  Accompagnement RH
                </Badge>
                <Badge variant="secondary" className="text-qvt-teal bg-white/20 border-white/30">
                  <Heart className="w-4 h-4 mr-1" />
                  Équilibre Vie Pro/Perso
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-1000">
                <Link to="/simulator">
                  <Button className="bg-qvt-aqua hover:bg-qvt-aqua/90 text-qvt-dark px-8 py-3 rounded-full text-lg font-semibold hover-lift">
                    Tester gratuitement
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="px-8 py-3 rounded-full text-lg font-semibold border-white text-white hover:bg-white/10"
                  onClick={() => setShowMarketResearch(true)}
                >
                  Participer à notre étude
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <Quote className="w-12 h-12 text-qvt-aqua mb-4" />
                <blockquote className="text-xl font-medium mb-4">
                  "QVT Box nous a permis de créer un environnement de travail où chaque collaborateur se sent véritablement pris en compte, quelles que soient ses spécificités."
                </blockquote>
                <div className="flex items-center gap-4">
                  <img 
                    src={hrLeaderImage} 
                    alt="Responsable RH" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">Sarah Laurent</div>
                    <div className="text-white/80">Directrice RH, Groupe Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pourquoi choisir QVT Box ?</h2>
            <p className="text-xl text-qvt-soft-black/70 max-w-3xl mx-auto">
              Une approche globale du bien-être au travail, adaptée aux réalités de votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-qvt-teal to-qvt-aqua rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-qvt-soft-black/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section with Photo Background */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${workplaceWellnessImage})`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
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

      {/* Solutions Section with Real Photos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Solutions QVT Complètes</h2>
            <p className="text-xl text-qvt-soft-black/70 max-w-3xl mx-auto">
              Une plateforme intégrée pour les décideurs d'entreprise : accompagnez vos collaborateurs dans toutes les dimensions de leur bien-être professionnel et personnel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portals.map((portal, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                  portal.featured ? 'ring-2 ring-qvt-teal ring-opacity-50 scale-105' : ''
                }`}
              >
                <div className="relative h-48">
                  <img 
                    src={portal.image} 
                    alt={portal.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${portal.color} opacity-80`} />
                  <div className="absolute top-4 left-4">
                    <portal.icon className="w-8 h-8 text-white" />
                  </div>
                  {portal.featured && (
                    <Badge className="absolute top-4 right-4 bg-qvt-aqua text-qvt-dark">
                      Solution principale
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{portal.title}</h3>
                  <p className="text-qvt-soft-black/70 mb-6">{portal.description}</p>
                  <Link to={portal.link}>
                    <Button className="w-full" variant="outline">
                      Découvrir
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
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
              Découvrez les témoignages de nos clients entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-qvt-soft-black/80 mb-6 italic text-lg">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-qvt-soft-black/60">{testimonial.role}</div>
                  <div className="text-qvt-teal font-medium text-sm mt-1">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-qvt-teal to-qvt-aqua text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à transformer votre QVT ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Rejoignez les centaines d'entreprises qui ont déjà fait confiance à QVT Box pour améliorer le bien-être de leurs collaborateurs dans toutes leurs diversités.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-qvt-teal hover:bg-white/90 px-8 py-3 rounded-full text-lg font-semibold">
                  Demander une démo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="px-8 py-3 rounded-full text-lg font-semibold border-white text-white hover:bg-white/10">
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