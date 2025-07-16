import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Smile, 
  Zap, 
  Heart, 
  Star, 
  Music, 
  Gamepad2, 
  Camera, 
  Headphones,
  Sparkles,
  Coffee,
  Pizza,
  Palette,
  Rocket,
  Rainbow,
  Sun,
  Moon,
  Cloud,
  Snowflake
} from "lucide-react";
import UserAvatar from './UserAvatar';

interface TeensMood {
  id: string;
  emoji: string;
  label: string;
  color: string;
  intensity: number;
  description: string;
}

interface TeensActivity {
  id: string;
  title: string;
  type: 'creative' | 'social' | 'relax' | 'active' | 'learn';
  difficulty: 1 | 2 | 3;
  duration: string;
  icon: React.ReactNode;
  points: number;
  colorScheme: string;
}

interface TeensAchievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  points: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const TeensInterface: React.FC = () => {
  const [currentMood, setCurrentMood] = useState<TeensMood | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<TeensActivity | null>(null);
  const [userPoints, setUserPoints] = useState(1247);
  const [userLevel, setUserLevel] = useState(8);
  const [streakDays, setStreakDays] = useState(5);

  const moodsData: TeensMood[] = [
    {
      id: 'energetic',
      emoji: '⚡',
      label: 'Super Énergique',
      color: 'from-yellow-400 via-orange-400 to-red-400',
      intensity: 95,
      description: 'J\'ai envie de conquérir le monde !'
    },
    {
      id: 'creative',
      emoji: '🎨',
      label: 'Mode Créatif',
      color: 'from-purple-400 via-pink-400 to-indigo-400',
      intensity: 85,
      description: 'Les idées fusent dans ma tête !'
    },
    {
      id: 'chill',
      emoji: '😎',
      label: 'Tranquille',
      color: 'from-blue-400 via-cyan-400 to-teal-400',
      intensity: 70,
      description: 'Tout va bien, je gère !'
    },
    {
      id: 'social',
      emoji: '🤗',
      label: 'Social Mode',
      color: 'from-green-400 via-emerald-400 to-teal-400',
      intensity: 80,
      description: 'J\'ai envie de voir mes potes !'
    },
    {
      id: 'tired',
      emoji: '😴',
      label: 'Fatigué(e)',
      color: 'from-gray-400 via-slate-400 to-blue-400',
      intensity: 30,
      description: 'J\'ai besoin de recharger mes batteries...'
    },
    {
      id: 'stressed',
      emoji: '😤',
      label: 'Stressé(e)',
      color: 'from-red-400 via-orange-400 to-yellow-400',
      intensity: 15,
      description: 'Tout va trop vite, j\'ai besoin d\'aide !'
    }
  ];

  const activitiesData: TeensActivity[] = [
    {
      id: 'music-session',
      title: 'Session Musique',
      type: 'creative',
      difficulty: 1,
      duration: '15-30 min',
      icon: <Music className="w-6 h-6" />,
      points: 50,
      colorScheme: 'from-purple-500 to-pink-500'
    },
    {
      id: 'game-break',
      title: 'Pause Gaming',
      type: 'relax',
      difficulty: 1,
      duration: '20-45 min',
      icon: <Gamepad2 className="w-6 h-6" />,
      points: 30,
      colorScheme: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'photo-art',
      title: 'Photo Créative',
      type: 'creative',
      difficulty: 2,
      duration: '30-60 min',
      icon: <Camera className="w-6 h-6" />,
      points: 75,
      colorScheme: 'from-green-500 to-emerald-500'
    },
    {
      id: 'podcast-chill',
      title: 'Podcast Détente',
      type: 'learn',
      difficulty: 1,
      duration: '20-40 min',
      icon: <Headphones className="w-6 h-6" />,
      points: 40,
      colorScheme: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'art-challenge',
      title: 'Défi Artistique',
      type: 'creative',
      difficulty: 3,
      duration: '45-90 min',
      icon: <Palette className="w-6 h-6" />,
      points: 100,
      colorScheme: 'from-pink-500 to-rose-500'
    },
    {
      id: 'workout-fun',
      title: 'Sport Fun',
      type: 'active',
      difficulty: 2,
      duration: '20-30 min',
      icon: <Zap className="w-6 h-6" />,
      points: 80,
      colorScheme: 'from-orange-500 to-red-500'
    }
  ];

