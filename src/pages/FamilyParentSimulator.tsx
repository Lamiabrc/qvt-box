
import React, { useState } from 'react';
import { Heart, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SimulatorBase from '../components/simulators/SimulatorBase';
import SimulatorResults from '../components/simulators/SimulatorResults';
import { familyParentQuestions } from '../data/simulatorQuestions';
import { getRecommendedBoxes } from '../data/boxRecommendations';

const FamilyParentSimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const handleAnswer = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < familyParentQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: { [key: string]: number }) => {
    const totalScore = Object.values(finalAnswers).reduce((sum, value) => sum + value, 0);
    const maxScore = familyParentQuestions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    let riskLevel = '';
    let riskColor = '';
    let recommendations: string[] = [];

    if (percentage >= 80) {
      riskLevel = 'Excellent';
      riskColor = 'text-green-600';
      recommendations = [
        'Vous êtes un parent équilibré et connecté',
        'Continuez à maintenir cette belle harmonie',
        'Partagez vos bonnes pratiques avec d\'autres parents'
      ];
    } else if (percentage >= 60) {
      riskLevel = 'Bon';
      riskColor = 'text-yellow-600';
      recommendations = [
        'Renforcez les moments de qualité en famille',
        'Explorez les activités de reconnexion parent-ado',
        'Considérez un accompagnement préventif'
      ];
    } else if (percentage >= 40) {
      riskLevel = 'À améliorer';
      riskColor = 'text-orange-600';
      recommendations = [
        'QVTeen Box Famille fortement recommandée',
        'Établissez de nouvelles règles familiales ensemble',
        'Planifiez des activités famille régulières'
      ];
    } else {
      riskLevel = 'Priorité';
      riskColor = 'text-red-600';
      recommendations = [
        'Accompagnement QVTeen Box urgent',
        'Consultez un thérapeute familial si nécessaire',
        'Commencez par de petits changements positifs'
      ];
    }

    // Obtenir les box recommandées basées sur les données - fix: use only 2 arguments
    const recommendedBoxes = getRecommendedBoxes('parent', riskLevel).map(box => ({
      name: box.name,
      description: box.description,
      price: box.price,
      features: box.features
    }));

    setResults({
      score: percentage,
      maxScore: 100,
      riskLevel,
      riskColor,
      recommendations,
      recommendedBoxes
    });

    toast({
      title: "Évaluation terminée",
      description: "Voici votre bilan familial parental avec recommandations personnalisées"
    });
  };

  if (results) {
    return (
      <SimulatorResults
        title="Bilan Familial Parent"
        score={results.score}
        maxScore={results.maxScore}
        riskLevel={results.riskLevel}
        riskColor={results.riskColor}
        recommendations={results.recommendations}
        recommendedBoxes={results.recommendedBoxes}
        backgroundColor="from-purple-50 via-pink-50 to-violet-50"
        accentColor="purple"
        icon={<Heart className="w-12 h-12 text-white" />}
        ctaButtons={[
          { label: "QVTeen Box Famille", link: "/payment" },
          { label: "Autres simulateurs", link: "/simulator-home", variant: "outline" }
        ]}
      />
    );
  }

  return (
    <SimulatorBase
      title="Simulateur Parent"
      badge="Évaluation Parentale"
      description="Évaluez votre bien-être parental et la relation avec votre adolescent"
      questions={familyParentQuestions}
      currentStep={currentStep}
      onAnswer={handleAnswer}
      onBack={() => window.history.back()}
      backgroundColor="from-purple-50 via-pink-50 to-violet-50"
      accentColor="purple"
      icon={<Users className="w-8 h-8 text-white" />}
    />
  );
};

export default FamilyParentSimulator;
