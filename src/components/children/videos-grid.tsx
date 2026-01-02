import { mockVideos } from '@/lib/mock-data-children';
import { VideoCard } from './video-card';

export function VideosGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
            ))}
        </div>
    );
}
