
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
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAIRecommendations } from '../hooks/useAIRecommendations';
import AIRecommendationCard from './AIRecommendationCard';

interface RecommendationDashboardProps {
  userId: string;
}

const IntelligentRecommendationDashboard: React.FC<RecommendationDashboardProps> = ({ userId }) => {
  const { loading, recommendations, error, generateRecommendations } = useAIRecommendations();
  const [simulatedHistory, setSimulatedHistory] = useState<any[]>([]);

  useEffect(() => {
    // Simuler un historique d'évaluations avec évolution
    const mockHistory = [
      {
        date: '2024-12-15',
        score: 45,
        riskLevel: 'Élevé',
        criticalAreas: ['stress', 'sommeil'],
        improvements: []
      },
      {
        date: '2024-12-22',
        score: 52,
        riskLevel: 'Modéré',
        criticalAreas: ['stress'],
        improvements: ['sommeil']
      },
      {
        date: '2024-12-29',
        score: 68,
        riskLevel: 'Modéré',
        criticalAreas: [],
        improvements: ['stress', 'communication']
      }
    ];

    setSimulatedHistory(mockHistory);

    // Générer automatiquement les recommandations IA
    const userProfile = {
      type: 'Manager',
      context: 'Entreprise - Équipe de 8 personnes'
    };

    const currentScores = {
      totalScore: 68,
      riskLevel: 'Modéré',
      trend: 'improving'
    };

    generateRecommendations(mockHistory, userProfile, currentScores);
  }, [userId]);

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
      case 'improving': return 'En amélioration continue';
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
              <div className={`flex items-center gap-3 p-4 rounded-lg border ${getTrendColor('improving')}`}>
                {getTrendIcon('improving')}
                <div>
                  <p className="font-medium">{getTrendLabel('improving')}</p>
                  <p className="text-sm opacity-80">+23 points en 2 semaines</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Évolution détectée</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <Lightbulb className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Amélioration significative du sommeil</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Lightbulb className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Gestion du stress en progression</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Lightbulb className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Communication d'équipe renforcée</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommandations IA personnalisées */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-gray-800">Recommandations IA Évolutives</h3>
          <Sparkles className="w-5 h-5 text-purple-600" />
          <Badge className="bg-purple-100 text-purple-800">Basées sur votre historique</Badge>
        </div>
        
        {recommendations ? (
          <AIRecommendationCard
            evolutionAnalysis={recommendations.evolutionAnalysis}
            personalizedInsights={recommendations.personalizedInsights}
            recommendedBoxes={recommendations.recommendedBoxes}
            actionableAdvice={recommendations.actionableAdvice}
            nextSteps={recommendations.nextSteps}
            confidenceScore={recommendations.confidenceScore}
            isLoading={loading}
          />
        ) : (
          <AIRecommendationCard
            evolutionAnalysis="Analyse en cours..."
            personalizedInsights={[]}
            recommendedBoxes={[]}
            actionableAdvice={[]}
            nextSteps={[]}
            confidenceScore={0}
            isLoading={loading}
          />
        )}

        {error && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-4">
              <p className="text-red-800 text-sm">
                ⚠️ {error}
              </p>
              <p className="text-red-600 text-xs mt-1">
                Les recommandations de base sont affichées en attendant la résolution du problème.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Historique des évaluations */}
      <Card className="border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Historique des Évaluations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {simulatedHistory.map((assessment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{assessment.date}</p>
                  <p className="text-sm text-gray-600">Score: {assessment.score}% - {assessment.riskLevel}</p>
                </div>
                <div className="text-right">
                  {assessment.improvements.length > 0 && (
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      +{assessment.improvements.length} améliorations
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions rapides */}
      <Card className="border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Actions rapides
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/simulator-home">
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-blue-200 bg-blue-50">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Nouvelle évaluation</h4>
                  <p className="text-sm text-gray-600">Mettre à jour les recommandations</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/shop">
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-green-200 bg-green-50">
                <CardContent className="p-4 text-center">
                  <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Explorer les box</h4>
                  <p className="text-sm text-gray-600">Découvrir toutes les options</p>
                </CardContent>
              </Card>
            </Link>
            
            <Card className="hover:shadow-md transition-shadow cursor-pointer border-purple-200 bg-purple-50">
              <CardContent className="p-4 text-center">
                <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold">Historique complet</h4>
                <p className="text-sm text-gray-600">Voir toute votre évolution</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntelligentRecommendationDashboard;
