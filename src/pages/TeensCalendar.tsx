
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensCalendar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Planning Famille</Badge>
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            <Calendar className="w-12 h-12 inline-block mr-4" />
            Mon Planning Familial
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organise tes activités et synchronise-toi avec ta famille
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-green-200">
            <CardHeader>
              <Calendar className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle className="text-green-800">Mes Événements</CardTitle>
              <CardDescription>Tes rendez-vous et activités</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-teal-200">
            <CardHeader>
              <Users className="w-12 h-12 text-teal-600 mb-4" />
              <CardTitle className="text-teal-800">Famille</CardTitle>
              <CardDescription>Activités familiales partagées</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-blue-200">
            <CardHeader>
              <Plus className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-blue-800">Nouveau</CardTitle>
              <CardDescription>Ajouter un événement</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensCalendar;
