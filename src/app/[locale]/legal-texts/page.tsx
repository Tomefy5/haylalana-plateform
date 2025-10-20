// src/app/textes-juridiques/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { SearchFilters } from '@/components/legal-texts/search-filters';
import { LegalDocumentsList } from '@/components/legal-texts/legal-documents-list';
import { mockLegalDocuments } from '@/lib/mock-data-legal-texts';
import { Scale, FileText, Download, BookOpen } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

export default function TextesJuridiquesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState<string>('all');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState(1);

    // Filtrer les documents
    const filteredDocuments = useMemo(() => {
        return mockLegalDocuments.filter((doc) => {
            const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                doc.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
                doc.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesType = selectedType === 'all' || doc.type === selectedType;
            const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;

            return matchesSearch && matchesType && matchesCategory;
        });
    }, [searchQuery, selectedType, selectedCategory]);

    // Pagination
    const totalPages = Math.ceil(filteredDocuments.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedDocuments = filteredDocuments.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Compter les types
    const documentTypes = ['Loi', 'Décret', 'Arrêté', 'Ordonnance'];
    const typeCount = (type: string) => mockLegalDocuments.filter(doc => doc.type === type).length;

    // Réinitialiser la page quand les filtres changent
    const handleFiltersChange = (search: string, type: string, category: string) => {
        setSearchQuery(search);
        setSelectedType(type);
        setSelectedCategory(category);
        setCurrentPage(1);
    };

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
                                    <Scale className="w-4 h-4 text-haylalana-brand" aria-hidden="true" />
                                    <span className="text-sm font-semibold text-haylalana-brand">Bibliothèque juridique</span>
                                </div>

                                {/* Titre */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-haylalana-heading-primary">
                                    Textes juridiques de{' '}
                                    <span className="text-haylalana-brand">Madagascar</span>
                                </h1>

                                {/* Description */}
                                <p className="text-lg text-haylalana-text-secondary mb-8 leading-relaxed">
                                    Consultez et téléchargez les lois, décrets, arrêtés et ordonnances
                                    qui régissent vos droits et obligations à Madagascar
                                </p>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
                                    >
                                        <BookOpen className="w-5 h-5" aria-hidden="true" />
                                        Consulter les textes
                                    </button>
                                </div>
                            </div>

                            {/* Stats compactes */}
                            <div className="grid grid-cols-2 gap-4">

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">{mockLegalDocuments.length}</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Textes</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">4</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Types</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">PDF</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Format</div>
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

            {/* Section Recherche et Filtres */}
            <section id="search-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* Titre section */}
                    <div className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-haylalana-heading-primary mb-2">
                            Rechercher un texte
                        </h2>
                        <p className="text-haylalana-text-secondary">
                            Utilisez les filtres ci-dessous pour trouver rapidement les documents juridiques
                        </p>
                    </div>

                    {/* Filtres dans une carte */}
                    <div className="bg-white rounded-2xl border border-haylalana-border-primary shadow-sm p-6">
                        <SearchFilters
                            onFiltersChange={handleFiltersChange}
                            resultsCount={filteredDocuments.length}
                        />
                    </div>
                </div>
            </section>

            {/* Section Liste des documents */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* Compteur de résultats */}
                    <div className="mb-8 p-4 bg-white rounded-xl border border-haylalana-border-primary shadow-sm">
                        <p className="text-haylalana-text-secondary">
                            <span className="font-semibold text-haylalana-heading-primary">{filteredDocuments.length}</span> document{filteredDocuments.length > 1 ? 's' : ''} trouvé{filteredDocuments.length > 1 ? 's' : ''}
                        </p>
                    </div>

                    {/* Liste des documents */}
                    <LegalDocumentsList
                        documents={paginatedDocuments}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        totalResults={filteredDocuments.length}
                    />
                </div>
            </section>
        </main>
    );
}
