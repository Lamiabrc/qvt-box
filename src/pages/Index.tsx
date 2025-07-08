
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Heart, Users, Sparkles, Shield, TrendingUp, ArrowRight, CheckCircle, Play, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FloatingBubbles from "../components/FloatingBubbles";
import MarketResearchPopup from "../components/MarketResearchPopup";
import sarahPhoto from "../assets/sarah-rh-director.jpg";

const Index = () => {
  const [showMarketResearchPopup, setShowMarketResearchPopup] = useState(false);

  useEffect(() => {
    // Afficher le popup après 3 secondes sur la page d'accueil
    const timer = setTimeout(() => {
      setShowMarketResearchPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      {/* Hero Section */}
      <section className="relative z-10 px-4 py-20">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/bed0f5ad-cedc-4afa-8b5d-24f9bf8ec5ff.png" 
              alt="QVT Box - Sortez de votre bulle, on veille sur vous" 
              className="h-32 w-32 object-cover rounded-full drop-shadow-2xl border-4 border-white/50 animate-pulse"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-6">
            QVT Box
          </h1>
          
          <p className="text-xl md:text-2xl text-teal-700 font-medium mb-4">
            "Sortez de votre bulle, on veille sur vous"
          </p>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            La première solution phygitale qui transforme le bien-être en expérience tangible et mesurable
          </p>
          
          {/* Hero Images Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Équipe heureuse au travail"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Bien-être au travail</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Famille unie et souriante"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Harmonie familiale</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Innovation et technologie"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Innovation phygitale</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/famille">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all">
                <Heart className="w-5 h-5 mr-2" />
                Espace Famille
              </Button>
            </Link>
            <Link to="/entreprise">
              <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all">
                <Building2 className="w-5 h-5 mr-2" />
                Espace Entreprise
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Badge className="bg-green-500 text-white animate-bounce">Nouveau !</Badge>
            <Badge className="bg-blue-500 text-white">Phygital</Badge>
            <Badge className="bg-purple-500 text-white">IA Intégrée</Badge>
          </div>

          {/* Bouton pour ouvrir le popup d'étude de marché */}
          <div className="mb-8">
            <Button 
              onClick={() => setShowMarketResearchPopup(true)}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Participer à notre étude de marché
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Test Section - Nouveau */}
      <section className="relative z-10 px-4 py-16 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tests Rapides Gratuits
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez nos solutions en 5 minutes - Aucune inscription requise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Test Entreprise */}
            <Card className="border-teal-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-teal-800">Test Manager/Salarié</CardTitle>
                <CardDescription className="text-teal-600">
                  Diagnostic QVT entreprise en 5 min
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Détection risques psychosociaux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Évaluation bien-être équipe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Recommandations personnalisées</span>
                  </div>
                </div>
                <Link to="/entreprise-solutions" className="block">
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Tester maintenant - Gratuit
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Test Famille */}
            <Card className="border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-800">Test Famille/Ado</CardTitle>
                <CardDescription className="text-purple-600">
                  Diagnostic harmonie familiale en 5 min
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Climat familial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Communication parent-ado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Solutions adaptées</span>
                  </div>
                </div>
                <Link to="/family-simulator" className="block">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Tester maintenant - Gratuit
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              💡 Pour accéder aux solutions complètes, connectez-vous avec votre code famille ou entreprise
            </p>
            <Link to="/login">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                Se connecter avec un code
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section avec images */}
      <section className="relative z-10 px-4 py-16 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Pourquoi QVT Box révolutionne le bien-être ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-teal-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Innovation phygitale" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative z-10">
                <Sparkles className="w-12 h-12 text-teal-600 mb-4" />
                <CardTitle className="text-teal-800">Phygital Unique</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600">
                  Fusion parfaite entre digital intelligent et expérience physique tangible avec nos box mensuelles personnalisées.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img 
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Prévention santé mentale" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative z-10">
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-purple-800">Prévention Active</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600">
                  IA prédictive qui détecte les signaux faibles et prévient les risques avant qu'ils ne deviennent critiques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-cyan-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Analytics et mesures" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative z-10">
                <TrendingUp className="w-12 h-12 text-cyan-600 mb-4" />
                <CardTitle className="text-cyan-800">Mesure d'Impact</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600">
                  Tableaux de bord temps réel pour mesurer concrètement l'amélioration du bien-être et de la performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Universes Section avec images */}
      <section className="relative z-10 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Nos Univers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-purple-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img 
                  src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Famille heureuse ensemble" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center relative z-10">
                <Heart className="w-16 h-16 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl text-purple-800">QVTeen Box Famille</CardTitle>
                <CardDescription className="text-purple-600">
                  Harmonie familiale entre ados et parents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Diagnostic familial rapide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Mood-tracker intergénérationnel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Teen Box & Family Box mensuelles</span>
                  </li>
                </ul>
                <Link to="/famille" className="block">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all">
                    Découvrir l'univers Famille
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-teal-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Équipe professionnelle dynamique" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="text-center relative z-10">
                <Building2 className="w-16 h-16 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl text-teal-800">QVT Box Entreprise</CardTitle>
                <CardDescription className="text-teal-600">
                  Prévention des risques psychosociaux au travail
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Évaluateur bien-être IA (2 min)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Dashboard RH complet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Prédiction burn-out</span>
                  </li>
                </ul>
                <Link to="/entreprise" className="block">
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all">
                    Découvrir l'univers Entreprise
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="relative z-10 px-4 py-16 bg-gradient-to-br from-teal-100/50 to-cyan-100/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Ils nous font confiance
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                 <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                   <img 
                     src={sarahPhoto}
                     alt="Sarah, Directrice RH"
                     className="w-full h-full object-cover"
                   />
                 </div>
                <p className="text-gray-600 italic mb-4">
                  "QVT Box a révolutionné notre approche du bien-être en entreprise. Les résultats sont mesurables !"
                </p>
                <p className="font-semibold text-teal-800">Sarah M.</p>
                <p className="text-sm text-gray-500">Directrice RH</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Marc, Manager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Enfin une solution concrète pour prévenir le burn-out dans nos équipes. L'IA est bluffante !"
                </p>
                <p className="font-semibold text-teal-800">Marc L.</p>
                <p className="text-sm text-gray-500">Manager</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Claire, Maman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 italic mb-4">
                  "La QVTeen Box a créé de vrais moments de complicité avec ma fille ado. Merci !"
                </p>
                <p className="font-semibold text-purple-800">Claire B.</p>
                <p className="text-sm text-gray-500">Maman de 2 ados</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 px-4 py-16 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à sortir de votre bulle ?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Rejoignez la révolution du bien-être phygitale et transformez votre quotidien dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all">
                Commencer maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/concept-qvt">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popup d'étude de marché */}
      <MarketResearchPopup 
        isOpen={showMarketResearchPopup}
        onClose={() => setShowMarketResearchPopup(false)}
      />
    </div>
  );
};

export default Index;
