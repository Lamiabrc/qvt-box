
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  User, 
  Bot,
  Clock,
  Phone,
  Mail
} from "lucide-react";
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
  unread_count?: number;
}

const ChatAdminDashboard = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load conversations
  const loadConversations = async () => {
    try {
      const { data, error } = await supabase
        .from('conversations')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setConversations(data || []);
    } catch (error) {
      console.error('Error loading conversations:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les conversations",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Load messages for selected conversation
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

  // Send admin response
  const sendAdminResponse = async () => {
    if (!inputValue.trim() || !selectedConversation) return;

    try {
      const { error } = await supabase
        .from('messages')
        .insert([{
          conversation_id: selectedConversation.id,
          content: inputValue,
          is_from_visitor: false,
          admin_user_id: null // You can set this to current admin user ID
        }]);

      if (error) throw error;
      
      setInputValue('');
      
      // Update conversation timestamp
      await supabase
        .from('conversations')
        .update({ updated_at: new Date().toISOString() })
        .eq('id', selectedConversation.id);

    } catch (error) {
      console.error('Error sending admin response:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer la réponse",
        variant: "destructive"
      });
    }
  };

  // Set up real-time subscriptions
  useEffect(() => {
    loadConversations();

    // Subscribe to new conversations
    const conversationsChannel = supabase
      .channel('conversations')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'conversations'
        },
        () => {
          loadConversations();
        }
      )
      .subscribe();

    // Subscribe to new messages
    const messagesChannel = supabase
      .channel('messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages'
        },
        (payload) => {
          const newMessage = payload.new as Message;
          
          // Update messages if it's for the selected conversation
          if (selectedConversation && newMessage.conversation_id === selectedConversation.id) {
            setMessages(prev => [...prev, newMessage]);
          }
          
          // Refresh conversations list
          loadConversations();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(conversationsChannel);
      supabase.removeChannel(messagesChannel);
    };
  }, [selectedConversation]);

  // Load messages when conversation is selected
  useEffect(() => {
    if (selectedConversation) {
      loadMessages(selectedConversation.id);
    }
  }, [selectedConversation]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendAdminResponse();
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Chargement des conversations...</div>
      </div>
    );
  }

  return (
    <div className="flex h-[600px] border rounded-lg overflow-hidden">
      {/* Conversations List */}
      <div className="w-1/3 border-r bg-gray-50">
        <div className="p-4 border-b bg-white">
          <h3 className="font-semibold text-lg">Conversations</h3>
          <p className="text-sm text-gray-600">{conversations.length} conversation(s)</p>
        </div>
        
        <div className="overflow-y-auto h-full">
          {conversations.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Aucune conversation</p>
            </div>
          ) : (
            conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-4 border-b cursor-pointer hover:bg-white transition-colors ${
                  selectedConversation?.id === conversation.id ? 'bg-white border-l-4 border-l-teal-500' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="font-medium">
                      {conversation.visitor_name || `Visiteur ${conversation.visitor_id.slice(-6)}`}
                    </span>
                  </div>
                  <Badge variant={conversation.status === 'active' ? 'default' : 'secondary'}>
                    {conversation.status}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  {new Date(conversation.updated_at).toLocaleString('fr-FR')}
                </div>
                
                {conversation.visitor_email && (
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <Mail className="w-3 h-3" />
                    {conversation.visitor_email}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Chat Interface */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">
                    {selectedConversation.visitor_name || `Visiteur ${selectedConversation.visitor_id.slice(-6)}`}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Conversation depuis le {new Date(selectedConversation.created_at).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <Badge variant={selectedConversation.status === 'active' ? 'default' : 'secondary'}>
                  {selectedConversation.status}
                </Badge>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.is_from_visitor ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-end gap-2 max-w-[80%] ${message.is_from_visitor ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.is_from_visitor ? 'bg-blue-100' : 'bg-teal-100'}`}>
                      {message.is_from_visitor ? <User className="w-4 h-4 text-blue-600" /> : <Bot className="w-4 h-4 text-teal-600" />}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.is_from_visitor
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-teal-500 text-white'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.is_from_visitor ? 'text-gray-500' : 'text-teal-100'}`}>
                        {new Date(message.created_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre réponse..."
                  className="flex-1"
                />
                <Button
                  onClick={sendAdminResponse}
                  disabled={!inputValue.trim()}
                  className="bg-teal-500 hover:bg-teal-600"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Sélectionnez une conversation</p>
              <p className="text-sm">Choisissez une conversation à gauche pour commencer à répondre</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatAdminDashboard;
