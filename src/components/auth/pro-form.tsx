'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Building2, Loader2, Mail, Lock, Hash } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ProFormProps {
    onBack: () => void;
}

export function ProForm({ onBack }: ProFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard/pro');
        }, 1500);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-2 mb-6">
                <Button variant="ghost" size="sm" onClick={onBack} className="text-haylalana-text-tertiary hover:text-haylalana-brand -ml-2 group">
                    <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-0.5 transition-transform" />
                    Retour
                </Button>
            </div>

            <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-haylalana-accent/10 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-haylalana-accent" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-haylalana-heading-primary">Compte Entreprise</h2>
                        <p className="text-sm text-haylalana-text-secondary">Gérez votre conformité légale</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-sm font-medium">Nom de la Société / Entité</Label>
                    <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input id="companyName" placeholder="Ex: Ma Startup SARL" required className="pl-10 h-11 bg-gray-50 border-gray-200 focus:bg-white" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="nif" className="text-sm font-medium">Numéro NIF</Label>
                        <div className="relative">
                            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input id="nif" placeholder="0000000000" className="pl-10 h-11 bg-gray-50 border-gray-200 focus:bg-white" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="stat" className="text-sm font-medium">Numéro STAT</Label>
                        <div className="relative">
                            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input id="stat" placeholder="00000 00 0000 0 00000" className="pl-10 h-11 bg-gray-50 border-gray-200 focus:bg-white" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email professionnel</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input id="email" type="email" placeholder="contact@masociete.mg" required className="pl-10 h-11 bg-gray-50 border-gray-200 focus:bg-white" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">Mot de passe</Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input id="password" type="password" placeholder="••••••••" required className="pl-10 h-11 bg-gray-50 border-gray-200 focus:bg-white" />
                    </div>
                </div>

                <Button type="submit" className="w-full h-11 bg-haylalana-accent hover:bg-haylalana-accent-dark text-white font-semibold shadow-md hover:shadow-lg transition-all" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Création du compte...
                        </>
                    ) : (
                        <>
                            <Building2 className="w-4 h-4 mr-2" />
                            Créer mon compte Pro
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
}

