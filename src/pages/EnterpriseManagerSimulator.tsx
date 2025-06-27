
import React, { useState } from 'react';
import { Building2, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SimulatorBase from '../components/simulators/SimulatorBase';
import SimulatorResults from '../components/simulators/SimulatorResults';
import { enterpriseManagerQuestions } from '../data/simulatorQuestions';

const EnterpriseManagerSimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const handleAnswer = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < enterpriseManagerQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: { [key: string]: number }) => {
    const totalScore = Object.values(finalAnswers).reduce((sum, value) => sum + value, 0);
    const maxScore = enterpriseManagerQuestions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    let riskLevel = '';
    let riskColor = '';
    let recommendations: string[] = [];

    if (percentage >= 80) {
      riskLevel = 'Faible';
      riskColor = 'text-green-600';
      recommendations = [
        'Maintenez les bonnes pratiques actuelles',
        'Continuez le monitoring régulier de l\'équipe',
        'Partagez vos bonnes pratiques avec d\'autres managers'
      ];
    } else if (percentage >= 60) {
      riskLevel = 'Modéré';
      riskColor = 'text-yellow-600';
      recommendations = [
        'Amélioration de l\'organisation du travail',
        'Sessions de team building recommandées',
        'Mise en place d\'outils de bien-être'
      ];
    } else if (percentage >= 40) {
      riskLevel = 'Élevé';
      riskColor = 'text-orange-600';
      recommendations = [
        'Plan d\'action QVT prioritaire',
        'Formation sur la gestion du stress d\'équipe',
        'Consultation avec un psychologue du travail'
      ];
    } else {
      riskLevel = 'Critique';
      riskColor = 'text-red-600';
      recommendations = [
        'Intervention immédiate requise',
        'Audit complet de l\'organisation',
        'Accompagnement RH spécialisé urgent'
      ];
    }

    setResults({
      score: percentage,
      maxScore: 100,
      riskLevel,
      riskColor,
      recommendations
    });

    toast({
      title: "Évaluation terminée",
      description: "Voici vos résultats d'analyse managériale"
    });
  };

  if (results) {
    return (
      <SimulatorResults
        title="Évaluation Manager Terminée"
        score={results.score}
        maxScore={results.maxScore}
        riskLevel={results.riskLevel}
        riskColor={results.riskColor}
        recommendations={results.recommendations}
        backgroundColor="from-teal-50 via-cyan-50 to-blue-50"
        accentColor="teal"
        icon={<Users className="w-12 h-12 text-white" />}
        ctaButtons={[
          { label: "Autres simulateurs", link: "/simulator-home" },
          { label: "QVT Box Entreprise", link: "/payment", variant: "outline" }
        ]}
      />
    );
  }

  return (
    <SimulatorBase
      title="Simulateur Manager"
      badge="Évaluation Management"
      description="Évaluez le bien-être et les risques psychosociaux de votre équipe"
      questions={enterpriseManagerQuestions}
      currentStep={currentStep}
      onAnswer={handleAnswer}
      onBack={() => window.history.back()}
      backgroundColor="from-teal-50 via-cyan-50 to-blue-50"
      accentColor="teal"
      icon={<Building2 className="w-8 h-8 text-white" />}
    />
  );
};

export default EnterpriseManagerSimulator;
