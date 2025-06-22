
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Brain, 
  Heart, 
  AlertTriangle,
  Calendar,
  Target,
  Activity,
  Smile
} from "lucide-react";

interface DashboardProps {
  universe: 'enterprise' | 'family';
}

const Dashboard = ({ universe }: DashboardProps) => {
  if (universe === 'enterprise') {
    return (
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Score QVT Moyen</p>
                  <p className="text-2xl font-bold text-teal-700">8.2/15</p>
                </div>
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-teal-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-600">+0.3 vs mois dernier</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Salariés Actifs</p>
                  <p className="text-2xl font-bold text-blue-700">247</p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <span className="text-gray-600">85% participation</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Alertes RPS</p>
                  <p className="text-2xl font-bold text-orange-700">12</p>
                </div>
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-600">-3 vs semaine dernière</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Box Livrées</p>
                  <p className="text-2xl font-bold text-purple-700">1,847</p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-2 text-sm">
                <Calendar className="w-4 h-4 text-gray-500 mr-1" />
                <span className="text-gray-600">Ce mois-ci</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Stress Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-teal-800">Analyse du Stress</CardTitle>
              <CardDescription>Répartition par service</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>IT & Tech</span>
                    <span className="font-medium">Élevé (7.8/10)</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Commercial</span>
                    <span className="font-medium">Modéré (5.2/10)</span>
                  </div>
                  <Progress value={52} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>RH</span>
                    <span className="font-medium">Faible (3.1/10)</span>
                  </div>
                  <Progress value={31} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Finance</span>
                    <span className="font-medium">Modéré (4.9/10)</span>
                  </div>
                  <Progress value={49} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-teal-800">Actions Recommandées</CardTitle>
              <CardDescription>Basées sur l'IA émotionnelle</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-red-800 text-sm">Priorité Élevée</p>
                  <p className="text-sm text-red-700">Déployer Box Burn-out pour l'équipe IT</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <Brain className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-orange-800 text-sm">Priorité Moyenne</p>
                  <p className="text-sm text-orange-700">Organiser séance team-building Commercial</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <Heart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-800 text-sm">Maintenir</p>
                  <p className="text-sm text-green-700">Reconduire Box Équilibre pour RH</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-teal-800">Activité Récente</CardTitle>
            <CardDescription>Dernières interactions et évaluations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                <Activity className="w-4 h-4 text-blue-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Marie D. (IT) a complété son évaluation</p>
                  <p className="text-xs text-gray-600">Score: 6/15 - Box Télétravail recommandée</p>
                </div>
                <Badge variant="secondary" className="text-xs">Il y a 2h</Badge>
              </div>
              
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                <Smile className="w-4 h-4 text-green-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Challenge "Pause Zen" terminé avec succès</p>
                  <p className="text-xs text-gray-600">32 participants - Score moyen: +2.1 points</p>
                </div>
                <Badge variant="secondary" className="text-xs">Hier</Badge>
              </div>
              
              <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Alerte RPS détectée - Équipe Commercial</p>
                  <p className="text-xs text-gray-600">3 salariés avec score &lt; 5/15</p>
                </div>
                <Badge variant="secondary" className="text-xs">Il y a 3h</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Family Dashboard
  return (
    <div className="space-y-6">
      {/* Family KPI Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Mood Score Famille</p>
                <p className="text-2xl font-bold text-purple-700">6.8/10</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">Amélioration cette semaine</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Profils Actifs</p>
                <p className="text-2xl font-bold text-blue-700">4</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-gray-600">Papa, Maman, Emma, Lucas</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Temps Écran Ados</p>
                <p className="text-2xl font-bold text-orange-700">4h12</p>
              </div>
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">-45min vs hier</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Activités Famille</p>
                <p className="text-2xl font-bold text-green-700">12</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 text-sm">
              <Calendar className="w-4 h-4 text-gray-500 mr-1" />
              <span className="text-gray-600">Cette semaine</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Family Analysis */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Individual Profiles */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-purple-800">Profils Individuels</CardTitle>
            <CardDescription>État émotionnel de chaque membre</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">P</div>
                <div className="flex-1">
                  <p className="font-medium text-blue-800">Papa</p>
                  <p className="text-sm text-blue-600">Stress léger - Charge mentale: 6/10</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-700">7.2</p>
                  <p className="text-xs text-blue-600">Mood</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">M</div>
                <div className="flex-1">
                  <p className="font-medium text-pink-800">Maman</p>
                  <p className="text-sm text-pink-600">Fatigue émotionnelle - Charge: 8/10</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-pink-700">5.8</p>
                  <p className="text-xs text-pink-600">Mood</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">E</div>
                <div className="flex-1">
                  <p className="font-medium text-purple-800">Emma (15 ans)</p>
                  <p className="text-sm text-purple-600">SafeZone active - Isolement: 4/10</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-purple-700">6.9</p>
                  <p className="text-xs text-purple-600">Mood</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">L</div>
                <div className="flex-1">
                  <p className="font-medium text-green-800">Lucas (13 ans)</p>
                  <p className="text-sm text-green-600">Équilibre digital - Joyeux</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-700">8.1</p>
                  <p className="text-xs text-green-600">Mood</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Family Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-purple-800">Recommandations IA</CardTitle>
            <CardDescription>Actions personnalisées pour votre famille</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-orange-800 text-sm">Priorité Maman</p>
                <p className="text-sm text-orange-700">Family Box Détente recommandée</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <Heart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-purple-800 text-sm">Suggestion Emma</p>
                <p className="text-sm text-purple-700">Activité parent-ado: Défi créatif</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <Smile className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-green-800 text-sm">Renforcement Lucas</p>
                <p className="text-sm text-green-700">Maintenir routine positive actuelle</p>
              </div>
            </div>

            <div className="mt-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Planifier Moment Famille
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Family Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg text-purple-800">Journal Familial</CardTitle>
          <CardDescription>Dernières interactions et moments partagés</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
              <Heart className="w-4 h-4 text-pink-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Moment gratitude partagé - Famille</p>
                <p className="text-xs text-gray-600">Emma a écrit: "Merci papa pour le petit-déj spécial"</p>
              </div>
              <Badge variant="secondary" className="text-xs">Il y a 1h</Badge>
            </div>
            
            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
              <Activity className="w-4 h-4 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Lucas a complété un défi digital detox</p>
                <p className="text-xs text-gray-600">2h sans écran - Récompense: sortie vélo</p>
              </div>
              <Badge variant="secondary" className="text-xs">Hier</Badge>
            </div>
            
            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
              <Brain className="w-4 h-4 text-purple-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">SafeZone Emma: Nouvelle confidence</p>
                <p className="text-xs text-gray-600">Espace sécurisé utilisé - Suggestion: dialogue parent</p>
              </div>
              <Badge variant="secondary" className="text-xs">Il y a 2 jours</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
