'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CitizenFormProps {
    onBack: () => void;
}

export function CitizenForm({ onBack }: CitizenFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulation
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard/citizen');
        }, 1500);
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
                <h2 className="text-2xl font-bold text-haylalana-heading-primary mb-2">Compte Citoyen</h2>
                <p className="text-haylalana-text-secondary">Apprenez et maîtrisez vos droits simplement.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input id="firstName" placeholder="Votre prénom" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input id="lastName" placeholder="Votre nom" required />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email personnel</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input id="password" type="password" placeholder="••••••••" required />
                </div>

                <div className="pt-4">
                    <Button type="submit" className="w-full bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold" disabled={isLoading}>
                        {isLoading ? (
                            'Création du compte...'
                        ) : (
                            <>
                                <UserPlus className="w-4 h-4 mr-2" />
                                Créer mon compte gratuit
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
