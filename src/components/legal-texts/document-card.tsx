import Link from 'next/link';
import { memo } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar, FileStack, Eye } from 'lucide-react';
import { LegalDocument } from '@/lib/mock-data-legal-texts';

interface DocumentCardProps {
    doc: LegalDocument;
}

const DocumentCard = memo(function DocumentCard({ doc }: DocumentCardProps) {
    // Couleur badge selon type avec palette Haylalàna
    const typeColors = {
        'Loi': 'bg-haylalana-brand/10 text-haylalana-brand border-haylalana-brand/30',
        'Décret': 'bg-haylalana-success-bg text-haylalana-success border-haylalana-success/30',
        'Arrêté': 'bg-haylalana-info-bg text-haylalana-info border-haylalana-info/30',
        'Ordonnance': 'bg-haylalana-accent/10 text-haylalana-accent border-haylalana-accent/30',
    };

    return (
        <Card
            className="hover:shadow-xl transition-all duration-300 group border-2 border-haylalana-border-primary hover:border-haylalana-brand"
        >
            <CardHeader>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                    {/* Gauche : Icône et infos principales */}
                    <div className="flex gap-4">

                        {/* Icône avec gradient Haylalàna clair */}
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-haylalana-brand/10 text-haylalana-brand rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-haylalana-brand/20 transition-all border-2 border-haylalana-brand/20">
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
                                <Badge variant="secondary" className="text-xs bg-haylalana-bg-secondary text-haylalana-text-primary border-haylalana-border-primary">
                                    {doc.category}
                                </Badge>
                            </div>

                            <h3 className="text-xl font-bold text-haylalana-heading-primary mb-1 group-hover:text-haylalana-brand transition-colors">
                                {doc.title}
                            </h3>

                            <p className="text-sm text-haylalana-text-tertiary font-mono">
                                {doc.reference}
                            </p>
                        </div>
                    </div>

                    {/* Droite : Métadonnées */}
                    <div className="flex md:flex-col gap-4 md:gap-2 text-sm text-haylalana-text-tertiary md:items-end">
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
                <p className="text-haylalana-text-secondary leading-relaxed mb-4">
                    {doc.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {doc.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-haylalana-bg-secondary text-haylalana-text-primary text-xs rounded-md border border-haylalana-border-primary"
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
                    className="flex-1 bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold"
                >
                    <Link href={`/textes-juridiques/${doc.id}`}>
                        <Eye className="w-4 h-4 mr-2" aria-hidden="true" />
                        Consulter le texte
                    </Link>
                </Button>

                {/* Bouton télécharger */}
                <Button
                    variant="outline"
                    className="flex-1 sm:flex-initial border-2 border-haylalana-brand text-haylalana-brand hover:bg-haylalana-brand hover:text-white font-semibold"
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
    );
});

export { DocumentCard };
