// src/app/directory/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { ProvinceFilter } from '@/components/directory/province-filter';
import { ProfessionalsGrid } from '@/components/directory/professionals-grid';
import { mockProfessionals, provinces, ProfessionalType, Province } from '@/lib/mock-data-directory';
import { Scale, MapPin, Users, Phone, Search, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function DirectoryPage() {
    const [selectedProvince, setSelectedProvince] = useState<Province | 'all'>('all');
    const [selectedType, setSelectedType] = useState<ProfessionalType | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Filtrer les professionnels
    const filteredProfessionals = useMemo(() => {
        return mockProfessionals.filter((prof) => {
            const matchesProvince = selectedProvince === 'all' || prof.province === selectedProvince;
            const matchesType = selectedType === 'all' || prof.type === selectedType;
            const matchesSearch =
                prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                prof.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                prof.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesProvince && matchesType && matchesSearch;
        });
    }, [selectedProvince, selectedType, searchQuery]);

    // Compter par type
    const countByType = (type: ProfessionalType) => {
        return filteredProfessionals.filter(p => p.type === type).length;
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
                                    <span className="text-sm font-semibold text-haylalana-brand">Annuaire des professionnels</span>
                                </div>

                                {/* Titre */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-haylalana-heading-primary">
                                    Trouvez un professionnel{' '}
                                    <span className="text-haylalana-brand">près de chez vous</span>
                                </h1>

                                {/* Description */}
                                <p className="text-lg text-haylalana-text-secondary mb-8 leading-relaxed">
                                    Avocats, notaires et huissiers dans les 6 provinces de Madagascar.
                                    Contactez directement les professionnels pour être accompagné.
                                </p>

                                {/* Barre de recherche */}
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-haylalana-text-tertiary w-5 h-5" aria-hidden="true" />
                                    <Input
                                        type="text"
                                        placeholder="Rechercher par nom, ville ou spécialité..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10 pr-4 h-12 text-base border-haylalana-border-primary focus:border-haylalana-brand focus:ring-haylalana-brand/20"
                                    />
                                </div>
                            </div>

                            {/* Stats compactes */}
                            <div className="grid grid-cols-2 gap-4">

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">{mockProfessionals.length}</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Professionnels</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">6</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Provinces</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">3</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Types</div>
                                </div>

                                <div className="text-center p-4 bg-haylalana-brand/5 rounded-xl border border-haylalana-brand/20 hover:bg-haylalana-brand/10 transition-all">
                                    <div className="text-3xl font-bold text-haylalana-brand mb-1">100%</div>
                                    <div className="text-haylalana-text-tertiary text-xs">Vérifiés</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Filtres et Liste */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* Filtres par type de professionnel */}
                    <div className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-haylalana-heading-primary mb-6">
                            Filtrer par type
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            <Button
                                variant={selectedType === 'all' ? 'default' : 'outline'}
                                onClick={() => setSelectedType('all')}
                                className={`
                                    font-semibold transition-all
                                    ${selectedType === 'all'
                                        ? 'bg-haylalana-brand hover:bg-haylalana-brand-dark text-white shadow-md'
                                        : 'border-2 border-haylalana-border-primary bg-white text-haylalana-text-primary hover:border-haylalana-brand hover:text-haylalana-brand hover:bg-haylalana-brand/5'
                                    }
                                `}
                            >
                                Tous
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${selectedType === 'all'
                                    ? 'bg-white/20'
                                    : 'bg-haylalana-brand/10 text-haylalana-brand'
                                    }`}>
                                    {filteredProfessionals.length}
                                </span>
                            </Button>

                            <Button
                                variant={selectedType === 'Avocat' ? 'default' : 'outline'}
                                onClick={() => setSelectedType('Avocat')}
                                className={`
                                    font-semibold transition-all
                                    ${selectedType === 'Avocat'
                                        ? 'bg-haylalana-brand hover:bg-haylalana-brand-dark text-white shadow-md'
                                        : 'border-2 border-haylalana-border-primary bg-white text-haylalana-text-primary hover:border-haylalana-brand hover:text-haylalana-brand hover:bg-haylalana-brand/5'
                                    }
                                `}
                            >
                                <span className="mr-2">👨‍⚖️</span>
                                Avocats
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${selectedType === 'Avocat'
                                    ? 'bg-white/20'
                                    : 'bg-haylalana-brand/10 text-haylalana-brand'
                                    }`}>
                                    {countByType('Avocat')}
                                </span>
                            </Button>

                            <Button
                                variant={selectedType === 'Notaire' ? 'default' : 'outline'}
                                onClick={() => setSelectedType('Notaire')}
                                className={`
                                    font-semibold transition-all
                                    ${selectedType === 'Notaire'
                                        ? 'bg-haylalana-brand hover:bg-haylalana-brand-dark text-white shadow-md'
                                        : 'border-2 border-haylalana-border-primary bg-white text-haylalana-text-primary hover:border-haylalana-brand hover:text-haylalana-brand hover:bg-haylalana-brand/5'
                                    }
                                `}
                            >
                                <span className="mr-2">📝</span>
                                Notaires
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${selectedType === 'Notaire'
                                    ? 'bg-white/20'
                                    : 'bg-haylalana-brand/10 text-haylalana-brand'
                                    }`}>
                                    {countByType('Notaire')}
                                </span>
                            </Button>

                            <Button
                                variant={selectedType === 'Huissier' ? 'default' : 'outline'}
                                onClick={() => setSelectedType('Huissier')}
                                className={`
                                    font-semibold transition-all
                                    ${selectedType === 'Huissier'
                                        ? 'bg-haylalana-brand hover:bg-haylalana-brand-dark text-white shadow-md'
                                        : 'border-2 border-haylalana-border-primary bg-white text-haylalana-text-primary hover:border-haylalana-brand hover:text-haylalana-brand hover:bg-haylalana-brand/5'
                                    }
                                `}
                            >
                                <span className="mr-2">⚖️</span>
                                Huissiers
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${selectedType === 'Huissier'
                                    ? 'bg-white/20'
                                    : 'bg-haylalana-brand/10 text-haylalana-brand'
                                    }`}>
                                    {countByType('Huissier')}
                                </span>
                            </Button>
                        </div>
                    </div>

                    {/* Filtres par provinces */}
                    <div className="mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-haylalana-heading-primary mb-6">
                            Filtrer par province
                        </h2>
                        <ProvinceFilter
                            selectedProvince={selectedProvince}
                            onProvinceChange={setSelectedProvince}
                        />
                    </div>

                    {/* Compteur de résultats */}
                    <div className="mb-8 p-4 bg-white rounded-xl border border-haylalana-border-primary shadow-sm">
                        <p className="text-haylalana-text-secondary">
                            <span className="font-semibold text-haylalana-heading-primary">{filteredProfessionals.length}</span> professionnel{filteredProfessionals.length > 1 ? 's' : ''} trouvé{filteredProfessionals.length > 1 ? 's' : ''}
                        </p>
                    </div>

                    {/* Grille des professionnels */}
                    <ProfessionalsGrid professionals={filteredProfessionals} />
                </div>
            </section>
        </main>
    );
}
