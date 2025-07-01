
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, Users, Heart, Package, Crown, Zap } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';

interface SubscriptionPickerProps {
  type: 'enterprise' | 'family';
  onSubscribe: (planId: string, userCount: number, withBox: boolean) => void;
}

const SubscriptionPicker: React.FC<SubscriptionPickerProps> = ({ type, onSubscribe }) => {
  const { plans, calculatePrice } = useSubscription();
  const [userCounts, setUserCounts] = useState<{[key: string]: number}>({});
  const [boxSelections, setBoxSelections] = useState<{[key: string]: boolean}>({});

  const filteredPlans = plans.filter(plan => plan.type === type);

  const handleUserCountChange = (planId: string, count: number) => {
    setUserCounts(prev => ({ ...prev, [planId]: Math.max(1, count) }));
  };

  const getUserCount = (planId: string) => userCounts[planId] || 1;
  const getBoxSelection = (planId: string) => boxSelections[planId] || false;

  const getIcon = (planType: string) => {
    return planType === 'enterprise' ? <Users className="w-6 h-6" /> : <Heart className="w-6 h-6" />;
  };

  const getColorScheme = (planType: string, index: number) => {
    if (planType === 'enterprise') {
      return [
        'from-teal-500 to-cyan-500',
        'from-blue-500 to-indigo-500', 
        'from-purple-500 to-pink-500'
      ][index] || 'from-teal-500 to-cyan-500';
    } else {
      return [
        'from-pink-500 to-rose-500',
        'from-purple-500 to-violet-500',
        'from-indigo-500 to-blue-500'
      ][index] || 'from-pink-500 to-rose-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          {type === 'enterprise' ? 'Abonnements Entreprise' : 'Abonnements Famille'}
        </h2>
        <p className="text-gray-600">
          {type === 'enterprise' 
            ? 'Tarifs dégressifs selon le nombre de salariés' 
            : 'Tarifs adaptés selon le nombre d\'enfants'
          }
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredPlans.map((plan, index) => {
          const userCount = getUserCount(plan.id);
          const withBox = getBoxSelection(plan.id);
          const totalPrice = calculatePrice(plan, userCount, withBox);
          const colorScheme = getColorScheme(type, index);

          return (
            <Card key={plan.id} className={`relative hover:shadow-xl transition-all duration-300 ${index === 1 ? 'border-2 border-yellow-400 scale-105' : ''}`}>
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-400 text-yellow-900 px-4 py-1">
                    <Crown className="w-4 h-4 mr-1" />
                    Recommandé
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${colorScheme} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {getIcon(type)}
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>
                  {type === 'enterprise' 
                    ? `Jusqu'à ${plan.max_users || '∞'} salariés`
                    : `Jusqu'à ${plan.max_users || '∞'} enfants`
                  }
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Sélecteur nombre d'utilisateurs */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {type === 'enterprise' ? 'Nombre de salariés' : 'Nombre d\'enfants'}
                  </label>
                  <Input
                    type="number"
                    min="1"
                    max={plan.max_users || 999}
                    value={userCount}
                    onChange={(e) => handleUserCountChange(plan.id, parseInt(e.target.value) || 1)}
                    className="text-center"
                  />
                </div>

                {/* Option Box */}
                {plan.box_price > 0 && (
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium">Box mensuelle</span>
                    </div>
                    <Switch
                      checked={withBox}
                      onCheckedChange={(checked) => 
                        setBoxSelections(prev => ({ ...prev, [plan.id]: checked }))
                      }
                    />
                  </div>
                )}

                {/* Calcul du prix */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Prix de base:</span>
                      <span>{plan.base_price}€</span>
                    </div>
                    {userCount > 1 && (
                      <div className="flex justify-between">
                        <span>+ {userCount - 1} utilisateurs:</span>
                        <span>{plan.price_per_user * (userCount - 1)}€</span>
                      </div>
                    )}
                    {withBox && (
                      <div className="flex justify-between">
                        <span>+ {userCount} box mensuelles:</span>
                        <span>{plan.box_price * userCount}€</span>
                      </div>
                    )}
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total mensuel:</span>
                      <span className="text-green-600">{totalPrice}€</span>
                    </div>
                  </div>
                </div>

                {/* Fonctionnalités */}
                <div>
                  <h4 className="font-semibold mb-3">Fonctionnalités incluses:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bouton d'abonnement */}
                <Button
                  onClick={() => onSubscribe(plan.id, userCount, withBox)}
                  className={`w-full bg-gradient-to-r ${colorScheme} hover:opacity-90 text-white py-3`}
                  size="lg"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Choisir ce plan - {totalPrice}€/mois
                </Button>

                <div className="text-center text-xs text-gray-500">
                  ✅ 14 jours d'essai gratuit • 🔄 Résiliation facile
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SubscriptionPicker;
