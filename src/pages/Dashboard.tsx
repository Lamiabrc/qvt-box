
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Building2, 
  User, 
  Users, 
  TrendingUp, 
  ShoppingBag,
  Brain,
  Target,
  Activity,
  Sparkles,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from '@/components/FloatingBubbles';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [userProfile, setUserProfile] = useState<any>(null);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Mock user profile - in real app, fetch from database
  const mockProfile = {
    type: 'libre', // libre, famille, entreprise
    role: 'independant', // parent, ado, salarie, manager, responsable_qvt, independant
    wellbeingScore: 8,
    lastAssessment: '2024-01-15',
    alertsCount: 2,
    recommendationsCount: 5
  };

  const renderLibreDashboard = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Mon Espace Personnel</h1>
        <p className="text-gray-600">Bienvenue dans votre espace de bien-être individuel</p>
      </div>

      {/* Score de bien-être */}
      <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-600" />
            Mon Score de Bien-être
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-purple-600">{mockProfile.wellbeingScore}/15</div>
              <p className="text-sm text-gray-600">Dernière évaluation : {mockProfile.lastAssessment}</p>
            </div>
            <Badge className="bg-green-100 text-green-800">Équilibré</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Actions rapides */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/simulator-home">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">Simulateur</h3>
              <p className="text-sm text-gray-600">Évaluer mon bien-être</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/intelligent-recommendations">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold">Recommandations IA</h3>
              <p className="text-sm text-gray-600">{mockProfile.recommendationsCount} conseils personnalisés</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/shop">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <ShoppingBag className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <h3 className="font-semibold">Boutique Box</h3>
              <p className="text-sm text-gray-600">Box bien-être Made in France</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recommandations personnalisées */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-orange-600" />
            Recommandations du jour
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-medium text-blue-800">Pause méditation</p>
              <p className="text-sm text-blue-600">5 minutes de méditation guidée recommandées</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
            <Heart className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium text-green-800">Box Détente</p>
              <p className="text-sm text-green-600">Perfect pour votre niveau de stress actuel</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderFamilleDashboard = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-800 mb-2">Espace Famille</h1>
        <p className="text-gray-600">Harmonie et bien-être pour toute la famille</p>
      </div>

      {/* Climat familial */}
      <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600" />
            Climat Familial
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">7.2/10</div>
              <p className="text-sm text-gray-600">Score global</p>
            </div>
            <div className="text-center">
              <Badge className="bg-orange-100 text-orange-800">2 alertes</Badge>
              <p className="text-sm text-gray-600 mt-1">À surveiller</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Membres de la famille */}
      <Card>
        <CardHeader>
          <CardTitle>Membres de la famille</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">P</div>
              <div>
                <p className="font-medium">Papa (vous)</p>
                <p className="text-sm text-gray-600">Dernier check-in : aujourd'hui</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800">Bien</Badge>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">M</div>
              <div>
                <p className="font-medium">Maman</p>
                <p className="text-sm text-gray-600">Dernier check-in : hier</p>
              </div>
            </div>
            <Badge className="bg-orange-100 text-orange-800">Stress</Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
              <div>
                <p className="font-medium">Ado (15 ans)</p>
                <p className="text-sm text-gray-600">Dernier check-in : il y a 2 jours</p>
              </div>
            </div>
            <Badge className="bg-yellow-100 text-yellow-800">À contacter</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Actions famille */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link to="/family-simulator">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold">Check-in Famille</h3>
              <p className="text-sm text-gray-600">Évaluer le climat familial</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/shop">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <ShoppingBag className="w-8 h-8 text-pink-600 mx-auto mb-2" />
              <h3 className="font-semibold">Family & Teen Box</h3>
              <p className="text-sm text-gray-600">Box personnalisées</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/intelligent-recommendations">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Sparkles className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <h3 className="font-semibold">Conseils IA</h3>
              <p className="text-sm text-gray-600">Recommandations famille</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );

  const renderEntrepriseDashboard = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-teal-800 mb-2">Espace Entreprise</h1>
        <p className="text-gray-600">Bien-être au travail et prévention des risques psychosociaux</p>
      </div>

      {/* Score QVT */}
      <Card className="border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-teal-600" />
            Mon Score QVT
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-teal-600">{mockProfile.wellbeingScore}/15</div>
              <p className="text-sm text-gray-600">Évaluation rapide en 2 minutes</p>
            </div>
            <div className="text-right">
              <Badge className="bg-green-100 text-green-800 mb-1">Niveau optimal</Badge>
              <p className="text-xs text-gray-500">Risque burn-out : Faible</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Indicateurs clés */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Activity className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-blue-600">85%</div>
            <p className="text-sm text-gray-600">Motivation</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Heart className="w-6 h-6 text-red-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-red-600">4/10</div>
            <p className="text-sm text-gray-600">Niveau stress</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-green-600">90%</div>
            <p className="text-sm text-gray-600">Relations équipe</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-purple-600">+12%</div>
            <p className="text-sm text-gray-600">Évolution</p>
          </CardContent>
        </Card>
      </div>

      {/* Actions entreprise */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link to="/enterprise-solutions">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Brain className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <h3 className="font-semibold">Évaluateur QVT</h3>
              <p className="text-sm text-gray-600">Test rapide 2 minutes</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/team-leader-dashboard">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">Mon Équipe</h3>
              <p className="text-sm text-gray-600">Vue manager</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/shop">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <ShoppingBag className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
              <h3 className="font-semibold">Box Entreprise</h3>
              <p className="text-sm text-gray-600">Solutions QVT</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Alertes et recommandations */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              Alertes RPS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5" />
              <div>
                <p className="font-medium text-orange-800">Charge de travail élevée</p>
                <p className="text-sm text-orange-600">Surveillez votre équilibre</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              Recommandations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5" />
              <div>
                <p className="font-medium text-purple-800">Box Décompression</p>
                <p className="text-sm text-purple-600">Idéale pour votre profil</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Navigation rapide */}
        <div className="mb-8 flex justify-center">
          <div className="flex gap-2 bg-white/60 backdrop-blur-sm rounded-full p-1">
            <Button 
              variant={mockProfile.type === 'libre' ? 'default' : 'ghost'}
              size="sm"
              className="rounded-full"
            >
              <User className="w-4 h-4 mr-1" />
              Libre
            </Button>
            <Button 
              variant={mockProfile.type === 'famille' ? 'default' : 'ghost'}
              size="sm"
              className="rounded-full"
            >
              <Heart className="w-4 h-4 mr-1" />
              Famille
            </Button>
            <Button 
              variant={mockProfile.type === 'entreprise' ? 'default' : 'ghost'}
              size="sm"
              className="rounded-full"
            >
              <Building2 className="w-4 h-4 mr-1" />
              Entreprise
            </Button>
          </div>
        </div>

        {/* Rendu du dashboard selon le profil */}
        {mockProfile.type === 'libre' && renderLibreDashboard()}
        {mockProfile.type === 'famille' && renderFamilleDashboard()}
        {mockProfile.type === 'entreprise' && renderEntrepriseDashboard()}

        {/* Footer avec actions communes */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Actions communes</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/intelligent-recommendations">
                <Button variant="outline" className="border-purple-300 text-purple-700">
                  <Sparkles className="w-4 h-4 mr-2" />
                  IA Recommandations
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="outline" className="border-teal-300 text-teal-700">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Boutique Box
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-blue-300 text-blue-700">
                  <Heart className="w-4 h-4 mr-2" />
                  Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
