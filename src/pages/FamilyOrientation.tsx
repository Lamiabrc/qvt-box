
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, UserCheck, Baby, GraduationCap, Home, ArrowRight } from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { Link } from "react-router-dom";

const FamilyOrientation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Univers Famille QVTeen Box
          </h1>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto">
            Choisissez votre profil pour accéder à votre espace personnalisé
          </p>
        </div>

        {/* Orientation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Parents/Tuteurs */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-purple-200 hover:border-purple-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-purple-800">Parents & Tuteurs</CardTitle>
              <CardDescription className="text-purple-600">
                Accompagnement et suivi parental
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Dashboard famille</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Suivi bien-être enfants</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Outils communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Ressources éducatives</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/parent-dashboard">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                    Accéder à mon espace
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Ados (11-18 ans) */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-pink-200 hover:border-pink-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-pink-800">Adolescents</CardTitle>
              <CardDescription className="text-pink-600">
                Espace d'expression pour les 11-18 ans
              </CardDescription>
              <Badge className="bg-pink-100 text-pink-700 mt-2">11-18 ans</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Mon humeur du jour</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Digital detox</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>SafeZone discussion</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Activités bien-être</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/teens-home">
                  <Button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800">
                    Accéder à mon espace
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Enfants (6-10 ans) */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-violet-200 hover:border-violet-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Baby className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-violet-800">Enfants</CardTitle>
              <CardDescription className="text-violet-600">
                Activités ludiques pour les plus jeunes
              </CardDescription>
              <Badge className="bg-violet-100 text-violet-700 mt-2">6-10 ans</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                  <span>Jeux éducatifs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                  <span>Émotions colorées</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                  <span>Temps d'écran sain</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                  <span>Activités famille</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/kids-home">
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800">
                    Accéder à mon espace
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Family Tools Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100 mb-8">
          <h2 className="text-2xl font-bold text-center text-purple-800 mb-8">
            Outils Famille
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/family-simulator">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Home className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-purple-800 mb-2">Simulateur Famille</h3>
                  <p className="text-sm text-gray-600">Évaluez le bien-être familial</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/shop">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-pink-800 mb-2">Family Box</h3>
                  <p className="text-sm text-gray-600">Découvrez nos box famille</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link to="/">
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FamilyOrientation;
