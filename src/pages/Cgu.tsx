
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { FileText } from 'lucide-react';
import FloatingBubbles from '@/components/FloatingBubbles';

const Cgu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800">CGU</Badge>
          <h1 className="text-4xl font-bold text-slate-800 mb-6 flex items-center justify-center gap-3">
            <FileText className="w-10 h-10" />
            Conditions Générales d'Utilisation
          </h1>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Objet</h2>
            <p className="text-slate-600 leading-relaxed">
              Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation des services proposés par QVT Box, accessible à l'adresse qvtbox.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Acceptation des conditions</h2>
            <p className="text-slate-600 leading-relaxed">
              L'utilisation du service implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Description du service</h2>
            <p className="text-slate-600 leading-relaxed">
              QVT Box propose une plateforme digitale d'évaluation et d'amélioration de la qualité de vie au travail et en famille, incluant des questionnaires, des recommandations personnalisées et des abonnements à des box mensuelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Inscription et compte utilisateur</h2>
            <div className="text-slate-600 leading-relaxed space-y-3">
              <p>Pour utiliser nos services, vous devez :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Créer un compte en fournissant des informations exactes</li>
                <li>Maintenir la confidentialité de vos identifiants</li>
                <li>Être responsable de toutes les activités sur votre compte</li>
                <li>Nous notifier immédiatement de toute utilisation non autorisée</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Abonnements et paiements</h2>
            <div className="text-slate-600 leading-relaxed space-y-3">
              <p>Les abonnements sont facturés mensuellement et se renouvellent automatiquement. Vous pouvez :</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Modifier ou annuler votre abonnement à tout moment</li>
                <li>Bénéficier d'un remboursement sous 14 jours</li>
                <li>Recevoir une facture par email</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Protection des données</h2>
            <p className="text-slate-600 leading-relaxed">
              Nous nous engageons à protéger vos données personnelles conformément au RGPD. Pour plus d'informations, consultez notre politique de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Responsabilités</h2>
            <p className="text-slate-600 leading-relaxed">
              QVT Box s'efforce de maintenir la disponibilité du service mais ne peut garantir un fonctionnement ininterrompu. Nous ne saurions être tenus responsables des dommages indirects résultant de l'utilisation de nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Modification des CGU</h2>
            <p className="text-slate-600 leading-relaxed">
              Nous nous réservons le droit de modifier ces CGU à tout moment. Les utilisateurs seront informés des modifications par email et/ou via la plateforme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Droit applicable</h2>
            <p className="text-slate-600 leading-relaxed">
              Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <div className="text-center text-sm text-slate-500 pt-8 border-t">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cgu;
