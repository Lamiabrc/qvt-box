
interface UserAssessmentData {
  userId: string;
  timestamp: Date;
  simulatorType: 'enterprise_manager' | 'enterprise_employee' | 'family_parent' | 'family_teen' | 'family_enterprise';
  answers: { [key: string]: number };
  calculatedScores: {
    totalScore: number;
    percentage: number;
    riskLevel: string;
    categories: { [key: string]: number };
  };
  demographicData?: {
    age?: number;
    role?: string;
    context?: string;
  };
  consentForAI: boolean;
}

interface IntelligentRecommendation {
  id: string;
  userId: string;
  assessmentId: string;
  recommendedBoxes: string[];
  confidenceScore: number;
  reasoning: string;
  alternativeOptions: string[];
  followUpRecommendations: string[];
  timeline: 'immediate' | 'short_term' | 'long_term';
}

export class IntelligentRecommendationEngine {
  private assessmentHistory: UserAssessmentData[] = [];
  
  analyzeUserProgress(userId: string): {
    progressTrend: 'improving' | 'stable' | 'declining';
    keyInsights: string[];
    nextRecommendations: IntelligentRecommendation[];
  } {
    const userAssessments = this.assessmentHistory.filter(a => a.userId === userId);
    
    if (userAssessments.length < 2) {
      return {
        progressTrend: 'stable',
        keyInsights: ['Données insuffisantes pour analyser la progression'],
        nextRecommendations: []
      };
    }

    // Analyser la tendance sur les 3 derniers mois
    const recent = userAssessments.slice(-3);
    const scores = recent.map(a => a.calculatedScores.percentage);
    const trend = this.calculateTrend(scores);
    
    return {
      progressTrend: trend,
      keyInsights: this.generateInsights(recent),
      nextRecommendations: this.generatePersonalizedRecommendations(userId, recent)
    };
  }

  private calculateTrend(scores: number[]): 'improving' | 'stable' | 'declining' {
    if (scores.length < 2) return 'stable';
    
    const latest = scores[scores.length - 1];
    const previous = scores[scores.length - 2];
    const difference = latest - previous;
    
    if (difference > 10) return 'improving';
    if (difference < -10) return 'declining';
    return 'stable';
  }

  private generateInsights(assessments: UserAssessmentData[]): string[] {
    const insights: string[] = [];
    
    // Analyser les patterns dans les réponses
    const commonIssues = this.identifyCommonIssues(assessments);
    const strengths = this.identifyStrengths(assessments);
    
    if (commonIssues.length > 0) {
      insights.push(`Domaines à surveiller : ${commonIssues.join(', ')}`);
    }
    
    if (strengths.length > 0) {
      insights.push(`Points forts identifiés : ${strengths.join(', ')}`);
    }
    
    return insights;
  }

  private identifyCommonIssues(assessments: UserAssessmentData[]): string[] {
    // Logique pour identifier les problèmes récurrents
    const issues: string[] = [];
    
    assessments.forEach(assessment => {
      Object.entries(assessment.answers).forEach(([key, value]) => {
        if (value <= 2 && key.includes('stress')) {
          issues.push('Gestion du stress');
        }
        if (value <= 2 && key.includes('communication')) {
          issues.push('Communication');
        }
        if (value <= 2 && key.includes('motivation')) {
          issues.push('Motivation');
        }
      });
    });
    
    return [...new Set(issues)];
  }

  private identifyStrengths(assessments: UserAssessmentData[]): string[] {
    const strengths: string[] = [];
    
    assessments.forEach(assessment => {
      Object.entries(assessment.answers).forEach(([key, value]) => {
        if (value >= 4 && key.includes('satisfaction')) {
          strengths.push('Satisfaction élevée');
        }
        if (value >= 4 && key.includes('communication')) {
          strengths.push('Excellente communication');
        }
        if (value >= 4 && key.includes('equilibre')) {
          strengths.push('Bon équilibre vie pro/perso');
        }
      });
    });
    
    return [...new Set(strengths)];
  }

  private generatePersonalizedRecommendations(userId: string, assessments: UserAssessmentData[]): IntelligentRecommendation[] {
    // Algorithme de recommandation personnalisée basé sur l'historique
    const recommendations: IntelligentRecommendation[] = [];
    
    const latestAssessment = assessments[assessments.length - 1];
    const commonIssues = this.identifyCommonIssues(assessments);
    
    // Recommandations basées sur les problèmes identifiés
    if (commonIssues.includes('Gestion du stress')) {
      recommendations.push({
        id: `rec_${Date.now()}_1`,
        userId,
        assessmentId: latestAssessment.userId,
        recommendedBoxes: ['box-decompression', 'box-pause-sensorielle'],
        confidenceScore: 0.85,
        reasoning: 'Problèmes récurrents de stress détectés dans vos évaluations',
        alternativeOptions: ['box-expression-parentale', 'box-sommeil-reparateur'],
        followUpRecommendations: ['Programmer des évaluations hebdomadaires', 'Intégrer des pauses quotidiennes'],
        timeline: 'immediate'
      });
    }
    
    return recommendations;
  }

  // Méthode pour contribuer aux données d'IA (anonymisées)
  prepareDataForAIContribution(consent: boolean): any {
    if (!consent) return null;
    
    return {
      anonymizedAssessments: this.assessmentHistory.map(assessment => ({
        simulatorType: assessment.simulatorType,
        normalizedAnswers: this.normalizeAnswers(assessment.answers),
        riskLevel: assessment.calculatedScores.riskLevel,
        demographicContext: this.anonymizeDemographics(assessment.demographicData),
        timestamp: assessment.timestamp.getTime()
      })),
      metadata: {
        totalAssessments: this.assessmentHistory.length,
        dataVersion: '1.0',
        contributionDate: new Date().toISOString()
      }
    };
  }

  private normalizeAnswers(answers: { [key: string]: number }): number[] {
    return Object.values(answers).map(value => value / 4); // Normaliser sur une échelle 0-1
  }

  private anonymizeDemographics(demo?: { age?: number; role?: string; context?: string }): any {
    if (!demo) return null;
    
    return {
      ageRange: demo.age ? this.getAgeRange(demo.age) : null,
      roleCategory: demo.role ? this.getRoleCategory(demo.role) : null,
      contextType: demo.context || null
    };
  }

  private getAgeRange(age: number): string {
    if (age < 25) return '18-24';
    if (age < 35) return '25-34';
    if (age < 45) return '35-44';
    if (age < 55) return '45-54';
    return '55+';
  }

  private getRoleCategory(role: string): string {
    if (role.includes('manager') || role.includes('directeur')) return 'management';
    if (role.includes('parent')) return 'parent';
    if (role.includes('teen') || role.includes('ado')) return 'adolescent';
    return 'employee';
  }
}

export const recommendationEngine = new IntelligentRecommendationEngine();
