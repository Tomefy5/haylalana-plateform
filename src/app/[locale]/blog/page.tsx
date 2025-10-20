// src/app/[locale]/blog/page.tsx
'use client';

import { useState } from 'react';
import { mockBlogPosts } from '@/lib/mock-data-blog-contact';
import { BlogGrid } from '@/components/blog/blog-grid';
import { NewsletterForm } from '@/components/newsletter/newsletter-form';
import { Button } from '@/components/ui/button';
import { BookOpen, TrendingUp, FileText, Folder, Star } from 'lucide-react';

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
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/30 to-gray-50">

            {/* Hero Section avec grande carte blanche */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* Grande carte blanche centrale */}
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 sm:p-12">

                        {/* ✅ SOLUTION : Wrapper sans max-w */}
                        <div className="w-full">
                            <div className="max-w-4xl mx-auto">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-red-50 border-2 border-red-200">
                                    <BookOpen className="w-4 h-4 text-red-700" aria-hidden="true" />
                                    <span className="text-sm font-semibold text-red-700">Blog &amp; Actualités</span>
                                </div>

                                {/* Titre */}
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                                    Restez informé sur{' '}
                                    <span className="text-red-700">vos droits</span>
                                </h1>

                                {/* Description */}
                                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                                    Découvrez nos articles, guides et actualités pour mieux comprendre
                                    le droit malgache et défendre vos droits au quotidien
                                </p>

                                {/* Stats améliorées avec icônes et cartes */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">

                                    {/* Stat 1 : Articles publiés */}
                                    <div className="bg-red-50 rounded-xl p-4 border border-red-200 hover:bg-red-100 transition-all group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 rounded-lg bg-red-100 group-hover:bg-red-200 transition-all">
                                                <FileText className="w-5 h-5 text-red-700" aria-hidden="true" />
                                            </div>
                                            <div className="text-3xl font-bold text-red-700">{mockBlogPosts.length}</div>
                                        </div>
                                        <div className="text-sm text-gray-600 font-medium">Articles publiés</div>
                                    </div>

                                    {/* Stat 2 : Catégories */}
                                    <div className="bg-red-50 rounded-xl p-4 border border-red-200 hover:bg-red-100 transition-all group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 rounded-lg bg-red-100 group-hover:bg-red-200 transition-all">
                                                <Folder className="w-5 h-5 text-red-700" aria-hidden="true" />
                                            </div>
                                            <div className="text-3xl font-bold text-red-700">{categories.length - 1}</div>
                                        </div>
                                        <div className="text-sm text-gray-600 font-medium">Catégories</div>
                                    </div>

                                    {/* Stat 3 : À la une */}
                                    <div className="bg-pink-50 rounded-xl p-4 border border-pink-300 hover:bg-pink-100 transition-all group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 rounded-lg bg-pink-100 group-hover:bg-pink-200 transition-all">
                                                <Star className="w-5 h-5 text-pink-600 fill-pink-600" aria-hidden="true" />
                                            </div>
                                            <div className="text-3xl font-bold text-pink-600">{featuredPosts.length}</div>
                                        </div>
                                        <div className="text-sm text-gray-600 font-medium">À la une</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Articles à la une */}
            {featuredPosts.length > 0 ? (
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-7xl">

                        {/* Titre de section amélioré */}
                        <div className="flex items-center gap-3 mb-8 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-pink-700">
                                <TrendingUp className="w-6 h-6 text-white" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                    Articles à la une
                                </h2>
                                <p className="text-sm text-gray-500">
                                    Les contenus les plus populaires et récents
                                </p>
                            </div>
                        </div>

                        <BlogGrid posts={featuredPosts} featured />
                    </div>
                </section>
            ) : null}

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
                                    className={
                                        selectedCategory === category
                                            ? 'bg-red-700 hover:bg-red-800 text-white shadow-md font-semibold transition-all'
                                            : 'border-2 border-gray-300 bg-white text-gray-700 hover:border-red-700 hover:text-red-700 hover:bg-red-50 font-semibold transition-all'
                                    }
                                >
                                    {category === 'all' ? 'Tous les articles' : category}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Compteur de résultats */}
                    <div className="mb-8 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-900">{filteredPosts.length}</span> article{filteredPosts.length > 1 ? 's' : ''} disponible{filteredPosts.length > 1 ? 's' : ''}
                        </p>
                    </div>

                    {/* Grille d'articles */}
                    <BlogGrid posts={filteredPosts} />
                </div>
            </section>

            {/* Section Newsletter */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-700 to-red-900">
                <div className="container mx-auto max-w-4xl">
                    <NewsletterForm />
                </div>
            </section>
        </main>
    );
}
