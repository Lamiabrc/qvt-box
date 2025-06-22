
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Layout, 
  Edit, 
  Trash2, 
  Plus,
  Save,
  Eye,
  Copy,
  Settings,
  Image,
  Video,
  Mail
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";

const AdminContentManager = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const { toast } = useToast();

  const templates = [
    {
      id: 1,
      name: "Email Onboarding Entreprise",
      type: "Email",
      category: "Onboarding",
      status: "Actif",
      lastModified: "2024-01-15",
      usage: 45
    },
    {
      id: 2,
      name: "Page d'accueil Famille",
      type: "Page Web",
      category: "Landing",
      status: "Brouillon",
      lastModified: "2024-01-14",
      usage: 0
    },
    {
      id: 3,
      name: "Rapport QVT Mensuel",
      type: "Document",
      category: "Rapport",
      status: "Actif",
      lastModified: "2024-01-16",
      usage: 23
    }
  ];

  const content = [
    {
      id: 1,
      title: "Guide Burn-out Prévention",
      type: "Article",
      category: "Bien-être",
      status: "Publié",
      views: 1240,
      lastModified: "2024-01-15"
    },
    {
      id: 2,
      title: "Vidéo: Gestion du Stress",
      type: "Vidéo",
      category: "Formation",
      status: "En révision",
      views: 0,
      lastModified: "2024-01-14"
    },
    {
      id: 3,
      title: "FAQ Teen Box",
      type: "FAQ",
      category: "Support",
      status: "Publié",
      views: 567,
      lastModified: "2024-01-13"
    }
  ];

  const handleCreateTemplate = () => {
    toast({
      title: "Nouveau template",
      description: "Redirection vers l'éditeur de template"
    });
  };

  const handleEditContent = (id: number) => {
    toast({
      title: "Édition du contenu",
      description: `Ouverture de l'éditeur pour l'élément ${id}`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Gestion de Contenu</h1>
            <p className="text-slate-600">Templates et contenus de la plateforme</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-slate-300">
              <Settings className="w-4 h-4 mr-2" />
              Paramèt res
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Nouveau
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Templates Actifs</p>
                  <p className="text-2xl font-bold text-blue-700">12</p>
                </div>
                <Layout className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Contenus Publiés</p>
                  <p className="text-2xl font-bold text-green-700">89</p>
                </div>
                <FileText className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Vues Totales</p>
                  <p className="text-2xl font-bold text-purple-700">15.2K</p>
                </div>
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">En Révision</p>
                  <p className="text-2xl font-bold text-orange-700">5</p>
                </div>
                <Edit className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="content">Contenus</TabsTrigger>
            <TabsTrigger value="media">Médias</TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Gestion des Templates</h2>
              <Button onClick={handleCreateTemplate} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Créer un template
              </Button>
            </div>

            <div className="grid gap-4">
              {templates.map((template) => (
                <Card key={template.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          {template.type === 'Email' && <Mail className="w-6 h-6 text-blue-600" />}
                          {template.type === 'Page Web' && <Layout className="w-6 h-6 text-blue-600" />}
                          {template.type === 'Document' && <FileText className="w-6 h-6 text-blue-600" />}
                        </div>
                        <div>
                          <h3 className="font-semibold">{template.name}</h3>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="outline">{template.type}</Badge>
                            <Badge variant="secondary">{template.category}</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right text-sm text-gray-600">
                          <p>Utilisé {template.usage} fois</p>
                          <p>Modifié le {template.lastModified}</p>
                        </div>
                        <Badge 
                          variant={template.status === 'Actif' ? 'default' : 'secondary'}
                          className={template.status === 'Actif' ? 'bg-green-600' : ''}
                        >
                          {template.status}
                        </Badge>
                        
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
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

          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Gestion des Contenus</h2>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Nouveau contenu
              </Button>
            </div>

            <div className="grid gap-4">
              {content.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          {item.type === 'Article' && <FileText className="w-6 h-6 text-green-600" />}
                          {item.type === 'Vidéo' && <Video className="w-6 h-6 text-green-600" />}
                          {item.type === 'FAQ' && <FileText className="w-6 h-6 text-green-600" />}
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="outline">{item.type}</Badge>
                            <Badge variant="secondary">{item.category}</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right text-sm text-gray-600">
                          <p>{item.views} vues</p>
                          <p>Modifié le {item.lastModified}</p>
                        </div>
                        <Badge 
                          variant={item.status === 'Publié' ? 'default' : 'secondary'}
                          className={item.status === 'Publié' ? 'bg-green-600' : ''}
                        >
                          {item.status}
                        </Badge>
                        
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleEditContent(item.id)}>
                            <Edit className="w-4 h-4" />
                          </Button>
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

          <TabsContent value="media" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Bibliothèque Média</h2>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Uploader
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                  <Image className="w-8 h-8 text-gray-400" />
                </div>
                <p className="font-medium text-sm">Logo QVT Box</p>
                <p className="text-xs text-gray-500">PNG • 234KB</p>
              </Card>
              
              <Card className="p-4">
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                  <Video className="w-8 h-8 text-gray-400" />
                </div>
                <p className="font-medium text-sm">Présentation Produit</p>
                <p className="text-xs text-gray-500">MP4 • 15.2MB</p>
              </Card>
              
              <Card className="p-4">
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                  <Image className="w-8 h-8 text-gray-400" />
                </div>
                <p className="font-medium text-sm">Bannière Accueil</p>
                <p className="text-xs text-gray-500">JPG • 678KB</p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminContentManager;
