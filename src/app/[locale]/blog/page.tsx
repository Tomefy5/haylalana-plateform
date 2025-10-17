// src/app/blog/page.tsx
'use client';

import { useState } from 'react';
import { mockBlogPosts } from '@/lib/mock-data-blog-contact';
import { BlogGrid } from '@/components/blog/blog-grid';
import { NewsletterForm } from '@/components/newsletter/newsletter-form';
import { Button } from '@/components/ui/button';
import { BookOpen, TrendingUp } from 'lucide-react';

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // Catégories uniques
    const categories = ['all', ...Array.from(new Set(mockBlogPosts.map(post => post.category)))];

    // Articles filtrés
    const filteredPosts = selectedCategory === 'all'
        ? mockBlogPosts
        : mockBlogPosts.filter(post => post.category === selectedCategory);

    // Articles à la une
    const featuredPosts = mockBlogPosts.filter(post => post.featured);

    return (
        <main className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                            <BookOpen className="w-4 h-4" aria-hidden="true" />
                            <span className="text-sm font-semibold">Blog & Actualités</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Restez informé sur{' '}
                            <span className="text-blue-400">vos droits</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                            Découvrez nos articles, guides et actualités pour mieux comprendre
                            le droit malgache et défendre vos droits au quotidien
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Articles à la une */}
            {featuredPosts.length > 0 && (
                <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-50">
                    <div className="container mx-auto max-w-7xl">

                        <div className="flex items-center gap-2 mb-6">
                            <TrendingUp className="w-6 h-6 text-blue-600" aria-hidden="true" />
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                Articles à la une
                            </h2>
                        </div>

                        <BlogGrid posts={featuredPosts} featured />
                    </div>
                </section>
            )}

            {/* Section Filtres et Articles */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* Filtres par catégorie */}
                    <div className="mb-12">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Filtrer par catégorie
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? 'default' : 'outline'}
                                    onClick={() => setSelectedCategory(category)}
                                    className="font-semibold"
                                >
                                    {category === 'all' ? 'Tous les articles' : category}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Grille d'articles */}
                    <BlogGrid posts={filteredPosts} />
                </div>
            </section>

            {/* Section Newsletter */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="container mx-auto max-w-3xl">
                    <NewsletterForm />
                </div>
            </section>
        </main>
    );
}
