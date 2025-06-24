
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Zap, Users, Clock, CheckCircle, TrendingUp, AlertTriangle, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WellbeingEvaluatorProps {
  universe: 'enterprise' | 'family';
}

const WellbeingEvaluator = ({ universe }: WellbeingEvaluatorProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [aiScore, setAiScore] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [mlInsights, setMlInsights] = useState<any>(null);
  const { toast } = useToast();

  const enterpriseQuestions = [
    {
      id: 1,
      question: "Comment évaluez-vous votre niveau de stress au travail aujourd'hui ?",
      category: "Stress",
      icon: Brain,
      weight: 0.3
    },
    {
      id: 2,
      question: "À quel point vous sentez-vous surchargé(e) mentalement ?",
      category: "Charge mentale",
      icon: Zap,
      weight: 0.25
    },
    {
      id: 3,
      question: "Votre niveau d'engagement dans votre travail actuel ?",
      category: "Engagement",
      icon: Heart,
      weight: 0.25
    },
    {
      id: 4,
      question: "Comment évaluez-vous vos relations avec vos collègues ?",
      category: "Lien social",
      icon: Users,
      weight: 0.2
    }
  ];

  const familyQuestions = [
    {
      id: 1,
      question: "Comment évaluez-vous la charge mentale parentale actuellement ?",
      category: "Charge parentale",
      icon: Brain,
      weight: 0.3
    },
    {
      id: 2,
      question: "À quel point votre ado semble-t-il/elle isolé(e) ?",
      category: "Isolement ado",
      icon: Heart,
      weight: 0.25
    },
    {
      id: 3,
      question: "Niveau de dépendance numérique perçu chez votre enfant ?",
      category: "Digital",
      icon: Zap,
      weight: 0.25
    },
    {
      id: 4,
      question: "Qualité du dialogue familial ces dernières semaines ?",
      category: "Communication",
      icon: Users,
      weight: 0.2
    }
  ];

  const questions = universe === 'enterprise' ? enterpriseQuestions : familyQuestions;
  const currentQ = questions[currentQuestion];

  // Simulation d'analyse ML
  const simulateMLAnalysis = (userAnswers: number[]) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Calcul pondéré intelligent
        const weightedScore = userAnswers.reduce((sum, answer, index) => {
          return sum + (answer * questions[index].weight);
        }, 0);
        
        const normalizedScore = Math.round((weightedScore / 5) * 15);
        
        // Analyse prédictive simulée
        const riskFactors = [];
        const strengths = [];
        
        userAnswers.forEach((answer, index) => {
          if (answer <= 2) {
            riskFactors.push(questions[index].category);
          } else if (answer >= 4) {
            strengths.push(questions[index].category);
          }
        });

        const insights = {
          score: normalizedScore,
          riskLevel: normalizedScore <= 5 ? 'high' : normalizedScore <= 10 ? 'medium' : 'low',
          riskFactors,
          strengths,
          trend: Math.random() > 0.5 ? 'improving' : 'declining',
          confidence: Math.round(85 + Math.random() * 10),
          predictions: {
            burnoutRisk: normalizedScore <= 6 ? 85 : normalizedScore <= 10 ? 45 : 15,
            improvementPotential: 100 - normalizedScore * 6
          }
        };

        resolve(insights);
      }, 2000);
    });
  };

  const handleAnswer = async (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsAnalyzing(true);
      toast({
        title: "Analyse IA en cours...",
        description: "Notre modèle de machine learning analyse vos réponses"
      });

      try {
        const insights = await simulateMLAnalysis(newAnswers);
        setMlInsights(insights);
        setAiScore(insights.score);
        setIsCompleted(true);
        
        toast({
          title: "Analyse terminée !",
          description: `Score QVT: ${insights.score}/15 - Confiance: ${insights.confidence}%`
        });
      } catch (error) {
        toast({
          title: "Erreur d'analyse",
          description: "Veuillez réessayer",
          variant: "destructive"
        });
      } finally {
        setIsAnalyzing(false);
      }
    }
  };

  const getScoreColor = (score: number) => {
    if (score <= 5) return "text-red-600 bg-red-100";
    if (score <= 10) return "text-orange-600 bg-orange-100";
    return "text-green-600 bg-green-100";
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      default: return 'text-green-600 bg-green-100';
    }
  };

  const getRecommendations = (insights: any) => {
    if (universe === 'enterprise') {
      if (insights.score <= 5) return [
        "Box Burn-out recommandée (urgence)",
        "Accompagnement psychologique immédiat",
        "Réduction temporaire de la charge de travail",
        "Séances de relaxation quotidiennes"
      ];
      if (insights.score <= 10) return [
        "Box Équilibre Vie Privée",
        "Coaching en gestion du stress",
        "Défis collectifs d'équipe",
        "Techniques de mindfulness"
      ];
      return [
        "Box Cohésion d'équipe",
        "Programme de bien-être préventif",
        "Maintien des bonnes pratiques",
        "Mentorat d'autres collègues"
      ];
    } else {
      if (insights.score <= 5) return [
        "Teen Box Digital Detox (priorité)",
        "Consultation familiale recommandée",
        "Activités de reconnexion immédiates",
        "Etablissement de nouvelles routines"
      ];
      if (insights.score <= 10) return [
        "Family Box Dialogue renforcé",
        "Ateliers communication parent-ado",
        "Défis familiaux hebdomadaires",
        "Temps d'écran structuré"
      ];
      return [
        "Teen Box Créativité & épanouissement",
        "Renforcement des liens positifs",
        "Activités créatives partagées",
        "Célébration des réussites familiales"
      ];
    }
  };

  if (isAnalyzing) {
    return (
      <div className="space-y-6">
        <Card className="border-2 border-blue-200">
          <CardContent className="p-12 text-center">
            <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Analyse IA en cours...
            </h3>
            <p className="text-blue-600 mb-6">
              Notre modèle de machine learning analyse vos réponses pour générer des insights personnalisés
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-blue-700">
                ⚡ Calcul des scores pondérés<br/>
                🧠 Analyse prédictive des risques<br/>
                📊 Génération des recommandations<br/>
                🎯 Personnalisation des conseils
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isCompleted && mlInsights) {
    return (
      <div className="space-y-6">
        <Card className="border-2 border-teal-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-teal-800 flex items-center justify-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Analyse IA Terminée
            </CardTitle>
            <CardDescription className="text-teal-600">
              Résultats basés sur notre modèle de machine learning
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Score principal avec confiance */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className={`text-6xl font-bold px-6 py-4 rounded-2xl ${getScoreColor(mlInsights.score)}`}>
                  {mlInsights.score}/15
                </div>
                <div className="text-left">
                  <Badge className={`mb-2 ${getRiskColor(mlInsights.riskLevel)}`}>
                    Risque: {mlInsights.riskLevel === 'high' ? 'Élevé' : mlInsights.riskLevel === 'medium' ? 'Modéré' : 'Faible'}
                  </Badge>
                  <p className="text-sm text-gray-600">
                    Confiance IA: {mlInsights.confidence}%
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Score QVT Box
              </h3>
            </div>

            {/* Analyse prédictive */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    Risque Burn-out
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600 mb-1">
                    {mlInsights.predictions.burnoutRisk}%
                  </div>
                  <Progress value={mlInsights.predictions.burnoutRisk} className="h-2" />
                </CardContent>
              </Card>

              <Card className="border border-green-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Target className="w-4 h-4 text-green-500" />
                    Potentiel d'amélioration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {mlInsights.predictions.improvementPotential}%
                  </div>
                  <Progress value={mlInsights.predictions.improvementPotential} className="h-2" />
                </CardContent>
              </Card>
            </div>

            {/* Facteurs de risque et forces */}
            <div className="grid md:grid-cols-2 gap-4">
              {mlInsights.riskFactors.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Facteurs de risque détectés
                  </h4>
                  <ul className="space-y-1">
                    {mlInsights.riskFactors.map((factor: string, index: number) => (
                      <li key={index} className="text-sm text-red-700">• {factor}</li>
                    ))}
                  </ul>
                </div>
              )}

              {mlInsights.strengths.length > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Points forts identifiés
                  </h4>
                  <ul className="space-y-1">
                    {mlInsights.strengths.map((strength: string, index: number) => (
                      <li key={index} className="text-sm text-green-700">• {strength}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Recommandations IA */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6">
              <h4 className="font-semibold text-teal-800 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Recommandations IA Personnalisées
              </h4>
              <div className="space-y-2">
                {getRecommendations(mlInsights).map((rec, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700">{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tendance prédictive */}
            <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg">
              <TrendingUp className={`w-6 h-6 ${mlInsights.trend === 'improving' ? 'text-green-500' : 'text-orange-500'}`} />
              <span className="text-sm text-gray-700">
                Tendance prédictive: <strong>{mlInsights.trend === 'improving' ? 'En amélioration' : 'À surveiller'}</strong>
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button 
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setIsCompleted(false);
                  setAiScore(null);
                  setMlInsights(null);
                }}
                variant="outline"
                className="flex-1"
              >
                Nouvelle évaluation
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
      <Card className="border-2 border-teal-200 hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-teal-800">
                Évaluation Bien-être Express
              </CardTitle>
              <CardDescription className="text-teal-600">
                Analyse IA avec machine learning avancé
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-600" />
              <Badge variant="outline">2 min</Badge>
              <Badge className="bg-blue-100 text-blue-800">IA</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Progress amélioré */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} sur {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-3" />
          </div>

          {/* Current Question */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                <currentQ.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <Badge variant="secondary" className="bg-teal-100 text-teal-800 mb-1">
                  {currentQ.category}
                </Badge>
                <p className="text-xs text-gray-500">Poids: {Math.round(currentQ.weight * 100)}%</p>
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-gray-800 mb-6">
              {currentQ.question}
            </h3>

            {/* Answer Options avec animations */}
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((score) => (
                <Button
                  key={score}
                  onClick={() => handleAnswer(score)}
                  variant="outline"
                  className="h-16 flex flex-col items-center justify-center hover:bg-teal-50 hover:border-teal-300 hover:scale-105 transition-all duration-200"
                >
                  <span className="font-bold text-xl">{score}</span>
                  <span className="text-xs text-gray-500">
                    {score === 1 ? 'Très faible' : 
                     score === 2 ? 'Faible' :
                     score === 3 ? 'Moyen' :
                     score === 4 ? 'Élevé' : 'Très élevé'}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Enhanced Scale Legend */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Analyse IA en temps réel</span>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Échelle :</strong> 1 = Très faible • 5 = Très élevé | 
              <strong> IA :</strong> Pondération automatique selon l'importance
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WellbeingEvaluator;
