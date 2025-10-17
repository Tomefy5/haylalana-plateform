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
            // Simulation d'envoi
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
        <div className="text-center text-white">

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Mail className="w-8 h-8" aria-hidden="true" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Restez informé
            </h2>

            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Inscrivez-vous à notre newsletter pour recevoir nos derniers articles,
                actualités juridiques et conseils pratiques directement dans votre boîte mail
            </p>

            {submitStatus === 'success' ? (
                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-400" aria-hidden="true" />
                    <p className="text-lg font-semibold mb-2">Inscription réussie !</p>
                    <p className="text-blue-100">Vous recevrez bientôt nos actualités.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">

                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                        <Input
                            type="email"
                            placeholder="Votre adresse email"
                            {...register('email')}
                            className={`flex-1 h-12 bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60 ${errors.email ? 'border-red-400' : ''}`}
                        />

                        <Button
                            type="submit"
                            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold h-12 px-8"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Inscription...' : 'S\'inscrire'}
                        </Button>
                    </div>

                    {errors.email && (
                        <p className="text-sm text-red-300 mb-3 flex items-center justify-center gap-1">
                            <AlertCircle className="w-4 h-4" aria-hidden="true" />
                            {errors.email.message}
                        </p>
                    )}

                    <div className="flex items-start gap-3 justify-center text-left">
                        <Checkbox
                            id="consent"
                            checked={consent}
                            onCheckedChange={(checked) => setValue('consent', checked as boolean)}
                            className="mt-1 border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                        />
                        <Label
                            htmlFor="consent"
                            className="text-sm text-blue-100 cursor-pointer leading-relaxed"
                        >
                            J'accepte de recevoir les actualités et conseils de Haylalàna par email.
                            Je peux me désinscrire à tout moment.
                        </Label>
                    </div>

                    {errors.consent && (
                        <p className="text-sm text-red-300 mt-2 flex items-center justify-center gap-1">
                            <AlertCircle className="w-4 h-4" aria-hidden="true" />
                            {errors.consent.message}
                        </p>
                    )}

                    {submitStatus === 'error' && (
                        <p className="text-sm text-red-300 mt-3 flex items-center justify-center gap-1">
                            <AlertCircle className="w-4 h-4" aria-hidden="true" />
                            Une erreur est survenue. Veuillez réessayer.
                        </p>
                    )}
                </form>
            )}
        </div>
    );
}
