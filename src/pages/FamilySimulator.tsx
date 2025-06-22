
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Brain,
  Smartphone,
  Home,
  MessageCircle,
  Clock,
  ArrowRight
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";

const FamilySimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});

  const questions = [
    {
      id: 'stress_parental',
      title: 'Charge mentale parentale',
      question: 'Comment évaluez-vous votre niveau de stress en tant que parent ?',
      options: [
        { value: 1, label: 'Très faible', color: 'bg-green-500' },
        { value: 3, label: 'Modéré', color: 'bg-yellow-500' },
        { value: 5, label: 'Élevé', color: 'bg-orange-500' },
        { value: 7, label: 'Très élevé', color: 'bg-red-500' }
      ]
    },
    {
      id: 'communication_ado',
      title: 'Communication avec votre ado',
      question: 'À quelle fréquence avez-vous des conversations profondes avec votre adolescent ?',
      options: [
        { value: 7, label: 'Quotidiennement', color: 'bg-green-500' },
        { value: 5, label: 'Hebdomadairement', color: 'bg-yellow-500' },
        { value: 3, label: 'Rarement', color: 'bg-orange-500' },
        { value: 1, label: 'Jamais', color: 'bg-red-500' }
      ]
    },
    {
      id: 'temps_ecran',
      title: 'Gestion du temps d\'écran',
      question: 'Votre ado passe combien de temps sur les écrans par jour ?',
      options: [
        { value: 7, label: 'Moins de 2h', color: 'bg-green-500' },
        { value: 5, label: '2-4h', color: 'bg-yellow-500' },
        { value: 3, label: '4-6h', color: 'bg-orange-500' },
        { value: 1, label: 'Plus de 6h', color: 'bg-red-500' }
      ]
    },
    {
      id: 'climat_familial',
      title: 'Climat familial',
      question: 'Comment décririez-vous l\'ambiance générale à la maison ?',
      options: [
        { value: 7, label: 'Harmonieuse', color: 'bg-green-500' },
        { value: 5, label: 'Généralement calme', color: 'bg-yellow-500' },
        { value: 3, label: 'Souvent tendue', color: 'bg-orange-500' },
        { value: 1, label: 'Conflictuelle', color: 'bg-red-500' }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const calculateScore = () => {
    const total = Object.values(answers).reduce((sum, value) => sum + value, 0);
    return Math.round((total / (questions.length * 7)) * 10);
  };

  const getRecommendations = (score: number) => {
    if (score >= 8) {
      return {
        level: 'Excellent',
        color: 'text-green-600',
        bgColor: 'bg-green-50 border-green-200',
        recommendations: [
          'Maintenez vos bonnes habitudes familiales',
          'Partagez votre expérience avec d\'autres familles',
          'Continuez à renforcer les liens positifs'
        ]
      };
    } else if (score >= 6) {
      return {
        level: 'Bon',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50 border-yellow-200',
        recommendations: [
          'Instaurez des moments de qualité quotidiens',
          'Explorez les activités de reconnexion',
          'Considérez un accompagnement préventif'
        ]
      };
    } else if (score >= 4) {
      return {
        level: 'À améliorer',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50 border-orange-200',
        recommendations: [
          'QVTeen Box recommandée pour votre famille',
          'Établissez des règles d\'écran ensemble',
          'Planifiez des activités famille régulières'
        ]
      };
    } else {
      return {
        level: 'Priorité',
        color: 'text-red-600',
        bgColor: 'bg-red-50 border-red-200',
        recommendations: [
          'Accompagnement QVTeen Box fortement conseillé',
          'Consultez un professionnel si nécessaire',
          'Commencez par de petits changements positifs'
        ]
      };
    }
  };

  const isComplete = Object.keys(answers).length === questions.length;
  const score = isComplete ? calculateScore() : 0;
  const results = isComplete ? getRecommendations(score) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Simulateur Famille</Badge>
            <h1 className="text-4xl font-bold text-purple-800 mb-6">
              Diagnostic Familial Express
            </h1>
            <p className="text-lg text-purple-600 mb-8">
              Évaluez en 2 minutes l'équilibre de votre famille et recevez des recommandations personnalisées
            </p>
            
            {/* Progress */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm text-purple-600 mb-2">
                <span>Question {currentStep + 1} sur {questions.length}</span>
                <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
              </div>
              <Progress value={((currentStep + 1) / questions.length) * 100} className="h-2" />
            </div>
          </div>

          {!isComplete ? (
            /* Question Card */
            <Card className="max-w-2xl mx-auto border-purple-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {currentStep === 0 && <Brain className="w-8 h-8 text-white" />}
                  {currentStep === 1 && <MessageCircle className="w-8 h-8 text-white" />}
                  {currentStep === 2 && <Smartphone className="w-8 h-8 text-white" />}
                  {currentStep === 3 && <Home className="w-8 h-8 text-white" />}
                </div>
                <CardTitle className="text-2xl text-purple-800">
                  {questions[currentStep].title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {questions[currentStep].question}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {questions[currentStep].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full h-auto p-4 border-purple-200 hover:border-purple-400 hover:bg-purple-50"
                    onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${option.color}`}></div>
                      <span className="text-left">{option.label}</span>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          ) : (
            /* Results */
            <div className="space-y-8">
              {/* Score Display */}
              <Card className="max-w-2xl mx-auto text-center border-purple-200">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-purple-800">
                    Score Familial: {score}/10
                  </CardTitle>
                  <CardDescription className={`text-xl font-semibold ${results?.color}`}>
                    Niveau: {results?.level}
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Recommendations */}
              <Card className={`max-w-2xl mx-auto ${results?.bgColor} border`}>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">
                    Recommandations Personnalisées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {results?.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="text-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Découvrir QVTeen Box Famille
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FamilySimulator;
