// src/app/textes-juridiques/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { SearchFilters } from '@/components/legal-texts/search-filters';
import { LegalDocumentsList } from '@/components/legal-texts/legal-documents-list';
import { mockLegalDocuments } from '@/lib/mock-data-legal-texts';
import { Scale, FileText, Download } from 'lucide-react';

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

    // Réinitialiser la page quand les filtres changent
    const handleFiltersChange = (search: string, type: string, category: string) => {
        setSearchQuery(search);
        setSelectedType(type);
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    <div className="max-w-4xl mx-auto text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <Scale className="w-4 h-4" aria-hidden="true" />
                            <span className="text-sm font-semibold">Bibliothèque juridique</span>
                        </div>

                        {/* Titre */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Textes juridiques de{' '}
                            <span className="text-blue-400">Madagascar</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                            Consultez et téléchargez les lois, décrets, arrêtés et ordonnances
                            qui régissent vos droits et obligations à Madagascar
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 justify-center text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-400" aria-hidden="true" />
                                <div>
                                    <span className="font-bold text-2xl">{mockLegalDocuments.length}</span>
                                    <span className="text-gray-300 ml-2">Textes disponibles</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Download className="w-5 h-5 text-green-400" aria-hidden="true" />
                                <div>
                                    <span className="font-bold text-2xl">PDF</span>
                                    <span className="text-gray-300 ml-2">Téléchargeables</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Recherche et Filtres */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b sticky top-0 z-10 shadow-sm">
                <div className="container mx-auto max-w-7xl">
                    <SearchFilters
                        onFiltersChange={handleFiltersChange}
                        resultsCount={filteredDocuments.length}
                    />
                </div>
            </section>

            {/* Section Liste des documents */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

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
