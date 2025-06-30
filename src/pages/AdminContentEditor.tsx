import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, ArrowLeft, Plus, Edit, Trash2, X, FileText, Palette } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useEditableContent } from "@/hooks/useEditableContent";

const AdminContentEditor = () => {
  const [selectedContent, setSelectedContent] = useState('pages');
  const [selectedPage, setSelectedPage] = useState('all');
  const [editingProduct, setEditingProduct] = useState<number | null>(null);
  const [editingContent, setEditingContent] = useState<string | null>(null);
  const [productForm, setProductForm] = useState({ name: '', price: '', category: '', stock: '', status: 'active' });
  const [contentForm, setContentForm] = useState({ key: '', value: '', type: 'text', description: '' });
  const { toast } = useToast();
  
  const { content, updateContent, getContent, loading } = useEditableContent();

  // Pages disponibles
  const availablePages = [
    'all', 'home', 'concept-qvt', 'entreprise', 'famille', 'teens-home', 
    'shop', 'contact', 'login', 'admin-panel', 'employee-dashboard', 
    'parent-dashboard', 'teens-checkin', 'family-space', 'friends-space'
  ];

  // Contenus de pages groupés par page
  const pageContents = {
    'home': [
      { id: '1', section: 'hero', key: 'title', value: 'Bienvenue sur QVT Box', type: 'text', description: 'Titre principal de la page d\'accueil' },
      { id: '2', section: 'hero', key: 'subtitle', value: 'Solution phygitale de santé mentale', type: 'text', description: 'Sous-titre de la page d\'accueil' },
      { id: '3', section: 'features', key: 'feature1_title', value: 'Intelligence Artificielle', type: 'text', description: 'Titre de la première fonctionnalité' },
      { id: '4', section: 'features', key: 'feature1_desc', value: 'Analyse intelligente de votre bien-être', type: 'textarea', description: 'Description de la première fonctionnalité' }
    ],
    'concept-qvt': [
      { id: '5', section: 'intro', key: 'title', value: 'Concept QVT', type: 'text', description: 'Titre de la page concept QVT' },
      { id: '6', section: 'intro', key: 'description', value: 'Découvrez notre approche innovante', type: 'textarea', description: 'Description du concept QVT' }
    ],
    'entreprise': [
      { id: '7', section: 'hero', key: 'title', value: 'Solutions Entreprise', type: 'text', description: 'Titre de la page entreprise' },
      { id: '8', section: 'benefits', key: 'benefit1', value: 'Améliorer le bien-être des équipes', type: 'text', description: 'Premier bénéfice entreprise' }
    ],
    'famille': [
      { id: '9', section: 'hero', key: 'title', value: 'QVTeen Box Famille', type: 'text', description: 'Titre de la page famille' },
      { id: '10', section: 'hero', key: 'subtitle', value: 'Pour accompagner les familles', type: 'text', description: 'Sous-titre de la page famille' }
    ]
  };

  const products = [
    { id: 1, name: "QVT Box Entreprise", price: "33", category: "Entreprise", stock: "150", status: "active" },
    { id: 2, name: "QVTeen Box Famille", price: "25", category: "Famille", stock: "89", status: "active" },
    { id: 3, name: "Box Anti-Stress", price: "49.90", category: "Entreprise", stock: "45", status: "inactive" },
    { id: 4, name: "Teen Box Créativité", price: "35", category: "Famille", stock: "67", status: "active" }
  ];

  const getFilteredContents = () => {
    if (selectedPage === 'all') {
      return Object.values(pageContents).flat();
    }
    return pageContents[selectedPage as keyof typeof pageContents] || [];
  };

  const handleEditProduct = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setProductForm({ 
        name: product.name, 
        price: product.price, 
        category: product.category, 
        stock: product.stock, 
        status: product.status 
      });
      setEditingProduct(productId);
    }
  };

  const handleSaveProduct = () => {
    toast({
      title: "Produit sauvegardé",
      description: `Le produit "${productForm.name}" a été mis à jour avec succès`
    });
    setEditingProduct(null);
  };

  const handleEditContent = (contentId: string) => {
    const allContents = getFilteredContents();
    const contentItem = allContents.find(c => c.id === contentId);
    if (contentItem) {
      setContentForm({
        key: contentItem.key,
        value: contentItem.value,
        type: contentItem.type,
        description: contentItem.description
      });
      setEditingContent(contentId);
    }
  };

  const handleSaveContent = async () => {
    try {
      // Here you would typically save to your backend
      toast({
        title: "Contenu sauvegardé",
        description: `Le contenu "${contentForm.key}" a été mis à jour avec succès`
      });
      setEditingContent(null);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de sauvegarder le contenu",
        variant: "destructive"
      });
    }
  };

  const handleDeleteProduct = (productId: number) => {
    toast({
      title: "Produit supprimé",
      description: "Le produit a été supprimé avec succès"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
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
              <h1 className="text-3xl font-bold text-gray-800">Éditeur de Contenu</h1>
              <p className="text-gray-600">Gérez le contenu et les produits de votre site</p>
            </div>
          </div>
        </div>

        <Tabs value={selectedContent} onValueChange={setSelectedContent}>
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="products">Produits</TabsTrigger>
            <TabsTrigger value="theme">Thème</TabsTrigger>
          </TabsList>

          <TabsContent value="pages" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold">Contenu des Pages</h2>
                <Select value={selectedPage} onValueChange={setSelectedPage}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Choisir une page" />
                  </SelectTrigger>
                  <SelectContent>
                    {availablePages.map((page) => (
                      <SelectItem key={page} value={page}>
                        {page === 'all' ? 'Toutes les pages' : page.charAt(0).toUpperCase() + page.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Nouveau Contenu
              </Button>
            </div>

            {/* Formulaire d'édition de contenu */}
            {editingContent && (
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Modifier le contenu</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => setEditingContent(null)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Clé du contenu</label>
                    <Input 
                      value={contentForm.key}
                      onChange={(e) => setContentForm({...contentForm, key: e.target.value})}
                      placeholder="ex: hero_title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Valeur</label>
                    {contentForm.type === 'textarea' ? (
                      <Textarea 
                        value={contentForm.value}
                        onChange={(e) => setContentForm({...contentForm, value: e.target.value})}
                        placeholder="Contenu..."
                        rows={4}
                      />
                    ) : (
                      <Input 
                        value={contentForm.value}
                        onChange={(e) => setContentForm({...contentForm, value: e.target.value})}
                        placeholder="Contenu..."
                      />
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <Input 
                      value={contentForm.description}
                      onChange={(e) => setContentForm({...contentForm, description: e.target.value})}
                      placeholder="Description du contenu..."
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSaveContent} className="bg-green-600 hover:bg-green-700">
                      <Save className="w-4 h-4 mr-2" />
                      Sauvegarder
                    </Button>
                    <Button variant="outline" onClick={() => setEditingContent(null)}>
                      Annuler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Liste des contenus */}
            <div className="grid gap-4">
              {getFilteredContents().map((contentItem) => (
                <Card key={contentItem.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex gap-2 mb-2">
                          <Badge variant="outline">{contentItem.section}</Badge>
                          <Badge variant="secondary">{contentItem.key}</Badge>
                          <Badge>{contentItem.type}</Badge>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{contentItem.key}</h3>
                        <p className="text-gray-600 text-sm mb-2">{contentItem.description}</p>
                        <div className="bg-gray-100 p-3 rounded-md">
                          <p className="text-sm">{contentItem.value}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 ml-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditContent(contentItem.id)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Gestion des Produits</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Nouveau Produit
              </Button>
            </div>

            {/* Formulaire d'édition de produit */}
            {editingProduct && (
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Modifier le produit</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => setEditingProduct(null)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom</label>
                    <Input 
                      value={productForm.name}
                      onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                      placeholder="Nom du produit"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Prix (€)</label>
                      <Input 
                        value={productForm.price}
                        onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                        placeholder="Prix"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Stock</label>
                      <Input 
                        value={productForm.stock}
                        onChange={(e) => setProductForm({...productForm, stock: e.target.value})}
                        placeholder="Quantité en stock"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Catégorie</label>
                    <select 
                      value={productForm.category}
                      onChange={(e) => setProductForm({...productForm, category: e.target.value})}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="Entreprise">Entreprise</option>
                      <option value="Famille">Famille</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Statut</label>
                    <select 
                      value={productForm.status}
                      onChange={(e) => setProductForm({...productForm, status: e.target.value})}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="active">Actif</option>
                      <option value="inactive">Inactif</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProduct} className="bg-green-600 hover:bg-green-700">
                      <Save className="w-4 h-4 mr-2" />
                      Sauvegarder
                    </Button>
                    <Button variant="outline" onClick={() => setEditingProduct(null)}>
                      Annuler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {products.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline">{product.category}</Badge>
                          <Badge variant="secondary">Stock: {product.stock}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">{product.price}€</p>
                          <p className="text-sm text-gray-600">{product.status === 'active' ? 'Actif' : 'Inactif'}</p>
                        </div>
                        <div className="flex gap-1">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditProduct(product.id)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
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

          <TabsContent value="theme" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Palette className="w-6 h-6" />
                Personnalisation du Thème
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Couleurs Principales</CardTitle>
                  <CardDescription>Personnalisez les couleurs de votre site</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Couleur primaire</label>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-teal-600 rounded border"></div>
                      <Input type="color" value="#0d9488" className="w-12 h-8 p-0 border-0" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Couleur secondaire</label>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-600 rounded border"></div>
                      <Input type="color" value="#9333ea" className="w-12 h-8 p-0 border-0" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Typographie</CardTitle>
                  <CardDescription>Gérez les polices et tailles de texte</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Police principale</label>
                    <Select defaultValue="inter">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="roboto">Roboto</SelectItem>
                        <SelectItem value="arial">Arial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminContentEditor;
