
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Users,
  ArrowRight,
  Settings,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";
import IntelligentRecommendationDashboard from "../components/IntelligentRecommendationDashboard";
import AIContributionConsent from "../components/AIContributionConsent";

const IntelligentRecommendations = () => {
  const [userConsent, setUserConsent] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Simuler un ID utilisateur - dans une vraie app, cela viendrait de l'authentification
  const userId = 'user_demo_123';

  const handleConsentChange = (consent: boolean) => {
    setUserConsent(consent);
    // Ici, on sauvegarderait les préférences utilisateur
    console.log('User consent for AI contribution:', consent);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800">IA & Recommandations</Badge>
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            <Brain className="w-12 h-12 inline-block mr-4" />
            Système de Recommandations Intelligent
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez des recommandations personnalisées basées sur l'intelligence artificielle et contribuez au développement d'une IA d'intelligence émotionnelle
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Tableau de bord
            </TabsTrigger>
            <TabsTrigger value="contribution" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Contribution IA
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Paramètres
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <IntelligentRecommendationDashboard userId={userId} />
            
            {/* Liens rapides */}
            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Actions rapides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link to="/simulator-home">
                    <Card className="hover:shadow-md transition-shadow cursor-pointer border-blue-200 bg-blue-50">
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-semibold">Nouvelle évaluation</h4>
                        <p className="text-sm text-gray-600">Actualiser vos recommandations</p>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link to="/shop">
                    <Card className="hover:shadow-md transition-shadow cursor-pointer border-green-200 bg-green-50">
                      <CardContent className="p-4 text-center">
                        <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <h4 className="font-semibold">Explorer les box</h4>
                        <p className="text-sm text-gray-600">Découvrir toutes les options</p>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Card className="hover:shadow-md transition-shadow cursor-pointer border-purple-200 bg-purple-50">
                    <CardContent className="p-4 text-center">
                      <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Communauté</h4>
                      <p className="text-sm text-gray-600">Partager votre expérience</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contribution" className="space-y-6">
            <AIContributionConsent 
              onConsentChange={handleConsentChange}
              initialConsent={userConsent}
            />
            
            {userConsent && (
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">Impact de votre contribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Données partagées</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 5 évaluations anonymisées</li>
                        <li>• Patterns d'amélioration identifiés</li>
                        <li>• Contexte démographique générique</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Retour attendu</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Recommandations plus précises</li>
                        <li>• Nouveaux insights personnalisés</li>
                        <li>• Amélioration continue de l'IA</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Préférences de recommandations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Fréquence des recommandations</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="sm">Quotidien</Button>
                      <Button variant="default" size="sm">Hebdomadaire</Button>
                      <Button variant="outline" size="sm">Mensuel</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Types de recommandations</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Box produits</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Activités bien-être</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" defaultChecked />
                        <span className="text-sm">Conseils personnalisés</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Navigation de retour */}
        <div className="text-center mt-12">
          <Link to="/">
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              Retour à l'accueil
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntelligentRecommendations;
