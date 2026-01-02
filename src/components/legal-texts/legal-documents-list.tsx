import { LegalDocument } from '@/lib/mock-data-legal-texts';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { FileText } from 'lucide-react';
import { DocumentCard } from './document-card';

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

    if (documents.length === 0) {
        return (
            <div className="text-center py-16">
                <FileText className="w-16 h-16 text-haylalana-border-secondary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-haylalana-heading-primary mb-2">Aucun document trouvé</h3>
                <p className="text-haylalana-text-tertiary">Essayez de modifier vos critères de recherche</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">

            {/* Liste des documents */}
            <div className="grid gap-6">
                {documents.map((doc) => (
                    <DocumentCard key={doc.id} doc={doc} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex flex-col items-center gap-4 pt-8 border-t border-haylalana-border-primary">

                    <p className="text-sm text-haylalana-text-secondary">
                        Page <span className="font-semibold text-haylalana-heading-primary">{currentPage}</span> sur <span className="font-semibold text-haylalana-heading-primary">{totalPages}</span>
                    </p>

                    <Pagination>
                        <PaginationContent>

                            {/* Bouton Précédent */}
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                                    className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-haylalana-brand/5 hover:text-haylalana-brand'}`}
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
                                                className={`cursor-pointer ${currentPage === page
                                                    ? 'bg-haylalana-brand text-white hover:bg-haylalana-brand-dark'
                                                    : 'hover:bg-haylalana-brand/5 hover:text-haylalana-brand'
                                                    }`}
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
                                            <span className="px-3 py-2 text-haylalana-text-tertiary">...</span>
                                        </PaginationItem>
                                    );
                                }

                                return null;
                            })}

                            {/* Bouton Suivant */}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                                    className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-haylalana-brand/5 hover:text-haylalana-brand'}`}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}
