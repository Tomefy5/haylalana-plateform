// src/app/directory/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { ProvinceFilter } from '@/components/directory/province-filter';
import { ProfessionalsGrid } from '@/components/directory/professionals-grid';
import { mockProfessionals, provinces, ProfessionalType, Province } from '@/lib/mock-data-directory';
import { Scale, MapPin, Users, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

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
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    <div className="max-w-4xl mx-auto text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <Scale className="w-4 h-4" aria-hidden="true" />
                            <span className="text-sm font-semibold">Annuaire des professionnels</span>
                        </div>

                        {/* Titre */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Trouvez un professionnel du droit{' '}
                            <span className="text-yellow-300">près de chez vous</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                            Avocats, notaires et huissiers dans les 6 provinces de Madagascar.
                            Contactez directement les professionnels pour être accompagné.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 justify-center text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-yellow-300" aria-hidden="true" />
                                <div>
                                    <span className="font-bold text-2xl">{mockProfessionals.length}</span>
                                    <span className="text-blue-200 ml-2">Professionnels</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-green-300" aria-hidden="true" />
                                <div>
                                    <span className="font-bold text-2xl">6</span>
                                    <span className="text-blue-200 ml-2">Provinces</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-pink-300" aria-hidden="true" />
                                <div>
                                    <span className="font-bold text-2xl">100%</span>
                                    <span className="text-blue-200 ml-2">Vérifiés</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Filtres */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b sticky top-0 z-10 shadow-sm">
                <div className="container mx-auto max-w-7xl space-y-6">

                    {/* Barre de recherche */}
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                        <Input
                            type="text"
                            placeholder="Rechercher par nom, ville ou spécialité..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 h-12 text-base"
                        />
                    </div>

                    {/* Filtres par type de professionnel */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Button
                            variant={selectedType === 'all' ? 'default' : 'outline'}
                            onClick={() => setSelectedType('all')}
                            className="font-semibold"
                        >
                            Tous ({filteredProfessionals.length})
                        </Button>
                        <Button
                            variant={selectedType === 'Avocat' ? 'default' : 'outline'}
                            onClick={() => setSelectedType('Avocat')}
                            className="font-semibold"
                        >
                            👨‍⚖️ Avocats ({countByType('Avocat')})
                        </Button>
                        <Button
                            variant={selectedType === 'Notaire' ? 'default' : 'outline'}
                            onClick={() => setSelectedType('Notaire')}
                            className="font-semibold"
                        >
                            📝 Notaires ({countByType('Notaire')})
                        </Button>
                        <Button
                            variant={selectedType === 'Huissier' ? 'default' : 'outline'}
                            onClick={() => setSelectedType('Huissier')}
                            className="font-semibold"
                        >
                            ⚖️ Huissiers ({countByType('Huissier')})
                        </Button>
                    </div>

                    {/* Navigation par provinces */}
                    <ProvinceFilter
                        selectedProvince={selectedProvince}
                        onProvinceChange={setSelectedProvince}
                    />
                </div>
            </section>

            {/* Section Liste des professionnels */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* Compteur de résultats */}
                    <div className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                            {filteredProfessionals.length} professionnel{filteredProfessionals.length > 1 ? 's' : ''} trouvé{filteredProfessionals.length > 1 ? 's' : ''}
                        </h2>
                        <p className="text-gray-600">
                            {selectedProvince !== 'all' && `Province : ${selectedProvince}`}
                            {selectedProvince !== 'all' && selectedType !== 'all' && ' • '}
                            {selectedType !== 'all' && `Type : ${selectedType}`}
                        </p>
                    </div>

                    {/* Grille des professionnels */}
                    <ProfessionalsGrid professionals={filteredProfessionals} />
                </div>
            </section>
        </main>
    );
}
