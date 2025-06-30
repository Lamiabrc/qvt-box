
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Shield, 
  Brain,
  Sparkles,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Play,
  Package,
  Star,
  AlertTriangle,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const EnterpriseOrientation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
            <img 
              src="/lovable-uploads/c06535ca-3da6-476e-8686-9908c0725a0f.png" 
              alt="Équipe dynamique" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8">
            <Badge className="mb-4 bg-teal-100 text-teal-800">QVT Box Entreprise</Badge>
            <h1 className="text-5xl font-bold text-teal-800 mb-6">
              Transformez le Bien-être au Travail
            </h1>
            <p className="text-xl text-teal-600 mb-8 max-w-4xl mx-auto">
              Solution complète de prévention des risques psychosociaux et d'amélioration 
              de la qualité de vie au travail avec IA prédictive et box personnalisées.
            </p>
          </div>
        </div>

        {/* Simulator Test Buttons */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-teal-800 mb-4">
              Testez nos Simulateurs QVT
            </h2>
            <p className="text-lg text-teal-600">
              Évaluations rapides avec recommandations de box personnalisées
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Manager Simulator */}
            <Card className="hover:shadow-xl transition-all duration-300 border-teal-200 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="/lovable-uploads/777097df-f84d-4104-9ffc-695ed99931db.png" 
                  alt="Management" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-teal-800">Simulateur Manager</CardTitle>
                <CardDescription className="text-gray-600">
                  Évaluez le bien-être de votre équipe en 2 minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Analyse prédictive burn-out</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Recommandations personnalisées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Box QVT Manager adaptées</span>
                  </div>
                </div>
                <Link to="/enterprise-manager-simulator">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <Play className="w-4 h-4 mr-2" />
                    Tester maintenant
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Employee Simulator */}
            <Card className="hover:shadow-xl transition-all duration-300 border-blue-200 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="/lovable-uploads/15bdba5d-c57a-47fa-b8a1-e9c2168b32fb.png" 
                  alt="Bien-être employé" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-800">Simulateur Salarié</CardTitle>
                <CardDescription className="text-gray-600">
                  Auto-évaluation de votre bien-être professionnel
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Bilan personnel complet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Outils de prévention</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Box QVT Salarié personnalisées</span>
                  </div>
                </div>
                <Link to="/enterprise-employee-simulator">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Play className="w-4 h-4 mr-2" />
                    Tester maintenant
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Box Recommendations Preview */}
        <div className="mb-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">
              Nos Box QVT Recommandées
            </h3>
            <p className="text-purple-600">
              Découvrez nos solutions phygitales personnalisées selon vos résultats
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Box Prévention */}
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-500 text-white">PRÉVENTIF</Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.8/5</span>
                  </div>
                </div>
                <CardTitle className="text-lg text-green-800">QVT Box Excellence</CardTitle>
                <CardDescription>
                  Pour équipes épanouies - Maintenir le bien-être
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-4">49€/mois</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-green-500" />
                    Outils de développement
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-green-500" />
                    Formations micro-learning
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-green-500" />
                    Communauté QVT
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Box Équilibre */}
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-orange-500 text-white">RECOMMANDÉ</Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.6/5</span>
                  </div>
                </div>
                <CardTitle className="text-lg text-orange-800">QVT Box Équilibre</CardTitle>
                <CardDescription>
                  Retrouver l'harmonie vie pro/perso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600 mb-4">69€/mois</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-orange-500" />
                    Kit sport de bureau
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-orange-500" />
                    Planificateur intelligent
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-orange-500" />
                    Snacks énergétiques
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Box Urgence */}
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-red-500 text-white">URGENT</Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.9/5</span>
                  </div>
                </div>
                <CardTitle className="text-lg text-red-800">QVT Box Urgence</CardTitle>
                <CardDescription>
                  Solution immédiate anti burn-out
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600 mb-4">89€/mois</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-red-500" />
                    Kit méditation premium
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-red-500" />
                    Coaching personnalisé
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-red-500" />
                    Huiles essentielles
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-purple-600 mb-4">
              💡 Les box sont recommandées automatiquement selon vos résultats de simulation
            </p>
            <Link to="/shop?tab=enterprise">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Package className="w-4 h-4 mr-2" />
                Voir toutes les box entreprise
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-teal-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Sparkles className="w-12 h-12 text-teal-600 mb-4" />
              <CardTitle className="text-teal-800">IA Prédictive</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Détection précoce des risques psychosociaux avec machine learning avancé.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-purple-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle className="text-purple-800">Prévention Active</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Interventions personnalisées avant que les problèmes ne deviennent critiques.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-cyan-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-cyan-600 mb-4" />
              <CardTitle className="text-cyan-800">ROI Mesurable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Tableaux de bord pour mesurer l'impact concret sur la performance et le bien-être.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à Révolutionner votre QVT ?
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            Rejoignez les entreprises qui ont choisi l'innovation pour le bien-être de leurs équipes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enterprise-manager-simulator">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Commencer l'évaluation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg">
                Demander une démo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseOrientation;
