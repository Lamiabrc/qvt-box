
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Package, 
  Heart, 
  Building2, 
  Star, 
  ShoppingCart,
  Plus,
  Minus,
  Check,
  Truck,
  Shield,
  RefreshCw
} from "lucide-react";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const { toast } = useToast();

  const enterpriseBoxes = [
    {
      id: 'stress-relief',
      name: 'Box Anti-Stress Entreprise',
      description: 'Kit complet pour gérer le stress au travail',
      price: 49.90,
      image: '/api/placeholder/300/200',
      features: ['Balle anti-stress', 'Thé relaxant', 'Guide mindfulness', 'Huiles essentielles'],
      category: 'Stress Management'
    },
    {
      id: 'team-building',
      name: 'Box Team Building',
      description: 'Activités pour renforcer la cohésion d\'équipe',
      price: 89.90,
      image: '/api/placeholder/300/200',
      features: ['Jeux collaboratifs', 'Défis créatifs', 'Guide animateur', 'Récompenses équipe'],
      category: 'Team Building'
    },
    {
      id: 'burnout-prevention',
      name: 'Box Prévention Burn-out',
      description: 'Outils préventifs contre l\'épuisement professionnel',
      price: 69.90,
      image: '/api/placeholder/300/200',
      features: ['Carnet de suivi', 'Techniques de respiration', 'Planning équilibré', 'SOS contacts'],
      category: 'Prevention'
    }
  ];

  const familyBoxes = [
    {
      id: 'digital-detox-teen',
      name: 'Teen Box Digital Detox',
      description: 'Aide les ados à décrocher des écrans sainement',
      price: 34.90,
      image: '/api/placeholder/300/200',
      features: ['Activités offline', 'Journal créatif', 'Jeux de société', 'Défis nature'],
      category: 'Digital Detox'
    },
    {
      id: 'communication-famille',
      name: 'Family Box Communication',
      description: 'Améliore le dialogue parents-ados',
      price: 44.90,
      image: '/api/placeholder/300/200',
      features: ['Cartes conversation', 'Activités famille', 'Guide parents', 'Temps qualité'],
      category: 'Communication'
    },
    {
      id: 'emotions-ados',
      name: 'Teen Box Gestion Émotions',
      description: 'Outils pour comprendre et gérer ses émotions',
      price: 39.90,
      image: '/api/placeholder/300/200',
      features: ['Roue des émotions', 'Techniques apaisement', 'Journal intime', 'SOS émotions'],
      category: 'Emotions'
    }
  ];

  const addToCart = (boxId: string) => {
    setCart(prev => ({ ...prev, [boxId]: (prev[boxId] || 0) + 1 }));
    toast({
      title: "Ajouté au panier",
      description: "Le produit a été ajouté à votre panier"
    });
  };

  const removeFromCart = (boxId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[boxId] > 1) {
        newCart[boxId]--;
      } else {
        delete newCart[boxId];
      }
      return newCart;
    });
  };

  const BoxCard = ({ box, type }: { box: any, type: 'enterprise' | 'family' }) => (
    <Card className="hover:shadow-xl transition-shadow group">
      <CardHeader>
        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
          <Package className={`w-16 h-16 ${type === 'enterprise' ? 'text-teal-600' : 'text-purple-600'}`} />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{box.name}</CardTitle>
            <Badge variant="outline" className="mt-1">{box.category}</Badge>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">{box.price}€</p>
            <p className="text-sm text-gray-500">TVA incluse</p>
          </div>
        </div>
        <CardDescription className="mt-2">{box.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Contenu de la box:</h4>
          <ul className="space-y-1">
            {box.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-600" />
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
                onClick={() => addToCart(box.id)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Button 
              onClick={() => addToCart(box.id)}
              className={`flex-1 ${type === 'enterprise' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-purple-600 hover:bg-purple-700'}`}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Ajouter au panier
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
            Découvrez nos box personnalisées pour améliorer le bien-être au travail et en famille
          </p>
          
          {cartItemsCount > 0 && (
            <div className="fixed top-4 right-4 z-50">
              <Button className="bg-green-600 hover:bg-green-700 rounded-full p-3">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="ml-2 bg-white text-green-600">{cartItemsCount}</Badge>
              </Button>
            </div>
          )}
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
              <h3 className="font-semibold mb-2">Qualité garantie</h3>
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
        <Tabs defaultValue="enterprise" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="enterprise" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Entreprise
            </TabsTrigger>
            <TabsTrigger value="family" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Famille
            </TabsTrigger>
          </TabsList>

          <TabsContent value="enterprise" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-teal-800 mb-2">Box Entreprise</h2>
              <p className="text-teal-600">Solutions professionnelles pour le bien-être au travail</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseBoxes.map((box) => (
                <BoxCard key={box.id} box={box} type="enterprise" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="family" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-2">Box Famille</h2>
              <p className="text-purple-600">Outils pour améliorer le bien-être familial</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {familyBoxes.map((box) => (
                <BoxCard key={box.id} box={box} type="family" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
