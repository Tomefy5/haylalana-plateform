// src/lib/validations.ts
import { z } from 'zod';

// Schéma de validation pour le formulaire de contact
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Le nom doit contenir au moins 2 caractères' })
    .max(50, { message: 'Le nom ne peut pas dépasser 50 caractères' }),
  email: z
    .string()
    .email({ message: 'Veuillez entrer une adresse email valide' }),
  subject: z
    .string()
    .min(5, { message: 'Le sujet doit contenir au moins 5 caractères' })
    .max(100, { message: 'Le sujet ne peut pas dépasser 100 caractères' }),
  message: z
    .string()
    .min(20, { message: 'Le message doit contenir au moins 20 caractères' })
    .max(1000, { message: 'Le message ne peut pas dépasser 1000 caractères' }),
});

// Schéma de validation pour la newsletter
export const newsletterSchema = z.object({
  email: z
    .string()
    .email({ message: 'Veuillez entrer une adresse email valide' }),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Vous devez accepter de recevoir nos actualités',
    }),
});

// Types TypeScript dérivés des schémas
export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
