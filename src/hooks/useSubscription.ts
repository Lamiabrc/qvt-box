
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SubscriptionPlan {
  id: string;
  name: string;
  type: 'enterprise' | 'family';
  base_price: number;
  price_per_user: number;
  max_users: number | null;
  features: string[];
  box_included: boolean;
  box_price: number;
}

interface ActiveSubscription {
  id: string;
  plan_id: string;
  status: string;
  user_count: number;
  box_subscription: boolean;
  total_price: number;
  current_period_end: string;
  plan?: SubscriptionPlan;
}

export const useSubscription = () => {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [activeSubscription, setActiveSubscription] = useState<ActiveSubscription | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchPlans = async () => {
    try {
      const { data, error } = await supabase
        .from('subscription_plans')
        .select('*')
        .order('base_price');
      
      if (error) throw error;
      setPlans(data || []);
    } catch (error) {
      console.error('Error fetching plans:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les plans d'abonnement",
        variant: "destructive"
      });
    }
  };

  const fetchActiveSubscription = async () => {
    try {
      const { data, error } = await supabase
        .from('active_subscriptions')
        .select(`
          *,
          subscription_plans(*)
        `)
        .eq('status', 'active')
        .single();
      
      if (error && error.code !== 'PGRST116') throw error;
      setActiveSubscription(data || null);
    } catch (error) {
      console.error('Error fetching subscription:', error);
    }
  };

  const hasFeatureAccess = async (featureName: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase
        .rpc('has_feature_access', { feature_name: featureName });
      
      if (error) throw error;
      return data || false;
    } catch (error) {
      console.error('Error checking feature access:', error);
      return false;
    }
  };

  const calculatePrice = (plan: SubscriptionPlan, userCount: number, withBox: boolean = false) => {
    const basePrice = plan.base_price + (plan.price_per_user * Math.max(0, userCount - 1));
    const boxPrice = withBox ? plan.box_price * userCount : 0;
    return basePrice + boxPrice;
  };

  useEffect(() => {
    fetchPlans();
    fetchActiveSubscription();
    setLoading(false);
  }, []);

  return {
    plans,
    activeSubscription,
    loading,
    hasFeatureAccess,
    calculatePrice,
    refreshSubscription: fetchActiveSubscription
  };
};
