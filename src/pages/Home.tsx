import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Sparkles, ArrowRight, Star, Shield } from "lucide-react";
import TallyMarketResearchPopup from "@/components/TallyMarketResearchPopup";

const Home = () => {
  const [showMarketResearch, setShowMarketResearch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMarketResearch(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-qvt-off-white via-white to-qvt-off-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-qvt-gradient-primary opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Intro badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Sparkles className="w-5 h-5 text-qvt-teal" />
              <span className="text-qvt-teal font-medium">QVT pensée pour les entreprises</span>
            </div>

            {/* Accroche principale */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in delay-300">
              Et si une petite attention suffisait à démontrer qu’on tient à vous ?
            </h1>

            {/* Sous-texte */}
            <p className="text-xl text-qvt-soft-black/80 mb-8 max-w-2xl mx-auto animate-fade-in delay-500">
              Chez QVT Box, tout commence par une question sincère : <strong>“Bonjour, ça va ?”</strong><br />
              Notre solution aide les entreprises à transformer cette question en action concrète, mesurable, et bienveillante.
            </p>

            {/* Badges fonctionnels */}
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

            {/* Call to action */}
            <Link to="/entreprise/simulator">
              <Button className="qvt-bg-teal hover:bg-qvt-teal/90 text-white px-8 py-3 rounded-full text-lg font-semibold animate-fade-in delay-1000 hover-lift">
                Tester la solution gratuitement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Bulles décoratives */}
        <div className="absolute top-20 left-10 w-20 h-20 qvt-bg-aqua/20 rounded-full animate-bubble-float delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 qvt-bg-teal/20 rounded-full animate-bubble-float delay-1500"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-bubble-float delay-2000"></div>
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
