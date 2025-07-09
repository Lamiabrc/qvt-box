
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Heart, Users, CheckCircle, Sparkles, Gift } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FamilyQuestionnaireProps {
  onComplete?: () => void;
}

const FamilyQuestionnaire = ({ onComplete }: FamilyQuestionnaireProps) => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState<any>(null);

  const questions = [
    {
      question: "En ce moment, diriez-vous que votre charge mentale familiale est :",
      subtitle: "Soyez honnête avec vous-même 💭",
      options: [
        { value: "supportable", label: "😌 Supportable", description: "Je gère plutôt bien" },
        { value: "moyenne", label: "😐 Moyenne", description: "Parfois difficile" },
        { value: "trop_lourde", label: "😫 Trop lourde", description: "Je sature souvent" }
      ],
      tip: "💡 Astuce : Reconnaître sa charge mentale est le premier pas vers le bien-être !"
    },
    {
      question: "Avez-vous parfois du mal à parler de vos émotions avec vos enfants ou votre ado ?",
      subtitle: "La communication émotionnelle, un défi quotidien 🗣️",
      options: [
        { value: "oui_souvent", label: "Oui, souvent", description: "C'est compliqué au quotidien" },
        { value: "parfois", label: "Parfois", description: "Selon les moments" },
        { value: "non_ca_va", label: "Non, ça va", description: "On communique bien" }
      ],
      tip: "💡 Saviez-vous que 78% des parents trouvent difficile de parler d'émotions ?"
    },
    {
      question: "Aimeriez-vous recevoir une aide simple et bienveillante pour mieux gérer vos émotions au quotidien ?",
      subtitle: "Imaginez un accompagnement personnalisé 🌟",
      options: [
        { value: "oui_clairement", label: "Oui, clairement", description: "J'en ai vraiment besoin" },
        { value: "pourquoi_pas", label: "Pourquoi pas, à tester", description: "Je suis curieux/se" },
        { value: "non_pas_besoin", label: "Non, pas besoin", description: "Je me débrouille seul/e" }
      ],
      tip: "💡 L'accompagnement émotionnel améliore les relations familiales de 85% !"
    },
    {
      question: "Seriez-vous intéressé·e par une box bien-être mensuelle, adaptée à votre état émotionnel du moment ?",
      subtitle: "Une surprise personnalisée chaque mois 🎁",
      options: [
        { value: "oui", label: "Oui", description: "J'adore les surprises bien-être !" },
        { value: "peut_etre", label: "Peut-être", description: "Selon le contenu" },
        { value: "non", label: "Non", description: "Ce n'est pas pour moi" }
      ],
      tip: "💡 Nos box contiennent des produits sélectionnés par des psychologues !"
    },
    {
      question: "Quel budget mensuel seriez-vous prêt·e à consacrer à ce type de service ?",
      subtitle: "Investir dans votre bien-être familial 💰",
      options: [
        { value: "moins_15", label: "Moins de 15 €", description: "Budget serré mais motivé/e" },
        { value: "15_35", label: "Entre 15 € et 35 €", description: "Un investissement raisonnable" },
        { value: "plus_35", label: "Plus de 35 €", description: "Le bien-être n'a pas de prix" }
      ],
      tip: "💡 Le coût moyen d'une séance psy : 60€. Notre solution : bien moins cher !"
    }
  ];

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    let stressLevel = 0;
    let needLevel = 0;
    let budgetRange = answers[4] || '';

    // Calcul du niveau de stress
    if (answers[0] === 'trop_lourde') stressLevel += 3;
    if (answers[0] === 'moyenne') stressLevel += 2;
    if (answers[0] === 'supportable') stressLevel += 1;

    if (answers[1] === 'oui_souvent') stressLevel += 3;
    if (answers[1] === 'parfois') stressLevel += 2;

    // Calcul du niveau de besoin
    if (answers[2] === 'oui_clairement') needLevel += 3;
    if (answers[2] === 'pourquoi_pas') needLevel += 2;
    if (answers[3] === 'oui') needLevel += 2;
    if (answers[3] === 'peut_etre') needLevel += 1;

    let recommendation = '';
    let priority = 'medium';

    if (stressLevel >= 5 && needLevel >= 4) {
      recommendation = 'Votre profil indique un besoin urgent d\'accompagnement. Notre solution pourrait vraiment vous aider !';
      priority = 'high';
    } else if (stressLevel >= 3 || needLevel >= 3) {
      recommendation = 'Vous pourriez bénéficier d\'un soutien émotionnel. Notre approche douce serait parfaite pour vous.';
      priority = 'medium';
    } else {
      recommendation = 'Votre situation semble stable, mais notre solution pourrait vous aider à maintenir cet équilibre.';
      priority = 'low';
    }

    return {
      stressLevel,
      needLevel,
      budgetRange,
      recommendation,
      priority,
      score: Math.round(((stressLevel + needLevel) / 10) * 100)
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
        type: 'family',
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
          source: 'family_questionnaire',
          target_audience: ['famille'],
          specific_needs: JSON.stringify(questionnaire_data),
          consent_data: true,
          email: 'questionnaire@temp.com'
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
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <CardTitle className="text-2xl text-purple-800">
            Votre Profil Bien-être Familial
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Score de compatibilité</span>
              <span className="text-3xl font-bold text-purple-600">{resultData.score}%</span>
            </div>
            <Progress value={resultData.score} className="h-3" />
          </div>

          <div className="bg-white border border-purple-200 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5 text-purple-600" />
              Notre recommandation personnalisée
            </h3>
            <p className="text-gray-700 leading-relaxed">{resultData.recommendation}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <Gift className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-medium">Offre de lancement</h4>
              <p className="text-sm text-gray-600">-50% sur votre première box</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <Users className="w-8 h-8 text-pink-600 mx-auto mb-2" />
              <h4 className="font-medium">Accompagnement</h4>
              <p className="text-sm text-gray-600">Suivi personnalisé inclus</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={() => onComplete?.()} 
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
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
          <Heart className="w-6 h-6 text-purple-600" />
          Questionnaire Famille
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
            <p className="text-purple-600 font-medium">
              {questions[currentQuestion].subtitle}
            </p>
          </div>
          
          <RadioGroup 
            value={answers[currentQuestion] || ''} 
            onValueChange={handleAnswerChange}
            className="space-y-3"
          >
            {questions[currentQuestion].options.map((option) => (
              <div key={option.value} 
                className="flex items-center space-x-3 p-4 rounded-lg border-2 border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all cursor-pointer"
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
            className="bg-purple-600 hover:bg-purple-700"
          >
            {currentQuestion === questions.length - 1 ? 
              (isSubmitting ? 'Analyse...' : 'Voir mes résultats ✨') : 
              'Suivant →'
            }
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FamilyQuestionnaire;
