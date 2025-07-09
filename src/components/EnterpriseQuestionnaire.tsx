
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Building2, TrendingUp, CheckCircle, Target, Award, BarChart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface EnterpriseQuestionnaireProps {
  onComplete?: () => void;
}

const EnterpriseQuestionnaire = ({ onComplete }: EnterpriseQuestionnaireProps) => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState<any>(null);

  const questions = [
    {
      question: "Pensez-vous que vos collaborateurs montrent des signes de stress ou de fatigue émotionnelle ?",
      subtitle: "Observez-vous des signaux d'alerte ? 🚨",
      options: [
        { value: "oui_regulierement", label: "Oui, régulièrement", description: "Signaux fréquents et visibles", impact: "high" },
        { value: "parfois", label: "Parfois", description: "Épisodes ponctuels", impact: "medium" },
        { value: "non_rarement", label: "Non, rarement", description: "Équipe plutôt sereine", impact: "low" }
      ],
      tip: "📊 Statistique : 60% des salariés français déclarent être stressés au travail"
    },
    {
      question: "Disposez-vous aujourd'hui d'un outil concret pour mesurer ou accompagner le bien-être émotionnel ?",
      subtitle: "Votre arsenal QVT actuel 🛠️",
      options: [
        { value: "oui", label: "Oui", description: "Nous avons des outils en place" },
        { value: "partiellement", label: "Partiellement", description: "Quelques initiatives éparses" },
        { value: "non", label: "Non", description: "Nous cherchons une solution" }
      ],
      tip: "💡 Les entreprises avec outils QVT voient leur turnover diminuer de 40%"
    },
    {
      question: "Trouvez-vous que les solutions QVT actuelles sont :",
      subtitle: "Votre retour d'expérience 🎯",
      options: [
        { value: "trop_digitales", label: "Trop digitales / impersonnelles", description: "Manque d'humanité" },
        { value: "utiles_insuffisantes", label: "Utiles mais insuffisantes", description: "Bon début, mais incomplet" },
        { value: "globalement_adaptees", label: "Globalement adaptées", description: "Nous sommes satisfaits" }
      ],
      tip: "🎯 Notre approche : 70% physique, 30% digital pour plus d'impact"
    },
    {
      question: "Seriez-vous intéressé·e par une solution qui combine :",
      subtitle: "✅ IA émotionnelle + 🎁 box physique mensuelle ?",
      description: "Innovation : analyse IA + expérience tangible",
      options: [
        { value: "oui_beaucoup", label: "Oui, beaucoup", description: "Concept très prometteur !" },
        { value: "a_explorer", label: "À explorer", description: "Intéressant, mais à creuser" },
        { value: "non", label: "Non", description: "Pas convaincu par l'approche" }
      ],
      tip: "🚀 L'innovation QVT qui révolutionne l'accompagnement émotionnel"
    },
    {
      question: "Quel budget moyen seriez-vous prêt·e à envisager par salarié pour une telle solution ?",
      subtitle: "Investissement dans le capital humain 💼",
      options: [
        { value: "moins_10", label: "Moins de 10 € / mois", description: "Budget serré mais intéressé" },
        { value: "10_30", label: "Entre 10 et 30 € / mois", description: "Investissement raisonnable" },
        { value: "plus_30", label: "Plus de 30 € / mois", description: "Le bien-être est prioritaire" }
      ],
      tip: "💰 ROI moyen d'une solution QVT : 3€ de retour pour 1€ investi"
    }
  ];

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    let urgencyLevel = 0;
    let readinessLevel = 0;
    let budgetRange = answers[4] || '';

    // Calcul de l'urgence
    if (answers[0] === 'oui_regulierement') urgencyLevel += 3;
    if (answers[0] === 'parfois') urgencyLevel += 2;
    if (answers[1] === 'non') urgencyLevel += 2;
    if (answers[1] === 'partiellement') urgencyLevel += 1;

    // Calcul de la maturité
    if (answers[2] === 'trop_digitales') readinessLevel += 3;
    if (answers[2] === 'utiles_insuffisantes') readinessLevel += 2;
    if (answers[3] === 'oui_beaucoup') readinessLevel += 3;
    if (answers[3] === 'a_explorer') readinessLevel += 2;

    let recommendation = '';
    let priority = 'medium';
    let nextSteps = [];

    if (urgencyLevel >= 4 && readinessLevel >= 4) {
      recommendation = 'Profil idéal ! Votre entreprise a un besoin urgent et vous êtes prêt pour l\'innovation.';
      priority = 'high';
      nextSteps = ['Démonstration personnalisée', 'Pilote sur 1 équipe', 'Déploiement rapide'];
    } else if (urgencyLevel >= 3 || readinessLevel >= 3) {
      recommendation = 'Votre entreprise pourrait grandement bénéficier de notre solution innovante.';
      priority = 'medium';
      nextSteps = ['Présentation détaillée', 'Étude de cas', 'Test sur mesure'];
    } else {
      recommendation = 'Votre situation semble stable, mais anticiper les besoins QVT est toujours sage.';
      priority = 'low';
      nextSteps = ['Veille informative', 'Livre blanc QVT', 'Suivi tendances'];
    }

    return {
      urgencyLevel,
      readinessLevel,
      budgetRange,
      recommendation,
      priority,
      nextSteps,
      score: Math.round(((urgencyLevel + readinessLevel) / 10) * 100)
    };
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = calculateResult();
      setResultData(result);
      setShowResult(true);
      handleSubmit(result);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async (result: any) => {
    setIsSubmitting(true);
    try {
      const questionnaire_data = {
        type: 'enterprise',
        answers: questions.map((q, index) => ({
          question: q.question,
          answer: answers[index],
          answer_label: q.options.find(opt => opt.value === answers[index])?.label
        })),
        analysis: result
      };

      const { error } = await supabase
        .from('market_research_submissions')
        .insert([{
          source: 'enterprise_questionnaire',
          target_audience: ['entreprise'],
          specific_needs: JSON.stringify(questionnaire_data),
          consent_data: true,
          email: 'questionnaire@temp.com' // Temporary email
        }]);

      if (error) throw error;

      toast({
        title: "Merci pour votre participation !",
        description: "Vos réponses ont été enregistrées.",
      });

    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult && resultData) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-10 h-10 text-white" />
          </div>
          <CardTitle className="text-2xl text-teal-800">
            Votre Profil QVT Entreprise
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Score de compatibilité</span>
              <span className="text-3xl font-bold text-teal-600">{resultData.score}%</span>
            </div>
            <Progress value={resultData.score} className="h-3" />
          </div>

          <div className="bg-white border border-teal-200 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
              <BarChart className="w-5 h-5 text-teal-600" />
              Analyse personnalisée
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">{resultData.recommendation}</p>
            
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-teal-800">Prochaines étapes recommandées :</h4>
              <ul className="space-y-1">
                {resultData.nextSteps.map((step: string, index: number) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-teal-700">
                    <CheckCircle className="w-4 h-4" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-teal-50 p-4 rounded-lg text-center">
              <Award className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <h4 className="font-medium">ROI Garanti</h4>
              <p className="text-sm text-gray-600">Retour sur investissement prouvé</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-medium">Innovation QVT</h4>
              <p className="text-sm text-gray-600">Technologie de pointe</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={() => onComplete?.()} 
              className="flex-1 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Découvrir nos solutions
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                setShowResult(false);
                setCurrentQuestion(0);
                setAnswers([]);
              }}
            >
              Refaire le test
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Building2 className="w-6 h-6 text-teal-600" />
          Questionnaire Entreprise
        </CardTitle>
        <div className="space-y-2">
          <Progress value={progress} className="h-3" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Question {currentQuestion + 1} sur {questions.length}</span>
            <span>{Math.round(progress)}% complété</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">
              {questions[currentQuestion].question}
            </h3>
            <p className="text-teal-600 font-medium">
              {questions[currentQuestion].subtitle}
            </p>
            {questions[currentQuestion].description && (
              <p className="text-gray-600 mt-2 text-sm">
                {questions[currentQuestion].description}
              </p>
            )}
          </div>
          
          <RadioGroup 
            value={answers[currentQuestion] || ''} 
            onValueChange={handleAnswerChange}
            className="space-y-3"
          >
            {questions[currentQuestion].options.map((option) => (
              <div key={option.value} 
                className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-100 hover:border-teal-200 hover:bg-teal-50 transition-all cursor-pointer"
                onClick={() => handleAnswerChange(option.value)}
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <div className="flex-1">
                  <Label htmlFor={option.value} className="text-base cursor-pointer font-medium">
                    {option.label}
                  </Label>
                  {option.description && (
                    <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                  )}
                </div>
                {option.impact && (
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    option.impact === 'high' ? 'bg-red-100 text-red-700' :
                    option.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {option.impact === 'high' ? '🔴 Urgent' :
                     option.impact === 'medium' ? '🟡 Modéré' :
                     '🟢 Stable'}
                  </div>
                )}
              </div>
            ))}
          </RadioGroup>

          {questions[currentQuestion].tip && (
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm text-blue-800">{questions[currentQuestion].tip}</p>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ← Précédent
          </Button>
          
          <Button 
            onClick={handleNext}
            disabled={!answers[currentQuestion] || isSubmitting}
            className="bg-teal-600 hover:bg-teal-700"
          >
            {currentQuestion === questions.length - 1 ? 
              (isSubmitting ? 'Analyse...' : 'Voir mes résultats 🎯') : 
              'Suivant →'
            }
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnterpriseQuestionnaire;
