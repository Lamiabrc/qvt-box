import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Brain, 
  Heart, 
  Clock,
  Target,
  Activity,
  Bell,
  Filter,
  Download,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Calendar,
  Mail,
  Zap
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import UserAvatar from './UserAvatar';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  qvtScore: number;
  lastEvaluation: Date;
  trend: 'up' | 'down' | 'stable';
  riskLevel: 'low' | 'medium' | 'high';
  avatar?: string;
}

interface DepartmentStats {
  name: string;
  averageScore: number;
  memberCount: number;
  riskDistribution: {
    low: number;
    medium: number;
    high: number;
  };
  trend: 'up' | 'down' | 'stable';
}

interface EmotionalAlert {
  id: string;
  employeeName: string;
  type: 'burnout_risk' | 'stress_increase' | 'disengagement' | 'improvement';
  severity: 'low' | 'medium' | 'high' | 'urgent';
  message: string;
  timestamp: Date;
  actionRequired: boolean;
  department: string;
}

const HREmotionalHeatmap: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'quarter'>('month');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [alerts, setAlerts] = useState<EmotionalAlert[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Données mock pour la démonstration
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Marie Dupont',
      role: 'Développeuse Senior',
      department: 'IT',
      qvtScore: 4,
      lastEvaluation: new Date(),
      trend: 'down',
      riskLevel: 'high'
    },
    {
      id: '2',
      name: 'Jean Martin',
      role: 'Chef de projet',
      department: 'Management',
      qvtScore: 11,
      lastEvaluation: new Date(),
      trend: 'stable',
      riskLevel: 'low'
    },
    {
      id: '3',
      name: 'Sophie Bernard',
      role: 'Designer UX',
      department: 'Design',
      qvtScore: 14,
      lastEvaluation: new Date(),
      trend: 'up',
      riskLevel: 'low'
    },
    {
      id: '4',
      name: 'Thomas Leroy',
      role: 'Commercial',
      department: 'Sales',
      qvtScore: 7,
      lastEvaluation: new Date(),
      trend: 'down',
      riskLevel: 'medium'
    },
    {
      id: '5',
      name: 'Emma Moreau',
      role: 'RH Generalist',
      department: 'HR',
      qvtScore: 13,
      lastEvaluation: new Date(),
      trend: 'up',
      riskLevel: 'low'
    },
    {
      id: '6',
      name: 'Lucas Simon',
      role: 'Analyste',
      department: 'Finance',
      qvtScore: 9,
      lastEvaluation: new Date(),
      trend: 'stable',
      riskLevel: 'medium'
    }
  ];

  const departmentStats: DepartmentStats[] = [
    {
      name: 'IT',
      averageScore: 8.2,
      memberCount: 12,
      riskDistribution: { low: 7, medium: 3, high: 2 },
      trend: 'down'
    },
    {
      name: 'Sales',
      averageScore: 9.5,
      memberCount: 8,
      riskDistribution: { low: 6, medium: 2, high: 0 },
      trend: 'up'
    },
    {
      name: 'Design',
      averageScore: 12.1,
      memberCount: 5,
      riskDistribution: { low: 5, medium: 0, high: 0 },
      trend: 'up'
    },
    {
      name: 'HR',
      averageScore: 10.8,
      memberCount: 4,
      riskDistribution: { low: 3, medium: 1, high: 0 },
      trend: 'stable'
    }
  ];

  const emotionalAlerts: EmotionalAlert[] = [
    {
      id: '1',
      employeeName: 'Marie Dupont',
      type: 'burnout_risk',
      severity: 'urgent',
      message: 'Score QVT en forte baisse (4/15). Risque de burnout détecté.',
      timestamp: new Date(),
      actionRequired: true,
      department: 'IT'
    },
    {
      id: '2',
      employeeName: 'Thomas Leroy',
      type: 'stress_increase',
      severity: 'medium',
      message: 'Augmentation du stress détectée ces 2 dernières semaines.',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      actionRequired: true,
      department: 'Sales'
    },
    {
      id: '3',
      employeeName: 'Sophie Bernard',
      type: 'improvement',
      severity: 'low',
      message: 'Amélioration significative du bien-être (14/15).',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      actionRequired: false,
      department: 'Design'
    }
  ];

  useEffect(() => {
    setAlerts(emotionalAlerts);
  }, []);

  const getScoreColor = (score: number) => {
    if (score <= 3) return 'emotion-burnout';
    if (score <= 6) return 'emotion-stress';
    if (score <= 9) return 'emotion-tension';
    if (score <= 11) return 'emotion-neutral';
    if (score <= 13) return 'emotion-content';
    if (score === 14) return 'emotion-fulfilled';
    return 'emotion-passion';
  };

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'burnout_risk': return <AlertTriangle className="w-4 h-4" />;
      case 'stress_increase': return <TrendingUp className="w-4 h-4" />;
      case 'disengagement': return <TrendingDown className="w-4 h-4" />;
      case 'improvement': return <CheckCircle className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const overallStats = {
    averageScore: teamMembers.reduce((sum, member) => sum + member.qvtScore, 0) / teamMembers.length,
    highRiskCount: teamMembers.filter(m => m.riskLevel === 'high').length,
    improvingCount: teamMembers.filter(m => m.trend === 'up').length,
    totalEmployees: teamMembers.length
  };

  return (
    <div className="space-y-6 p-6 bg-qvt-off-white min-h-screen">
      {/* En-tête avec KPIs globaux */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-montserrat font-bold text-qvt-soft-black mb-2">
            Observatoire Émotionnel RH
          </h1>
          <p className="text-qvt-soft-black/70 font-medium">
            Vue d'ensemble du bien-être de vos équipes en temps réel
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="border-qvt-teal text-qvt-teal">
            <Download className="w-4 h-4 mr-2" />
            Exporter
          </Button>
          <Button 
            onClick={() => setIsLoading(true)}
            className="qvt-gradient-primary text-white"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Actualiser
          </Button>
        </div>
      </div>

      {/* KPIs principaux */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="qvt-card border-l-4 border-qvt-teal">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-qvt-soft-black/70">Score QVT Moyen</p>
                <p className={`text-2xl font-bold ${getScoreColor(overallStats.averageScore)}`}>
                  {overallStats.averageScore.toFixed(1)}/15
                </p>
              </div>
              <Brain className="w-8 h-8 text-qvt-teal" />
            </div>
            <Progress value={(overallStats.averageScore / 15) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="qvt-card border-l-4 border-red-400">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-qvt-soft-black/70">Collaborateurs à Risque</p>
                <p className="text-2xl font-bold text-red-600">
                  {overallStats.highRiskCount}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-xs text-red-600 mt-2">Action immédiate requise</p>
          </CardContent>
        </Card>

        <Card className="qvt-card border-l-4 border-green-400">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-qvt-soft-black/70">En Amélioration</p>
                <p className="text-2xl font-bold text-green-600">
                  {overallStats.improvingCount}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-xs text-green-600 mt-2">+{Math.round((overallStats.improvingCount / overallStats.totalEmployees) * 100)}% de l'équipe</p>
          </CardContent>
        </Card>

        <Card className="qvt-card border-l-4 border-qvt-aqua">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-qvt-soft-black/70">Total Équipe</p>
                <p className="text-2xl font-bold text-qvt-teal">
                  {overallStats.totalEmployees}
                </p>
              </div>
              <Users className="w-8 h-8 text-qvt-aqua" />
            </div>
            <p className="text-xs text-qvt-aqua mt-2">Collaborateurs suivis</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="heatmap" className="space-y-4">
        <TabsList className="bg-white border border-qvt-teal/20 rounded-xl">
          <TabsTrigger value="heatmap" className="font-montserrat">Heatmap Équipe</TabsTrigger>
          <TabsTrigger value="alerts" className="font-montserrat">Alertes Temps Réel</TabsTrigger>
          <TabsTrigger value="departments" className="font-montserrat">Vue Départements</TabsTrigger>
          <TabsTrigger value="analytics" className="font-montserrat">Analytics Avancés</TabsTrigger>
        </TabsList>

        <TabsContent value="heatmap" className="space-y-4">
          <Card className="qvt-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-qvt-teal font-montserrat">
                <Activity className="w-5 h-5" />
                Cartographie Émotionnelle Temps Réel
              </CardTitle>
              <CardDescription>
                Visualisation des scores QVT par collaborateur avec indicateurs de tendance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="relative">
                    <UserAvatar 
                      qvtScore={member.qvtScore}
                      userName={member.name}
                      universe="enterprise"
                      isEditable={false}
                      size="lg"
                    />
                    <div className="mt-3 p-3 bg-white rounded-lg border border-qvt-teal/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-qvt-soft-black">
                          {member.role}
                        </span>
                        <Badge variant={member.riskLevel === 'high' ? 'destructive' : 'secondary'}>
                          {member.riskLevel}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-qvt-soft-black/70">
                        <span>{member.department}</span>
                        {member.trend === 'up' ? (
                          <TrendingUp className="w-3 h-3 text-green-500" />
                        ) : member.trend === 'down' ? (
                          <TrendingDown className="w-3 h-3 text-red-500" />
                        ) : (
                          <div className="w-3 h-3 bg-gray-400 rounded-full" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card className="qvt-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-qvt-teal font-montserrat">
                <Bell className="w-5 h-5" />
                Alertes Émotionnelles Temps Réel
              </CardTitle>
              <CardDescription>
                Notifications automatiques basées sur l'IA pour les changements significatifs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <Alert key={alert.id} className={`${getSeverityStyle(alert.severity)} border-l-4`}>
                    <div className="flex items-start gap-3">
                      {getTypeIcon(alert.type)}
                      <div className="flex-1">
                        <AlertTitle className="font-montserrat font-semibold">
                          {alert.employeeName} - {alert.department}
                        </AlertTitle>
                        <AlertDescription className="mt-1">
                          {alert.message}
                        </AlertDescription>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs opacity-70">
                            {alert.timestamp.toLocaleTimeString('fr-FR')}
                          </span>
                          {alert.actionRequired && (
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="text-xs">
                                <Mail className="w-3 h-3 mr-1" />
                                Contacter
                              </Button>
                              <Button size="sm" className="qvt-gradient-primary text-white text-xs">
                                <Heart className="w-3 h-3 mr-1" />
                                Recommander Box
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {departmentStats.map((dept) => (
              <Card key={dept.name} className="qvt-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between font-montserrat">
                    <span className="text-qvt-teal">{dept.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {dept.memberCount} personnes
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-qvt-soft-black">Score moyen</span>
                      <span className={`text-lg font-bold ${getScoreColor(dept.averageScore)}`}>
                        {dept.averageScore}/15
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-qvt-soft-black/70">
                        <span>Répartition des risques</span>
                      </div>
                      <div className="flex gap-1 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-green-400" 
                          style={{ width: `${(dept.riskDistribution.low / dept.memberCount) * 100}%` }}
                        />
                        <div 
                          className="bg-yellow-400" 
                          style={{ width: `${(dept.riskDistribution.medium / dept.memberCount) * 100}%` }}
                        />
                        <div 
                          className="bg-red-400" 
                          style={{ width: `${(dept.riskDistribution.high / dept.memberCount) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-green-600">{dept.riskDistribution.low} Bien</span>
                        <span className="text-yellow-600">{dept.riskDistribution.medium} Moyen</span>
                        <span className="text-red-600">{dept.riskDistribution.high} Risque</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card className="qvt-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-qvt-teal font-montserrat">
                <Target className="w-5 h-5" />
                Analytics Prédictifs IA
              </CardTitle>
              <CardDescription>
                Prédictions de burnout et recommandations d'actions préventives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-qvt-soft-black">Prédictions 30 jours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                      <span className="text-sm text-red-800">Risque de burnout</span>
                      <Badge variant="destructive">2 collaborateurs</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="text-sm text-yellow-800">Baisse d'engagement</span>
                      <Badge className="bg-yellow-500">4 collaborateurs</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-green-800">Amélioration attendue</span>
                      <Badge className="bg-green-500">6 collaborateurs</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-qvt-soft-black">Actions Recommandées</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start text-left">
                      <Zap className="w-4 h-4 mr-2" />
                      Organiser session bien-être équipe IT
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <Heart className="w-4 h-4 mr-2" />
                      Envoyer Box Anti-stress à Marie D.
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <Calendar className="w-4 h-4 mr-2" />
                      Planifier entretien Thomas L.
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HREmotionalHeatmap;