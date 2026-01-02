'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Building2 } from 'lucide-react';

interface ProFormProps {
    onBack: () => void;
}

export function ProForm({ onBack }: ProFormProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulation
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
                <Button variant="ghost" size="sm" onClick={onBack} className="text-haylalana-text-tertiary hover:text-haylalana-brand -ml-2">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Retour
                </Button>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-haylalana-heading-primary mb-2">Compte Entreprise</h2>
                <p className="text-haylalana-text-secondary">Sécurisez votre activité et gérez votre conformité.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="companyName">Nom de la Société / Entité</Label>
                    <Input id="companyName" placeholder="Ex: Ma Startup SARL" required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="nif">Numéro NIF</Label>
                        <Input id="nif" placeholder="0000000000" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="stat">Numéro STAT</Label>
                        <Input id="stat" placeholder="00000 00 0000 0 00000" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email professionnel</Label>
                    <Input id="email" type="email" placeholder="contact@masociete.mg" required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input id="password" type="password" placeholder="••••••••" required />
                </div>

                <div className="pt-4">
                    <Button type="submit" className="w-full bg-haylalana-accent hover:bg-haylalana-accent-dark text-white font-semibold" disabled={isLoading}>
                        {isLoading ? (
                            'Création du compte...'
                        ) : (
                            <>
                                <Building2 className="w-4 h-4 mr-2" />
                                Créer mon compte Pro
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
