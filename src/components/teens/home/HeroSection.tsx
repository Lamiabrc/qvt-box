
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
