import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Target, Sparkles, ArrowRight, Building2, Heart } from "lucide-react";
import TallyMarketResearchPopup from "@/components/TallyMarketResearchPopup";
import heroTeamImage from "@/assets/hero-team-discussion.jpg";
import hrLeaderImage from "@/assets/hr-leader-portrait.jpg";
import workLifeBalanceImage from "@/assets/work-life-balance.jpg";
import workplaceWellnessImage from "@/assets/workplace-wellness.jpg";

const Home = () => {
  const [showMarketResearch, setShowMarketResearch] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenMarketResearch");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowMarketResearch(true);
        localStorage.setItem("hasSeenMarketResearch", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

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
      title: "Mon entreprise, c'est ma famille",
      description: "Volet famille complémentaire pour renforcer la cohésion et l'équilibre vie pro/perso des collaborateurs. Des solutions concrètes pour les aidants, parents, grands-parents et jeunes.",
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
    <div className="min-h-screen bg-gradient-to-br from-accent via-accent/90 to-accent text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--accent) / 0.9), hsl(var(--accent) / 0.8)), url(${heroTeamImage})`,
          }}
        />
        <div className="z-10 relative text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-bubble px-6 py-3 mb-6 animate-fade-in border border-white/30">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-white font-exo font-semibold">Solution QVT entreprise</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-exo font-bold text-white mb-6 animate-fade-in delay-300">
            Sortez de votre bulle,<br />
            <span className="text-primary">on veille sur vos équipes</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in delay-500 font-montserrat max-w-3xl mx-auto">
            Une plateforme QVT phygitale, complète et personnalisée, qui s'adapte à toutes les situations pour booster l'engagement et prévenir les risques.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in delay-700">
            <Link to="/simulator-hub">
              <Button className="bg-primary hover:bg-primary/90 text-accent px-8 py-4 rounded-bubble text-lg font-exo font-semibold shadow-lg">
                Tester gratuitement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact?demande=devis">
              <Button className="bg-white text-accent hover:bg-white/90 px-8 py-4 rounded-bubble text-lg font-exo font-semibold border border-white/30">
                Demander un devis personnalisé
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portals Section */}
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
                    <Button className="w-full rounded-bubble font-exo font-semibold mb-2" variant="outline">
                      Découvrir
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/contact?demande=devis">
                    <Button className="w-full rounded-bubble font-exo font-semibold" variant="secondary">
                      Demander un devis pour votre situation
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TallyMarketResearchPopup
        isOpen={showMarketResearch}
        onClose={() => setShowMarketResearch(false)}
      />
    </div>
  );
};

export default Home;
