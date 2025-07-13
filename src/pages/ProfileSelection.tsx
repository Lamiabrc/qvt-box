import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Heart, 
  Building2, 
  User, 
  Users, 
  ArrowRight,
  Sparkles,
  Shield,
  CheckCircle,
  LogIn
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import FloatingBubbles from '@/components/FloatingBubbles';

const ProfileSelection = () => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [familyCode, setFamilyCode] = useState('');
  const [enterpriseCode, setEnterpriseCode] = useState('');
  const navigate = useNavigate();

  const profiles = [
    {
      id: 'libre',
      title: 'Utilisateur Libre',
      description: 'Accès individuel complet',
      icon: User,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Simulateur de bien-être personnel',
        'Recommandations IA personnalisées',
        'Accès à la boutique Box',
        'Suivi de progression individuel'
      ],
      needsCode: false
    },
    {
      id: 'famille',
      title: 'Membre Famille',
      description: 'Espace partagé famille',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Espace parent et ado',
        'Simulateur familial',
        'Family & Teen Box',
        'Partage émotionnel sécurisé'
      ],
      needsCode: true,
      codeType: 'family'
    },
    {
      id: 'entreprise',
      title: 'Collaborateur',
      description: 'Espace entreprise QVT',
      icon: Building2,
      color: 'from-teal-500 to-green-500',
      features: [
        'Évaluateur QVT 2 minutes',
        'Dashboard bien-être',
        'Prévention burn-out',
        'Box entreprise personnalisées'
      ],
      needsCode: true,
      codeType: 'enterprise'
    }
  ];

  const handleProfileSelection = (profileId: string) => {
    setSelectedProfile(profileId);
  };

  const handleContinue = () => {
    if (!selectedProfile) return;
    
    const profile = profiles.find(p => p.id === selectedProfile);
    
    if (profile?.needsCode) {
      const code = profile.codeType === 'family' ? familyCode : enterpriseCode;
      if (!code.trim()) {
        alert(`Veuillez saisir votre code ${profile.codeType === 'family' ? 'famille' : 'entreprise'}`);
        return;
      }
    }
    
    // Sauvegarder le profil et rediriger vers le dashboard
    localStorage.setItem('userProfile', JSON.stringify({
      type: selectedProfile,
      code: selectedProfile === 'famille' ? familyCode : selectedProfile === 'entreprise' ? enterpriseCode : null
    }));
    
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header avec bouton de connexion */}
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm">
              ← Retour à l'accueil
            </Link>
            <Link to="/login">
              <Button variant="outline" className="gap-2">
                <LogIn className="w-4 h-4" />
                Se connecter
              </Button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Configuration Profile</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Choisissez votre profil QVT Box
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sélectionnez le type d'accès qui correspond à votre situation pour une expérience personnalisée
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {profiles.map((profile) => {
              const Icon = profile.icon;
              const isSelected = selectedProfile === profile.id;
              
              return (
                <Card 
                  key={profile.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    isSelected 
                      ? 'ring-2 ring-blue-500 shadow-lg scale-105' 
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => handleProfileSelection(profile.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${profile.color} rounded-full flex items-center justify-center mx-auto mb-4 ${isSelected ? 'scale-110' : ''} transition-transform`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-800">{profile.title}</CardTitle>
                    <CardDescription className="text-gray-600">{profile.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {profile.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {profile.needsCode && isSelected && (
                      <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                        <Label htmlFor={`${profile.id}-code`} className="text-sm font-medium">
                          Code {profile.codeType === 'family' ? 'famille' : 'entreprise'}
                        </Label>
                        <Input
                          id={`${profile.id}-code`}
                          type="text"
                          placeholder={`Saisissez votre code ${profile.codeType === 'family' ? 'famille' : 'entreprise'}`}
                          value={profile.codeType === 'family' ? familyCode : enterpriseCode}
                          onChange={(e) => {
                            if (profile.codeType === 'family') {
                              setFamilyCode(e.target.value);
                            } else {
                              setEnterpriseCode(e.target.value);
                            }
                          }}
                          className="mt-1"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Ce code vous a été fourni par votre {profile.codeType === 'family' ? 'famille' : 'entreprise'}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-center">
                      {isSelected ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Informations complémentaires */}
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              🌟 Fonctionnalités communes à tous les profils
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="font-medium">IA Émotionnelle</p>
                <p className="text-sm text-gray-600">Recommandations personnalisées</p>
              </div>
              <div>
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium">Boutique Box</p>
                <p className="text-sm text-gray-600">Made in France</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-medium">Suivi Personnel</p>
                <p className="text-sm text-gray-600">Évolution mesurable</p>
              </div>
            </div>
          </div>

          {/* Bouton de validation */}
          <div className="text-center">
            <Button 
              onClick={handleContinue}
              disabled={!selectedProfile}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              Continuer vers mon espace
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            {!selectedProfile && (
              <p className="text-sm text-gray-500 mt-2">
                Veuillez sélectionner un profil pour continuer
              </p>
            )}
          </div>

          {/* Actions supplémentaires */}
          <div className="text-center mt-8 space-y-4">
            <div className="flex justify-center gap-4">
              <Link to="/login">
                <Button variant="outline" className="gap-2">
                  <LogIn className="w-4 h-4" />
                  J'ai déjà un compte
                </Button>
              </Link>
              <Link to="/simulator-home">
                <Button variant="ghost" className="gap-2">
                  <Sparkles className="w-4 h-4" />
                  Tester sans compte
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSelection;
