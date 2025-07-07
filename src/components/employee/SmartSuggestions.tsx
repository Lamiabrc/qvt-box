
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Clock, 
  Users, 
  BookOpen, 
  Coffee,
  Headphones,
  Flower2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

interface SmartSuggestionsProps {
  userProfile: {
    role: string;
    department: string;
    stressLevel: number;
    workload: number;
  };
}

const SmartSuggestions = ({ userProfile }: SmartSuggestionsProps) => {
  const generateSuggestions = () => {
    const suggestions = [];

    // Suggestions basées sur le niveau de stress
    if (userProfile.stressLevel > 70) {
      suggestions.push({
        icon: Headphones,
        title: "Session de relaxation guidée",
        description: "15 minutes de méditation pour réduire le stress",
        action: "Commencer maintenant",
        type: "urgent",
        link: "/employee-wellness-activities"
      });
    }

    // Suggestions basées sur la charge de travail
    if (userProfile.workload > 80) {
      suggestions.push({
        icon: Clock,
        title: "Optimisation du temps",
        description: "Techniques de priorisation des tâches",
        action: "Voir les conseils",
        type: "important",
        link: "/employee-wellness-activities"
      });
    }

    // Suggestions générales
    suggestions.push(
      {
        icon: Users,
        title: "Connexion équipe",
        description: "Rejoignez la pause café virtuelle à 15h",
        action: "Participer",
        type: "social",
        link: "/employee-team-space"
      },
      {
        icon: BookOpen,
        title: "Formation micro-learning",
        description: "Gestion des émotions au travail - 10 min",
        action: "Suivre",
        type: "development",
        link: "/employee-wellness-activities"
      },
      {
        icon: Flower2,
        title: "Moment zen",
        description: "Exercice de respiration consciente",
        action: "Pratiquer",
        type: "wellness",
        link: "/employee-wellness-activities"
      }
    );

    return suggestions.slice(0, 4);
  };

  const suggestions = generateSuggestions();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'important': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'social': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'development': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'wellness': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'urgent': return 'Urgent';
      case 'important': return 'Important';
      case 'social': return 'Social';
      case 'development': return 'Formation';
      case 'wellness': return 'Bien-être';
      default: return 'Suggestion';
    }
  };

  return (
    <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-600" />
          Suggestions Intelligentes
          <Badge className="bg-yellow-100 text-yellow-800 text-xs">
            Basées sur votre profil
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <suggestion.icon className="w-5 h-5 text-yellow-600" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{suggestion.title}</h4>
                    <p className="text-sm text-gray-600">{suggestion.description}</p>
                  </div>
                  <Badge className={`text-xs ${getTypeColor(suggestion.type)}`}>
                    {getTypeLabel(suggestion.type)}
                  </Badge>
                </div>
              </div>

              <Link to={suggestion.link}>
                <Button size="sm" variant="outline" className="border-yellow-300 text-yellow-700 hover:bg-yellow-50">
                  {suggestion.action}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
          <p className="text-sm text-yellow-800">
            💡 Ces suggestions évoluent en fonction de vos habitudes et de votre bien-être quotidien
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmartSuggestions;
