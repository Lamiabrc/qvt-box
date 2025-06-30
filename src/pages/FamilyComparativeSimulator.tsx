
import React, { useState } from 'react';
import { Users } from "lucide-react";
import ComparativeSimulatorBase from '../components/simulators/ComparativeSimulatorBase';
import ComparativeResults from '../components/simulators/ComparativeResults';

const familyComparativeQuestions = [
  {
    id: 'communication',
    title: 'Communication familiale',
    question: 'Comment évaluez-vous la qualité de votre communication familiale ?',
    options: [
      { value: 1, label: 'Très difficile - Nous ne nous comprenons pas', color: 'bg-red-500' },
      { value: 2, label: 'Compliquée - Souvent des malentendus', color: 'bg-orange-500' },
      { value: 3, label: 'Correcte - Ça va plutôt bien', color: 'bg-yellow-500' },
      { value: 4, label: 'Excellente - Nous nous comprenons bien', color: 'bg-green-500' }
    ]
  },
  {
    id: 'trust',
    title: 'Confiance mutuelle',
    question: 'Comment évaluez-vous le niveau de confiance dans votre relation ?',
    options: [
      { value: 1, label: 'Très faible - Beaucoup de méfiance', color: 'bg-red-500' },
      { value: 2, label: 'Limitée - Quelques doutes', color: 'bg-orange-500' },
      { value: 3, label: 'Bonne - Généralement confiant', color: 'bg-yellow-500' },
      { value: 4, label: 'Totale - Confiance absolue', color: 'bg-green-500' }
    ]
  },
  {
    id: 'stress_level',
    title: 'Niveau de stress familial',
    question: 'Comment percevez-vous le niveau de stress dans votre famille ?',
    options: [
      { value: 1, label: 'Très élevé - Ambiance tendue', color: 'bg-red-500' },
      { value: 2, label: 'Élevé - Souvent stressant', color: 'bg-orange-500' },
      { value: 3, label: 'Modéré - Gérable', color: 'bg-yellow-500' },
      { value: 4, label: 'Faible - Atmosphère détendue', color: 'bg-green-500' }
    ]
  },
  {
    id: 'support',
    title: 'Soutien mutuel',
    question: 'Dans quelle mesure vous soutenez-vous mutuellement ?',
    options: [
      { value: 1, label: 'Très peu - Chacun pour soi', color: 'bg-red-500' },
      { value: 2, label: 'Occasionnellement - Selon l\'humeur', color: 'bg-orange-500' },
      { value: 3, label: 'Régulièrement - Bon soutien', color: 'bg-yellow-500' },
      { value: 4, label: 'Toujours - Soutien inconditionnel', color: 'bg-green-500' }
    ]
  },
  {
    id: 'understanding',
    title: 'Compréhension mutuelle',
    question: 'À quel point vous comprenez-vous l\'un l\'autre ?',
    options: [
      { value: 1, label: 'Très mal - Mondes différents', color: 'bg-red-500' },
      { value: 2, label: 'Difficilement - Efforts nécessaires', color: 'bg-orange-500' },
      { value: 3, label: 'Bien - Bonne compréhension', color: 'bg-yellow-500' },
      { value: 4, label: 'Parfaitement - Sur la même longueur d\'onde', color: 'bg-green-500' }
    ]
  }
];

const FamilyComparativeSimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPhase, setCurrentPhase] = useState<'self' | 'other' | 'results'>('self');
  const [selfAnswers, setSelfAnswers] = useState<Record<string, number>>({});
  const [otherAnswers, setOtherAnswers] = useState<Record<string, number>>({});
  const [participantType, setParticipantType] = useState<'Parent' | 'Enfant' | null>(null);

  // Phase de sélection du type de participant
  if (!participantType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-purple-800 mb-8">
            Simulateur Familial Comparatif
          </h1>
          <p className="text-xl text-purple-600 mb-12">
            Analysons les perceptions croisées dans votre famille
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <button
              onClick={() => setParticipantType('Parent')}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-200 hover:border-purple-400"
            >
              <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-800 mb-2">Je suis un Parent</h3>
              <p className="text-gray-600">Analyser ma relation avec mon enfant</p>
            </button>
            
            <button
              onClick={() => setParticipantType('Enfant')}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-pink-200 hover:border-pink-400"
            >
              <Users className="w-16 h-16 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pink-800 mb-2">Je suis un Enfant/Ado</h3>
              <p className="text-gray-600">Analyser ma relation avec mes parents</p>
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

    if (currentStep < familyComparativeQuestions.length - 1) {
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
      setCurrentStep(familyComparativeQuestions.length - 1);
    }
  };

  if (currentPhase === 'results') {
    return (
      <ComparativeResults
        title="Résultats de l'Analyse Familiale"
        selfAnswers={selfAnswers}
        otherAnswers={otherAnswers}
        questions={familyComparativeQuestions}
        maxScore={familyComparativeQuestions.length * 4}
        participantType={participantType}
        otherParticipantType={participantType === 'Parent' ? 'Enfant' : 'Parent'}
        backgroundColor="from-purple-50 via-pink-50 to-blue-50"
        accentColor="purple"
        icon={<Users className="w-8 h-8 text-white" />}
      />
    );
  }

  const getPhaseDescription = () => {
    if (currentPhase === 'self') {
      return `Évaluez votre relation familiale selon votre perspective de ${participantType.toLowerCase()}`;
    } else {
      const otherType = participantType === 'Parent' ? 'enfant' : 'parent';
      return `Maintenant, imaginez comment votre ${otherType} répondrait aux mêmes questions`;
    }
  };

  return (
    <ComparativeSimulatorBase
      title="Simulateur Familial Comparatif"
      badge="Famille - Perceptions Croisées"
      description={getPhaseDescription()}
      questions={familyComparativeQuestions}
      currentStep={currentStep}
      onAnswer={handleAnswer}
      onBack={handleBack}
      backgroundColor="from-purple-50 via-pink-50 to-blue-50"
      accentColor="purple"
      icon={<Users className="w-8 h-8 text-white" />}
      currentPerspective={currentPhase}
      participantType={participantType}
      otherParticipantType={participantType === 'Parent' ? 'Enfant' : 'Parent'}
    />
  );
};

export default FamilyComparativeSimulator;
