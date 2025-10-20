import Link from 'next/link';
import { mockVideos } from '@/lib/mock-data-children';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Clock, Eye } from 'lucide-react';

export function VideosGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockVideos.map((video) => (
                <Card
                    key={video.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-haylalana-border-primary hover:border-haylalana-brand"
                >
                    {/* Miniature de la vidéo avec gradient Haylalàna clair */}
                    <div className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 h-48 flex items-center justify-center">

                        {/* Emoji comme thumbnail */}
                        <div className="text-7xl group-hover:scale-110 transition-transform">
                            {video.thumbnail}
                        </div>

                        {/* Badge durée */}
                        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                            <Clock className="w-3 h-3" aria-hidden="true" />
                            {video.duration}
                        </div>

                        {/* Icône play au survol */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                                <Play className="w-8 h-8 text-haylalana-brand ml-1" fill="currentColor" aria-hidden="true" />
                            </div>
                        </div>
                    </div>

                    <CardContent className="p-6">
                        {/* Badge catégorie */}
                        <Badge variant="secondary" className="mb-3 text-xs bg-haylalana-bg-secondary text-haylalana-text-primary border-haylalana-border-primary">
                            {video.category}
                        </Badge>

                        {/* Titre */}
                        <h3 className="text-xl font-bold mb-2 text-haylalana-heading-primary line-clamp-2 group-hover:text-haylalana-brand transition-colors">
                            {video.title}
                        </h3>

                        {/* Description */}
                        <p className="text-haylalana-text-secondary text-sm mb-4 line-clamp-2">
                            {video.description}
                        </p>

                        {/* Vues */}
                        <div className="flex items-center gap-2 text-sm text-haylalana-text-tertiary">
                            <Eye className="w-4 h-4" aria-hidden="true" />
                            <span>{video.views} vues</span>
                        </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                        <Button
                            asChild
                            className="w-full bg-haylalana-brand hover:bg-haylalana-brand-dark text-white"
                        >
                            <Link href={`/enfants/videos/${video.id}`}>
                                <Play className="w-4 h-4 mr-2" aria-hidden="true" />
                                Regarder la vidéo
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
