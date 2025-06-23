
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Baby, Smile, Heart, Play, Palette, Music, Book, Star } from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";

const KidsHome = () => {
  const [mood, setMood] = useState<string>('');
  const { toast } = useToast();

  const moods = [
    { emoji: '😊', name: 'Joyeux', color: 'bg-yellow-200' },
    { emoji: '😢', name: 'Triste', color: 'bg-blue-200' },
    { emoji: '😡', name: 'Fâché', color: 'bg-red-200' },
    { emoji: '😴', name: 'Fatigué', color: 'bg-purple-200' },
    { emoji: '🤗', name: 'Câlin', color: 'bg-pink-200' }
  ];

  const activities = [
    { name: 'Jeu des émotions', icon: Smile, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Temps calme', icon: Heart, color: 'bg-pink-100 text-pink-600' },
    { name: 'Jeux créatifs', icon: Palette, color: 'bg-purple-100 text-purple-600' },
    { name: 'Musique douce', icon: Music, color: 'bg-blue-100 text-blue-600' },
    { name: 'Histoire du soir', icon: Book, color: 'bg-green-100 text-green-600' }
  ];

  const handleMoodSelect = (moodName: string) => {
    setMood(moodName);
    toast({
      title: "Super !",
      description: `Tu te sens ${moodName.toLowerCase()} aujourd'hui`
    });
  };

  const handleActivity = (activityName: string) => {
    toast({
      title: "C'est parti !",
      description: `Amusons-nous avec ${activityName.toLowerCase()}`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-violet-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Baby className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-violet-800 mb-2">
            Salut petit champion ! 🌟
          </h1>
          <p className="text-lg text-violet-600">
            Bienvenue dans ton espace magique
          </p>
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white mt-2">
            6-10 ans
          </Badge>
        </div>

        {/* Daily Mood */}
        <Card className="mb-8 border-2 border-yellow-200">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-violet-800 flex items-center justify-center gap-2">
              <Heart className="w-6 h-6 text-pink-500" />
              Comment tu te sens aujourd'hui ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4">
              {moods.map((m) => (
                <button
                  key={m.name}
                  onClick={() => handleMoodSelect(m.name)}
                  className={`p-4 rounded-xl transition-all duration-300 hover:scale-110 ${
                    mood === m.name ? m.color + ' ring-4 ring-violet-300' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="text-4xl mb-2">{m.emoji}</div>
                  <p className="text-sm font-medium text-gray-700">{m.name}</p>
                </button>
              ))}
            </div>
            {mood && (
              <div className="mt-4 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg text-center">
                <p className="text-violet-800 font-medium">
                  🌈 C'est parfait ! Maintenant, choisis une activité amusante !
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Activities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {activities.map((activity) => (
            <Card 
              key={activity.name}
              className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-transparent hover:border-violet-200"
              onClick={() => handleActivity(activity.name)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${activity.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <activity.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-violet-800 mb-2">{activity.name}</h3>
                <p className="text-sm text-gray-600">Clique pour commencer !</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Screen Time Helper */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
          <CardHeader>
            <CardTitle className="text-center text-green-800 flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Temps d'écran malin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-6xl">⏰</div>
              <p className="text-green-700 font-medium">
                Tu as utilisé ton écran pendant <span className="text-2xl font-bold">45 minutes</span> aujourd'hui
              </p>
              <div className="w-full bg-green-200 rounded-full h-4">
                <div className="bg-green-500 h-4 rounded-full transition-all duration-500" style={{width: '75%'}}></div>
              </div>
              <p className="text-sm text-green-600">
                🌟 Super ! Il te reste 15 minutes avant une pause
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Parent Corner */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="text-center text-purple-800">
              👨‍👩‍👧‍👦 Coin des parents
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-purple-600 mb-4">
              Besoin d'aide avec votre enfant ? Nos ressources sont là pour vous accompagner.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              Accéder aux ressources parents
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KidsHome;
