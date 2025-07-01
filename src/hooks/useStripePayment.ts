
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useStripePayment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const createCheckoutSession = async (planId: string, userCount: number, withBox: boolean) => {
    setIsProcessing(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { planId, userCount, withBox }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
        toast({
          title: "Redirection vers Stripe",
          description: "La page de paiement s'ouvre dans un nouvel onglet"
        });
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast({
        title: "Erreur de paiement",
        description: error.message || "Impossible d'initier le paiement",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const checkSubscription = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription');
      
      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error: any) {
      console.error('Check subscription error:', error);
      toast({
        title: "Erreur",
        description: "Impossible de vérifier l'abonnement",
        variant: "destructive"
      });
      return { subscribed: false, subscription: null };
    }
  };

  const openCustomerPortal = async () => {
    setIsProcessing(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal');
      
      if (error) {
        throw new Error(error.message);
      }

      if (data?.url) {
        window.open(data.url, '_blank');
        toast({
          title: "Portail client ouvert",
          description: "Gérez votre abonnement dans le nouvel onglet"
        });
      }
    } catch (error: any) {
      console.error('Customer portal error:', error);
      toast({
        title: "Erreur",
        description: error.message || "Impossible d'ouvrir le portail client",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    isProcessing,
    createCheckoutSession,
    checkSubscription,
    openCustomerPortal
  };
};
