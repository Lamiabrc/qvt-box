
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  conversation_id: string;
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
  const [isConnected, setIsConnected] = useState(false);
  const { toast } = useToast();

  // Create or get conversation
  const initializeConversation = async () => {
    try {
      console.log('🔄 Initializing conversation for visitor:', visitorId);
      
      // Try to get existing conversation first
      const { data: existingConversation, error: fetchError } = await supabase
        .from('conversations')
        .select('*')
        .eq('visitor_id', visitorId)
        .eq('status', 'active')
        .maybeSingle();

      if (fetchError) {
        console.error('❌ Error fetching conversation:', fetchError);
        throw fetchError;
      }

      if (existingConversation) {
        console.log('✅ Found existing conversation:', existingConversation.id);
        setConversation(existingConversation);
        await loadMessages(existingConversation.id);
      } else {
        // Create new conversation
        console.log('🆕 Creating new conversation for visitor:', visitorId);
        const { data: newConversation, error: createError } = await supabase
          .from('conversations')
          .insert([{ 
            visitor_id: visitorId,
            status: 'active'
          }])
          .select()
          .single();

        if (createError) {
          console.error('❌ Error creating conversation:', createError);
          throw createError;
        }
        
        console.log('✅ Created new conversation:', newConversation.id);
        setConversation(newConversation);
        await loadMessages(newConversation.id);
      }
    } catch (error) {
      console.error('❌ Error initializing conversation:', error);
      toast({
        title: "Erreur de connexion",
        description: "Impossible d'initialiser la conversation. Tentative de reconnexion...",
        variant: "destructive"
      });
      
      // Retry after a delay
      setTimeout(() => {
        initializeConversation();
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  // Load messages for conversation
  const loadMessages = async (conversationId: string) => {
    try {
      console.log('📨 Loading messages for conversation:', conversationId);
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('❌ Error loading messages:', error);
        throw error;
      }
      
      console.log('✅ Loaded messages:', data?.length || 0);
      setMessages(data || []);
      setIsConnected(true);
    } catch (error) {
      console.error('❌ Error loading messages:', error);
      setIsConnected(false);
    }
  };

  // Send message
  const sendMessage = async (content: string, isFromVisitor: boolean = true) => {
    if (!conversation) {
      console.error('❌ No conversation available');
      toast({
        title: "Erreur",
        description: "Conversation non initialisée",
        variant: "destructive"
      });
      return;
    }

    try {
      console.log('📤 Sending message:', { content, isFromVisitor, conversationId: conversation.id });
      
      const messageData = {
        conversation_id: conversation.id,
        content,
        is_from_visitor: isFromVisitor,
        admin_user_id: isFromVisitor ? null : undefined
      };

      const { data, error } = await supabase
        .from('messages')
        .insert([messageData])
        .select()
        .single();

      if (error) {
        console.error('❌ Error sending message:', error);
        throw error;
      }
      
      console.log('✅ Message sent successfully:', data);
      
      // Update conversation timestamp
      await supabase
        .from('conversations')
        .update({ updated_at: new Date().toISOString() })
        .eq('id', conversation.id);
        
    } catch (error) {
      console.error('❌ Error sending message:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message. Veuillez réessayer.",
        variant: "destructive"
      });
    }
  };

  // Set up real-time subscription
  useEffect(() => {
    if (!conversation) return;

    console.log('🔔 Setting up realtime subscription for conversation:', conversation.id);
    
    const channel = supabase
      .channel(`messages:${conversation.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversation.id}`
        },
        (payload) => {
          console.log('📨 Received new message via realtime:', payload.new);
          const newMessage = payload.new as Message;
          setMessages(prev => {
            // Avoid duplicates
            const exists = prev.some(msg => msg.id === newMessage.id);
            if (exists) return prev;
            return [...prev, newMessage];
          });
        }
      )
      .subscribe((status) => {
        console.log('🔔 Realtime subscription status:', status);
        if (status === 'SUBSCRIBED') {
          setIsConnected(true);
        } else if (status === 'CLOSED') {
          setIsConnected(false);
        }
      });

    return () => {
      console.log('🔄 Cleaning up realtime subscription');
      supabase.removeChannel(channel);
    };
  }, [conversation]);

  // Initialize conversation on mount
  useEffect(() => {
    console.log('🚀 useRealtimeChat: Initializing for visitor:', visitorId);
    if (visitorId) {
      initializeConversation();
    }
  }, [visitorId]);

  return {
    messages,
    conversation,
    isLoading,
    isConnected,
    sendMessage,
    refreshConversation: initializeConversation
  };
};
