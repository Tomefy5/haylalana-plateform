// src/app/adultes/page.tsx
'use client';

import { useState } from 'react';
import { GuidesGrid } from '@/components/adults/guides-grid';
import { FileText, BookOpen, Download, Clock } from 'lucide-react';
import { guideCategories, mockGuides } from '@/lib/mock-data-adults';
import { Button } from '@/components/ui/button';

export default function AdultesPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filtrer les guides selon la catégorie
    const filteredGuides = selectedCategory === 'all'
        ? mockGuides
        : mockGuides.filter(guide => guide.category === selectedCategory);

    return (
        <main className="min-h-screen bg-gray-50">

            {/* Hero Section professionnelle */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Contenu gauche */}
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                                <FileText className="w-4 h-4" aria-hidden="true" />
                                <span className="text-sm font-semibold">Espace Adultes</span>
                            </div>

                            {/* Titre */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Guides pratiques pour{' '}
                                <span className="text-blue-400">défendre vos droits</span>
                            </h1>

                            {/* Description */}
                            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                                Des guides complets et pratiques pour vous accompagner dans toutes
                                les situations juridiques du quotidien : travail, famille, logement,
                                consommation et justice.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8"
                                    onClick={() => document.getElementById('guides-section')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    <BookOpen className="w-5 h-5 mr-2" aria-hidden="true" />
                                    Consulter les guides
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8"
                                >
                                    <Download className="w-5 h-5 mr-2" aria-hidden="true" />
                                    Télécharger tout
                                </Button>
                            </div>
                        </div>

                        {/* Stats droite */}
                        <div className="grid grid-cols-2 gap-6">

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <div className="text-4xl font-bold text-blue-400 mb-2">12</div>
                                <div className="text-gray-300 text-sm">Guides complets</div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <div className="text-4xl font-bold text-green-400 mb-2">6</div>
                                <div className="text-gray-300 text-sm">Catégories</div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                                <div className="text-gray-300 text-sm">Gratuits</div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                                <div className="text-4xl font-bold text-orange-400 mb-2">PDF</div>
                                <div className="text-gray-300 text-sm">Téléchargeables</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Filtres et Guides */}
            <section id="guides-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* Filtres par catégorie */}
                    <div className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                            Parcourir par catégorie
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {guideCategories.map((category) => (
                                <Button
                                    key={category.id}
                                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                                    className={`
                    font-semibold transition-all
                    ${selectedCategory === category.id
                                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                            : 'hover:border-blue-600 hover:text-blue-600'
                                        }
                  `}
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    <span className="mr-2">{category.icon}</span>
                                    {category.name}
                                    <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                                        {category.count}
                                    </span>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Compteur de résultats */}
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-900">{filteredGuides.length}</span> guide{filteredGuides.length > 1 ? 's' : ''} disponible{filteredGuides.length > 1 ? 's' : ''}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" aria-hidden="true" />
                            <span>Mis à jour régulièrement</span>
                        </div>
                    </div>

                    {/* Grille des guides */}
                    <GuidesGrid guides={filteredGuides} />
                </div>
            </section>
        </main>
    );
}
