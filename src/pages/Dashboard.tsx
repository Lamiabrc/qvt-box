
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings, BarChart3, Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Accès non autorisé</h2>
          <p className="text-gray-600 mb-6">Vous devez être connecté pour accéder au tableau de bord.</p>
          <Button onClick={() => navigate('/login')}>Se connecter</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Tableau de bord
              </h1>
              <p className="text-gray-600">
                Bienvenue, {user.email}
              </p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              Se déconnecter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profil
              </CardTitle>
              <CardDescription>
                Gérez vos informations personnelles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Statut:</strong> Utilisateur</p>
                {isAdmin && (
                  <p><strong>Rôle:</strong> Administrateur</p>
                )}
              </div>
              <Button className="w-full mt-4" variant="outline">
                Modifier le profil
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Statistiques
              </CardTitle>
              <CardDescription>
                Consultez vos données d'utilisation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>Connexions: 1</p>
                <p>Dernière activité: Aujourd'hui</p>
              </div>
              <Button className="w-full mt-4" variant="outline">
                Voir les détails
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Paramètres
              </CardTitle>
              <CardDescription>
                Configurez votre compte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>Notifications: Activées</p>
                <p>Confidentialité: Standard</p>
              </div>
              <Button className="w-full mt-4" variant="outline">
                Configurer
              </Button>
            </CardContent>
          </Card>

          {isAdmin && (
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Administration
                </CardTitle>
                <CardDescription>
                  Outils d'administration réservés aux administrateurs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline">
                    Gérer les utilisateurs
                  </Button>
                  <Button variant="outline">
                    Paramètres système
                  </Button>
                  <Button variant="outline">
                    Logs d'activité
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
