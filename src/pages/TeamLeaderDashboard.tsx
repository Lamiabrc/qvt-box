
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  MessageCircle,
  Calendar,
  Target,
  BarChart3,
  Settings,
  Bell,
  Heart,
  Clock,
  Shield
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";

const TeamLeaderDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();

  const teamMembers = [
    { name: "Marie Dubois", role: "Développeuse", wellbeing: 8.2, status: "good", alerts: 0, lastCheck: "Aujourd'hui" },
    { name: "Pierre Martin", role: "Designer", wellbeing: 6.5, status: "warning", alerts: 1, lastCheck: "Hier" },
    { name: "Sophie Bernard", role: "Chef de projet", wellbeing: 7.8, status: "good", alerts: 0, lastCheck: "Aujourd'hui" },
    { name: "Thomas Petit", role: "Analyste", wellbeing: 5.2, status: "alert", alerts: 3, lastCheck: "Il y a 3 jours" },
    { name: "Julie Moreau", role: "QA", wellbeing: 7.1, status: "good", alerts: 0, lastCheck: "Aujourd'hui" },
  ];

  const teamMetrics = {
    averageWellbeing: 7.0,
    participation: 85,
    totalAlerts: 4,
    teamMorale: 75,
    productivity: 88,
    cohesion: 82
  };

  const recentAlerts = [
    { member: "Thomas Petit", type: "Stress élevé", severity: "high", time: "Il y a 2h" },
    { member: "Pierre Martin", type: "Baisse motivation", severity: "medium", time: "Hier" },
    { member: "Sophie Bernard", type: "Surcharge travail", severity: "low", time: "Il y a 2 jours" },
  ];

  const teamActivities = [
    { title: "Réunion bien-être équipe", date: "Demain 14h", participants: 5, type: "Planifié" },
    { title: "Atelier gestion stress", date: "Vendredi 16h", participants: 4, type: "Proposé" },
    { title: "Team building", date: "La semaine prochaine", participants: 6, type: "En cours" },
  ];

  const handleQuickAction = (action: string, member?: string) => {
    toast({
      title: "Action initiée",
      description: member ? `${action} pour ${member}` : action
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-orange-600 bg-orange-100';
      case 'alert': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Dashboard Chef d'Équipe
          </h1>
          <p className="text-blue-600">
            Pilotez le bien-être et la performance de votre équipe
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Bien-être Équipe</p>
                  <p className="text-3xl font-bold text-blue-800">{teamMetrics.averageWellbeing}/10</p>
                </div>
                <Heart className="h-8 w-8 text-blue-500" />
              </div>
              <div className="mt-2">
                <Progress value={teamMetrics.averageWellbeing * 10} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Participation</p>
                  <p className="text-3xl font-bold text-green-800">{teamMetrics.participation}%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Alertes Actives</p>
                  <p className="text-3xl font-bold text-orange-800">{teamMetrics.totalAlerts}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">Cohésion</p>
                  <p className="text-3xl font-bold text-purple-800">{teamMetrics.cohesion}%</p>
                </div>
                <Users className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="team">Mon Équipe</TabsTrigger>
            <TabsTrigger value="alerts">Alertes</TabsTrigger>
            <TabsTrigger value="activities">Activités</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Tendances de l'Équipe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Moral général</span>
                        <span>{teamMetrics.teamMorale}%</span>
                      </div>
                      <Progress value={teamMetrics.teamMorale} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Productivité</span>
                        <span>{teamMetrics.productivity}%</span>
                      </div>
                      <Progress value={teamMetrics.productivity} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Cohésion d'équipe</span>
                        <span>{teamMetrics.cohesion}%</span>
                      </div>
                      <Progress value={teamMetrics.cohesion} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Actions Prioritaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <div className="flex-1">
                        <p className="font-medium text-red-800">Thomas Petit - Attention requise</p>
                        <p className="text-sm text-red-600">3 alertes actives</p>
                      </div>
                      <Button size="sm" onClick={() => handleQuickAction("Contacter", "Thomas Petit")}>
                        Contacter
                      </Button>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <div className="flex-1">
                        <p className="font-medium text-orange-800">Réunion bien-être planifiée</p>
                        <p className="text-sm text-orange-600">Demain 14h</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Préparer
                      </Button>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      <div className="flex-1">
                        <p className="font-medium text-blue-800">Rapport mensuel à préparer</p>
                        <p className="text-sm text-blue-600">Échéance vendredi</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Générer
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Actions Rapides */}
            <Card>
              <CardHeader>
                <CardTitle>Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col gap-2"
                    onClick={() => handleQuickAction("Check-in équipe")}
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-sm">Check-in Équipe</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col gap-2"
                    onClick={() => handleQuickAction("Planifier activité")}
                  >
                    <Calendar className="w-6 h-6" />
                    <span className="text-sm">Planifier Activité</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col gap-2"
                    onClick={() => handleQuickAction("Rapport bien-être")}
                  >
                    <BarChart3 className="w-6 h-6" />
                    <span className="text-sm">Rapport</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col gap-2"
                    onClick={() => handleQuickAction("Paramètres équipe")}
                  >
                    <Settings className="w-6 h-6" />
                    <span className="text-sm">Paramètres</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mon Équipe */}
          <TabsContent value="team" className="space-y-6">
            <div className="grid gap-4">
              {teamMembers.map((member) => (
                <Card key={member.name}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.role}</p>
                          <p className="text-xs text-gray-500">Dernière éval: {member.lastCheck}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Bien-être</p>
                          <p className="text-lg font-bold">{member.wellbeing}/10</p>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <Badge 
                            className={getStatusColor(member.status)}
                          >
                            {member.status === 'good' ? 'Bon' : member.status === 'warning' ? 'Attention' : 'Alerte'}
                          </Badge>
                          {member.alerts > 0 && (
                            <Badge variant="destructive">
                              {member.alerts} alerte(s)
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleQuickAction("Voir détails", member.name)}
                          >
                            Détails
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => handleQuickAction("Contacter", member.name)}
                          >
                            Contacter
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Alertes */}
          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-red-600" />
                  Alertes Récentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className={`w-5 h-5 ${
                          alert.severity === 'high' ? 'text-red-600' :
                          alert.severity === 'medium' ? 'text-orange-600' : 'text-yellow-600'
                        }`} />
                        <div>
                          <h4 className="font-medium">{alert.member}</h4>
                          <p className="text-sm text-gray-600">{alert.type}</p>
                          <p className="text-xs text-gray-500">{alert.time}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Traiter
                        </Button>
                        <Button size="sm">
                          Contacter
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activités */}
          <TabsContent value="activities" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Activités d'Équipe</h3>
              <Button onClick={() => handleQuickAction("Nouvelle activité")}>
                Planifier une activité
              </Button>
            </div>
            
            <div className="grid gap-4">
              {teamActivities.map((activity, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{activity.title}</h4>
                        <p className="text-sm text-gray-600">{activity.date}</p>
                        <p className="text-sm text-gray-500">{activity.participants} participants</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{activity.type}</Badge>
                        <Button size="sm" variant="outline">
                          Gérer
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance de l'Équipe</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                      <h3 className="text-2xl font-bold text-blue-800">+15%</h3>
                      <p className="text-blue-600">Amélioration du bien-être ce mois</p>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                      <h3 className="text-2xl font-bold text-green-800">92%</h3>
                      <p className="text-green-600">Taux de participation aux activités</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommandations IA</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">
                        Organiser un team building
                      </p>
                      <p className="text-xs text-blue-600">
                        Basé sur l'analyse de cohésion d'équipe
                      </p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm font-medium text-orange-800">
                        Session gestion du stress recommandée
                      </p>
                      <p className="text-xs text-orange-600">
                        Augmentation détectée du niveau de stress
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium text-green-800">
                        Féliciter l'équipe pour les résultats
                      </p>
                      <p className="text-xs text-green-600">
                        Motivation en hausse ce mois
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeamLeaderDashboard;
