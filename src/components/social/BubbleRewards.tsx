
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BubbleRewardsProps {
  postId: string;
  receiverId: string;
  bubbleRewards: Array<{
    id: string;
    giver_id: string;
    bubble_type: 'soin' | 'inspiration' | 'transformation' | 'connexion';
    message?: string;
  }>;
  onGiveBubble: (postId: string, receiverId: string, bubbleType: 'soin' | 'inspiration' | 'transformation' | 'connexion') => Promise<void>;
  currentUserId?: string;
}

const BubbleRewards: React.FC<BubbleRewardsProps> = ({ 
  postId, 
  receiverId, 
  bubbleRewards, 
  onGiveBubble,
  currentUserId 
}) => {
  const bubbleTypes = [
    { type: 'soin', emoji: '🫧', label: 'Soin' },
    { type: 'inspiration', emoji: '🌟', label: 'Inspiration' },
    { type: 'transformation', emoji: '🌀', label: 'Transformation' },
    { type: 'connexion', emoji: '💞', label: 'Connexion' }
  ] as const;

  const getBubbleCount = (type: string) => {
    return bubbleRewards.filter(reward => reward.bubble_type === type).length;
  };

  const hasUserGivenBubble = (type: string) => {
    return bubbleRewards.some(reward => 
      reward.bubble_type === type && reward.giver_id === currentUserId
    );
  };

  const handleGiveBubble = async (type: 'soin' | 'inspiration' | 'transformation' | 'connexion') => {
    if (currentUserId === receiverId) return; // Ne pas pouvoir se donner des bulles à soi-même
    
    await onGiveBubble(postId, receiverId, type);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {bubbleTypes.map(({ type, emoji, label }) => {
        const count = getBubbleCount(type);
        const hasGiven = hasUserGivenBubble(type);
        const isOwnPost = currentUserId === receiverId;

        return (
          <div key={type} className="flex items-center gap-1">
            <Button
              variant={hasGiven ? "default" : "outline"}
              size="sm"
              onClick={() => handleGiveBubble(type)}
              disabled={isOwnPost || hasGiven}
              className="h-8 px-2"
            >
              <span className="mr-1">{emoji}</span>
              <span className="text-xs">{label}</span>
            </Button>
            {count > 0 && (
              <Badge variant="secondary" className="h-6 px-2">
                {count}
              </Badge>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BubbleRewards;
