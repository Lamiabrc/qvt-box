
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, AlertTriangle, Heart, Brain, Package } from "lucide-react";
import { Link } from "react-router-dom";

interface QVTScoreIndicatorProps {
  score: number;
  previousScore?: number;
  userType?: 'employee' | 'manager' | 'parent' | 'teen' | 'independent';
}

const QVTScoreIndicator = ({ score, previousScore, userType = 'independent' }: QVTScoreIndicatorProps) => {
  const getScoreLevel = (score: number) => {
    if (score <= 3) return { 
      level: 'Burn-out', 
      color: 'bg-burnout', 
      textColor: 'text-red-700', 
      bgColor: 'bg-red-50',
      emotion: 'burnout'
    };
    if (score <= 6) return { 
      level: 'Stress élevé', 
      color: 'bg-stress', 
      textColor: 'text-orange-700', 
      bgColor: 'bg-orange-50',
      emotion: 'stress'
    };
    if (score <= 9) return { 
      level: 'Équilibre fragile', 
      color: 'bg-tension', 
      textColor: 'text-yellow-700', 
      bgColor: 'bg-yellow-50',
      emotion: 'tension'
    };
    if (score <= 12) return { 
      level: 'Bien-être satisfaisant', 
      color: 'bg-content', 
      textColor: 'text-green-700', 
      bgColor: 'bg-green-50',
      emotion: 'content'
    };
    return { 
      level: 'État optimal', 
      color: 'bg-passionate', 
      textColor: 'text-blue-700', 
      bgColor: 'bg-blue-50',
      emotion: 'passionate'
    };
  };

  const getScoreDescription = (score: number) => {
    if (score <= 3) return 'Burn-out - Intervention urgente nécessaire';
    if (score <= 6) return 'Stress important - Mesures préventives requises';
    if (score <= 9) return 'Équilibre fragile - Vigilance recommandée';
    if (score <= 12) return 'Bien-être satisfaisant - Maintenir les bonnes pratiques';
    return 'État optimal - Passion et épanouissement';
  };

  const scoreInfo = getScoreLevel(score);
  const trend = previousScore ? score - previousScore : 0;
  const percentage = (score / 15) * 100;

  return (
    <Card className={`${scoreInfo.bgColor} border-2 hover:shadow-lg transition-all duration-300`}>
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
              <div className="flex-1">
                <p className="text-sm font-medium mb-2">
                  Nous avons sélectionné des box adaptées à votre état émotionnel
                </p>
                <Link 
                  to="/my-box" 
                  state={{ score, userType }}
                  className="w-full"
                >
                  <Button className="w-full gradient-trust text-white hover:scale-105 transition-transform">
                    <Package className="w-4 h-4 mr-2" />
                    Voir ma box personnalisée
                  </Button>
                </Link>
              </div>
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
