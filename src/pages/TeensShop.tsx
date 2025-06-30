
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingBag, 
  Star, 
  Gift, 
  Sparkles, 
  Search,
  Heart,
  Gamepad2,
  Music,
  BookOpen,
  Palette,
  Headphones,
  Coffee,
  Shirt,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";

const TeensShop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tout', icon: ShoppingBag },
    { id: 'gaming', name: 'Gaming', icon: Gamepad2 },
    { id: 'music', name: 'Musique', icon: Music },
    { id: 'books', name: 'Livres', icon: BookOpen },
    { id: 'art', name: 'Art & Créatif', icon: Palette },
    { id: 'tech', name: 'Tech', icon: Headphones },
    { id: 'lifestyle', name: 'Lifestyle', icon: Coffee },
    { id: 'fashion', name: 'Mode', icon: Shirt }
  ];

  const products = [
    {
      id: 1,
      name: "Casque Gaming RGB",
      price: 89,
      originalPrice: 129,
      category: 'gaming',
      rating: 4.8,
      reviews: 342,
      image: "🎧",
      tags: ['Populaire', 'Promo'],
      description: "Casque gaming haute qualité avec éclairage RGB personnalisable"
    },
    {
      id: 2,
      name: "Kit Art Thérapie",
      price: 35,
      category: 'art',
      rating: 4.9,
      reviews: 156,
      image: "🎨",
      tags: ['Bien-être', 'Nouveau'],
      description: "Kit complet pour l'art-thérapie et la relaxation créative"
    },
    {
      id: 3,
      name: "Livre 'Gestion du Stress Ado'",
      price: 18,
      category: 'books',
      rating: 4.7,
      reviews: 89,
      image: "📚",
      tags: ['Éducatif'],
      description: "Guide pratique pour gérer le stress et l'anxiété à l'adolescence"
    },
    {
      id: 4,
      name: "Playlist Premium 1 An",
      price: 59,
      originalPrice: 99,
      category: 'music',
      rating: 4.6,
      reviews: 234,
      image: "🎵",
      tags: ['Digital', 'Promo'],
      description: "Accès premium à toutes les playlists bien-être personnalisées"
    },
    {
      id: 5,
      name: "Veilleuse Anti-Stress",
      price: 45,
      category: 'lifestyle',
      rating: 4.8,
      reviews: 167,
      image: "💡",
      tags: ['Sommeil', 'Populaire'],
      description: "Veilleuse avec sons relaxants et projection d'étoiles"
    },
    {
      id: 6,
      name: "T-shirt QVTeen",
      price: 25,
      category: 'fashion',
      rating: 4.5,
      reviews: 78,
      image: "👕",
      tags: ['Exclusif', 'Bio'],
      description: "T-shirt 100% coton bio avec message positif personnalisable"
    },
    {
      id: 7,
      name: "Écouteurs Bluetooth",
      price: 75,
      originalPrice: 95,
      category: 'tech',
      rating: 4.7,
      reviews: 289,
      image: "🎧",
      tags: ['Tech', 'Promo'],
      description: "Écouteurs sans fil avec réduction de bruit pour la concentration"
    },
    {
      id: 8,
      name: "Jeu de Cartes Émotions",
      price: 22,
      category: 'gaming',
      rating: 4.9,
      reviews: 145,
      image: "🃏",
      tags: ['Bien-être', 'Famille'],
      description: "Jeu de cartes pour identifier et exprimer ses émotions"
    }
  ];

  const boxOffers = [
    {
      id: 'teen-box',
      name: 'Teen Box Mensuelle',
      price: 19,
      description: 'Box personnalisée selon ton profil bien-être',
      features: ['4-6 produits/mois', 'Personnalisation IA', 'Livraison gratuite'],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'premium-box',
      name: 'Premium Teen Box',
      price: 35,
      description: 'Version premium avec produits exclusifs',
      features: ['6-8 produits/mois', 'Produits exclusifs', 'Consultation coach'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'family-box',
      name: 'Family Box Complète',
      price: 49,
      description: 'Box famille avec produits ados et parents',
      features: ['Teen Box + Family Box', 'Activités communes', 'Support famille'],
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Populaire': return 'bg-red-100 text-red-800';
      case 'Promo': return 'bg-orange-100 text-orange-800';
      case 'Nouveau': return 'bg-green-100 text-green-800';
      case 'Bien-être': return 'bg-blue-100 text-blue-800';
      case 'Exclusif': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 soap-bubble-effect">Boutique Teen</Badge>
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">
            <ShoppingBag className="w-12 h-12 inline-block mr-4" />
            La Teen Box Store
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvre des produits spécialement conçus pour ton bien-être et ton épanouissement
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-emerald-200 focus:border-emerald-400"
            />
          </div>
          <Button variant="outline" className="border-emerald-300 text-emerald-700">
            <Filter className="w-4 h-4 mr-2" />
            Filtres
          </Button>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-2 h-auto p-2 bg-white/60 backdrop-blur-sm soap-bubble-effect">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex flex-col items-center p-3 data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
              >
                <category.icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            {/* Box Offers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 text-center">📦 Nos Box Mensuelles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {boxOffers.map((box) => (
                  <Card key={box.id} className="hover:shadow-xl transition-all duration-300 border-emerald-200 soap-bubble-effect">
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-br ${box.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <Gift className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-emerald-800 text-center">{box.name}</CardTitle>
                      <CardDescription className="text-center">{box.description}</CardDescription>
                      <div className="text-center">
                        <span className="text-3xl font-bold text-emerald-700">{box.price}€</span>
                        <span className="text-gray-500">/mois</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {box.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Sparkles className="w-4 h-4 text-emerald-600" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                        S'abonner maintenant
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 text-center">🛍️ Produits Individuels</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-xl transition-all duration-300 border-emerald-200 soap-bubble-effect">
                    <CardHeader className="text-center pb-2">
                      <div className="text-6xl mb-3">{product.image}</div>
                      <div className="flex flex-wrap justify-center gap-1 mb-2">
                        {product.tags.map((tag, idx) => (
                          <Badge key={idx} className={`text-xs ${getTagColor(tag)}`}>
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-lg text-emerald-800">{product.name}</CardTitle>
                      <CardDescription className="text-sm">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-emerald-700">{product.price}€</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through ml-2">{product.originalPrice}€</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Ajouter
                        </Button>
                        <Button variant="outline" size="icon" className="border-emerald-300">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Link to="/teens-home">
            <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
              Retour à l'accueil ados
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeensShop;
