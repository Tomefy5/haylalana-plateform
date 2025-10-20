// src/app/jeunes/page.tsx
import { QuizGrid } from '@/components/youth/quiz-grid';
import { CapsulesGrid } from '@/components/youth/capsules-grid';
import { Brain, Lightbulb, TrendingUp, Zap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JeunesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-haylalana-bg-primary via-haylalana-brand/3 to-haylalana-bg-primary">

            {/* Hero Section avec grande carte blanche */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* Grande carte blanche centrale */}
                    <div className="bg-white rounded-3xl shadow-2xl border border-haylalana-border-primary p-8 sm:p-12">

                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Contenu gauche */}
                            <div>
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-haylalana-brand/10 border-2 border-haylalana-brand/30">
                                    <Zap className="w-4 h-4 text-haylalana-brand" aria-hidden="true" />
                                    <span className="text-sm font-semibold text-haylalana-brand">Pour les 13-17 ans</span>
                                </div>

                                {/* Titre */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-haylalana-heading-primary">
                                    Tes droits,{' '}
                                    <span className="text-haylalana-brand">ton pouvoir</span> 💪
                                </h1>

                                {/* Description */}
                                <p className="text-lg text-haylalana-text-secondary mb-8 leading-relaxed">
                                    Apprends à connaître et défendre tes droits avec des quiz interactifs
                                    et des capsules éducatives conçues pour toi
                                </p>

                                {/* CTA - Sans onClick car pas de 'use client' */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        size="lg"
                                        className="bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold px-8 shadow-lg hover:scale-105 transition-all"
                                        asChild
                                    >
                                        <a href="#quiz-section">
                                            <Brain className="w-5 h-5 mr-2" aria-hidden="true" />
                                            Faire les quiz
                                        </a>
                                    </Button>

                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-haylalana-brand text-haylalana-brand hover:bg-haylalana-brand hover:text-white font-semibold px-8"
                                        asChild
                                    >
                                        <a href="#capsules-section">
                                            <Lightbulb className="w-5 h-5 mr-2" aria-hidden="true" />
                                            Voir les capsules
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            {/* Stats compactes */}
                            <div className="grid grid-cols-2 gap-4">

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">6</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Quiz</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">8</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Capsules</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">710</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Points</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">100%</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Gratuit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Quiz */}
            <section id="quiz-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* En-tête section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-haylalana-brand text-white">
                                <Brain className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-haylalana-heading-primary">
                                    Quiz interactifs 🎯
                                </h2>
                                <p className="text-haylalana-text-secondary mt-1">
                                    Teste tes connaissances et gagne des points
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grille des quiz */}
                    <QuizGrid />
                </div>
            </section>

            {/* Section Capsules */}
            <section id="capsules-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* En-tête section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-haylalana-brand text-white">
                                <Lightbulb className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-haylalana-heading-primary">
                                    Capsules éducatives 💡
                                </h2>
                                <p className="text-haylalana-text-secondary mt-1">
                                    L'essentiel à savoir en quelques minutes
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grille des capsules */}
                    <CapsulesGrid />
                </div>
            </section>
        </main>
    );
}

// Métadonnées SEO
export const metadata = {
    title: 'Haylalàna - Espace Jeunes | Quiz et Capsules',
    description: 'Apprends tes droits avec des quiz interactifs et des capsules éducatives conçues pour les 13-17 ans. Teste tes connaissances et gagne des points !',
};
