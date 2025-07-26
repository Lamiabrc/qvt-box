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
      comment: "QVT Box a transformé notre approche du bien-être au travail. Nos collaborateurs, qu'ils soient en situation de handicap, parents isolés ou jeunes diplômés, sont ravis de recevoir plusieurs fois par an un petit quelque chose de la part de leur entreprise et grâce à l'outil IA et le tableau de bord RH j'ai une vue rapide et en live du bien être des collaborateurs",
      rating: 5,
      company: "TechCorp France - 850 collaborateurs"
    },
    {
      name: "Pierre Martin",
      role: "Directeur Général, InnovSoft",
      comment: "Une solution complète qui nous permet de prendre soin de nos équipes de manière proactive et au plus prés des collaborateurs. Les tableaux de bord RH nous donnent une vision claire du bien-être de chaque service.",
      rating: 5,
      company: "InnovSoft - 320 collaborateurs"
    }
  ];

  const benefits = [
    {
      title: "Accompagnement personnalisé",
      description: "Prise en compte des spécificités individuelles : situation familiale, handicap, mobilité professionnelle, âge, sexe ...etc.",
      icon: Heart
    },
    {
      title: "Outils RH intégrés",
      description: "Tableaux de bord, indicateurs QVT, suivi d'équipes et recommandations personnalisées pour les managers et leurs équipes",
      icon: TrendingUp
    },
    {
      title: "Solution complète",
      description: "De l'évaluation initiale aux actions concrètes, en passant par l'accompagnement pour un équilibre accru entre la vie professionelle et familiale si nécessaire",
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
    <div className="min-h-screen bg-gradient-to-br from-accent via-accent/90 to-accent">
      {/* Hero Section with Real Photo */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--accent) / 0.9), hsl(var(--accent) / 0.8)), url(${heroTeamImage})`,
          }}
        />
        
        {/* Floating bubbles animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="qvt-bubble absolute top-10 left-10 w-20 h-20 bg-primary/20 animate-floating-gentle"></div>
          <div className="qvt-bubble absolute top-32 right-20 w-16 h-16 bg-secondary/20 animate-floating-gentle delay-500"></div>
          <div className="qvt-bubble absolute bottom-40 left-1/4 w-12 h-12 bg-primary/15 animate-floating-gentle delay-1000"></div>
          <div className="qvt-bubble absolute bottom-20 right-1/3 w-24 h-24 bg-secondary/15 animate-floating-gentle delay-700"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-bubble px-6 py-3 mb-6 animate-fade-in border border-white/30">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-white font-exo font-semibold">Solution QVT entreprise</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-exo font-bold mb-6 animate-fade-in delay-300">
                Sortez de votre bulle,<br />
                <span className="text-primary">on veille sur vos équipes</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 animate-fade-in delay-500 font-montserrat">
                Solution QVT complète pour les décideurs d'entreprise. Accompagnez vos collaborateurs dans leur équilibre vie pro/perso, leurs défis d'équipe et leurs spécificités individuelles.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 animate-fade-in delay-700">
                <Badge className="bg-primary/20 text-white border-primary/30 rounded-bubble px-4 py-2">
                  <Building2 className="w-4 h-4 mr-2" />
                  Solution Entreprise
                </Badge>
                <Badge className="bg-secondary/20 text-white border-secondary/30 rounded-bubble px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  Accompagnement RH
                </Badge>
                <Badge className="bg-primary/20 text-white border-primary/30 rounded-bubble px-4 py-2">
                  <Heart className="w-4 h-4 mr-2" />
                  Équilibre Vie Pro/Perso
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-1000">
                <Link to="/simulator-hub">
                  <Button className="bg-primary hover:bg-primary/90 text-accent px-8 py-4 rounded-bubble text-lg font-exo font-semibold hover-lift shadow-lg">
                    Tester gratuitement
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="px-8 py-4 rounded-bubble text-lg font-exo font-semibold border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => setShowMarketResearch(true)}
                >
                  Participer à notre étude
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="qvt-card bg-white/10 backdrop-blur-lg p-8 text-white border border-white/20 shadow-bubble-lg">
                <Quote className="w-12 h-12 text-primary mb-4" />
                <blockquote className="text-xl font-medium mb-4 font-montserrat">
                  "QVT Box nous a permis de créer un environnement de travail où chaque collaborateur se sent véritablement pris en compte, quelles que soient ses spécificités."
                </blockquote>
                <div className="flex items-center gap-4">
                  <img 
                    src={hrLeaderImage} 
                    alt="Responsable RH" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/50"
                  />
                  <div>
                    <div className="font-exo font-semibold">Sarah Laurent</div>
                    <div className="text-white/80 font-montserrat">Directrice RH, Groupe Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-exo font-bold mb-4 text-foreground">Pourquoi choisir QVT Box ?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat">
              Une approche globale du bien-être au travail, adaptée aux réalités de votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="qvt-bubble w-20 h-20 bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-bubble hover:shadow-bubble-lg transition-all duration-300 group-hover:scale-110">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-exo font-bold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground font-montserrat">{benefit.description}</p>
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
            backgroundImage: `linear-gradient(hsl(var(--background) / 0.95), hsl(var(--background) / 0.9)), url(${workplaceWellnessImage})`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="qvt-bubble w-20 h-20 bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 shadow-bubble hover:shadow-bubble-lg transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-exo font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-montserrat">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section with Real Photos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-exo font-bold mb-4 text-foreground">Solutions QVT Complètes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-montserrat">
              Une plateforme intégrée pour les décideurs d'entreprise : accompagnez vos collaborateurs dans toutes les dimensions de leur bien-être professionnel et personnel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portals.map((portal, index) => (
              <Card 
                key={index} 
                className={`qvt-card overflow-hidden hover:shadow-bubble-lg transition-all duration-300 hover:-translate-y-2 group ${
                  portal.featured ? 'ring-2 ring-primary/50 scale-105' : ''
                }`}
              >
                <div className="relative h-48">
                  <img 
                    src={portal.image} 
                    alt={portal.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-accent/60" />
                  <div className="absolute top-4 left-4">
                    <div className="qvt-bubble w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <portal.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  {portal.featured && (
                    <Badge className="absolute top-4 right-4 bg-primary text-accent font-exo font-semibold rounded-bubble">
                      Solution principale
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-exo font-bold mb-3 text-foreground">{portal.title}</h3>
                  <p className="text-muted-foreground mb-6 font-montserrat">{portal.description}</p>
                  <Link to={portal.link}>
                    <Button className="w-full rounded-bubble font-exo font-semibold" variant="outline">
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
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-exo font-bold mb-4 text-foreground">Ils nous font confiance</h2>
            <p className="text-xl text-muted-foreground font-montserrat">
              Découvrez les témoignages de nos clients entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="qvt-card p-8 hover:shadow-bubble-lg transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic text-lg font-montserrat">"{testimonial.comment}"</p>
                <div>
                  <div className="font-exo font-semibold text-lg text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground font-montserrat">{testimonial.role}</div>
                  <div className="text-primary font-exo font-medium text-sm mt-1">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        {/* Floating bubbles in CTA */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="qvt-bubble absolute top-10 right-10 w-16 h-16 bg-white/10 animate-floating-gentle"></div>
          <div className="qvt-bubble absolute bottom-10 left-10 w-20 h-20 bg-white/10 animate-floating-gentle delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-exo font-bold mb-6">
              Prêt à transformer votre QVT ?
            </h2>
            <p className="text-xl mb-8 text-white/90 font-montserrat">
              Rejoignez les centaines d'entreprises qui ont déjà fait confiance à QVT Box pour améliorer le bien-être de leurs collaborateurs dans toutes leurs diversités.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-accent hover:bg-white/90 px-8 py-4 rounded-bubble text-lg font-exo font-semibold shadow-lg hover-lift">
                  Demander une démo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="px-8 py-4 rounded-bubble text-lg font-exo font-semibold border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm">
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
