import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { 
  ShoppingBag, 
  Search,
  Filter,
  Gamepad2,
  Music,
  BookOpen,
  Palette,
  Headphones,
  Coffee,
  Shirt
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";
import ProductCard from "../components/teens/shop/ProductCard";
import BoxOfferCard from "../components/teens/shop/BoxOfferCard";
import CategoryTabs from "../components/teens/shop/CategoryTabs";
import { getBoxesByCategory } from "../data/allBoxes";

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

  // Récupérer les box spécifiques aux adolescents
  const teenBoxes = getBoxesByCategory('Adolescents').map(box => ({
    id: box.id,
    name: box.name,
    price: parseInt(box.price.replace('€/mois', '')),
    description: box.description,
    features: box.features,
    gradient: box.gradient || 'from-purple-500 to-pink-500'
  }));

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

        <CategoryTabs 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <TabsContent value={selectedCategory} className="mt-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-emerald-800 mb-6 text-center">📦 Box Teen Spécialisées</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teenBoxes.map((box) => (
                <BoxOfferCard key={box.id} box={box} />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-emerald-800 mb-6 text-center">🛍️ Produits Individuels</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </TabsContent>

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
