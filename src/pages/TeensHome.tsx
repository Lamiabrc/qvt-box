
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Shield, 
  Users, 
  Calendar, 
  BookOpen,
  Headphones,
  GamepadIcon,
  Palette,
  Brain,
  Target,
  Sparkles,
  Star,
  TrendingUp,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";
import HeroSection from "../components/teens/home/HeroSection";
import EmergencyAlert from "../components/teens/home/EmergencyAlert";
import NavigationCard from "../components/teens/home/NavigationCard";

const TeensHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 via-blue-100 to-cyan-100 relative overflow-hidden animate-gradient-x">
      <FloatingBubbles />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-purple-300/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-blue-300/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-cyan-300/20 rounded-full blur-xl animate-bounce-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <HeroSection />
        <EmergencyAlert />

        {/* Section statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-pink-100 to-purple-100 border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-pink-600" />
                <span className="font-bold text-pink-800">Humeur</span>
              </div>
              <div className="text-2xl font-bold text-pink-700">8/10</div>
              <p className="text-sm text-pink-600">Aujourd'hui</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-100 to-emerald-100 border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-800">Streak</span>
              </div>
              <div className="text-2xl font-bold text-green-700">7 jours</div>
              <p className="text-sm text-green-600">Check-ins</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-blue-100 to-cyan-100 border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-blue-800">Points</span>
              </div>
              <div className="text-2xl font-bold text-blue-700">1,247</div>
              <p className="text-sm text-blue-600">Total</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <NavigationCard
            title="Mon Humeur"
            description="Comment tu te sens aujourd'hui ?"
            icon={Heart}
            link="/teens-checkin"
            gradient="bg-gradient-to-br from-pink-200 to-rose-200 hover:from-pink-300 hover:to-rose-300"
            iconColor="from-pink-500 to-rose-500"
            textColor="text-pink-800"
            rotation="hover:scale-105 hover:rotate-1"
          />

          <NavigationCard
            title="SafeZone"
            description="Ton espace 100% privé"
            icon={Shield}
            link="/teens-personal-space"
            gradient="bg-gradient-to-br from-purple-200 to-violet-200 hover:from-purple-300 hover:to-violet-300"
            iconColor="from-purple-500 to-violet-500"
            textColor="text-purple-800"
            rotation="hover:scale-105 hover:-rotate-1"
          />

          <NavigationCard
            title="Famille"
            description="Connecte-toi avec tes proches"
            icon={Users}
            link="/family-space"
            gradient="bg-gradient-to-br from-cyan-200 to-blue-200 hover:from-cyan-300 hover:to-blue-300"
            iconColor="from-cyan-500 to-blue-500"
            textColor="text-cyan-800"
            rotation="hover:scale-105 hover:rotate-1"
          />

          <NavigationCard
            title="Mes Potes"
            description="Partage avec tes amis"
            icon={Users}
            link="/friends-space"
            gradient="bg-gradient-to-br from-green-200 to-emerald-200 hover:from-green-300 hover:to-emerald-300"
            iconColor="from-green-500 to-emerald-500"
            textColor="text-green-800"
            rotation="hover:scale-105 hover:-rotate-1"
          />

          <NavigationCard
            title="Planning"
            description="Organise tes activités"
            icon={Calendar}
            link="/teens-calendar"
            gradient="bg-gradient-to-br from-orange-200 to-amber-200 hover:from-orange-300 hover:to-amber-300"
            iconColor="from-orange-500 to-amber-500"
            textColor="text-orange-800"
            rotation="hover:scale-105 hover:rotate-1"
          />

          <NavigationCard
            title="Journal"
            description="Exprime tes pensées"
            icon={BookOpen}
            link="/teens-journal"
            gradient="bg-gradient-to-br from-red-200 to-pink-200 hover:from-red-300 hover:to-pink-300"
            iconColor="from-red-500 to-pink-500"
            textColor="text-red-800"
            rotation="hover:scale-105 hover:-rotate-1"
          />

          <NavigationCard
            title="Playlists"
            description="Musique et détente"
            icon={Headphones}
            link="/teens-playlist"
            gradient="bg-gradient-to-br from-emerald-200 to-green-200 hover:from-emerald-300 hover:to-green-300"
            iconColor="from-emerald-500 to-green-500"
            textColor="text-emerald-800"
            rotation="hover:scale-105 hover:rotate-1"
          />

          <NavigationCard
            title="Activités Fun"
            description="Solutions bien-être ludiques"
            icon={GamepadIcon}
            link="/teens-fun-solutions"
            gradient="bg-gradient-to-br from-yellow-200 to-orange-200 hover:from-yellow-300 hover:to-orange-300"
            iconColor="from-yellow-500 to-orange-500"
            textColor="text-yellow-800"
            rotation="hover:scale-105 hover:-rotate-1"
          />

          <NavigationCard
            title="Développement"
            description="Grandir et apprendre"
            icon={Brain}
            link="#"
            gradient="bg-gradient-to-br from-violet-200 to-purple-200 hover:from-violet-300 hover:to-purple-300"
            iconColor="from-violet-500 to-purple-500"
            textColor="text-violet-800"
            rotation="hover:scale-105 hover:rotate-1"
          />

          <NavigationCard
            title="Objectifs"
            description="Fixe tes buts personnels"
            icon={Target}
            link="#"
            gradient="bg-gradient-to-br from-teal-200 to-cyan-200 hover:from-teal-300 hover:to-cyan-300"
            iconColor="from-teal-500 to-cyan-500"
            textColor="text-teal-800"
            rotation="hover:scale-105 hover:-rotate-1"
          />

          <NavigationCard
            title="Personnalise"
            description="Crée ton style unique"
            icon={Palette}
            link="/teens-customization"
            gradient="bg-gradient-to-br from-indigo-200 to-purple-200 hover:from-indigo-300 hover:to-purple-300"
            iconColor="from-indigo-500 to-purple-500"
            textColor="text-indigo-800"
            rotation="hover:scale-105 hover:rotate-1"
          />
        </div>

        {/* Section recommandations */}
        <Card className="bg-gradient-to-r from-white/90 to-purple-50/90 backdrop-blur-sm border-purple-200 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-purple-800">Recommandé pour toi</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-purple-100 rounded-lg">
                <Heart className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-semibold text-purple-800">Check-in quotidien</p>
                  <p className="text-sm text-purple-600">Tu n'as pas encore fait ton check-in aujourd'hui</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-100 rounded-lg">
                <Headphones className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-blue-800">Playlist détente</p>
                  <p className="text-sm text-blue-600">Nouvelle playlist "Zen & Focus" disponible</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-r from-white/80 to-purple-50/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-4 border-purple-200 mb-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-10">
            🎯 Évalue ton bien-être
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Link to="/family-teen-simulator">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Brain className="w-16 h-16 text-purple-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-2xl text-purple-800 mb-3">Bilan Ado</h3>
                  <p className="text-purple-700 text-lg">Évalue ton bien-être global</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/teens-ai-evaluation">
              <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 bg-gradient-to-br from-cyan-100 to-blue-100 hover:from-cyan-200 hover:to-blue-200 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Sparkles className="w-16 h-16 text-cyan-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-2xl text-cyan-800 mb-3">IA Évaluation</h3>
                  <p className="text-cyan-700 text-lg">Assistant intelligent personnalisé</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

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
