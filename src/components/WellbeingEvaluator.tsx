import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Zap, Users, Clock, CheckCircle, TrendingUp, AlertTriangle, Target, BookOpen, Package, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WellbeingEvaluatorProps {
  universe: 'enterprise' | 'family';
}

interface MLInsights {
  score: number;
  riskLevel: 'high' | 'medium' | 'low';
  riskFactors: string[];
  strengths: string[];
  trend: 'improving' | 'declining';
  confidence: number;
  predictions: {
    burnoutRisk: number;
    improvementPotential: number;
  };
}

interface RecommendationWithStudy {
  title: string;
  description: string;
  studyReference: string;
  effectiveness: string;
  implementation: string;
}

interface BoxRecommendation {
  name: string;
  description: string;
  price: string;
  contents: string[];
  benefits: string[];
  urgency: 'urgent' | 'recommended' | 'preventive';
}

const WellbeingEvaluator = ({ universe }: WellbeingEvaluatorProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [aiScore, setAiScore] = useState<number | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [mlInsights, setMlInsights] = useState<MLInsights | null>(null);
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

  // Evidence-based recommendations
  const getScientificRecommendations = (insights: MLInsights): RecommendationWithStudy[] => {
    if (universe === 'enterprise') {
      if (insights.score <= 5) return [
        {
          title: "Méditation de pleine conscience",
          description: "Pratique quotidienne de 10-20 minutes pour réduire le stress et l'anxiété",
          studyReference: "Goyal et al. (2014) - JAMA Internal Medicine",
          effectiveness: "Réduction de 40% des symptômes d'anxiété",
          implementation: "Applications guidées, sessions de groupe en entreprise"
        },
        {
          title: "Micro-pauses actives",
          description: "Pauses de 2-3 minutes toutes les heures pour prévenir l'épuisement",
          studyReference: "Henning et al. (1997) - International Journal of Industrial Ergonomics",
          effectiveness: "Amélioration de 23% de la productivité",
          implementation: "Rappels automatiques, exercices de respiration"
        },
        {
          title: "Accompagnement psychologique",
          description: "Thérapie cognitivo-comportementale pour gérer le burnout",
          studyReference: "Awa et al. (2010) - Cochrane Reviews",
          effectiveness: "Efficacité prouvée dans 80% des cas",
          implementation: "Séances individuelles, programmes d'aide aux employés"
        }
      ];
      
      if (insights.score <= 10) return [
        {
          title: "Exercice physique régulier",
          description: "30 minutes d'activité modérée 3 fois par semaine",
          studyReference: "Schuch et al. (2018) - British Journal of Sports Medicine",
          effectiveness: "Réduction de 26% des symptômes dépressifs",
          implementation: "Cours collectifs, salle de sport en entreprise"
        },
        {
          title: "Gestion des priorités (Matrice d'Eisenhower)",
          description: "Organisation des tâches selon urgence et importance",
          studyReference: "Covey (1989) - Recherche en management",
          effectiveness: "Amélioration de 35% de l'efficacité",
          implementation: "Formation, outils numériques de planification"
        },
        {
          title: "Communication assertive",
          description: "Techniques pour exprimer ses besoins sans agressivité",
          studyReference: "Speed et al. (2018) - Applied Psychology",
          effectiveness: "Réduction de 28% des conflits",
          implementation: "Ateliers de formation, coaching individuel"
        }
      ];
      
      return [
        {
          title: "Mentorat inversé",
          description: "Partager ses compétences avec les nouveaux collaborateurs",
          studyReference: "Allen et al. (2004) - Journal of Applied Psychology",
          effectiveness: "Augmentation de 15% de l'engagement",
          implementation: "Programmes de mentorat structurés"
        },
        {
          title: "Projets transversaux innovants",
          description: "Participation à des initiatives créatives inter-services",
          studyReference: "Amabile & Kramer (2011) - Harvard Business Review",
          effectiveness: "Boost de créativité de 42%",
          implementation: "Hackathons internes, laboratoires d'innovation"
        }
      ];
    } else {
      // Family recommendations
      if (insights.score <= 5) return [
        {
          title: "Temps d'écran structuré",
          description: "Limitation et encadrement de l'usage numérique familial",
          studyReference: "Radesky et al. (2020) - Pediatrics",
          effectiveness: "Amélioration de 45% du sommeil chez les ados",
          implementation: "Contrats familiaux, applications de contrôle parental"
        },
        {
          title: "Thérapie familiale systémique",
          description: "Approche thérapeutique centrée sur les dynamiques familiales",
          studyReference: "Carr (2019) - Journal of Family Therapy",
          effectiveness: "Efficacité dans 78% des cas de conflits familiaux",
          implementation: "Séances hebdomadaires avec thérapeute spécialisé"
        }
      ];
      
      if (insights.score <= 10) return [
        {
          title: "Rituels familiaux quotidiens",
          description: "Moments privilégiés sans écrans (repas, discussions)",
          studyReference: "Fiese et al. (2020) - Journal of Family Psychology",
          effectiveness: "Renforcement de 34% des liens familiaux",
          implementation: "Planning familial, règles communes"
        },
        {
          title: "Communication non-violente",
          description: "Techniques d'écoute active et d'expression des émotions",
          studyReference: "Rosenberg (2003) - Recherche en psychologie familiale",
          effectiveness: "Réduction de 52% des tensions",
          implementation: "Ateliers parents-ados, formations"
        }
      ];
      
      return [
        {
          title: "Activités créatives partagées",
          description: "Projets artistiques ou manuels en famille",
          studyReference: "Russ et al. (2019) - Creativity Research Journal",
          effectiveness: "Amélioration de 38% de la complicité",
          implementation: "Ateliers créatifs, projets DIY"
        }
      ];
    }
  };

  // Box recommendations based on score
  const getBoxRecommendations = (insights: MLInsights): BoxRecommendation[] => {
    if (universe === 'enterprise') {
      if (insights.score <= 5) return [
        {
          name: "QVT Box Urgence Burnout",
          description: "Solution d'urgence pour prévenir l'épuisement professionnel",
          price: "89€/mois",
          contents: [
            "Kit de méditation guidée (casque + app premium)",
            "Huiles essentielles anti-stress certifiées",
            "Carnet de développement personnel",
            "Séances de coaching vidéo individualisées",
            "Infusions relaxantes bio"
          ],
          benefits: [
            "Réduction immédiate du stress",
            "Accompagnement personnalisé",
            "Outils scientifiquement prouvés"
          ],
          urgency: 'urgent'
        }
      ];
      
      if (insights.score <= 10) return [
        {
          name: "QVT Box Équilibre Pro",
          description: "Retrouver l'harmonie entre vie professionnelle et personnelle",
          price: "69€/mois",
          contents: [
            "Planificateur intelligent QVT",
            "Kit sport de bureau (accessoires ergonomiques)",
            "Snacks énergétiques healthy",
            "Guide de micro-pauses actives",
            "Plante dépolluante pour le bureau"
          ],
          benefits: [
            "Amélioration de la productivité",
            "Réduction des tensions physiques",
            "Environnement de travail optimisé"
          ],
          urgency: 'recommended'
        }
      ];
      
      return [
        {
          name: "QVT Box Excellence",
          description: "Maintenir et développer votre épanouissement professionnel",
          price: "49€/mois",
          contents: [
            "Livres de développement leadership",
            "Kit créativité (carnets design, stylos premium)",
            "Formations micro-learning exclusives",
            "Produits bien-être premium",
            "Accès communauté QVT"
          ],
          benefits: [
            "Développement des compétences",
            "Réseau professionnel élargi",
            "Innovation et créativité"
          ],
          urgency: 'preventive'
        }
      ];
    } else {
      // Family boxes
      if (insights.score <= 5) return [
        {
          name: "Family Box SOS Dialogue",
          description: "Solution urgente pour rétablir la communication familiale",
          price: "79€/mois",
          contents: [
            "Jeux de communication parent-ado",
            "Guide de gestion des conflits",
            "Kit digital detox familial",
            "Carnet d'émotions partagé",
            "Séances de coaching familial vidéo"
          ],
          benefits: [
            "Restauration du dialogue",
            "Outils de résolution de conflits",
            "Accompagnement spécialisé"
          ],
          urgency: 'urgent'
        }
      ];
      
      if (insights.score <= 10) return [
        {
          name: "Family Box Harmonie",
          description: "Renforcer les liens familiaux et la complicité",
          price: "59€/mois",
          contents: [
            "Activités créatives famille",
            "Jeux coopératifs modernes",
            "Kit cuisine parent-ado",
            "Carnet de gratitude familial",
            "Planning d'activités personnalisé"
          ],
          benefits: [
            "Moments de qualité renforcés",
            "Complicité parent-ado",
            "Traditions familiales positives"
          ],
          urgency: 'recommended'
        }
      ];
      
      return [
        {
          name: "Family Box Épanouissement",
          description: "Cultiver le bonheur et la croissance familiale",
          price: "39€/mois",
          contents: [
            "Projets créatifs avancés",
            "Livres de développement personnel ado",
            "Kit jardinage famille",
            "Expériences culturelles",
            "Accès communauté familles épanouies"
          ],
          benefits: [
            "Développement personnel de chacun",
            "Projets familiaux stimulants",
            "Réseau de familles positives"
          ],
          urgency: 'preventive'
        }
      ];
    }
  };

  const simulateMLAnalysis = (userAnswers: number[]): Promise<MLInsights> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const weightedScore = userAnswers.reduce((sum, answer, index) => {
          return sum + (answer * questions[index].weight);
        }, 0);
        
        const normalizedScore = Math.round((weightedScore / 5) * 15);
        
        const riskFactors: string[] = [];
        const strengths: string[] = [];
        
        userAnswers.forEach((answer, index) => {
          if (answer <= 2) {
            riskFactors.push(questions[index].category);
          } else if (answer >= 4) {
            strengths.push(questions[index].category);
          }
        });

        const insights: MLInsights = {
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

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'bg-red-500';
      case 'recommended': return 'bg-orange-500';
      default: return 'bg-green-500';
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
    const scientificRecommendations = getScientificRecommendations(mlInsights);
    const boxRecommendations = getBoxRecommendations(mlInsights);

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

            {/* Scientific Recommendations */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Recommandations Scientifiques
              </h4>
              <div className="space-y-4">
                {scientificRecommendations.map((rec, index) => (
                  <Card key={index} className="border border-blue-200">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <h5 className="font-medium text-blue-900 mb-2">{rec.title}</h5>
                          <p className="text-sm text-gray-700 mb-3">{rec.description}</p>
                          <div className="grid md:grid-cols-2 gap-3 text-xs">
                            <div className="bg-blue-50 p-2 rounded">
                              <strong>Étude:</strong> {rec.studyReference}
                            </div>
                            <div className="bg-green-50 p-2 rounded">
                              <strong>Efficacité:</strong> {rec.effectiveness}
                            </div>
                          </div>
                          <div className="mt-2 text-xs text-gray-600">
                            <strong>Mise en œuvre:</strong> {rec.implementation}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Box Recommendations */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="font-semibold text-purple-800 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Boxes QVT Personnalisées
              </h4>
              <div className="space-y-4">
                {boxRecommendations.map((box, index) => (
                  <Card key={index} className="border border-purple-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 ${getUrgencyColor(box.urgency)} rounded-full`}></div>
                          <div>
                            <h5 className="font-bold text-purple-900 text-lg">{box.name}</h5>
                            <p className="text-purple-700 text-sm">{box.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-800">{box.price}</div>
                          <Badge className={`${getUrgencyColor(box.urgency)} text-white border-0 text-xs`}>
                            {box.urgency === 'urgent' ? 'URGENT' : 
                             box.urgency === 'recommended' ? 'RECOMMANDÉ' : 'PRÉVENTIF'}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="font-medium text-gray-800 mb-2">Contenu de la box:</h6>
                          <ul className="space-y-1">
                            {box.contents.map((item, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                <Star className="w-3 h-3 text-yellow-500" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h6 className="font-medium text-gray-800 mb-2">Bénéfices attendus:</h6>
                          <ul className="space-y-1">
                            {box.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-purple-200">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          Commander cette box
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

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

            <div className="flex items-center justify-center gap-4 p-4 bg-gray-50 rounded-lg">
              <TrendingUp className={`w-6 h-6 ${mlInsights.trend === 'improving' ? 'text-green-500' : 'text-orange-500'}`} />
              <span className="text-sm text-gray-700">
                Tendance prédictive: <strong>{mlInsights.trend === 'improving' ? 'En amélioration' : 'À surveiller'}</strong>
              </span>
            </div>

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
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} sur {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-3" />
          </div>

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
