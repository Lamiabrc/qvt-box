
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Package, 
  ShoppingCart,
  Check,
  Truck,
  Shield,
  RefreshCw,
  Search,
  Filter,
  Gift
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";
import { shopProducts, subscriptionBoxes } from "../data/shopProducts";
import { Link } from "react-router-dom";
import ProductImageCard from "../components/shop/ProductImageCard";
import SubscriptionBoxImageCard from "../components/shop/SubscriptionBoxImageCard";

const Shop = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'Tous les produits', color: 'bg-gray-100' },
    { id: 'detente', name: 'Détente & Relaxation', color: 'bg-blue-100' },
    { id: 'bureau', name: 'Bureau & Organisation', color: 'bg-green-100' },
    { id: 'nutrition', name: 'Nutrition & Gourmandise', color: 'bg-orange-100' },
    { id: 'sante', name: 'Santé & TMS', color: 'bg-red-100' },
    { id: 'aromatherapie', name: 'Bien-être & Aromathérapie', color: 'bg-purple-100' },
    { id: 'hygiene', name: 'Hygiène & Nomade', color: 'bg-cyan-100' }
  ];

  const boxCategories = [
    { id: 'all', name: 'Toutes les box', color: 'bg-gray-100' },
    { id: 'entreprise', name: 'Entreprise', color: 'bg-teal-100' },
    { id: 'sante', name: 'Santé & TMS', color: 'bg-red-100' },
    { id: 'famille', name: 'Famille', color: 'bg-pink-100' },
    { id: 'prestige', name: 'Prestige', color: 'bg-yellow-100' },
    { id: 'celebration', name: 'Célébration', color: 'bg-emerald-100' }
  ];

  const addToCart = (itemId: string, itemType: 'product' | 'box' = 'product') => {
    setCart(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    toast({
      title: "Ajouté au panier",
      description: "Le produit a été ajouté à votre panier"
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const filteredProducts = shopProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredBoxes = subscriptionBoxes.filter(box => {
    const matchesSearch = box.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         box.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || box.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const cartItemsCount = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Boutique QVT Box
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
            Découvrez notre collection complète de produits bien-être 100% Made in France
          </p>
          
          {cartItemsCount > 0 && (
            <Link to="/cart" className="fixed top-20 right-4 z-50">
              <Button className="bg-green-600 hover:bg-green-700 rounded-full p-3 shadow-lg">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="ml-2 bg-white text-green-600">{cartItemsCount}</Badge>
              </Button>
            </Link>
          )}
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher un produit ou une box..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtres
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-green-200 bg-green-50">
            <CardContent className="p-6">
              <Truck className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Livraison gratuite</h3>
              <p className="text-sm text-gray-600">À partir de 50€ d'achat</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">100% Made in France</h3>
              <p className="text-sm text-gray-600">Produits certifiés bien-être</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-purple-200 bg-purple-50">
            <CardContent className="p-6">
              <RefreshCw className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Abonnement flexible</h3>
              <p className="text-sm text-gray-600">Résiliable à tout moment</p>
            </CardContent>
          </Card>
        </div>

        {/* Products */}
        <Tabs defaultValue="products" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Produits
            </TabsTrigger>
            <TabsTrigger value="boxes" className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              Box Abonnement
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-teal-800 mb-4">Produits Individuels</h2>
              <p className="text-teal-600 mb-6">Choisissez vos produits bien-être à l'unité</p>
              
              {/* Product Categories */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={selectedCategory === cat.id ? "bg-teal-600 hover:bg-teal-700" : ""}
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductImageCard 
                  key={product.id} 
                  product={product}
                  cart={cart}
                  onAddToCart={addToCart}
                  onRemoveFromCart={removeFromCart}
                />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Aucun produit trouvé pour cette recherche.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="boxes" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Box d'Abonnement</h2>
              <p className="text-purple-600 mb-6">Recevez chaque mois une sélection de produits personnalisés</p>
              
              {/* Box Categories */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {boxCategories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={selectedCategory === cat.id ? "bg-purple-600 hover:bg-purple-700" : ""}
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBoxes.map((box) => (
                <SubscriptionBoxImageCard 
                  key={box.id} 
                  box={box}
                  cart={cart}
                  onAddToCart={addToCart}
                  onRemoveFromCart={removeFromCart}
                />
              ))}
            </div>
            
            {filteredBoxes.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Aucune box trouvée pour cette recherche.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
