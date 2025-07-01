
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { loginSchema, type LoginFormData } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SecureLoginFormProps {
  onSuccess?: () => void;
}

const SecureLoginForm: React.FC<SecureLoginFormProps> = ({ onSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    
    try {
      const { error } = await signIn(data.email, data.password);
      
      if (error) {
        console.error('Login error:', error);
        
        // Gestion spécifique des erreurs d'authentification
        if (error.message.includes('Invalid login credentials')) {
          setError('root', { message: 'Email ou mot de passe incorrect' });
        } else if (error.message.includes('Email not confirmed')) {
          setError('root', { message: 'Veuillez vérifier votre email avant de vous connecter' });
        } else if (error.message.includes('captcha')) {
          setError('root', { 
            message: 'Vérification de sécurité requise. Veuillez réessayer dans quelques minutes.' 
          });
          toast({
            title: "Problème de sécurité détecté",
            description: "La protection anti-robots est activée. Contactez l'administrateur si le problème persiste.",
            variant: "destructive"
          });
        } else if (error.message.includes('rate limit')) {
          setError('root', { 
            message: 'Trop de tentatives de connexion. Veuillez attendre quelques minutes.' 
          });
        } else {
          setError('root', { 
            message: 'Erreur de connexion. Vérifiez vos identifiants et réessayez.' 
          });
        }
        return;
      }

      toast({
        title: "Connexion réussie",
        description: "Bienvenue dans votre espace QVT Box"
      });

      onSuccess?.();
    } catch (error: any) {
      console.error('Unexpected login error:', error);
      setError('root', { 
        message: 'Une erreur inattendue s\'est produite. Veuillez réessayer.' 
      });
      
      toast({
        title: "Erreur de connexion",
        description: "Un problème technique est survenu. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {errors.root && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{errors.root.message}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            id="email"
            type="email"
            {...register('email')}
            className="pl-10"
            placeholder="votre@email.com"
            autoComplete="email"
            disabled={isLoading}
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Mot de passe</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            {...register('password')}
            className="pl-10 pr-10"
            placeholder="••••••••"
            autoComplete="current-password"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={isLoading}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Connexion en cours..." : "Se connecter"}
      </Button>

      <div className="text-center text-sm text-gray-600">
        <p>
          En cas de problème de connexion persistant, 
          <br />
          contactez le support technique.
        </p>
      </div>
    </form>
  );
};

export default SecureLoginForm;
