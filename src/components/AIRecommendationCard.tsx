
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  TrendingUp, 
  Target,
  Package,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

interface AIRecommendationCardProps {
  evolutionAnalysis: string;
  personalizedInsights: string[];
  recommendedBoxes: Array<{
    name: string;
    reason: string;
    priority: 'high' | 'medium' | 'low';
  }>;
  actionableAdvice: string[];
  nextSteps: string[];
  confidenceScore: number;
  isLoading?: boolean;
}

const AIRecommendationCard: React.FC<AIRecommendationCardProps> = ({
  evolutionAnalysis,
  personalizedInsights,
  recommendedBoxes,
  actionableAdvice,
  nextSteps,
  confidenceScore,
  isLoading = false
}) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return 'Priorité Haute';
      case 'medium': return 'Priorité Moyenne';
      case 'low': return 'Optionnel';
      default: return 'Standard';
    }
  };

  if (isLoading) {
    return (
      <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Brain className="w-6 h-6 animate-pulse" />
            L'IA analyse vos données...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="animate-pulse bg-purple-200 h-4 rounded"></div>
            <div className="animate-pulse bg-purple-200 h-4 rounded w-3/4"></div>
            <div className="animate-pulse bg-purple-200 h-4 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Brain className="w-6 h-6" />
            Recommandations IA Personnalisées
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Confiance</span>
            <Progress value={confidenceScore * 100} className="w-20 h-2" />
            <span className="text-sm font-medium">{Math.round(confidenceScore * 100)}%</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Analyse d'évolution */}
        <div className="bg-white/60 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Évolution Détectée
          </h4>
          <p className="text-sm text-gray-700">{evolutionAnalysis}</p>
        </div>

        {/* Insights personnalisés */}
        <div>
          <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
            <Target className="w-4 h-4" />
            Insights Personnalisés
          </h4>
          <div className="space-y-2">
            {personalizedInsights.map((insight, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{insight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Box recommandées */}
        {recommendedBoxes.length > 0 && (
          <div>
            <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <Package className="w-4 h-4" />
              Box Recommandées (Selon votre évolution)
            </h4>
            <div className="space-y-3">
              {recommendedBoxes.map((box, index) => (
                <div key={index} className="bg-white/60 p-3 rounded-lg border border-purple-200">
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-medium text-gray-800">{box.name}</h5>
                    <Badge className={getPriorityColor(box.priority)}>
                      {getPriorityLabel(box.priority)}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{box.reason}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Conseils d'action */}
        <div>
          <h4 className="font-semibold text-purple-800 mb-3">Actions Recommandées</h4>
          <div className="space-y-2">
            {actionableAdvice.map((advice, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <Target className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>{advice}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prochaines étapes */}
        <div>
          <h4 className="font-semibold text-purple-800 mb-3">Prochaines Étapes</h4>
          <div className="space-y-2">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-purple-200">
          <Link to="/shop">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Package className="w-4 h-4 mr-2" />
              Explorer les Box
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Button variant="outline" className="border-purple-300 text-purple-700">
            Programmer un suivi
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRecommendationCard;
