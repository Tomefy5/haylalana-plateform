import { Professional } from '@/lib/mock-data-directory';
import { MapPin } from 'lucide-react';
import { ProfessionalCard } from './professional-card';

interface ProfessionalsGridProps {
    professionals: Professional[];
}

export function ProfessionalsGrid({ professionals }: ProfessionalsGridProps) {

    if (professionals.length === 0) {
        return (
            <div className="text-center py-16">
                <MapPin className="w-16 h-16 text-haylalana-border-secondary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-haylalana-heading-primary mb-2">Aucun professionnel trouvé</h3>
                <p className="text-haylalana-text-tertiary">Essayez de modifier vos critères de recherche</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((prof) => (
                <ProfessionalCard key={prof.id} prof={prof} />
            ))}
        </div>
    );
}
