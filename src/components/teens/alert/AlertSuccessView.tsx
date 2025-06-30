
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Heart, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../../FloatingBubbles";

interface AlertSuccessViewProps {
  contactParents: string;
}

const AlertSuccessView = ({ contactParents }: AlertSuccessViewProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Alerte bien reçue ! 💚
          </h1>
          
          <p className="text-xl text-green-700 mb-8">
            Ton message a été transmis. Une personne de confiance va te contacter rapidement.
          </p>
          
          <Card className="mb-8 border-green-200">
            <CardContent className="p-6">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>Alerte envoyée : Maintenant</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-green-600" />
                  <span>Équipe QVTeen notifiée : ✅</span>
                </div>
                {contactParents === 'yes' && (
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-green-600" />
                    <span>Parents informés : ✅</span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>Réponse attendue : Dans les 30 minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <p className="text-green-700 font-medium">
              En attendant, tu peux :
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/teens-personal-space">
                <Button variant="outline" className="border-green-300 text-green-700">
                  Aller dans ma SafeZone
                </Button>
              </Link>
              <Link to="/teens-playlist">
                <Button variant="outline" className="border-green-300 text-green-700">
                  Écouter de la musique
                </Button>
              </Link>
              <Link to="/teens-home">
                <Button className="bg-green-600 hover:bg-green-700">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertSuccessView;
