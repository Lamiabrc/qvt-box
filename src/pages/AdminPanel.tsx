import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Building2, 
  Package, 
  BarChart3, 
  Settings, 
  AlertTriangle,
  TrendingUp,
  Mail,
  Database,
  Shield,
  Edit,
  Plus,
  Trash2,
  Eye,
  FileText,
  ShoppingCart,
  Globe
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();

  const stats = {
    totalUsers: 2847,
    totalCompanies: 156,
    totalFamilies: 892,
    totalBoxes: 12450,
    monthlyRevenue: 89420,
    alertsCount: 23
  };

  const pages = [
    { id: 1, name: "Page d'accueil", path: "/", status: "Publié", lastModified: "2024-01-15" },
    { id: 2, name: "Univers Famille", path: "/famille", status: "Publié", lastModified: "2024-01-14" },
    { id: 3, name: "Univers Entreprise", path: "/concept-qvt", status: "Publié", lastModified: "2024-01-13" },
    { id: 4, name: "Boutique", path: "/shop", status: "Publié", lastModified: "2024-01-16" },
    { id: 5, name: "Contact", path: "/contact", status: "Publié", lastModified: "2024-01-12" }
  ];

  const products = [
    { id: 1, name: "Box Anti-Stress Entreprise", price: 49.90, category: "Entreprise", stock: 150, status: "Actif" },
    { id: 2, name: "Teen Box Digital Detox", price: 34.90, category: "Famille", stock: 89, status: "Actif" },
    { id: 3, name: "Box Team Building", price: 89.90, category: "Entreprise", stock: 45, status: "Actif" },
    { id: 4, name: "Family Box Communication", price: 44.90, category: "Famille", stock: 67, status: "Actif" }
  ];

  const handleEditPage = (pageId: number) => {
    toast({
      title: "Redirection",
      description: "Ouverture de l'éditeur de contenu"
    });
  };

  const handleEditProduct = (productId: number) => {
    toast({
      title: "Redirection",
      description: "Ouverture de l'éditeur de produit"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Panel d'Administration</h1>
            <p className="text-slate-600">Gestion globale de la plateforme QVT Box</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-slate-300">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </Button>
            <Button className="bg-red-600 hover:bg-red-700">
              <Shield className="w-4 h-4 mr-2" />
              Sécurité
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Utilisateurs Total</p>
                  <p className="text-2xl font-bold text-blue-700">{stats.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Entreprises</p>
                  <p className="text-2xl font-bold text-green-700">{stats.totalCompanies}</p>
                </div>
                <Building2 className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Box Livrées</p>
                  <p className="text-2xl font-bold text-purple-700">{stats.totalBoxes.toLocaleString()}</p>
                </div>
                <Package className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">CA Mensuel</p>
                  <p className="text-2xl font-bold text-orange-700">{stats.monthlyRevenue.toLocaleString()}€</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="shop">Boutique</TabsTrigger>
            <TabsTrigger value="users">Utilisateurs</TabsTrigger>
            <TabsTrigger value="companies">Entreprises</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    Alertes Système
                  </CardTitle>
                  <CardDescription>Notifications importantes à traiter</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <p className="font-medium text-red-800">Pic de stress détecté</p>
                        <p className="text-sm text-red-600">Entreprise TechCorp - 15 employés</p>
                      </div>
                      <Badge variant="destructive">Urgent</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div>
                        <p className="font-medium text-orange-800">Stock Box faible</p>
                        <p className="text-sm text-orange-600">Teen Box Digital Detox - 12 restantes</p>
                      </div>
                      <Badge variant="secondary">Moyen</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    Performance Globale
                  </CardTitle>
                  <CardDescription>Indicateurs clés de performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Satisfaction Entreprises</span>
                        <span className="font-medium">94%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '94%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Engagement Familles</span>
                        <span className="font-medium">87%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Taux de Rétention</span>
                        <span className="font-medium">91%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '91%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pages" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Gestion des Pages</h2>
              <Link to="/admin-content-editor">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Nouvelle page
                </Button>
              </Link>
            </div>

            <div className="grid gap-4">
              {pages.map((page) => (
                <Card key={page.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Globe className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{page.name}</h3>
                          <p className="text-sm text-gray-600">{page.path}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right text-sm text-gray-600">
                          <p>Modifié le {page.lastModified}</p>
                        </div>
                        <Badge variant="default" className="bg-green-600">
                          {page.status}
                        </Badge>
                        
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Link to="/admin-content-editor">
                            <Button size="sm" variant="outline" onClick={() => handleEditPage(page.id)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shop" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Gestion de la Boutique</h2>
              <Link to="/admin-content-editor">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Nouveau produit
                </Button>
              </Link>
            </div>

            <div className="grid gap-4">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <Package className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{product.name}</h3>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="outline">{product.category}</Badge>
                            <Badge variant="secondary">Stock: {product.stock}</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">{product.price}€</p>
                          <p className="text-sm text-gray-600">{product.status}</p>
                        </div>
                        
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Link to="/admin-content-editor">
                            <Button size="sm" variant="outline" onClick={() => handleEditProduct(product.id)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Utilisateurs</CardTitle>
                <CardDescription>Administration des comptes utilisateurs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Interface de gestion des utilisateurs à développer...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="companies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Entreprises</CardTitle>
                <CardDescription>Administration des comptes entreprises</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Interface de gestion des entreprises à développer...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analytics Avancées</CardTitle>
                <CardDescription>Analyses et rapports détaillés</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Interface d'analytics à développer...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
