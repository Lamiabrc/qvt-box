
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Package, 
  Sparkles, 
  Heart, 
  Settings, 
  ShoppingCart,
  Plus,
  Minus,
  Check
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getRecommendedBoxes } from "../data/boxRecommendations";

const MyBox = () => {
  const location = useLocation();
  const { score = 8, userType = 'independent' } = location.state || {};
  
  const [selectedBox, setSelectedBox] = useState(null);
  const [customizations, setCustomizations] = useState({
    aromatherapy: false,
    tea: true,
    books: false,
    exercises: true,
    snacks: false
  });

  const recommendedBoxes = getRecommendedBoxes(score, userType);
  
  const availableCustomizations = [
    { id: 'aromatherapy', name: 'Aromathérapie', price: 8, icon: '🌿' },
    { id: 'tea', name: 'Thés & Infusions', price: 6, icon: '🍃' },
    { id: 'books', name: 'Livre bien-être', price: 12, icon: '📚' },
    { id: 'exercises', name: 'Guide exercices', price: 5, icon: '🧘' },
    { id: 'snacks', name: 'Snacks sains', price: 7, icon: '🥜' },
    { id: 'journal', name: 'Journal émotionnel', price: 9, icon: '📔' },
    { id: 'music', name: 'Playlist bien-être', price: 4, icon: '🎵' }
  ];

  const getScoreColor = (score) => {
    if (score <= 3) return 'text-red-600 bg-red-50';
    if (score <= 6) return 'text-orange-600 bg-orange-50';
    if (score <= 9) return 'text-yellow-600 bg-yellow-50';
    if (score <= 12) return 'text-green-600 bg-green-50';
    return 'text-blue-600 bg-blue-50';
  };

  const calculateTotalPrice = (basePrice) => {
    const customizationPrice = Object.entries(customizations)
      .filter(([_, selected]) => selected)
      .reduce((total, [id, _]) => {
        const customization = availableCustomizations.find(c => c.id === id);
        return total + (customization?.price || 0);
      }, 0);
    
    return parseInt(basePrice.replace('€/mois', '')) + customizationPrice;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className={`mb-4 ${getScoreColor(score)}`}>
            Score QVT: {score}/15
          </Badge>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <Package className="w-12 h-12 inline-block mr-4 text-trust" />
            Ma Box Personnalisée
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Créez votre box bien-être sur mesure selon vos besoins émotionnels
          </p>
        </div>

        <Tabs defaultValue="recommended" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="recommended" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Recommandées
            </TabsTrigger>
            <TabsTrigger value="customize" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Personnaliser
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Box Recommandées pour Vous</h2>
              <p className="text-gray-600 mb-6">Basées sur votre score QVT et votre profil</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {recommendedBoxes.map((box) => (
                <Card key={box.id} className={`hover:shadow-xl transition-all duration-300 border-2 ${selectedBox?.id === box.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
                  <CardHeader>
                    <div className={`w-16 h-16 ${box.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-gray-800 text-center">{box.name}</CardTitle>
                    <CardDescription className="text-center">{box.description}</CardDescription>
                    <div className="text-center">
                      <span className="text-3xl font-bold text-gray-700">{box.price}</span>
                    </div>
                    <Badge className={`mx-auto bg-${box.emotionalState}`}>
                      {box.evaluationScale}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {box.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${box.gradient} text-white`}
                      onClick={() => setSelectedBox(box)}
                    >
                      {selectedBox?.id === box.id ? 'Sélectionnée' : 'Sélectionner cette box'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="customize" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Personnalisez Votre Box</h2>
              <p className="text-gray-600 mb-6">Ajoutez ou retirez des éléments selon vos préférences</p>
            </div>

            {selectedBox && (
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-6 h-6 text-trust" />
                    Personnalisation de: {selectedBox.name}
                  </CardTitle>
                  <CardDescription>
                    Prix de base: {selectedBox.price} + options personnalisées
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {availableCustomizations.map((item) => (
                      <Card key={item.id} className={`cursor-pointer transition-all ${customizations[item.id] ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <div className="text-2xl mb-2">{item.icon}</div>
                            <h3 className="font-medium mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">+{item.price}€</p>
                            <Button
                              variant={customizations[item.id] ? "default" : "outline"}
                              size="sm"
                              onClick={() => setCustomizations(prev => ({
                                ...prev,
                                [item.id]: !prev[item.id]
                              }))}
                              className="w-full"
                            >
                              {customizations[item.id] ? (
                                <>
                                  <Minus className="w-4 h-4 mr-1" />
                                  Retirer
                                </>
                              ) : (
                                <>
                                  <Plus className="w-4 h-4 mr-1" />
                                  Ajouter
                                </>
                              )}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-medium">Total mensuel:</span>
                      <span className="text-2xl font-bold text-trust">
                        {calculateTotalPrice(selectedBox.price)}€/mois
                      </span>
                    </div>
                    <Button className="w-full gradient-trust text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Ajouter au panier
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {!selectedBox && (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Sélectionnez d'abord une box recommandée pour la personnaliser</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Link to="/independent-portal">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Retour à mon espace
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyBox;
