
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Coffee, Users, Dumbbell, BookOpen, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const EmployeeWellnessActivities = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Activités Bien-être</Badge>
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            <Coffee className="w-12 h-12 inline-block mr-4" />
            Activités Bien-être Professionnel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez des activités pour améliorer votre bien-être au travail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-green-200">
            <CardHeader>
              <Brain className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle className="text-green-800">Méditation</CardTitle>
              <CardDescription>Exercices de méditation pour réduire le stress</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Commencer une session
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-blue-200">
            <CardHeader>
              <Dumbbell className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-blue-800">Étirements</CardTitle>
              <CardDescription>Exercices d'étirement pour le bureau</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Voir les exercices
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <Headphones className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle className="text-purple-800">Relaxation</CardTitle>
              <CardDescription>Musiques et sons apaisants</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Écouter
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-orange-200">
            <CardHeader>
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-orange-800">Team Building</CardTitle>
              <CardDescription>Activités de cohésion d'équipe</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Organiser
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-teal-200">
            <CardHeader>
              <BookOpen className="w-12 h-12 text-teal-600 mb-4" />
              <CardTitle className="text-teal-800">Formation</CardTitle>
              <CardDescription>Modules de formation bien-être</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Accéder
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-pink-200">
            <CardHeader>
              <Coffee className="w-12 h-12 text-pink-600 mb-4" />
              <CardTitle className="text-pink-800">Pauses</CardTitle>
              <CardDescription>Gérer vos pauses bien-être</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Planifier
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/employee-dashboard">
            <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
              Retour au dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeWellnessActivities;
