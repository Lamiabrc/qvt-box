
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Plus, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useAdminContent } from "@/hooks/useAdminContent";
import { ContentEditForm } from "@/components/admin/ContentEditForm";
import { ContentList } from "@/components/admin/ContentList";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminContentEditor = () => {
  const { content, loading, updateContent, createContent, deleteContent } = useAdminContent();
  const [selectedContent, setSelectedContent] = useState('content');
  const [editingContent, setEditingContent] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageFilter, setPageFilter] = useState('all');

  const handleEditContent = (item) => {
    setEditingContent(item);
    setIsCreating(false);
  };

  const handleSaveContent = async (data) => {
    if (editingContent) {
      await updateContent(editingContent.id, data);
    } else {
      await createContent(data);
    }
    setEditingContent(null);
    setIsCreating(false);
  };

  const handleDeleteContent = async (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce contenu ?')) {
      await deleteContent(id);
    }
  };

  const handleCreateNew = () => {
    setEditingContent(null);
    setIsCreating(true);
  };

  const handleCancel = () => {
    setEditingContent(null);
    setIsCreating(false);
  };

  // Filter content based on search and page filter
  const filteredContent = content.filter(item => {
    const matchesSearch = !searchTerm || 
      item.page.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content_key.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPage = pageFilter === 'all' || item.page === pageFilter;
    
    return matchesSearch && matchesPage;
  });

  // Get unique pages for filter
  const pages = Array.from(new Set(content.map(item => item.page)));

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement du contenu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/admin-panel">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour Admin
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Gestion de Contenu</h1>
              <p className="text-gray-600">Éditez facilement le contenu de votre site</p>
            </div>
          </div>
        </div>

        <Tabs value={selectedContent} onValueChange={setSelectedContent}>
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="content">Contenu du Site</TabsTrigger>
            <TabsTrigger value="products">Produits</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            {/* Search and Filter Bar */}
            <div className="flex gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Rechercher dans le contenu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={pageFilter} onValueChange={setPageFilter}>
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filtrer par page" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les pages</SelectItem>
                  {pages.map(page => (
                    <SelectItem key={page} value={page}>{page}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button onClick={handleCreateNew} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Nouveau Contenu
              </Button>
            </div>

            {/* Content Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Contenus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{content.length}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Publiés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    {content.filter(item => item.is_published).length}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Brouillons</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">
                    {content.filter(item => !item.is_published).length}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">{pages.length}</div>
                </CardContent>
              </Card>
            </div>

            {/* Edit Form */}
            {(editingContent || isCreating) && (
              <ContentEditForm
                content={editingContent}
                onSave={handleSaveContent}
                onCancel={handleCancel}
              />
            )}

            {/* Content List */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Contenus ({filteredContent.length})
              </h2>
              {filteredContent.length > 0 ? (
                <ContentList
                  content={filteredContent}
                  onEdit={handleEditContent}
                  onDelete={handleDeleteContent}
                />
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-500">Aucun contenu trouvé</p>
                    {searchTerm && (
                      <Button 
                        variant="outline" 
                        onClick={() => setSearchTerm('')}
                        className="mt-2"
                      >
                        Effacer la recherche
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Produits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Interface de gestion des produits - À développer avec les fonctionnalités de création, édition et suppression des box QVT.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminContentEditor;
