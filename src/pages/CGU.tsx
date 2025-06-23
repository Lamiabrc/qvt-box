
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FloatingBubbles from "../components/FloatingBubbles";

const CGU = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Conditions Générales d'Utilisation
          </h1>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Objet</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation 
                  de la plateforme QVT Box proposée par QVT Box SAS, société par actions simplifiée 
                  au capital de 100 000 euros, immatriculée au RCS de Paris sous le numéro B 123 456 789.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Acceptation des CGU</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  L'utilisation de la plateforme QVT Box implique l'acceptation pleine et entière 
                  des présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser 
                  nos services.
                </p>
                <p>
                  QVT Box se réserve le droit de modifier ces CGU à tout moment. Les modifications 
                  prendront effet dès leur publication sur le site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Description des services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">QVT Box propose une solution phygitale de santé mentale comprenant :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Une plateforme d'évaluation du bien-être au travail</li>
                  <li>Des outils d'accompagnement par intelligence artificielle</li>
                  <li>Des box physiques personnalisées</li>
                  <li>Un accompagnement humain par des professionnels</li>
                  <li>Des tableaux de bord et analytics pour les entreprises</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Inscription et compte utilisateur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  L'utilisation de certains services nécessite la création d'un compte utilisateur. 
                  Lors de l'inscription, vous vous engagez à :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fournir des informations exactes et à jour</li>
                  <li>Maintenir la sécurité de vos identifiants de connexion</li>
                  <li>Nous informer immédiatement de toute utilisation non autorisée</li>
                  <li>Être responsable de toutes les activités effectuées sous votre compte</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Utilisation des services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Vous vous engagez à utiliser nos services de manière légale et éthique. Il est interdit de :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Violer des lois ou réglementations applicables</li>
                  <li>Porter atteinte aux droits de tiers</li>
                  <li>Transmettre des contenus illégaux, offensants ou malveillants</li>
                  <li>Tenter de compromettre la sécurité de la plateforme</li>
                  <li>Utiliser les services à des fins commerciales non autorisées</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Propriété intellectuelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Tous les éléments de la plateforme QVT Box (textes, images, logos, logiciels, etc.) 
                  sont protégés par les droits de propriété intellectuelle et appartiennent à QVT Box 
                  ou à ses partenaires.
                </p>
                <p>
                  Vous disposez d'un droit d'usage personnel et non exclusif dans le cadre de 
                  l'utilisation normale des services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Protection des données</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  QVT Box s'engage à protéger vos données personnelles conformément au RGPD et à 
                  sa politique de confidentialité.
                </p>
                <p>
                  Les données de bien-être sont traitées avec un niveau de sécurité renforcé et 
                  ne sont utilisées qu'avec votre consentement explicite.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Responsabilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  QVT Box s'efforce de fournir des services de qualité mais ne peut garantir :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>La disponibilité continue des services</li>
                  <li>L'absence totale d'erreurs ou de bugs</li>
                  <li>La compatibilité avec tous les équipements</li>
                </ul>
                <p className="mt-4">
                  QVT Box ne saurait être tenue responsable des dommages indirects résultant 
                  de l'utilisation des services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Suspension et résiliation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  QVT Box se réserve le droit de suspendre ou de résilier l'accès aux services 
                  en cas de :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Non-respect des présentes CGU</li>
                  <li>Utilisation frauduleuse des services</li>
                  <li>Défaut de paiement</li>
                </ul>
                <p className="mt-4">
                  Vous pouvez résilier votre compte à tout moment depuis les paramètres de votre profil.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Droit applicable et litiges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Les présentes CGU sont régies par le droit français. En cas de litige, 
                  une solution amiable sera recherchée en priorité.
                </p>
                <p>
                  À défaut d'accord amiable, les tribunaux de Paris seront seuls compétents.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Pour toute question relative aux présentes CGU :</p>
                <p className="mb-2"><strong>Email :</strong> legal@qvtbox.fr</p>
                <p className="mb-2"><strong>Adresse :</strong> QVT Box SAS, 123 Rue de l'Innovation, 75001 Paris</p>
                <p className="mt-4">
                  <strong>Dernière mise à jour :</strong> 23 juin 2025
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGU;
