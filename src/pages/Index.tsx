import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Sparkles, Heart, Brain, Package, ArrowRight, CheckCircle, Star, Zap } from "lucide-react";
import WellbeingEvaluator from "../components/WellbeingEvaluator";
import Dashboard from "../components/Dashboard";
import BoxShop from "../components/BoxShop";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeUniverse, setActiveUniverse] = useState<'home' | 'enterprise' | 'family'>('home');
  const [activeSection, setActiveSection] = useState<'dashboard' | 'evaluator' | 'shop'>('dashboard');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showWowEffect, setShowWowEffect] = useState(true);
  const { toast } = useToast();

  const testimonials = [
    {
      name: "Marie L.",
      role: "RH Manager",
      company: "TechCorp",
      text: "QVT Box a révolutionné notre approche du bien-être. -30% de burn-out en 6 mois !",
      rating: 5
    },
    {
      name: "Sophie M.",
      role: "Maman de 2 ados",
      text: "Enfin un outil qui aide toute la famille. La communication s'est nettement améliorée.",
      rating: 5
    },
    {
      name: "Thomas R.",
      role: "Chef d'équipe",
      company: "InnovTech",
      text: "Les analytics me permettent d'anticiper les problèmes avant qu'ils n'éclatent.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Effet WAOU d'entrée
    const timer = setTimeout(() => {
      setShowWowEffect(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleUniverseChange = (universe: 'enterprise' | 'family') => {
    setActiveUniverse(universe);
    setActiveSection('dashboard');
    toast({
      title: `Bienvenue dans l'univers ${universe === 'enterprise' ? 'QVT Box Entreprise' : 'QVTeen Box Famille'}`,
      description: "Découvrez vos outils personnalisés"
    });
  };

  const handleGetStarted = () => {
    toast({
      title: "Commencer l'aventure QVT",
      description: "Choisissez votre univers pour démarrer"
    });
    document.getElementById('universes')?.scrollIntoView({ behavior: 'smooth' });
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
              <Link to="/admin-login">
                <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                  Admin
                </Button>
              </Link>
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
      
      {/* Effet WAOU d'entrée */}
      {showWowEffect && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 flex items-center justify-center">
          <div className="text-center text-white animate-pulse">
            <div className="relative mb-8">
              <img 
                src="/lovable-uploads/eb868b40-9250-499c-b6ba-c0bc0a57c078.png" 
                alt="QVT Box Logo" 
                className="h-40 w-auto mx-auto animate-bounce drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-ping" />
            </div>
            <h1 className="text-6xl font-bold mb-4 animate-fade-in">QVT Box</h1>
            <p className="text-2xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
              "Sortez de votre bulle, on veille sur vous"
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-20 h-1 bg-white/50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section avec effet Waou */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-blue-400/20 blur-3xl animate-pulse" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/eb868b40-9250-499c-b6ba-c0bc0a57c078.png" 
                  alt="QVT Box Logo" 
                  className="h-32 w-auto animate-fade-in drop-shadow-2xl transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                  Nouveau !
                </div>
                <div className="absolute -bottom-2 -left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  IA
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 mb-6 animate-fade-in transform hover:scale-105 transition-transform duration-300">
              QVT Box
            </h1>
            
            {/* Motto prominently displayed */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-teal-200/50 shadow-xl mb-6 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
                  "Sortez de votre bulle, on veille sur vous"
                </h2>
                <p className="text-lg text-teal-700 opacity-90">
                  Notre devise : vous accompagner vers un bien-être authentique
                </p>
              </div>
              
              <p className="text-2xl text-teal-700 mb-4 font-semibold animate-fade-in">
                L'IA émotionnelle qui révolutionne le bien-être
              </p>
              <p className="text-xl text-teal-600 mb-6 max-w-4xl mx-auto animate-fade-in">
                Solution phygitale de santé mentale à <span className="font-bold text-cyan-600">double impact</span> : 
                entreprise & famille
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 text-sm hover:scale-105 transition-transform cursor-pointer">
                  <Zap className="w-4 h-4 mr-2" />
                  IA prédictive
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm hover:scale-105 transition-transform cursor-pointer">
                  <Heart className="w-4 h-4 mr-2" />
                  100% RGPD
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 text-sm hover:scale-105 transition-transform cursor-pointer">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Résultats prouvés
                </Badge>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleGetStarted}
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Commencer l'aventure QVT
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to="/admin-login">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-purple-400 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Administration
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Témoignages rotatifs */}
        <div className="mb-16">
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <p className="text-lg text-gray-700 italic mb-4">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <p className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentTestimonial].role}
                  {testimonials[currentTestimonial].company && ` - ${testimonials[currentTestimonial].company}`}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Deux Univers */}
        <div id="universes" className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Universe 1 - Enterprise */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-teal-200 hover:border-teal-300 animate-scale-in transform hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-teal-800 mb-2">QVT Box Entreprise</CardTitle>
              <CardDescription className="text-teal-600 text-lg">
                Prévention des risques psychosociaux & cohésion d'équipe
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-teal-100 text-teal-800">Burn-out</Badge>
                <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">Télétravail</Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">Cohésion</Badge>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">Performance</Badge>
              </div>
              
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-teal-500" />
                  <span>Évaluateur bien-être express (2 min)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-teal-500" />
                  <span>IA émotionnelle prédictive</span>
                </li>
                <li className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-teal-500" />
                  <span>Box mensuelles personnalisées</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-teal-500" />
                  <span>Dashboard RH & reporting</span>
                </li>
              </ul>
              
              <div className="pt-6 border-t bg-gradient-to-r from-teal-50 to-cyan-50 -mx-6 -mb-6 px-6 pb-6">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-2xl font-bold text-teal-700">33€/salarié/mois</p>
                  <Badge className="bg-green-100 text-green-700">ROI garanti</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <Link to="/employee-dashboard">
                    <Button variant="outline" size="sm" className="w-full mb-2 hover:scale-105 transition-transform">
                      Espace Salarié
                    </Button>
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    <Link to="/team-leader-dashboard">
                      <Button variant="outline" size="sm" className="w-full text-xs hover:scale-105 transition-transform">
                        Chef d'Équipe
                      </Button>
                    </Link>
                    <Link to="/qvt-manager-dashboard">
                      <Button variant="outline" size="sm" className="w-full text-xs hover:scale-105 transition-transform">
                        Resp. QVT
                      </Button>
                    </Link>
                  </div>
                </div>
                <Button 
                  onClick={() => handleUniverseChange('enterprise')}
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg hover:scale-105 transition-transform"
                >
                  Découvrir l'univers Entreprise
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Universe 2 - Family */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-purple-200 hover:border-purple-300 animate-scale-in transform hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="text-center pb-4 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-800 mb-2">QVTeen Box Famille</CardTitle>
              <CardDescription className="text-purple-600 text-lg">
                Espace d'expression pour ados & parents (11-18 ans)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">Digital Detox</Badge>
                <Badge variant="secondary" className="bg-pink-100 text-pink-800">SafeZone</Badge>
                <Badge variant="secondary" className="bg-violet-100 text-violet-800">Dialogue</Badge>
                <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">Émotion</Badge>
              </div>
              
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <span>Diagnostic familial rapide (2 min)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-purple-500" />
                  <span>Mood-tracker intergénérationnel</span>
                </li>
                <li className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-purple-500" />
                  <span>Teen Box & Family Box</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span>Interface famille multi-profils</span>
                </li>
              </ul>
              
              <div className="pt-6 border-t bg-gradient-to-r from-purple-50 to-pink-50 -mx-6 -mb-6 px-6 pb-6">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-2xl font-bold text-purple-700">25€/famille/mois</p>
                  <Badge className="bg-green-100 text-green-700">Harmonie familiale</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <Link to="/teens-home">
                    <Button variant="outline" size="sm" className="w-full mb-2 hover:scale-105 transition-transform">
                      Espace Ados
                    </Button>
                  </Link>
                  <Link to="/parent-dashboard">
                    <Button variant="outline" size="sm" className="w-full hover:scale-105 transition-transform">
                      Espace Parents
                    </Button>
                  </Link>
                </div>
                <Button 
                  onClick={() => handleUniverseChange('family')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:scale-105 transition-transform"
                >
                  Découvrir l'univers Famille
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Overview avec animations */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-teal-100 mb-16 hover:shadow-3xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold text-center text-teal-800 mb-6">
            Une IA émotionnelle éthique & transparente
          </h2>
          <p className="text-center text-lg text-teal-600 mb-12 italic">
            "Sortez de votre bulle, on veille sur vous" - Notre engagement quotidien
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-teal-800 mb-3 text-lg">Détection précoce</h3>
              <p className="text-gray-600">
                Signaux faibles détectés avant qu'ils ne deviennent critiques
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-cyan-800 mb-3 text-lg">Vision interconnectée</h3>
              <p className="text-gray-600">
                Croise sphère pro et perso sans empiéter sur l'intimité
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-800 mb-3 text-lg">100% RGPD</h3>
              <p className="text-gray-600">
                Respecte la vie privée avec une transparence totale
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action final */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-teal-800 mb-4">
            Prêt à révolutionner votre bien-être ?
          </h3>
          <p className="text-teal-600 mb-8 max-w-2xl mx-auto">
            Rejoignez les milliers d'utilisateurs qui ont déjà transformé leur quotidien avec QVT Box
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 hover:scale-105 transition-transform">
                Découvrir la boutique
                <Package className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50 hover:scale-105 transition-transform">
                Demander une démo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/simulator-home">
              <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:scale-105 transition-transform">
                Simulateurs gratuits
                <Brain className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
