
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  AlertTriangle, 
  Heart, 
  Phone, 
  MessageCircle, 
  Shield,
  Clock,
  Users,
  Mail,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingBubbles from "../components/FloatingBubbles";
import { useToast } from "@/hooks/use-toast";

const TeensQuickAlert = () => {
  const [urgencyLevel, setUrgencyLevel] = useState('');
  const [message, setMessage] = useState('');
  const [contactParents, setContactParents] = useState('yes');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!urgencyLevel) {
      toast({
        title: "Niveau d'urgence requis",
        description: "Merci de sélectionner le niveau d'urgence",
        variant: "destructive"
      });
      return;
    }

    // Simuler l'envoi de l'alerte
    setIsSubmitted(true);
    toast({
      title: "Alerte envoyée",
      description: "Ton message a été transmis à l'équipe QVTeen et tes parents si demandé"
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <FloatingBubbles />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              Alerte bien reçue ! 💚
            </h1>
            
            <p className="text-xl text-green-700 mb-8">
              Ton message a été transmis. Une personne de confiance va te contacter rapidement.
            </p>
            
            <Card className="mb-8 border-green-200">
              <CardContent className="p-6">
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span>Alerte envoyée : Maintenant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <span>Équipe QVTeen notifiée : ✅</span>
                  </div>
                  {contactParents === 'yes' && (
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-green-600" />
                      <span>Parents informés : ✅</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span>Réponse attendue : Dans les 30 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <p className="text-green-700 font-medium">
                En attendant, tu peux :
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/teens-personal-space">
                  <Button variant="outline" className="border-green-300 text-green-700">
                    Aller dans ma SafeZone
                  </Button>
                </Link>
                <Link to="/teens-playlist">
                  <Button variant="outline" className="border-green-300 text-green-700">
                    Écouter de la musique
                  </Button>
                </Link>
                <Link to="/teens-home">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Retour à l'accueil
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            <Badge className="mb-4 bg-red-100 text-red-800 text-lg px-6 py-2">
              Alerte Rapide
            </Badge>
            <h1 className="text-4xl font-bold text-red-800 mb-4">
              On est là pour toi ! 🤗
            </h1>
            <p className="text-xl text-red-700">
              Dis-nous ce qui ne va pas, on va t'aider
            </p>
          </div>

          {/* Formulaire d'alerte */}
          <Card className="mb-8 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Comment tu te sens ?
              </CardTitle>
              <CardDescription>
                Tes informations restent confidentielles et sécurisées
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Niveau d'urgence */}
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Niveau d'urgence *
                </Label>
                <RadioGroup value={urgencyLevel} onValueChange={setUrgencyLevel}>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-red-200 hover:bg-red-50">
                      <RadioGroupItem value="critique" id="critique" />
                      <Label htmlFor="critique" className="cursor-pointer flex-1">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                          <div>
                            <p className="font-semibold text-red-800">🚨 Critique - J'ai besoin d'aide MAINTENANT</p>
                            <p className="text-sm text-red-600">Je me sens en danger ou j'ai des pensées qui me font peur</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-orange-200 hover:bg-orange-50">
                      <RadioGroupItem value="urgent" id="urgent" />
                      <Label htmlFor="urgent" className="cursor-pointer flex-1">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                          <div>
                            <p className="font-semibold text-orange-800">⚠️ Urgent - Ça va vraiment pas</p>
                            <p className="text-sm text-orange-600">Je me sens très mal, j'ai besoin de parler rapidement</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-yellow-200 hover:bg-yellow-50">
                      <RadioGroupItem value="modere" id="modere" />
                      <Label htmlFor="modere" className="cursor-pointer flex-1">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                          <div>
                            <p className="font-semibold text-yellow-800">💛 Modéré - J'ai besoin de soutien</p>
                            <p className="text-sm text-yellow-600">Je traverse une période difficile</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Message */}
              <div>
                <Label className="text-base font-semibold mb-2 block">
                  Raconte-nous ce qui se passe (optionnel)
                </Label>
                <Textarea
                  placeholder="Tu peux nous expliquer ce que tu ressens, ce qui s'est passé, ou tout ce que tu veux partager. On t'écoute sans jugement."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-32"
                />
              </div>

              {/* Contact parents */}
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Veux-tu qu'on prévienne tes parents ?
                </Label>
                <RadioGroup value={contactParents} onValueChange={setContactParents}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Oui, prévenez mes parents</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">Non, gardez ça confidentiel pour l'instant</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Boutons d'action */}
          <div className="space-y-4">
            <Button 
              onClick={handleSubmit}
              className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
              size="lg"
            >
              <AlertTriangle className="w-5 h-5 mr-2" />
              Envoyer l'alerte maintenant
            </Button>
            
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Numéros d'urgence (24h/24, 7j/7) :
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="tel:3114" className="flex items-center gap-1 text-blue-600 hover:underline">
                  <Phone className="w-4 h-4" />
                  3114 (Suicide Écoute)
                </a>
                <a href="tel:119" className="flex items-center gap-1 text-blue-600 hover:underline">
                  <Phone className="w-4 h-4" />
                  119 (Enfance en danger)
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/teens-home">
                <Button variant="outline" className="border-purple-300 text-purple-700">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>

          {/* Rappel de confidentialité */}
          <Card className="mt-8 border-purple-200 bg-purple-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-purple-800 mb-2">
                    Ton message est protégé
                  </h3>
                  <p className="text-sm text-purple-700">
                    Toutes tes informations sont chiffrées et confidentielles. 
                    Seuls les professionnels habilités et, si tu l'autorises, tes parents, 
                    auront accès à ton message pour t'aider au mieux.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeensQuickAlert;
