'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CheckCircle, Circle, MapPin, Clock, FileText, ArrowLeft, ExternalLink, Navigation } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

// MOCK DATA FOR DEMO PROCEDURE
const PROCEDURE_DATA = {
    id: 'creation-societe',
    title: 'Création de Société (SARL)',
    description: 'Guide complet pour l\'immatriculation de votre société à responsabilité limitée.',
    totalSteps: 5,
    steps: [
        {
            id: 1,
            title: 'Enregistrement des Statuts',
            description: 'Faire enregistrer les statuts de la société et les procès-verbaux de constitution.',
            location: {
                name: 'Centre Fiscal (Service de l\'Enregistrement)',
                address: 'Immeuble des Finances, Antaninarenina, Antananarivo',
                hours: '08:00 - 15:00 (Lun - Ven)',
            },
            documents: ['5 exemplaires des Statuts', '5 exemplaires du PV de constitution', 'Carte fiscale si existante'],
            tips: 'Arrivez tôt le matin (avant 9h) pour éviter la file d\'attente.'
        },
        {
            id: 2,
            title: 'Carte Statistique & NIF',
            description: 'Obtention de la Carte Statistique et du Numéro d\'Identification Fiscale (NIF).',
            location: {
                name: 'INSTAT / Centre Fiscal',
                address: 'Anosy, près du Tribunal',
                hours: '08:30 - 12:00, 13:30 - 16:00',
            },
            documents: ['Statuts Enregistrés', 'Contrat de bail ou titre de propriété', 'CIN du gérant'],
            tips: 'Vous pouvez désormais faire ces démarches en ligne sur E-Hetra.'
        },
        {
            id: 3,
            title: 'Immatriculation au RCS',
            description: 'Inscription au Registre du Commerce et des Sociétés.',
            location: {
                name: 'Tribunal de Commerce (Greffe)',
                address: 'Anosy, RDC du Tribunal de Première Instance',
                hours: '08:00 - 11:30 (Dépôt uniquement)',
            },
            documents: ['Formulaires RCS', 'Casier judiciaire du gérant', 'Certificat de résidence'],
            tips: 'Le greffe n\'accepte plus les dépôts après 11h30.'
        },
        {
            id: 4,
            title: 'Déclaration d\'Existence',
            description: 'Déclarer l\'existence de la société auprès du Fokontany et de la Commune.',
            location: {
                name: 'Bureau du Fokontany / Arrondissement',
                address: 'Selon votre siège social',
                hours: '08:00 - 17:00',
            },
            documents: ['RCS', 'Statuts', 'NIF/STAT'],
            tips: 'Cette étape est cruciale pour obtenir votre certificat de résidence société.'
        },
        {
            id: 5,
            title: 'Ouverture Compte Bancaire',
            description: 'Ouvrir le compte bancaire professionnel au nom de la société.',
            location: {
                name: 'Banque de votre choix',
                address: 'Agences BNI, BOA, BMOI, etc.',
                hours: '08:00 - 16:00',
            },
            documents: ['Tous les documents juridiques originaux', 'CIN des signataires', 'Premier dépôt'],
            tips: 'Comparez les frais de tenue de compte avant de choisir votre banque.'
        }
    ]
};

