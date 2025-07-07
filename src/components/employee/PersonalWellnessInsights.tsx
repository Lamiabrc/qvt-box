
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Heart, 
  Brain, 
  Battery, 
  Shield,
  Target,
  Lightbulb
} from "lucide-react";

interface PersonalWellnessInsightsProps {
  wellnessData: {
    overallScore: number;
    stressLevel: number;
    energyLevel: number;
    workLifeBalance: number;
    jobSatisfaction: number;
    trend: 'improving' | 'stable' | 'declining';
  };
}

const PersonalWellnessInsights = ({ wellnessData }: PersonalWellnessInsightsProps) => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-red-600" />;
      default: return <Heart className="w-4 h-4 text-blue-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'improving': return 'border-green-200 bg-green-50';
      case 'declining': return 'border-red-200 bg-red-50';
      default: return 'border-blue-200 bg-blue-50';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const personalizedRecommendations = [
    {
      icon: Brain,
      title: "Gestion du stress",
      description: "Pratiquez la respiration profonde 5 min/jour",
      priority: "high"
    },
    {
      icon: Battery,
      title: "Niveau d'énergie",
      description: "Planifiez des pauses toutes les 2h",
      priority: "medium"
    },
    {
      icon: Shield,
      title: "Équilibre vie pro/perso",
      description: "Définissez des limites claires après 18h",
      priority: "medium"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-blue-600" />
            Analyse Personnalisée de votre Bien-être
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Score global</span>
                <div className="flex items-center gap-2">
                  {getTrendIcon(wellnessData.trend)}
                  <span className={`text-2xl font-bold ${getScoreColor(wellnessData.overallScore)}`}>
                    {wellnessData.overallScore}%
                  </span>
                </div>
              </div>
              <Progress value={wellnessData.overallScore} className="mb-4" />
              
              <div className={`p-3 rounded-lg border ${getTrendColor(wellnessData.trend)}`}>
                <p className="text-sm font-medium">
                  {wellnessData.trend === 'improving' && 'Tendance positive - Continuez ainsi !'}
                  {wellnessData.trend === 'stable' && 'Situation stable - Quelques améliorations possibles'}
                  {wellnessData.trend === 'declining' && 'Attention - Il est temps d\'agir'}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Niveau de stress</span>
                <span className={`font-medium ${getScoreColor(100 - wellnessData.stressLevel)}`}>
                  {wellnessData.stressLevel}%
                </span>
              </div>
              <Progress value={wellnessData.stressLevel} className="h-2" />

              <div className="flex items-center justify-between">
                <span className="text-sm">Niveau d'énergie</span>
                <span className={`font-medium ${getScoreColor(wellnessData.energyLevel)}`}>
                  {wellnessData.energyLevel}%
                </span>
              </div>
              <Progress value={wellnessData.energyLevel} className="h-2" />

              <div className="flex items-center justify-between">
                <span className="text-sm">Équilibre vie pro/perso</span>
                <span className={`font-medium ${getScoreColor(wellnessData.workLifeBalance)}`}>
                  {wellnessData.workLifeBalance}%
                </span>
              </div>
              <Progress value={wellnessData.workLifeBalance} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            Recommandations Personnalisées
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {personalizedRecommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <rec.icon className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{rec.title}</h4>
                  <p className="text-sm text-gray-600">{rec.description}</p>
                </div>
                <Badge variant={rec.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                  {rec.priority === 'high' ? 'Priorité' : 'Conseil'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalWellnessInsights;
