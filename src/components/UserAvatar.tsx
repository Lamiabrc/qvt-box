import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Smile, 
  Meh, 
  Frown, 
  Heart, 
  Zap, 
  Star,
  Edit3,
  Palette,
  Sparkles
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface UserAvatarProps {
  qvtScore?: number; // Score de 1 à 15
  userName?: string;
  avatarStyle?: 'classic' | 'teens' | 'professional';
  universe?: 'family' | 'enterprise' | 'teens';
  isEditable?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

interface AvatarCustomization {
  skinTone: string;
  hairStyle: string;
  hairColor: string;
  expression: string;
  accessory?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  qvtScore = 8,
  userName = "Utilisateur",
  avatarStyle = 'classic',
  universe = 'family',
  isEditable = true,
  size = 'md'
}) => {
  const [customization, setCustomization] = useState<AvatarCustomization>({
    skinTone: '🙂',
    hairStyle: 'court',
    hairColor: 'brun',
    expression: 'neutre',
    accessory: ''
  });

  // Déterminer l'état émotionnel selon le score QVT (1-15)
  const getEmotionalState = (score: number) => {
    if (score <= 3) return { 
      state: 'burnout', 
      emoji: '😰', 
      color: 'emotion-burnout',
      bubble: 'Je traverse une période difficile...',
      intensity: 'high'
    };
    if (score <= 6) return { 
      state: 'stress', 
      emoji: '😟', 
      color: 'emotion-stress',
      bubble: 'Je ressens du stress au quotidien',
      intensity: 'medium-high'
    };
    if (score <= 9) return { 
      state: 'tension', 
      emoji: '😐', 
      color: 'emotion-tension',
      bubble: 'Je vis quelques tensions...',
      intensity: 'medium'
    };
    if (score <= 11) return { 
      state: 'neutral', 
      emoji: '🙂', 
      color: 'emotion-neutral',
      bubble: 'Ça va, dans l\'ensemble !',
      intensity: 'low'
    };
    if (score <= 13) return { 
      state: 'content', 
      emoji: '😊', 
      color: 'emotion-content',
      bubble: 'Je me sens bien aujourd\'hui',
      intensity: 'positive'
    };
    if (score === 14) return { 
      state: 'fulfilled', 
      emoji: '😄', 
      color: 'emotion-fulfilled',
      bubble: 'Je suis épanoui(e) !',
      intensity: 'high-positive'
    };
    return { 
      state: 'passion', 
      emoji: '🤩', 
      color: 'emotion-passion',
      bubble: 'Je suis passionné(e) par ma vie !',
      intensity: 'maximum'
    };
  };

  const emotionalState = getEmotionalState(qvtScore);

  // Adaptation selon l'univers
  const getUniverseStyles = () => {
    switch (universe) {
      case 'teens':
        return {
          containerClass: 'teens-card border-4',
          bubbleClass: 'qvt-gradient-teens',
          textStyle: 'font-bold text-white'
        };
      case 'enterprise':
        return {
          containerClass: 'qvt-card border border-qvt-teal/20',
          bubbleClass: 'qvt-gradient-primary',
          textStyle: 'font-medium text-qvt-off-white'
        };
      default:
        return {
          containerClass: 'qvt-card border border-qvt-aqua/30',
          bubbleClass: 'qvt-gradient-secondary',
          textStyle: 'font-medium text-qvt-soft-black'
        };
    }
  };

  const universeStyles = getUniverseStyles();

  // Tailles d'avatar
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-12 h-12 text-lg';
      case 'md': return 'w-16 h-16 text-xl';
      case 'lg': return 'w-24 h-24 text-3xl';
      case 'xl': return 'w-32 h-32 text-4xl';
      default: return 'w-16 h-16 text-xl';
    }
  };

  const avatarOptions = {
    skinTones: ['🙂', '😊', '😄', '🤗', '😌', '🤓', '😎'],
    hairStyles: ['Court', 'Long', 'Bouclé', 'Lisse', 'Moderne'],
    hairColors: ['Brun', 'Blond', 'Roux', 'Noir', 'Gris', 'Coloré'],
    expressions: ['Souriant', 'Pensif', 'Déterminé', 'Zen', 'Énergique'],
    accessories: ['', '👓', '🎧', '🎯', '⭐', '🌟', '💎']
  };

  return (
    <div className="relative group">
      {/* Bulle émotionnelle flottante */}
      <div 
        className={`absolute -top-4 -right-2 px-3 py-1 rounded-full text-xs ${universeStyles.bubbleClass} ${universeStyles.textStyle} 
                   opacity-0 group-hover:opacity-100 transition-all duration-300 bubble-float z-10 whitespace-nowrap shadow-bubble`}
      >
        {emotionalState.bubble}
      </div>

      {/* Indicateur de score QVT */}
      <div className="absolute -top-2 -left-2 z-10">
        <Badge 
          variant="outline" 
          className={`text-xs border-2 bg-white/90 backdrop-blur-sm ${emotionalState.color} border-current font-montserrat font-semibold`}
        >
          {qvtScore}/15
        </Badge>
      </div>

      {/* Avatar principal */}
      <Card className={`${universeStyles.containerClass} transition-all duration-300 hover:shadow-bubble-lg cursor-pointer`}>
        <CardContent className="p-4 flex flex-col items-center space-y-3">
          {/* Cercle avatar avec état émotionnel */}
          <div 
            className={`${getSizeClasses()} bg-gradient-to-br from-qvt-aqua/20 to-qvt-light-blue/20 
                       border-3 border-current ${emotionalState.color} rounded-full flex items-center justify-center
                       bubble-float shadow-bubble transition-all duration-300 hover:scale-110`}
          >
            <span className="text-2xl filter drop-shadow-sm">
              {emotionalState.emoji}
            </span>
          </div>

          {/* Nom utilisateur */}
          <div className="text-center">
            <p className="text-sm font-montserrat font-semibold text-qvt-soft-black">
              {userName}
            </p>
            <p className={`text-xs ${emotionalState.color} font-medium capitalize`}>
              {emotionalState.state}
            </p>
          </div>

          {/* Barre de progression émotionnelle */}
          <div className="w-full bg-qvt-off-white rounded-full h-2 shadow-inner">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${emotionalState.color} bg-current`}
              style={{ width: `${(qvtScore / 15) * 100}%` }}
            />
          </div>

          {/* Bouton d'édition */}
          {isEditable && (
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-qvt-teal hover:text-qvt-aqua transition-colors duration-200"
                >
                  <Edit3 className="w-4 h-4 mr-1" />
                  Personnaliser
                </Button>
              </DialogTrigger>
              <DialogContent className="qvt-card max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-qvt-teal font-montserrat">
                    <Palette className="w-5 h-5" />
                    Personnaliser mon avatar
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4">
                  {/* Aperçu */}
                  <div className="flex justify-center p-4 bg-qvt-off-white rounded-xl">
                    <div className={`${getSizeClasses()} bg-gradient-to-br from-qvt-aqua/20 to-qvt-light-blue/20 
                                   border-3 border-current ${emotionalState.color} rounded-full flex items-center justify-center`}>
                      <span className="text-2xl">{customization.skinTone}</span>
                    </div>
                  </div>

                  {/* Options de personnalisation */}
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-qvt-soft-black mb-2 block">
                        Expression
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {avatarOptions.skinTones.map((tone, index) => (
                          <button
                            key={index}
                            onClick={() => setCustomization(prev => ({ ...prev, skinTone: tone }))}
                            className={`w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110
                                     ${customization.skinTone === tone ? 'border-qvt-teal shadow-bubble' : 'border-gray-200'}`}
                          >
                            {tone}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-qvt-soft-black mb-2 block">
                        Accessoires
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {avatarOptions.accessories.map((accessory, index) => (
                          <button
                            key={index}
                            onClick={() => setCustomization(prev => ({ ...prev, accessory }))}
                            className={`w-10 h-10 rounded-full border-2 transition-all duration-200 hover:scale-110 flex items-center justify-center
                                     ${customization.accessory === accessory ? 'border-qvt-teal shadow-bubble' : 'border-gray-200'}`}
                          >
                            {accessory || '∅'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full qvt-gradient-primary text-white font-montserrat font-semibold">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Sauvegarder mon avatar
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </CardContent>
      </Card>

      {/* Particules émotionnelles */}
      {emotionalState.intensity === 'high-positive' || emotionalState.intensity === 'maximum' ? (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 right-2 text-yellow-400 opacity-80 bubble-float">
            <Star className="w-3 h-3" />
          </div>
          <div className="absolute bottom-3 left-2 text-pink-400 opacity-80 bubble-float-delayed">
            <Heart className="w-3 h-3" />
          </div>
          <div className="absolute top-1/2 right-1 text-purple-400 opacity-80 bubble-float">
            <Sparkles className="w-3 h-3" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserAvatar;