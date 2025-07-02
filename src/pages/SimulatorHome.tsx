
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Briefcase, 
  UserCheck, 
  Building2,
  CheckCircle,
  ArrowRight,
  Brain
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const SimulatorHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Comment allez-vous aujourd'hui ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prenons quelques minutes ensemble pour prendre de vos nouvelles et vous proposer un accompagnement personnalisé
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Simulateur Famille Parent */}
          <Link to="/family-parent-simulator">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-pink-200 hover:border-pink-400 bg-gradient-to-br from-pink-50 to-rose-50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-pink-800 group-hover:text-pink-900">
                  Espace Parents
                </CardTitle>
                <CardDescription className="text-pink-600">
                  Comment vous sentez-vous dans votre rôle de parent ? Faisons le point ensemble
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Stress parental</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Communication familiale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Gestion des écrans</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-pink-600 font-medium">5 questions</span>
                  <Badge className="bg-pink-100 text-pink-800">Famille</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Simulateur Famille Ado */}
          <Link to="/family-teen-simulator">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-purple-200 hover:border-purple-400 bg-gradient-to-br from-purple-50 to-violet-50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-800 group-hover:text-purple-900">
                  Espace Ados
                </CardTitle>
                <CardDescription className="text-purple-600">
                  Comment ça va pour toi ? Parlons de ce que tu ressens en toute confidentialité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Humeur générale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Relations familiales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Pression scolaire</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-purple-600 font-medium">5 questions</span>
                  <Badge className="bg-purple-100 text-purple-800">Jeunes</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Simulateur Manager */}
          <Link to="/enterprise-manager-simulator">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-blue-200 hover:border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <UserCheck className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-800 group-hover:text-blue-900">
                  Espace Managers
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Comment se porte votre équipe ? Prenons des nouvelles de l'ambiance au travail
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Stress d'équipe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Communication interne</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Charge de travail</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-blue-600 font-medium">5 questions</span>
                  <Badge className="bg-blue-100 text-blue-800">Management</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Simulateur Employé */}
          <Link to="/enterprise-employee-simulator">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-green-200 hover:border-green-400 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-green-800 group-hover:text-green-900">
                  Espace Collaborateurs
                </CardTitle>
                <CardDescription className="text-green-600">
                  Comment vous sentez-vous au travail ? Faisons le point sur votre bien-être professionnel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Stress personnel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Équilibre vie pro/perso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Reconnaissance</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-green-600 font-medium">5 questions</span>
                  <Badge className="bg-green-100 text-green-800">Travail</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Simulateur Famille-Entreprise */}
          <Link to="/family-enterprise-simulator">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-indigo-200 hover:border-indigo-400 bg-gradient-to-br from-indigo-50 to-blue-50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-indigo-800 group-hover:text-indigo-900">
                  Espace Vie Pro-Perso
                </CardTitle>
                <CardDescription className="text-indigo-600">
                  Comment conciliez-vous famille et travail ? Parlons de votre équilibre de vie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Équilibre global</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Impact professionnel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Harmonie familiale</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-indigo-600 font-medium">5 questions</span>
                  <Badge className="bg-indigo-100 text-indigo-800">Hybride</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Simulateur Général */}
          <Link to="/enterprise-simulator">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-200 hover:border-gray-400 bg-gradient-to-br from-gray-50 to-slate-50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-slate-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800 group-hover:text-gray-900">
                  Bilan Général
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Comment allez-vous dans l'ensemble ? Un moment pour faire le point sur tout
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Bien-être global</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Tous contextes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Recommandations larges</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-gray-600 font-medium">5 questions</span>
                  <Badge className="bg-gray-100 text-gray-800">Universel</Badge>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Nouvelle section pour les simulateurs comparatifs */}
          <div className="lg:col-span-3 md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Simulateurs Comparatifs - Analyse des Perceptions Croisées
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Famille Comparatif */}
              <Link to="/family-comparative-simulator">
                <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-purple-200 hover:border-purple-400 bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl text-purple-800 group-hover:text-purple-900">
                      Famille - Perceptions Croisées
                    </CardTitle>
                    <CardDescription className="text-purple-600">
                      Comparez les perceptions entre parents et enfants pour révéler les écarts et améliorer la compréhension mutuelle
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Analyse IA des écarts de perception</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Recommandations pour améliorer la communication</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Accessible aux parents et enfants</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-purple-600 font-medium">Durée: 10-15 min</span>
                      <Badge className="bg-purple-100 text-purple-800">Nouveauté</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Entreprise Comparatif */}
              <Link to="/workplace-comparative-simulator">
                <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-blue-200 hover:border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl text-blue-800 group-hover:text-blue-900">
                      Entreprise - Perceptions Croisées
                    </CardTitle>
                    <CardDescription className="text-blue-600">
                      Confrontez les visions manager/employé pour identifier les zones d'incompréhension et optimiser la collaboration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Analyse IA des relations professionnelles</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Solutions pour améliorer la collaboration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Pour managers et employés</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-blue-600 font-medium">Durée: 10-15 min</span>
                      <Badge className="bg-blue-100 text-blue-800">Nouveauté</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Besoin d'aide pour choisir ? Notre IA vous orientera vers l'évaluation la plus adaptée.
          </p>
          <Link to="/intelligent-recommendations">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Brain className="w-5 h-5 mr-2" />
              Recommandations IA Personnalisées
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimulatorHome;
