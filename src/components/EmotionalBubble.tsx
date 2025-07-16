
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, MessageCircle, Sparkles, Clock, X } from "lucide-react";

interface EmotionalBubbleProps {
  userType: 'employee' | 'manager' | 'parent' | 'teen' | 'independent';
  userName?: string;
  lastScore?: number;
  onClose?: () => void;
}

const EmotionalBubble = ({ userType, userName = "là", lastScore, onClose }: EmotionalBubbleProps) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const getMessages = () => {
    const baseMessages = {
      employee: [
        {
          text: `Salut ${userName} ! Comment vous sentez-vous aujourd'hui au travail ?`,
          type: 'greeting',
          responses: ['😊 Ça va bien', '😐 Mitigé', '😫 Difficile']
        },
        {
          text: 'J\'ai remarqué que vous avez eu une semaine chargée. Avez-vous pu prendre des pauses ?',
          type: 'checkup',
          responses: ['Oui, j\'ai géré', 'Quelques-unes', 'Pas vraiment']
        }
      ],
      manager: [
        {
          text: `Bonjour ${userName} ! Comment va votre équipe cette semaine ?`,
          type: 'greeting', 
          responses: ['👥 Équipe en forme', '⚖️ Équilibre fragile', '⚠️ Quelques signaux']
        },
        {
          text: 'Votre score QVT a légèrement baissé. Souhaitez-vous des conseils pour votre équipe ?',
          type: 'advice',
          responses: ['Oui, aidez-moi', 'Plus tard', 'Je gère']
        }
      ],
      parent: [
        {
          text: `Coucou ${userName} ! Comment ça se passe à la maison ?`,
          type: 'greeting',
          responses: ['🏠 Tout va bien', '🤹 Jonglage quotidien', '😴 Épuisé(e)']
        },
        {
          text: 'La charge mentale familiale peut être lourde. Voulez-vous des astuces pour mieux l\'organiser ?',
          type: 'support',
          responses: ['Oui, j\'en ai besoin', 'Ça pourrait aider', 'Je me débrouille']
        }
      ],
      teen: [
        {
          text: `Salut ${userName} ! Comment tu te sens ces derniers temps ?`,
          type: 'greeting',
          responses: ['😎 Ça roule', '🤷 Bof bof', '😔 Pas terrible']
        },
        {
          text: 'Tu as l\'air un peu stressé(e) lately. Tu veux qu\'on en parle ?',
          type: 'support',
          responses: ['Ouais, pourquoi pas', 'Pas maintenant', 'Ça va aller']
        }
      ],
      independent: [
        {
          text: `Bonjour ${userName} ! Comment allez-vous aujourd'hui ?`,
          type: 'greeting',
          responses: ['💪 En forme', '⚖️ Dans la moyenne', '😐 Pas au top']
        },
        {
          text: 'Votre rythme de vie semble intense. Prenez-vous suffisamment soin de vous ?',
          type: 'wellness',
          responses: ['Je fais de mon mieux', 'C\'est compliqué', 'J\'ai besoin d\'aide']
        }
      ]
    };

    return baseMessages[userType] || baseMessages.independent;
  };

  const getTips = () => {
    const tips = {
      employee: [
        'Prenez une pause de 5 minutes toutes les heures',
        'Essayez la technique Pomodoro pour votre productivité',
        'N\'hésitez pas à parler à votre manager si la charge est trop lourde'
      ],
      manager: [
        'Organisez des points équipe réguliers pour détecter les signaux',
        'Proposez du télétravail pour améliorer l\'équilibre vie pro/perso',
        'Valorisez les réussites de votre équipe régulièrement'
      ],
      parent: [
        'Déléguez certaines tâches aux enfants selon leur âge',
        'Planifiez des moments de détente rien que pour vous',
        'Communiquez avec votre partenaire sur la répartition des tâches'
      ],
      teen: [
        'Il est normal de se sentir stressé, tu n\'es pas seul(e)',
        'Trouve une activité qui te détend (sport, musique, dessin...)',
        'N\'hésite pas à parler à tes parents ou un adulte de confiance'
      ],
      independent: [
        'Créez des routines qui vous ancrent dans le positif',
        'Accordez-vous des récompenses après les efforts',
        'Connectez-vous avec d\'autres personnes, même à distance'
      ]
    };

    return tips[userType] || tips.independent;
  };

  const messages = getMessages();
  const tips = getTips();

  const handleResponse = (responseIndex: number) => {
    setHasInteracted(true);
    // Logique de réponse basée sur le choix
    setTimeout(() => {
      if (currentMessage < messages.length - 1) {
        setCurrentMessage(currentMessage + 1);
      }
    }, 1000);
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (!isVisible) return null;

  return (
    <Card className="max-w-md mx-auto bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 shadow-lg animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="text-purple-800">Bulle IA Attentionnée</span>
          </div>
          {onClose && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => {
                setIsVisible(false);
                onClose();
              }}
              className="h-6 w-6 p-0 hover:bg-purple-100"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            <Clock className="w-3 h-3 mr-1" />
            {getCurrentTime()}
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Sparkles className="w-3 h-3 mr-1" />
            Personnalisé
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Message principal */}
        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-purple-100">
          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-800 mb-3">
                {messages[currentMessage]?.text}
              </p>
              
              {!hasInteracted && messages[currentMessage]?.responses && (
                <div className="space-y-2">
                  {messages[currentMessage].responses.map((response, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleResponse(index)}
                      className="w-full text-left justify-start hover:bg-purple-50 border-purple-200"
                    >
                      {response}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Conseil du jour */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Conseil du jour
          </h4>
          <p className="text-sm text-blue-700">
            {tips[Math.floor(Math.random() * tips.length)]}
          </p>
        </div>

        {/* Score QVT si disponible */}
        {lastScore && (
          <div className="bg-white/50 p-3 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700">
              Votre dernier score QVT : <span className="font-bold text-purple-600">{lastScore}/15</span>
              {lastScore <= 6 && (
                <span className="text-orange-600 ml-2">⚠️ Vigilance recommandée</span>
              )}
            </p>
          </div>
        )}

        {/* Actions rapides */}
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
            Nouveau bilan
          </Button>
          <Button size="sm" variant="outline" className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-50">
            Conseils IA
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmotionalBubble;
