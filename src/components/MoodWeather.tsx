
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudLightning, 
  CloudSnow,
  Zap,
  Heart,
  Brain,
  Smile,
  Frown,
  Meh
} from "lucide-react";

interface MoodWeatherProps {
  userType: 'teen' | 'parent' | 'employee' | 'manager';
  currentMood?: number; // 1-5 scale
  className?: string;
}

const MoodWeather = ({ userType, currentMood = 3, className = "" }: MoodWeatherProps) => {
  const [weather, setWeather] = useState<any>(null);
  const [selectedMood, setSelectedMood] = useState(currentMood);

  const moods = [
    { 
      value: 1, 
      icon: Frown, 
      weather: CloudLightning, 
      label: 'Orageux', 
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      description: 'Journée difficile'
    },
    { 
      value: 2, 
      icon: Frown, 
      weather: CloudRain, 
      label: 'Pluvieux', 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Quelques nuages'
    },
    { 
      value: 3, 
      icon: Meh, 
      weather: Cloud, 
      label: 'Nuageux', 
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      description: 'Temps mitigé'
    },
    { 
      value: 4, 
      icon: Smile, 
      weather: Sun, 
      label: 'Ensoleillé', 
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      description: 'Belle journée'
    },
    { 
      value: 5, 
      icon: Smile, 
      weather: Sun, 
      label: 'Radieux', 
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Journée parfaite'
    }
  ];

  const getProfileMessages = () => {
    switch (userType) {
      case 'teen':
        return {
          title: '🌤️ Ma Météo du Jour',
          subtitle: 'Comment te sens-tu aujourd\'hui ?',
          tips: selectedMood <= 2 ? 
            ['Écoute ta playlist zen', 'Parle à un ami', 'Prends une pause'] :
            selectedMood >= 4 ?
            ['Profite de cette énergie !', 'Partage ta bonne humeur', 'Fais quelque chose de créatif'] :
            ['Prends soin de toi', 'Fais une activité que tu aimes', 'Reste positif']
        };
      case 'parent':
        return {
          title: '🏠 Météo Familiale',
          subtitle: 'Comment se passe votre journée de parent ?',
          tips: selectedMood <= 2 ? 
            ['Prenez du temps pour vous', 'Demandez de l\'aide', 'Respirez profondément'] :
            selectedMood >= 4 ?
            ['Savourez ces moments', 'Planifiez une activité famille', 'Félicitez-vous'] :
            ['Restez patient', 'Communicquez avec votre ado', 'Gardez l\'équilibre']
        };
      case 'employee':
        return {
          title: '💼 Météo Professionnelle',
          subtitle: 'Comment vous sentez-vous au travail ?',
          tips: selectedMood <= 2 ? 
            ['Faites une pause', 'Parlez à votre manager', 'Organisez votre travail'] :
            selectedMood >= 4 ?
            ['Excellente productivité !', 'Aidez vos collègues', 'Célébrez vos succès'] :
            ['Maintenez l\'équilibre', 'Fixez des priorités', 'Prenez soin de vous']
        };
      case 'manager':
        return {
          title: '👥 Météo Équipe',
          subtitle: 'Comment se porte votre équipe aujourd\'hui ?',
          tips: selectedMood <= 2 ? 
            ['Vérifiez le moral de l\'équipe', 'Réorganisez les priorités', 'Soutenez vos collaborateurs'] :
            selectedMood >= 4 ?
            ['Équipe au top !', 'Reconnaissez les efforts', 'Planifiez de nouveaux défis'] :
            ['Maintenez la motivation', 'Communiquez clairement', 'Restez à l\'écoute']
        };
      default:
        return {
          title: '🌤️ Météo du Jour',
          subtitle: 'Comment vous sentez-vous ?',
          tips: ['Prenez soin de vous', 'Restez positif', 'Partagez vos ressentis']
        };
    }
  };

  const currentWeather = moods.find(m => m.value === selectedMood) || moods[2];
  const WeatherIcon = currentWeather.weather;
  const MoodIcon = currentWeather.icon;
  const messages = getProfileMessages();

  const handleMoodChange = (moodValue: number) => {
    setSelectedMood(moodValue);
    console.log(`Mood updated for ${userType}:`, moodValue);
  };

  return (
    <Card className={`soap-bubble-effect hover:shadow-lg transition-all duration-300 ${className}`}>
      <CardHeader className="text-center pb-4">
        <div className={`w-20 h-20 ${currentWeather.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 soap-bubble-effect`}>
          <WeatherIcon className={`w-10 h-10 ${currentWeather.color}`} />
        </div>
        <CardTitle className="text-lg">{messages.title}</CardTitle>
        <p className="text-sm text-gray-600">{messages.subtitle}</p>
        <Badge className={`${currentWeather.bgColor} ${currentWeather.color} border-0`}>
          {currentWeather.label} - {currentWeather.description}
        </Badge>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Mood Selector */}
        <div>
          <p className="text-sm font-medium mb-3 text-center">Sélectionnez votre humeur :</p>
          <div className="flex justify-center gap-2">
            {moods.map((mood) => {
              const Icon = mood.icon;
              return (
                <Button
                  key={mood.value}
                  variant={selectedMood === mood.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleMoodChange(mood.value)}
                  className={`w-12 h-12 p-2 ${
                    selectedMood === mood.value 
                      ? `${mood.bgColor} ${mood.color} border-2` 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </Button>
              );
            })}
          </div>
        </div>

        {/* Tips */}
        <div className={`p-4 rounded-lg ${currentWeather.bgColor}`}>
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Heart className="w-4 h-4 text-pink-500" />
            Conseils du jour
          </h4>
          <ul className="space-y-1">
            {messages.tips.map((tip, idx) => (
              <li key={idx} className="text-sm flex items-center gap-2">
                <span className="w-1 h-1 bg-current rounded-full flex-shrink-0"></span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Brain className="w-4 h-4 mr-2" />
            Journal
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Zap className="w-4 h-4 mr-2" />
            Activités
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoodWeather;
