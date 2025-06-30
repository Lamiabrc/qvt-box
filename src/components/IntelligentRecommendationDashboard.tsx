
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Minus,
  Lightbulb, 
  Target,
  Calendar,
  Brain,
  Package,
  ArrowRight
} from "lucide-react";
import { recommendationEngine } from '../data/intelligentRecommendations';
import { Link } from "react-router-dom";

interface RecommendationDashboardProps {
  userId: string;
}

const IntelligentRecommendationDashboard: React.FC<RecommendationDashboardProps> = ({ userId }) => {
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler l'analyse des données utilisateur
    setTimeout(() => {
      const userAnalysis = recommendationEngine.analyzeUserProgress(userId);
      setAnalysis(userAnalysis);
      setLoading(false);
    }, 1000);
  }, [userId]);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
        <div className="animate-pulse bg-gray-200 h-32 rounded-lg"></div>
      </div>
    );
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-5 h-5 text-green-600" />;
      case 'declining': return <TrendingDown className="w-5 h-5 text-red-600" />;
      default: return <Minus className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'improving': return 'text-green-600 bg-green-50 border-green-200';
      case 'declining': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getTrendLabel = (trend: string) => {
    switch (trend) {
      case 'improving': return 'En amélioration';
      case 'declining': return 'À surveiller';
      default: return 'Stable';
    }
  };

  return (
    <div className="space-y-6">
      {/* Analyse de progression */}
      <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Brain className="w-6 h-6" />
            Analyse Intelligente de votre Progression
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Tendance générale</h4>
              <div className={`flex items-center gap-3 p-4 rounded-lg border ${getTrendColor(analysis.progressTrend)}`}>
                {getTrendIcon(analysis.progressTrend)}
                <div>
                  <p className="font-medium">{getTrendLabel(analysis.progressTrend)}</p>
                  <p className="text-sm opacity-80">Basé sur vos dernières évaluations</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Insights personnalisés</h4>
              <div className="space-y-2">
                {analysis.keyInsights.map((insight: string, index: number) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <Lightbulb className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommandations personnalisées */}
      {analysis.nextRecommendations.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Recommandations Personnalisées
          </h3>
          
          {analysis.nextRecommendations.map((rec: any, index: number) => (
            <Card key={index} className="border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-teal-800">Recommandation #{index + 1}</CardTitle>
                    <Badge className={`mt-1 ${
                      rec.timeline === 'immediate' ? 'bg-red-100 text-red-800' :
                      rec.timeline === 'short_term' ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {rec.timeline === 'immediate' ? 'Immédiat' :
                       rec.timeline === 'short_term' ? 'Court terme' : 'Long terme'}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Confiance</p>
                    <div className="flex items-center gap-2">
                      <Progress value={rec.confidenceScore * 100} className="w-16 h-2" />
                      <span className="text-sm font-medium">{Math.round(rec.confidenceScore * 100)}%</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Pourquoi cette recommandation ?</h5>
                  <p className="text-sm text-gray-600">{rec.reasoning}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Box recommandées</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    {rec.recommendedBoxes.map((boxId: string, boxIndex: number) => (
                      <div key={boxIndex} className="flex items-center gap-2 p-3 bg-white/60 rounded-lg">
                        <Package className="w-4 h-4 text-teal-600" />
                        <span className="text-sm font-medium">{boxId}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {rec.followUpRecommendations.length > 0 && (
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Actions de suivi</h5>
                    <ul className="space-y-1">
                      {rec.followUpRecommendations.map((action: string, actionIndex: number) => (
                        <li key={actionIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <Calendar className="w-3 h-3 text-teal-600" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex gap-3 pt-4 border-t border-teal-200">
                  <Link to="/shop">
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      <Package className="w-4 h-4 mr-2" />
                      Voir les box
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="border-teal-300 text-teal-700">
                    Plus d'options
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default IntelligentRecommendationDashboard;
