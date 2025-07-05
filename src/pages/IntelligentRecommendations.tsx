
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Brain, 
  Sparkles, 
  TrendingUp, 
  Package, 
  Target,
  Lightbulb,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAIRecommendations } from '../hooks/useAIRecommendations';
import IntelligentRecommendationDashboard from '../components/IntelligentRecommendationDashboard';
import FloatingBubbles from '../components/FloatingBubbles';

const IntelligentRecommendations = () => {
  const [userId] = useState('user-demo-123');
  const { loading, recommendations, error, generateRecommendations } = useAIRecommendations();

  // Box recommandées avec vraies recommendations
  const [recommendedBoxes, setRecommendedBoxes] = useState([
    {
      name: "Box Décompression Manager",
      reason: "Votre niveau de stress élevé nécessite des outils de relaxation ciblés",
      priority: "high" as const,
      price: "39€/mois",
      items: ["Kit aromathérapie", "Guide méditation 5min", "Balles anti-stress", "Tisanes apaisantes"]
    },
    {
      name: "Box Communication Équipe",
      reason: "Améliorer la cohésion d'équipe détectée comme point d'amélioration",
      priority: "medium" as const,
      price: "45€/mois",
      items: ["Jeux de cohésion", "Guide communication", "Activités ice-breaker", "Poster motivation"]
    },
    {
      name: "Box Équilibre Pro/Perso",
      reason: "Votre évaluation montre un déséquilibre vie professionnelle/personnelle",
      priority: "medium" as const,
      price: "35€/mois",
      items: ["Planificateur bien-être", "Techniques déconnexion", "Rituels du soir", "Carnet gratitude"]
    }
  ]);

  const handleRefreshRecommendations = () => {
    const mockHistory = [
      {
        date: '2024-12-01',
        score: 45,
        riskLevel: 'Élevé',
        criticalAreas: ['stress', 'communication'],
        improvements: []
      },
      {
        date: '2024-12-15',
        score: 58,
        riskLevel: 'Modéré',
        criticalAreas: ['équilibre'],
        improvements: ['stress']
      }
    ];

    const userProfile = {
      type: 'Manager',
      context: 'Équipe de 12 personnes - secteur IT'
    };

    const currentScores = {
      totalScore: 58,
      riskLevel: 'Modéré',
      trend: 'improving'
    };

    generateRecommendations(mockHistory, userProfile, currentScores);
  };

  useEffect(() => {
    handleRefreshRecommendations();
  }, []);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return 'Urgent';
      case 'medium': return 'Recommandé';
      case 'low': return 'Optionnel';
      default: return 'Standard';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800">IA Avancée</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
            <Brain className="w-12 h-12 inline-block mr-4" />
            Recommandations Intelligentes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Notre IA analyse vos évolutions et vous propose des solutions personnalisées qui s'adaptent à votre progression
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              onClick={handleRefreshRecommendations}
              disabled={loading}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Sparkles className="w-4 h-4 mr-2" />
              )}
              {loading ? 'Analyse en cours...' : 'Actualiser les recommandations'}
            </Button>
          </div>
        </div>

        {error && (
          <Alert className="mb-8 border-orange-200 bg-orange-50">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-orange-800">
              {error} - Les recommandations par défaut sont affichées.
            </AlertDescription>
          </Alert>
        )}

        {/* Dashboard principal */}
        <IntelligentRecommendationDashboard userId={userId} />

        {/* Section Box Recommandées */}
        <div className="mt-12">
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-purple-800 flex items-center justify-center gap-2">
                <Package className="w-6 h-6" />
                Box Personnalisées Recommandées
              </CardTitle>
              <p className="text-center text-gray-600">
                Basées sur votre profil et votre évolution récente
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {recommendedBoxes.map((box, index) => (
                  <Card key={index} className="border-2 border-transparent hover:border-purple-200 transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getPriorityColor(box.priority)}>
                          {getPriorityLabel(box.priority)}
                        </Badge>
                        <div className="text-right">
                          <div className="text-lg font-bold text-purple-600">{box.price}</div>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{box.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{box.reason}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Contenu de la box :</h4>
                        <ul className="space-y-1">
                          {box.items.map((item, idx) => (
                            <li key={idx} className="text-xs flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link to="/shop">
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                          Commander cette box
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions complémentaires */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Aller plus loin</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/simulator-home">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                <Target className="w-4 h-4 mr-2" />
                Nouveau bilan
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Package className="w-4 h-4 mr-2" />
                Toutes les box
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50">
                <Lightbulb className="w-4 h-4 mr-2" />
                Conseil personnalisé
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelligentRecommendations;
