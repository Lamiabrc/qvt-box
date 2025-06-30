
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles } from "lucide-react";

interface BoxOffer {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  gradient: string;
}

interface BoxOfferCardProps {
  box: BoxOffer;
}

const BoxOfferCard = ({ box }: BoxOfferCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-emerald-200 soap-bubble-effect">
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
  );
};

export default BoxOfferCard;
