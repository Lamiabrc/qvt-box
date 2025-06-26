
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, GraduationCap, Home, ArrowRight, Star, Sparkles } from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { Link } from "react-router-dom";

const FamilyOrientation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header avec design fun */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Univers Famille QVTeen Box
          </h1>
          <p className="text-2xl text-purple-600 max-w-3xl mx-auto font-medium">
            Choisissez votre profil pour accéder à votre espace personnalisé
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Badge className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-2 text-lg">
              <Star className="w-5 h-5 mr-2" />
              100% Family Safe
            </Badge>
            <Badge className="bg-gradient-to-r from-purple-400 to-violet-400 text-white px-6 py-2 text-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Super Fun
            </Badge>
          </div>
        </div>

        {/* Orientation Cards avec couleurs vibrantes */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
          {/* Parents/Tuteurs */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transform hover:scale-105 hover:rotate-1">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-purple-800 font-bold">Parents & Tuteurs</CardTitle>
              <CardDescription className="text-purple-600 text-xl font-medium">
                Accompagnement et suivi parental
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="font-medium">Dashboard famille coloré</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="font-medium">Suivi bien-être adolescents</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="font-medium">Outils communication fun</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="font-medium">Ressources éducatives</span>
                </div>
              </div>
              
              <div className="pt-6">
                <Link to="/parent-dashboard">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                    Accéder à mon espace
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Ados (11-18 ans) */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-100 to-blue-100 hover:from-cyan-200 hover:to-blue-200 transform hover:scale-105 hover:-rotate-1">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-cyan-800 font-bold">Adolescents</CardTitle>
              <CardDescription className="text-cyan-600 text-xl font-medium">
                Espace d'expression pour les 11-18 ans
              </CardDescription>
              <Badge className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white mt-4 px-4 py-2 text-lg">
                11-18 ans
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  <span className="font-medium">Mon humeur du jour 😊</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  <span className="font-medium">Digital detox fun 📱</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  <span className="font-medium">SafeZone discussion 💬</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                  <span className="font-medium">Activités bien-être 🎨</span>
                </div>
              </div>
              
              <div className="pt-6">
                <Link to="/teens-home">
                  <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                    Accéder à mon espace
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Family Tools Section avec design coloré */}
        <div className="bg-gradient-to-r from-white/80 to-purple-50/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-purple-200 mb-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-10">
            🎉 Outils Famille
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Link to="/family-simulator">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 bg-gradient-to-br from-emerald-100 to-green-100 hover:from-emerald-200 hover:to-green-200 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Home className="w-16 h-16 text-emerald-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-2xl text-emerald-800 mb-3">Simulateur Famille</h3>
                  <p className="text-emerald-700 text-lg">Évaluez le bien-être familial</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/shop">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 bg-gradient-to-br from-orange-100 to-amber-100 hover:from-orange-200 hover:to-amber-200 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Heart className="w-16 h-16 text-orange-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-2xl text-orange-800 mb-3">Family Box</h3>
                  <p className="text-orange-700 text-lg">Découvrez nos box famille</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link to="/">
            <Button variant="outline" className="border-4 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-transform">
              🏠 Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FamilyOrientation;
