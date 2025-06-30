
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle, Heart, Phone, Shield, Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensQuickAlert = () => {
  const [urgencyLevel, setUrgencyLevel] = useState<string>('');
  const [message, setMessage] = useState('');
  const [alertSent, setAlertSent] = useState(false);

  const urgencyLevels = [
    {
      id: 'low',
      title: 'Je me sens pas top',
      description: 'J\'ai besoin de parler à quelqu\'un',
      color: 'from-yellow-400 to-orange-400',
      icon: '😕'
    },
    {
      id: 'medium',
      title: 'Ça va vraiment pas',
      description: 'J\'ai besoin d\'aide rapidement',
      color: 'from-orange-400 to-red-400',
      icon: '😰'
    },
    {
      id: 'high',
      title: 'C\'est urgent',
      description: 'J\'ai besoin d\'aide immédiatement',
      color: 'from-red-500 to-red-600',
      icon: '🆘'
    }
  ];

  const handleSendAlert = () => {
    // Ici on enverrait vraiment l'alerte
    setAlertSent(true);
  };

  if (alertSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <FloatingBubbles />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              Alerte envoyée ! 💚
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ton message a été transmis. Une personne de confiance va te contacter rapidement.
            </p>
            
            <Card className="bg-white/80 backdrop-blur-sm border-green-200 mb-8">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-green-800 mb-4">Que se passe-t-il maintenant ?</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    <span>Tes parents ont reçu une notification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>Un conseiller QVTeen va te contacter sous 15 minutes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <span>Tu peux continuer à nous parler en toute sécurité</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/teens-personal-space">
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                  Aller dans mon espace sécurisé
                </Button>
              </Link>
              <Link to="/teens-home">
                <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-800">Alerte Rapide</Badge>
          <h1 className="text-4xl font-bold text-red-800 mb-4">
            <AlertTriangle className="w-12 h-12 inline-block mr-4" />
            Tu as besoin d'aide ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            On est là pour toi. Choisis le niveau d'urgence et on va t'aider rapidement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Sélection du niveau d'urgence */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800">Comment tu te sens ?</CardTitle>
              <CardDescription>Choisis ce qui correspond le mieux à ton état actuel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {urgencyLevels.map((level) => (
                  <Card 
                    key={level.id}
                    className={`cursor-pointer transition-all duration-300 border-2 ${
                      urgencyLevel === level.id 
                        ? 'border-red-400 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-red-200'
                    }`}
                    onClick={() => setUrgencyLevel(level.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <span className="text-2xl">{level.icon}</span>
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{level.title}</h3>
                      <p className="text-gray-600 text-sm">{level.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Message optionnel */}
          {urgencyLevel && (
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-800">Tu veux nous dire quelque chose ?</CardTitle>
                <CardDescription>C'est optionnel, mais ça peut nous aider à mieux t'accompagner</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Ce qui me préoccupe... Ce que je ressens... Ce dont j'ai besoin..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[120px]"
                />
              </CardContent>
            </Card>
          )}

          {/* Informations rassurantes */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-blue-800 mb-4 text-center">
                <Shield className="w-6 h-6 inline-block mr-2" />
                Tu es en sécurité avec nous
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-700">Tes parents seront prévenus avec bienveillance</p>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-700">Un conseiller formé va te contacter rapidement</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleSendAlert}
              disabled={!urgencyLevel}
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white disabled:opacity-50"
            >
              <AlertTriangle className="w-5 h-5 mr-2" />
              Envoyer l'alerte
            </Button>
            <Link to="/teens-home">
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                Finalement ça va, retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeensQuickAlert;
