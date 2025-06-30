
import React, { useState } from 'react';
import { Building2, Users, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SimulatorBase from '../components/simulators/SimulatorBase';
import SimulatorResults from '../components/simulators/SimulatorResults';

const FamilyEnterpriseSimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const questions = [
    {
      id: 'stress_equilibre',
      title: 'Équilibre vie pro/perso',
      question: 'Comment évaluez-vous votre équilibre entre vie professionnelle et familiale ?',
      options: [
        { value: 4, label: 'Excellent équilibre', color: 'bg-green-500' },
        { value: 3, label: 'Bon équilibre', color: 'bg-yellow-500' },
        { value: 2, label: 'Difficile à gérer', color: 'bg-orange-500' },
        { value: 1, label: 'Très déséquilibré', color: 'bg-red-500' }
      ]
    },
    {
      id: 'communication_famille_travail',
      title: 'Communication famille-travail',
      question: 'Votre famille comprend-elle vos contraintes professionnelles ?',
      options: [
        { value: 4, label: 'Totalement', color: 'bg-green-500' },
        { value: 3, label: 'Plutôt bien', color: 'bg-yellow-500' },
        { value: 2, label: 'Difficultés parfois', color: 'bg-orange-500' },
        { value: 1, label: 'Incompréhension', color: 'bg-red-500' }
      ]
    },
    {
      id: 'stress_professionnel_impact',
      title: 'Impact du stress professionnel',
      question: 'Votre stress au travail affecte-t-il votre vie de famille ?',
      options: [
        { value: 4, label: 'Jamais', color: 'bg-green-500' },
        { value: 3, label: 'Rarement', color: 'bg-yellow-500' },
        { value: 2, label: 'Souvent', color: 'bg-orange-500' },
        { value: 1, label: 'Toujours', color: 'bg-red-500' }
      ]
    },
    {
      id: 'gestion_temps',
      title: 'Gestion du temps',
      question: 'Arrivez-vous à dégager du temps de qualité pour votre famille ?',
      options: [
        { value: 4, label: 'Facilement', color: 'bg-green-500' },
        { value: 3, label: 'Avec effort', color: 'bg-yellow-500' },
        { value: 2, label: 'Difficilement', color: 'bg-orange-500' },
        { value: 1, label: 'Impossible', color: 'bg-red-500' }
      ]
    },
    {
      id: 'soutien_entreprise',
      title: 'Soutien de l\'entreprise',
      question: 'Votre entreprise facilite-t-elle l\'équilibre vie privée/professionnelle ?',
      options: [
        { value: 4, label: 'Excellente culture QVT', color: 'bg-green-500' },
        { value: 3, label: 'Plutôt favorable', color: 'bg-yellow-500' },
        { value: 2, label: 'Peu de soutien', color: 'bg-orange-500' },
        { value: 1, label: 'Aucun soutien', color: 'bg-red-500' }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: { [key: string]: number }) => {
    const totalScore = Object.values(finalAnswers).reduce((sum, value) => sum + value, 0);
    const maxScore = questions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    let riskLevel = '';
    let riskColor = '';
    let recommendations: string[] = [];
    let recommendedBoxes: any[] = [];

    if (percentage >= 80) {
      riskLevel = 'Excellent';
      riskColor = 'text-green-600';
      recommendations = [
        'Vous maîtrisez parfaitement l\'équilibre',
        'Continuez vos bonnes pratiques',
        'Partagez votre expérience avec d\'autres familles'
      ];
      recommendedBoxes = [
        {
          name: 'Box Excellence Famille-Pro',
          description: 'Maintenir votre équilibre optimal',
          price: '49€/mois',
          features: ['Activités famille premium', 'Coaching équilibre', 'Réseau d\'excellence']
        }
      ];
    } else if (percentage >= 60) {
      riskLevel = 'Bon équilibre';
      riskColor = 'text-yellow-600';
      recommendations = [
        'Quelques ajustements peuvent optimiser votre situation',
        'Renforcez la communication famille-travail',
        'Explorez les outils de gestion du temps'
      ];
      recommendedBoxes = [
        {
          name: 'Box Équilibre Famille-Pro',
          description: 'Optimiser votre organisation',
          price: '39€/mois',
          features: ['Planning familial', 'Outils communication', 'Activités décompression']
        }
      ];
    } else if (percentage >= 40) {
      riskLevel = 'Déséquilibre';
      riskColor = 'text-orange-600';
      recommendations = [
        'Mise en place urgente de nouvelles habitudes',
        'QVTeen Box Famille-Pro fortement recommandée',
        'Discussion avec votre employeur sur la QVT'
      ];
      recommendedBoxes = [
        {
          name: 'Box Reconstruction Famille-Pro',
          description: 'Retrouver l\'équilibre perdu',
          price: '44€/mois',
          features: ['Guide restructuration', 'Coaching intensif', 'Outils anti-stress']
        }
      ];
    } else {
      riskLevel = 'Situation critique';
      riskColor = 'text-red-600';
      recommendations = [
        'Intervention immédiate nécessaire',
        'Consultez un professionnel de l\'accompagnement',
        'QVTeen Box Famille-Pro avec suivi prioritaire'
      ];
      recommendedBoxes = [
        {
          name: 'Box Urgence Famille-Pro',
          description: 'Intervention et accompagnement immédiat',
          price: '54€/mois',
          features: ['Accompagnement personnalisé', 'Ligne d\'urgence 24/7', 'Plan de reconstruction']
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
      description: "Voici votre bilan équilibre famille-entreprise"
    });
  };

  if (results) {
    return (
      <SimulatorResults
        title="Bilan Équilibre Famille-Entreprise"
        score={results.score}
        maxScore={results.maxScore}
        riskLevel={results.riskLevel}
        riskColor={results.riskColor}
        recommendations={results.recommendations}
        recommendedBoxes={results.recommendedBoxes}
        backgroundColor="from-teal-50 via-blue-50 to-purple-50"
        accentColor="teal"
        icon={<Building2 className="w-12 h-12 text-white" />}
        ctaButtons={[
          { label: "Solutions entreprise", link: "/enterprise-solutions" },
          { label: "Autres simulateurs", link: "/simulator-home", variant: "outline" }
        ]}
      />
    );
  }

  return (
    <SimulatorBase
      title="Simulateur Famille-Entreprise"
      badge="Équilibre Vie Pro/Perso"
      description="Évaluez l'équilibre entre votre vie professionnelle et familiale"
      questions={questions}
      currentStep={currentStep}
      onAnswer={handleAnswer}
      onBack={() => window.history.back()}
      backgroundColor="from-teal-50 via-blue-50 to-purple-50"
      accentColor="teal"
      icon={<Heart className="w-8 h-8 text-white" />}
    />
  );
};

export default FamilyEnterpriseSimulator;
