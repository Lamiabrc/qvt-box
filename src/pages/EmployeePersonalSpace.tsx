
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, User, Settings, TrendingUp, Calendar, Target } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const EmployeePersonalSpace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Espace Personnel</Badge>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            <Shield className="w-12 h-12 inline-block mr-4" />
            Mon Espace Professionnel Privé
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre espace sécurisé pour suivre votre bien-être professionnel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-blue-200">
            <CardHeader>
              <User className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-blue-800">Mon Profil Pro</CardTitle>
              <CardDescription>Gérez vos informations professionnelles</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-teal-200">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-teal-600 mb-4" />
              <CardTitle className="text-teal-800">Mes Évaluations</CardTitle>
              <CardDescription>Historique de vos évaluations bien-être</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-green-200">
            <CardHeader>
              <Target className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle className="text-green-800">Mes Objectifs</CardTitle>
              <CardDescription>Définissez vos objectifs bien-être</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <Calendar className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle className="text-purple-800">Planning Bien-être</CardTitle>
              <CardDescription>Organisez vos activités bien-être</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-orange-200">
            <CardHeader>
              <Settings className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-orange-800">Paramètres</CardTitle>
              <CardDescription>Configurez vos préférences</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-pink-200">
            <CardHeader>
              <Shield className="w-12 h-12 text-pink-600 mb-4" />
              <CardTitle className="text-pink-800">Confidentialité</CardTitle>
              <CardDescription>Gérez vos données privées</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/employee-dashboard">
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              Retour au dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeePersonalSpace;
