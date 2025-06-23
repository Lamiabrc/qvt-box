
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Crown, 
  TrendingUp, 
  TrendingDown,
  Users, 
  Building2, 
  DollarSign,
  AlertTriangle,
  Target,
  BarChart3,
  PieChart,
  Calendar,
  FileText
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";

const ExecutiveDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const kpis = {
    employeeWellbeing: 87,
    turnoverReduction: 23,
    productivityIncrease: 15,
    roiPercentage: 340,
    absenteeismReduction: 18,
    engagementScore: 92
  };

  const financialImpact = {
    totalSavings: 245000,
    preventionCosts: 85000,
    netReturn: 160000,
    costPerEmployee: 33
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-indigo-800">Dashboard Direction</h1>
              <p className="text-indigo-600">Vue exécutive et indicateurs stratégiques</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="border-indigo-300 text-indigo-700">
              <FileText className="w-4 h-4 mr-2" />
              Rapport mensuel
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700">ROI QVT Global</p>
                  <p className="text-3xl font-bold text-green-800">{kpis.roiPercentage}%</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-sm text-green-600">+45% ce trimestre</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700">Score Bien-être</p>
                  <p className="text-3xl font-bold text-blue-800">{kpis.employeeWellbeing}/100</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-blue-600 mr-1" />
                    <span className="text-sm text-blue-600">+12% vs année dernière</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-700">Réduction Turnover</p>
                  <p className="text-3xl font-bold text-purple-800">{kpis.turnoverReduction}%</p>
                  <div className="flex items-center mt-2">
                    <TrendingDown className="w-4 h-4 text-purple-600 mr-1" />
                    <span className="text-sm text-purple-600">Économie: 180k€</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="financial">Impact financier</TabsTrigger>
            <TabsTrigger value="strategic">Objectifs stratégiques</TabsTrigger>
            <TabsTrigger value="risks">Gestion des risques</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-indigo-600" />
                    Performance Globale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Engagement employés</span>
                        <span className="font-medium">{kpis.engagementScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-600 h-3 rounded-full transition-all duration-500" style={{width: `${kpis.engagementScore}%`}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Productivité équipes</span>
                        <span className="font-medium">+{kpis.productivityIncrease}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-600 h-3 rounded-full transition-all duration-500" style={{width: '78%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Réduction absentéisme</span>
                        <span className="font-medium">-{kpis.absenteeismReduction}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-purple-600 h-3 rounded-full transition-all duration-500" style={{width: '82%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-green-600" />
                    Répartition Impact QVT
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Prévention burn-out</span>
                      <Badge className="bg-red-100 text-red-700">35%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Amélioration cohésion</span>
                      <Badge className="bg-blue-100 text-blue-700">28%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Développement compétences</span>
                      <Badge className="bg-green-100 text-green-700">22%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Innovation managériale</span>
                      <Badge className="bg-purple-100 text-purple-700">15%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-green-200">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm text-green-700 mb-1">Économies totales</p>
                    <p className="text-2xl font-bold text-green-800">{financialImpact.totalSavings.toLocaleString()}€</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm text-orange-700 mb-1">Coût prévention</p>
                    <p className="text-2xl font-bold text-orange-800">{financialImpact.preventionCosts.toLocaleString()}€</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm text-blue-700 mb-1">Retour net</p>
                    <p className="text-2xl font-bold text-blue-800">{financialImpact.netReturn.toLocaleString()}€</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm text-purple-700 mb-1">Coût/salarié/mois</p>
                    <p className="text-2xl font-bold text-purple-800">{financialImpact.costPerEmployee}€</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="strategic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Objectifs Stratégiques 2024</CardTitle>
                <CardDescription>Suivi des indicateurs clés de performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Atteindre 95% de satisfaction employés</span>
                      <span className="text-sm text-gray-600">87/95</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{width: '91%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Réduire turnover de 30%</span>
                      <span className="text-sm text-gray-600">23/30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{width: '77%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">ROI QVT de 400%</span>
                      <span className="text-sm text-gray-600">340/400%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Alertes & Risques Stratégiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-red-800">Risque élevé - Département IT</h4>
                        <p className="text-sm text-red-600">Burnout détecté chez 3 managers clés</p>
                      </div>
                      <Badge variant="destructive">Critique</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-orange-800">Attention - Équipe commerciale</h4>
                        <p className="text-sm text-orange-600">Baisse engagement -15% ce mois</p>
                      </div>
                      <Badge className="bg-orange-100 text-orange-700">Modéré</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-yellow-800">Surveillance - Formation RH</h4>
                        <p className="text-sm text-yellow-600">Formation managers à planifier</p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-700">Faible</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;
