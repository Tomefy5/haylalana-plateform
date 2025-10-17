// src/app/contact/page.tsx
import { ContactForm } from '@/components/contact/contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl text-center">

                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span className="text-sm font-semibold">Nous contacter</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Besoin d'aide ou de renseignements ?
                    </h1>

                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
                        Notre équipe est là pour répondre à toutes vos questions sur vos droits
                        et l'utilisation de la plateforme Haylalàna
                    </p>
                </div>
            </section>

            {/* Section principale */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Colonne gauche : Infos de contact */}
                        <div className="lg:col-span-1 space-y-6">

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Informations de contact
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Vous pouvez nous joindre par les moyens suivants :
                                </p>
                            </div>

                            {/* Cartes d'info */}
                            <Card>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <Mail className="w-6 h-6 text-blue-600" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:contact@haylalana.mg" className="text-blue-600 hover:underline">
                                            contact@haylalana.mg
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 bg-green-100 rounded-lg">
                                        <Phone className="w-6 h-6 text-green-600" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                                        <a href="tel:+261340000000" className="text-blue-600 hover:underline">
                                            +261 34 00 000 00
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 bg-purple-100 rounded-lg">
                                        <MapPin className="w-6 h-6 text-purple-600" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                                        <p className="text-gray-600">
                                            Lot II K 45 Tsaralalana<br />
                                            Antananarivo, Madagascar
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 bg-orange-100 rounded-lg">
                                        <Clock className="w-6 h-6 text-orange-600" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                                        <p className="text-gray-600">
                                            Lundi - Vendredi : 8h - 17h<br />
                                            Samedi : 8h - 12h
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Colonne droite : Formulaire */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        Envoyez-nous un message
                                    </h2>
                                    <p className="text-gray-600 mb-8">
                                        Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                                    </p>

                                    <ContactForm />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export const metadata = {
    title: 'Contact - Haylalàna',
    description: 'Contactez l\'équipe Haylalàna pour toute question sur vos droits ou l\'utilisation de notre plateforme.',
};
