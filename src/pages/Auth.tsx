
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Heart, User, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import FloatingBubbles from "../components/FloatingBubbles";

const Auth = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ 
    email: '', 
    password: '', 
    confirmPassword: '', 
    firstName: '', 
    lastName: '',
    accountType: 'individual' 
  });
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Connexion en cours...",
      description: "Redirection vers votre dashboard"
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Compte créé avec succès !",
      description: "Bienvenue dans la communauté QVT Box"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Onboarding Image Section */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Équipe collaborative et bien-être au travail"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Rejoignez la révolution du bien-être
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Découvrez comment QVT Box transforme le quotidien de milliers de familles et d'entreprises
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-sm">Solution phygitale unique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-sm">IA prédictive intégrée</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Auth Form Section */}
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center">
                <img 
                  src="/lovable-uploads/bed0f5ad-cedc-4afa-8b5d-24f9bf8ec5ff.png" 
                  alt="QVT Box Logo" 
                  className="h-20 w-20 mx-auto mb-4 rounded-full shadow-lg"
                />
                <CardTitle className="text-2xl text-teal-800">QVT Box</CardTitle>
                <CardDescription className="text-teal-600">
                  Votre solution phygitale de bien-être
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Connexion</TabsTrigger>
                    <TabsTrigger value="register">Inscription</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="email"
                            type="email"
                            className="pl-10 border-teal-200 focus:border-teal-500"
                            value={loginData.email}
                            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                            placeholder="votre@email.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="password"
                            type="password"
                            className="pl-10 border-teal-200 focus:border-teal-500"
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                            placeholder="••••••••"
                            required
                          />
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 shadow-lg">
                        Se connecter
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="register">
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prénom</Label>
                          <Input
                            id="firstName"
                            className="border-teal-200 focus:border-teal-500"
                            value={registerData.firstName}
                            onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom</Label>
                          <Input
                            id="lastName"
                            className="border-teal-200 focus:border-teal-500"
                            value={registerData.lastName}
                            onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="registerEmail">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="registerEmail"
                            type="email"
                            className="pl-10 border-teal-200 focus:border-teal-500"
                            value={registerData.email}
                            onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                            placeholder="votre@email.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Type de compte</Label>
                        <div className="flex gap-2">
                          <Button
                            type="button"
                            variant={registerData.accountType === 'individual' ? 'default' : 'outline'}
                            onClick={() => setRegisterData({...registerData, accountType: 'individual'})}
                            className="flex-1"
                          >
                            <Heart className="w-4 h-4 mr-2" />
                            Famille
                          </Button>
                          <Button
                            type="button"
                            variant={registerData.accountType === 'enterprise' ? 'default' : 'outline'}
                            onClick={() => setRegisterData({...registerData, accountType: 'enterprise'})}
                            className="flex-1"
                          >
                            <Building2 className="w-4 h-4 mr-2" />
                            Entreprise
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="registerPassword">Mot de passe</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="registerPassword"
                            type="password"
                            className="pl-10 border-teal-200 focus:border-teal-500"
                            value={registerData.password}
                            onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                            placeholder="••••••••"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="confirmPassword"
                            type="password"
                            className="pl-10 border-teal-200 focus:border-teal-500"
                            value={registerData.confirmPassword}
                            onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                            placeholder="••••••••"
                            required
                          />
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 shadow-lg">
                        Créer mon compte
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
