'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Baby, FileText, Briefcase, ChevronRight, Search, Clock, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const PROCEDURES = [
    {
        id: 'creation-societe',
        title: 'Création de Société (SARL)',
        description: 'Toutes les étapes pour immatriculer votre entreprise : Statuts, NIF/STAT, RCS.',
        icon: Building2,
        category: 'Entreprise',
        duration: '2-3 semaines',
        complexity: 'Moyenne',
        steps: 8
    },
    {
        id: 'declaration-naissance',
        title: 'Déclaration de Naissance',
        description: 'Enregistrement d\'un nouveau-né à l\'état civil et obtention du certificat.',
        icon: Baby,
        category: 'Famille',
        duration: '12 jours max',
        complexity: 'Facile',
        steps: 3
    },
    {
        id: 'permis-construire',
        title: 'Permis de Construire',
        description: 'Autorisation d\'urbanisme nécessaire pour les travaux de grande ampleur.',
        icon: FileText,
        category: 'Immobilier',
        duration: '1-2 mois',
        complexity: 'Difficile',
        steps: 12
    },
    {
        id: 'declaration-embauche',
        title: 'Déclaration d\'Embauche',
        description: 'Affiliation d\'un salarié à la CNaPS et l\'OSTIE.',
        icon: Briefcase,
        category: 'Travail',
        duration: '1 semaine',
        complexity: 'Facile',
        steps: 4
    }
];

export default function ProceduresListPage() {
    const router = useRouter();

    return (
        <div className="space-y-8 animate-fade-in relative min-h-screen">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-haylalana-heading-primary">Guide des Démarches</h1>
                    <p className="text-haylalana-text-secondary mt-1 max-w-xl">
                        Des guides pas-à-pas pour toutes vos formalités administratives. Nous vous accompagnons physiquement à chaque étape.
                    </p>
                </div>
                <div className="w-full md:w-auto relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Rechercher une démarche..."
                        className="pl-9 w-full md:w-[300px]"
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROCEDURES.map((proc) => {
                    const Icon = proc.icon;
                    return (
                        <Card
                            key={proc.id}
                            className="group hover:shadow-md transition-all cursor-pointer border-haylalana-border-primary hover:border-haylalana-brand/50"
                            onClick={() => router.push(`/dashboard/procedures/${proc.id}`)}
                        >
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="w-10 h-10 rounded-lg bg-haylalana-brand/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Icon className="w-5 h-5 text-haylalana-brand" />
                                    </div>
                                    <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                                        {proc.category}
                                    </Badge>
                                </div>
                                <CardTitle className="text-lg group-hover:text-haylalana-brand transition-colors">
                                    {proc.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-2">
                                    {proc.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4 text-xs text-haylalana-text-secondary mb-4">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {proc.duration}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {proc.steps} étapes
                                    </div>
                                </div>
                                <Button className="w-full bg-haylalana-bg-secondary text-haylalana-brand hover:bg-haylalana-brand hover:text-white transition-colors group-hover:bg-haylalana-brand group-hover:text-white">
                                    Commencer
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
