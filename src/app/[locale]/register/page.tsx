import { RegisterFlow } from '@/components/auth/register-flow';

export function generateMetadata() {
    return {
        title: 'Inscription - Haylalàna',
        description: 'Créez votre compte Citoyen ou Entreprise sur Haylalàna pour accéder à vos droits et gérer votre conformité.',
    };
}

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-haylalana-bg-secondary py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">

            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-haylalana-heading-primary">
                    Rejoignez Haylalàna
                </h1>
                <p className="mt-2 text-haylalana-text-secondary">
                    La première étape pour maîtriser vos droits.
                </p>
            </div>

            <RegisterFlow />
        </div>
    );
}
