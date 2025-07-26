
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingBubbles from '@/components/FloatingBubbles';

const Faq = () => {
  const faqs = [
    {
      question: "Qu'est-ce que QVT Box ?",
      answer: "QVT Box est une solution digitale complète pour améliorer la qualité de vie au travail et en famille. Nous proposons des questionnaires intelligents, des recommandations personnalisées et des box physiques mensuelles avec des produits bien-être."
    },
    {
      question: "Comment fonctionne l'abonnement ?",
      answer: "Votre abonnement se renouvelle automatiquement chaque mois. Vous pouvez le modifier ou l'annuler à tout moment depuis votre espace client. Les box sont expédiées le 15 de chaque mois."
    },
    {
      question: "Que contiennent les box mensuelles ?",
      answer: "Chaque box contient 4-6 produits bien-être sélectionnés selon vos besoins : produits de relaxation, snacks sains, accessoires de bureau ergonomiques, guides pratiques, et surprises. Tout est fabriqué en France quand possible."
    },
    {
      question: "Les questionnaires sont-ils scientifiquement validés ?",
      answer: "Oui, nos questionnaires sont développés avec des psychologues du travail et basés sur des méthodes reconnues. Les algorithmes d'évaluation suivent les standards de la psychologie positive et de la prévention des risques psychosociaux."
    },
    {
      question: "Mes données personnelles sont-elles protégées ?",
      answer: "Absolument. Nous respectons le RGPD et vos données sont chiffrées et stockées en Europe. Vous gardez le contrôle total sur vos informations et pouvez les supprimer à tout moment."
    },
    {
      question: "Puis-je essayer avant de m'abonner ?",
      answer: "Oui ! Nous proposons 14 jours d'essai gratuit pour tous nos abonnements. Vous pouvez tester toutes les fonctionnalités et recevoir votre première box sans engagement."
    },
    {
      question: "Comment résilier mon abonnement ?",
      answer: "Vous pouvez résilier à tout moment depuis votre espace client, sans frais ni justification. La résiliation prend effet à la fin de votre période de facturation en cours."
    },
    {
      question: "Livrez-vous partout en France ?",
      answer: "Oui, nous livrons partout en France métropolitaine et dans les DOM-TOM. La livraison est gratuite pour tous nos abonnements. Les délais sont de 2-3 jours ouvrés."
    },
    {
      question: "Puis-je offrir un abonnement ?",
      answer: "Bien sûr ! Vous pouvez offrir un abonnement de 1, 3, 6 ou 12 mois. La personne recevra un code cadeau par email pour activer son abonnement quand elle le souhaite."
    },
    {
      question: "Comment contacter le support ?",
      answer: "Notre équipe support est disponible par email à support@qvtbox.com du lundi au vendredi de 9h à 18h. Nous répondons généralement sous 4h ouvrées."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800">FAQ</Badge>
          <h1 className="text-4xl font-bold text-slate-800 mb-6 flex items-center justify-center gap-3">
            <HelpCircle className="w-10 h-10" />
            Questions fréquentes
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur QVT Box
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-slate-800">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
          <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Vous ne trouvez pas votre réponse ?
          </h3>
          <p className="text-slate-600 mb-6">
            Notre équipe support est là pour vous aider personnellement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Nous contacter
              </Button>
            </Link>
            <Button variant="outline">
              contact@qvtbox.com
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
