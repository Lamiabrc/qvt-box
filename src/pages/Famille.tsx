
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Shield, 
  Brain,
  Sparkles,
  Calendar,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Play,
  Package,
  Star,
  Smile,
  Building2,
  CreditCard
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import SubscriptionPopup from "../components/SubscriptionPopup";
import { Link } from "react-router-dom";

const Famille = () => {
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section avec image */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
            <img 
              src="/lovable-uploads/99f6252d-1cb0-42a7-9b79-3930f5264417.png" 
              alt="Famille heureuse" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8">
            <Badge className="mb-4 bg-purple-100 text-purple-800">QVTeen Box Famille</Badge>
            <h1 className="text-5xl font-bold text-purple-800 mb-6">
              Espace Famille Connecté
            </h1>
            <p className="text-xl text-purple-600 mb-8 max-w-4xl mx-auto">
              Un espace d'expression et de régulation émotionnelle pour les ados et leurs parents.
              Créer du lien intergénérationnel et favoriser le dialogue en famille.
            </p>
          </div>
        </div>

        {/* Simulator Test Buttons */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">
              Testez nos Simulateurs Famille
            </h2>
            <p className="text-lg text-purple-600">
              Évaluations rapides avec recommandations de box personnalisées
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Parent Simulator */}
            <Card className="hover:shadow-xl transition-all duration-300 border-purple-200 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="/lovable-uploads/c06535ca-3da6-476e-8686-9908c0725a0f.png" 
                  alt="Parent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-800">Simulateur Parent</CardTitle>
                <CardDescription className="text-gray-600">
                  Évaluez votre bien-être parental en 3 minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Charge mentale parentale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Communication parent-ado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Box Famille personnalisées</span>
                  </div>
                </div>
                <Link to="/family-parent-simulator">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Play className="w-4 h-4 mr-2" />
                    Tester maintenant
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Teen Simulator */}
            <Card className="hover:shadow-xl transition-all duration-300 border-pink-200 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="/lovable-uploads/15bdba5d-c57a-47fa-b8a1-e9c2168b32fb.png" 
                  alt="Adolescent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-violet-500 rounded-xl flex items-center justify-center mb-4">
                  <Smile className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-pink-800">Simulateur Ado</CardTitle>
                <CardDescription className="text-gray-600">
                  Auto-évaluation du bien-être adolescent
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Bilan émotionnel complet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Gestion temps d'écran</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Box Ado personnalisées</span>
                  </div>
                </div>
                <Link to="/family-teen-simulator">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">
                    <Play className="w-4 h-4 mr-2" />
                    Tester maintenant
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Family-Enterprise Simulator */}
            <Card className="hover:shadow-xl transition-all duration-300 border-teal-200 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="/lovable-uploads/99f6252d-1cb0-42a7-9b79-3930f5264417.png" 
                  alt="Famille Entreprise" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-teal-800">Simulateur Famille-Entreprise</CardTitle>
                <CardDescription className="text-gray-600">
                  Équilibre vie professionnelle et familiale
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Équilibre vie pro/perso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Communication famille-travail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Solutions QVT personnalisées</span>
                  </div>
                </div>
                <Link to="/family-enterprise-simulator">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <Play className="w-4 h-4 mr-2" />
                    Tester maintenant
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Box Recommendations Preview */}
        <div className="mb-16 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-cyan-800 mb-4">
              Nos Box Famille Recommandées
            </h3>
            <p className="text-cyan-600">
              Découvrez nos solutions personnalisées selon vos résultats de simulation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Box Communication */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-500 text-white">COMMUNICATION</Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.7/5</span>
                  </div>
                </div>
                <CardTitle className="text-lg text-blue-800">Family Box Dialogue</CardTitle>
                <CardDescription>
                  Améliorer la communication parent-ado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-4">39€/mois</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-blue-500" />
                    Cartes de conversation
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-blue-500" />
                    Activités famille
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-blue-500" />
                    Guide parents-ados
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Box Détox Numérique */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-500 text-white">DIGITAL DETOX</Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.5/5</span>
                  </div>
                </div>
                <CardTitle className="text-lg text-green-800">Teen Box Déconnexion</CardTitle>
                <CardDescription>
                  Gérer sainement le temps d'écran
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-4">44€/mois</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-green-500" />
                    Activités créatives offline
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-green-500" />
                    Planning équilibré
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-green-500" />
                    Jeux de société modernes
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Box Émotions */}
            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-purple-500 text-white">ÉMOTIONS</Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.8/5</span>
                  </div>
                </div>
                <CardTitle className="text-lg text-purple-800">Teen Box Émotions</CardTitle>
                <CardDescription>
                  Comprendre et gérer ses émotions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600 mb-4">34€/mois</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-purple-500" />
                    Roue des émotions
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-purple-500" />
                    Journal créatif
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-purple-500" />
                    Techniques d'apaisement
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-cyan-600 mb-4">
              💡 Les box sont recommandées automatiquement selon vos résultats de simulation
            </p>
            <Link to="/shop?tab=family">
              <Button className="bg-cyan-600 hover:bg-cyan-700">
                <Package className="w-4 h-4 mr-2" />
                Voir toutes les box famille
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Family Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <img 
                src="/lovable-uploads/15bdba5d-c57a-47fa-b8a1-e9c2168b32fb.png" 
                alt="Bien-être" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">Mood Tracker Familial</CardTitle>
              <CardDescription className="text-gray-600">
                Suivi de l'humeur pour chaque membre de la famille
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-sm text-gray-700">
                Un outil intergénérationnel pour comprendre les émotions de chacun et créer de la bienveillance.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-violet-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">SafeZone Ados</CardTitle>
              <CardDescription className="text-gray-600">
                Espace personnel confidentiel et sécurisé
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Loin des réseaux sociaux, un lieu d'expression libre pour les adolescents.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">Profils Multiples</CardTitle>
              <CardDescription className="text-gray-600">
                Parent, ado, parrain, tuteur...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Chaque membre de la famille a son propre espace personnalisé.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">Diagnostic Rapide</CardTitle>
              <CardDescription className="text-gray-600">
                Évaluation familiale en 2 minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Charge mentale parentale, isolement ado, dépendance numérique.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">Recommandations IA</CardTitle>
              <CardDescription className="text-gray-600">
                Activités personnalisées
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Défis parent-ado, moments de reconnexion, activités apaisantes.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">Rituel Famille</CardTitle>
              <CardDescription className="text-gray-600">
                Moments programmés ensemble
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Planification d'activités bienveillantes selon l'état émotionnel global.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="/lovable-uploads/c06535ca-3da6-476e-8686-9908c0725a0f.png" 
              alt="Joie famille" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Transformer votre Famille ?
            </h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
              Rejoignez les familles qui ont choisi l'innovation pour améliorer leur bien-être et leur communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsSubscriptionPopupOpen(true)}
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                S'abonner maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
                  Demander des conseils
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Popup */}
      <SubscriptionPopup 
        isOpen={isSubscriptionPopupOpen} 
        onClose={() => setIsSubscriptionPopupOpen(false)} 
      />
    </div>
  );
};

export default Famille;
