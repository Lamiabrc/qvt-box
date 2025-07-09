
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Scale } from 'lucide-react';
import FloatingBubbles from '@/components/FloatingBubbles';

const LegalMentions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gray-100 text-gray-800">Légal</Badge>
          <h1 className="text-4xl font-bold text-slate-800 mb-6 flex items-center justify-center gap-3">
            <Scale className="w-10 h-10" />
            Mentions légales
          </h1>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Informations légales</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>Raison sociale :</strong> QVT Box SAS</p>
              <p><strong>Siège social :</strong> 123 Avenue de l'Innovation, 75001 Paris, France</p>
              <p><strong>SIRET :</strong> 123 456 789 00012</p>
              <p><strong>RCS :</strong> Paris B 123 456 789</p>
              <p><strong>Capital social :</strong> 50 000 €</p>
              <p><strong>TVA intracommunautaire :</strong> FR12 123 456 789</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact</h2>
            <div className="space-y-2 text-slate-600">
              <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
              <p><strong>Email :</strong> contact@qvtbox.com</p>
              <p><strong>Directeur de la publication :</strong> Jean Dupont</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Hébergement</h2>
            <div className="space-y-2 text-slate-600">
              <p><strong>Hébergeur :</strong> Supabase Inc.</p>
              <p><strong>Adresse :</strong> 970 Toa Payoh North #07-04, Singapore 318992</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Propriété intellectuelle</h2>
            <p className="text-slate-600 leading-relaxed">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Limitation de responsabilité</h2>
            <p className="text-slate-600 leading-relaxed">
              QVT Box s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Médiation</h2>
            <p className="text-slate-600 leading-relaxed">
              En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. En cas d'échec de ces tentatives, les tribunaux français seront seuls compétents pour connaître du litige.
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

export default LegalMentions;
