import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Heart, 
  Brain, 
  Calendar, 
  Target,
  TrendingUp,
  MessageCircle,
  Package,
  Coffee,
  Clock,
  CheckCircle,
  AlertTriangle,
  BookOpen
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const EmployeeDashboard = () => {
  const [wellbeingScore, setWellbeingScore] = useState(7.2);
  const [activeTab, setActiveTab] = useState('dashboard');
  const { toast } = useToast();

  const todayTasks = [
    { task: "Évaluation bien-être quotidienne", completed: true, time: "09:00" },
    { task: "Pause mindfulness", completed: true, time: "11:00" },
    { task: "Check-in équipe", completed: false, time: "14:00" },
    { task: "Exercice de respiration", completed: false, time: "16:00" },
  ];

  const weeklyGoals = [
    { goal: "5 pauses bien-être", current: 3, target: 5, category: "Bien-être" },
    { goal: "3 interactions positives", current: 2, target: 3, category: "Social" },
    { goal: "2h de formation", current: 1.5, target: 2, category: "Développement" },
  ];

  const recentActivities = [
    { title: "Session méditation guidée", date: "Hier", type: "Bien-être", impact: "Positif" },
    { title: "Feedback manager", date: "Il y a 2 jours", type: "Communication", impact: "Neutre" },
    { title: "Formation gestion stress", date: "Il y a 3 jours", type: "Apprentissage", impact: "Positif" },
  ];

  const handleQuickAction = (action: string) => {
    toast({
      title: "Action initiée",
      description: `${action} en cours...`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-teal-800 mb-2">
            Mon Espace Bien-être
          </h1>
          <p className="text-teal-600">
            Prenez soin de votre bien-être au travail au quotidien
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-teal-600">Score Bien-être</p>
                  <p className="text-3xl font-bold text-teal-800">{wellbeingScore}/10</p>
                </div>
                <Heart className="h-8 w-8 text-teal-500" />
              </div>
              <div className="mt-2">
                <Progress value={wellbeingScore * 10} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Streak Quotidien</p>
                  <p className="text-3xl font-bold text-blue-800">12 jours</p>
                </div>
                <Target className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Objectifs Semaine</p>
                  <p className="text-3xl font-bold text-green-800">7/10</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Prochaine Box</p>
                  <p className="text-lg font-bold text-orange-800">Dans 3 jours</p>
                </div>
                <Package className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="wellbeing">Bien-être</TabsTrigger>
            <TabsTrigger value="goals">Objectifs</TabsTrigger>
            <TabsTrigger value="activities">Activités</TabsTrigger>
            <TabsTrigger value="resources">Ressources</TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Programme du Jour
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {todayTasks.map((task, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                        <div className={`w-4 h-4 rounded-full ${task.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                        <div className="flex-1">
                          <p className={`text-sm ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                            {task.task}
                          </p>
                          <p className="text-xs text-gray-500">{task.time}</p>
                        </div>
                        {!task.completed && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleQuickAction(task.task)}
                          >
                            Faire
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Évolution Cette Semaine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Moral général</span>
                        <span>+15%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Niveau de stress</span>
                        <span>-20%</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Satisfaction travail</span>
                        <span>+10%</span>
                      </div>
                      <Progress value={80} className="h-2" />
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
                  <Link to="/employee-checkin">
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col gap-2 w-full"
                    >
                      <Brain className="w-6 h-6" />
                      <span className="text-sm">Check-in</span>
                    </Button>
                  </Link>
                  
                  <Link to="/employee-wellness-activities">
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col gap-2 w-full"
                    >
                      <Coffee className="w-6 h-6" />
                      <span className="text-sm">Activités Bien-être</span>
                    </Button>
                  </Link>
                  
                  <Link to="/employee-team-space">
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col gap-2 w-full"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span className="text-sm">Espace Équipe</span>
                    </Button>
                  </Link>
                  
                  <Link to="/employee-personal-space">
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col gap-2 w-full"
                    >
                      <User className="w-6 h-6" />
                      <span className="text-sm">Espace Personnel</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bien-être */}
          <TabsContent value="wellbeing" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Évaluation Quotidienne</CardTitle>
                  <CardDescription>Comment vous sentez-vous aujourd'hui ?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-5 gap-2">
                      {[1, 2, 3, 4, 5].map((score) => (
                        <Button
                          key={score}
                          variant={score <= Math.floor(wellbeingScore / 2) ? "default" : "outline"}
                          className="h-12"
                          onClick={() => setWellbeingScore(score * 2)}
                        >
                          {score}
                        </Button>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      Score actuel: {wellbeingScore}/10
                    </p>
                    <Button className="w-full">
                      Sauvegarder l'évaluation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercices Recommandés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" onClick={() => handleQuickAction("Respiration guidée")}>
                      <Heart className="w-4 h-4 mr-2" />
                      Respiration guidée (5 min)
                    </Button>
                    <Button variant="outline" className="w-full justify-start" onClick={() => handleQuickAction("Méditation")}>
                      <Brain className="w-4 h-4 mr-2" />
                      Méditation express (3 min)
                    </Button>
                    <Button variant="outline" className="w-full justify-start" onClick={() => handleQuickAction("Étirements")}>
                      <Coffee className="w-4 h-4 mr-2" />
                      Étirements bureau (2 min)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Objectifs */}
          <TabsContent value="goals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Objectifs de la Semaine</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {weeklyGoals.map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{goal.goal}</span>
                        <Badge variant="secondary">{goal.category}</Badge>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{goal.current}/{goal.target}</span>
                        <span>{Math.round((goal.current / goal.target) * 100)}%</span>
                      </div>
                      <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activités */}
          <TabsContent value="activities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Historique des Activités</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{activity.title}</h4>
                        <p className="text-sm text-gray-600">{activity.date}</p>
                        <Badge variant="outline" className="mt-1">{activity.type}</Badge>
                      </div>
                      <Badge 
                        variant={activity.impact === 'Positif' ? 'default' : 'secondary'}
                      >
                        {activity.impact}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ressources */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/employee-wellness-activities">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      Activités Bien-être
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Découvrez des activités pour améliorer votre bien-être
                    </p>
                    <Button variant="outline" size="sm">
                      Accéder
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/employee-team-space">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                      Espace Équipe
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Partagez avec vos collègues et renforcez les liens
                    </p>
                    <Button variant="outline" size="sm">
                      Rejoindre
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/employee-customization">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="w-5 h-5 text-purple-600" />
                      Personnalisation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Personnalisez votre expérience utilisateur
                    </p>
                    <Button variant="outline" size="sm">
                      Configurer
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
