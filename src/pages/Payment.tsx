
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import FloatingBubbles from "../components/FloatingBubbles";
import SubscriptionPicker from "@/components/subscription/SubscriptionPicker";

const Payment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleSubscription = async (planId: string, userCount: number, withBox: boolean) => {
    setIsProcessing(true);
    
    try {
      // Simulation d'intégration Stripe avec les nouveaux paramètres
      toast({
        title: "Redirection vers Stripe...",
        description: `Préparation de votre abonnement (${userCount} utilisateurs${withBox ? ' + box' : ''})`
      });

      // Ici, vous intégreriez la vraie API Stripe avec les détails de l'abonnement
      setTimeout(() => {
        const stripeUrl = `https://checkout.stripe.com/c/pay/plan-${planId}?users=${userCount}&box=${withBox}`;
        window.open(stripeUrl, '_blank');
        
        toast({
          title: "Paiement initié",
          description: "Fenêtre Stripe ouverte dans un nouvel onglet"
        });
        
        setIsProcessing(false);
      }, 2000);

    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'initier le paiement. Veuillez réessayer.",
        variant: "destructive"
      });
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">
            Choisissez votre abonnement QVT Box
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Des solutions adaptées à vos besoins avec tarification flexible selon le nombre d'utilisateurs
          </p>
        </div>

        {/* Onglets Entreprise/Famille */}
        <Tabs defaultValue="enterprise" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto">
            <TabsTrigger value="enterprise" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Entreprise
            </TabsTrigger>
            <TabsTrigger value="family" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Famille
            </TabsTrigger>
          </TabsList>

          <TabsContent value="enterprise">
            <SubscriptionPicker 
              type="enterprise" 
              onSubscribe={handleSubscription}
            />
          </TabsContent>

          <TabsContent value="family">
            <SubscriptionPicker 
              type="family" 
              onSubscribe={handleSubscription}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Payment;
