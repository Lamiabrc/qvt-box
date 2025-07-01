
import React from 'react';
import SubscriptionGuard from '@/components/subscription/SubscriptionGuard';
import ConnectionsManager from '@/components/connections/ConnectionsManager';

const MyColleagues = () => {
  return (
    <SubscriptionGuard 
      requiredFeature="team_insights"
      fallbackTitle="Espace Collègues Premium"
      fallbackDescription="L'espace collègues avec partage d'état émotionnel nécessite un abonnement Professional ou Enterprise."
    >
      <div className="container mx-auto p-6">
        <ConnectionsManager
          connectionType="colleague"
          title="Mes Collègues"
          description="Restez connecté avec vos collègues et suivez leur bien-être au travail dans un esprit de soutien mutuel."
        />
      </div>
    </SubscriptionGuard>
  );
};

export default MyColleagues;
