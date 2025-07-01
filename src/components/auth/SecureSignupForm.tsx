
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, User, Mail, Lock, AlertCircle, Loader2, Info } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { signupSchema, type SignupFormData } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SecureSignupFormProps {
  onSuccess?: () => void;
}

const SecureSignupForm: React.FC<SecureSignupFormProps> = ({ onSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);
  const { signUp } = useAuth();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema)
  });

  const acceptTerms = watch('acceptTerms');

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    setGeneralError(null);
    setDebugInfo(null);
    
    try {
      console.log('Form submission started with data:', {
        email: data.email,
        role: data.role,
        fullName: data.fullName
      });

      const { data: authData, error } = await signUp(data.email, data.password, {
        full_name: data.fullName,
        role: data.role
      });
      
      console.log('SignUp response:', { authData, error });
      
      if (error) {
        console.error('Signup error:', error);
        
        // Set debug info for troubleshooting
        setDebugInfo(`Erreur technique: ${error.message}`);
        
        // Handle specific error cases
        if (error.message.includes('already registered') || error.message.includes('déjà utilisée')) {
          setError('email', { message: 'Cet email est déjà utilisé' });
        } else if (error.message.includes('captcha') || error.message.includes('CAPTCHA') || error.message.includes('sécurité')) {
          setGeneralError('Problème de vérification de sécurité. Ceci peut être dû à la configuration Supabase. Veuillez contacter le support.');
        } else if (error.message.includes('Invalid email')) {
          setError('email', { message: 'Format d\'email invalide' });
        } else if (error.message.includes('Password')) {
          setError('password', { message: 'Le mot de passe doit contenir au moins 6 caractères' });
        } else if (error.message.includes('Invalid')) {
          setGeneralError('Données invalides. Vérifiez vos informations et réessayez.');
        } else {
          setGeneralError(error.message || 'Erreur lors de la création du compte. Veuillez réessayer.');
        }
        return;
      }

      // Success case
      console.log('Signup successful, user:', authData?.user?.email);
      
      toast({
        title: "Compte créé avec succès !",
        description: "Vérifiez votre email pour confirmer votre compte.",
      });
      
      // Don't call onSuccess immediately, let the AuthContext handle the redirect
      // onSuccess will be called after email confirmation
      
    } catch (error) {
      console.error('Unexpected signup error:', error);
      setGeneralError('Une erreur inattendue s\'est produite. Veuillez réessayer plus tard.');
      setDebugInfo(`Erreur inattendue: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {generalError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{generalError}</AlertDescription>
        </Alert>
      )}

      {debugInfo && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription className="text-xs">
            <strong>Debug:</strong> {debugInfo}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="fullName">Nom complet</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <Input
            id="fullName"
            {...register('fullName')}
            className="pl-10"
            placeholder="Votre nom complet"
            autoComplete="name"
            disabled={isLoading}
          />
        </div>
        {errors.fullName && (
          <p className="text-sm text-red-600">{errors.fullName.message}</p>
        )}
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
        <Label htmlFor="role">Type de compte</Label>
        <Select onValueChange={(value) => setValue('role', value as any)} disabled={isLoading}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre profil" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user">Utilisateur</SelectItem>
            <SelectItem value="parent">Parent</SelectItem>
            <SelectItem value="teen">Adolescent</SelectItem>
            <SelectItem value="employee">Employé</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="hr">RH</SelectItem>
          </SelectContent>
        </Select>
        {errors.role && (
          <p className="text-sm text-red-600">{errors.role.message}</p>
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

      <div className="flex items-center space-x-2">
        <Checkbox
          id="acceptTerms"
          checked={acceptTerms}
          onCheckedChange={(checked) => setValue('acceptTerms', checked as boolean)}
          disabled={isLoading}
        />
        <Label htmlFor="acceptTerms" className="text-sm">
          J'accepte les{' '}
          <a href="/cgu" className="text-teal-600 hover:underline">
            conditions d'utilisation
          </a>{' '}
          et la{' '}
          <a href="/privacy-policy" className="text-teal-600 hover:underline">
            politique de confidentialité
          </a>
        </Label>
      </div>
      {errors.acceptTerms && (
        <p className="text-sm text-red-600">{errors.acceptTerms.message}</p>
      )}

      <Button 
        type="submit" 
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Création du compte...
          </>
        ) : (
          "Créer mon compte"
        )}
      </Button>

      {(generalError || debugInfo) && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800">
            <strong>Besoin d'aide ?</strong> Si vous rencontrez des problèmes répétés avec le CAPTCHA, 
            cela peut être dû à la configuration Supabase. 
            <br />
            <strong>Solutions à essayer :</strong>
            <br />
            1. Vérifiez que l'URL du site est correctement configurée dans Supabase
            <br />
            2. Désactivez temporairement le CAPTCHA dans les paramètres d'authentification Supabase
            <br />
            3. Contactez le support pour obtenir de l'aide
          </p>
        </div>
      )}
    </form>
  );
};

export default SecureSignupForm;
