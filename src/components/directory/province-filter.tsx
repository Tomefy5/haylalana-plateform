// src/components/directory/province-filter.tsx
import { provinces, Province } from '@/lib/mock-data-directory';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface ProvinceFilterProps {
    selectedProvince: Province | 'all';
    onProvinceChange: (province: Province | 'all') => void;
}

export function ProvinceFilter({ selectedProvince, onProvinceChange }: ProvinceFilterProps) {
    return (
        <div className="space-y-4">

            <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span className="font-semibold">Filtrer par province :</span>
            </div>

            <div className="flex flex-wrap gap-3">

                {/* Bouton Toutes les provinces */}
                <Button
                    variant={selectedProvince === 'all' ? 'default' : 'outline'}
                    onClick={() => onProvinceChange('all')}
                    className="font-semibold"
                    size="lg"
                >
                    🇲🇬 Toutes les provinces
                </Button>

                {/* Boutons provinces */}
                {provinces.map((province) => (
                    <Button
                        key={province.id}
                        variant={selectedProvince === province.id ? 'default' : 'outline'}
                        onClick={() => onProvinceChange(province.id)}
                        className="font-semibold"
                        size="lg"
                    >
                        <span className="mr-2">{province.icon}</span>
                        {province.name}
                    </Button>
                ))}
            </div>
        </div>
    );
}
