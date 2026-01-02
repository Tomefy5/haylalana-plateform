'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Clock, CheckCircle, AlertCircle, Info, ChevronRight, FileText, MapPin, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'; // Assuming basic Dialog components exist or using simple conditional rendering if not fully available, I'll use conditional rendering for simplicity and robustness as I haven't fully checked shadcn dialog exports.

// Mock Data for Obligations
const obligations = [
    {
        id: 1,
        title: 'Déclaration TVA',
        date: '2025-10-15',
        type: 'Fiscal',
        status: 'late', // late, todo, done
        description: 'Déclaration mensuelle de la Taxe sur la Valeur Ajoutée (TVA) pour le mois de Septembre.',
        documents: ['Journal des Ventes', 'Journal des Achats', 'Annexes TVA'],
        location: 'Centre Fiscal ou E-Hetra',
        amount: 'Selon CA'
    },
    {
        id: 2,
        title: 'Acompte IRSA',
        date: '2025-10-15',
        type: 'Social',
        status: 'late',
        description: 'Vessement de l\'Impôt sur les Revenus Salariaux et Assimilés (IRSA) pour le personnel.',
        documents: ['Etat IRSA', 'Bordereau de versement'],
        location: 'Centre Fiscal ou E-Hetra',
        amount: 'Variable'
    },
    {
        id: 3,
        title: 'Cotisations CNaPS',
        date: '2025-10-31',
        type: 'Social',
        status: 'todo',
        description: 'Paiement des cotisations sociales CNaPS pour le 3ème trimestre 2025.',
        documents: ['DNS (Déclaration Nominative des Salaires)', 'Bordereau de versement'],
        location: 'CNaPS ou via Banque',
        amount: '1% (Sal) + 13% (Pat)'
    },
    {
        id: 4,
        title: 'Cotisations OSTIE',
        date: '2025-10-31',
        type: 'Sanitaire',
        status: 'todo',
        description: 'Paiement des cotisations sanitaires OSTIE pour le 3ème trimestre.',
        documents: ['Bordereau OSTIE'],
        location: 'Siège OSTIE ou Banque',
        amount: '1% (Sal) + 5% (Pat)'
    },
    {
        id: 5,
        title: 'Dépôt des États Financiers',
        date: '2025-11-15', // Fake date for demo flow
        type: 'Comptable',
        status: 'todo',
        description: 'Dépôt annuel des comptes sociaux (Bilan, Compte de Résultat).',
        documents: ['Bilan', 'Compte de résultat', 'Tableau des flux de trésorerie'],
        location: 'Tribunal de Commerce / Stat',
        amount: 'N/A'
    },
    {
        id: 6,
        title: 'Acompte IS Bimestriel',
        date: '2025-11-15',
        type: 'Fiscal',
        status: 'todo',
        description: 'Paiement de l\'acompte bimestriel sur l\'Impôt sur les Sociétés.',
        documents: ['Bordereau Acompte IS'],
        location: 'Centre Fiscal',
        amount: '5% de l\'impôt N-1'
    },
    {
        id: 7,
        title: 'Déclaration TVA (Octobre)',
        date: '2025-11-15',
        type: 'Fiscal',
        status: 'todo',
        description: 'Déclaration mensuelle de la TVA pour Octobre.',
        documents: ['Journal des Ventes', 'Journal des Achats'],
        location: 'E-Hetra',
        amount: 'Selon CA'
    },
    {
        id: 0,
        title: 'Déclaration TVA (Août)',
        date: '2025-09-15',
        type: 'Fiscal',
        status: 'done',
        description: 'Déclaration mensuelle de la TVA pour Août.',
        documents: ['Journal des Ventes'],
        location: 'E-Hetra',
        amount: 'Payé'
    }
];

