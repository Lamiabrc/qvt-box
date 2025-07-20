
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Heart, 
  Users, 
  Bell,
  MessageCircle,
  Activity,
  Award,
  Brain,
  Target
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import MoodWeather from "../components/MoodWeather";
import WellnessOverview from "../components/employee/WellnessOverview";
import TodayActivities from "../components/employee/TodayActivities";
import QuickActions from "../components/employee/QuickActions";
import TeamInsights from "../components/employee/TeamInsights";
import Achievements from "../components/employee/Achievements";
import WellnessActivities from "../components/employee/WellnessActivities";
import PersonalWellnessInsights from "../components/employee/PersonalWellnessInsights";
import SmartSuggestions from "../components/employee/SmartSuggestions";

const EmployeeDashboard = () => {
  const [currentMood, setCurrentMood] = useState(4);

  const wellnessStats = {
    overall: 78,
    stress: 65,
    motivation: 82,
    workLife: 71,
    teamSpirit: 88
  };

  const personalWellnessData = {
    overallScore: 78,
    stressLevel: 65,
    energyLevel: 72,
    workLifeBalance: 71,
    jobSatisfaction: 85,
    trend: 'improving' as const
  };

  const userProfile = {
    role: 'Développeur',
    department: 'IT',
    stressLevel: 65,
    workload: 75
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
      priority: 'normal' as const
    },
    {
      type: 'team',
      title: 'Événement équipe',
      message: 'Team building prévu vendredi 15h - Inscrivez-vous !',
      time: '5h',
      priority: 'high' as const
    },
    {
      type: 'wellness',
      title: 'Conseil bien-être',
      message: 'Pensez à faire des pauses régulières aujourd\'hui',
      time: '1j',
      priority: 'low' as const
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
      description: 'Paramètres & préférences',
      icon: User,
      color: 'from-orange-500 to-red-500',
      link: '/employee-profile'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-qvt-bubble via-qvt-off-white to-qvt-glacier/20 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-qvt-dark">Mon Espace Salarié</h1>
            <p className="text-qvt-dark/70">Tableau de bord bien-être professionnel</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-qvt-glacier/50">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button className="bg-qvt-turquoise hover:bg-qvt-turquoise/90">
              <MessageCircle className="w-4 h-4 mr-2" />
              Support
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Mood Weather & Quick Actions */}
          <div className="space-y-6">
            <MoodWeather userType="employee" currentMood={currentMood} />
            <QuickActions actions={quickActions} />
            <SmartSuggestions userProfile={userProfile} />
          </div>

          {/* Center Column - Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5 bg-white/60 backdrop-blur-sm">
                <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
                <TabsTrigger value="wellness">Bien-être</TabsTrigger>
                <TabsTrigger value="insights">
                  <Brain className="w-4 h-4 mr-1" />
                  Insights
                </TabsTrigger>
                <TabsTrigger value="team">Équipe</TabsTrigger>
                <TabsTrigger value="progress">Progrès</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <WellnessOverview wellnessStats={wellnessStats} />
                <TodayActivities activities={todayActivities} />
              </TabsContent>

              <TabsContent value="wellness" className="space-y-6">
                <WellnessActivities />
              </TabsContent>

              <TabsContent value="insights" className="space-y-6">
                <PersonalWellnessInsights wellnessData={personalWellnessData} />
              </TabsContent>

              <TabsContent value="team" className="space-y-6">
                <TeamInsights insights={teamInsights} />
              </TabsContent>

              <TabsContent value="progress" className="space-y-6">
                <Achievements achievements={achievements} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
