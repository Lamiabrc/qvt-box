
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import { useStripePayment } from '@/hooks/useStripePayment';
import FloatingBubbles from '@/components/FloatingBubbles';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { checkSubscription } = useStripePayment();

  useEffect(() => {
    const fetchSubscription = async () => {
      if (sessionId) {
        // Wait a moment for Stripe to process
        setTimeout(async () => {
          const data = await checkSubscription();
          setSubscription(data);
          setLoading(false);
        }, 2000);
      } else {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center shadow-xl">
            <CardHeader className="pb-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <CardTitle className="text-3xl text-green-800 mb-2">
                Paiement réussi !
              </CardTitle>
              <p className="text-lg text-gray-600">
                Bienvenue dans l'univers QVT Box
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {loading ? (
                <div className="py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto mb-4" />
                  <p className="text-gray-600">Activation de votre abonnement...</p>
                </div>
              ) : subscription?.subscribed ? (
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">
                      Votre abonnement est maintenant actif
                    </h3>
                    <div className="text-sm text-green-700 space-y-1">
                      <p>• {subscription.subscription.user_count} utilisateur(s) inclus</p>
                      <p>• {subscription.subscription.box_subscription ? 'Box mensuelle incluse' : 'Sans box mensuelle'}</p>
                      <p>• Facturé {subscription.subscription.total_price}€ par mois</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Prochaines étapes :</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Complétez votre profil</li>
                      <li>• Invitez votre équipe ou votre famille</li>
                      <li>• Commencez votre première évaluation QVT</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-amber-800">
                    Votre paiement a été traité avec succès. L'activation de votre abonnement peut prendre quelques minutes.
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link to="/employee-dashboard" className="flex-1">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Accéder au tableau de bord
                  </Button>
                </Link>
                <Link to="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Home className="w-4 h-4 mr-2" />
                    Retour à l'accueil
                  </Button>
                </Link>
              </div>

              <div className="text-xs text-gray-500 pt-4">
                Session ID: {sessionId || 'Non disponible'}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
