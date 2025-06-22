
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Zap, Users, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WellbeingEvaluatorProps {
  universe: 'enterprise' | 'family';
}

const WellbeingEvaluator = ({ universe }: WellbeingEvaluatorProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [aiScore, setAiScore] = useState<number | null>(null);
  const { toast } = useToast();

  const enterpriseQuestions = [
    {
      id: 1,
      question: "Comment évaluez-vous votre niveau de stress au travail aujourd'hui ?",
      category: "Stress",
      icon: Brain
    },
    {
      id: 2,
      question: "À quel point vous sentez-vous surchargé(e) mentalement ?",
      category: "Charge mentale",
      icon: Zap
    },
    {
      id: 3,
      question: "Votre niveau d'engagement dans votre travail actuel ?",
      category: "Engagement",
      icon: Heart
    },
    {
      id: 4,
      question: "Comment évaluez-vous vos relations avec vos collègues ?",
      category: "Lien social",
      icon: Users
    }
  ];

  const familyQuestions = [
    {
      id: 1,
      question: "Comment évaluez-vous la charge mentale parentale actuellement ?",
      category: "Charge parentale",
      icon: Brain
    },
    {
      id: 2,
      question: "À quel point votre ado semble-t-il/elle isolé(e) ?",
      category: "Isolement ado",
      icon: Heart
    },
    {
      id: 3,
      question: "Niveau de dépendance numérique perçu chez votre enfant ?",
      category: "Digital",
      icon: Zap
    },
    {
      id: 4,
      question: "Qualité du dialogue familial ces dernières semaines ?",
      category: "Communication",
      icon: Users
    }
  ];

  const questions = universe === 'enterprise' ? enterpriseQuestions : familyQuestions;
  const currentQ = questions[currentQuestion];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate AI score
      const totalScore = newAnswers.reduce((sum, ans) => sum + ans, 0);
      const maxScore = questions.length * 5;
      const calculatedScore = Math.round((totalScore / maxScore) * 15);
      
      setAiScore(calculatedScore);
      setIsCompleted(true);
      
      toast({
        title: "Évaluation terminée !",
        description: "Votre analyse IA est prête"
      });
    }
  };

  const getScoreColor = (score: number) => {
    if (score <= 5) return "text-red-600 bg-red-100";
    if (score <= 10) return "text-orange-600 bg-orange-100";
    return "text-green-600 bg-green-100";
  };

  const getRecommendations = (score: number) => {
    if (universe === 'enterprise') {
      if (score <= 5) return [
        "Box Burn-out recommandée",
        "Séances de micro-pauses actives",
        "Accompagnement manager conseillé"
      ];
      if (score <= 10) return [
        "Box Équilibre Vie Privée",
        "Défis collectifs d'équipe",
        "Régulation émotionnelle"
      ];
      return [
        "Box Cohésion d'équipe",
        "Maintien des bonnes pratiques",
        "Partage d'expériences positives"
      ];
    } else {
      if (score <= 5) return [
        "Teen Box Digital Detox urgente",
        "Family Box Reconnexion",
        "Activités apaisantes quotidiennes"
      ];
      if (score <= 10) return [
        "Family Box Dialogue",
        "Défis parent-ado hebdomadaires",
        "Moments de gratitude partagés"
      ];
      return [
        "Teen Box Créativité",
        "Renforcement positif famille",
        "Jeux coopératifs réguliers"
      ];
    }
  };

  if (isCompleted && aiScore !== null) {
    return (
      <div className="space-y-6">
        <Card className="border-2 border-teal-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-teal-800 flex items-center justify-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Analyse IA Terminée
            </CardTitle>
            <CardDescription className="text-teal-600">
              Votre météo intérieure analysée en 2 minutes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Score QVT */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className={`text-6xl font-bold px-6 py-4 rounded-2xl ${getScoreColor(aiScore)}`}>
                  {aiScore}/15
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Score QVT Box
              </h3>
              <div className="flex justify-center">
                <Badge variant="outline" className="text-sm">
                  IA Émotionnelle Prédictive
                </Badge>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6">
              <h4 className="font-semibold text-teal-800 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Recommandations Personnalisées
              </h4>
              <div className="space-y-2">
                {getRecommendations(aiScore).map((rec, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700">{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="grid md:grid-cols-2 gap-4">
              {questions.map((q, index) => (
                <div key={q.id} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <q.icon className="w-4 h-4 text-teal-600" />
                    <Badge variant="secondary" className="text-xs">
                      {q.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={(answers[index] / 5) * 100} className="flex-1" />
                    <span className="text-sm font-medium">{answers[index]}/5</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setIsCompleted(false);
                  setAiScore(null);
                }}
                variant="outline"
                className="flex-1"
              >
                Refaire l'évaluation
              </Button>
              <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                Voir mes Box personnalisées
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-teal-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-teal-800">
                Évaluation Bien-être Express
              </CardTitle>
              <CardDescription className="text-teal-600">
                2 minutes pour analyser votre état émotionnel
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-600" />
              <Badge variant="outline">2 min</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} sur {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <Progress value={((currentQuestion + 1) / questions.length) * 100} />
          </div>

          {/* Current Question */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <currentQ.icon className="w-5 h-5 text-teal-600" />
              </div>
              <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                {currentQ.category}
              </Badge>
            </div>
            
            <h3 className="text-lg font-medium text-gray-800 mb-6">
              {currentQ.question}
            </h3>

            {/* Answer Options */}
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((score) => (
                <Button
                  key={score}
                  onClick={() => handleAnswer(score)}
                  variant="outline"
                  className="h-12 flex flex-col items-center justify-center hover:bg-teal-50 hover:border-teal-300"
                >
                  <span className="font-bold text-lg">{score}</span>
                  <span className="text-xs text-gray-500">
                    {score === 1 ? 'Très faible' : 
                     score === 2 ? 'Faible' :
                     score === 3 ?'Moyen' :
                     score === 4 ? 'Élevé' : 'Très élevé'}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Scale Legend */}
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 text-center">
              <strong>Échelle :</strong> 1 = Très faible • 5 = Très élevé
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WellbeingEvaluator;
