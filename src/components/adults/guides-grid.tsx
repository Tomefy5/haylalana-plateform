// src/components/adultes/guides-grid.tsx
import Link from 'next/link';
import { Guide } from '@/lib/mock-data-adults';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, Clock, Calendar } from 'lucide-react';

interface GuidesGridProps {
    guides: Guide[];
}

export function GuidesGrid({ guides }: GuidesGridProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {guides.map((guide) => {
                // Couleur du badge selon difficulté
                const difficultyStyles = {
                    'Débutant': 'bg-haylalana-success-bg text-haylalana-success border-haylalana-success/30',
                    'Intermédiaire': 'bg-haylalana-info-bg text-haylalana-info border-haylalana-info/30',
                    'Avancé': 'bg-haylalana-accent/10 text-haylalana-accent border-haylalana-accent/30',
                };

                return (
                    <Card
                        key={guide.id}
                        className="hover:shadow-xl transition-all duration-300 group border-2 border-haylalana-border-primary hover:border-haylalana-brand flex flex-col"
                    >
                        <CardHeader className="pb-4">

                            {/* En-tête avec icône et badges */}
                            <div className="flex items-start justify-between mb-4">

                                {/* Icône avec couleur claire (fond bordeaux léger) */}
                                <div className="bg-white border-2 border-haylalana-brand/20 text-haylalana-brand p-4 rounded-xl text-3xl group-hover:scale-110 group-hover:border-haylalana-brand/40 transition-all">
                                    {guide.icon}
                                </div>


                                {/* Badges */}
                                <div className="flex flex-col gap-2 items-end">
                                    <Badge
                                        className={`text-xs font-semibold border ${difficultyStyles[guide.difficulty]}`}
                                        variant="outline"
                                    >
                                        {guide.difficulty}
                                    </Badge>

                                    {guide.downloadable && (
                                        <Badge variant="secondary" className="text-xs font-semibold bg-haylalana-brand/10 text-haylalana-brand border-haylalana-brand/20">
                                            <Download className="w-3 h-3 mr-1" aria-hidden="true" />
                                            PDF
                                        </Badge>
                                    )}
                                </div>
                            </div>

                            {/* Titre */}
                            <h3 className="text-xl font-bold text-haylalana-heading-primary leading-tight mb-2 group-hover:text-haylalana-brand transition-colors">
                                {guide.title}
                            </h3>

                            {/* Métadonnées */}
                            <div className="flex flex-wrap gap-4 text-sm text-haylalana-text-tertiary">
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" aria-hidden="true" />
                                    <span>{guide.readTime}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" aria-hidden="true" />
                                    <span>{guide.lastUpdated}</span>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="flex-1">

                            {/* Description */}
                            <p className="text-haylalana-text-secondary leading-relaxed mb-4">
                                {guide.description}
                            </p>

                            {/* Topics couverts */}
                            <div className="space-y-2">
                                <div className="text-sm font-semibold text-haylalana-heading-secondary">
                                    Points couverts :
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {guide.topics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="px-3 py-1 bg-haylalana-bg-secondary text-haylalana-text-primary text-xs rounded-full border border-haylalana-border-primary"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className="pt-4 flex gap-3">

                            {/* Bouton lire */}
                            <Button
                                asChild
                                className="flex-1 bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold"
                            >
                                <Link href={`/adultes/guides/${guide.id}`}>
                                    <BookOpen className="w-4 h-4 mr-2" aria-hidden="true" />
                                    Lire le guide
                                </Link>
                            </Button>

                            {/* Bouton télécharger */}
                            {guide.downloadable && (
                                <Button
                                    variant="outline"
                                    className="border-2 border-haylalana-brand text-haylalana-brand hover:bg-haylalana-brand hover:text-white"
                                    onClick={() => {
                                        // Logique de téléchargement ici
                                        console.log(`Téléchargement du guide ${guide.id}`);
                                    }}
                                >
                                    <Download className="w-4 h-4" aria-hidden="true" />
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    );
}
