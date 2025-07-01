
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { useStripePayment } from '@/hooks/useStripePayment';

const SubscriptionStatus = () => {
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { checkSubscription, openCustomerPortal, isProcessing } = useStripePayment();

  const fetchSubscription = async () => {
    setLoading(true);
    const data = await checkSubscription();
    setSubscription(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSubscription();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <RefreshCw className="w-6 h-6 animate-spin" />
            <span className="ml-2">Vérification de l'abonnement...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {subscription?.subscribed ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <XCircle className="w-5 h-5 text-red-600" />
          )}
          Statut de l'abonnement
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {subscription?.subscribed ? (
          <>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-800">Actif</Badge>
              <span className="text-sm text-gray-600">
                Jusqu'au {new Date(subscription.subscription.current_period_end).toLocaleDateString('fr-FR')}
              </span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Utilisateurs:</span>
                <span>{subscription.subscription.user_count}</span>
              </div>
              <div className="flex justify-between">
                <span>Box incluse:</span>
                <span>{subscription.subscription.box_subscription ? 'Oui' : 'Non'}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Prix mensuel:</span>
                <span>{subscription.subscription.total_price}€</span>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button 
                onClick={openCustomerPortal}
                disabled={isProcessing}
                className="flex-1"
              >
                <Settings className="w-4 h-4 mr-2" />
                Gérer l'abonnement
              </Button>
              <Button 
                onClick={fetchSubscription}
                variant="outline"
                size="sm"
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <Badge variant="outline" className="mb-4">Aucun abonnement actif</Badge>
            <p className="text-sm text-gray-600 mb-4">
              Souscrivez à un abonnement pour accéder à toutes les fonctionnalités
            </p>
            <Button onClick={fetchSubscription} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Vérifier à nouveau
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SubscriptionStatus;
