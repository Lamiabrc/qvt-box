
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Users, 
  Calendar, 
  MessageCircle, 
  TrendingUp, 
  Clock,
  Star,
  AlertTriangle,
  Shield,
  Eye,
  Bell,
  BookOpen,
  Activity,
  Target,
  Smile,
  Frown,
  Meh,
  RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const ParentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Données fictives pour les informations des ados
  const teenData = {
    name: "Emma",
    age: 16,
    lastCheckIn: "Aujourd'hui 14:30",
    mood: "content",
    riskLevel: "faible",
    weeklyTrend: "stable",
    alerts: 0,
    completedActivities: 3,
    totalActivities: 5
  };

  const moodHistory = [
    { date: "Lun", mood: "happy", score: 8 },
    { date: "Mar", mood: "neutral", score: 6 },
    { date: "Mer", mood: "happy", score: 9 },
    { date: "Jeu", mood: "sad", score: 4 },
    { date: "Ven", mood: "happy", score: 8 },
    { date: "Sam", mood: "happy", score: 9 },
    { date: "Dim", mood: "neutral", score: 7 }
  ];

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'happy': return <Smile className="w-6 h-6 text-green-500" />;
      case 'sad': return <Frown className="w-6 h-6 text-red-500" />;
      default: return <Meh className="w-6 h-6 text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Espace Parent</Badge>
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Dashboard Parental 👨‍👩‍👧‍👦
          </h1>
          <p className="text-xl text-purple-600">
            Suivi bienveillant de votre adolescent(e)
          </p>
        </div>

        {/* Stats rapides */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">État général</p>
                  <p className="text-2xl font-bold text-green-700">Bon</p>
                </div>
                <Heart className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Activités complétées</p>
                  <p className="text-2xl font-bold text-blue-700">{teenData.completedActivities}/{teenData.totalActivities}</p>
                </div>
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Alertes</p>
                  <p className="text-2xl font-bold text-orange-700">{teenData.alerts}</p>
                </div>
                <Bell className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Dernière connexion</p>
                  <p className="text-sm font-bold text-purple-700">{teenData.lastCheckIn}</p>
                </div>
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contenu principal avec onglets */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="mood">Humeur</TabsTrigger>
            <TabsTrigger value="activities">Activités</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Profil de l'ado */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Profil de {teenData.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Âge:</span>
                    <span className="font-semibold">{teenData.age} ans</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Humeur actuelle:</span>
                    <div className="flex items-center gap-2">
                      {getMoodIcon(teenData.mood)}
                      <span className="font-semibold capitalize">{teenData.mood}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Niveau de risque:</span>
                    <Badge className="bg-green-100 text-green-800">{teenData.riskLevel}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Tendance hebdomadaire:</span>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 font-semibold">{teenData.weeklyTrend}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions rapides */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Actions Rapides
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/family-parent-simulator">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 justify-start">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Faire le simulateur parent
                    </Button>
                  </Link>
                  <Link to="/family-space">
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Espace famille partagé
                    </Button>
                  </Link>
                  <Link to="/teens-parental-access">
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="w-4 h-4 mr-2" />
                      Gérer les autorisations
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Programmer une activité
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mood" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-600" />
                  Suivi de l'humeur - 7 derniers jours
                </CardTitle>
                <CardDescription>
                  Évolution de l'état émotionnel de {teenData.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end h-32 mb-4">
                  {moodHistory.map((day, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="bg-purple-200 rounded-t-lg mb-2 flex items-end justify-center"
                        style={{ height: `${day.score * 8}px`, minHeight: '20px', width: '30px' }}
                      >
                        <span className="text-xs font-semibold text-purple-800">{day.score}</span>
                      </div>
                      {getMoodIcon(day.mood)}
                      <span className="text-xs text-gray-600 mt-1">{day.date}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600 text-center">
                  Échelle: 1-10 (1 = très mal, 10 = excellent)
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  Activités de bien-être
                </CardTitle>
                <CardDescription>
                  Progrès dans les activités recommandées
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium">Méditation quotidienne</p>
                    <p className="text-sm text-gray-600">5 min/jour</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Terminé</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium">Journal de gratitude</p>
                    <p className="text-sm text-gray-600">3 points positifs</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">En cours</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Activité physique</p>
                    <p className="text-sm text-gray-600">30 min</p>
                  </div>
                  <Badge variant="outline">À faire</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  Communication Famille
                </CardTitle>
                <CardDescription>
                  Messages et interactions récentes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      E
                    </div>
                    <span className="font-medium">{teenData.name}</span>
                    <span className="text-sm text-gray-500">il y a 2h</span>
                  </div>
                  <p className="text-sm">"Journée ok au lycée, un peu fatiguée mais ça va !"</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      M
                    </div>
                    <span className="font-medium">Maman</span>
                    <span className="text-sm text-gray-500">il y a 1h</span>
                  </div>
                  <p className="text-sm">"Super ! N'oublie pas de faire ta séance de relaxation 💆‍♀️"</p>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Envoyer un message encourageant
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Conseils et ressources */}
        <div className="mt-8">
          <Card className="border-2 border-dashed border-purple-300 bg-purple-50/50">
            <CardContent className="py-8 text-center">
              <Star className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-800 mb-2">
                Conseils du jour
              </h3>
              <p className="text-purple-600 mb-4 max-w-md mx-auto">
                Votre ado traverse une phase normale. Continuez à être présent(e) et bienveillant(e).
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button variant="outline" className="border-purple-300">
                    Parler à un expert
                  </Button>
                </Link>
                <Link to="/shop">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Découvrir QVTeen Box
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
