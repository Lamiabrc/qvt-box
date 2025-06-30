
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag, Heart } from "lucide-react";

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

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-emerald-200 soap-bubble-effect">
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
  );
};

export default ProductCard;
