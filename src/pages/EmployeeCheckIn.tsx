
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Brain, Users, Clock, Target, TrendingUp, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";

const EmployeeCheckIn = () => {
  const { toast } = useToast();
  const [satisfaction, setSatisfaction] = useState<number>(5);
  const [energy, setEnergy] = useState<number>(5);
  const [stress, setStress] = useState<number>(5);
  const [workload, setWorkload] = useState<number>(5);
  const [teamwork, setTeamwork] = useState<number>(5);
  const [productivity, setProductivity] = useState<number>(5);
  const [balance, setBalance] = useState<number>(5);
  const [notes, setNotes] = useState<string>('');

  const handleSubmit = () => {
    toast({
      title: "Évaluation enregistrée !",
      description: "Merci pour votre retour sur votre bien-être au travail."
    });
  };

  const getSatisfactionEmoji = (value: number) => {
    if (value <= 2) return "😞";
    if (value <= 4) return "😐";
    if (value <= 6) return "🙂";
    if (value <= 8) return "😊";
    return "😄";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Check-in Professionnel</Badge>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            <Briefcase className="w-12 h-12 inline-block mr-4" />
            Comment se passe votre journée de travail ?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prenez un moment pour évaluer votre bien-être professionnel
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Satisfaction au travail */}
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Briefcase className="w-6 h-6" />
                Satisfaction au travail {getSatisfactionEmoji(satisfaction)}
              </CardTitle>
              <CardDescription>Comment vous sentez-vous dans votre travail aujourd'hui ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={[satisfaction]}
                onValueChange={(value) => setSatisfaction(value[0])}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Très insatisfait(e)</span>
                <span className="font-medium">{satisfaction}/10</span>
                <span>Très satisfait(e)</span>
              </div>
            </CardContent>
          </Card>

          {/* Niveau d'énergie */}
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Brain className="w-6 h-6" />
                Niveau d'énergie
              </CardTitle>
              <CardDescription>Avez-vous l'énergie nécessaire pour vos tâches ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={[energy]}
                onValueChange={(value) => setEnergy(value[0])}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Épuisé(e)</span>
                <span className="font-medium">{energy}/10</span>
                <span>Plein d'énergie</span>
              </div>
            </CardContent>
          </Card>

          {/* Niveau de stress */}
          <Card className="border-red-200 bg-gradient-to-r from-red-50 to-pink-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <Brain className="w-6 h-6" />
                Niveau de stress
              </CardTitle>
              <CardDescription>Vous sentez-vous stressé(e) ou sous pression ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={[stress]}
                onValueChange={(value) => setStress(value[0])}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Très stressé(e)</span>
                <span className="font-medium">{stress}/10</span>
                <span>Très détendu(e)</span>
              </div>
            </CardContent>
          </Card>

          {/* Charge de travail */}
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-violet-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Clock className="w-6 h-6" />
                Charge de travail
              </CardTitle>
              <CardDescription>Comment percevez-vous votre charge de travail aujourd'hui ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={[workload]}
                onValueChange={(value) => setWorkload(value[0])}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Très élevée</span>
                <span className="font-medium">{workload}/10</span>
                <span>Très gérable</span>
              </div>
            </CardContent>
          </Card>

          {/* Collaboration équipe */}
          <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Users className="w-6 h-6" />
                Collaboration d'équipe
              </CardTitle>
              <CardDescription>Comment se passent les interactions avec vos collègues ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={[teamwork]}
                onValueChange={(value) => setTeamwork(value[0])}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Difficile</span>
                <span className="font-medium">{teamwork}/10</span>
                <span>Excellente</span>
              </div>
            </CardContent>
          </Card>

          {/* Productivité */}
          <Card className="border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-teal-800">
                <Target className="w-6 h-6" />
                Productivité
              </CardTitle>
              <CardDescription>Vous sentez-vous productif(ve) aujourd'hui ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={[productivity]}
                onValueChange={(value) => setProductivity(value[0])}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Peu productif(ve)</span>
                <span className="font-medium">{productivity}/10</span>
                <span>Très productif(ve)</span>
              </div>
            </CardContent>
          </Card>

          {/* Équilibre vie pro/perso */}
          <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-indigo-800">
                <Coffee className="w-6 h-6" />
                Équilibre vie pro/perso
              </CardTitle>
              <CardDescription>Arrivez-vous à équilibrer travail et vie personnelle ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={[balance]}
                onValueChange={(value) => setBalance(value[0])}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Déséquilibré</span>
                <span className="font-medium">{balance}/10</span>
                <span>Parfait équilibre</span>
              </div>
            </CardContent>
          </Card>

          {/* Notes professionnelles */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-800">Commentaires</CardTitle>
              <CardDescription>Souhaitez-vous ajouter des commentaires sur votre journée de travail ?</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Partagez vos réflexions sur votre journée de travail..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[100px]"
              />
            </CardContent>
          </Card>

          {/* Boutons d'action */}
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 text-lg"
            >
              Enregistrer mon évaluation
            </Button>
            <Link to="/employee-dashboard">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg">
                Retour au dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCheckIn;
