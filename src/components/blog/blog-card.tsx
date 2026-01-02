import Link from 'next/link';
import { memo } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { BlogPost } from '@/lib/mock-data-blog-contact';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard = memo(function BlogCard({ post }: BlogCardProps) {
    return (
        <Card
            className="hover:shadow-xl transition-all duration-300 group border-2 border-haylalana-border-primary hover:border-haylalana-brand flex flex-col"
        >
            <CardHeader className="pb-4">

                {/* Image de couverture avec couleur Haylalàna */}
                <div className="w-full h-48 bg-gradient-to-br from-haylalana-brand-light to-haylalana-brand rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform overflow-hidden">
                    {post.coverImage}
                </div>


                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs bg-haylalana-bg-secondary text-haylalana-text-primary border-haylalana-border-primary">
                        {post.category}
                    </Badge>
                    {post.featured && (
                        <Badge className="text-xs bg-haylalana-accent hover:bg-haylalana-accent-dark text-white border-0">
                            <TrendingUp className="w-3 h-3 mr-1" aria-hidden="true" />
                            À la une
                        </Badge>
                    )}
                </div>

                {/* Titre */}
                <h3 className="text-xl font-bold text-haylalana-heading-primary leading-tight group-hover:text-haylalana-brand transition-colors line-clamp-2">
                    {post.title}
                </h3>
            </CardHeader>

            <CardContent className="flex-1">

                {/* Excerpt */}
                <p className="text-haylalana-text-secondary leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                </p>

                {/* Métadonnées */}
                <div className="flex flex-wrap gap-4 text-sm text-haylalana-text-tertiary">
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
                    className="w-full justify-between text-haylalana-brand hover:bg-haylalana-brand/5 hover:text-haylalana-brand-dark group/btn"
                >
                    <Link href={`/blog/${post.slug}`}>
                        Lire l'article
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
});

export { BlogCard };
