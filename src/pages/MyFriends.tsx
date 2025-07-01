
import React from 'react';
import SubscriptionGuard from '@/components/subscription/SubscriptionGuard';
import ConnectionsManager from '@/components/connections/ConnectionsManager';

const MyFriends = () => {
  return (
    <SubscriptionGuard 
      requiredFeature="teen_connections"
      fallbackTitle="Espace Potes Premium"
      fallbackDescription="L'espace potes avec partage d'état émotionnel nécessite un abonnement QVTeen Plus ou Premium."
    >
      <div className="container mx-auto p-6">
        <ConnectionsManager
          connectionType="friend"
          title="Mes Potes"
          description="Ton espace privé pour rester connecté avec tes vrais potes et partager ton état d'esprit en toute confiance."
        />
      </div>
    </SubscriptionGuard>
  );
};

export default MyFriends;
