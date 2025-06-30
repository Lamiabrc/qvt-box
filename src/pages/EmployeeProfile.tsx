
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FloatingBubbles from "../components/FloatingBubbles";
import EmployeeSpecificitiesForm from "../components/employee/EmployeeSpecificitiesForm";
import EmployeeEventsForm from "../components/employee/EmployeeEventsForm";
import { User, Shield, Calendar, Settings } from "lucide-react";

const EmployeeProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Mon Profil Salarié
          </h1>
          <p className="text-blue-600">
            Gérez vos informations personnelles et professionnelles
          </p>
        </div>

        <Tabs defaultValue="specificities" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="specificities" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Spécificités
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Événements
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profil
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Paramètres
            </TabsTrigger>
          </TabsList>

          <TabsContent value="specificities">
            <EmployeeSpecificitiesForm />
          </TabsContent>

          <TabsContent value="events">
            <EmployeeEventsForm />
          </TabsContent>

          <TabsContent value="profile">
            <div className="text-center py-8">
              <p className="text-gray-600">Section profil en cours de développement</p>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="text-center py-8">
              <p className="text-gray-600">Section paramètres en cours de développement</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EmployeeProfile;
