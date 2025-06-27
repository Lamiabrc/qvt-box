
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Palette, Bell, User, Shield, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const EmployeeCustomization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800">Personnalisation</Badge>
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            <Settings className="w-12 h-12 inline-block mr-4" />
            Personnalisez votre Espace
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Adaptez votre environnement professionnel à vos préférences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-indigo-200">
            <CardHeader>
              <Palette className="w-12 h-12 text-indigo-600 mb-4" />
              <CardTitle className="text-indigo-800">Thème</CardTitle>
              <CardDescription>Personnalisez l'apparence de votre interface</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Choisir un thème
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <Bell className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle className="text-purple-800">Notifications</CardTitle>
              <CardDescription>Configurez vos préférences de notification</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Gérer
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-pink-200">
            <CardHeader>
              <User className="w-12 h-12 text-pink-600 mb-4" />
              <CardTitle className="text-pink-800">Profil</CardTitle>
              <CardDescription>Personnalisez votre profil professionnel</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Modifier
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-blue-200">
            <CardHeader>
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-blue-800">Confidentialité</CardTitle>
              <CardDescription>Gérez vos paramètres de confidentialité</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Configurer
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-green-200">
            <CardHeader>
              <Monitor className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle className="text-green-800">Dashboard</CardTitle>
              <CardDescription>Personnalisez votre tableau de bord</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Organiser
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-orange-200">
            <CardHeader>
              <Settings className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-orange-800">Préférences</CardTitle>
              <CardDescription>Paramètres généraux de l'application</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Modifier
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/employee-dashboard">
            <Button variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-50">
              Retour au dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCustomization;
