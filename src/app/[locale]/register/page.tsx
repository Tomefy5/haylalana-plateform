import { RegisterFlow } from '@/components/auth/register-flow';
import Image from 'next/image';

export function generateMetadata() {
    return {
        title: 'Inscription - Haylalàna',
        description: 'Créez votre compte Citoyen ou Entreprise sur Haylalàna pour accéder à vos droits et gérer votre conformité.',
    };
}

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-haylalana-bg-secondary via-white to-haylalana-brand/5 flex">
            {/* Left Side - Branding (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-haylalana-brand to-haylalana-brand-dark relative overflow-hidden items-center justify-center">
                <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -ml-40 -mb-40" />

                <div className="relative z-10 text-center text-white p-12 max-w-md">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
                        <Image
                            src="/icons/haylalana-icon-ss-bg.png"
                            alt="Haylalàna"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Rejoignez Haylalàna</h2>
                    <p className="text-white/80 leading-relaxed mb-8">
                        La première étape pour maîtriser vos droits et votre conformité légale.
                    </p>
                    <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                            <span className="text-sm">Accès à 500+ guides juridiques</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                            <span className="text-sm">Conseiller IA disponible 24/7</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                            <span className="text-sm">Suivi personnalisé de vos démarches</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">

                    {/* Mobile Logo */}
                    <div className="lg:hidden text-center mb-6">
                        <Image
                            src="/icons/haylalana-icon-ss-bg.png"
                            alt="Haylalàna"
                            width={56}
                            height={56}
                            className="mx-auto mb-4"
                        />
                        <h1 className="text-2xl font-bold text-haylalana-heading-primary">
                            Rejoignez Haylalàna
                        </h1>
                        <p className="mt-2 text-haylalana-text-secondary text-sm">
                            La première étape pour maîtriser vos droits.
                        </p>
                    </div>

                    <RegisterFlow />
                </div>
            </div>
        </div>
    );
}
