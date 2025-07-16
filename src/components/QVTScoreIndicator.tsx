
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertTriangle, Heart, Brain } from "lucide-react";

interface QVTScoreIndicatorProps {
  score: number;
  previousScore?: number;
  userType?: 'employee' | 'manager' | 'parent' | 'teen' | 'independent';
}

const QVTScoreIndicator = ({ score, previousScore, userType = 'independent' }: QVTScoreIndicatorProps) => {
  const getScoreLevel = (score: number) => {
    if (score <= 3) return { level: 'Critique', color: 'bg-red-500', textColor: 'text-red-700', bgColor: 'bg-red-50' };
    if (score <= 6) return { level: 'Préoccupant', color: 'bg-orange-500', textColor: 'text-orange-700', bgColor: 'bg-orange-50' };
    if (score <= 9) return { level: 'Modéré', color: 'bg-yellow-500', textColor: 'text-yellow-700', bgColor: 'bg-yellow-50' };
    if (score <= 12) return { level: 'Bon', color: 'bg-green-500', textColor: 'text-green-700', bgColor: 'bg-green-50' };
    return { level: 'Excellent', color: 'bg-blue-500', textColor: 'text-blue-700', bgColor: 'bg-blue-50' };
  };

  const getScoreDescription = (score: number) => {
    if (score <= 3) return 'Burn-out - Intervention urgente nécessaire';
    if (score <= 6) return 'Fatigue importante - Mesures préventives requises';
    if (score <= 9) return 'Équilibre fragile - Vigilance recommandée';
    if (score <= 12) return 'Bien-être satisfaisant - Maintenir les bonnes pratiques';
    return 'État optimal - Passion et épanouissement';
  };

  const getRecommendation = (score: number, userType: string) => {
    const recommendations = {
      employee: {
        low: 'Parlez-en à votre manager ou RH. Une pause s\'impose.',
        medium: 'Prenez du temps pour vous. Explorez nos box détente.',
        high: 'Continuez vos bonnes habitudes. Partagez vos astuces !'
      },
      manager: {
        low: 'Revoyez la charge de travail de votre équipe.',
        medium: 'Organisez un team building ou des pauses collectives.',
        high: 'Votre équipe est épanouie. Maintenez cette dynamique !'
      },
      parent: {
        low: 'Demandez de l\'aide. Votre famille a besoin de vous en forme.',
        medium: 'Prenez du temps pour vous. La famille box peut aider.',
        high: 'Vous êtes un modèle pour votre famille !'
      },
      teen: {
        low: 'Parle à tes parents ou un adulte de confiance.',
        medium: 'Prends soin de toi. Regarde nos conseils teen.',
        high: 'Tu es sur la bonne voie ! Continue comme ça !'
      },
      independent: {
        low: 'Priorisez votre bien-être. Nos box peuvent vous accompagner.',
        medium: 'Équilibrez travail et détente. Explorez nos recommandations.',
        high: 'Vous maîtrisez votre bien-être. Bravo !'
      }
    };

    const level = score <= 6 ? 'low' : score <= 12 ? 'medium' : 'high';
    return recommendations[userType][level];
  };

  const scoreInfo = getScoreLevel(score);
  const trend = previousScore ? score - previousScore : 0;
  const percentage = (score / 15) * 100;

  return (
    <Card className={`${scoreInfo.bgColor} border-2`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Brain className={`w-6 h-6 ${scoreInfo.textColor}`} />
            Score QVT
          </span>
          {trend !== 0 && (
            <div className="flex items-center gap-1">
              {trend > 0 ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <span className={`text-sm font-medium ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {trend > 0 ? '+' : ''}{trend}
              </span>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-4xl font-bold text-gray-800">{score}</span>
            <span className="text-2xl text-gray-500">/15</span>
          </div>
          <Badge className={`${scoreInfo.color} text-white px-4 py-1`}>
            {scoreInfo.level}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Burn-out</span>
            <span>Passion</span>
          </div>
          <Progress value={percentage} className="h-3" />
        </div>

        <div className="space-y-3">
          <p className="text-sm text-gray-700 text-center">
            {getScoreDescription(score)}
          </p>
          
          <div className={`p-3 rounded-lg ${scoreInfo.bgColor} border`}>
            <div className="flex items-start gap-2">
              <Heart className={`w-4 h-4 ${scoreInfo.textColor} mt-0.5 flex-shrink-0`} />
              <p className="text-sm font-medium">
                {getRecommendation(score, userType)}
              </p>
            </div>
          </div>

          {score <= 6 && (
            <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-red-800">Attention requise</p>
                <p className="text-xs text-red-700">N'hésitez pas à demander de l'aide ou consulter un professionnel.</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QVTScoreIndicator;
