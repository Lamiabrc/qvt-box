
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Play, Heart, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensPlaylist = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-cyan-100 text-cyan-800">Ma Playlist</Badge>
          <h1 className="text-4xl font-bold text-cyan-800 mb-4">
            <Music className="w-12 h-12 inline-block mr-4" />
            Mes Musiques Bien-être
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvre et écoute des musiques qui te font du bien
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-cyan-200">
            <CardHeader>
              <Play className="w-12 h-12 text-cyan-600 mb-4" />
              <CardTitle className="text-cyan-800">Lecture</CardTitle>
              <CardDescription>Écoute tes musiques</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-blue-200">
            <CardHeader>
              <Plus className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle className="text-blue-800">Ajouter</CardTitle>
              <CardDescription>Nouvelle playlist</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-purple-200">
            <CardHeader>
              <Heart className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle className="text-purple-800">Favoris</CardTitle>
              <CardDescription>Tes morceaux préférés</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-pink-200">
            <CardHeader>
              <Music className="w-12 h-12 text-pink-600 mb-4" />
              <CardTitle className="text-pink-800">Découverte</CardTitle>
              <CardDescription>Nouvelles suggestions</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-cyan-300 text-cyan-700 hover:bg-cyan-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensPlaylist;
