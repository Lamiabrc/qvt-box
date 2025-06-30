
import React from 'react';
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const EmergencyAlert = () => {
  return (
    <div className="bg-gradient-to-r from-red-200 via-pink-200 to-purple-200 rounded-3xl p-8 mb-8 border-4 border-red-300 shadow-2xl">
      <div className="text-center">
        <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4 animate-pulse" />
        <h2 className="text-3xl font-bold text-red-800 mb-4">
          🚨 Besoin d'aide maintenant ?
        </h2>
        <p className="text-red-700 text-lg mb-6">
          Si tu ne te sens pas bien, on est là pour toi - Parents et équipe QVTeen alertés instantanément
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/teens-quick-alert">
            <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white text-xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all">
              Alerte Urgente 🆘
            </Button>
          </Link>
          <Link to="/teens-parental-access">
            <Button variant="outline" className="border-red-400 text-red-700 hover:bg-red-50 px-6 py-3 rounded-full font-semibold">
              Gérer l'accès Parents 👨‍👩‍👧‍👦
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAlert;
