// src/app/enfants/page.tsx
import { StoriesGrid } from '@/components/children/stories-grid';
import { VideosGrid } from '@/components/children/videos-grid';
import { BookOpen, Video, Sparkles } from 'lucide-react';

export default function EnfantsPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">

            {/* Hero Section pour enfants */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                <div className="container mx-auto max-w-7xl text-center text-white">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" aria-hidden="true" />
                        <span className="text-sm font-semibold">Pour les 6-12 ans</span>
                    </div>

                    {/* Titre */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                        Découvre tes droits ! 🎉
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        Des histoires amusantes et des vidéos simples pour comprendre
                        tes droits et apprendre à les protéger
                    </p>
                </div>
            </section>

            {/* Section Histoires */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* En-tête section */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-xl bg-blue-500 text-white">
                            <BookOpen className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                                Histoires à lire 📖
                            </h2>
                            <p className="text-gray-600 mt-1">
                                Apprends en t'amusant avec nos personnages
                            </p>
                        </div>
                    </div>

                    {/* Grille des histoires */}
                    <StoriesGrid />
                </div>
            </section>

            {/* Section Vidéos */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="container mx-auto max-w-7xl">

                    {/* En-tête section */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-xl bg-purple-500 text-white">
                            <Video className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                                Vidéos éducatives 🎥
                            </h2>
                            <p className="text-gray-600 mt-1">
                                Regarde et comprends tes droits en quelques minutes
                            </p>
                        </div>
                    </div>

                    {/* Grille des vidéos */}
                    <VideosGrid />
                </div>
            </section>
        </main>
    );
}

// Métadonnées SEO
export const metadata = {
    title: 'Haylalàna - Espace Enfants | Histoires et Vidéos',
    description: 'Découvre tes droits avec des histoires amusantes et des vidéos éducatives adaptées aux 6-12 ans. Apprends en t\'amusant avec Haylalàna !',
};
