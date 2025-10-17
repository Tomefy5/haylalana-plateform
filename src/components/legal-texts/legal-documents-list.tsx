// src/components/textes-juridiques/legal-documents-list.tsx
import Link from 'next/link';
import { LegalDocument } from '@/lib/mock-data-legal-texts';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { FileText, Download, Calendar, FileStack, Eye } from 'lucide-react';

interface LegalDocumentsListProps {
    documents: LegalDocument[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalResults: number;
}

export function LegalDocumentsList({
    documents,
    currentPage,
    totalPages,
    onPageChange,
    totalResults
}: LegalDocumentsListProps) {

    // Couleur badge selon type
    const typeColors = {
        'Loi': 'bg-blue-100 text-blue-700 border-blue-300',
        'Décret': 'bg-green-100 text-green-700 border-green-300',
        'Arrêté': 'bg-orange-100 text-orange-700 border-orange-300',
        'Ordonnance': 'bg-purple-100 text-purple-700 border-purple-300',
    };

    if (documents.length === 0) {
        return (
            <div className="text-center py-16">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun document trouvé</h3>
                <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">

            {/* Liste des documents */}
            <div className="grid gap-6">
                {documents.map((doc) => (
                    <Card
                        key={doc.id}
                        className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-blue-300"
                    >
                        <CardHeader>

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                                {/* Gauche : Icône et infos principales */}
                                <div className="flex gap-4">

                                    {/* Icône */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 text-white rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                            {doc.illustration}
                                        </div>
                                    </div>

                                    {/* Titre et référence */}
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <Badge
                                                className={`text-xs font-semibold border ${typeColors[doc.type]}`}
                                                variant="outline"
                                            >
                                                {doc.type}
                                            </Badge>
                                            <Badge variant="secondary" className="text-xs">
                                                {doc.category}
                                            </Badge>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                            {doc.title}
                                        </h3>

                                        <p className="text-sm text-gray-500 font-mono">
                                            {doc.reference}
                                        </p>
                                    </div>
                                </div>

                                {/* Droite : Métadonnées */}
                                <div className="flex md:flex-col gap-4 md:gap-2 text-sm text-gray-500 md:items-end">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" aria-hidden="true" />
                                        <span>{doc.publicationDate}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FileStack className="w-4 h-4" aria-hidden="true" />
                                        <span>{doc.pageCount} pages • {doc.pdfSize}</span>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent>

                            {/* Résumé */}
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {doc.summary}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {doc.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter className="flex flex-col sm:flex-row gap-3">

                            {/* Bouton consulter */}
                            <Button
                                asChild
                                className="flex-1 bg-blue-600 hover:bg-blue-700 font-semibold"
                            >
                                <Link href={`/textes-juridiques/${doc.id}`}>
                                    <Eye className="w-4 h-4 mr-2" aria-hidden="true" />
                                    Consulter le texte
                                </Link>
                            </Button>

                            {/* Bouton télécharger */}
                            <Button
                                variant="outline"
                                className="flex-1 sm:flex-initial border-2 hover:bg-gray-100 font-semibold"
                                onClick={() => {
                                    // Logique de téléchargement
                                    console.log(`Téléchargement du document ${doc.id}`);
                                }}
                            >
                                <Download className="w-4 h-4 sm:mr-2" aria-hidden="true" />
                                <span className="hidden sm:inline">Télécharger PDF</span>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex flex-col items-center gap-4 pt-8 border-t">

                    <p className="text-sm text-gray-600">
                        Page <span className="font-semibold">{currentPage}</span> sur <span className="font-semibold">{totalPages}</span>
                    </p>

                    <Pagination>
                        <PaginationContent>

                            {/* Bouton Précédent */}
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>

                            {/* Numéros de page */}
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                // Afficher seulement quelques pages autour de la page courante
                                if (
                                    page === 1 ||
                                    page === totalPages ||
                                    (page >= currentPage - 1 && page <= currentPage + 1)
                                ) {
                                    return (
                                        <PaginationItem key={page}>
                                            <PaginationLink
                                                onClick={() => onPageChange(page)}
                                                isActive={currentPage === page}
                                                className="cursor-pointer"
                                            >
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    );
                                }

                                // Afficher "..." pour les pages cachées
                                if (page === currentPage - 2 || page === currentPage + 2) {
                                    return (
                                        <PaginationItem key={page}>
                                            <span className="px-3 py-2">...</span>
                                        </PaginationItem>
                                    );
                                }

                                return null;
                            })}

                            {/* Bouton Suivant */}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}
