
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SharedPost {
  id: string;
  author_id: string;
  group_id: string;
  content: string;
  post_type: 'activity' | 'life_event' | 'mood_weather' | 'general';
  media_urls: string[];
  privacy_level: 'group' | 'friends' | 'private';
  created_at: string;
  updated_at: string;
  author?: {
    full_name: string;
    email: string;
  };
  bubble_rewards?: BubbleReward[];
}

interface BubbleReward {
  id: string;
  giver_id: string;
  receiver_id: string;
  bubble_type: 'soin' | 'inspiration' | 'transformation' | 'connexion';
  message?: string;
  created_at: string;
}

export const useSharedPosts = (groupId?: string) => {
  const [posts, setPosts] = useState<SharedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchPosts = async () => {
    try {
      let query = supabase
        .from('shared_posts')
        .select(`
          *,
          bubble_rewards(*),
          profiles!shared_posts_author_id_fkey(full_name, email)
        `)
        .order('created_at', { ascending: false });

      if (groupId) {
        query = query.eq('group_id', groupId);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les publications",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (
    groupId: string, 
    content: string, 
    postType: 'activity' | 'life_event' | 'mood_weather' | 'general'
  ) => {
    try {
      const { error } = await supabase
        .from('shared_posts')
        .insert({
          group_id: groupId,
          content,
          post_type: postType,
          author_id: (await supabase.auth.getUser()).data.user?.id
        });

      if (error) throw error;

      await fetchPosts();
      
      toast({
        title: "Publication partagée",
        description: "Votre publication a été partagée avec succès"
      });
    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        title: "Erreur",
        description: "Impossible de publier",
        variant: "destructive"
      });
    }
  };

  const giveBubble = async (
    postId: string, 
    receiverId: string, 
    bubbleType: 'soin' | 'inspiration' | 'transformation' | 'connexion',
    message?: string
  ) => {
    try {
      const { error } = await supabase
        .from('bubble_rewards')
        .insert({
          post_id: postId,
          receiver_id: receiverId,
          giver_id: (await supabase.auth.getUser()).data.user?.id,
          bubble_type: bubbleType,
          message
        });

      if (error) throw error;

      await fetchPosts();
      
      const bubbleEmojis = {
        soin: '🫧',
        inspiration: '🌟',
        transformation: '🌀',
        connexion: '💞'
      };

      toast({
        title: "Bulle donnée",
        description: `Vous avez donné une bulle ${bubbleEmojis[bubbleType]} !`
      });
    } catch (error) {
      console.error('Error giving bubble:', error);
      toast({
        title: "Erreur",
        description: "Impossible de donner la bulle",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [groupId]);

  return {
    posts,
    loading,
    createPost,
    giveBubble,
    refreshPosts: fetchPosts
  };
};
