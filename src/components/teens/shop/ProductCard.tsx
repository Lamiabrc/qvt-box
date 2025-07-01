
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag, Heart } from "lucide-react";
import { getProductImage } from "@/data/productImages";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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

  // Utiliser les vraies images à la place des émojis
  const getTeenProductImage = (productName: string) => {
    // Mapping spécifique pour les produits teen
    const teenImageMap: { [key: string]: string } = {
      'Casque Gaming RGB': 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Kit Art Thérapie': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Livre': 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Playlist Premium': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Veilleuse Anti-Stress': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'T-shirt QVTeen': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Écouteurs Bluetooth': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'Jeu de Cartes Émotions': 'https://images.unsplash.com/photo-1541278107931-e006523892df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    };

    return teenImageMap[productName] || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-emerald-200 soap-bubble-effect group">
      <CardHeader className="text-center pb-2">
        <div className="relative overflow-hidden rounded-lg mb-3 h-40">
          <img 
            src={getTeenProductImage(product.name)}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
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
          <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Ajouter
          </Button>
          <Button variant="outline" size="icon" className="border-emerald-300 hover:bg-emerald-50 transition-all">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
