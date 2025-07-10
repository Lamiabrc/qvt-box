
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Building2, 
  Heart,
  ArrowRight,
  Target,
  UserCheck,
  GraduationCap
} from "lucide-react";

const MarketResearchLanding = () => {
  return (
    <>
      <script async src="https://tally.so/widgets/embed.js"></script>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              QVT Box - Études de Marché
            </h1>
            <p className="text-gray-600 text-center mt-2">
              Participez à nos études spécialisées selon votre profil
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Section principale */}
          <div className="mb-12">
            <Card className="border-2 border-teal-200 shadow-xl">
              <CardHeader className="text-center bg-gradient-to-r from-teal-50 to-cyan-50">
                <CardTitle className="text-2xl text-teal-800 flex items-center justify-center gap-2">
                  <Target className="w-6 h-6" />
                  Étude de Marché Générale
                </CardTitle>
                <p className="text-teal-600">
                  Aidez-nous à créer la solution idéale pour votre bien-être
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  data-tally-src="https://tally.so/embed/mRebOK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Étude de Marché QVT Box - Générale"
                  className="w-full"
                ></iframe>
              </CardContent>
            </Card>
          </div>

          {/* Études spécialisées */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Études Spécialisées
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Choisissez l'étude qui correspond le mieux à votre profil
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Étude Parents Salariés */}
            <Card className="border-purple-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-800">Parents Salariés</CardTitle>
                <p className="text-purple-600">
                  Étude dédiée aux parents qui travaillent
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Équilibre vie pro/perso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Besoins en entreprise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Solutions familiales</span>
                  </div>
                </div>
                
                <iframe
                  data-tally-src="https://tally.so/embed/mRebOK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Étude Parents Salariés"
                  className="w-full rounded-lg border"
                ></iframe>
              </CardContent>
            </Card>

            {/* Étude Adolescents */}
            <Card className="border-teal-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center bg-gradient-to-r from-teal-50 to-cyan-50">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-teal-800">Adolescents</CardTitle>
                <p className="text-teal-600">
                  Étude spécialisée pour les adolescents
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Bien-être adolescent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Relations familiales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Vie scolaire et sociale</span>
                  </div>
                </div>
                
                <iframe
                  data-tally-src="https://tally.so/embed/mRebOK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Étude Adolescents"
                  className="w-full rounded-lg border"
                ></iframe>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Merci de votre participation !
                </h3>
                <p className="text-teal-100 mb-6">
                  Vos réponses nous aident à créer des solutions adaptées à vos besoins réels.
                </p>
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="bg-white text-teal-600 hover:bg-gray-100"
                >
                  Retour à l'accueil
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketResearchLanding;
