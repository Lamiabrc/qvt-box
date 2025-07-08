
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Building2, Users, ArrowLeft } from "lucide-react";
import FamilyQuestionnaire from "@/components/FamilyQuestionnaire";
import EnterpriseQuestionnaire from "@/components/EnterpriseQuestionnaire";

const QuestionnaireSelector = () => {
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState<'family' | 'enterprise' | null>(null);
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
  };

  const handleReset = () => {
    setSelectedQuestionnaire(null);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="max-w-lg mx-auto text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Merci pour votre participation !
            </h2>
            <p className="text-gray-600 mb-6">
              Vos réponses nous aident à mieux comprendre vos besoins et à développer des solutions adaptées.
            </p>
            <Button onClick={handleReset} className="bg-teal-600 hover:bg-teal-700">
              Faire un autre questionnaire
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (selectedQuestionnaire === 'family') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 p-4">
        <div className="container mx-auto py-8">
          <Button 
            variant="outline" 
            onClick={() => setSelectedQuestionnaire(null)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au choix
          </Button>
          <FamilyQuestionnaire onComplete={handleComplete} />
        </div>
      </div>
    );
  }

  if (selectedQuestionnaire === 'enterprise') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 p-4">
        <div className="container mx-auto py-8">
          <Button 
            variant="outline" 
            onClick={() => setSelectedQuestionnaire(null)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au choix
          </Button>
          <EnterpriseQuestionnaire onComplete={handleComplete} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Questionnaires d'Étude de Marché
          </h1>
          <p className="text-xl text-gray-600">
            Aidez-nous à mieux comprendre vos besoins en répondant à 5 questions simples
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-purple-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-800">Questionnaire Famille</CardTitle>
              <p className="text-purple-600">
                Parents, ados, familles - Charge mentale et bien-être émotionnel
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Charge mentale familiale</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Communication émotionnelle</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Solutions bien-être</span>
                </div>
              </div>
              <Button 
                onClick={() => setSelectedQuestionnaire('family')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Commencer le questionnaire famille
              </Button>
            </CardContent>
          </Card>

          <Card className="border-teal-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-teal-800">Questionnaire Entreprise</CardTitle>
              <p className="text-teal-600">
                RH, Managers, CSE - Qualité de vie au travail et bien-être collaborateurs
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  <span className="text-sm">Stress des collaborateurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-teal-600" />
                  <span className="text-sm">Outils QVT actuels</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  <span className="text-sm">Solutions innovantes</span>
                </div>
              </div>
              <Button 
                onClick={() => setSelectedQuestionnaire('enterprise')}
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white"
              >
                Commencer le questionnaire entreprise
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireSelector;
