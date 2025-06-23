
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Calendar,
  Bell,
  BookOpen,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";

const ParentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();

  const teensData = [
    {
      name: "Emma",
      age: 16,
      mood: "positive",
      screenTime: "3h 45m",
      communication: 85,
      activities: 12,
      alerts: 0
    },
    {
      name: "Lucas",
      age: 14,
      mood: "neutral",
      screenTime: "5h 20m",
      communication: 65,
      activities: 8,
      alerts: 2
    }
  ];

  const familyActivities = [
    {
      title: "Soirée jeux de société",
      date: "Ce soir 19h30",
      participants: 4,
      status: "planifié"
    },
    {
      title: "Discussion émotions",
      date: "Hier",
      participants: 3,
      status: "terminé"
    },
    {
      title: "Activité nature",
      date: "Weekend prochain",
      participants: 4,
      status: "proposé"
    }
  ];

  const handleQuickAction = (action: string) => {
    toast({
      title: "Action lancée",
      description: `${action} en cours...`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-2">
            Espace Parents
          </h1>
          <p className="text-purple-600">
            Suivez et accompagnez le bien-être de votre famille
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">Ambiance Familiale</p>
                  <p className="text-2xl font-bold text-purple-800">8.2/10</p>
                </div>
                <Heart className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-pink-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-pink-600">Communication</p>
                  <p className="text-2xl font-bold text-pink-800">75%</p>
                </div>
                <MessageCircle className="h-8 w-8 text-pink-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-indigo-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-indigo-600">Activités</p>
                  <p className="text-2xl font-bold text-indigo-800">20</p>
                </div>
                <Calendar className="h-8 w-8 text-indigo-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Alertes</p>
                  <p className="text-2xl font-bold text-orange-800">2</p>
                </div>
                <Bell className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="teens">Suivi Ados</TabsTrigger>
            <TabsTrigger value="activities">Activités</TabsTrigger>
            <TabsTrigger value="resources">Ressources</TabsTrigger>
          </TabsList>

          {/* Vue d'ensemble */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    Évolution Familiale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Bien-être général</span>
                        <span>82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Communication</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Temps qualité</span>
                        <span>68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-600" />
                    Objectifs de la Semaine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">3 repas famille</span>
                      <Badge variant="secondary">Terminé</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span className="text-sm">Discussion émotions</span>
                      <Badge variant="outline">En cours</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">Activité extérieure</span>
                      <Badge variant="outline">Planifié</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Suivi Ados */}
          <TabsContent value="teens" className="space-y-6">
            <div className="grid gap-6">
              {teensData.map((teen) => (
                <Card key={teen.name}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-lg">{teen.name}</CardTitle>
                        <CardDescription>{teen.age} ans</CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge 
                          variant={teen.mood === 'positive' ? 'default' : teen.mood === 'neutral' ? 'secondary' : 'destructive'}
                        >
                          {teen.mood === 'positive' ? 'Positif' : teen.mood === 'neutral' ? 'Neutre' : 'Négatif'}
                        </Badge>
                        {teen.alerts > 0 && (
                          <Badge variant="destructive">{teen.alerts} alerte(s)</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Temps écran</p>
                        <p className="text-lg font-semibold">{teen.screenTime}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Communication</p>
                        <p className="text-lg font-semibold">{teen.communication}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Activités</p>
                        <p className="text-lg font-semibold">{teen.activities}</p>
                      </div>
                      <div className="text-center">
                        <Button 
                          size="sm" 
                          onClick={() => handleQuickAction(`Discussion avec ${teen.name}`)}
                        >
                          Contacter
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activités */}
          <TabsContent value="activities" className="space-y-6">
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Activités Familiales</h3>
                <Button onClick={() => handleQuickAction("Nouvelle activité")}>
                  Planifier une activité
                </Button>
              </div>
              
              {familyActivities.map((activity, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{activity.title}</h4>
                        <p className="text-sm text-gray-600">{activity.date}</p>
                        <p className="text-sm text-gray-500">{activity.participants} participants</p>
                      </div>
                      <Badge 
                        variant={
                          activity.status === 'terminé' ? 'default' :
                          activity.status === 'planifié' ? 'secondary' : 'outline'
                        }
                      >
                        {activity.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Ressources */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Guides Parents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Ressources pour améliorer la communication familiale
                  </p>
                  <Button variant="outline" size="sm">
                    Accéder aux guides
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="w-5 h-5 text-green-600" />
                    Communauté
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Échangez avec d'autres parents
                  </p>
                  <Button variant="outline" size="sm">
                    Rejoindre
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Star className="w-5 h-5 text-yellow-600" />
                    Conseils Expert
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Conseils personnalisés de professionnels
                  </p>
                  <Button variant="outline" size="sm">
                    Consulter
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ParentDashboard;
