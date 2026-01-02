import Link from 'next/link';
import { memo } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, TrendingUp, User } from 'lucide-react';
import { BlogPost } from '@/lib/mock-data-blog-contact';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard = memo(function BlogCard({ post }: BlogCardProps) {
    // Generate initials for author avatar fallback
    const authorInitials = post.author
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <Card
            className="group flex flex-col h-full overflow-hidden border border-haylalana-border-primary bg-white shadow-sm hover:shadow-xl hover:border-haylalana-brand/30 transition-all duration-300 rounded-xl"
        >
            <Link href={`/blog/${post.slug}`} className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-haylalana-brand/50 rounded-xl">
                {/* Image de couverture avec couleur Haylalàna et pattern */}
                <div className="relative w-full h-52 overflow-hidden bg-gradient-to-br from-haylalana-brand-light to-haylalana-brand">
                    {/* Motif décoratif subtil */}
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                            backgroundSize: '20px 20px'
                        }}
                    />

                    {/* Emoji/Icon centré */}
                    <div className="absolute inset-0 flex items-center justify-center text-7xl transform group-hover:scale-110 transition-transform duration-500">
                        {post.coverImage}
                    </div>

                    {/* Badge catégorie en superposition */}
                    <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-haylalana-brand font-semibold shadow-sm border-0 hover:bg-white">
                            {post.category}
                        </Badge>
                    </div>

                    {/* Badge "À la une" */}
                    {post.featured && (
                        <div className="absolute top-4 right-4">
                            <Badge className="bg-haylalana-accent text-white border-0 shadow-sm flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />
                                À la une
                            </Badge>
                        </div>
                    )}
                </div>

                <div className="flex flex-col flex-1 p-6">
                    {/* Métadonnées principales */}
                    <div className="flex items-center gap-3 text-xs text-haylalana-text-tertiary mb-3 font-medium uppercase tracking-wide">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{post.publishedDate}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-haylalana-border-secondary" />
                        <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl md:text-2xl font-bold text-haylalana-heading-primary mb-3 leading-tight group-hover:text-haylalana-brand transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    {/* Extrait */}
                    <p className="text-haylalana-text-secondary text-base leading-relaxed line-clamp-2 mb-6 flex-1">
                        {post.excerpt}
                    </p>

                    {/* Footer carte : Auteur et action */}
                    <div className="flex items-center justify-between pt-4 border-t border-haylalana-border-primary/50 mt-auto">

                        {/* Info Auteur */}
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-haylalana-bg-secondary border border-haylalana-border-primary flex items-center justify-center text-xs font-bold text-haylalana-heading-secondary group-hover:bg-haylalana-brand/10 group-hover:text-haylalana-brand transition-colors">
                                {authorInitials}
                            </div>
                            <div className="text-sm font-medium text-haylalana-text-secondary">
                                {post.author}
                            </div>
                        </div>

                        {/* Flèche d'action */}
                        <div className="text-haylalana-brand opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </Link>
        </Card>
    );
});

export { BlogCard };
