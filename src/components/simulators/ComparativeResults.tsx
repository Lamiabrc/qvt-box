
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  ArrowRight, 
  Package, 
  Brain, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  Users,
  Eye,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAIRecommendations } from "../../hooks/useAIRecommendations";

interface PerceptionGap {
  questionId: string;
  title: string;
  selfScore: number;
  otherScore: number;
  gap: number;
  gapType: 'overestimate' | 'underestimate' | 'aligned';
}

interface ComparativeResultsProps {
  title: string;
  selfAnswers: Record<string, number>;
  otherAnswers: Record<string, number>;
  questions: any[];
  maxScore: number;
  participantType: string;
  otherParticipantType: string;
  backgroundColor?: string;
  accentColor?: string;
  icon?: React.ReactNode;
}

const ComparativeResults: React.FC<ComparativeResultsProps> = ({
  title,
  selfAnswers,
  otherAnswers,
  questions,
  maxScore,
  participantType,
  otherParticipantType,
  backgroundColor = "from-blue-50 via-indigo-50 to-purple-50",
  accentColor = "blue",
  icon
}) => {
  const { loading, recommendations, generateRecommendations } = useAIRecommendations();
  const [perceptionGaps, setPerceptionGaps] = useState<PerceptionGap[]>([]);

  const selfScore = Object.values(selfAnswers).reduce((sum, val) => sum + val, 0);
  const otherScore = Object.values(otherAnswers).reduce((sum, val) => sum + val, 0);

  useEffect(() => {
    // Calculer les écarts de perception
    const gaps = questions.map(question => {
      const selfScore = selfAnswers[question.id] || 0;
      const otherScore = otherAnswers[question.id] || 0;
      const gap = Math.abs(selfScore - otherScore);
      
      let gapType: 'overestimate' | 'underestimate' | 'aligned';
      if (gap <= 0.5) {
        gapType = 'aligned';
      } else if (otherScore > selfScore) {
        gapType = 'overestimate';
      } else {
        gapType = 'underestimate';
      }

      return {
        questionId: question.id,
        title: question.title,
        selfScore,
        otherScore,
        gap,
        gapType
      };
    });

    setPerceptionGaps(gaps);

    // Générer l'analyse IA
    const assessmentHistory = [{
      date: new Date().toISOString().split('T')[0],
      score: ((selfScore + otherScore) / 2 / maxScore) * 100,
      riskLevel: 'Analyse comparative',
      criticalAreas: gaps.filter(g => g.gap > 1.5).map(g => g.title),
      improvements: gaps.filter(g => g.gapType === 'aligned').map(g => g.title)
    }];

    const userProfile = {
      type: `${participantType} - Analyse comparative`,
      context: `Confrontation de perceptions entre ${participantType} et ${otherParticipantType}`
    };

    const currentScores = {
      totalScore: ((selfScore + otherScore) / 2 / maxScore) * 100,
      riskLevel: gaps.some(g => g.gap > 2) ? 'Écarts significatifs' : 'Perceptions alignées',
      trend: 'comparative'
    };

    generateRecommendations(assessmentHistory, userProfile, currentScores);
  }, [selfAnswers, otherAnswers, questions, maxScore, participantType, otherParticipantType]);

  const getGapIcon = (gapType: string) => {
    switch (gapType) {
      case 'overestimate': return <TrendingUp className="w-5 h-5 text-orange-600" />;
      case 'underestimate': return <TrendingDown className="w-5 h-5 text-blue-600" />;
      default: return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
  };

  const getGapColor = (gapType: string) => {
    switch (gapType) {
      case 'overestimate': return 'bg-orange-100 border-orange-200 text-orange-800';
      case 'underestimate': return 'bg-blue-100 border-blue-200 text-blue-800';
      default: return 'bg-green-100 border-green-200 text-green-800';
    }
  };

  const getGapDescription = (gap: PerceptionGap) => {
    if (gap.gapType === 'aligned') {
      return "Perceptions alignées";
    } else if (gap.gapType === 'overestimate') {
      return `Votre ${otherParticipantType.toLowerCase()} perçoit plus positivement (+${gap.gap.toFixed(1)})`;
    } else {
      return `Vous percevez plus positivement que votre ${otherParticipantType.toLowerCase()} (-${gap.gap.toFixed(1)})`;
    }
  };

  const averageGap = perceptionGaps.reduce((sum, gap) => sum + gap.gap, 0) / perceptionGaps.length;
  const alignedPerceptions = perceptionGaps.filter(gap => gap.gapType === 'aligned').length;
  const alignmentPercentage = (alignedPerceptions / perceptionGaps.length) * 100;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${backgroundColor} p-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Badge className={`mb-4 bg-${accentColor}-100 text-${accentColor}-800`}>
            Analyse Comparative
          </Badge>
          <h1 className={`text-4xl font-bold text-${accentColor}-800 mb-4`}>
            {title}
          </h1>
        </div>

        {/* Vue d'ensemble */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="text-center">
              <Eye className="w-12 h-12 mx-auto text-blue-600 mb-2" />
              <CardTitle>Score {participantType}</CardTitle>
              <CardDescription className="text-2xl font-bold text-blue-600">
                {selfScore}/{maxScore}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Users className="w-12 h-12 mx-auto text-purple-600 mb-2" />
              <CardTitle>Alignement des perceptions</CardTitle>
              <CardDescription className="text-2xl font-bold text-purple-600">
                {alignmentPercentage.toFixed(0)}%
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Eye className="w-12 h-12 mx-auto text-green-600 mb-2" />
              <CardTitle>Score perçu {otherParticipantType}</CardTitle>
              <CardDescription className="text-2xl font-bold text-green-600">
                {otherScore}/{maxScore}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Analyse des écarts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-6 h-6" />
              Analyse des Écarts de Perception
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {perceptionGaps.map((gap, idx) => (
                <div key={idx} className={`p-4 rounded-lg border ${getGapColor(gap.gapType)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{gap.title}</h4>
                    {getGapIcon(gap.gapType)}
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Votre score: {gap.selfScore}</span>
                    <span className="text-sm">Score perçu: {gap.otherScore}</span>
                  </div>
                  <p className="text-sm">{getGapDescription(gap)}</p>
                  <Progress value={(4 - gap.gap) * 25} className="mt-2 h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommandations IA */}
        {recommendations && (
          <Card className="mb-8 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Brain className="w-6 h-6" />
                Analyse IA des Écarts de Perception
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/60 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Analyse des perceptions</h4>
                <p className="text-sm text-gray-700">{recommendations.evolutionAnalysis}</p>
              </div>

              <div>
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Points d'attention identifiés
                </h4>
                <div className="space-y-2">
                  {recommendations.personalizedInsights.map((insight, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>{insight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Actions recommandées</h4>
                <div className="space-y-2">
                  {recommendations.actionableAdvice.map((advice, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{advice}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        <div className="text-center space-x-4">
          <Link to="/simulator-home">
            <Button className={`bg-${accentColor}-600 hover:bg-${accentColor}-700`}>
              Nouvelle évaluation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link to="/shop">
            <Button variant="outline" className={`border-${accentColor}-300 text-${accentColor}-700`}>
              <Package className="w-4 h-4 mr-2" />
              Explorer les solutions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComparativeResults;
