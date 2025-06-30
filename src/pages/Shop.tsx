
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Package, 
  Star, 
  ShoppingCart,
  Plus,
  Minus,
  Check,
  Truck,
  Shield,
  RefreshCw,
  Building2,
  Heart,
  Search,
  Filter,
  Gift
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";
import { shopProducts, subscriptionBoxes, Product, SubscriptionBox } from "../data/shopProducts";
import { Link } from "react-router-dom";

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

  const ProductCard = ({ product }: { product: Product }) => (
    <Card className="hover:shadow-xl transition-shadow group h-full">
      <CardHeader className="pb-3">
        <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center">
          <span className="text-4xl">{product.image}</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {product.tags.slice(0, 2).map((tag, idx) => (
            <Badge key={idx} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-base line-clamp-2">{product.name}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">{product.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3 pt-0">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-green-600">{product.price}€</p>
            {product.originalPrice && (
              <p className="text-sm text-gray-500 line-through">{product.originalPrice}€</p>
            )}
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-sm text-amber-600">
              <Star className="w-3 h-3 fill-current" />
              <span>4.{Math.floor(Math.random() * 9) + 1}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {cart[product.id] ? (
            <div className="flex items-center gap-2 flex-1">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => removeFromCart(product.id)}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span className="font-medium min-w-[2rem] text-center">{cart[product.id]}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => addToCart(product.id)}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          ) : (
            <Button 
              onClick={() => addToCart(product.id)}
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-sm"
              size="sm"
            >
              <ShoppingCart className="w-3 h-3 mr-1" />
              Ajouter
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const BoxCard = ({ box }: { box: SubscriptionBox }) => (
    <Card className="hover:shadow-xl transition-shadow group">
      <CardHeader>
        <div className={`w-full h-40 bg-gradient-to-br ${box.gradient} rounded-lg mb-4 flex items-center justify-center`}>
          <span className="text-5xl">{box.image}</span>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{box.name}</CardTitle>
            <Badge variant="outline" className="mt-1">{box.targetAudience}</Badge>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">{box.price}€</p>
            <p className="text-sm text-gray-500">/{box.duration}</p>
          </div>
        </div>
        <CardDescription className="mt-2">{box.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Contenu de la box:</h4>
          <ul className="space-y-1 max-h-32 overflow-y-auto">
            {box.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center gap-2 pt-4">
          {cart[box.id] ? (
            <div className="flex items-center gap-2 flex-1">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => removeFromCart(box.id)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="font-medium">{cart[box.id]}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => addToCart(box.id, 'box')}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Button 
              onClick={() => addToCart(box.id, 'box')}
              className={`flex-1 bg-gradient-to-r ${box.gradient} hover:opacity-90`}
            >
              <Gift className="w-4 h-4 mr-2" />
              S'abonner
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

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
                <ProductCard key={product.id} product={product} />
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
                <BoxCard key={box.id} box={box} />
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
