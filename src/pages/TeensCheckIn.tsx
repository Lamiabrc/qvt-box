
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Smile, Frown, Meh, Sun, Cloud, CloudRain } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<string>('');

  const moods = [
    { id: 'excellent', icon: Sun, label: 'Excellent', color: 'text-yellow-500' },
    { id: 'good', icon: Smile, label: 'Bien', color: 'text-green-500' },
    { id: 'neutral', icon: Meh, label: 'Neutre', color: 'text-gray-500' },
    { id: 'bad', icon: Cloud, label: 'Pas terrible', color: 'text-blue-500' },
    { id: 'terrible', icon: CloudRain, label: 'Difficile', color: 'text-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-violet-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-pink-100 text-pink-800">Check-in Quotidien</Badge>
          <h1 className="text-4xl font-bold text-pink-800 mb-4">
            <Heart className="w-12 h-12 inline-block mr-4" />
            Comment tu te sens aujourd'hui ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prends un moment pour partager ton humeur du jour
          </p>
        </div>

        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-center text-pink-800">Choisis ton humeur</CardTitle>
            <CardDescription className="text-center">
              Il n'y a pas de bonne ou mauvaise réponse, sois juste authentique
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedMood === mood.id 
                      ? 'border-pink-500 bg-pink-50' 
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                >
                  <mood.icon className={`w-8 h-8 mx-auto mb-2 ${mood.color}`} />
                  <span className="text-sm font-medium">{mood.label}</span>
                </button>
              ))}
            </div>
            
            <div className="text-center">
              <Button 
                className="bg-pink-600 hover:bg-pink-700"
                disabled={!selectedMood}
              >
                Valider mon humeur
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensCheckIn;
