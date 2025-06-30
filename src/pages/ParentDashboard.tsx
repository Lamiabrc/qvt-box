import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle, Heart, BookOpen, GraduationCap, Users, Activity, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";
import MoodWeather from "../components/MoodWeather";

const ParentDashboard = () => {
  const [currentMood, setCurrentMood] = useState(3);

  const familyStats = {
    harmony: 85,
    communication: 78,
    stressLevel: 62,
    teenWellbeing: 75
  };

  const teenAchievements = [
    {
      id: 1,
      title: "Lecture",
      description: "A terminé un livre ce mois-ci",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Excellence Académique",
      description: "A obtenu de bonnes notes",
      icon: GraduationCap,
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const familyEvents = [
    {
      id: 1,
      title: "Soirée Jeux",
      description: "Prévue vendredi soir",
      icon: Activity,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 2,
      title: "Réunion Parents-Profs",
      description: "La semaine prochaine",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const quickActions = [
    {
      title: "Espace Ado",
      description: "Suivre l'activité de votre ado",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      link: "/teens-home"
    },
    {
      title: "Conseils",
      description: "Stratégies parentales",
      icon: BookOpen,
      color: "from-amber-500 to-yellow-500",
      link: "/family-orientation"
    },
    {
      title: "Simulateur",
      description: "Évaluez votre bien-être familial",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
      link: "/family-simulator"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-purple-800">Espace Parent</h1>
            <p className="text-purple-600">Suivez le bien-être de votre famille</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-purple-300">
              <Calendar className="w-4 h-4 mr-2" />
              Planning
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              Messages
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Mood Weather & Quick Actions */}
          <div className="space-y-6">
            <MoodWeather userType="parent" currentMood={3} />
            
            {/* Quick Actions Card */}
            <Card className="soap-bubble-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-600" />
                  Actions Rapides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {quickActions.map((action, idx) => (
                    <Link key={idx} to={action.link}>
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer soap-bubble-effect">
                        <div className={`w-10 h-10 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center`}>
                          <action.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{action.title}</h4>
                          <p className="text-xs text-gray-500">{action.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center & Right Columns - Family Overview & Events */}
          <div className="lg:col-span-2 space-y-6">
            {/* Family Overview Card */}
            <Card className="soap-bubble-effect">
              <CardHeader>
                <CardTitle>Aperçu de la Famille</CardTitle>
                <CardDescription>Statistiques clés du bien-être familial</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Harmonie</div>
                  <div className="font-semibold">{familyStats.harmony}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Communication</div>
                  <div className="font-semibold">{familyStats.communication}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Stress</div>
                  <div className="font-semibold">{familyStats.stressLevel}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Bien-être Ado</div>
                  <div className="font-semibold">{familyStats.teenWellbeing}%</div>
                </div>
              </CardContent>
            </Card>

            {/* Teen Achievements Card */}
            <Card className="soap-bubble-effect">
              <CardHeader>
                <CardTitle>Réalisations de l'Ado</CardTitle>
                <CardDescription>Derniers succès et activités</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {teenAchievements.map((achievement) => (
                  <div key={achievement.id} className={`flex items-center gap-3 p-3 rounded-lg ${achievement.bgColor}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${achievement.color}`}>
                      <achievement.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      <p className="text-xs text-gray-500">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Family Events Card */}
            <Card className="soap-bubble-effect">
              <CardHeader>
                <CardTitle>Événements Familiaux</CardTitle>
                <CardDescription>Prochains rendez-vous et activités</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {familyEvents.map((event) => (
                  <div key={event.id} className={`flex items-center gap-3 p-3 rounded-lg ${event.bgColor}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${event.color}`}>
                      <event.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{event.title}</h4>
                      <p className="text-xs text-gray-500">{event.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
