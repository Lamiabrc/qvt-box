
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string()
    .email('Adresse email invalide')
    .min(5, 'Email trop court')
    .max(100, 'Email trop long'),
  password: z.string()
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
    .max(128, 'Mot de passe trop long')
});

export const signupSchema = z.object({
  email: z.string()
    .email('Adresse email invalide')
    .min(5, 'Email trop court')
    .max(100, 'Email trop long'),
  password: z.string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .max(128, 'Mot de passe trop long')
    .regex(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule')
    .regex(/[a-z]/, 'Le mot de passe doit contenir au moins une minuscule')
    .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre'),
  confirmPassword: z.string(),
  fullName: z.string()
    .min(2, 'Le nom complet doit contenir au moins 2 caractères')
    .max(100, 'Nom trop long')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom ne peut contenir que des lettres, espaces, apostrophes et tirets'),
  role: z.enum(['user', 'parent', 'teen', 'employee', 'manager', 'hr']),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'Vous devez accepter les conditions d\'utilisation'
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

export const resetPasswordSchema = z.object({
  email: z.string()
    .email('Adresse email invalide')
    .min(5, 'Email trop court')
    .max(100, 'Email trop long')
});

export const contactSchema = z.object({
  name: z.string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Nom trop long')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom ne peut contenir que des lettres, espaces, apostrophes et tirets'),
  email: z.string()
    .email('Adresse email invalide')
    .max(100, 'Email trop long'),
  phone: z.string()
    .regex(/^[\d\s\-\+\(\)]*$/, 'Format de téléphone invalide')
    .max(20, 'Numéro de téléphone trop long')
    .optional(),
  subject: z.string()
    .min(5, 'Le sujet doit contenir au moins 5 caractères')
    .max(200, 'Sujet trop long'),
  message: z.string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(2000, 'Message trop long')
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
