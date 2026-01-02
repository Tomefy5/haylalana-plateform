'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center bg-haylalana-bg-primary">
            <div className="w-20 h-20 bg-haylalana-error/10 text-haylalana-error rounded-full flex items-center justify-center mb-6 animate-bounce">
                <AlertTriangle className="w-10 h-10" aria-hidden="true" />
            </div>

            <h2 className="text-3xl font-bold text-haylalana-heading-primary mb-3">
                Oups ! Une erreur est survenue
            </h2>

            <p className="text-haylalana-text-secondary max-w-md mb-8">
                Nous sommes désolés, mais nous n'avons pas pu charger cette page correctement.
                L'équipe technique a été notifiée.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold"
                >
                    <RefreshCw className="w-4 h-4 mr-2" aria-hidden="true" />
                    Réessayer
                </Button>

                <Button
                    asChild
                    variant="outline"
                    className="border-haylalana-border-primary hover:bg-haylalana-bg-secondary"
                >
                    <Link href="/">
                        <Home className="w-4 h-4 mr-2" aria-hidden="true" />
                        Retour à l'accueil
                    </Link>
                </Button>
            </div>

            {error.digest && (
                <p className="mt-12 text-xs text-haylalana-text-muted font-mono">
                    Error ID: {error.digest}
                </p>
            )}
        </div>
    );
}
