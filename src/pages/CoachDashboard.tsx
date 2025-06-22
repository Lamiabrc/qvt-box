
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Calendar, 
  MessageCircle, 
  TrendingUp, 
  Clock,
  Star,
  AlertCircle,
  Video,
  Phone,
  Mail,
  FileText,
  BarChart3,
  User
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";

const CoachDashboard = () => {
  const [activeTab, setActiveTab] = useState('clients');

  const clients = [
    {
      id: 1,
      name: "Marie Dubois",
      company: "TechCorp",
      status: "Actif",
      lastSession: "2024-01-15",
      nextSession: "2024-01-22",
      mood: "Stable",
      progress: 75,
      priority: "normal",
      sessions: 8
    },
    {
      id: 2,
      name: "Jean Martin",
      company: "StartupXYZ",
      status: "Urgent",
      lastSession: "2024-01-14",
      nextSession: "2024-01-18",
      mood: "Préoccupé",
      progress: 45,
      priority: "high",
      sessions: 3
    },
    {
      id: 3,
      name: "Sophie Laurent",
      company: "BigCorp",
      status: "Actif",
      lastSession: "2024-01-16",
      nextSession: "2024-01-23",
      mood: "Optimiste",
      progress: 90,
      priority: "low",
      sessions: 12
    }
  ];

  const todayAppointments = [
    { time: "09:00", client: "Marie Dubois", type: "Visio", duration: "1h" },
    { time: "14:30", client: "Jean Martin", type: "Téléphone", duration: "45min" },
    { time: "16:00", client: "Sophie Laurent", type: "Visio", duration: "1h" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'normal': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-teal-800">Dashboard Coach QVT</h1>
            <p className="text-teal-600">Suivi et accompagnement de vos clients</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-teal-300">
              <Calendar className="w-4 h-4 mr-2" />
              Planning
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              Messages
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Clients Actifs</p>
                  <p className="text-2xl font-bold text-teal-700">24</p>
                </div>
                <Users className="w-8 h-8 text-teal-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Sessions ce mois</p>
                  <p className="text-2xl font-bold text-blue-700">89</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Satisfaction</p>
                  <p className="text-2xl font-bold text-green-700">4.8/5</p>
                </div>
                <Star className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Alertes</p>
                  <p className="text-2xl font-bold text-red-700">3</p>
                </div>
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Today's Schedule */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-600" />
                Aujourd'hui
              </CardTitle>
              <CardDescription>Vos rendez-vous du jour</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayAppointments.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                    <div>
                      <p className="font-medium">{appointment.time}</p>
                      <p className="text-sm text-gray-600">{appointment.client}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-1">
                        {appointment.type === 'Visio' ? <Video className="w-3 h-3 mr-1" /> : <Phone className="w-3 h-3 mr-1" />}
                        {appointment.type}
                      </Badge>
                      <p className="text-xs text-gray-500">{appointment.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Clients Management */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="clients">Mes Clients</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="resources">Ressources</TabsTrigger>
              </TabsList>

              <TabsContent value="clients" className="space-y-4">
                {clients.map((client) => (
                  <Card key={client.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-teal-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{client.name}</h3>
                            <p className="text-sm text-gray-600">{client.company}</p>
                          </div>
                        </div>
                        <Badge className={getPriorityColor(client.priority)}>
                          {client.status}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-500">Dernière session</p>
                          <p className="text-sm font-medium">{client.lastSession}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Prochaine session</p>
                          <p className="text-sm font-medium">{client.nextSession}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">État d'esprit</p>
                          <p className="text-sm font-medium">{client.mood}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Sessions totales</p>
                          <p className="text-sm font-medium">{client.sessions}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progrès global</span>
                          <span>{client.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-teal-600 h-2 rounded-full transition-all duration-300" 
                            style={{width: `${client.progress}%`}}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                        <Button size="sm" variant="outline">
                          <FileText className="w-4 h-4 mr-1" />
                          Notes
                        </Button>
                        <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                          <Calendar className="w-4 h-4 mr-1" />
                          RDV
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      Statistiques Mensuelles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold text-blue-800">Taux de réussite</h4>
                          <p className="text-2xl font-bold text-blue-600">87%</p>
                          <p className="text-sm text-blue-600">+5% vs mois dernier</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-semibold text-green-800">Clients satisfaits</h4>
                          <p className="text-2xl font-bold text-green-600">94%</p>
                          <p className="text-sm text-green-600">+2% vs mois dernier</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Ressources Coach</CardTitle>
                    <CardDescription>Outils et guides pour vos accompagnements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                        <FileText className="w-6 h-6 mb-2 text-teal-600" />
                        <div className="text-left">
                          <p className="font-medium">Templates de sessions</p>
                          <p className="text-sm text-gray-500">Guides structurés d'entretien</p>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                        <BarChart3 className="w-6 h-6 mb-2 text-blue-600" />
                        <div className="text-left">
                          <p className="font-medium">Outils d'évaluation</p>
                          <p className="text-sm text-gray-500">Questionnaires et tests</p>
                        </div>
                      </Button>
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

export default CoachDashboard;
