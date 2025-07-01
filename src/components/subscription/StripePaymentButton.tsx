
import React from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard, Loader2 } from 'lucide-react';
import { useStripePayment } from '@/hooks/useStripePayment';

interface StripePaymentButtonProps {
  planId: string;
  userCount: number;
  withBox: boolean;
  totalPrice: number;
  disabled?: boolean;
  className?: string;
}

const StripePaymentButton: React.FC<StripePaymentButtonProps> = ({
  planId,
  userCount,
  withBox,
  totalPrice,
  disabled = false,
  className = ""
}) => {
  const { isProcessing, createCheckoutSession } = useStripePayment();

  const handlePayment = async () => {
    await createCheckoutSession(planId, userCount, withBox);
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={disabled || isProcessing}
      className={`w-full ${className}`}
      size="lg"
    >
      {isProcessing ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Redirection...
        </>
      ) : (
        <>
          <CreditCard className="w-4 h-4 mr-2" />
          Payer {totalPrice}€/mois
        </>
      )}
    </Button>
  );
};

export default StripePaymentButton;
