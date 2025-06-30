
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Package, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import AIContributionConsent from "../AIContributionConsent";

interface SimulatorResultsProps {
  title: string;
  score: number;
  maxScore: number;
  riskLevel: string;
  riskColor: string;
  recommendations: string[];
  backgroundColor?: string;
  accentColor?: string;
  icon?: React.ReactNode;
  ctaButtons?: {
    label: string;
    link: string;
    variant?: "default" | "outline";
  }[];
  recommendedBoxes?: {
    name: string;
    description: string;
    price: string;
    features: string[];
  }[];
}

const SimulatorResults: React.FC<SimulatorResultsProps> = ({
  title,
  score,
  maxScore,
  riskLevel,
  riskColor,
  recommendations,
  backgroundColor = "from-blue-50 via-indigo-50 to-purple-50",
  accentColor = "blue",
  icon,
  ctaButtons = [],
  recommendedBoxes = []
}) => {
  const handleAIConsentChange = (consent: boolean) => {
    // Sauvegarder les données pour l'IA si consentement donné
    if (consent) {
      console.log('Données sauvegardées pour contribution IA:', {
        score,
        riskLevel,
        timestamp: new Date().toISOString()
      });
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${backgroundColor} p-6`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Badge className={`mb-4 bg-${accentColor}-100 text-${accentColor}-800`}>
            Résultats
          </Badge>
          <h1 className={`text-4xl font-bold text-${accentColor}-800 mb-4`}>
            {title}
          </h1>
        </div>

        <Card className="mb-8">
          <CardHeader className="text-center">
            {icon && (
              <div className={`w-24 h-24 bg-gradient-to-br from-${accentColor}-500 to-${accentColor}-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {icon}
              </div>
            )}
            <CardTitle className={`text-3xl text-${accentColor}-800`}>
              Score: {score}/{maxScore}
            </CardTitle>
            <CardDescription className={`text-xl font-semibold ${riskColor}`}>
              Niveau de risque: {riskLevel}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Recommandations:</h3>
              {recommendations.map((rec, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommended Boxes Section */}
        {recommendedBoxes.length > 0 && (
          <div className="mb-8">
            <h2 className={`text-2xl font-bold text-${accentColor}-800 mb-6 text-center`}>
              Box Recommandées pour Vous
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {recommendedBoxes.map((box, idx) => (
                <Card key={idx} className={`border-${accentColor}-200 hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <CardTitle className={`text-lg text-${accentColor}-800`}>{box.name}</CardTitle>
                    <CardDescription>{box.description}</CardDescription>
                    <div className={`text-2xl font-bold text-${accentColor}-600`}>{box.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {box.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center gap-2">
                          <Package className={`w-3 h-3 text-${accentColor}-500`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link to="/shop">
                <Button className={`bg-${accentColor}-600 hover:bg-${accentColor}-700`}>
                  <Package className="w-4 h-4 mr-2" />
                  Enrichir ma box dans la boutique
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* AI Contribution Section */}
        <div className="mb-8">
          <AIContributionConsent onConsentChange={handleAIConsentChange} />
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center space-x-4 mb-6">
          {ctaButtons.map((button, idx) => (
            <Link key={idx} to={button.link}>
              <Button 
                variant={button.variant || "default"}
                className={button.variant === "outline" ? "" : `bg-${accentColor}-600 hover:bg-${accentColor}-700`}
              >
                {button.label}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          ))}
        </div>

        {/* Link to Intelligent Recommendations */}
        <div className="text-center">
          <Link to="/intelligent-recommendations">
            <Button variant="outline" className={`border-${accentColor}-300 text-${accentColor}-700`}>
              <Brain className="w-4 h-4 mr-2" />
              Voir toutes mes recommandations IA
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimulatorResults;
