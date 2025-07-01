
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Gift, Plus, Minus } from "lucide-react";
import { SubscriptionBox } from "@/data/shopProducts";
import { getSubscriptionBoxImage } from "@/data/productImages";

interface SubscriptionBoxImageCardProps {
  box: SubscriptionBox;
  cart: {[key: string]: number};
  onAddToCart: (itemId: string, itemType: 'product' | 'box') => void;
  onRemoveFromCart: (itemId: string) => void;
}

const SubscriptionBoxImageCard = ({ box, cart, onAddToCart, onRemoveFromCart }: SubscriptionBoxImageCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-shadow group">
      <CardHeader>
        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden">
          <img 
            src={getSubscriptionBoxImage(box.id)}
            alt={box.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
            }}
          />
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
                onClick={() => onRemoveFromCart(box.id)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="font-medium">{cart[box.id]}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onAddToCart(box.id, 'box')}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Button 
              onClick={() => onAddToCart(box.id, 'box')}
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
};

export default SubscriptionBoxImageCard;
