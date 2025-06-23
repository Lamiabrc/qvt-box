
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star, Gift, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensShop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800">Boutique Teen</Badge>
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">
            <ShoppingBag className="w-12 h-12 inline-block mr-4" />
            La Teen Box
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvre des produits spécialement conçus pour ton bien-être
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-emerald-200">
            <CardHeader>
              <Gift className="w-12 h-12 text-emerald-600 mb-4" />
              <CardTitle className="text-emerald-800">Teen Box Mensuelle</CardTitle>
              <CardDescription>Ta box bien-être chaque mois</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                À partir de 19€/mois
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-teal-200">
            <CardHeader>
              <Star className="w-12 h-12 text-teal-600 mb-4" />
              <CardTitle className="text-teal-800">Produits Premium</CardTitle>
              <CardDescription>Sélection exclusive bien-être</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full border-teal-300 text-teal-700">
                Découvrir
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-cyan-200">
            <CardHeader>
              <Sparkles className="w-12 h-12 text-cyan-600 mb-4" />
              <CardTitle className="text-cyan-800">Accessoires</CardTitle>
              <CardDescription>Objets personnalisables</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full border-cyan-300 text-cyan-700">
                Voir la collection
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensShop;
