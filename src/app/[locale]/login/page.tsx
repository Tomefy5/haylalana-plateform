'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { LogIn, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulation
        setTimeout(() => {
            setIsLoading(false);
            // Par défaut pour la démo, redirection vers dashboard citoyen
            router.push('/dashboard/citizen');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-haylalana-bg-secondary py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">

            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-haylalana-heading-primary">
                    Bon retour sur Haylalàna
                </h1>
                <p className="mt-2 text-haylalana-text-secondary">
                    Connectez-vous pour accéder à votre espace.
                </p>
            </div>

            <Card className="w-full max-w-md p-6 md:p-8 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="votre@email.com" required />
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Link href="#" className="text-xs text-haylalana-brand hover:underline">
                                Mot de passe oublié ?
                            </Link>
                        </div>
                        <Input id="password" type="password" placeholder="••••••••" required />
                    </div>

                    <div className="pt-4">
                        <Button type="submit" className="w-full bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold" disabled={isLoading}>
                            {isLoading ? (
                                'Connexion...'
                            ) : (
                                <>
                                    <LogIn className="w-4 h-4 mr-2" />
                                    Se connecter
                                </>
                            )}
                        </Button>
                    </div>
                </form>

                <div className="mt-6 pt-6 border-t border-haylalana-border-primary text-center">
                    <p className="text-sm text-haylalana-text-secondary">
                        Pas encore de compte ?{' '}
                        <Link href="/register" className="font-semibold text-haylalana-brand hover:text-haylalana-brand-dark hover:underline inline-flex items-center">
                            Créer un compte
                            <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}
