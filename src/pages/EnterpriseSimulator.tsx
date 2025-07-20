import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Users, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingBubbles from '@/components/FloatingBubbles';

const EnterpriseSimulator = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      title: "Communication d'équipe",
      question: "Comment évaluez-vous la communication au sein de votre équipe ?",
      options: [
        { value: "1", label: "Très insuffisante - Nombreux malentendus" },
        { value: "2", label: "Insuffisante - Communication difficile" },
        { value: "3", label: "Correcte - Quelques améliorations possibles" },
        { value: "4", label: "Bonne - Communication fluide" },
        { value: "5", label: "Excellente - Communication parfaite" }
      ]
    },
    {
      id: 2,
      title: "Cohésion d'équipe",
      question: "Quel est le niveau de cohésion de votre équipe ?",
      options: [
        { value: "1", label: "Très faible - Équipe fragmentée" },
        { value: "2", label: "Faible - Peu de collaboration" },
        { value: "3", label: "Moyenne - Collaboration occasionnelle" },
        { value: "4", label: "Bonne - Équipe soudée" },
        { value: "5", label: "Excellente - Équipe très unie" }
      ]
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-qvt-bubble via-qvt-off-white to-qvt-glacier/20 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-qvt-turquoise text-white">
              <Users className="w-4 h-4 mr-2" />
              Diagnostic Équipe
            </Badge>
            <h1 className="text-4xl font-bold text-qvt-dark mb-4">
              Évaluez la dynamique de votre équipe
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSimulator;