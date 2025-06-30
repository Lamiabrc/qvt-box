
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AssessmentHistory {
  date: string;
  score: number;
  riskLevel: string;
  criticalAreas?: string[];
  improvements?: string[];
}

interface UserProfile {
  type: string;
  context: string;
}

interface CurrentScores {
  totalScore: number;
  riskLevel: string;
  trend?: string;
}

interface AIRecommendations {
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
}

export const useAIRecommendations = () => {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<AIRecommendations | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateRecommendations = async (
    assessmentHistory: AssessmentHistory[],
    userProfile: UserProfile,
    currentScores: CurrentScores
  ) => {
    setLoading(true);
    setError(null);

    try {
      console.log('Calling AI recommendations with:', { assessmentHistory, userProfile, currentScores });

      const { data, error: functionError } = await supabase.functions.invoke('ai-recommendations', {
        body: {
          assessmentHistory,
          userProfile,
          currentScores
        }
      });

      if (functionError) {
        throw new Error(functionError.message);
      }

      if (data.success) {
        setRecommendations(data.recommendations);
        console.log('AI recommendations received:', data.recommendations);
      } else {
        // Utiliser les recommandations de fallback si disponibles
        if (data.fallbackRecommendations) {
          setRecommendations(data.fallbackRecommendations);
        }
        setError(data.error || 'Erreur lors de la génération des recommandations');
      }
    } catch (err) {
      console.error('Error generating AI recommendations:', err);
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
      
      // Recommandations de fallback local
      setRecommendations({
        evolutionAnalysis: "Service de recommandations temporairement indisponible",
        personalizedInsights: ["Vos données sont précieuses pour améliorer le système"],
        recommendedBoxes: [
          {
            name: "Box Bien-être Essentiel",
            reason: "Recommendation générale en attendant l'analyse personnalisée",
            priority: "medium"
          }
        ],
        actionableAdvice: ["Continuez vos évaluations régulières", "Prenez soin de votre bien-être"],
        nextSteps: ["Le système sera bientôt de retour"],
        confidenceScore: 0.3
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    recommendations,
    error,
    generateRecommendations
  };
};
