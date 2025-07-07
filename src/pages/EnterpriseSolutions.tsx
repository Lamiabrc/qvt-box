
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

        {/* Quick Test Simulators */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-teal-800 mb-4">
              Tests Rapides - Évaluations QVT
            </h2>
            <p className="text-lg text-teal-600">
              Diagnostics gratuits pour découvrir nos solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Manager Simulator */}
            <Card className="hover:shadow-xl transition-all duration-300 border-teal-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-teal-800">Test Manager</CardTitle>
                <CardDescription className="text-gray-600">
                  Évaluez le bien-être de votre équipe en 5 minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Détection risques psychosociaux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Diagnostic management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Solutions personnalisées</span>
                  </div>
                </div>
                <Link to="/enterprise-manager-simulator">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <Play className="w-4 h-4 mr-2" />
                    Tester gratuitement
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
                <CardTitle className="text-xl text-blue-800">Test Salarié</CardTitle>
                <CardDescription className="text-gray-600">
                  Auto-diagnostic de votre bien-être professionnel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Mesure satisfaction travail</span>
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
                    Tester gratuitement
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Solutions complètes */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Pour accéder aux solutions complètes
          </h3>
          <p className="text-gray-600 mb-6">
            Connectez-vous avec votre code entreprise pour accéder à votre environnement dédié
          </p>
          <Link to="/login">
            <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 px-8 py-3 text-lg">
              Se connecter avec code entreprise
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
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
            <Link to="/contact">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Demander une démonstration
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/devenir-prestataire">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg">
                Devenir partenaire
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;
