// src/components/newsletter/newsletter-form.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsletterSchema, NewsletterFormValues } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export function NewsletterForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch,
    } = useForm<NewsletterFormValues>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
            consent: false,
        },
    });

    const consent = watch('consent');

    const onSubmit = async (data: NewsletterFormValues) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Newsletter subscription:', data);
            setSubmitStatus('success');
            reset();
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            console.error('Error subscribing:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        // OPTION 1 : Fond gris clair
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-haylalana-brand/[0.02]">

            <div className="container mx-auto max-w-7xl">
                <div className="max-w-2xl mx-auto">
                    {/* Carte blanche simple */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">

                        {/* En-tête simple */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-haylalana-brand/10 mb-4">
                                <Mail className="w-7 h-7 text-haylalana-brand" aria-hidden="true" />
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-bold text-haylalana-heading-primary mb-3">
                                Restez informé
                            </h2>

                            <p className="text-haylalana-text-secondary">
                                Recevez nos actualités juridiques dans votre boîte mail
                            </p>
                        </div>

                        {submitStatus === 'success' ? (
                            <div className="text-center py-6">
                                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-haylalana-success" aria-hidden="true" />
                                <p className="text-lg font-semibold text-haylalana-heading-primary mb-2">
                                    Inscription réussie !
                                </p>
                                <p className="text-haylalana-text-secondary">
                                    Vous recevrez bientôt nos actualités.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                                {/* Input email */}
                                <div className="space-y-2">
                                    <Input
                                        type="email"
                                        placeholder="Votre adresse email"
                                        {...register('email')}
                                        className={`h-12 border-haylalana-border-primary focus:border-haylalana-brand ${errors.email ? 'border-haylalana-error' : ''
                                            }`}
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-haylalana-error flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" aria-hidden="true" />
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-start gap-3">
                                    <Checkbox
                                        id="consent"
                                        checked={consent}
                                        onCheckedChange={(checked) => setValue('consent', checked as boolean)}
                                        className="mt-0.5 data-[state=checked]:bg-haylalana-brand data-[state=checked]:border-haylalana-brand"
                                    />
                                    <Label
                                        htmlFor="consent"
                                        className="text-sm text-haylalana-text-secondary cursor-pointer leading-relaxed"
                                    >
                                        J'accepte de recevoir les actualités de Haylalàna par email
                                    </Label>
                                </div>

                                {errors.consent && (
                                    <p className="text-sm text-haylalana-error flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" aria-hidden="true" />
                                        {errors.consent.message}
                                    </p>
                                )}

                                {submitStatus === 'error' && (
                                    <p className="text-sm text-haylalana-error flex items-center gap-1">
                                        <AlertCircle className="w-4 h-4" aria-hidden="true" />
                                        Une erreur est survenue. Veuillez réessayer.
                                    </p>
                                )}

                                {/* Bouton submit simple */}
                                <Button
                                    type="submit"
                                    className="w-full bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold h-12"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Inscription...' : 'S\'inscrire'}
                                </Button>

                                <p className="text-xs text-haylalana-text-muted text-center">
                                    Désabonnement possible à tout moment
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
