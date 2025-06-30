
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Heart, Users, Sparkles, Shield, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const Index = () => {
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
              className="h-24 w-24 object-contain drop-shadow-2xl"
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/famille">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
                <Heart className="w-5 h-5 mr-2" />
                Espace Famille
              </Button>
            </Link>
            <Link to="/entreprise">
              <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-3 text-lg">
                <Building2 className="w-5 h-5 mr-2" />
                Espace Entreprise
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <Badge className="bg-green-500 text-white">Nouveau !</Badge>
            <Badge className="bg-blue-500 text-white">Phygital</Badge>
            <Badge className="bg-purple-500 text-white">IA Intégrée</Badge>
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
            <Card className="border-teal-200 hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="/lovable-uploads/15bdba5d-c57a-47fa-b8a1-e9c2168b32fb.png" 
                  alt="Bien-être" 
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
            
            <Card className="border-purple-200 hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="/lovable-uploads/777097df-f84d-4104-9ffc-695ed99931db.png" 
                  alt="Prévention burn-out" 
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
            
            <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-cyan-600 mb-4" />
                <CardTitle className="text-cyan-800">Mesure d'Impact</CardTitle>
              </CardHeader>
              <CardContent>
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
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="/lovable-uploads/99f6252d-1cb0-42a7-9b79-3930f5264417.png" 
                  alt="Famille heureuse" 
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
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Découvrir l'univers Famille
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-teal-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="/lovable-uploads/c06535ca-3da6-476e-8686-9908c0725a0f.png" 
                  alt="Équipe dynamique" 
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
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white">
                    Découvrir l'univers Entreprise
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
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
            Rejoignez la révolution du bien-être phygital et transformez votre quotidien dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Commencer maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/concept-qvt">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
