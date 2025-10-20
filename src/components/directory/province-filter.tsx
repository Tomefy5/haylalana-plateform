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

            <div className="flex items-center gap-2 text-haylalana-heading-primary">
                <MapPin className="w-5 h-5 text-haylalana-brand" aria-hidden="true" />
                <span className="font-semibold">Filtrer par province :</span>
            </div>

            <div className="flex flex-wrap gap-3">

                {/* Bouton Toutes les provinces */}
                <Button
                    variant={selectedProvince === 'all' ? 'default' : 'outline'}
                    onClick={() => onProvinceChange('all')}
                    className={`font-semibold transition-all ${selectedProvince === 'all'
                        ? 'bg-haylalana-brand hover:bg-haylalana-brand-dark text-white shadow-md'
                        : 'border-2 border-haylalana-border-primary bg-white text-haylalana-text-primary hover:border-haylalana-brand hover:text-haylalana-brand hover:bg-haylalana-brand/5'
                        }`}
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
                        className={`font-semibold transition-all ${selectedProvince === province.id
                            ? 'bg-haylalana-brand hover:bg-haylalana-brand-dark text-white shadow-md'
                            : 'border-2 border-haylalana-border-primary bg-white text-haylalana-text-primary hover:border-haylalana-brand hover:text-haylalana-brand hover:bg-haylalana-brand/5'
                            }`}
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
