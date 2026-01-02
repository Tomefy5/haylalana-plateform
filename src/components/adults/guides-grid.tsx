import { Guide } from '@/lib/mock-data-adults';
import { GuideCard } from './guide-card';

interface GuidesGridProps {
    guides: Guide[];
}

export function GuidesGrid({ guides }: GuidesGridProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {guides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
            ))}
        </div>
    );
}
