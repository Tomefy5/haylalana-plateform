'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, UserPlus, Loader2, Mail, Lock, User } from 'lucide-react';
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
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard/citizen');
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
                    <div className="w-10 h-10 rounded-full bg-haylalana-brand/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-haylalana-brand" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-haylalana-heading-primary">Compte Citoyen</h2>
                        <p className="text-sm text-haylalana-text-secondary">Apprenez et maîtrisez vos droits</p>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">Prénom</Label>
                        <Input id="firstName" placeholder="Votre prénom" required className="h-11 bg-gray-50 border-gray-200 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">Nom</Label>
                        <Input id="lastName" placeholder="Votre nom" required className="h-11 bg-gray-50 border-gray-200 focus:bg-white" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email personnel</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input id="email" type="email" placeholder="votre@email.com" required className="pl-10 h-11 bg-gray-50 border-gray-200 focus:bg-white" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">Mot de passe</Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input id="password" type="password" placeholder="••••••••" required className="pl-10 h-11 bg-gray-50 border-gray-200 focus:bg-white" />
                    </div>
                </div>

                <Button type="submit" className="w-full h-11 bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold shadow-md hover:shadow-lg transition-all" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Création du compte...
                        </>
                    ) : (
                        <>
                            <UserPlus className="w-4 h-4 mr-2" />
                            Créer mon compte gratuit
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
}

