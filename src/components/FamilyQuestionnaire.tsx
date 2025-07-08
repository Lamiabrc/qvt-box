
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Heart, Users, CheckCircle } from "lucide-react";
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

  const questions = [
    {
      question: "En ce moment, diriez-vous que votre charge mentale familiale est :",
      options: [
        { value: "supportable", label: "😌 Supportable", emoji: "😌" },
        { value: "moyenne", label: "😐 Moyenne", emoji: "😐" },
        { value: "trop_lourde", label: "😫 Trop lourde", emoji: "😫" }
      ]
    },
    {
      question: "Avez-vous parfois du mal à parler de vos émotions avec vos enfants ou votre ado ?",
      options: [
        { value: "oui_souvent", label: "Oui, souvent" },
        { value: "parfois", label: "Parfois" },
        { value: "non_ca_va", label: "Non, ça va" }
      ]
    },
    {
      question: "Aimeriez-vous recevoir une aide simple et bienveillante pour mieux gérer vos émotions au quotidien ?",
      options: [
        { value: "oui_clairement", label: "Oui, clairement" },
        { value: "pourquoi_pas", label: "Pourquoi pas, à tester" },
        { value: "non_pas_besoin", label: "Non, pas besoin" }
      ]
    },
    {
      question: "Seriez-vous intéressé·e par une box bien-être mensuelle, adaptée à votre état émotionnel du moment ?",
      options: [
        { value: "oui", label: "Oui" },
        { value: "peut_etre", label: "Peut-être" },
        { value: "non", label: "Non" }
      ]
    },
    {
      question: "Quel budget mensuel seriez-vous prêt·e à consacrer à ce type de service ?",
      options: [
        { value: "moins_15", label: "Moins de 15 €" },
        { value: "15_35", label: "Entre 15 € et 35 €" },
        { value: "plus_35", label: "Plus de 35 €" }
      ]
    }
  ];

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const questionnaire_data = {
        type: 'family',
        answers: questions.map((q, index) => ({
          question: q.question,
          answer: answers[index],
          answer_label: q.options.find(opt => opt.value === answers[index])?.label
        }))
      };

      const { error } = await supabase
        .from('market_research_submissions')
        .insert([{
          source: 'family_questionnaire',
          target_audience: ['famille'],
          specific_needs: JSON.stringify(questionnaire_data),
          consent_data: true
        }]);

      if (error) throw error;

      toast({
        title: "Merci pour votre participation !",
        description: "Vos réponses ont été enregistrées.",
      });

      onComplete?.();
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

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Heart className="w-6 h-6 text-purple-600" />
          Questionnaire Famille
        </CardTitle>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          Question {currentQuestion + 1} sur {questions.length}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            {questions[currentQuestion].question}
          </h3>
          
          <RadioGroup 
            value={answers[currentQuestion] || ''} 
            onValueChange={handleAnswerChange}
            className="space-y-3"
          >
            {questions[currentQuestion].options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="text-base cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Précédent
          </Button>
          
          <Button 
            onClick={handleNext}
            disabled={!answers[currentQuestion] || isSubmitting}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {currentQuestion === questions.length - 1 ? 
              (isSubmitting ? 'Envoi...' : 'Terminer') : 
              'Suivant'
            }
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FamilyQuestionnaire;
