
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Edit, Save, X, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PageData {
  id: string;
  name: string;
  path: string;
  title: string;
  description: string;
  status: 'published' | 'draft';
  category: string;
  lastModified: string;
}

const pages: PageData[] = [
  // Pages principales
  { id: '1', name: 'Accueil', path: '/', title: 'QVT Box - Accueil', description: 'Page d\'accueil principale', status: 'published', category: 'Principal', lastModified: '2024-01-15' },
  { id: '2', name: 'Concept QVT', path: '/concept-qvt', title: 'Concept QVT', description: 'Explication du concept QVT', status: 'published', category: 'Principal', lastModified: '2024-01-14' },
  { id: '3', name: 'Contact', path: '/contact', title: 'Contact', description: 'Page de contact', status: 'published', category: 'Principal', lastModified: '2024-01-13' },
  { id: '4', name: 'Boutique', path: '/shop', title: 'Boutique QVT Box', description: 'Boutique en ligne', status: 'published', category: 'Principal', lastModified: '2024-01-12' },
  
  // Pages Famille
  { id: '5', name: 'Univers Famille', path: '/famille', title: 'QVTeen Box Famille', description: 'Présentation univers famille', status: 'published', category: 'Famille', lastModified: '2024-01-11' },
  { id: '6', name: 'Orientation Famille', path: '/family-orientation', title: 'Choisir son profil famille', description: 'Orientation parents/ados', status: 'published', category: 'Famille', lastModified: '2024-01-10' },
  { id: '7', name: 'Accueil Ados', path: '/teens-home', title: 'Espace Ados', description: 'Page d\'accueil pour les adolescents', status: 'published', category: 'Famille', lastModified: '2024-01-09' },
  { id: '8', name: 'Check-in Ados', path: '/teens-check-in', title: 'Mon Humeur', description: 'Suivi humeur quotidienne', status: 'published', category: 'Famille', lastModified: '2024-01-08' },
  { id: '9', name: 'Espace Personnel Ados', path: '/teens-personal-space', title: 'Ma SafeZone', description: 'Espace privé ados', status: 'published', category: 'Famille', lastModified: '2024-01-07' },
  { id: '10', name: 'Espace Famille Partagé', path: '/teens-family-space', title: 'Notre Espace Partagé', description: 'Espace de communication famille', status: 'published', category: 'Famille', lastModified: '2024-01-06' },
  { id: '11', name: 'Planning Ados', path: '/teens-calendar', title: 'Mon Planning', description: 'Calendrier personnel ados', status: 'published', category: 'Famille', lastModified: '2024-01-05' },
  { id: '12', name: 'Playlist Ados', path: '/teens-playlist', title: 'Mes Playlists', description: 'Musique et détente', status: 'published', category: 'Famille', lastModified: '2024-01-04' },
  { id: '13', name: 'Personnalisation Ados', path: '/teens-customization', title: 'Personnalise ton espace', description: 'Customisation interface', status: 'published', category: 'Famille', lastModified: '2024-01-03' },
  { id: '14', name: 'Alerte Rapide Ados', path: '/teens-quick-alert', title: 'Alerte Rapide', description: 'Système d\'alerte urgence', status: 'published', category: 'Famille', lastModified: '2024-01-02' },
  { id: '15', name: 'Boutique Ados', path: '/teens-shop', title: 'Ma Boutique', description: 'Boutique spéciale ados', status: 'published', category: 'Famille', lastModified: '2024-01-01' },
  { id: '16', name: 'Dashboard Parents', path: '/parent-dashboard', title: 'Dashboard Parents', description: 'Tableau de bord parents', status: 'published', category: 'Famille', lastModified: '2023-12-31' },
  
  // Pages Entreprise
  { id: '17', name: 'Orientation Entreprise', path: '/enterprise-orientation', title: 'Choisir son rôle entreprise', description: 'Orientation rôles entreprise', status: 'published', category: 'Entreprise', lastModified: '2023-12-30' },
  { id: '18', name: 'Dashboard Salarié', path: '/employee-dashboard', title: 'Dashboard Salarié', description: 'Tableau de bord employé', status: 'published', category: 'Entreprise', lastModified: '2023-12-29' },
  { id: '19', name: 'Dashboard Chef Équipe', path: '/team-leader-dashboard', title: 'Dashboard Chef d\'Équipe', description: 'Tableau de bord manager', status: 'published', category: 'Entreprise', lastModified: '2023-12-28' },
  { id: '20', name: 'Dashboard QVT Manager', path: '/qvt-manager-dashboard', title: 'Dashboard QVT Manager', description: 'Tableau de bord QVT', status: 'published', category: 'Entreprise', lastModified: '2023-12-27' },
  { id: '21', name: 'Dashboard Dirigeant', path: '/executive-dashboard', title: 'Dashboard Dirigeant', description: 'Tableau de bord direction', status: 'published', category: 'Entreprise', lastModified: '2023-12-26' },
  
  // Simulateurs
  { id: '22', name: 'Hub Simulateurs', path: '/simulator-home', title: 'Simulateurs QVT', description: 'Centre des simulateurs', status: 'published', category: 'Simulateurs', lastModified: '2023-12-25' },
  { id: '23', name: 'Simulateur Entreprise', path: '/enterprise-simulator', title: 'Simulateur Entreprise', description: 'Test bien-être entreprise', status: 'published', category: 'Simulateurs', lastModified: '2023-12-24' },
  { id: '24', name: 'Simulateur Famille', path: '/family-simulator', title: 'Simulateur Famille', description: 'Test bien-être famille', status: 'published', category: 'Simulateurs', lastModified: '2023-12-23' },
  
  // Administration
  { id: '25', name: 'Connexion Admin', path: '/admin-login', title: 'Connexion Admin', description: 'Page de connexion admin', status: 'published', category: 'Admin', lastModified: '2023-12-22' },
  { id: '26', name: 'Panel Admin', path: '/admin-panel', title: 'Panel Admin', description: 'Tableau de bord admin', status: 'published', category: 'Admin', lastModified: '2023-12-21' },
  { id: '27', name: 'Éditeur Contenu', path: '/admin-content-editor', title: 'Éditeur de Contenu', description: 'Édition du contenu', status: 'published', category: 'Admin', lastModified: '2023-12-20' },
  
  // Pages légales
  { id: '28', name: 'CGU', path: '/cgu', title: 'Conditions Générales', description: 'Conditions générales d\'utilisation', status: 'published', category: 'Légal', lastModified: '2023-12-19' },
  { id: '29', name: 'Mentions Légales', path: '/mentions-legales', title: 'Mentions Légales', description: 'Mentions légales', status: 'published', category: 'Légal', lastModified: '2023-12-18' },
  { id: '30', name: 'Politique Confidentialité', path: '/privacy-policy', title: 'Politique de Confidentialité', description: 'Politique de confidentialité', status: 'published', category: 'Légal', lastModified: '2023-12-17' },
];

