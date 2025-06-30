
import React, { useState } from 'react';
import { Smile, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SimulatorBase from '../components/simulators/SimulatorBase';
import SimulatorResults from '../components/simulators/SimulatorResults';
import { familyTeenQuestions } from '../data/simulatorQuestions';

const FamilyTeenSimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const handleAnswer = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < familyTeenQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: { [key: string]: number }) => {
    const totalScore = Object.values(finalAnswers).reduce((sum, value) => sum + value, 0);
    const maxScore = familyTeenQuestions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    let riskLevel = '';
    let riskColor = '';
    let recommendations: string[] = [];
    let recommendedBoxes: any[] = [];

    if (percentage >= 80) {
      riskLevel = 'Super !';
      riskColor = 'text-green-600';
      recommendations = [
        'Tu as l\'air d\'aller vraiment bien !',
        'Continue comme ça, tu gères !',
        'Peut-être que tu peux aider d\'autres ados ?'
      ];
      recommendedBoxes = [
        {
          name: 'Teen Box Excellence',
          description: 'Pour maintenir ton épanouissement',
          price: '29€/mois',
          features: ['Activités créatives', 'Défis positifs', 'Communauté ados']
        }
      ];
    } else if (percentage >= 60) {
      riskLevel = 'Ça va';
      riskColor = 'text-yellow-600';
      recommendations = [
        'Il y a quelques trucs à améliorer',
        'Parle avec tes parents ou un adulte de confiance',
        'QVTeen Box pourrait t\'aider'
      ];
      recommendedBoxes = [
        {
          name: 'Teen Box Équilibre',
          description: 'Retrouver l\'harmonie au quotidien',
          price: '34€/mois',
          features: ['Journal créatif', 'Techniques relaxation', 'Planning équilibré']
        }
      ];
    } else if (percentage >= 40) {
      riskLevel = 'Difficile';
      riskColor = 'text-orange-600';
      recommendations = [
        'Tu traverses une période compliquée',
        'QVTeen Box est vraiment recommandée pour toi',
        'N\'hésite pas à demander de l\'aide'
      ];
      recommendedBoxes = [
        {
          name: 'Teen Box Soutien',
          description: 'Outils pour traverser les difficultés',
          price: '39€/mois',
          features: ['Kit gestion émotions', 'Cartes motivation', 'Guide bien-être']
        }
      ];
    } else {
      riskLevel = 'Urgent';
      riskColor = 'text-red-600';
      recommendations = [
        'Tu ne dois pas rester seul(e) avec ça',
        'Parle immédiatement à un adulte de confiance',
        'QVTeen Box avec accompagnement prioritaire'
      ];
      recommendedBoxes = [
        {
          name: 'Teen Box Urgence',
          description: 'Support immédiat et accompagnement',
          price: '44€/mois',
          features: ['Kit d\'urgence émotionnel', 'Ligne d\'écoute', 'Accompagnement perso']
        }
      ];
    }

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
      description: "Voici ton bilan bien-être ado"
    });
  };

  if (results) {
    return (
      <SimulatorResults
        title="Ton Bilan Bien-être"
        score={results.score}
        maxScore={results.maxScore}
        riskLevel={results.riskLevel}
        riskColor={results.riskColor}
        recommendations={results.recommendations}
        recommendedBoxes={results.recommendedBoxes}
        backgroundColor="from-pink-50 via-purple-50 to-indigo-50"
        accentColor="pink"
        icon={<Smile className="w-12 h-12 text-white" />}
        ctaButtons={[
          { label: "Mon espace ado", link: "/teens-home", variant: "outline" }
        ]}
      />
    );
  }

  return (
    <SimulatorBase
      title="Simulateur Ado"
      badge="Check-up Bien-être"
      description="Évalue ton bien-être et découvre comment aller mieux"
      questions={familyTeenQuestions}
      currentStep={currentStep}
      onAnswer={handleAnswer}
      onBack={() => window.history.back()}
      backgroundColor="from-pink-50 via-purple-50 to-indigo-50"
      accentColor="pink"
      icon={<Heart className="w-8 h-8 text-white" />}
    />
  );
};

export default FamilyTeenSimulator;
