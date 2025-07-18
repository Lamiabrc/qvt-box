
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building2, User, Heart, Target, Sparkles, ArrowRight, Star, Shield } from "lucide-react";
import TallyMarketResearchPopup from "@/components/TallyMarketResearchPopup";

const Home = () => {
  const [showMarketResearch, setShowMarketResearch] = useState(false);

  // Afficher le popup après 3 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMarketResearch(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const portals = [
    {
      id: 'family',
      title: 'Famille',
      description: 'Renforcez les liens familiaux et le bien-être de tous',
      detailedDescription: 'Solutions personnalisées pour parents, adolescents et familles entières',
      icon: Heart,
      link: '/family-portal',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50',
      features: ['Questionnaires adaptés', 'Suivi personnalisé', 'Activités famille']
    },
    {
      id: 'enterprise',
      title: 'Entreprise',
      description: 'Améliorez la QVT de vos équipes',
      detailedDescription: 'Outils complets pour managers, RH et collaborateurs',
      icon: Building2,
      link: '/enterprise-portal',
      color: 'from-qvt-teal to-qvt-aqua',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-teal-50',
      features: ['Tableaux de bord RH', 'Évaluations QVT', 'Analytics avancés']
    },
    {
      id: 'independent',
      title: 'Indépendant',
      description: 'Prenez soin de votre bien-être personnel',
      detailedDescription: 'Accompagnement individuel pour votre épanouissement',
      icon: User,
      link: '/independent-portal',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      features: ['Coaching personnel', 'Recommandations IA', 'Suivi de progression']
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
              <span className="text-qvt-teal font-medium">Solution complète de bien-être</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in delay-300">
              <span className="text-qvt-soft-black">Bienvenue sur </span>
              <span className="bg-qvt-gradient-primary bg-clip-text text-transparent">QVT Box</span>
            </h1>
            
            <p className="text-xl text-qvt-soft-black/80 mb-8 max-w-2xl mx-auto animate-fade-in delay-500">
              Transformez votre approche du bien-être avec nos solutions innovantes. 
              Questionnaires intelligents, recommandations personnalisées et suivi en temps réel.
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

            <Button 
              onClick={() => setShowMarketResearch(true)}
              className="qvt-bg-teal hover:bg-qvt-teal/90 text-white px-8 py-3 rounded-full text-lg font-semibold animate-fade-in delay-1000 hover-lift"
            >
              Participer à notre étude <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Bulles flottantes décoratives */}
        <div className="absolute top-20 left-10 w-20 h-20 qvt-bg-aqua/20 rounded-full animate-bubble-float delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 qvt-bg-teal/20 rounded-full animate-bubble-float delay-1500"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-purple-400/20 rounded-full animate-bubble-float delay-2000"></div>
      </section>

      {/* Portals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-qvt-soft-black mb-4">
              Choisissez votre parcours
            </h2>
            <p className="text-xl text-qvt-soft-black/70 max-w-2xl mx-auto">
              Des solutions adaptées à chaque contexte, pour un bien-être sur mesure
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portals.map((portal, index) => (
              <Card 
                key={portal.id} 
                className={`qvt-card overflow-hidden hover:shadow-bubble-lg transition-all duration-500 animate-fade-in-scale group`}
                style={{ animationDelay: `${index * 200 + 1200}ms` }}
              >
                <div className={`h-32 ${portal.bgColor} relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${portal.color} opacity-20`}></div>
                  <div className="absolute top-4 right-4">
                    <portal.icon className="w-12 h-12 text-white/80" />
                  </div>
                </div>
                
                <CardContent className="p-6 relative -mt-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${portal.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                    <portal.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-qvt-soft-black mb-2">{portal.title}</h3>
                  <p className="text-qvt-soft-black/70 mb-4">{portal.description}</p>
                  <p className="text-sm text-qvt-soft-black/60 mb-6">{portal.detailedDescription}</p>
                  
                  <div className="space-y-2 mb-6">
                    {portal.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-qvt-teal rounded-full"></div>
                        <span className="text-sm text-qvt-soft-black/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={portal.link}>
                    <Button 
                      className={`w-full bg-gradient-to-r ${portal.color} text-white hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                    >
                      Accéder au portail
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Statistiques et Témoignages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-qvt-soft-black mb-4">
              QVT Box en chiffres
            </h2>
            <p className="text-xl text-qvt-soft-black/70 max-w-3xl mx-auto">
              Rejoignez les milliers de personnes et d'entreprises qui ont déjà transformé leur bien-être
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16 animate-fade-in delay-1600">
            <div className="text-center">
              <div className="text-4xl font-bold text-qvt-teal mb-2">2,500+</div>
              <div className="text-qvt-soft-black/70">Collaborateurs accompagnés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-qvt-aqua mb-2">150+</div>
              <div className="text-qvt-soft-black/70">Entreprises partenaires</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">800+</div>
              <div className="text-qvt-soft-black/70">Familles accompagnées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-qvt-soft-black/70">Taux de satisfaction</div>
            </div>
          </div>

          {/* Témoignages réels */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in delay-1800">
            <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 qvt-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src="/assets/sarah-rh-director.jpg" alt="Sarah M." className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <div className="font-semibold text-qvt-soft-black">Sarah M.</div>
                    <div className="text-sm text-qvt-soft-black/60">DRH, Entreprise Tech</div>
                  </div>
                </div>
                <p className="text-qvt-soft-black/80 italic mb-4">
                  "QVT Box a révolutionné notre approche du bien-être en entreprise. L'engagement de nos équipes a augmenté de 40% en 6 mois."
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 qvt-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">ML</span>
                  </div>
                  <div>
                    <div className="font-semibold text-qvt-soft-black">Marie L.</div>
                    <div className="text-sm text-qvt-soft-black/60">Maman de 2 ados, Rennes</div>
                  </div>
                </div>
                <p className="text-qvt-soft-black/80 italic mb-4">
                  "Grâce à QVTeen Box, j'ai enfin retrouvé une communication apaisée avec mes ados. Les outils sont formidables !"
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 qvt-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-qvt-soft-black">Julien D.</div>
                    <div className="text-sm text-qvt-soft-black/60">Consultant indépendant</div>
                  </div>
                </div>
                <p className="text-qvt-soft-black/80 italic mb-4">
                  "En tant qu'indépendant, QVT Box m'aide à maintenir un équilibre vie pro/perso. Les questionnaires sont très éclairants."
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popup d'étude de marché */}
      <TallyMarketResearchPopup
        isOpen={showMarketResearch}
        onClose={() => setShowMarketResearch(false)}
      />
    </div>
  );
};

export default Home;
