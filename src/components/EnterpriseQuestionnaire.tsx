
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Building2, TrendingUp, CheckCircle } from "lucide-react";
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

  const questions = [
    {
      question: "Pensez-vous que vos collaborateurs montrent des signes de stress ou de fatigue émotionnelle ?",
      options: [
        { value: "oui_regulierement", label: "Oui, régulièrement" },
        { value: "parfois", label: "Parfois" },
        { value: "non_rarement", label: "Non, rarement" }
      ]
    },
    {
      question: "Disposez-vous aujourd'hui d'un outil concret pour mesurer ou accompagner le bien-être émotionnel ?",
      options: [
        { value: "oui", label: "Oui" },
        { value: "partiellement", label: "Partiellement" },
        { value: "non", label: "Non" }
      ]
    },
    {
      question: "Trouvez-vous que les solutions QVT actuelles sont :",
      options: [
        { value: "trop_digitales", label: "Trop digitales / impersonnelles" },
        { value: "utiles_insuffisantes", label: "Utiles mais insuffisantes" },
        { value: "globalement_adaptees", label: "Globalement adaptées" }
      ]
    },
    {
      question: "Seriez-vous intéressé·e par une solution qui combine :",
      subtitle: "✅ IA émotionnelle + 🎁 box physique mensuelle ?",
      options: [
        { value: "oui_beaucoup", label: "Oui, beaucoup" },
        { value: "a_explorer", label: "À explorer" },
        { value: "non", label: "Non" }
      ]
    },
    {
      question: "Quel budget moyen seriez-vous prêt·e à envisager par salarié pour une telle solution ?",
      options: [
        { value: "moins_10", label: "Moins de 10 € / mois" },
        { value: "10_30", label: "Entre 10 et 30 € / mois" },
        { value: "plus_30", label: "Plus de 30 € / mois" }
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
        type: 'enterprise',
        answers: questions.map((q, index) => ({
          question: q.question,
          answer: answers[index],
          answer_label: q.options.find(opt => opt.value === answers[index])?.label
        }))
      };

      const { error } = await supabase
        .from('market_research_submissions')
        .insert([{
          source: 'enterprise_questionnaire',
          target_audience: ['entreprise'],
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
          <Building2 className="w-6 h-6 text-teal-600" />
          Questionnaire Entreprise
        </CardTitle>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-teal-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          Question {currentQuestion + 1} sur {questions.length}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">
              {questions[currentQuestion].question}
            </h3>
            {questions[currentQuestion].subtitle && (
              <p className="text-base text-gray-600 mt-2">
                {questions[currentQuestion].subtitle}
              </p>
            )}
          </div>
          
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
            className="bg-teal-600 hover:bg-teal-700"
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

export default EnterpriseQuestionnaire;
