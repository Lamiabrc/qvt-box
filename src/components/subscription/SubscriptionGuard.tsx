
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Crown, Zap } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';
import { Link } from 'react-router-dom';

interface SubscriptionGuardProps {
  children: React.ReactNode;
  requiredFeature: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
}

const SubscriptionGuard: React.FC<SubscriptionGuardProps> = ({
  children,
  requiredFeature,
  fallbackTitle = "Fonctionnalité Premium",
  fallbackDescription = "Cette fonctionnalité nécessite un abonnement actif."
}) => {
  const { hasFeatureAccess, activeSubscription, loading } = useSubscription();
  const [hasAccess, setHasAccess] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      const access = await hasFeatureAccess(requiredFeature);
      setHasAccess(access);
      setCheckingAccess(false);
    };
    
    if (!loading) {
      checkAccess();
    }
  }, [requiredFeature, hasFeatureAccess, loading]);

  if (loading || checkingAccess) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600" />
      </div>
    );
  }

  if (hasAccess) {
    return <>{children}</>;
  }

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-2xl mx-auto border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-amber-800">{fallbackTitle}</CardTitle>
          <CardDescription className="text-lg">{fallbackDescription}</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {activeSubscription ? (
            <div className="text-center">
              <Badge variant="outline" className="mb-4">
                Plan actuel: {activeSubscription.plan?.name}
              </Badge>
              <p className="text-gray-600 mb-4">
                Votre plan actuel ne donne pas accès à cette fonctionnalité.
              </p>
              <Link to="/payment">
                <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                  <Crown className="w-4 h-4 mr-2" />
                  Mettre à niveau mon abonnement
                </Button>
              </Link>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Vous n'avez pas d'abonnement actif. Souscrivez dès maintenant pour accéder à toutes nos fonctionnalités.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/payment">
                  <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                    <Zap className="w-4 h-4 mr-2" />
                    Voir les abonnements
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SubscriptionGuard;
