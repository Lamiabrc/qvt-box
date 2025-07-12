
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, Building2, Heart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { signupSchema, type SignupFormData } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SecureSignupFormProps {
  onSuccess?: () => void;
}

const SecureSignupForm: React.FC<SecureSignupFormProps> = ({ onSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [accountType, setAccountType] = useState<'individual' | 'enterprise'>('individual');
  const { signUp } = useAuth();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  });

  const password = watch('password');

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    
    try {
      console.log('Signup form: Attempting signup with:', data.email);
      
      const userData = {
        full_name: `${data.firstName} ${data.lastName}`,
        firstName: data.firstName,
        lastName: data.lastName,
        account_type: accountType,
        role: accountType === 'enterprise' ? 'employee' : 'user'
      };

      const { error, message } = await signUp(data.email, data.password, userData);
      
      if (error) {
        console.error('Signup form: Signup error:', error);
        setError('root', { 
          message: error.message || 'Une erreur s\'est produite lors de la création du compte.' 
        });
        return;
      }

      console.log('Signup form: Signup successful');
      toast({
        title: "Compte créé avec succès !",
        description: message || "Vous pouvez maintenant vous connecter avec vos identifiants.",
      });

      onSuccess?.();
    } catch (error: any) {
      console.error('Signup form: Unexpected signup error:', error);
      setError('root', { 
        message: 'Une erreur inattendue s\'est produite. Veuillez réessayer.' 
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
        <Label>Type de compte</Label>
        <div className="flex gap-2">
          <Button
            type="button"
            variant={accountType === 'individual' ? 'default' : 'outline'}
            onClick={() => setAccountType('individual')}
            className="flex-1"
          >
            <Heart className="w-4 h-4 mr-2" />
            Famille
          </Button>
          <Button
            type="button"
            variant={accountType === 'enterprise' ? 'default' : 'outline'}
            onClick={() => setAccountType('enterprise')}
            className="flex-1"
          >
            <Building2 className="w-4 h-4 mr-2" />
            Entreprise
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">Prénom</Label>
          <Input
            id="firstName"
            {...register('firstName')}
            placeholder="John"
            autoComplete="given-name"
            disabled={isLoading}
          />
          {errors.firstName && (
            <p className="text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Nom</Label>
          <Input
            id="lastName"
            {...register('lastName')}
            placeholder="Doe"
            autoComplete="family-name"
            disabled={isLoading}
          />
          {errors.lastName && (
            <p className="text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

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
            autoComplete="new-password"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            disabled={isLoading}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            {...register('confirmPassword')}
            className="pl-10 pr-10"
            placeholder="••••••••"
            autoComplete="new-password"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            disabled={isLoading}
          >
            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Création en cours..." : "Créer mon compte"}
      </Button>
    </form>
  );
};

export default SecureSignupForm;
