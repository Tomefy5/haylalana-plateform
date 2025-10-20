// src/app/adultes/page.tsx - OPTION 3
'use client';

import { useState } from 'react';
import { GuidesGrid } from '@/components/adults/guides-grid';
import { FileText, BookOpen, Download, Clock } from 'lucide-react';
import { guideCategories, mockGuides } from '@/lib/mock-data-adults';
import { Button } from '@/components/ui/button';

export default function AdultesPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredGuides = selectedCategory === 'all'
        ? mockGuides
        : mockGuides.filter(guide => guide.category === selectedCategory);

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
                                    <FileText className="w-4 h-4 text-haylalana-brand" aria-hidden="true" />
                                    <span className="text-sm font-semibold text-haylalana-brand">Espace Adultes</span>
                                </div>

                                {/* Titre */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-haylalana-heading-primary">
                                    Guides pratiques pour{' '}
                                    <span className="text-haylalana-brand">défendre vos droits</span>
                                </h1>

                                {/* Description */}
                                <p className="text-lg text-haylalana-text-secondary mb-8 leading-relaxed">
                                    Des guides complets et pratiques pour vous accompagner dans toutes
                                    les situations juridiques du quotidien : travail, famille, logement,
                                    consommation et justice.
                                </p>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        size="lg"
                                        className="bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold px-8 shadow-lg hover:scale-105 transition-all"
                                        onClick={() => document.getElementById('guides-section')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        <BookOpen className="w-5 h-5 mr-2" aria-hidden="true" />
                                        Consulter les guides
                                    </Button>

                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-haylalana-brand text-haylalana-brand hover:bg-haylalana-brand hover:text-white font-semibold px-8"
                                    >
                                        <Download className="w-5 h-5 mr-2" aria-hidden="true" />
                                        Télécharger tout
                                    </Button>
                                </div>
                            </div>

                            {/* Stats compactes */}
                            <div className="grid grid-cols-2 gap-4">

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">12</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Guides</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">6</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Catégories</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">100%</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Gratuits</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">PDF</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Téléchargeable</div>
                                </div>
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
                        <h2 className="text-2xl sm:text-3xl font-bold text-haylalana-heading-primary mb-6">
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
                                            ? 'bg-haylalana-brand hover:bg-haylalana-brand-dark text-white shadow-md'
                                            : 'border-2 border-haylalana-border-primary bg-white text-haylalana-text-primary hover:border-haylalana-brand hover:text-haylalana-brand hover:bg-haylalana-brand/5'
                                        }
                                    `}
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    <span className="mr-2">{category.icon}</span>
                                    {category.name}
                                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${selectedCategory === category.id
                                        ? 'bg-white/20'
                                        : 'bg-haylalana-brand/10 text-haylalana-brand'
                                        }`}>
                                        {category.count}
                                    </span>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Compteur de résultats */}
                    <div className="flex items-center justify-between mb-8 p-4 bg-white rounded-xl border border-haylalana-border-primary shadow-sm">
                        <p className="text-haylalana-text-secondary">
                            <span className="font-semibold text-haylalana-heading-primary">{filteredGuides.length}</span> guide{filteredGuides.length > 1 ? 's' : ''} disponible{filteredGuides.length > 1 ? 's' : ''}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-haylalana-text-tertiary">
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
