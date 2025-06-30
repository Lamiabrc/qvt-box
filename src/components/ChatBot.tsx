
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
  Phone,
  Mail,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const predefinedResponses = {
    greeting: [
      "Bonjour ! Je suis l'assistant QVT Box. Comment puis-je vous aider aujourd'hui ?",
      "Salut ! Bienvenue sur QVT Box. Que puis-je faire pour vous ?",
      "Hello ! Ravie de vous rencontrer. En quoi puis-je vous assister ?"
    ],
    enterprise: "Parfait ! Nous proposons des solutions QVT personnalisées pour les entreprises. Nos box mensuelles incluent des objets physiques, un accompagnement humain et une intelligence artificielle pour améliorer le bien-être de vos équipes. Souhaitez-vous une démonstration ?",
    family: "Excellent ! QVTeen Box est notre solution dédiée aux familles avec des adolescents. Nous aidons à renforcer les liens familiaux et à accompagner les ados dans leur bien-être. Voulez-vous en savoir plus ?",
    pricing: "Nos tarifs varient selon vos besoins. Pour les entreprises, comptez entre 15-25€/mois par salarié. Pour les familles, c'est 29€/mois. Contactez-nous pour un devis personnalisé !",
    contact: "Vous pouvez nous joindre par :\n📧 Email: contact@qvtbox.com\n📞 Téléphone: 06 76 43 55 51\n📍 Adresse: Rennes, France\n⏰ Horaires: Lun-Ven 9h-18h",
    demo: "Génial ! Je vais transférer votre demande de démonstration à notre équipe commerciale. Ils vous contacteront dans les 24h. En attendant, voulez-vous découvrir nos témoignages clients ?",
    default: "Je comprends votre question. Pour une réponse plus précise, je vais transférer votre message à notre équipe qui vous répondra rapidement. Avez-vous d'autres questions en attendant ?"
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('bonjour') || message.includes('salut') || message.includes('hello') || message.includes('bonsoir')) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)];
    }
    
    if (message.includes('entreprise') || message.includes('société') || message.includes('équipe') || message.includes('salarié')) {
      return predefinedResponses.enterprise;
    }
    
    if (message.includes('famille') || message.includes('ado') || message.includes('parent') || message.includes('enfant')) {
      return predefinedResponses.family;
    }
    
    if (message.includes('prix') || message.includes('tarif') || message.includes('coût') || message.includes('combien')) {
      return predefinedResponses.pricing;
    }
    
    if (message.includes('contact') || message.includes('téléphone') || message.includes('email') || message.includes('joindre')) {
      return predefinedResponses.contact;
    }
    
    if (message.includes('démo') || message.includes('démonstration') || message.includes('essai') || message.includes('test')) {
      return predefinedResponses.demo;
    }
    
    return predefinedResponses.default;
  };

  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    
    if (isBot && !isOpen) {
      setHasNewMessage(true);
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, false);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(inputValue);
      addMessage(response, true);
      setIsTyping(false);
      
      if (inputValue.toLowerCase().includes('démo')) {
        toast({
          title: "Demande de démonstration reçue !",
          description: "Notre équipe vous contactera dans les 24h"
        });
      }
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const initializeChat = () => {
    if (messages.length === 0) {
      setTimeout(() => {
        addMessage("Bonjour ! Je suis l'assistant QVT Box. Comment puis-je vous aider aujourd'hui ?", true);
      }, 500);
    }
  };

  const quickActions = [
    { text: "Voir les prix", action: () => addMessage("Quels sont vos tarifs ?", false) },
    { text: "Demander une démo", action: () => addMessage("Je souhaite une démonstration", false) },
    { text: "Contact", action: () => addMessage("Comment vous contacter ?", false) }
  ];

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
      <Card className={`w-80 h-96 shadow-xl border-teal-200 transition-all duration-300 ${isMinimized ? 'h-14' : 'h-96'}`}>
        <CardHeader className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <CardTitle className="text-sm font-medium">Assistant QVT Box</CardTitle>
                <p className="text-xs opacity-90">En ligne maintenant</p>
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
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-end gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${message.isBot ? 'bg-teal-100' : 'bg-blue-100'}`}>
                      {message.isBot ? <Bot className="w-3 h-3 text-teal-600" /> : <User className="w-3 h-3 text-blue-600" />}
                    </div>
                    <div
                      className={`p-2 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-teal-500 text-white'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-teal-100'}`}>
                        {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-teal-600" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 1 && (
              <div className="px-3 pb-2">
                <p className="text-xs text-gray-500 mb-2">Actions rapides :</p>
                <div className="flex flex-wrap gap-1">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={action.action}
                      className="text-xs h-6 border-teal-200 text-teal-600 hover:bg-teal-50"
                    >
                      {action.text}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-gray-200">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1 text-sm border-teal-200 focus:border-teal-500"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-teal-500 hover:bg-teal-600"
                  disabled={!inputValue.trim()}
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

export default ChatBot;
