import { mockCapsules } from '@/lib/mock-data-youth';
import { CapsuleCard } from './capsule-card';

export function CapsulesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockCapsules.map((capsule) => (
                <CapsuleCard key={capsule.id} capsule={capsule} />
            ))}
        </div>
    );
}
