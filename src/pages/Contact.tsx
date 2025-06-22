
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Building2,
  Heart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import FloatingBubbles from "../components/FloatingBubbles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactType: 'general'
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les 24h"
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactType: 'general'
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["contact@qvtbox.com", "support@qvtbox.com"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+33 1 23 45 67 89", "Lun-Ven: 9h-18h"],
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["123 Avenue de l'Innovation", "75001 Paris, France"],
      color: "text-red-600"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun-Ven: 9h-18h", "Sam: 10h-16h"],
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-teal-600 max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous accompagner dans votre démarche bien-être.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-teal-600" />
                  Envoyez-nous un message
                </CardTitle>
                <CardDescription>
                  Nous vous répondrons dans les plus brefs délais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Contact Type */}
                  <div className="space-y-2">
                    <Label>Type de demande</Label>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant={formData.contactType === 'enterprise' ? 'default' : 'outline'}
                        onClick={() => setFormData({...formData, contactType: 'enterprise'})}
                        className="flex-1"
                      >
                        <Building2 className="w-4 h-4 mr-2" />
                        Entreprise
                      </Button>
                      <Button
                        type="button"
                        variant={formData.contactType === 'family' ? 'default' : 'outline'}
                        onClick={() => setFormData({...formData, contactType: 'family'})}
                        className="flex-1"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Famille
                      </Button>
                      <Button
                        type="button"
                        variant={formData.contactType === 'general' ? 'default' : 'outline'}
                        onClick={() => setFormData({...formData, contactType: 'general'})}
                        className="flex-1"
                      >
                        Général
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone (optionnel)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="Objet de votre message"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Décrivez votre demande en détail..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <Card className="border-2 border-dashed border-teal-300 bg-teal-50/50">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-teal-800 mb-2">
                  Besoin d'une réponse rapide ?
                </h3>
                <p className="text-sm text-teal-600 mb-4">
                  Consultez notre FAQ ou chattez avec notre équipe
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full border-teal-300 text-teal-700">
                    Voir la FAQ
                  </Button>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Chat en direct
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-teal-800">Entreprises</CardTitle>
              <CardDescription>Solutions QVT personnalisées</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Découvrez comment QVT Box peut transformer le bien-être de vos équipes avec notre approche phygitale innovante.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Demander une démo
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-purple-800">Familles</CardTitle>
              <CardDescription>Accompagnement ados & parents</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Renforcez les liens familiaux et accompagnez vos adolescents avec QVTeen Box, notre solution dédiée aux familles.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Découvrir QVTeen Box
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
