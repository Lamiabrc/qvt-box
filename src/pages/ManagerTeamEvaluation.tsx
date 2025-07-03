import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  ArrowLeft,
  Brain,
  Heart,
  Zap,
  Target,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ManagerTeamEvaluation = () => {
  const { toast } = useToast();
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  
  const teams = [
    { id: '1', name: 'Équipe Marketing', members: 8, lastEvaluation: '2024-01-15' },
    { id: '2', name: 'Équipe Développement', members: 12, lastEvaluation: '2024-01-10' },
    { id: '3', name: 'Équipe Commercial', members: 6, lastEvaluation: '2024-01-20' }
  ];

  const teamMetrics = {
    '1': {
      wellbeingScore: 75,
      burnoutRisk: 'Modéré',
      satisfaction: 82,
      alerts: 2,
      recommendations: [
        'Organiser des sessions de team building',
        'Optimiser la charge de travail',
        'Améliorer la communication interne'
      ]
    },
    '2': {
      wellbeingScore: 68,
      burnoutRisk: 'Élevé',
      satisfaction: 71,
      alerts: 4,
      recommendations: [
        'Intervention urgente sur la charge de travail',
        'Sessions de gestion du stress',
        'Révision des deadlines projet'
      ]
    },
    '3': {
      wellbeingScore: 85,
      burnoutRisk: 'Faible',
      satisfaction: 89,
      alerts: 0,
      recommendations: [
        'Maintenir les bonnes pratiques',
        'Partager les succès avec les autres équipes',
        'Continuer le monitoring régulier'
      ]
    }
  };

  const handleEvaluateTeam = (teamId: string) => {
    setSelectedTeam(teamId);
    toast({
      title: "Évaluation lancée",
      description: "Analyse des données de l'équipe en cours..."
    });
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Faible': return 'text-green-600';
      case 'Modéré': return 'text-yellow-600';
      case 'Élevé': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link to="/team-leader-dashboard">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Évaluation Équipe</h1>
                <p className="text-gray-600">Tableau de bord bien-être et QVT</p>
              </div>
            </div>
            <Badge className="bg-teal-100 text-teal-800">Manager Dashboard</Badge>
          </div>

          {/* Team Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {teams.map((team) => (
              <Card 
                key={team.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedTeam === team.id ? 'ring-2 ring-teal-500 bg-teal-50' : ''
                }`}
                onClick={() => handleEvaluateTeam(team.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Users className="w-8 h-8 text-teal-600" />
                    <Badge variant="outline">{team.members} membres</Badge>
                  </div>
                  <CardTitle className="text-lg">{team.name}</CardTitle>
                  <CardDescription>
                    Dernière évaluation: {team.lastEvaluation}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-teal-600 hover:bg-teal-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEvaluateTeam(team.id);
                    }}
                  >
                    Évaluer l'équipe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Metrics Dashboard */}
          {selectedTeam && teamMetrics[selectedTeam as keyof typeof teamMetrics] && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Résultats: {teams.find(t => t.id === selectedTeam)?.name}
                </h2>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <Card className="border-teal-200">
                    <CardContent className="p-6 text-center">
                      <Heart className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-teal-700">
                        {teamMetrics[selectedTeam as keyof typeof teamMetrics].wellbeingScore}%
                      </div>
                      <p className="text-sm text-gray-600">Score Bien-être</p>
                    </CardContent>
                  </Card>

                  <Card className="border-yellow-200">
                    <CardContent className="p-6 text-center">
                      <Brain className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                      <div className={`text-2xl font-bold ${getRiskColor(teamMetrics[selectedTeam as keyof typeof teamMetrics].burnoutRisk)}`}>
                        {teamMetrics[selectedTeam as keyof typeof teamMetrics].burnoutRisk}
                      </div>
                      <p className="text-sm text-gray-600">Risque Burn-out</p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200">
                    <CardContent className="p-6 text-center">
                      <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-700">
                        {teamMetrics[selectedTeam as keyof typeof teamMetrics].satisfaction}%
                      </div>
                      <p className="text-sm text-gray-600">Satisfaction</p>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200">
                    <CardContent className="p-6 text-center">
                      <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-red-700">
                        {teamMetrics[selectedTeam as keyof typeof teamMetrics].alerts}
                      </div>
                      <p className="text-sm text-gray-600">Alertes Actives</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Progress Bars */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Indicateurs Détaillés
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Bien-être Global</span>
                          <span className="text-sm">{teamMetrics[selectedTeam as keyof typeof teamMetrics].wellbeingScore}%</span>
                        </div>
                        <Progress value={teamMetrics[selectedTeam as keyof typeof teamMetrics].wellbeingScore} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Satisfaction</span>
                          <span className="text-sm">{teamMetrics[selectedTeam as keyof typeof teamMetrics].satisfaction}%</span>
                        </div>
                        <Progress value={teamMetrics[selectedTeam as keyof typeof teamMetrics].satisfaction} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Communication</span>
                          <span className="text-sm">78%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Motivation</span>
                          <span className="text-sm">82%</span>
                        </div>
                        <Progress value={82} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recommendations */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Recommandations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {teamMetrics[selectedTeam as keyof typeof teamMetrics].recommendations.map((rec, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-sm">{rec}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Link to="/shop?category=manager">
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      <Heart className="w-4 h-4 mr-2" />
                      Box QVT Manager Recommandées
                    </Button>
                  </Link>
                  <Button variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Planifier une Réunion Équipe
                  </Button>
                  <Button variant="outline">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Rapport Détaillé
                  </Button>
                </div>
              </div>
            </div>
          )}

          {!selectedTeam && (
            <Card className="text-center py-12">
              <CardContent>
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Sélectionnez une équipe à évaluer
                </h3>
                <p className="text-gray-500">
                  Choisissez une équipe ci-dessus pour voir son tableau de bord bien-être
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagerTeamEvaluation;