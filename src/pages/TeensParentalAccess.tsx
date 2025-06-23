
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Shield, Settings, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensParentalAccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-slate-100 text-slate-800">Accès Parental</Badge>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            <UserCheck className="w-12 h-12 inline-block mr-4" />
            Gestion des Accès Parents
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Configure ce que tes parents peuvent voir de ton espace
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-slate-200">
            <CardHeader>
              <Shield className="w-12 h-12 text-slate-600 mb-4" />
              <CardTitle className="text-slate-800">Confidentialité</CardTitle>
              <CardDescription>Choisis ce qui reste privé</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-gray-200">
            <CardHeader>
              <Eye className="w-12 h-12 text-gray-600 mb-4" />
              <CardTitle className="text-gray-800">Visibilité</CardTitle>
              <CardDescription>Définis les niveaux d'accès</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-zinc-200">
            <CardHeader>
              <Settings className="w-12 h-12 text-zinc-600 mb-4" />
              <CardTitle className="text-zinc-800">Paramètres</CardTitle>
              <CardDescription>Personnalise les autorisations</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensParentalAccess;
