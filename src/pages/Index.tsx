
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Sparkles, Heart, Brain, Package, ArrowRight, CheckCircle, Star, Zap, Eye, Rocket, Target, Trophy } from "lucide-react";
import WellbeingEvaluator from "../components/WellbeingEvaluator";
import Dashboard from "../components/Dashboard";
import BoxShop from "../components/BoxShop";
import FloatingBubbles from "../components/FloatingBubbles";
import SubscriptionPopup from "../components/SubscriptionPopup";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeUniverse, setActiveUniverse] = useState<'home' | 'enterprise' | 'family'>('home');
  const [activeSection, setActiveSection] = useState<'dashboard' | 'evaluator' | 'shop'>('dashboard');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const [statsCounter, setStatsCounter] = useState({ users: 0, companies: 0, satisfaction: 0 });
  const { toast } = useToast();

  const testimonials = [
    {
      name: "Marie L.",
      role: "RH Manager",
      company: "TechCorp",
      text: "QVT Box a révolutionné notre approche du bien-être. -30% de burn-out en 6 mois !",
      rating: 5,
      avatar: "🧑‍💼"
    },
    {
      name: "Sophie M.",
      role: "Maman de 2 ados",
      text: "Enfin un outil qui aide toute la famille. La communication s'est nettement améliorée.",
      rating: 5,
      avatar: "👩‍👧‍👦"
    },
    {
      name: "Thomas R.",
      role: "Chef d'équipe",
      company: "InnovTech",
      text: "Les analytics me permettent d'anticiper les problèmes avant qu'ils n'éclatent.",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];

  const stats = [
    { icon: Users, label: "Utilisateurs actifs", value: 15000, suffix: "+" },
    { icon: Building2, label: "Entreprises partenaires", value: 250, suffix: "+" },
    { icon: Heart, label: "Taux de satisfaction", value: 98, suffix: "%" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animation des statistiques
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatsCounter({ users: 15000, companies: 250, satisfaction: 98 });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Afficher le popup après 3 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubscriptionPopup(true);
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
                className="h-12 w-12 rounded-full object-cover shadow-lg"
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-pink-500/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>

      <FloatingBubbles />
      
      {/* Pop-up d'abonnement */}
      <SubscriptionPopup 
        isOpen={showSubscriptionPopup} 
        onClose={() => setShowSubscriptionPopup(false)} 
      />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section ultra-moderne */}
        <div className="text-center mb-20 relative">
          <div className="relative z-10">
            {/* Logo avec effet holographique */}
            <div className="flex justify-center mb-12">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-60 animate-pulse transition-opacity duration-1000"></div>
                <img 
                  src="/lovable-uploads/eb868b40-9250-499c-b6ba-c0bc0a57c078.png" 
                  alt="QVT Box Logo" 
                  className="relative h-40 w-40 drop-shadow-2xl transform hover:scale-110 transition-transform duration-700 rounded-full object-cover ring-4 ring-white/20"
                />
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-2xl">
                  ✨ Nouveau !
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-xl">
                  🤖 IA
                </div>
              </div>
            </div>
            
            {/* Titre principal avec effet néon */}
            <div className="mb-8 relative">
              <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 transform hover:scale-105 transition-transform duration-500 animate-fade-in">
                QVT Box
              </h1>
              <div className="absolute inset-0 text-8xl font-black text-cyan-400/20 blur-sm -z-10 animate-pulse">
                QVT Box
              </div>
            </div>
            
            {/* Slogan avec animation */}
            <div className="mb-12 space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-3xl rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                <div className="relative bg-gradient-to-r from-slate-800/90 via-purple-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-700">
                  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-4 animate-fade-in">
                    "Sortez de votre bulle, on veille sur vous"
                  </h2>
                  <p className="text-xl text-slate-300 opacity-90 animate-fade-in delay-150">
                    Notre devise : vous accompagner vers un bien-être authentique
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-3xl text-cyan-200 font-bold animate-fade-in delay-300">
                  L'IA émotionnelle qui révolutionne le bien-être
                </p>
                <p className="text-xl text-slate-300 max-w-5xl mx-auto animate-fade-in delay-500">
                  Solution phygitale de santé mentale à <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">double impact</span> : 
                  entreprise & famille
                </p>
              </div>
              
              {/* Badges avec effets */}
              <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in delay-700">
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 text-lg hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/50">
                  <Zap className="w-5 h-5 mr-2" />
                  IA prédictive
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-lg hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/50">
                  <Heart className="w-5 h-5 mr-2" />
                  100% RGPD
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 text-lg hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-green-500/50">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Résultats prouvés
                </Badge>
              </div>
            </div>

            {/* CTA Buttons avec effets spectaculaires */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in delay-1000">
              <Button 
                onClick={handleGetStarted}
                size="lg"
                className="group relative bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 text-white text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 transform hover:scale-105 border-2 border-transparent hover:border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <span className="relative flex items-center">
                  <Rocket className="w-6 h-6 mr-3 animate-pulse" />
                  Choisir mon univers
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              <Link to="/admin-login">
                <Button 
                  variant="outline"
                  size="lg"
                  className="group border-2 border-purple-400/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-300 px-12 py-6 rounded-full shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-slate-800/50"
                >
                  <Eye className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Administration
                </Button>
              </Link>
            </div>

            {/* Statistiques animées */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in delay-1200">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-purple-900/80 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                        {index === 0 ? statsCounter.users.toLocaleString() + stat.suffix : 
                         index === 1 ? statsCounter.companies.toLocaleString() + stat.suffix :
                         statsCounter.satisfaction + stat.suffix}
                      </div>
                      <p className="text-slate-300 font-medium">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Témoignages avec design futuriste */}
        <div className="mb-20 animate-fade-in delay-1400">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/90 to-purple-900/90 backdrop-blur-xl border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            <CardContent className="p-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg"></div>
              <div className="relative">
                <div className="text-6xl mb-6">{testimonials[currentTestimonial].avatar}</div>
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-2xl text-slate-200 italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <p className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-slate-300">
                    {testimonials[currentTestimonial].role}
                    {testimonials[currentTestimonial].company && ` - ${testimonials[currentTestimonial].company}`}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Deux Univers - Design révolutionnaire */}
        <div id="universes" className="mb-20 animate-fade-in delay-1600">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-6">
              Deux univers, une même mission
            </h2>
            <p className="text-2xl text-slate-300 mb-8">Votre bien-être au cœur de nos préoccupations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Universe 1 - Enterprise */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-800/90 to-teal-900/90 backdrop-blur-xl border-teal-500/30 hover:border-teal-400/50 transition-all duration-700 hover:scale-105 shadow-2xl hover:shadow-teal-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Building2 className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-3xl text-teal-200 mb-3 group-hover:text-teal-100 transition-colors duration-300">QVT Box Entreprise</CardTitle>
                <CardDescription className="text-teal-300 text-lg">
                  Prévention des risques psychosociaux & cohésion d'équipe
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8 relative z-10">
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Burn-out', 'Télétravail', 'Cohésion', 'Performance'].map((tag, idx) => (
                    <Badge key={idx} className="bg-teal-500/20 text-teal-200 border border-teal-400/30 px-3 py-1 hover:bg-teal-400/30 transition-colors duration-300">{tag}</Badge>
                  ))}
                </div>
                
                <ul className="space-y-4 text-slate-300">
                  {[
                    { icon: Sparkles, text: "Évaluateur bien-être express (2 min)" },
                    { icon: Brain, text: "IA émotionnelle prédictive" },
                    { icon: Package, text: "Box mensuelles personnalisées" },
                    { icon: Users, text: "Dashboard RH & reporting" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 group-hover:text-teal-100 transition-colors duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8 border-t border-teal-500/30">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-3xl font-bold text-teal-200">33€/salarié/mois</p>
                    <Badge className="bg-green-500/20 text-green-300 border border-green-400/30">ROI garanti</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <Link to="/employee-dashboard">
                      <Button variant="outline" className="w-full border-teal-400/50 text-teal-200 hover:bg-teal-500/10 hover:border-teal-300 transition-all duration-300">
                        Espace Salarié
                      </Button>
                    </Link>
                    <div className="grid grid-cols-2 gap-3">
                      <Link to="/team-leader-dashboard">
                        <Button variant="outline" size="sm" className="w-full text-xs border-teal-400/50 text-teal-200 hover:bg-teal-500/10 transition-all duration-300">
                          Chef d'Équipe
                        </Button>
                      </Link>
                      <Link to="/qvt-manager-dashboard">
                        <Button variant="outline" size="sm" className="w-full text-xs border-teal-400/50 text-teal-200 hover:bg-teal-500/10 transition-all duration-300">
                          Resp. QVT
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleUniverseChange('enterprise')}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white shadow-xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <Target className="w-5 h-5 mr-2" />
                    Découvrir l'univers Entreprise
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Universe 2 - Family */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-800/90 to-purple-900/90 backdrop-blur-xl border-purple-500/30 hover:border-purple-400/50 transition-all duration-700 hover:scale-105 shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-3xl text-purple-200 mb-3 group-hover:text-purple-100 transition-colors duration-300">QVTeen Box Famille</CardTitle>
                <CardDescription className="text-purple-300 text-lg">
                  Espace d'expression pour ados & parents (11-18 ans)
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8 relative z-10">
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Digital Detox', 'SafeZone', 'Dialogue', 'Émotion'].map((tag, idx) => (
                    <Badge key={idx} className="bg-purple-500/20 text-purple-200 border border-purple-400/30 px-3 py-1 hover:bg-purple-400/30 transition-colors duration-300">{tag}</Badge>
                  ))}
                </div>
                
                <ul className="space-y-4 text-slate-300">
                  {[
                    { icon: Sparkles, text: "Diagnostic familial rapide (2 min)" },
                    { icon: Brain, text: "Mood-tracker intergénérationnel" },
                    { icon: Package, text: "Teen Box & Family Box" },
                    { icon: Users, text: "Interface famille multi-profils" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 group-hover:text-purple-100 transition-colors duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8 border-t border-purple-500/30">
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-3xl font-bold text-purple-200">25€/famille/mois</p>
                    <Badge className="bg-green-500/20 text-green-300 border border-green-400/30">Harmonie familiale</Badge>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <Link to="/teens-home">
                      <Button variant="outline" className="w-full border-purple-400/50 text-purple-200 hover:bg-purple-500/10 hover:border-purple-300 transition-all duration-300">
                        Espace Ados
                      </Button>
                    </Link>
                    <Link to="/parent-dashboard">
                      <Button variant="outline" className="w-full border-purple-400/50 text-purple-200 hover:bg-purple-500/10 hover:border-purple-300 transition-all duration-300">
                        Espace Parents
                      </Button>
                    </Link>
                  </div>
                  
                  <Button 
                    onClick={() => handleUniverseChange('family')}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Découvrir l'univers Famille
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features avec design ultra-moderne */}
        <div className="mb-20 animate-fade-in delay-1800">
          <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-slate-700/50 shadow-2xl hover:shadow-slate-500/10 transition-all duration-500">
            <CardContent className="p-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-lg"></div>
              <div className="relative">
                <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-8">
                  Une IA émotionnelle éthique & transparente
                </h2>
                <p className="text-center text-2xl text-slate-300 mb-16 italic">
                  "Sortez de votre bulle, on veille sur vous" - Notre engagement quotidien
                </p>
                
                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    { icon: Brain, title: "Détection précoce", desc: "Signaux faibles détectés avant qu'ils ne deviennent critiques", color: "from-cyan-400 to-blue-500" },
                    { icon: Heart, title: "Vision interconnectée", desc: "Croise sphère pro et perso sans empiéter sur l'intimité", color: "from-purple-400 to-pink-500" },
                    { icon: Sparkles, title: "100% RGPD", desc: "Respecte la vie privée avec une transparence totale", color: "from-green-400 to-emerald-500" }
                  ].map((feature, idx) => (
                    <div key={idx} className="text-center group">
                      <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="font-bold text-2xl text-slate-200 mb-4 group-hover:text-white transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action final spectaculaire */}
        <div className="text-center animate-fade-in delay-2000">
          <div className="relative group mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
              <Trophy className="w-16 h-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6" />
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-6">
                Prêt à révolutionner votre bien-être ?
              </h3>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Rejoignez les milliers d'utilisateurs qui ont déjà transformé leur quotidien avec QVT Box
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/shop">
                  <Button size="lg" className="group bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 px-10 py-4 text-lg shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-105">
                    <Package className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    Découvrir la boutique
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500 px-10 py-4 text-lg shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <ArrowRight className="w-6 h-6 mr-3" />
                    Demander une démo
                  </Button>
                </Link>
                <Link to="/simulator-home">
                  <Button size="lg" variant="outline" className="border-2 border-purple-600/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-10 py-4 text-lg shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <Brain className="w-6 h-6 mr-3" />
                    Simulateurs gratuits
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
