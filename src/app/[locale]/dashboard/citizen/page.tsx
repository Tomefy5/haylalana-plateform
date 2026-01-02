import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, Trophy, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function CitizenDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-haylalana-heading-primary">Bonjour, Alex 👋</h1>
                <p className="text-haylalana-text-secondary mt-1">Prêt à continuer votre apprentissage ?</p>
            </div>

            {/* Progression */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="col-span-1 md:col-span-2 shadow-sm border-haylalana-border-primary">
                    <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-haylalana-brand" />
                            Ma Progression
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2 text-sm font-medium">
                                <span>Droit de la Famille</span>
                                <span className="text-haylalana-brand">75%</span>
                            </div>
                            <Progress value={75} className="h-2" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2 text-sm font-medium">
                                <span>Droit du Travail</span>
                                <span className="text-haylalana-brand">40%</span>
                            </div>
                            <Progress value={40} className="h-2" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2 text-sm font-medium">
                                <span>Droits Fondamentaux</span>
                                <span className="text-haylalana-brand">10%</span>
                            </div>
                            <Progress value={10} className="h-2" />
                        </div>
                    </CardContent>
                </Card>

                {/* Statut Rapide */}
                <Card className="bg-gradient-to-br from-haylalana-brand-light to-haylalana-brand text-white border-0 shadow-lg">
                    <CardContent className="p-6 flex flex-col h-full justify-between">
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Niveau Actuel</h3>
                            <p className="text-haylalana-accent-light text-sm">Apprenti Juriste</p>
                        </div>
                        <div className="text-center my-4">
                            <Trophy className="w-16 h-16 mx-auto opacity-90 animate-pulse" />
                            <span className="block text-3xl font-bold mt-2">1,250 XP</span>
                        </div>
                        <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                            Voir le classement
                        </Button>
                    </CardContent>
                </Card>
            </section>

            {/* Activités Récentes */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-sm border-haylalana-border-primary">
                    <CardHeader>
                        <CardTitle className="text-lg">Derniers Quiz Joués</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center p-3 bg-haylalana-bg-secondary rounded-lg">
                                <span className="font-medium text-sm">Quiz : Les Contrats</span>
                                <span className="text-haylalana-success font-bold text-sm">8/10</span>
                            </li>
                            <li className="flex justify-between items-center p-3 bg-haylalana-bg-secondary rounded-lg">
                                <span className="font-medium text-sm">Quiz : Mariage</span>
                                <span className="text-haylalana-warning font-bold text-sm">6/10</span>
                            </li>
                        </ul>
                        <Button variant="link" asChild className="w-full mt-2 text-haylalana-brand">
                            <Link href="#">Voir tout l'historique <ArrowRight className="w-4 h-4 ml-1" /></Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="shadow-sm border-haylalana-border-primary">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500 fill-current" />
                            Guides Favoris
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="block p-3 border border-haylalana-border-primary rounded-lg hover:border-haylalana-brand hover:bg-haylalana-brand/5 transition-colors">
                                    <h4 className="font-semibold text-sm text-haylalana-heading-primary">Comment créer une association ?</h4>
                                    <p className="text-xs text-haylalana-text-secondary mt-1">Guide pratique - 5 min</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="block p-3 border border-haylalana-border-primary rounded-lg hover:border-haylalana-brand hover:bg-haylalana-brand/5 transition-colors">
                                    <h4 className="font-semibold text-sm text-haylalana-heading-primary">Démission vs Licenciement</h4>
                                    <p className="text-xs text-haylalana-text-secondary mt-1">Comparatif - 3 min</p>
                                </Link>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}
