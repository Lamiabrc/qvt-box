
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, PenTool, Lock, Search } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensJournal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-100 text-orange-800">Journal Intime</Badge>
          <h1 className="text-4xl font-bold text-orange-800 mb-4">
            <BookOpen className="w-12 h-12 inline-block mr-4" />
            Mon Journal Personnel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exprime tes pensées et émotions en toute confidentialité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-orange-200">
            <CardHeader>
              <PenTool className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle className="text-orange-800">Nouvelle Entrée</CardTitle>
              <CardDescription>Écris tes pensées du jour</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-red-200">
            <CardHeader>
              <BookOpen className="w-12 h-12 text-red-600 mb-4" />
              <CardTitle className="text-red-800">Mes Entrées</CardTitle>
              <CardDescription>Relis tes anciens écrits</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-pink-200">
            <CardHeader>
              <Search className="w-12 h-12 text-pink-600 mb-4" />
              <CardTitle className="text-pink-800">Rechercher</CardTitle>
              <CardDescription>Trouve une entrée spécifique</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <Lock className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle className="text-purple-800">Confidentialité</CardTitle>
              <CardDescription>Tes écrits sont protégés</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensJournal;
