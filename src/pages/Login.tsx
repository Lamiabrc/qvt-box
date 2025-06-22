
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import FloatingBubbles from "../components/FloatingBubbles";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation de connexion
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "Connexion réussie",
          description: "Bienvenue dans votre espace QVT Box"
        });
        // Redirection selon le type de compte
        if (email.includes('admin')) {
          window.location.href = '/admin-panel';
        } else if (email.includes('hr') || email.includes('rh')) {
          window.location.href = '/dashboard';
        } else {
          window.location.href = '/';
        }
      } else {
        toast({
          title: "Erreur de connexion",
          description: "Veuillez remplir tous les champs",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <Card className="w-full max-w-md border-teal-200 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-teal-800">Connexion QVT Box</CardTitle>
              <CardDescription className="text-teal-600">
                Accédez à votre espace bien-être
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-teal-700">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-teal-500" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 border-teal-200 focus:border-teal-500"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-teal-700">Mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-teal-500" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 border-teal-200 focus:border-teal-500"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500 hover:text-teal-700"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Connexion..." : "Se connecter"}
                </Button>
                
                <div className="text-center">
                  <Button variant="link" className="text-teal-600 hover:text-teal-800">
                    Mot de passe oublié ?
                  </Button>
                </div>
                
                <Separator className="my-4" />
                
                <div className="text-center text-sm text-gray-600">
                  <p>Pas encore de compte ?</p>
                  <Button variant="link" className="text-teal-600 hover:text-teal-800 p-0">
                    Créer un compte
                  </Button>
                </div>
                
                <div className="text-center text-xs text-gray-500 mt-6">
                  <p>Comptes de démonstration :</p>
                  <p>Admin: admin@qvtbox.com | admin123</p>
                  <p>RH: rh@entreprise.com | rh123</p>
                  <p>Utilisateur: user@test.com | user123</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