export default function ObligationsPage() {
    const router = useRouter();
    const [selectedObligation, setSelectedObligation] = useState<typeof obligations[0] | null>(null);

    // Grouping logic (simplified)
    const sortedObligations = [...obligations].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Determining status styles
    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'late': return {
                card: 'border-l-4 border-l-red-500 bg-red-50/30',
                badge: 'bg-red-100 text-red-700 hover:bg-red-200 border-red-200',
                icon: <AlertCircle className="w-4 h-4 text-red-600" />
            };
            case 'todo': return {
                card: 'border-l-4 border-l-orange-500 bg-white',
                badge: 'bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200',
                icon: <Clock className="w-4 h-4 text-orange-600" />
            };
            case 'done': return {
                card: 'border-l-4 border-l-green-500 bg-gray-50 opacity-75',
                badge: 'bg-green-100 text-green-700 hover:bg-green-200 border-green-200',
                icon: <CheckCircle className="w-4 h-4 text-green-600" />
            };
            default: return { card: '', badge: '', icon: null };
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'late': return 'En Retard';
            case 'todo': return 'À Faire';
            case 'done': return 'Fait';
            default: return status;
        }
    };

    // Date formatting
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long' }).format(date);
    };

    return (
        <div className="space-y-8 animate-fade-in relative min-h-screen">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-haylalana-text-tertiary hover:text-haylalana-brand -ml-2">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Retour au Dashboard
                </Button>
            </div>

            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-haylalana-heading-primary flex items-center gap-2">
                        <CalendarIcon className="w-8 h-8 text-haylalana-brand" />
                        Calendrier des Obligations
                    </h1>
                    <p className="text-haylalana-text-secondary mt-1">Ne manquez plus aucune échéance administrative.</p>
                </div>
            </div>

            {/* Timeline View */}
            <div className="space-y-6 max-w-4xl mx-auto">
                {sortedObligations.map((obl, index) => {
                    const styles = getStatusStyles(obl.status);
                    const isNewMonth = index === 0 || new Date(obl.date).getMonth() !== new Date(sortedObligations[index - 1].date).getMonth();

                    return (
                        <div key={obl.id} className="relative">
                            {/* Month Header */}
                            {isNewMonth && (
                                <div className="sticky top-20 z-10 py-2 mb-4 bg-haylalana-bg-secondary/95 backdrop-blur-sm">
                                    <h3 className="text-lg font-bold text-haylalana-brand uppercase tracking-wider">
                                        {new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(new Date(obl.date))}
                                    </h3>
                                </div>
                            )}

                            <Card
                                className={`mb-4 cursor-pointer hover:shadow-md transition-shadow ${styles.card}`}
                                onClick={() => setSelectedObligation(obl)}
                            >
                                <CardContent className="p-4 sm:p-6 flex items-center gap-4">
                                    {/* Date Box */}
                                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg border border-haylalana-border-primary flex flex-col items-center justify-center shadow-sm">
                                        <span className="text-xs font-bold text-haylalana-text-tertiary uppercase">
                                            {new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(new Date(obl.date))}
                                        </span>
                                        <span className="text-2xl font-bold text-haylalana-heading-primary">
                                            {new Date(obl.date).getDate()}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Badge variant="outline" className={styles.badge}>
                                                {styles.icon}
                                                <span className="ml-1">{getStatusLabel(obl.status)}</span>
                                            </Badge>
                                            <Badge variant="secondary" className="text-xs text-haylalana-text-tertiary">
                                                {obl.type}
                                            </Badge>
                                        </div>
                                        <h4 className={`text-lg font-semibold truncate ${obl.status === 'done' ? 'text-gray-500 line-through' : 'text-haylalana-heading-primary'}`}>
                                            {obl.title}
                                        </h4>
                                        <p className="text-sm text-haylalana-text-secondary truncate hidden sm:block">
                                            {obl.description}
                                        </p>
                                    </div>

                                    <ChevronRight className="w-5 h-5 text-gray-400" />
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
            </div>

            {/* Details Overlay (Custom simplified modal) */}
            {selectedObligation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <Card className="w-full max-w-lg bg-white shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
                        <CardHeader className="bg-haylalana-brand/5 border-b border-haylalana-border-primary">
                            <div className="flex justify-between items-start">
                                <div>
                                    <Badge className={`${getStatusStyles(selectedObligation.status).badge} mb-2`}>
                                        {getStatusLabel(selectedObligation.status)}
                                    </Badge>
                                    <CardTitle className="text-2xl text-haylalana-heading-primary">{selectedObligation.title}</CardTitle>
                                    <CardDescription className="mt-1 flex items-center gap-2">
                                        <CalendarIcon className="w-4 h-4" /> Date limite : {formatDate(selectedObligation.date)}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">

                            <div>
                                <h4 className="font-semibold text-haylalana-heading-primary mb-2 flex items-center gap-2">
                                    <Info className="w-4 h-4 text-haylalana-brand" /> À propos
                                </h4>
                                <p className="text-haylalana-text-secondary leading-relaxed">
                                    {selectedObligation.description}
                                </p>
                            </div>

                            <div className="bg-haylalana-bg-secondary p-4 rounded-lg">
                                <h4 className="font-semibold text-haylalana-heading-primary mb-3 flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-haylalana-brand" /> Documents Requis
                                </h4>
                                <ul className="space-y-2">
                                    {selectedObligation.documents.map((doc, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-haylalana-text-secondary">
                                            <div className="w-1.5 h-1.5 rounded-full bg-haylalana-brand/60" />
                                            {doc}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-between pt-2">
                                <div className="flex items-center gap-2 text-sm text-haylalana-text-secondary">
                                    <MapPin className="w-4 h-4" />
                                    <span>{selectedObligation.location}</span>
                                </div>
                                <div className="text-sm font-semibold text-haylalana-heading-primary">
                                    Montant Est. : {selectedObligation.amount}
                                </div>
                            </div>

                        </CardContent>
                        <CardFooter className="bg-gray-50 border-t border-gray-100 p-4 flex justify-end gap-2">
                            <Button variant="outline" onClick={() => setSelectedObligation(null)}>Fermer</Button>
                            {selectedObligation.status !== 'done' && (
                                <Button className="bg-haylalana-brand hover:bg-haylalana-brand-dark text-white">
                                    Marquer comme fait
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                </div>
            )}
        </div>
    );
}
