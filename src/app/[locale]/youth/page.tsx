// src/app/jeunes/page.tsx
import { QuizGrid } from '@/components/youth/quiz-grid';
import { CapsulesGrid } from '@/components/youth/capsules-grid';
import { Brain, Lightbulb, TrendingUp, Zap } from 'lucide-react';

export default function JeunesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">

            {/* Hero Section pour jeunes - style moderne */}
            <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">

                {/* Pattern de fond */}
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" aria-hidden="true" />

                <div className="relative container mx-auto max-w-7xl text-center text-white">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <Zap className="w-4 h-4" aria-hidden="true" />
                        <span className="text-sm font-bold">13-17 ans</span>
                    </div>

                    {/* Titre */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                        Tes droits,{' '}
                        <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
                            ton pouvoir
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-4 text-white/95">
                        Apprends à connaître et défendre tes droits avec des quiz interactifs
                        et des capsules éducatives conçues pour toi
                    </p>

                    <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
                        Parce que connaître ses droits, c'est avoir le pouvoir de les faire respecter
                    </p>

                    {/* Stats rapides */}
                    <div className="flex flex-wrap gap-6 sm:gap-8 justify-center mt-10">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                                <Brain className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold">6</div>
                                <div className="text-sm text-white/80">Quiz interactifs</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                                <Lightbulb className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold">8</div>
                                <div className="text-sm text-white/80">Capsules éducatives</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                                <TrendingUp className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold">710</div>
                                <div className="text-sm text-white/80">Points à gagner</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Quiz */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* En-tête section */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                            <Brain className="w-7 h-7" aria-hidden="true" />
                        </div>
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                                Quiz interactifs 🎯
                            </h2>
                            <p className="text-gray-600 mt-1">
                                Teste tes connaissances et gagne des points
                            </p>
                        </div>
                    </div>

                    {/* Grille des quiz */}
                    <QuizGrid />
                </div>
            </section>

            {/* Section Capsules */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto max-w-7xl">

                    {/* En-tête section */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 text-white">
                            <Lightbulb className="w-7 h-7" aria-hidden="true" />
                        </div>
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                                Capsules éducatives 💡
                            </h2>
                            <p className="text-gray-600 mt-1">
                                L'essentiel à savoir en quelques minutes
                            </p>
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
