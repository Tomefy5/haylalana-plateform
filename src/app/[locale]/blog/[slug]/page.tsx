// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { mockBlogPosts } from '@/lib/mock-data-blog-contact';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

interface ArticlePageProps {
    params: {
        slug: string;
    };
}

export default function ArticlePage({ params }: ArticlePageProps) {
    const post = mockBlogPosts.find(p => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">

            {/* Bouton retour */}
            <div className="bg-gray-50 border-b">
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4">
                    <Button variant="ghost" asChild>
                        <Link href="/blog">
                            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                            Retour aux articles
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Article */}
            <article className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-4xl">

                    {/* En-tête */}
                    <header className="mb-12">

                        {/* Catégorie */}
                        <Badge className="mb-4">{post.category}</Badge>

                        {/* Titre */}
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Métadonnées */}
                        <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5" aria-hidden="true" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" aria-hidden="true" />
                                <span>{post.publishedDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" aria-hidden="true" />
                                <span>{post.readTime} de lecture</span>
                            </div>
                        </div>

                        {/* Image de couverture */}
                        <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-9xl mb-8">
                            {post.coverImage}
                        </div>

                        {/* Bouton partage */}
                        <div className="flex justify-end">
                            <Button variant="outline">
                                <Share2 className="w-4 h-4 mr-2" aria-hidden="true" />
                                Partager
                            </Button>
                        </div>
                    </header>

                    {/* Contenu */}
                    <div className="prose prose-lg prose-blue max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
                    </div>

                    {/* Tags */}
                    <footer className="mt-12 pt-8 border-t">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </footer>
                </div>
            </article>
        </main>
    );
}

// Générer les métadonnées dynamiques
export function generateMetadata({ params }: ArticlePageProps) {
    const post = mockBlogPosts.find(p => p.slug === params.slug);

    if (!post) {
        return {
            title: 'Article non trouvé',
        };
    }

    return {
        title: `${post.title} - Haylalàna Blog`,
        description: post.excerpt,
    };
}

// Générer les pages statiques
export function generateStaticParams() {
    return mockBlogPosts.map((post) => ({
        slug: post.slug,
    }));
}
