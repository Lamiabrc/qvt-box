
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Shield } from 'lucide-react';
import FloatingBubbles from '@/components/FloatingBubbles';

const Confidentiality = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Confidentialité</Badge>
          <h1 className="text-4xl font-bold text-slate-800 mb-6 flex items-center justify-center gap-3">
            <Shield className="w-10 h-10" />
            Politique de confidentialité
          </h1>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Collecte des données</h2>
            <div className="text-slate-600 leading-relaxed space-y-3">
              <p>Nous collectons les données suivantes :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Données d'identification :</strong> nom, prénom, email</li>
                <li><strong>Données de questionnaires :</strong> réponses aux évaluations QVT</li>
                <li><strong>Données techniques :</strong> adresse IP, cookies, données de navigation</li>
                <li><strong>Données de livraison :</strong> adresse de livraison pour les box</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Finalités du traitement</h2>
            <div className="text-slate-600 leading-relaxed space-y-3">
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Fournir nos services de questionnaires et recommandations</li>
                <li>Gérer votre abonnement et les livraisons</li>
                <li>Améliorer nos services par l'analyse des données</li>
                <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Base légale</h2>
            <p className="text-slate-600 leading-relaxed">
              Le traitement de vos données repose sur votre consentement, l'exécution du contrat d'abonnement, et nos intérêts légitimes pour améliorer nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Partage des données</h2>
            <div className="text-slate-600 leading-relaxed space-y-3">
              <p>Nous ne vendons jamais vos données. Nous les partageons uniquement avec :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Nos prestataires techniques (hébergement, paiement, livraison)</li>
                <li>Les autorités si requis par la loi</li>
                <li>Nos partenaires avec votre consentement explicite</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Sécurité des données</h2>
            <div className="text-slate-600 leading-relaxed space-y-3">
              <p>Nous mettons en place des mesures techniques et organisationnelles :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Chiffrement des données en transit et au repos</li>
                <li>Accès limité aux données sur base du besoin d'en connaître</li>
                <li>Surveillance et monitoring continus</li>
                <li>Sauvegardes sécurisées régulières</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Vos droits</h2>
            <div className="text-slate-600 leading-relaxed space-y-3">
              <p>Vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Accès :</strong> consulter vos données personnelles</li>
                <li><strong>Rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Effacement :</strong> supprimer vos données</li>
                <li><strong>Portabilité :</strong> récupérer vos données</li>
                <li><strong>Opposition :</strong> refuser le traitement</li>
                <li><strong>Limitation :</strong> restreindre l'utilisation</li>
              </ul>
              <p className="mt-3">Pour exercer ces droits, contactez-nous à : privacy@qvtbox.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Nous utilisons des cookies essentiels au fonctionnement du site et des cookies analytiques pour améliorer l'expérience utilisateur. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Conservation des données</h2>
            <p className="text-slate-600 leading-relaxed">
              Nous conservons vos données personnelles pendant la durée de votre abonnement et 3 ans après sa résiliation, sauf obligation légale contraire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Contact</h2>
            <div className="text-slate-600 leading-relaxed">
              <p><strong>Délégué à la protection des données :</strong> dpo@qvtbox.com</p>
              <p><strong>Service client :</strong> privacy@qvtbox.com</p>
              <p><strong>Autorité de contrôle :</strong> CNIL - www.cnil.fr</p>
            </div>
          </section>

          <div className="text-center text-sm text-slate-500 pt-8 border-t">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confidentiality;
