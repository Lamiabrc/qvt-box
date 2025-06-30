
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Headphones, Play, Heart, Volume2, Shuffle, SkipForward } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensPlaylist = () => {
  const playlists = [
    {
      title: "Motivation & Confiance",
      description: "Pour se sentir fort(e) et confiant(e)",
      songs: 12,
      color: "from-orange-400 to-red-400",
      emoji: "💪"
    },
    {
      title: "Détente & Zen",
      description: "Pour décompresser après une journée difficile",
      songs: 15,
      color: "from-blue-400 to-purple-400",
      emoji: "🧘‍♀️"
    },
    {
      title: "Émotions & Feelings",
      description: "Quand on a besoin de ressentir et d'exprimer",
      songs: 18,
      color: "from-pink-400 to-rose-400",
      emoji: "💕"
    },
    {
      title: "Énergie & Fun",
      description: "Pour danser et se défouler",
      songs: 20,
      color: "from-yellow-400 to-orange-400",
      emoji: "🎉"
    },
    {
      title: "Focus & Étude",
      description: "Musique douce pour se concentrer",
      songs: 10,
      color: "from-green-400 to-teal-400",
      emoji: "📚"
    },
    {
      title: "Nuit & Sommeil",
      description: "Sons apaisants pour bien dormir",
      songs: 8,
      color: "from-purple-400 to-indigo-400",
      emoji: "🌙"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Musique Thérapie</Badge>
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            <Headphones className="w-12 h-12 inline-block mr-4" />
            Mes Playlists Bien-être
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La musique qui fait du bien à ton cœur et à ton esprit
          </p>
        </div>

        {/* Player actuel */}
        <Card className="mb-8 bg-gradient-to-r from-purple-100 to-pink-100 border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Volume2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-purple-800">En cours de lecture</h3>
                  <p className="text-purple-600">Breathe Me - Sia</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline" className="rounded-full">
                  <Shuffle className="w-4 h-4" />
                </Button>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600 rounded-full">
                  <Play className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="rounded-full">
                  <SkipForward className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grille des playlists */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {playlists.map((playlist, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 transform hover:scale-105">
              <CardHeader className="relative">
                <div className={`w-full h-32 bg-gradient-to-br ${playlist.color} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-4xl">{playlist.emoji}</span>
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">{playlist.title}</CardTitle>
                <CardDescription className="text-gray-600">{playlist.description}</CardDescription>
                <Badge className="absolute top-4 right-4 bg-white text-gray-800">
                  {playlist.songs} titres
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Écouter
                  </Button>
                  <Button size="sm" variant="outline">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section ressources */}
        <Card className="bg-gradient-to-r from-white/80 to-purple-50/80 backdrop-blur-sm border-purple-200">
          <CardHeader>
            <CardTitle className="text-center text-purple-800">🎵 Pourquoi la musique fait du bien ?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-purple-800 mb-2">Gère tes émotions</h4>
                <p className="text-sm text-gray-600">La musique t'aide à identifier et exprimer ce que tu ressens</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Volume2 className="w-6 h-6 text-pink-600" />
                </div>
                <h4 className="font-semibold text-pink-800 mb-2">Réduit le stress</h4>
                <p className="text-sm text-gray-600">Des sons apaisants pour calmer ton esprit</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Headphones className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-blue-800 mb-2">Booste ton moral</h4>
                <p className="text-sm text-gray-600">La bonne musique libère des endorphines naturelles</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Link to="/teens-home">
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensPlaylist;