  const achievementsData: TeensAchievement[] = [
    {
      id: 'first-week',
      title: 'Première Semaine',
      description: 'Tu as utilisé l\'app pendant 7 jours !',
      icon: '🌟',
      unlocked: true,
      points: 100,
      rarity: 'common'
    },
    {
      id: 'mood-master',
      title: 'Maître des Émotions',
      description: 'Tu as exploré toutes les humeurs disponibles',
      icon: '🎭',
      unlocked: true,
      points: 200,
      rarity: 'rare'
    },
    {
      id: 'creative-genius',
      title: 'Génie Créatif',
      description: 'Tu as complété 25 activités créatives',
      icon: '🎨',
      unlocked: false,
      points: 500,
      rarity: 'epic'
    },
    {
      id: 'zen-master',
      title: 'Maître Zen',
      description: 'Tu as maintenu ton équilibre pendant 30 jours',
      icon: '🧘‍♀️',
      unlocked: false,
      points: 1000,
      rarity: 'legendary'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-500';
      case 'rare': return 'bg-blue-500';
      case 'epic': return 'bg-purple-500';
      case 'legendary': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyStars = (difficulty: number) => {
    return Array.from({ length: 3 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-3 h-3 ${i < difficulty ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const getWeatherEmoji = () => {
    const hour = new Date().getHours();
    if (hour < 6 || hour > 20) return <Moon className="w-6 h-6 text-indigo-400" />;
    if (hour < 12) return <Sun className="w-6 h-6 text-yellow-400" />;
    return <Cloud className="w-6 h-6 text-blue-400" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 p-4">
      {/* Header avec style BD */}
      <div className="relative mb-6">
        <div className="qvt-gradient-teens p-6 rounded-3xl shadow-2xl border-4 border-white text-white relative overflow-hidden">
          {/* Bulles décoratives */}
          <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-yellow-400/30 rounded-full blur-2xl"></div>
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-4">
              <UserAvatar 
                qvtScore={12}
                userName="Alex"
                universe="teens"
                size="lg"
              />
              <div>
                <h1 className="text-2xl font-bold font-montserrat tracking-wide">
                  Salut Alex ! 👋
                </h1>
                <p className="text-lg opacity-90">
                  Niveau {userLevel} • {userPoints} points • {streakDays} jours de suite !
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {getWeatherEmoji()}
              <div className="text-right">
                <p className="text-sm opacity-75">Aujourd'hui</p>
                <p className="text-lg font-semibold">
                  {new Date().toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Sélecteur d'humeur - Style Rubik's cube */}
        <div className="lg:col-span-2">
          <Card className="teens-card shadow-2xl border-4 border-white/50 backdrop-blur-sm bg-white/80">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-gray-800">
                <Sparkles className="w-7 h-7 text-purple-500" />
                Comment tu te sens aujourd'hui ?
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Clique sur ton humeur du moment !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {moodsData.map((mood) => (
                  <div
                    key={mood.id}
                    onClick={() => setCurrentMood(mood)}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-4 
                               ${currentMood?.id === mood.id ? 'border-white shadow-2xl scale-105' : 'border-transparent hover:border-white/50'}
                               bg-gradient-to-br ${mood.color} text-white relative overflow-hidden`}
                  >
                    {/* Effet brillant */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="text-4xl mb-2">{mood.emoji}</div>
                      <p className="font-bold text-sm mb-1">{mood.label}</p>
                      <div className="w-full bg-white/30 rounded-full h-2 mb-2">
                        <div 
                          className="bg-white h-2 rounded-full transition-all duration-500"
                          style={{ width: `${mood.intensity}%` }}
                        ></div>
                      </div>
                      <p className="text-xs opacity-90">{mood.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Activités recommandées */}
          {currentMood && (
            <Card className="teens-card shadow-2xl border-4 border-white/50 backdrop-blur-sm bg-white/80 mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-800">
                  <Rocket className="w-6 h-6 text-indigo-500" />
                  Activités pour toi !
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Parfaites pour ton humeur {currentMood.emoji}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {activitiesData.slice(0, 4).map((activity) => (
                    <div
                      key={activity.id}
                      onClick={() => setSelectedActivity(activity)}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-102 border-2
                                 ${selectedActivity?.id === activity.id ? 'border-purple-400 shadow-lg' : 'border-gray-200 hover:border-purple-300'}
                                 bg-gradient-to-br ${activity.colorScheme} text-white relative overflow-hidden group`}
                    >
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 bg-white/20 rounded-lg">
                            {activity.icon}
                          </div>
                          <div className="flex gap-1">
                            {getDifficultyStars(activity.difficulty)}
                          </div>
                        </div>
                        
                        <h3 className="font-bold text-lg mb-1">{activity.title}</h3>
                        <p className="text-sm opacity-90 mb-2">{activity.duration}</p>
                        
                        <div className="flex items-center justify-between">
                          <Badge className="bg-white/20 text-white border-white/30">
                            +{activity.points} pts
                          </Badge>
                          <Button 
                            size="sm" 
                            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                          >
                            Let's go !
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar - Achievements et Stats */}
        <div className="space-y-6">
          {/* Progression Level */}
          <Card className="teens-card shadow-xl border-4 border-white/50 backdrop-blur-sm bg-white/80">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-800">
                <Zap className="w-5 h-5 text-yellow-500" />
                Ta Progression
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    Niveau {userLevel}
                  </div>
                  <Progress value={75} className="h-3 mb-2" />
                  <p className="text-sm text-gray-600">75% vers le niveau {userLevel + 1}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl">
                    <div className="text-xl font-bold text-blue-600">{userPoints}</div>
                    <div className="text-xs text-blue-800">Points Total</div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-xl">
                    <div className="text-xl font-bold text-green-600">{streakDays}</div>
                    <div className="text-xs text-green-800">Jours de Suite</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="teens-card shadow-xl border-4 border-white/50 backdrop-blur-sm bg-white/80">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-800">
                <Star className="w-5 h-5 text-yellow-500" />
                Tes Trophées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievementsData.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 
                               ${achievement.unlocked 
                                 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300 shadow-md' 
                                 : 'bg-gray-50 border-gray-200 opacity-60'
                               }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`text-2xl p-2 rounded-lg ${achievement.unlocked ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-gray-800">
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {achievement.description}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className={`text-xs ${getRarityColor(achievement.rarity)} text-white`}>
                            {achievement.rarity}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            +{achievement.points} pts
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="teens-card shadow-xl border-4 border-white/50 backdrop-blur-sm bg-white/80">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-800">
                <Rainbow className="w-5 h-5 text-pink-500" />
                Actions Rapides
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full qvt-gradient-teens text-white font-bold py-3 rounded-xl">
                  <Music className="w-4 h-4 mr-2" />
                  Playlist du Jour
                </Button>
                <Button className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold py-3 rounded-xl">
                  <Heart className="w-4 h-4 mr-2" />
                  Message aux Parents
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold py-3 rounded-xl">
                  <Camera className="w-4 h-4 mr-2" />
                  Partager mon Mood
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating particles pour l'effet dynamique */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute animate-pulse opacity-30 ${
              i % 2 === 0 ? 'bubble-float' : 'bubble-float-delayed'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {i % 3 === 0 ? '⭐' : i % 3 === 1 ? '💫' : '✨'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeensInterface;