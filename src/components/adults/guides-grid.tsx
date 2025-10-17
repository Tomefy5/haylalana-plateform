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
                    'Débutant': 'bg-green-100 text-green-700 border-green-300',
                    'Intermédiaire': 'bg-blue-100 text-blue-700 border-blue-300',
                    'Avancé': 'bg-purple-100 text-purple-700 border-purple-300',
                };

                return (
                    <Card
                        key={guide.id}
                        className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-blue-400 flex flex-col"
                    >
                        <CardHeader className="pb-4">

                            {/* En-tête avec icône et badges */}
                            <div className="flex items-start justify-between mb-4">

                                {/* Icône */}
                                <div className={`${guide.color} text-white p-4 rounded-xl text-3xl group-hover:scale-110 transition-transform`}>
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
                                        <Badge variant="secondary" className="text-xs font-semibold">
                                            <Download className="w-3 h-3 mr-1" aria-hidden="true" />
                                            PDF
                                        </Badge>
                                    )}
                                </div>
                            </div>

                            {/* Titre */}
                            <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                                {guide.title}
                            </h3>

                            {/* Métadonnées */}
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
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
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {guide.description}
                            </p>

                            {/* Topics couverts */}
                            <div className="space-y-2">
                                <div className="text-sm font-semibold text-gray-700">
                                    Points couverts :
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {guide.topics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
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
                                className="flex-1 bg-blue-600 hover:bg-blue-700 font-semibold"
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
                                    className="border-2 hover:bg-gray-100"
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
