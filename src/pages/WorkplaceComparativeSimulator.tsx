
import React, { useState } from 'react';
import { Users, Briefcase } from "lucide-react";
import ComparativeSimulatorBase from '../components/simulators/ComparativeSimulatorBase';
import ComparativeResults from '../components/simulators/ComparativeResults';

const workplaceComparativeQuestions = [
  {
    id: 'workload',
    title: 'Charge de travail',
    question: 'Comment évaluez-vous votre charge de travail actuelle ?',
    perspective: 'both' as const,
    options: [
      { value: 1, label: 'Excessive - Intenable', color: 'bg-red-500' },
      { value: 2, label: 'Lourde - Difficile à gérer', color: 'bg-orange-500' },
      { value: 3, label: 'Équilibrée - Gérable', color: 'bg-yellow-500' },
      { value: 4, label: 'Optimale - Parfaitement adaptée', color: 'bg-green-500' }
    ]
  },
  {
    id: 'communication',
    title: 'Communication professionnelle',
    question: 'Comment évaluez-vous la qualité de la communication dans votre relation de travail ?',
    perspective: 'both' as const,
    options: [
      { value: 1, label: 'Très mauvaise - Incompréhensions fréquentes', color: 'bg-red-500' },
      { value: 2, label: 'À améliorer - Quelques difficultés', color: 'bg-orange-500' },
      { value: 3, label: 'Correcte - Généralement claire', color: 'bg-yellow-500' },
      { value: 4, label: 'Excellente - Communication fluide', color: 'bg-green-500' }
    ]
  },
  {
    id: 'recognition',
    title: 'Reconnaissance du travail',
    question: 'Dans quelle mesure votre travail est-il reconnu et valorisé ?',
    perspective: 'both' as const,
    options: [
      { value: 1, label: 'Pas du tout - Efforts ignorés', color: 'bg-red-500' },
      { value: 2, label: 'Rarement - Reconnaissance insuffisante', color: 'bg-orange-500' },
      { value: 3, label: 'Régulièrement - Bonne reconnaissance', color: 'bg-yellow-500' },
      { value: 4, label: 'Toujours - Pleinement valorisé', color: 'bg-green-500' }
    ]
  },
  {
    id: 'autonomy',
    title: 'Autonomie professionnelle',
    question: 'Quel niveau d\'autonomie avez-vous dans votre travail ?',
    perspective: 'both' as const,
    options: [
      { value: 1, label: 'Très faible - Tout est contrôlé', color: 'bg-red-500' },
      { value: 2, label: 'Limitée - Peu de marge de manœuvre', color: 'bg-orange-500' },
      { value: 3, label: 'Correcte - Autonomie satisfaisante', color: 'bg-yellow-500' },
      { value: 4, label: 'Totale - Pleine liberté d\'action', color: 'bg-green-500' }
    ]
  },
  {
    id: 'support',
    title: 'Soutien professionnel',
    question: 'À quel point vous sentez-vous soutenu dans vos missions ?',
    perspective: 'both' as const,
    options: [
      { value: 1, label: 'Pas du tout - Laissé seul', color: 'bg-red-500' },
      { value: 2, label: 'Peu - Aide insuffisante', color: 'bg-orange-500' },
      { value: 3, label: 'Bien - Soutien adéquat', color: 'bg-yellow-500' },
      { value: 4, label: 'Parfaitement - Soutien constant', color: 'bg-green-500' }
    ]
  }
];

const WorkplaceComparativeSimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPhase, setCurrentPhase] = useState<'self' | 'other' | 'results'>('self');
  const [selfAnswers, setSelfAnswers] = useState<Record<string, number>>({});
  const [otherAnswers, setOtherAnswers] = useState<Record<string, number>>({});
  const [participantType, setParticipantType] = useState<'Manager' | 'Employé' | null>(null);

  // Phase de sélection du type de participant
  if (!participantType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">
            Simulateur Professionnel Comparatif
          </h1>
          <p className="text-xl text-blue-600 mb-12">
            Analysons les perceptions croisées dans votre relation professionnelle
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <button
              onClick={() => setParticipantType('Manager')}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-200 hover:border-blue-400"
            >
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-800 mb-2">Je suis un Manager</h3>
              <p className="text-gray-600">Analyser ma relation avec mon équipe</p>
            </button>
            
            <button
              onClick={() => setParticipantType('Employé')}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-indigo-200 hover:border-indigo-400"
            >
              <Briefcase className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-indigo-800 mb-2">Je suis un Employé</h3>
              <p className="text-gray-600">Analyser ma relation avec mon manager</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleAnswer = (questionId: string, value: number) => {
    if (currentPhase === 'self') {
      setSelfAnswers(prev => ({ ...prev, [questionId]: value }));
    } else {
      setOtherAnswers(prev => ({ ...prev, [questionId]: value }));
    }

    if (currentStep < workplaceComparativeQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      if (currentPhase === 'self') {
        setCurrentPhase('other');
        setCurrentStep(0);
      } else {
        setCurrentPhase('results');
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (currentPhase === 'other') {
      setCurrentPhase('self');
      setCurrentStep(workplaceComparativeQuestions.length - 1);
    }
  };

  if (currentPhase === 'results') {
    return (
      <ComparativeResults
        title="Résultats de l'Analyse Professionnelle"
        selfAnswers={selfAnswers}
        otherAnswers={otherAnswers}
        questions={workplaceComparativeQuestions}
        maxScore={workplaceComparativeQuestions.length * 4}
        participantType={participantType}
        otherParticipantType={participantType === 'Manager' ? 'Employé' : 'Manager'}
        backgroundColor="from-blue-50 via-indigo-50 to-purple-50"
        accentColor="blue"
        icon={<Briefcase className="w-8 h-8 text-white" />}
      />
    );
  }

  const getPhaseDescription = () => {
    if (currentPhase === 'self') {
      return `Évaluez votre situation professionnelle selon votre perspective de ${participantType.toLowerCase()}`;
    } else {
      const otherType = participantType === 'Manager' ? 'employé' : 'manager';
      return `Maintenant, imaginez comment votre ${otherType} répondrait aux mêmes questions`;
    }
  };

  return (
    <ComparativeSimulatorBase
      title="Simulateur Professionnel Comparatif"
      badge="Entreprise - Perceptions Croisées"
      description={getPhaseDescription()}
      questions={workplaceComparativeQuestions}
      currentStep={currentStep}
      onAnswer={handleAnswer}
      onBack={handleBack}
      backgroundColor="from-blue-50 via-indigo-50 to-purple-50"
      accentColor="blue"
      icon={<Briefcase className="w-8 h-8 text-white" />}
      currentPerspective={currentPhase}
      participantType={participantType}
      otherParticipantType={participantType === 'Manager' ? 'Employé' : 'Manager'}
    />
  );
};

export default WorkplaceComparativeSimulator;
