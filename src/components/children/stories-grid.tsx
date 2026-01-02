import { mockStories } from '@/lib/mock-data-children';
import { StoryCard } from './story-card';

export function StoriesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockStories.map((story) => (
                <StoryCard key={story.id} story={story} />
            ))}
        </div>
    );
}
