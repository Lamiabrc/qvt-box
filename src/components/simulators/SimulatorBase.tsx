
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Question {
  id: string;
  title: string;
  question: string;
  options: {
    value: number;
    label: string;
    color: string;
  }[];
}

interface SimulatorBaseProps {
  title: string;
  badge: string;
  description: string;
  questions: Question[];
  currentStep: number;
  onAnswer: (questionId: string, value: number) => void;
  onBack?: () => void;
  backgroundColor?: string;
  accentColor?: string;
  icon?: React.ReactNode;
}

const SimulatorBase: React.FC<SimulatorBaseProps> = ({
  title,
  badge,
  description,
  questions,
  currentStep,
  onAnswer,
  onBack,
  backgroundColor = "from-blue-50 via-indigo-50 to-purple-50",
  accentColor = "blue",
  icon
}) => {
  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${backgroundColor} p-6`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Badge className={`mb-4 bg-${accentColor}-100 text-${accentColor}-800`}>
            {badge}
          </Badge>
          <h1 className={`text-4xl font-bold text-${accentColor}-800 mb-4`}>
            {title}
          </h1>
          <p className={`text-xl text-${accentColor}-600 mb-6`}>
            {description}
          </p>
          <p className={`text-lg text-${accentColor}-600`}>
            Question {currentStep + 1} sur {questions.length}
          </p>
          <Progress value={progress} className="mt-4 max-w-md mx-auto" />
        </div>

        <Card className={`max-w-2xl mx-auto border-${accentColor}-200`}>
          <CardHeader className="text-center">
            {icon && (
              <div className={`w-16 h-16 bg-gradient-to-br from-${accentColor}-500 to-${accentColor}-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {icon}
              </div>
            )}
            <CardTitle className={`text-2xl text-${accentColor}-800`}>
              {currentQuestion.title}
            </CardTitle>
            <CardDescription className="text-lg">
              {currentQuestion.question}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={`w-full h-auto p-4 border-${accentColor}-200 hover:border-${accentColor}-400 hover:bg-${accentColor}-50`}
                onClick={() => onAnswer(currentQuestion.id, option.value)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${option.color}`}></div>
                  <span className="text-left">{option.label}</span>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {onBack && (
          <div className="text-center mt-8">
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimulatorBase;
