// src/app/contact/page.tsx
import { ContactForm } from '@/components/contact/contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-haylalana-bg-primary via-haylalana-brand/3 to-haylalana-bg-primary">

            {/* Hero Section avec grande carte blanche */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* Grande carte blanche centrale */}
                    <div className="bg-white rounded-3xl shadow-2xl border border-haylalana-border-primary p-8 sm:p-12">

                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Colonne gauche : Contenu */}
                            <div>
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-haylalana-brand/10 border-2 border-haylalana-brand/30">
                                    <MessageCircle className="w-4 h-4 text-haylalana-brand" aria-hidden="true" />
                                    <span className="text-sm font-semibold text-haylalana-brand">Nous contacter</span>
                                </div>

                                {/* Titre */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-haylalana-heading-primary">
                                    Besoin d'aide ou{' '}
                                    <span className="text-haylalana-brand">de renseignements ?</span>
                                </h1>

                                {/* Description */}
                                <p className="text-lg text-haylalana-text-secondary mb-8 leading-relaxed">
                                    Notre équipe est là pour répondre à toutes vos questions sur vos droits
                                    et l'utilisation de la plateforme Haylalàna
                                </p>

                                {/* Informations de contact en ligne */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-haylalana-brand/10 rounded-lg">
                                            <Mail className="w-5 h-5 text-haylalana-brand" aria-hidden="true" />
                                        </div>
                                        <a href="mailto:contact@haylalana.mg" className="text-haylalana-brand hover:text-haylalana-brand-dark hover:underline font-medium">
                                            contact@haylalana.mg
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-haylalana-accent/10 rounded-lg">
                                            <Phone className="w-5 h-5 text-haylalana-accent" aria-hidden="true" />
                                        </div>
                                        <a href="tel:+261340000000" className="text-haylalana-brand hover:text-haylalana-brand-dark hover:underline font-medium">
                                            +261 34 00 000 00
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-haylalana-brand/10 rounded-lg">
                                            <MapPin className="w-5 h-5 text-haylalana-brand" aria-hidden="true" />
                                        </div>
                                        <span className="text-haylalana-text-secondary font-medium">
                                            Lot II K 45 Tsaralalana, Antananarivo
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-haylalana-accent/10 rounded-lg">
                                            <Clock className="w-5 h-5 text-haylalana-accent" aria-hidden="true" />
                                        </div>
                                        <span className="text-haylalana-text-secondary font-medium">
                                            Lun-Ven : 8h-17h | Sam : 8h-12h
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Colonne droite : Stats/Infos compactes */}
                            <div className="grid grid-cols-2 gap-4">

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">📧</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Email</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-accent/5 rounded-xl border border-haylalana-accent/20 hover:bg-haylalana-accent/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-accent mb-1">📞</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Téléphone</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">📍</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Bureau</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-accent/5 rounded-xl border border-haylalana-accent/20 hover:bg-haylalana-accent/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-accent mb-1">⏰</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Horaires</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Formulaire */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* Titre section */}
                    <div className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-haylalana-heading-primary mb-6">
                            Envoyez-nous un message
                        </h2>
                        <p className="text-haylalana-text-secondary max-w-2xl">
                            Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                        </p>
                    </div>

                    {/* Carte formulaire */}
                    <Card className="border-haylalana-border-primary shadow-xl max-w-4xl">
                        <CardContent className="p-8 sm:p-12">
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}

export const metadata = {
    title: 'Contact - Haylalàna',
    description: 'Contactez l\'équipe Haylalàna pour toute question sur vos droits ou l\'utilisation de notre plateforme.',
};
