
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, User, Users, Crown, Shield, BarChart3, ArrowRight } from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { Link } from "react-router-dom";

const EnterpriseOrientation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-teal-800 mb-4">
            Univers Entreprise QVT Box
          </h1>
          <p className="text-xl text-teal-600 max-w-3xl mx-auto">
            Choisissez votre profil pour accéder à votre espace personnalisé
          </p>
        </div>

        {/* Orientation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Salarié */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-teal-200 hover:border-teal-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <User className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg text-teal-800">Salarié</CardTitle>
              <CardDescription className="text-teal-600">
                Mon espace personnel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Mon bien-être</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Évaluations QVT</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Ressources</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/employee-dashboard">
                  <Button size="sm" className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800">
                    Mon espace
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Chef d'équipe */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-cyan-200 hover:border-cyan-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg text-cyan-800">Chef d'Équipe</CardTitle>
              <CardDescription className="text-cyan-600">
                Gestion d'équipe
              </CardDescription>
              <Badge className="bg-cyan-100 text-cyan-700 mt-2">Management</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Suivi équipe</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Alertes bien-être</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Actions préventives</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/team-leader-dashboard">
                  <Button size="sm" className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800">
                    Mon espace
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Responsable QVT */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-blue-200 hover:border-blue-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg text-blue-800">Responsable QVT</CardTitle>
              <CardDescription className="text-blue-600">
                Pilotage QVT
              </CardDescription>
              <Badge className="bg-blue-100 text-blue-700 mt-2">Stratégique</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Dashboard global</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Analytics avancées</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Rapports détaillés</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/qvt-manager-dashboard">
                  <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Mon espace
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Direction */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-indigo-200 hover:border-indigo-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg text-indigo-800">Direction</CardTitle>
              <CardDescription className="text-indigo-600">
                Vue exécutive
              </CardDescription>
              <Badge className="bg-indigo-100 text-indigo-700 mt-2">Exécutif</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span>KPI globaux</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span>ROI QVT</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span>Vision stratégique</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/executive-dashboard">
                  <Button size="sm" className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800">
                    Mon espace
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enterprise Tools Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-teal-100 mb-8">
          <h2 className="text-2xl font-bold text-center text-teal-800 mb-8">
            Outils Entreprise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/concept-qvt">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-12 h-12 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-teal-800 mb-2">Concept QVT</h3>
                  <p className="text-sm text-gray-600">Découvrez notre approche</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/shop">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-cyan-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-cyan-800 mb-2">Box Entreprise</h3>
                  <p className="text-sm text-gray-600">Solutions personnalisées</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/coach-dashboard">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-blue-800 mb-2">Coach QVT</h3>
                  <p className="text-sm text-gray-600">Accompagnement expert</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link to="/">
            <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseOrientation;
