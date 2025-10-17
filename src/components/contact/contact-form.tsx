// src/components/contact/contact-form.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormValues } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulation d'envoi (remplacer par vraie API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Contact form data:', data);
      
      setSubmitStatus('success');
      reset();
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
      {/* Nom complet */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Nom complet <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Votre nom complet"
          {...register('name')}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            {errors.name.message}
          </p>
        )}
      </div>
      
      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Adresse email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="votre.email@exemple.com"
          {...register('email')}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            {errors.email.message}
          </p>
        )}
      </div>
      
      {/* Sujet */}
      <div className="space-y-2">
        <Label htmlFor="subject">
          Sujet <span className="text-red-500">*</span>
        </Label>
        <Input
          id="subject"
          type="text"
          placeholder="Sujet de votre message"
          {...register('subject')}
          className={errors.subject ? 'border-red-500' : ''}
        />
        {errors.subject && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            {errors.subject.message}
          </p>
        )}
      </div>
      
      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Décrivez votre demande en détail..."
          rows={6}
          {...register('message')}
          className={errors.message ? 'border-red-500' : ''}
        />
        {errors.message && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" aria-hidden="true" />
            {errors.message.message}
          </p>
        )}
      </div>
      
      {/* Messages de statut */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold text-green-800">Message envoyé avec succès !</p>
            <p className="text-sm text-green-700">Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold text-red-800">Erreur lors de l'envoi</p>
            <p className="text-sm text-red-700">Veuillez réessayer ou nous contacter par email.</p>
          </div>
        </div>
      )}
      
      {/* Bouton submit */}
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 font-semibold"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" aria-hidden="true" />
            Envoyer le message
          </>
        )}
      </Button>
    </form>
  );
}
