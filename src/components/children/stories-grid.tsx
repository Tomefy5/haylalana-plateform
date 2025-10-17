// src/components/enfants/stories-grid.tsx
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
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-blue-400"
                >

                    {/* En-tête coloré avec emoji */}
                    <div className={`${story.color} p-8 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform`}>
                        {story.thumbnail}
                    </div>

                    <CardContent className="p-6">

                        {/* Badges */}
                        <div className="flex gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs">
                                {story.ageRange}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                                {story.category}
                            </Badge>
                        </div>

                        {/* Titre */}
                        <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
                            {story.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {story.description}
                        </p>

                        {/* Durée */}
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" aria-hidden="true" />
                            <span>{story.duration} de lecture</span>
                        </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                        <Button
                            asChild
                            className="w-full bg-blue-500 hover:bg-blue-600"
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
