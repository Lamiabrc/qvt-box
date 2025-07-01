
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Bot,
  Minimize2,
  WifiOff,
  Wifi
} from "lucide-react";
import { useRealtimeChat } from "@/hooks/useRealtimeChat";
import { useToast } from "@/hooks/use-toast";

const RealtimeChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [visitorId] = useState(() => {
    // Generate or get visitor ID from localStorage
    const stored = localStorage.getItem('qvt_visitor_id');
    if (stored) return stored;
    const newId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('qvt_visitor_id', newId);
    return newId;
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { messages, conversation, isLoading, isConnected, sendMessage, refreshConversation } = useRealtimeChat(visitorId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false);
    }
  }, [isOpen]);

  // Check for new messages when chat is closed
  useEffect(() => {
    if (!isOpen && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (!lastMessage.is_from_visitor) {
        setHasNewMessage(true);
      }
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading || !isConnected) return;

    const messageText = inputValue;
    setInputValue('');
    
    try {
      await sendMessage(messageText, true);
      
      // Send auto-response for now (you can remove this when admins start responding)
      setTimeout(async () => {
        const autoResponse = getAutoResponse(messageText);
        if (autoResponse) {
          await sendMessage(autoResponse, false);
        }
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erreur",
        description: "Message non envoyé. Vérifiez votre connexion.",
        variant: "destructive"
      });
    }
  };

  const getAutoResponse = (userMessage: string): string | null => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('bonjour') || message.includes('salut') || message.includes('hello')) {
      return "Bonjour ! Je suis l'assistant QVT Box. Un de nos conseillers va bientôt vous répondre. En attendant, que puis-je faire pour vous ?";
    }
    
    if (message.includes('prix') || message.includes('tarif')) {
      return "Nos tarifs varient selon vos besoins. Un conseiller va vous contacter pour vous proposer un devis personnalisé.";
    }
    
    if (message.includes('contact') || message.includes('téléphone')) {
      return "Vous pouvez nous joindre au 06 76 43 55 51 ou par email à contact@qvtbox.com. Un conseiller va également vous répondre ici très bientôt.";
    }
    
    return "Merci pour votre message ! Un de nos conseillers va vous répondre dans les plus brefs délais.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const initializeChat = () => {
    if (messages.length === 0 && !isLoading && isConnected) {
      // Send welcome message
      setTimeout(() => {
        sendMessage("Bonjour ! Bienvenue sur QVT Box. Comment puis-je vous aider aujourd'hui ?", false);
      }, 500);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => {
            setIsOpen(true);
            initializeChat();
          }}
          className="relative w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          {hasNewMessage && (
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 shadow-xl border-teal-200 transition-all duration-300 ${isMinimized ? 'h-14' : 'h-96'}`}>
        <CardHeader className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  Chat QVT Box
                  {isConnected ? (
                    <Wifi className="w-3 h-3 text-green-200" />
                  ) : (
                    <WifiOff className="w-3 h-3 text-red-200" />
                  )}
                </CardTitle>
                <p className="text-xs opacity-90">
                  {isConnected ? 'En ligne' : 'Reconnexion...'}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-6 h-6 p-0 text-white hover:bg-white/20"
              >
                <Minimize2 className="w-3 h-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 p-0 text-white hover:bg-white/20"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 h-full flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {isLoading ? (
                <div className="flex justify-center items-center h-32">
                  <div className="text-sm text-gray-500">Connexion en cours...</div>
                </div>
              ) : !isConnected ? (
                <div className="flex flex-col justify-center items-center h-32 space-y-2">
                  <WifiOff className="w-8 h-8 text-gray-400" />
                  <div className="text-sm text-gray-500 text-center">
                    Connexion interrompue
                    <br />
                    <Button 
                      variant="link" 
                      size="sm" 
                      onClick={refreshConversation}
                      className="p-0 h-auto text-teal-600"
                    >
                      Reconnecter
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.is_from_visitor ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-end gap-2 max-w-[80%] ${message.is_from_visitor ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${message.is_from_visitor ? 'bg-blue-100' : 'bg-teal-100'}`}>
                          {message.is_from_visitor ? <User className="w-3 h-3 text-blue-600" /> : <Bot className="w-3 h-3 text-teal-600" />}
                        </div>
                        <div
                          className={`p-2 rounded-lg text-sm ${
                            message.is_from_visitor
                              ? 'bg-teal-500 text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <p className="whitespace-pre-line">{message.content}</p>
                          <p className={`text-xs mt-1 ${message.is_from_visitor ? 'text-teal-100' : 'text-gray-500'}`}>
                            {new Date(message.created_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-200">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={isConnected ? "Tapez votre message..." : "Reconnexion..."}
                  className="flex-1 text-sm border-teal-200 focus:border-teal-500"
                  disabled={isLoading || !isConnected}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-teal-500 hover:bg-teal-600"
                  disabled={!inputValue.trim() || isLoading || !isConnected}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default RealtimeChatBot;
