
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Target, 
  TrendingUp, 
  Calendar, 
  Bell,
  Settings,
  Gift,
  Heart,
  BarChart3,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingBubbles from '@/components/FloatingBubbles';

const Dashboard = () => {
  // Données simulées pour la démonstration
  const userData = {
    name: "Marie Dupont",
    lastAssessment: new Date().toLocaleDateString('fr-FR'),
    wellbeingScore: 75,
    nextBox: "15 janvier 2024",
    streak: 7
  };

  const recommendations = [
    {
      id: 1,
      title: "Pause méditation",
      description: "5 minutes de méditation guidée recommandées aujourd'hui",
      priority: "high",
      category: "Stress"
    },
    {
      id: 2,
      title: "Activité physique",
      description: "Une petite marche de 10 minutes améliorerait votre énergie",
      priority: "medium",
      category: "Énergie"
    },
    {
      id: 3,
      title: "Communication famille",
      description: "Planifier un moment d'échange en famille ce soir",
      priority: "low",
      category: "Relations"
    }
  ];

  const recentActivities = [
    { date: "Aujourd'hui", activity: "Questionnaire bien-être complété", type: "success" },
    { date: "Hier", activity: "Box QVT reçue et déballée", type: "gift" },
    { date: "Il y a 3 jours", activity: "Méditation de 10 minutes", type: "wellness" },
    { date: "Il y a 5 jours", activity: "Questionnaire famille complété", type: "family" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Bonjour {userData.name} ! 👋
            </h1>
            <p className="text-slate-600">
              Votre tableau de bord QVT personnalisé
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            <Settings className="w-4 h-4 mr-2" />
            Paramètres
          </Button>
        </div>

        {/* Métriques principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Score bien-être</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{userData.wellbeingScore}/100</div>
              <Progress value={userData.wellbeingScore} className="mt-2" />
              <p className="text-xs text-slate-600 mt-2">+5 points cette semaine</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Série active</CardTitle>
              <Target className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{userData.streak} jours</div>
              <p className="text-xs text-slate-600 mt-2">Continuez comme ça !</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prochaine box</CardTitle>
              <Gift className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{userData.nextBox}</div>
              <p className="text-xs text-slate-600 mt-2">Dans 8 jours</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dernière évaluation</CardTitle>
              <Calendar className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{userData.lastAssessment}</div>
              <p className="text-xs text-slate-600 mt-2">Résultats excellents</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recommandations */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Recommandations personnalisées
                </CardTitle>
                <CardDescription>
                  Basées sur votre dernier questionnaire
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec) => (
                  <div key={rec.id} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      rec.priority === 'high' ? 'bg-red-500' :
                      rec.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{rec.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {rec.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600">{rec.description}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Commencer
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Activités récentes */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                  Activités récentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'gift' ? 'bg-purple-500' :
                      activity.type === 'wellness' ? 'bg-blue-500' : 'bg-pink-500'
                    }`} />
                    <div>
                      <p className="text-sm font-medium">{activity.activity}</p>
                      <p className="text-xs text-slate-600">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Actions rapides */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Actions rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/questionnaires" className="block">
                  <Button className="w-full justify-start">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Nouveau questionnaire
                  </Button>
                </Link>
                <Link to="/shop" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Gift className="w-4 h-4 mr-2" />
                    Boutique QVT
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
