// src/components/home/objectives-section.tsx
import { Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { COMPANY_OBJECTIVES } from '@/lib/data/home-content';
import Link from 'next/link';

export function ObjectivesSection() {
    return (
        <div>
            {/* En-tête Objectifs */}
            <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-haylalana-accent/10 border border-haylalana-accent/30">
                    <Target className="w-4 h-4 text-haylalana-accent" aria-hidden="true" />
                    <span className="text-sm font-semibold text-haylalana-accent">Nos objectifs</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-haylalana-heading-primary">
                    Notre vision pour Madagascar
                </h2>

                <p className="text-base sm:text-lg text-haylalana-text-secondary max-w-2xl mx-auto">
                    Des objectifs ambitieux mais réalisables pour transformer
                    l'accès au droit à Madagascar dans les années à venir.
                </p>
            </div>

            {/* Grille des objectifs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {COMPANY_OBJECTIVES.map((objective) => {
                    const IconComponent = objective.icon;

                    return (
                        <Card
                            key={objective.id}
                            className="border-2 border-haylalana-border-primary hover:border-haylalana-brand transition-all duration-300 hover:shadow-xl group bg-haylalana-bg-primary relative overflow-hidden"
                        >
                            {/* Bordure de gauche épaisse */}
                            <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-haylalana-brand to-haylalana-accent group-hover:w-2 transition-all" />

                            <CardContent className="p-6 sm:p-8 pl-10">

                                {/* Icône avec cercle bordeaux simple */}
                                <div
                                    className="
                    w-14 h-14 sm:w-16 sm:h-16 rounded-full
                    bg-haylalana-brand/10
                    flex items-center justify-center mb-5
                    group-hover:bg-haylalana-brand/20 group-hover:scale-110 transition-all duration-300
                  "
                                    aria-hidden="true"
                                >
                                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-haylalana-brand" />
                                </div>

                                {/* Statistique en bordeaux */}
                                <div className="text-4xl sm:text-5xl font-bold mb-3 text-haylalana-brand">
                                    {objective.stat}
                                </div>

                                {/* Titre */}
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-haylalana-heading-primary">
                                    {objective.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-haylalana-text-secondary">
                                    {objective.description}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Call-to-action supplémentaire */}
            <div className="mt-12 text-center">
                <p className="text-base sm:text-lg text-haylalana-text-secondary mb-6">
                    Vous partagez notre vision ? Rejoignez-nous dans cette mission !
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/nous-rejoindre"
                        className="
              inline-flex items-center gap-2 px-6 py-3 
              bg-haylalana-brand text-white font-semibold rounded-lg
              hover:bg-haylalana-brand-dark transition-all
              focus:outline-none focus:ring-4 focus:ring-haylalana-brand/50 focus:ring-offset-2
              transform hover:scale-105
            "
                    >
                        Nous rejoindre
                        <TrendingUp className="w-5 h-5" aria-hidden="true" />
                    </Link>

                    <Link
                        href="/partenaires"
                        className="
              inline-flex items-center gap-2 px-6 py-3
              border-2 border-haylalana-border-secondary text-haylalana-text-primary font-semibold rounded-lg
              hover:border-haylalana-brand hover:text-haylalana-brand transition-all
              focus:outline-none focus:ring-4 focus:ring-haylalana-border-secondary focus:ring-offset-2
            "
                    >
                        Devenir partenaire
                    </Link>
                </div>
            </div>
        </div>
    );
}
