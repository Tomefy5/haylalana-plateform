// src/components/home/values-section.tsx
import { Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { COMPANY_VALUES } from '@/lib/data/home-content';

export function ValuesSection() {
    return (
        <div className="mb-20 sm:mb-24">
            {/* En-tête Valeurs */}
            <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-haylalana-brand/10 border border-haylalana-brand/30">
                    <Shield className="w-4 h-4 text-haylalana-brand" aria-hidden="true" />
                    <span className="text-sm font-semibold text-haylalana-brand">Nos valeurs</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-haylalana-heading-primary">
                    Les principes qui nous guident
                </h2>

                <p className="text-base sm:text-lg text-haylalana-text-secondary max-w-2xl mx-auto">
                    Haylalàna est fondé sur des valeurs fortes qui orientent chaque décision
                    et chaque action pour servir au mieux la population malgache.
                </p>
            </div>

            {/* Grille des cartes de valeurs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {COMPANY_VALUES.map((value) => {
                    const IconComponent = value.icon;

                    return (
                        <Card
                            key={value.id}
                            className="border-2 border-haylalana-border-primary hover:border-haylalana-brand transition-all duration-300 hover:shadow-xl group bg-haylalana-bg-primary"
                        >
                            <CardContent className="p-6 sm:p-8">

                                {/* Icône avec fond bordeaux UNIFORME */}
                                <div
                                    className="
                    w-14 h-14 sm:w-16 sm:h-16 rounded-2xl 
                    bg-gradient-to-br from-haylalana-brand to-haylalana-brand-dark
                    flex items-center justify-center mb-5
                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                  "
                                    aria-hidden="true"
                                >
                                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                </div>

                                {/* Titre */}
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-haylalana-heading-accent">
                                    {value.title}
                                </h3>

                                {/* Description */}
                                <p className="text-haylalana-text-secondary leading-relaxed">
                                    {value.description}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
