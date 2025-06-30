
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Shield, Eye, EyeOff, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import FloatingBubbles from "../components/FloatingBubbles";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user, signIn, isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated and is admin
  useEffect(() => {
    if (!loading && user && isAdmin) {
      navigate('/admin-panel');
    }
  }, [user, isAdmin, loading, navigate]);

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    );
  }

  // Redirect non-admin users who are already logged in
  if (user && !isAdmin) {
    return <Navigate to="/unauthorized" replace />;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await signIn(email, password);
      
      if (error) {
        toast({
          title: "Erreur de connexion",
          description: error.message || "Identifiants incorrects",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      // The useEffect will handle the redirect once auth state is updated
      toast({
        title: "Connexion réussie",
        description: "Vérification des permissions..."
      });
    } catch (error) {
      console.error('Admin login error:', error);
      toast({
        title: "Erreur de connexion",
        description: "Une erreur inattendue s'est produite",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 relative overflow-hidden">
      <FloatingBubbles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <Card className="w-full max-w-md border-slate-700 bg-slate-800/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Administration QVT Box</CardTitle>
              <CardDescription className="text-slate-300">
                Accès réservé aux administrateurs
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Alert className="mb-4 border-orange-600 bg-orange-900/20">
                <AlertCircle className="h-4 w-4 text-orange-400" />
                <AlertDescription className="text-orange-200">
                  Vous devez être connecté avec un compte administrateur pour accéder à cette section.
                </AlertDescription>
              </Alert>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-200">Email administrateur</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="admin@qvtbox.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-200">Mot de passe</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 pr-10"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Connexion..." : "Se connecter"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
