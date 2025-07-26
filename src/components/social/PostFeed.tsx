
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Sun, MessageSquare } from 'lucide-react';
import BubbleRewards from './BubbleRewards';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Post {
  id: string;
  author_id: string;
  content: string;
  post_type: 'activity' | 'life_event' | 'mood_weather' | 'general';
  created_at: string;
  author?: {
    full_name: string;
    email: string;
  };
  bubble_rewards?: Array<{
    id: string;
    giver_id: string;
    bubble_type: 'soin' | 'inspiration' | 'transformation' | 'connexion';
    message?: string;
  }>;
}

interface PostFeedProps {
  posts: Post[];
  loading: boolean;
  onGiveBubble: (postId: string, receiverId: string, bubbleType: 'soin' | 'inspiration' | 'transformation' | 'connexion') => Promise<void>;
  currentUserId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ posts, loading, onGiveBubble, currentUserId }) => {
  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'activity': return <Calendar className="w-4 h-4" />;
      case 'life_event': return <Heart className="w-4 h-4" />;
      case 'mood_weather': return <Sun className="w-4 h-4" />;
      default: return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case 'activity': return 'Activité';
      case 'life_event': return 'Événement de vie';
      case 'mood_weather': return 'Météo émotionelle';
      default: return 'Général';
    }
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'activity': return 'bg-blue-100 text-blue-800';
      case 'life_event': return 'bg-pink-100 text-pink-800';
      case 'mood_weather': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return <div className="p-4 text-center">Chargement des publications...</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <p>Aucune publication pour le moment.</p>
        <p className="text-sm">Soyez le premier à partager quelque chose !</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="font-medium">
                    {post.author?.full_name || post.author?.email || 'Utilisateur'}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {formatDistanceToNow(new Date(post.created_at), { 
                      addSuffix: true, 
                      locale: fr 
                    })}
                  </p>
                </div>
              </div>
              <Badge 
                variant="secondary" 
                className={`${getPostTypeColor(post.post_type)} flex items-center gap-1`}
              >
                {getPostTypeIcon(post.post_type)}
                {getPostTypeLabel(post.post_type)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800 whitespace-pre-wrap mb-3">{post.content}</p>
            
            <BubbleRewards
              postId={post.id}
              receiverId={post.author_id}
              bubbleRewards={post.bubble_rewards || []}
              onGiveBubble={onGiveBubble}
              currentUserId={currentUserId}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostFeed;
