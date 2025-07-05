
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
  Calendar,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Play,
  Package,
  Star,
  Target,
  TrendingUp,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const EnterpriseSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-teal-100 text-teal-800">Solutions Entreprise</Badge>
          <h1 className="text-5xl font-bold text-teal-800 mb-6">
            QVT Box Entreprise
          </h1>
          <p className="text-xl text-teal-600 mb-8 max-w-4xl mx-auto">
            Améliorez la qualité de vie au travail de vos équipes avec nos solutions personnalisées.
            Réduisez le turnover, augmentez la productivité et créez un environnement de travail épanouissant.
          </p>
        </div>

        {/* Enterprise Simulator Buttons */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-teal-800 mb-4">
              Évaluations QVT Spécialisées
            </h2>
            <p className="text-lg text-teal-600">
              Diagnostics personnalisés selon votre rôle dans l'entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Manager Simulator */}
            <Card className="hover:shadow-xl transition-all duration-300 border-teal-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-teal-800">Bilan Manager</CardTitle>
                <CardDescription className="text-gray-600">
                  Évaluez le bien-être de votre équipe
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Risques psychosociaux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Management bienveillant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Solutions QVT équipe</span>
                  </div>
                </div>
                <Link to="/enterprise-manager-simulator">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <Play className="w-4 h-4 mr-2" />
                    Évaluer mon équipe
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Employee Simulator */}
            <Card className="hover:shadow-xl transition-all duration-300 border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-800">Bilan Salarié</CardTitle>
                <CardDescription className="text-gray-600">
                  Auto-évaluation de votre bien-être professionnel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Satisfaction au travail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Équilibre vie pro/perso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Prévention burn-out</span>
                  </div>
                </div>
                <Link to="/enterprise-employee-simulator">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Play className="w-4 h-4 mr-2" />
                    Évaluer mon bien-être
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enterprise Box Recommendations */}
        <div className="mb-16 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-cyan-800 mb-4">
              Nos Solutions QVT Entreprise
            </h3>
            <p className="text-cyan-600">
              Box personnalisées selon les besoins identifiés par nos bilans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Management Box */}
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-teal-500 text-white">MANAGEMENT</Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.8/5</span>
                  </div>
                </div>
                <CardTitle className="text-lg text-teal-800">QVT Box Manager</CardTitle>
                <CardDescription>
                  Outils pour managers bienveillants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-teal-600 mb-4">149€/mois</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-teal-500" />
                    Kit management bienveillant
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-teal-500" />
                    Formations micro-learning
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-teal-500" />
                    Dashboard équipe QVT
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Team Wellness Box */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-500 text-white">ÉQUIPE</Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.6/5</span>
                  </div>
                </div>
                <CardTitle className="text-lg text-blue-800">QVT Box Équipe</CardTitle>
                <CardDescription>
                  Cohésion et bien-être collectif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-4">89€/mois</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-blue-500" />
                    Activités team building
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-blue-500" />
                    Espaces détente créatifs
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-blue-500" />
                    Challenges bien-être
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Individual Wellness Box */}
            <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-indigo-500 text-white">INDIVIDUEL</Badge>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm ml-1">4.7/5</span>
                  </div>
                </div>
                <CardTitle className="text-lg text-indigo-800">QVT Box Perso</CardTitle>
                <CardDescription>
                  Bien-être personnel au travail
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-indigo-600 mb-4">49€/mois</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-indigo-500" />
                    Kit anti-stress personnel
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-indigo-500" />
                    Méditation guidée
                  </li>
                  <li className="flex items-center gap-2">
                    <Package className="w-3 h-3 text-indigo-500" />
                    Planning équilibre vie pro/perso
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-cyan-600 mb-4">
              💼 Solutions recommandées automatiquement selon vos évaluations QVT
            </p>
            <Link to="/shop">
              <Button className="bg-cyan-600 hover:bg-cyan-700">
                <Package className="w-4 h-4 mr-2" />
                Découvrir toutes nos solutions entreprise
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Transformez votre Environnement de Travail
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            Rejoignez les entreprises qui investissent dans le bien-être de leurs équipes pour une performance durable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enterprise-manager-simulator">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Évaluer votre équipe
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg">
                Demander une démonstration
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;
