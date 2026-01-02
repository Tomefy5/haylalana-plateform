import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Trophy, ArrowRight, Star, Award, Shield, Zap, Lock, Map, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function CitizenDashboard() {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-haylalana-heading-primary">Bonjour, Alex 👋</h1>
                <p className="text-haylalana-text-secondary mt-1">Prêt à débloquer votre prochain badge ?</p>
            </div>

            {/* Progression & Statut Combined Row */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Level Card - Gamified */}
                <Card className="col-span-1 lg:col-span-1 bg-gradient-to-br from-haylalana-brand to-haylalana-brand-dark text-white border-0 shadow-lg relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

                    <CardContent className="p-6 flex flex-col h-full justify-between relative z-10">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-lg text-white/90">Niveau Actuel</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-2xl font-bold">Niveau 3</span>
                                    <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                                        Citoyen Éclairé
                                    </Badge>
                                </div>
                            </div>
                            <Trophy className="w-8 h-8 text-yellow-300 drop-shadow-md" />
                        </div>

                        <div className="mt-6 mb-2">
                            <div className="flex justify-between text-xs text-white/80 mb-2 font-medium">
                                <span>1,250 XP</span>
                                <span>2,000 XP (Suivant)</span>
                            </div>
                            <Progress value={62} className="h-3 bg-black/20" indicatorClassName="bg-gradient-to-r from-yellow-300 to-yellow-500" />
                            <p className="text-xs text-white/70 mt-2 text-center">
                                Plus que 750 XP pour atteindre le niveau "Expert" !
                            </p>
                        </div>

                        <Button variant="secondary" className="w-full bg-white text-haylalana-brand hover:bg-white/90 font-semibold shadow-sm mt-4 border-0">
                            Voir le classement
                        </Button>
                    </CardContent>
                </Card>

                {/* My Passport / Succès - NEW SECTION */}
                <Card className="col-span-1 lg:col-span-2 shadow-sm border-haylalana-border-primary">
                    <CardHeader className="pb-3">
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-xl flex items-center gap-2 text-haylalana-heading-primary">
                                <Map className="w-5 h-5 text-haylalana-brand" />
                                Mon Passeport Juridique
                            </CardTitle>
                            <Button variant="ghost" size="sm" className="text-haylalana-brand hover:bg-haylalana-brand/5">
                                Voir tous les badges <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>
                        <CardDescription>Collectionnez des badges en apprenant vos droits.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {/* Unlocked Badges */}
                            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-yellow-50/50 border border-yellow-100 hover:shadow-md transition-all group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-6 h-6 text-yellow-600" />
                                </div>
                                <h4 className="font-semibold text-sm text-gray-800">Lecteur Assidu</h4>
                                <p className="text-[10px] text-gray-500 mt-1">5 articles lus</p>
                            </div>

                            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-blue-50/50 border border-blue-100 hover:shadow-md transition-all group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <Zap className="w-6 h-6 text-blue-600" />
                                </div>
                                <h4 className="font-semibold text-sm text-gray-800">Vif d'Esprit</h4>
                                <p className="text-[10px] text-gray-500 mt-1">Quiz sans faute</p>
                            </div>

                            {/* Locked Badges */}
                            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-gray-50 border border-gray-100 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-not-allowed group">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2 relative">
                                    <Shield className="w-6 h-6 text-gray-500" />
                                    <Lock className="w-3 h-3 text-gray-400 absolute bottom-0 right-0 bg-white rounded-full p-0.5" />
                                </div>
                                <h4 className="font-semibold text-sm text-gray-700">Protecteur</h4>
                                <p className="text-[10px] text-gray-500 mt-1">Compléter "Droits Civiques"</p>
                            </div>

                            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-gray-50 border border-gray-100 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-not-allowed group">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-2 relative">
                                    <Award className="w-6 h-6 text-gray-500" />
                                    <Lock className="w-3 h-3 text-gray-400 absolute bottom-0 right-0 bg-white rounded-full p-0.5" />
                                </div>
                                <h4 className="font-semibold text-sm text-gray-700">Expert Famille</h4>
                                <p className="text-[10px] text-gray-500 mt-1">Module Famille 100%</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Learning Path / Cours En cours */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-haylalana-heading-primary flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-haylalana-brand" />
                    Continuer d'apprendre
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="col-span-1 md:col-span-2 shadow-sm border-haylalana-border-primary">
                        <CardContent className="p-0">
                            <div className="divide-y divide-gray-100">
                                <div className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
                                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                                        <Award className="w-5 h-5 text-red-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="font-semibold text-haylalana-heading-primary">Droit de la Famille</h4>
                                            <span className="text-xs font-bold text-haylalana-brand bg-haylalana-brand/5 px-2 py-0.5 rounded-full">75%</span>
                                        </div>
                                        <Progress value={75} className="h-1.5" />
                                        <p className="text-xs text-gray-500 mt-1.5">Prochain: Les régimes matrimoniaux</p>
                                    </div>
                                    <Button size="icon" variant="ghost">
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </Button>
                                </div>

                                <div className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                                        <Briefcase className="w-5 h-5 text-blue-600" /> {/* Note: Briefcase needs import if not already globally available or specific import */}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="font-semibold text-haylalana-heading-primary">Droit du Travail</h4>
                                            <span className="text-xs font-bold text-haylalana-brand bg-haylalana-brand/5 px-2 py-0.5 rounded-full">40%</span>
                                        </div>
                                        <Progress value={40} className="h-1.5" />
                                        <p className="text-xs text-gray-500 mt-1.5">Prochain: Le contrat d'essai</p>
                                    </div>
                                    <Button size="icon" variant="ghost">
                                        <ArrowRight className="w-4 h-4 text-gray-400" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Guides Favoris / Quick Links */}
                    <Card className="shadow-sm border-haylalana-border-primary">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                Guides Favoris
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="block p-3 border border-haylalana-border-primary rounded-lg hover:border-haylalana-brand hover:bg-haylalana-brand/5 transition-colors group">
                                        <h4 className="font-semibold text-sm text-haylalana-heading-primary group-hover:text-haylalana-brand">Comment créer une association ?</h4>
                                        <p className="text-xs text-haylalana-text-secondary mt-1">Guide pratique • 5 min</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block p-3 border border-haylalana-border-primary rounded-lg hover:border-haylalana-brand hover:bg-haylalana-brand/5 transition-colors group">
                                        <h4 className="font-semibold text-sm text-haylalana-heading-primary group-hover:text-haylalana-brand">Démission vs Licenciement</h4>
                                        <p className="text-xs text-haylalana-text-secondary mt-1">Comparatif • 3 min</p>
                                    </Link>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}


