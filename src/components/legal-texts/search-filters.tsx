// src/components/textes-juridiques/search-filters.tsx
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';

interface SearchFiltersProps {
    onFiltersChange: (search: string, type: string, category: string) => void;
    resultsCount: number;
}

export function SearchFilters({ onFiltersChange, resultsCount }: SearchFiltersProps) {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');
    const [category, setCategory] = useState('all');

    const handleSearchChange = (value: string) => {
        setSearch(value);
        onFiltersChange(value, type, category);
    };

    const handleTypeChange = (value: string) => {
        setType(value);
        onFiltersChange(search, value, category);
    };

    const handleCategoryChange = (value: string) => {
        setCategory(value);
        onFiltersChange(search, type, value);
    };

    const handleReset = () => {
        setSearch('');
        setType('all');
        setCategory('all');
        onFiltersChange('', 'all', 'all');
    };

    const hasActiveFilters = search !== '' || type !== 'all' || category !== 'all';

    return (
        <div className="space-y-4">

            {/* Barre de recherche */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                <Input
                    type="text"
                    placeholder="Rechercher par titre, référence, mot-clé..."
                    value={search}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pl-10 pr-4 h-12 text-base"
                />
            </div>

            {/* Filtres */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

                    {/* Filtre par type */}
                    <div className="flex items-center gap-2 min-w-[200px]">
                        <Filter className="w-4 h-4 text-gray-500" aria-hidden="true" />
                        <Select value={type} onValueChange={handleTypeChange}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Type de texte" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Tous les types</SelectItem>
                                <SelectItem value="Loi">Loi</SelectItem>
                                <SelectItem value="Décret">Décret</SelectItem>
                                <SelectItem value="Arrêté">Arrêté</SelectItem>
                                <SelectItem value="Ordonnance">Ordonnance</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Filtre par catégorie */}
                    <Select value={category} onValueChange={handleCategoryChange}>
                        <SelectTrigger className="w-full sm:w-[240px]">
                            <SelectValue placeholder="Catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Toutes les catégories</SelectItem>
                            <SelectItem value="Droit du travail">Droit du travail</SelectItem>
                            <SelectItem value="Droit de la famille">Droit de la famille</SelectItem>
                            <SelectItem value="Droit pénal">Droit pénal</SelectItem>
                            <SelectItem value="Droit de la consommation">Droit de la consommation</SelectItem>
                            <SelectItem value="Droit immobilier">Droit immobilier</SelectItem>
                            <SelectItem value="Numérique et données">Numérique et données</SelectItem>
                            <SelectItem value="Droits de l'enfant">Droits de l'enfant</SelectItem>
                            <SelectItem value="Égalité et discrimination">Égalité et discrimination</SelectItem>
                            <SelectItem value="Libertés publiques">Libertés publiques</SelectItem>
                            <SelectItem value="Accès à la justice">Accès à la justice</SelectItem>
                            <SelectItem value="Procédure judiciaire">Procédure judiciaire</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Bouton reset et compteur */}
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">{resultsCount}</span> résultat{resultsCount > 1 ? 's' : ''}
                    </p>

                    {hasActiveFilters && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleReset}
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <X className="w-4 h-4 mr-1" aria-hidden="true" />
                            Réinitialiser
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
