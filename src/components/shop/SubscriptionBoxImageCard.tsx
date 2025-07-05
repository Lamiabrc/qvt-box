
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Plus, Minus, Package, Clock } from "lucide-react";
import { SubscriptionBox } from "@/data/shopProducts";

interface SubscriptionBoxImageCardProps {
  box: SubscriptionBox;
  cart: {[key: string]: number};
  onAddToCart: (itemId: string) => void;
  onRemoveFromCart: (itemId: string) => void;
}

const SubscriptionBoxImageCard = ({ box, cart, onAddToCart, onRemoveFromCart }: SubscriptionBoxImageCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'entreprise': return 'bg-teal-100 text-teal-800';
      case 'sante': return 'bg-red-100 text-red-800';
      case 'famille': return 'bg-pink-100 text-pink-800';
      case 'prestige': return 'bg-yellow-100 text-yellow-800';
      case 'celebration': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getBoxImage = (boxName: string) => {
    const imageMap: { [key: string]: string } = {
      'QVT Box Télétravail Confort': 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'QVT Box Bureau Détente': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'Kit Retraite "Souvenirs de carrière"': 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'QVT Box Prévention TMS': 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'QVT Box Nomade & Mobilité': 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'QVT Box Cohésion Équipe': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'QVT Box Équilibre Familial': 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'QVT Box Soutien Moral': 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'QVT Box Prestige Dirigeant': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'QVT Box Promotion "Nouvel Élan"': 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    };
    
    return imageMap[boxName] || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
  };

  return (
    <Card className={`hover:shadow-xl transition-all duration-300 group h-full bg-gradient-to-br ${box.gradient} text-white relative overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
        <img 
          src={getBoxImage(box.name)}
          alt={box.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader className="pb-3 relative z-10">
        <div className="flex items-start justify-between mb-3">
          <Badge className={`text-xs ${getCategoryColor(box.category)} bg-white/90`}>
            {box.category}
          </Badge>
          <div className="text-right">
            <div className="flex items-center gap-1 text-sm text-yellow-300">
              <Star className="w-3 h-3 fill-current" />
              <span>4.{Math.floor(Math.random() * 9) + 1}</span>
            </div>
          </div>
        </div>
        
        <CardTitle className="text-lg text-white">{box.name}</CardTitle>
        <CardDescription className="text-white/90 text-sm">{box.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 relative z-10">
        {/* Features Preview */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-white/90 mb-2">Contenu de la box :</p>
          <div className="space-y-1">
            {box.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-white/80">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                <span>{feature}</span>
              </div>
            ))}
            {box.features.length > 3 && (
              <p className="text-xs text-white/70">+{box.features.length - 3} autres produits</p>
            )}
          </div>
        </div>

        {/* Delivery Info */}
        <div className="flex items-center gap-2 text-sm text-white/80 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
          <Clock className="w-4 h-4" />
          <span>Livraison {box.duration}</span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2 border-t border-white/20">
          <div>
            <p className="text-2xl font-bold text-white">{box.price}€</p>
            <p className="text-xs text-white/70">par mois</p>
          </div>
          
          {cart[box.id] ? (
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onRemoveFromCart(box.id)}
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span className="font-medium min-w-[2rem] text-center text-white">{cart[box.id]}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onAddToCart(box.id)}
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          ) : (
            <Button 
              onClick={() => onAddToCart(box.id)}
              className="bg-white text-gray-800 hover:bg-white/90 px-4 shadow-lg"
              size="sm"
            >
              <Package className="w-4 h-4 mr-2" />
              S'abonner
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionBoxImageCard;
