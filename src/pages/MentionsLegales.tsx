
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FloatingBubbles from "../components/FloatingBubbles";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Mentions Légales
          </h1>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Éditeur du site</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2"><strong>Raison sociale :</strong> QVT Box SAS</p>
                <p className="mb-2"><strong>Adresse :</strong> 123 Rue de l'Innovation, 75001 Paris, France</p>
                <p className="mb-2"><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                <p className="mb-2"><strong>Email :</strong> contact@qvtbox.fr</p>
                <p className="mb-2"><strong>SIRET :</strong> 123 456 789 00001</p>
                <p className="mb-2"><strong>RCS :</strong> Paris B 123 456 789</p>
                <p className="mb-2"><strong>Capital social :</strong> 100 000 €</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Directeur de la publication</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Le directeur de la publication est le représentant légal de QVT Box SAS.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hébergement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2"><strong>Hébergeur :</strong> Lovable</p>
                <p className="mb-2"><strong>Adresse :</strong> Disponible sur demande</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Propriété intellectuelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Le site web QVT Box et l'ensemble de son contenu (textes, images, vidéos, logos, etc.) 
                  sont protégés par les droits de propriété intellectuelle et sont la propriété exclusive de QVT Box SAS.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
                  des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, 
                  sauf autorisation écrite préalable de QVT Box SAS.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsabilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  QVT Box SAS s'efforce de fournir des informations aussi précises que possible sur le site. 
                  Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des 
                  carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires 
                  qui lui fournissent ces informations.
                </p>
                <p>
                  QVT Box SAS ne pourra être tenue responsable des dommages directs et indirects causés 
                  au matériel de l'utilisateur, lors de l'accès au site QVT Box.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Liens hypertextes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Les liens hypertextes mis en place dans le cadre du présent site web en direction 
                  d'autres ressources présentes sur le réseau Internet ne sauraient engager la 
                  responsabilité de QVT Box SAS.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Droit applicable</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Les présentes mentions légales sont régies par le droit français. 
                  En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
