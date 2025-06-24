
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Building2, Users, AlertTriangle, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const EnterpriseSimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const questions = [
    "Comment évaluez-vous le niveau de stress général dans votre équipe ?",
    "À quelle fréquence observez-vous des signes de burn-out ?",
    "Comment jugez-vous la charge de travail actuelle ?",
    "Comment évaluez-vous la communication interne ?",
    "Quel est le niveau de satisfaction au travail ?"
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculer les résultats
      const averageScore = newAnswers.reduce((a, b) => a + b, 0) / newAnswers.length;
      const riskLevel = averageScore <= 2 ? 'Élevé' : averageScore <= 3.5 ? 'Modéré' : 'Faible';
      
      setResults({
        score: Math.round(averageScore * 20),
        riskLevel,
        recommendations: getRiskRecommendations(riskLevel)
      });

      toast({
        title: "Évaluation terminée",
        description: "Voici vos résultats personnalisés"
      });
    }
  };

  const getRiskRecommendations = (level: string) => {
    switch (level) {
      case 'Élevé':
        return [
          "Formation immédiate sur la gestion du stress",
          "Mise en place d'un plan QVT d'urgence",
          "Consultation avec un psychologue du travail"
        ];
      case 'Modéré':
        return [
          "Amélioration de l'organisation du travail",
          "Sessions de team building",
          "Mise en place d'outils de bien-être"
        ];
      default:
        return [
          "Maintenir les bonnes pratiques actuelles",
          "Prévoir des actions préventives",
          "Continuer le monitoring régulier"
        ];
    }
  };

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-teal-100 text-teal-800">Résultats</Badge>
            <h1 className="text-4xl font-bold text-teal-800 mb-4">
              Évaluation Entreprise Terminée
            </h1>
          </div>

          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-teal-800">Score: {results.score}/100</CardTitle>
              <CardDescription className="text-xl">
                Niveau de risque: <span className={`font-bold ${
                  results.riskLevel === 'Élevé' ? 'text-red-600' : 
                  results.riskLevel === 'Modéré' ? 'text-orange-600' : 'text-green-600'
                }`}>{results.riskLevel}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Recommandations:</h3>
                {results.recommendations.map((rec: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link to="/simulator-home">
              <Button className="mr-4 bg-teal-600 hover:bg-teal-700">
                Autres simulateurs
              </Button>
            </Link>
            <Link to="/payment">
              <Button variant="outline">
                Souscrire QVT Box Entreprise
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-teal-100 text-teal-800">Évaluation Entreprise</Badge>
          <h1 className="text-4xl font-bold text-teal-800 mb-4">
            Simulateur QVT Entreprise
          </h1>
          <p className="text-xl text-teal-600">
            Question {currentStep + 1} sur {questions.length}
          </p>
          <Progress value={progress} className="mt-4 max-w-md mx-auto" />
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              {questions[currentStep]}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {[1, 2, 3, 4, 5].map((score) => (
                <Button
                  key={score}
                  variant="outline"
                  onClick={() => handleAnswer(score)}
                  className="text-left justify-start hover:bg-teal-50"
                >
                  {score} - {score === 1 ? 'Très mauvais' : score === 2 ? 'Mauvais' : score === 3 ? 'Moyen' : score === 4 ? 'Bon' : 'Excellent'}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Link to="/simulator-home">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux simulateurs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSimulator;
