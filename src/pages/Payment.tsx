
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, CreditCard, Shield, Zap, Package, Users, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import FloatingBubbles from "../components/FloatingBubbles";

const Payment = () => {
  const [selectedPlan, setSelectedPlan] = useState<'enterprise' | 'family' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const plans = [
    {
      id: 'enterprise',
      name: 'QVT Box Entreprise',
      price: '33€',
      period: 'par salarié/mois',
      color: 'from-teal-500 to-cyan-500',
      icon: Users,
      features: [
        'Évaluateur bien-être IA',
        'Dashboard RH complet',
        'Box mensuelles personnalisées',
        'Analytics prédictifs',
        'Support prioritaire',
        'Formation équipes'
      ],
      popular: true
    },
    {
      id: 'family',
      name: 'QVTeen Box Famille',
      price: '25€',
      period: 'par famille/mois',
      color: 'from-purple-500 to-pink-500',
      icon: Heart,
      features: [
        'Espace ados sécurisé',
        'Dashboard parents',
        'Teen Box & Family Box',
        'IA communication familiale',
        'Suivi digital detox',
        'Activités reconnexion'
      ],
      popular: false
    }
  ];

  const handlePayment = async (planId: string) => {
    setIsProcessing(true);
    setSelectedPlan(planId as 'enterprise' | 'family');
    
    try {
      // Simulation d'intégration Stripe
      toast({
        title: "Redirection vers Stripe...",
        description: "Préparation de votre paiement sécurisé"
      });

      // Ici, vous intégreriez la vraie API Stripe
      setTimeout(() => {
        // Simulation d'ouverture Stripe Checkout
        const stripeUrl = `https://checkout.stripe.com/c/pay/demo#${planId}`;
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
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Paiement Sécurisé</Badge>
          <h1 className="text-4xl font-bold text-slate-800 mb-6">
            Choisissez votre abonnement QVT Box
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Solutions professionnelles pour votre bien-être et celui de votre famille
          </p>
          
          {/* Sécurité */}
          <div className="flex justify-center items-center gap-6 text-sm text-slate-500 mb-8">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Paiement 100% sécurisé</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-600" />
              <span>Stripe certifié</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-600" />
              <span>Annulation facile</span>
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan) => (
            <Card key={plan.id} className={`relative hover:shadow-2xl transition-all duration-300 border-2 hover:scale-105 ${plan.popular ? 'border-yellow-400' : 'border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-400 text-yellow-900 px-4 py-1">
                    ⭐ Le plus populaire
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <plan.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-800 mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                  <span className="text-slate-600 ml-2">{plan.period}</span>
                </div>
                <CardDescription className="text-base">
                  Solution complète adaptée à vos besoins
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Inclus dans votre abonnement :</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <Button 
                  onClick={() => handlePayment(plan.id)}
                  disabled={isProcessing && selectedPlan === plan.id}
                  className={`w-full ${plan.id === 'enterprise' ? 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'} text-white py-4 text-lg`}
                  size="lg"
                >
                  {isProcessing && selectedPlan === plan.id ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Redirection...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Choisir ce plan
                    </div>
                  )}
                </Button>
                
                {/* Garanties */}
                <div className="text-center text-sm text-slate-500">
                  <p>✅ 14 jours d'essai gratuit</p>
                  <p>🔄 Résiliation à tout moment</p>
                  <p>💬 Support client 7j/7</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Paiement */}
        <Card className="max-w-4xl mx-auto bg-white/80 border-slate-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-800">
              Questions fréquentes sur le paiement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">🔒 Sécurité</h4>
                <p className="text-slate-600">Tous les paiements sont traités par Stripe, leader mondial du paiement en ligne sécurisé.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💳 Moyens de paiement</h4>
                <p className="text-slate-600">Cartes Visa, Mastercard, American Express, PayPal et virements SEPA acceptés.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔄 Facturation</h4>
                <p className="text-slate-600">Facturation mensuelle automatique. Annulation possible à tout moment sans frais.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">📧 Support</h4>
                <p className="text-slate-600">Équipe support disponible 7j/7 pour toute question sur votre abonnement.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Payment;
