
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Sparkles, Heart, Brain, Package } from "lucide-react";
import WellbeingEvaluator from "../components/WellbeingEvaluator";
import Dashboard from "../components/Dashboard";
import BoxShop from "../components/BoxShop";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeUniverse, setActiveUniverse] = useState<'home' | 'enterprise' | 'family'>('home');
  const [activeSection, setActiveSection] = useState<'dashboard' | 'evaluator' | 'shop'>('dashboard');
  const { toast } = useToast();

  const handleUniverseChange = (universe: 'enterprise' | 'family') => {
    setActiveUniverse(universe);
    setActiveSection('dashboard');
    toast({
      title: `Bienvenue dans l'univers ${universe === 'enterprise' ? 'QVT Box Entreprise' : 'QVTeen Box Famille'}`,
      description: "Découvrez vos outils personnalisés"
    });
  };

  if (activeUniverse !== 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
        <FloatingBubbles />
        
        <div className="container mx-auto px-4 py-6 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/eb868b40-9250-499c-b6ba-c0bc0a57c078.png" 
                alt="QVT Box Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-teal-800">
                  {activeUniverse === 'enterprise' ? 'QVT Box Entreprise' : 'QVTeen Box Famille'}
                </h1>
                <p className="text-teal-600 text-sm">
                  {activeUniverse === 'enterprise' 
                    ? 'Santé mentale & bien-être au travail' 
                    : 'Espace famille pour ados & parents'}
                </p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setActiveUniverse('home')}
                className="text-teal-700 border-teal-300 hover:bg-teal-50"
              >
                Accueil
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mb-8">
            <Button
              variant={activeSection === 'dashboard' ? 'default' : 'outline'}
              onClick={() => setActiveSection('dashboard')}
              className={activeSection === 'dashboard' 
                ? 'bg-teal-600 hover:bg-teal-700' 
                : 'border-teal-300 text-teal-700 hover:bg-teal-50'}
            >
              <Brain className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button
              variant={activeSection === 'evaluator' ? 'default' : 'outline'}
              onClick={() => setActiveSection('evaluator')}
              className={activeSection === 'evaluator' 
                ? 'bg-teal-600 hover:bg-teal-700' 
                : 'border-teal-300 text-teal-700 hover:bg-teal-50'}
            >
              <Heart className="w-4 h-4 mr-2" />
              Évaluation
            </Button>
            <Button
              variant={activeSection === 'shop' ? 'default' : 'outline'}
              onClick={() => setActiveSection('shop')}
              className={activeSection === 'shop' 
                ? 'bg-teal-600 hover:bg-teal-700' 
                : 'border-teal-300 text-teal-700 hover:bg-teal-50'}
            >
              <Package className="w-4 h-4 mr-2" />
              Boutique
            </Button>
          </div>

          {/* Content */}
          {activeSection === 'dashboard' && <Dashboard universe={activeUniverse} />}
          {activeSection === 'evaluator' && <WellbeingEvaluator universe={activeUniverse} />}
          {activeSection === 'shop' && <BoxShop universe={activeUniverse} />}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/eb868b40-9250-499c-b6ba-c0bc0a57c078.png" 
              alt="QVT Box Logo" 
              className="h-24 w-auto animate-fade-in"
            />
          </div>
          
          <h1 className="text-5xl font-bold text-teal-800 mb-6 animate-fade-in">
            QVT Box
          </h1>
          <p className="text-xl text-teal-600 mb-4 max-w-3xl mx-auto animate-fade-in">
            Une solution phygitale de santé mentale à double impact : entreprise & famille
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto animate-fade-in">
            Intelligence artificielle, accompagnement humain et objets physiques pour le bien-être des salariés, 
            des ados et de leur entourage.
          </p>
        </div>

        {/* Two Universes */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Universe 1 - Enterprise */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-teal-200 hover:border-teal-300 animate-scale-in">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-teal-800">QVT Box Entreprise</CardTitle>
              <CardDescription className="text-teal-600">
                Prévention des risques psychosociaux & cohésion d'équipe
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-teal-100 text-teal-800">Burn-out</Badge>
                <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">Télétravail</Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">Cohésion</Badge>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">Performance</Badge>
              </div>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-500" />
                  Évaluateur bien-être express (2 min)
                </li>
                <li className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-teal-500" />
                  IA émotionnelle prédictive
                </li>
                <li className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-teal-500" />
                  Box mensuelles personnalisées
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-teal-500" />
                  Dashboard RH & reporting
                </li>
              </ul>
              
              <div className="pt-4 border-t">
                <p className="text-lg font-semibold text-teal-700 mb-2">33€/salarié/mois</p>
                <Button 
                  onClick={() => handleUniverseChange('enterprise')}
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white"
                >
                  Découvrir l'univers Entreprise
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Universe 2 - Family */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-purple-200 hover:border-purple-300 animate-scale-in">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-800">QVTeen Box Famille</CardTitle>
              <CardDescription className="text-purple-600">
                Espace d'expression pour ados & parents (11-18 ans)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">Digital Detox</Badge>
                <Badge variant="secondary" className="bg-pink-100 text-pink-800">SafeZone</Badge>
                <Badge variant="secondary" className="bg-violet-100 text-violet-800">Dialogue</Badge>
                <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Émotion</Badge>
              </div>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  Diagnostic familial rapide (2 min)
                </li>
                <li className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-500" />
                  Mood-tracker intergénérationnel
                </li>
                <li className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-purple-500" />
                  Teen Box & Family Box
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-500" />
                  Interface famille multi-profils
                </li>
              </ul>
              
              <div className="pt-4 border-t">
                <p className="text-lg font-semibold text-purple-700 mb-2">25€/famille/mois</p>
                <Button 
                  onClick={() => handleUniverseChange('family')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  Découvrir l'univers Famille
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Overview */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-100">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
            Une IA émotionnelle éthique & transparente
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-teal-800 mb-2">Détection précoce</h3>
              <p className="text-sm text-gray-600">
                Signaux faibles détectés avant qu'ils ne deviennent critiques
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-cyan-800 mb-2">Vision interconnectée</h3>
              <p className="text-sm text-gray-600">
                Croise sphère pro et perso sans empiéter sur l'intimité
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">100% RGPD</h3>
              <p className="text-sm text-gray-600">
                Respecte la vie privée avec une transparence totale
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