export default function ProcedureDetailPage() {
    const router = useRouter();
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    const activeStep = PROCEDURE_DATA.steps[currentStepIndex];

    const handleStepComplete = (stepId: number) => {
        if (!completedSteps.includes(stepId)) {
            setCompletedSteps([...completedSteps, stepId]);
        }
        if (currentStepIndex < PROCEDURE_DATA.steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    };

    const progress = (completedSteps.length / PROCEDURE_DATA.totalSteps) * 100;

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] animate-fade-in relative -mx-4 -my-4 sm:-mx-6 sm:-my-6 lg:-mx-8 lg:-my-8">

            {/* Header Sticky */}
            <div className="bg-white border-b border-haylalana-border-primary px-6 py-4 flex items-center justify-between sticky top-0 z-20 shadow-sm">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => router.back()}>
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div>
                        <h1 className="font-bold text-lg leading-tight">{PROCEDURE_DATA.title}</h1>
                        <div className="flex items-center gap-3 mt-1 text-xs text-haylalana-text-secondary">
                            <span>Étape {currentStepIndex + 1}/{PROCEDURE_DATA.totalSteps}</span>
                            <Progress value={progress} className="w-24 h-2" />
                        </div>
                    </div>
                </div>
                <Button variant="outline" size="sm" className="hidden sm:flex">
                    <FileText className="w-4 h-4 mr-2" />
                    Télécharger la check-list
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">

                {/* Left Panel: Steps Timeline */}
                <ScrollArea className="flex-1 bg-gray-50 p-6 lg:p-8 overflow-y-auto">
                    <div className="max-w-xl mx-auto space-y-8 pb-20">
                        {PROCEDURE_DATA.steps.map((step, idx) => {
                            const isActive = idx === currentStepIndex;
                            const isCompleted = completedSteps.includes(step.id);

                            return (
                                <div
                                    key={step.id}
                                    className={cn(
                                        "relative pl-8 transition-all duration-300",
                                        isActive ? "opacity-100 scale-100" : "opacity-60 hover:opacity-80"
                                    )}
                                    onClick={() => setCurrentStepIndex(idx)}
                                >
                                    {/* Timeline Line */}
                                    {idx !== PROCEDURE_DATA.steps.length - 1 && (
                                        <div className="absolute left-[11px] top-8 bottom-[-32px] w-0.5 bg-gray-200" />
                                    )}

                                    {/* Indicator */}
                                    <div className={cn(
                                        "absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white transition-colors z-10",
                                        isActive ? "border-haylalana-brand text-haylalana-brand" :
                                            isCompleted ? "border-green-500 bg-green-500 text-white" : "border-gray-300 text-gray-300"
                                    )}>
                                        {isCompleted ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-3 h-3 fill-current" />}
                                    </div>

                                    {/* Card Content */}
                                    <Card
                                        className={cn(
                                            "cursor-pointer transition-all border shadow-sm",
                                            isActive ? "border-haylalana-brand ring-1 ring-haylalana-brand shadow-md bg-white" : "border-gray-200 bg-white/50"
                                        )}
                                    >
                                        <CardHeader className="p-4 pb-2">
                                            <CardTitle className={cn("text-base", isActive ? "text-haylalana-heading-primary" : "text-gray-500")}>
                                                {step.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-4 pt-0">
                                            <p className="text-sm text-haylalana-text-secondary mb-4">
                                                {step.description}
                                            </p>

                                            {isActive && (
                                                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                                                    <div className="bg-haylalana-bg-secondary p-3 rounded-md mb-4">
                                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-haylalana-text-tertiary mb-2">Documents requis</h4>
                                                        <ul className="space-y-1">
                                                            {step.documents.map((doc, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-haylalana-text-primary">
                                                                    <div className="w-1 h-1 rounded-full bg-haylalana-brand mt-2 shrink-0" />
                                                                    {doc}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {!isCompleted ? (
                                                        <Button
                                                            className="w-full bg-haylalana-brand hover:bg-haylalana-brand-dark text-white"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleStepComplete(step.id);
                                                            }}
                                                        >
                                                            Marquer comme fait
                                                        </Button>
                                                    ) : (
                                                        <Button variant="outline" className="w-full text-green-600 border-green-200 bg-green-50 hover:bg-green-100 cursor-default">
                                                            <CheckCircle className="w-4 h-4 mr-2" />
                                                            Étape terminée
                                                        </Button>
                                                    )}
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </ScrollArea>

                {/* Right Panel: Map & Assistance (Sticky on Desktop) */}
                <div className="hidden lg:flex w-[400px] xl:w-[450px] flex-col border-l border-haylalana-border-primary bg-white h-full shadow-xl z-10">
                    <div className="flex-1 flex flex-col">
                        {/* Map Area */}
                        <div className="h-[250px] bg-gray-100 relative group overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center bg-haylalana-bg-tertiary">
                                <MapPin className="w-12 h-12 text-gray-300" />
                                <span className="absolute bottom-4 text-xs font-medium text-gray-400">Carte Interactive (Simulation)</span>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-lg border border-gray-200">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-haylalana-brand text-white flex items-center justify-center shrink-0 shadow-sm">
                                        <Navigation className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm text-haylalana-heading-primary">{activeStep.location.name}</p>
                                        <p className="text-xs text-haylalana-text-secondary line-clamp-1">{activeStep.location.address}</p>
                                        <a href="#" className="text-xs text-haylalana-brand font-medium hover:underline mt-1 inline-flex items-center">
                                            Voir l'itinéraire <ExternalLink className="w-3 h-3 ml-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location Details */}
                        <div className="p-6 space-y-6 overflow-y-auto flex-1">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-haylalana-text-tertiary mb-3">Informations Pratiques</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50">
                                        <Clock className="w-5 h-5 text-haylalana-brand mt-0.5" />
                                        <div>
                                            <span className="block text-sm font-medium text-gray-900">Horaires d'ouverture</span>
                                            <span className="block text-sm text-gray-600">{activeStep.location.hours}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50">
                                        <MapPin className="w-5 h-5 text-haylalana-brand mt-0.5" />
                                        <div>
                                            <span className="block text-sm font-medium text-gray-900">Adresse Exacte</span>
                                            <span className="block text-sm text-gray-600">{activeStep.location.address}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Card className="bg-yellow-50 border-yellow-200 shadow-none">
                                <CardHeader className="p-4 pb-2">
                                    <CardTitle className="text-sm font-semibold text-yellow-800 flex items-center gap-2">
                                        💡 Conseil d'expert
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 pt-0">
                                    <p className="text-sm text-yellow-700 leading-relaxed">
                                        {activeStep.tips}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
