import Link from 'next/link';
import { mockStories } from '@/lib/mock-data-children';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen } from 'lucide-react';

export function StoriesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockStories.map((story) => (
                <Card
                    key={story.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-haylalana-border-primary hover:border-haylalana-brand"
                >
                    {/* En-tête UNIFORME avec gradient bordeaux clair */}
                    <div className="bg-gradient-to-br from-gray-100 to-red-50 p-8 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">

                        {story.thumbnail}
                    </div>

                    <CardContent className="p-6">
                        {/* Badges */}
                        <div className="flex gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs bg-haylalana-bg-secondary text-haylalana-text-primary border-haylalana-border-primary">
                                {story.ageRange}
                            </Badge>
                            <Badge variant="outline" className="text-xs border-haylalana-border-secondary text-haylalana-text-secondary">
                                {story.category}
                            </Badge>
                        </div>

                        {/* Titre */}
                        <h3 className="text-xl font-bold mb-2 text-haylalana-heading-primary line-clamp-2 group-hover:text-haylalana-brand transition-colors">
                            {story.title}
                        </h3>

                        {/* Description */}
                        <p className="text-haylalana-text-secondary text-sm mb-4 line-clamp-3">
                            {story.description}
                        </p>

                        {/* Durée */}
                        <div className="flex items-center gap-2 text-sm text-haylalana-text-tertiary">
                            <Clock className="w-4 h-4" aria-hidden="true" />
                            <span>{story.duration} de lecture</span>
                        </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                        <Button
                            asChild
                            className="w-full bg-haylalana-brand hover:bg-haylalana-brand-dark text-white"
                        >
                            <Link href={`/enfants/histoires/${story.id}`}>
                                <BookOpen className="w-4 h-4 mr-2" aria-hidden="true" />
                                Lire l'histoire
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
