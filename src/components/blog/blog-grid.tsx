// src/components/blog/blog-grid.tsx
import Link from 'next/link';
import { BlogPost } from '@/lib/mock-data-blog-contact';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

interface BlogGridProps {
    posts: BlogPost[];
    featured?: boolean;
}

export function BlogGrid({ posts, featured = false }: BlogGridProps) {

    if (posts.length === 0) {
        return (
            <div className="text-center py-16">
                <p className="text-gray-500">Aucun article trouvé dans cette catégorie</p>
            </div>
        );
    }

    return (
        <div className={`grid gap-6 ${featured ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {posts.map((post) => (
                <Card
                    key={post.id}
                    className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-blue-400 flex flex-col"
                >
                    <CardHeader className="pb-4">

                        {/* Image de couverture */}
                        <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform overflow-hidden">
                            {post.coverImage}
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs">
                                {post.category}
                            </Badge>
                            {post.featured && (
                                <Badge className="text-xs bg-orange-500 hover:bg-orange-600">
                                    <TrendingUp className="w-3 h-3 mr-1" aria-hidden="true" />
                                    À la une
                                </Badge>
                            )}
                        </div>

                        {/* Titre */}
                        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                    </CardHeader>

                    <CardContent className="flex-1">

                        {/* Excerpt */}
                        <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                            {post.excerpt}
                        </p>

                        {/* Métadonnées */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" aria-hidden="true" />
                                <span>{post.publishedDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" aria-hidden="true" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter className="pt-4">
                        <Button
                            asChild
                            variant="ghost"
                            className="w-full justify-between group-hover:bg-blue-50 group-hover:text-blue-600"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                Lire l'article
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
