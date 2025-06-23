
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FloatingBubbles from "../components/FloatingBubbles";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Politique de Confidentialité
          </h1>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Collecte des données personnelles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  QVT Box collecte des données personnelles dans le cadre de l'utilisation de ses services. 
                  Les données collectées peuvent inclure :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Nom, prénom, adresse email</li>
                  <li>Informations professionnelles (entreprise, poste)</li>
                  <li>Données de bien-être et de santé mentale (avec consentement explicite)</li>
                  <li>Données de navigation sur le site</li>
                  <li>Préférences utilisateur</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Finalités du traitement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Les données personnelles sont traitées pour :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fournir les services QVT Box</li>
                  <li>Personnaliser l'expérience utilisateur</li>
                  <li>Analyser le bien-être au travail (de manière agrégée et anonymisée)</li>
                  <li>Améliorer nos services</li>
                  <li>Communiquer avec les utilisateurs</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Base légale du traitement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Le traitement de vos données personnelles repose sur :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Consentement :</strong> pour les données sensibles de bien-être</li>
                  <li><strong>Exécution du contrat :</strong> pour la fourniture des services</li>
                  <li><strong>Intérêt légitime :</strong> pour l'amélioration des services</li>
                  <li><strong>Obligation légale :</strong> pour le respect de la réglementation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conservation des données</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Les données personnelles sont conservées pendant la durée nécessaire aux finalités 
                  pour lesquelles elles ont été collectées :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Données de compte : pendant la durée du contrat + 3 ans</li>
                  <li>Données de bien-être : avec consentement, suppression possible à tout moment</li>
                  <li>Données de navigation : 13 mois maximum</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Partage des données</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  QVT Box ne vend pas vos données personnelles. Nous pouvons partager vos données 
                  uniquement dans les cas suivants :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Avec votre consentement explicite</li>
                  <li>Avec des prestataires de services (sous contrat de confidentialité)</li>
                  <li>Pour respecter une obligation légale</li>
                  <li>En cas de fusion ou acquisition (avec notification préalable)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vos droits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Droit d'accès :</strong> connaître les données traitées</li>
                  <li><strong>Droit de rectification :</strong> corriger les données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression</li>
                  <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                  <li><strong>Droit de limitation :</strong> limiter le traitement</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous à : <strong>dpo@qvtbox.fr</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sécurité des données</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  QVT Box met en œuvre des mesures techniques et organisationnelles appropriées 
                  pour protéger vos données personnelles :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Chiffrement des données en transit et au repos</li>
                  <li>Accès restreint aux données (principe du moindre privilège)</li>
                  <li>Surveillance et audit réguliers</li>
                  <li>Formation du personnel à la protection des données</li>
                  <li>Procédures de notification en cas de violation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Notre site utilise des cookies pour améliorer votre expérience. 
                  Vous pouvez gérer vos préférences de cookies à tout moment.
                </p>
                <p>
                  Pour plus d'informations, consultez notre politique de cookies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">
                  <strong>Délégué à la Protection des Données (DPO) :</strong>
                </p>
                <p className="mb-2">Email : dpo@qvtbox.fr</p>
                <p className="mb-2">Adresse : QVT Box SAS, 123 Rue de l'Innovation, 75001 Paris</p>
                <p className="mt-4">
                  <strong>Autorité de contrôle :</strong> CNIL - Commission Nationale de l'Informatique et des Libertés
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