const PageEditor = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [editingPage, setEditingPage] = useState<string | null>(null);
  const [pageForm, setPageForm] = useState({ title: '', description: '', status: 'published' as 'published' | 'draft' });
  const { toast } = useToast();

  const categories = ['all', 'Principal', 'Famille', 'Entreprise', 'Simulateurs', 'Admin', 'Légal'];
  
  const filteredPages = selectedCategory === 'all' 
    ? pages 
    : pages.filter(page => page.category === selectedCategory);

  const handleEditPage = (pageId: string) => {
    const page = pages.find(p => p.id === pageId);
    if (page) {
      setPageForm({ title: page.title, description: page.description, status: page.status });
      setEditingPage(pageId);
    }
  };

  const handleSavePage = () => {
    toast({
      title: "Page sauvegardée",
      description: `Les modifications ont été appliquées avec succès`
    });
    setEditingPage(null);
  };

  const togglePageStatus = (pageId: string) => {
    const page = pages.find(p => p.id === pageId);
    if (page) {
      page.status = page.status === 'published' ? 'draft' : 'published';
      toast({
        title: page.status === 'published' ? "Page publiée" : "Page dépubliée",
        description: `${page.name} est maintenant ${page.status === 'published' ? 'visible' : 'masquée'}`
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Gestion des Pages</h2>
        <div className="flex gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category === 'all' ? 'Toutes' : category}
            </Button>
          ))}
        </div>
      </div>

      {/* Formulaire d'édition */}
      {editingPage && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Modifier la page</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setEditingPage(null)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Titre</label>
              <Input 
                value={pageForm.title}
                onChange={(e) => setPageForm({...pageForm, title: e.target.value})}
                placeholder="Titre de la page"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea 
                value={pageForm.description}
                onChange={(e) => setPageForm({...pageForm, description: e.target.value})}
                placeholder="Description de la page"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Statut</label>
              <select 
                value={pageForm.status}
                onChange={(e) => setPageForm({...pageForm, status: e.target.value as 'published' | 'draft'})}
                className="w-full p-2 border rounded-md"
              >
                <option value="published">Publié</option>
                <option value="draft">Brouillon</option>
              </select>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSavePage} className="bg-green-600 hover:bg-green-700">
                <Save className="w-4 h-4 mr-2" />
                Sauvegarder
              </Button>
              <Button variant="outline" onClick={() => setEditingPage(null)}>
                Annuler
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Liste des pages */}
      <div className="grid gap-4">
        {filteredPages.map((page) => (
          <Card key={page.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg">{page.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {page.category}
                    </Badge>
                    <Badge variant={page.status === 'published' ? 'default' : 'secondary'}>
                      {page.status === 'published' ? 'Publié' : 'Brouillon'}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-1">{page.description}</p>
                  <p className="text-sm text-gray-500">
                    Route: {page.path} | Modifié: {page.lastModified}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => togglePageStatus(page.id)}
                  >
                    {page.status === 'published' ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditPage(page.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PageEditor;
