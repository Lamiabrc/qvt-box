
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, ArrowLeft, Plus, Edit, Trash2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import PageEditor from "../components/admin/PageEditor";

const AdminContentEditor = () => {
  const [selectedContent, setSelectedContent] = useState('pages');
  const [editingProduct, setEditingProduct] = useState<number | null>(null);
  const [productForm, setProductForm] = useState({ name: '', price: '', category: '', stock: '', status: 'active' });
  const { toast } = useToast();

  const products = [
    { id: 1, name: "QVT Box Entreprise", price: "33", category: "Entreprise", stock: "150", status: "active" },
    { id: 2, name: "QVTeen Box Famille", price: "25", category: "Famille", stock: "89", status: "active" },
    { id: 3, name: "Box Anti-Stress", price: "49.90", category: "Entreprise", stock: "45", status: "inactive" },
    { id: 4, name: "Teen Box Créativité", price: "35", category: "Famille", stock: "67", status: "active" },
    { id: 5, name: "Family Box Harmonie", price: "42", category: "Famille", stock: "23", status: "active" },
    { id: 6, name: "Manager Box Leadership", price: "55", category: "Entreprise", stock: "78", status: "active" }
  ];

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
              <p className="text-gray-600">Gérez vos pages et produits</p>
            </div>
          </div>
        </div>

        <Tabs value={selectedContent} onValueChange={setSelectedContent}>
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="products">Produits</TabsTrigger>
          </TabsList>

          <TabsContent value="pages" className="space-y-6">
            <PageEditor />
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
        </Tabs>
      </div>
    </div>
  );
};

export default AdminContentEditor;
