
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  is_from_visitor: boolean;
  created_at: string;
  admin_user_id?: string;
}

interface Conversation {
  id: string;
  visitor_id: string;
  visitor_email?: string;
  visitor_name?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export const useRealtimeChat = (visitorId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Create or get conversation
  const initializeConversation = async () => {
    try {
      // Check if conversation already exists
      const { data: existingConversation } = await supabase
        .from('conversations')
        .select('*')
        .eq('visitor_id', visitorId)
        .eq('status', 'active')
        .single();

      if (existingConversation) {
        setConversation(existingConversation);
        loadMessages(existingConversation.id);
      } else {
        // Create new conversation
        const { data: newConversation, error } = await supabase
          .from('conversations')
          .insert([{ visitor_id: visitorId }])
          .select()
          .single();

        if (error) throw error;
        
        setConversation(newConversation);
        loadMessages(newConversation.id);
      }
    } catch (error) {
      console.error('Error initializing conversation:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'initialiser la conversation",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Load messages for conversation
  const loadMessages = async (conversationId: string) => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  // Send message
  const sendMessage = async (content: string, isFromVisitor: boolean = true) => {
    if (!conversation) return;

    try {
      const { error } = await supabase
        .from('messages')
        .insert([{
          conversation_id: conversation.id,
          content,
          is_from_visitor: isFromVisitor,
          admin_user_id: isFromVisitor ? null : undefined
        }]);

      if (error) throw error;
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message",
        variant: "destructive"
      });
    }
  };

  // Set up real-time subscription
  useEffect(() => {
    if (!conversation) return;

    const channel = supabase
      .channel('messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversation.id}`
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages(prev => [...prev, newMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversation]);

  // Initialize conversation on mount
  useEffect(() => {
    initializeConversation();
  }, [visitorId]);

  return {
    messages,
    conversation,
    isLoading,
    sendMessage
  };
};
