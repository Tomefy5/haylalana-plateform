'use client';

import { StoriesGrid } from '@/components/children/stories-grid';
import { VideosGrid } from '@/components/children/videos-grid';
import { BookOpen, Video, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ChildrenPage() {

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
                                    <Sparkles className="w-4 h-4 text-haylalana-brand" aria-hidden="true" />
                                    <span className="text-sm font-semibold text-haylalana-brand">Pour les 6-12 ans</span>
                                </div>

                                {/* Titre */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-haylalana-heading-primary">
                                    Découvre tes droits ! 🎉
                                </h1>

                                {/* Description */}
                                <p className="text-lg text-haylalana-text-secondary mb-8 leading-relaxed">
                                    Des histoires amusantes et des vidéos simples pour comprendre
                                    tes droits et apprendre à les protéger
                                </p>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        size="lg"
                                        className="bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold px-8 shadow-lg hover:scale-105 transition-all"
                                        onClick={() => document.getElementById('stories-section')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        <BookOpen className="w-5 h-5 mr-2" aria-hidden="true" />
                                        Voir les histoires
                                    </Button>

                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-haylalana-brand text-haylalana-brand hover:bg-haylalana-brand hover:text-white font-semibold px-8"
                                        onClick={() => document.getElementById('videos-section')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        <Video className="w-5 h-5 mr-2" aria-hidden="true" />
                                        Voir les vidéos
                                    </Button>
                                </div>
                            </div>

                            {/* Stats compactes */}
                            <div className="grid grid-cols-2 gap-4">

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">📖</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Histoires</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">🎥</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Vidéos</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">🎨</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Amusant</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">🌟</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Gratuit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Histoires */}
            <section id="stories-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* En-tête section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-haylalana-brand text-white">
                                <BookOpen className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-haylalana-heading-primary">
                                    Histoires à lire 📖
                                </h2>
                                <p className="text-haylalana-text-secondary mt-1">
                                    Apprends en t'amusant avec nos personnages
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grille des histoires */}
                    <StoriesGrid />
                </div>
            </section>

            {/* Section Vidéos */}
            <section id="videos-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* En-tête section */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-haylalana-brand text-white">
                                <Video className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-haylalana-heading-primary">
                                    Vidéos éducatives 🎥
                                </h2>
                                <p className="text-haylalana-text-secondary mt-1">
                                    Regarde et comprends tes droits en quelques minutes
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grille des vidéos */}
                    <VideosGrid />
                </div>
            </section>
        </main>
    );
}
