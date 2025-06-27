
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Calendar, 
  MessageCircle, 
  Shield, 
  Sparkles,
  Star,
  Camera,
  Music,
  Palette,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-blue-100 to-cyan-100 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section avec couleurs fun */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-gradient-to-r from-pink-300 to-purple-300">
            <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg px-6 py-2 animate-bounce">
              <Star className="w-5 h-5 mr-2" />
              Ton Espace Perso
            </Badge>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Salut ! 👋
            </h1>
            <p className="text-2xl text-gray-700 mb-8 font-medium">
              Bienvenue dans ton univers coloré et bienveillant
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 hover:scale-105 transition-transform">
                <Heart className="w-4 h-4 mr-2" />
                100% Safe
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-400 to-violet-400 text-white px-4 py-2 hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4 mr-2" />
                Ton Style
              </Badge>
              <Badge className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-4 py-2 hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 mr-2" />
                Super Fun
              </Badge>
            </div>
          </div>
        </div>

        {/* Navigation Cards avec couleurs vibrantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link to="/teens-checkin">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-200 to-rose-200 hover:from-pink-300 hover:to-rose-300 transform hover:scale-105 hover:rotate-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Heart className="w-10 h-10 text-white animate-pulse" />
                </div>
                <CardTitle className="text-2xl text-pink-800 font-bold">Mon Humeur</CardTitle>
                <CardDescription className="text-pink-700 text-lg">Comment tu te sens aujourd'hui ?</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/teens-personal-space">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-200 to-violet-200 hover:from-purple-300 hover:to-violet-300 transform hover:scale-105 hover:-rotate-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-800 font-bold">Ma SafeZone</CardTitle>
                <CardDescription className="text-purple-700 text-lg">Ton espace 100% privé</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/teens-family-space">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-200 to-blue-200 hover:from-cyan-300 hover:to-blue-300 transform hover:scale-105 hover:rotate-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-cyan-800 font-bold">Espace Famille</CardTitle>
                <CardDescription className="text-cyan-700 text-lg">Connecte-toi avec tes proches</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/friends-space">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-green-200 to-emerald-200 hover:from-green-300 hover:to-emerald-300 transform hover:scale-105 hover:-rotate-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-green-800 font-bold">Mes Potes</CardTitle>
                <CardDescription className="text-green-700 text-lg">Partage avec tes amis</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/teens-calendar">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-200 to-amber-200 hover:from-orange-300 hover:to-amber-300 transform hover:scale-105 hover:rotate-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-orange-800 font-bold">Mon Planning</CardTitle>
                <CardDescription className="text-orange-700 text-lg">Organise tes activités fun</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/teens-playlist">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-200 to-green-200 hover:from-emerald-300 hover:to-green-300 transform hover:scale-105 hover:-rotate-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Music className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-emerald-800 font-bold">Mes Playlists</CardTitle>
                <CardDescription className="text-emerald-700 text-lg">Musique et détente</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/teens-customization">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-200 to-purple-200 hover:from-indigo-300 hover:to-purple-300 transform hover:scale-105 hover:rotate-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-indigo-800 font-bold">Personnalise</CardTitle>
                <CardDescription className="text-indigo-700 text-lg">Crée ton style unique</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/teens-fun-solutions">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-200 to-orange-200 hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 hover:-rotate-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-yellow-800 font-bold">Activités Fun</CardTitle>
                <CardDescription className="text-yellow-700 text-lg">Solutions bien-être ludiques</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/teens-journal">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-red-200 to-pink-200 hover:from-red-300 hover:to-pink-300 transform hover:scale-105 hover:rotate-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-red-800 font-bold">Mon Journal</CardTitle>
                <CardDescription className="text-red-700 text-lg">Exprime tes pensées</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Section d'urgence avec design coloré */}
        <div className="bg-gradient-to-r from-red-200 via-pink-200 to-purple-200 rounded-3xl p-8 mb-8 border-4 border-red-300 shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-800 mb-4">
              🚨 Besoin d'aide maintenant ?
            </h2>
            <p className="text-red-700 text-lg mb-6">
              Si tu ne te sens pas bien, on est là pour toi
            </p>
            <Link to="/teens-quick-alert">
              <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white text-xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all">
                Alerte Rapide 🆘
              </Button>
            </Link>
          </div>
        </div>

        {/* Navigation vers d'autres sections */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/teens-shop">
              <Button variant="outline" className="border-purple-400 text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                🛍️ Ma Boutique
              </Button>
            </Link>
            <Link to="/family-orientation">
              <Button variant="outline" className="border-cyan-400 text-cyan-700 hover:bg-cyan-50 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                👨‍👩‍👧‍👦 Espace Parents
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-pink-400 text-pink-700 hover:bg-pink-50 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                🏠 Accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeensHome;
