
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Brain, 
  Shield, 
  Users, 
  ChartBar, 
  Heart,
  Info,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AIContributionConsentProps {
  onConsentChange: (consent: boolean) => void;
  initialConsent?: boolean;
}

const AIContributionConsent: React.FC<AIContributionConsentProps> = ({ 
  onConsentChange, 
  initialConsent = false 
}) => {
  const [consent, setConsent] = useState(initialConsent);
  const [showDetails, setShowDetails] = useState(false);
  const { toast } = useToast();

  const handleConsentChange = (checked: boolean) => {
    setConsent(checked);
    onConsentChange(checked);
    
    toast({
      title: checked ? "Merci pour votre contribution !" : "Préférences mises à jour",
      description: checked 
        ? "Vos données anonymisées aideront à développer une IA d'intelligence émotionnelle"
        : "Vos données resteront privées et ne seront pas partagées"
    });
  };

  return (
    <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-blue-800">Contribuer à l'IA d'Intelligence Émotionnelle</CardTitle>
            <Badge className="mt-1 bg-blue-100 text-blue-800">Innovation & Recherche</Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="bg-white/60 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Pourquoi votre contribution est précieuse
          </h4>
          <p className="text-sm text-gray-700 mb-3">
            Vos données d'évaluation émotionnelle (anonymisées) peuvent aider à créer une IA qui :
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <ChartBar className="w-3 h-3 text-blue-600" />
              <span>Améliore les diagnostics de bien-être émotionnel</span>
            </li>
            <li className="flex items-center gap-2">
              <Users className="w-3 h-3 text-blue-600" />
              <span>Personnalise les interventions thérapeutiques</span>
            </li>
            <li className="flex items-center gap-2">
              <Brain className="w-3 h-3 text-blue-600" />
              <span>Comprend mieux les patterns émotionnels humains</span>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          <Checkbox
            id="ai-contribution"
            checked={consent}
            onCheckedChange={handleConsentChange}
          />
          <label
            htmlFor="ai-contribution"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            J'accepte de contribuer anonymement aux données d'IA d'intelligence émotionnelle
          </label>
        </div>

        {consent && (
          <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
            <div className="flex items-center gap-2 text-green-800">
              <CheckCircle className="w-4 h-4" />
              <span className="font-medium">Contribution activée</span>
            </div>
            <p className="text-xs text-green-700 mt-1">
              Vos données sont automatiquement anonymisées avant contribution
            </p>
          </div>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowDetails(!showDetails)}
          className="text-blue-700 border-blue-300"
        >
          <Info className="w-4 h-4 mr-2" />
          {showDetails ? 'Masquer' : 'Plus'} d'informations
        </Button>

        {showDetails && (
          <div className="bg-white/80 p-4 rounded-lg border border-blue-200 space-y-3">
            <div>
              <h5 className="font-semibold text-gray-800 flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                Protection de vos données
              </h5>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                <li>• Anonymisation complète (aucune donnée personnelle)</li>
                <li>• Chiffrement des données pendant le transfert</li>
                <li>• Conformité RGPD et réglementations françaises</li>
                <li>• Possibilité de retirer votre consentement à tout moment</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-800">Données collectées</h5>
              <ul className="text-xs text-gray-600 mt-2 space-y-1">
                <li>• Réponses aux questionnaires (normalisées)</li>
                <li>• Niveaux de risque calculés</li>
                <li>• Contexte démographique anonymisé (tranches d'âge, catégories de rôles)</li>
                <li>• Tendances d'amélioration du bien-être</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIContributionConsent;
