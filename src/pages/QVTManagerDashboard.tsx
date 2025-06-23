
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  Shield, 
  Users,
  Building2,
  Target,
  FileText,
  Calendar,
  MessageSquare,
  Settings,
  Download,
  Eye,
  Plus
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";

const QVTManagerDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { toast } = useToast();

  const companyMetrics = {
    globalWellbeing: 7.3,
    riskLevel: "Moyen",
    participation: 78,
    satisfaction: 82,
    burnoutRisk: 15,
    absenteeism: 3.2,
    turnover: 8.5
  };

  const departments = [
    { name: "IT", employees: 45, wellbeing: 7.8, alerts: 2, trend: "up" },
    { name: "Marketing", employees: 20, wellbeing: 6.9, alerts: 4, trend: "stable" },
    { name: "RH", employees: 12, wellbeing: 8.1, alerts: 1, trend: "up" },
    { name: "Finance", employees: 18, wellbeing: 6.2, alerts: 6, trend: "down" },
    { name: "Ventes", employees: 35, wellbeing: 7.5, alerts: 3, trend: "up" }
  ];

  const riskFactors = [
    { factor: "Surcharge de travail", level: "Élevé", affected: 28, trend: "+5%" },
    { factor: "Communication défaillante", level: "Moyen", affected: 15, trend: "-2%" },
    { factor: "Manque de reconnaissance", level: "Faible", affected: 8, trend: "-8%" },
    { factor: "Conflits interpersonnels", level: "Moyen", affected: 12, trend: "+3%" }
  ];

  const recentActions = [
    { title: "Formation gestion du stress", date: "La semaine dernière", participants: 25, status: "Terminé" },
    { title: "Enquête satisfaction interne", date: "En cours", participants: 89, status: "Active" },
    { title: "Réaménagement open space", date: "Le mois prochain", participants: 45, status: "Planifié" }
  ];

  const handleQuickAction = (action: string) => {
    toast({
      title: "Action initiée",
      description: `${action} en cours...`
    });
  };

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (trend === 'down') return <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />;
    return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'Élevé': return 'text-red-600 bg-red-100';
      case 'Moyen': return 'text-orange-600 bg-orange-100';
      case 'Faible': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-800 mb-2">
            Dashboard Responsable QVT
          </h1>
          <p className="text-indigo-600">
            Pilotage stratégique de la qualité de vie au travail
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-indigo-600">QVT Globale</p>
                  <p className="text-3xl font-bold text-indigo-800">{companyMetrics.globalWellbeing}/10</p>
                </div>
                <Shield className="h-8 w-8 text-indigo-500" />
              </div>
              <div className="mt-2">
                <Progress value={companyMetrics.globalWellbeing * 10} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Risque Burn-out</p>
                  <p className="text-3xl font-bold text-orange-800">{companyMetrics.burnoutRisk}%</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Satisfaction</p>
                  <p className="text-3xl font-bold text-green-800">{companyMetrics.satisfaction}%</p>
                </div>
                <Users className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Participation</p>
                  <p className="text-3xl font-bold text-blue-800">{companyMetrics.participation}%</p>
                </div>
                <Target className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="departments">Départements</TabsTrigger>
            <TabsTrigger value="risks">Risques</TabsTrigger>
            <TabsTrigger value="actions">Actions</TabsTrigger>
            <TabsTrigger value="reports">Rapports</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Indicateurs Clés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Absentéisme</span>
                      <span className="font-semibold">{companyMetrics.absenteeism}%</span>
                    </div>
                    <Progress value={companyMetrics.absenteeism * 10} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Turnover</span>
                      <span className="font-semibold">{companyMetrics.turnover}%</span>
                    </div>
                    <Progress value={companyMetrics.turnover * 5} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Satisfaction globale</span>
                      <span className="font-semibold">{companyMetrics.satisfaction}%</span>
                    </div>
                    <Progress value={companyMetrics.satisfaction} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    Alertes Prioritaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <p className="font-medium text-red-800">Département Finance</p>
                      <p className="text-sm text-red-600">Bien-être en baisse - 6 alertes actives</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <p className="font-medium text-orange-800">Surcharge de travail généralisée</p>
                      <p className="text-sm text-orange-600">28 employés concernés (+5% ce mois)</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                      <p className="font-medium text-yellow-800">Enquête satisfaction en cours</p>
                      <p className="text-sm text-yellow-600">89 réponses sur 130 attendues</p>
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
                    onClick={() => handleQuickAction("Nouveau rapport")}
                  >
                    <FileText className="w-6 h-6" />
                    <span className="text-sm">Générer Rapport</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col gap-2"
                    onClick={() => handleQuickAction("Nouvelle enquête")}
                  >
                    <MessageSquare className="w-6 h-6" />
                    <span className="text-sm">Lancer Enquête</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col gap-2"
                    onClick={() => handleQuickAction("Planifier action")}
                  >
                    <Calendar className="w-6 h-6" />
                    <span className="text-sm">Planifier Action</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-20 flex flex-col gap-2"
                    onClick={() => handleQuickAction("Analyser tendances")}
                  >
                    <TrendingUp className="w-6 h-6" />
                    <span className="text-sm">Analyser Tendances</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Départements */}
          <TabsContent value="departments" className="space-y-6">
            <div className="grid gap-4">
              {departments.map((dept) => (
                <Card key={dept.name}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{dept.name}</h3>
                          <p className="text-sm text-gray-600">{dept.employees} employés</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Bien-être moyen</p>
                          <p className="text-lg font-bold">{dept.wellbeing}/10</p>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Alertes</p>
                          <div className="flex items-center gap-1">
                            <p className="text-lg font-bold">{dept.alerts}</p>
                            {getTrendIcon(dept.trend)}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleQuickAction(`Analyser ${dept.name}`)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Analyser
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => handleQuickAction(`Action ${dept.name}`)}
                          >
                            Agir
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Risques */}
          <TabsContent value="risks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Facteurs de Risque Identifiés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskFactors.map((risk, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{risk.factor}</h4>
                        <p className="text-sm text-gray-600">{risk.affected} employés concernés</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge className={getRiskLevelColor(risk.level)}>
                          {risk.level}
                        </Badge>
                        <span className={`text-sm font-medium ${
                          risk.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {risk.trend}
                        </span>
                        <Button size="sm" onClick={() => handleQuickAction(`Traiter ${risk.factor}`)}>
                          Traiter
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Actions */}
          <TabsContent value="actions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Actions QVT</h3>
              <Button onClick={() => handleQuickAction("Nouvelle action")}>
                <Plus className="w-4 h-4 mr-2" />
                Nouvelle Action
              </Button>
            </div>
            
            <div className="grid gap-4">
              {recentActions.map((action, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{action.title}</h4>
                        <p className="text-sm text-gray-600">{action.date}</p>
                        <p className="text-sm text-gray-500">{action.participants} participants</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={
                            action.status === 'Terminé' ? 'default' :
                            action.status === 'Active' ? 'destructive' : 'secondary'
                          }
                        >
                          {action.status}
                        </Badge>
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

          {/* Rapports */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Rapport Mensuel QVT</CardTitle>
                  <CardDescription>Synthèse complète du mois</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleQuickAction("Générer rapport mensuel")}>
                      <FileText className="w-4 h-4 mr-1" />
                      Générer
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Télécharger
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Analyse des Risques</CardTitle>
                  <CardDescription>Facteurs de risque détaillés</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleQuickAction("Analyser risques")}>
                      <BarChart3 className="w-4 h-4 mr-1" />
                      Analyser
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Exporter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Tableau de Bord RH</CardTitle>
                  <CardDescription>Métriques pour la direction</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleQuickAction("Préparer tableau de bord")}>
                      <Eye className="w-4 h-4 mr-1" />
                      Préparer
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Partager
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Paramètres */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configuration QVT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" onClick={() => handleQuickAction("Configurer seuils d'alerte")}>
                      Seuils d'alerte
                    </Button>
                    <Button variant="outline" onClick={() => handleQuickAction("Gérer questionnaires")}>
                      Questionnaires
                    </Button>
                    <Button variant="outline" onClick={() => handleQuickAction("Paramètres notifications")}>
                      Notifications
                    </Button>
                    <Button variant="outline" onClick={() => handleQuickAction("Gestion utilisateurs")}>
                      Utilisateurs
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default QVTManagerDashboard;
