import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Plus, Minus } from "lucide-react";
import { Product } from "@/data/shopProducts";
import { DEFAULT_PRODUCT_IMAGE } from "@/data/realProductImages"; // ✅ remplacement correct

interface ProductImageCardProps {
  product: Product;
  cart: {[key: string]: number};
  onAddToCart: (itemId: string) => void;
  onRemoveFromCart: (itemId: string) => void;
}

const ProductImageCard = ({ product, cart, onAddToCart, onRemoveFromCart }: ProductImageCardProps) => {
  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'made in france': return 'bg-blue-100 text-blue-800';
      case 'bio': return 'bg-green-100 text-green-800';
      case 'promo': return 'bg-red-100 text-red-800';
      case 'nouveau': return 'bg-purple-100 text-purple-800';
      case 'populaire': return 'bg-orange-100 text-orange-800';
      case 'artisanal': return 'bg-amber-100 text-amber-800';
      case 'exclusif': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-xl transition-shadow group h-full">
      <CardHeader className="pb-3">
        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 overflow-hidden">
          <img 
            src={product.image ?? DEFAULT_PRODUCT_IMAGE}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = DEFAULT_PRODUCT_IMAGE;
            }}
          />
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {product.tags.slice(0, 2).map((tag, idx) => (
            <Badge key={idx} className={`text-xs ${getTagColor(tag)}`}>
              {tag}
            </Badge>
          ))}
          {product.madeInFrance && (
            <Badge className="text-xs bg-blue-100 text-blue-800">
              🇫🇷 Made in France
            </Badge>
          )}
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
                onClick={() => onRemoveFromCart(product.id)}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span className="font-medium min-w-[2rem] text-center">{cart[product.id]}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onAddToCart(product.id)}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          ) : (
            <Button 
              onClick={() => onAddToCart(product.id)}
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
};

export default ProductImageCard;
