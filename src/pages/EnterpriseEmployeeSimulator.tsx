
import React, { useState } from 'react';
import { User, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SimulatorBase from '../components/simulators/SimulatorBase';
import SimulatorResults from '../components/simulators/SimulatorResults';
import { enterpriseEmployeeQuestions } from '../data/simulatorQuestions';

const EnterpriseEmployeeSimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const handleAnswer = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < enterpriseEmployeeQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: { [key: string]: number }) => {
    const totalScore = Object.values(finalAnswers).reduce((sum, value) => sum + value, 0);
    const maxScore = enterpriseEmployeeQuestions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    let riskLevel = '';
    let riskColor = '';
    let recommendations: string[] = [];

    if (percentage >= 80) {
      riskLevel = 'Excellent';
      riskColor = 'text-green-600';
      recommendations = [
        'Continuez sur cette lancée positive',
        'Partagez vos bonnes pratiques avec vos collègues',
        'Maintenez cet équilibre vie pro/perso'
      ];
    } else if (percentage >= 60) {
      riskLevel = 'Bon';
      riskColor = 'text-yellow-600';
      recommendations = [
        'Explorez les outils de bien-être disponibles',
        'Échangez avec votre manager sur vos besoins',
        'Considérez des activités de détente'
      ];
    } else if (percentage >= 40) {
      riskLevel = 'À surveiller';
      riskColor = 'text-orange-600';
      recommendations = [
        'QVT Box recommandée pour votre bien-être',
        'Parlez à votre manager de vos difficultés',
        'Consultez les ressources d\'aide disponibles'
      ];
    } else {
      riskLevel = 'Urgent';
      riskColor = 'text-red-600';
      recommendations = [
        'Contactez immédiatement les RH ou votre manager',
        'Consultez un professionnel si nécessaire',
        'QVT Box avec accompagnement prioritaire'
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
      description: "Voici votre bilan bien-être professionnel"
    });
  };

  if (results) {
    return (
      <SimulatorResults
        title="Votre Bilan Bien-être"
        score={results.score}
        maxScore={results.maxScore}
        riskLevel={results.riskLevel}
        riskColor={results.riskColor}
        recommendations={results.recommendations}
        backgroundColor="from-blue-50 via-indigo-50 to-purple-50"
        accentColor="blue"
        icon={<User className="w-12 h-12 text-white" />}
        ctaButtons={[
          { label: "Autres simulateurs", link: "/simulator-home" },
          { label: "Mon espace salarié", link: "/employee-dashboard", variant: "outline" }
        ]}
      />
    );
  }

  return (
    <SimulatorBase
      title="Simulateur Salarié"
      badge="Évaluation Personnelle"
      description="Évaluez votre bien-être et votre satisfaction au travail"
      questions={enterpriseEmployeeQuestions}
      currentStep={currentStep}
      onAnswer={handleAnswer}
      onBack={() => window.history.back()}
      backgroundColor="from-blue-50 via-indigo-50 to-purple-50"
      accentColor="blue"
      icon={<Briefcase className="w-8 h-8 text-white" />}
    />
  );
};

export default EnterpriseEmployeeSimulator;
