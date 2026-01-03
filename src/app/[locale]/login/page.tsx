'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { LogIn, ArrowRight, Mail, Lock, Loader2, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard/citizen');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-haylalana-bg-secondary via-white to-haylalana-brand/5 flex">
            {/* Left Side - Branding (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 bg-haylalana-brand relative overflow-hidden items-center justify-center">
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
                    <h2 className="text-3xl font-bold mb-4">Bienvenue sur Haylalàna</h2>
                    <p className="text-white/80 leading-relaxed">
                        La plateforme juridique qui rend le droit accessible à tous les Malgaches.
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">

                    {/* Mobile Logo */}
                    <div className="lg:hidden text-center mb-8">
                        <Image
                            src="/icons/haylalana-icon-ss-bg.png"
                            alt="Haylalàna"
                            width={56}
                            height={56}
                            className="mx-auto mb-4"
                        />
                    </div>

                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-haylalana-heading-primary">
                            Bon retour !
                        </h1>
                        <p className="mt-2 text-haylalana-text-secondary">
                            Connectez-vous pour accéder à votre espace.
                        </p>
                    </div>

                    <Card className="p-6 md:p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="votre@email.com"
                                        required
                                        className="pl-10 h-11 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-sm font-medium">Mot de passe</Label>
                                    <Link href="#" className="text-xs text-haylalana-brand hover:underline font-medium">
                                        Mot de passe oublié ?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        required
                                        className="pl-10 pr-10 h-11 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-11 bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold shadow-md hover:shadow-lg transition-all"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Connexion...
                                    </>
                                ) : (
                                    <>
                                        <LogIn className="w-4 h-4 mr-2" />
                                        Se connecter
                                    </>
                                )}
                            </Button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                            <p className="text-sm text-haylalana-text-secondary">
                                Pas encore de compte ?{' '}
                                <Link href="/register" className="font-semibold text-haylalana-brand hover:text-haylalana-brand-dark inline-flex items-center group">
                                    Créer un compte
                                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
