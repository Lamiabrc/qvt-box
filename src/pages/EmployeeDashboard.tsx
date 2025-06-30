
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
  Users, 
  Calendar,
  TrendingUp,
  Award,
  MessageCircle,
  Target,
  Activity,
  Coffee,
  Zap,
  Bookmark,
  Bell
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";
import MoodWeather from "../components/MoodWeather";

const EmployeeDashboard = () => {
  const [currentMood, setCurrentMood] = useState(4);

  const wellnessStats = {
    overall: 78,
    stress: 65,
    motivation: 82,
    workLife: 71,
    teamSpirit: 88
  };

  const todayActivities = [
    { time: '09:00', activity: 'Check-in matinal', completed: true },
    { time: '12:00', activity: 'Pause déjeuner zen', completed: true },
    { time: '15:30', activity: 'Méditation 5 min', completed: false },
    { time: '17:00', activity: 'Bilan de journée', completed: false }
  ];

  const achievements = [
    { 
      id: 1, 
      title: 'Streak 7 jours', 
      description: '7 jours consécutifs de check-in',
      icon: Award,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      progress: 100
    },
    { 
      id: 2, 
      title: 'Équilibre Pro/Perso', 
      description: 'Maintien d\'un bon équilibre',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      progress: 85
    },
    { 
      id: 3, 
      title: 'Team Player', 
      description: 'Participation active équipe',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      progress: 92
    }
  ];

  const teamInsights = [
    {
      type: 'info',
      title: 'Nouvelle formation disponible',
      message: 'Formation "Gestion du Stress" maintenant accessible',
      time: '2h',
      priority: 'normal'
    },
    {
      type: 'team',
      title: 'Événement équipe',
      message: 'Team building prévu vendredi 15h - Inscrivez-vous !',
      time: '5h',
      priority: 'high'
    },
    {
      type: 'wellness',
      title: 'Conseil bien-être',
      message: 'Pensez à faire des pauses régulières aujourd\'hui',
      time: '1j',
      priority: 'low'
    }
  ];

  const quickActions = [
    {
      title: 'Check-in Rapide',
      description: 'État du jour en 2 min',
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
      link: '/employee-checkin'
    },
    {
      title: 'Espace Équipe',
      description: 'Voir les collègues',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      link: '/employee-team-space'
    },
    {
      title: 'Activités Bien-être',
      description: 'Exercices & conseils',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      link: '/employee-wellness-activities'
    },
    {
      title: 'Mon Profil',
      description: 'Personnaliser',
      icon: User,
      color: 'from-orange-500 to-red-500',
      link: '/employee-personal-space'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-800">Mon Espace Salarié</h1>
            <p className="text-blue-600">Tableau de bord bien-être professionnel</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-blue-300">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              Support
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Mood Weather & Quick Actions */}
          <div className="space-y-6">
            <MoodWeather userType="employee" currentMood={currentMood} />
            
            <Card className="soap-bubble-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  Actions Rapides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, idx) => (
                    <Link key={idx} to={action.link}>
                      <Card className="hover:shadow-md transition-all duration-300 cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                            <action.icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-medium text-sm">{action.title}</h4>
                          <p className="text-xs text-gray-500">{action.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm">
                <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
                <TabsTrigger value="wellness">Bien-être</TabsTrigger>
                <TabsTrigger value="team">Équipe</TabsTrigger>
                <TabsTrigger value="progress">Progrès</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Wellness Overview */}
                <Card className="soap-bubble-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-green-600" />
                      Bilan Bien-être Global
                    </CardTitle>
                    <CardDescription>Votre score bien-être cette semaine</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">{wellnessStats.overall}%</div>
                        <Badge className="bg-green-100 text-green-800">Bon niveau</Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-600">Stress</div>
                          <div className="font-semibold">{wellnessStats.stress}%</div>
                          <Progress value={wellnessStats.stress} className="h-2 mt-1" />
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600">Motivation</div>
                          <div className="font-semibold">{wellnessStats.motivation}%</div>
                          <Progress value={wellnessStats.motivation} className="h-2 mt-1" />
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600">Équilibre</div>
                          <div className="font-semibold">{wellnessStats.workLife}%</div>
                          <Progress value={wellnessStats.workLife} className="h-2 mt-1" />
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600">Équipe</div>
                          <div className="font-semibold">{wellnessStats.teamSpirit}%</div>
                          <Progress value={wellnessStats.teamSpirit} className="h-2 mt-1" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Today's Activities */}
                <Card className="soap-bubble-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      Planning Bien-être du Jour
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {todayActivities.map((activity, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg soap-bubble-effect">
                          <div>
                            <div className="font-medium">{activity.time}</div>
                            <div className="text-sm text-gray-600">{activity.activity}</div>
                          </div>
                          <Badge variant={activity.completed ? "default" : "secondary"} className={activity.completed ? "bg-green-600" : ""}>
                            {activity.completed ? "Fait ✓" : "À faire"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="wellness" className="space-y-6">
                <Card className="soap-bubble-effect">
                  <CardHeader>
                    <CardTitle>Activités Bien-être Personnalisées</CardTitle>
                    <CardDescription>Basées sur votre profil et vos besoins</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <Brain className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Méditation guidée 10 min</h4>
                            <p className="text-sm text-gray-600">Réduction du stress et concentration</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <Coffee className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Pause active 5 min</h4>
                            <p className="text-sm text-gray-600">Exercices de bureau et étirements</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="team" className="space-y-6">
                <Card className="soap-bubble-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Actualités Équipe
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {teamInsights.map((insight, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 border rounded-lg">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            insight.priority === 'high' ? 'bg-red-500' :
                            insight.priority === 'normal' ? 'bg-yellow-500' : 'bg-green-500'
                          }`}></div>
                          <div className="flex-1">
                            <h4 className="font-medium">{insight.title}</h4>
                            <p className="text-sm text-gray-600">{insight.message}</p>
                            <p className="text-xs text-gray-400 mt-1">Il y a {insight.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="progress" className="space-y-6">
                <Card className="soap-bubble-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-600" />
                      Mes Réussites
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievements.map((achievement) => (
                        <div key={achievement.id} className={`p-4 rounded-lg ${achievement.bgColor}`}>
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 ${achievement.bgColor} rounded-full flex items-center justify-center border-2 border-white`}>
                              <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
                            </div>
                            <div>
                              <h4 className="font-medium">{achievement.title}</h4>
                              <p className="text-sm text-gray-600">{achievement.description}</p>
                            </div>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                          <p className="text-xs text-gray-500 mt-1">{achievement.progress}% complété</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
