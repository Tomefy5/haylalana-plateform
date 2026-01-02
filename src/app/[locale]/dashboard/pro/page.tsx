import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Activity, Calendar, Calculator, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-haylalana-heading-primary">Tableau de Bord Pro</h1>
                    <p className="text-haylalana-text-secondary mt-1">TechStartup SARL • NIF: 1234567890</p>
                </div>
                <div className="hidden sm:block">
                    <Button className="bg-haylalana-accent hover:bg-haylalana-accent-dark text-white gap-2">
                        <FileText className="w-4 h-4" />
                        Nouveau Document
                    </Button>
                </div>
            </div>

            {/* Santé Juridique */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="col-span-1 md:col-span-2 bg-gradient-to-r from-haylalana-brand-dark to-haylalana-bg-dark text-white border-0 shadow-lg">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <CardTitle className="flex items-center gap-2">
                                <Activity className="w-5 h-5 text-haylalana-success" />
                                Santé Juridique
                            </CardTitle>
                            <span className="bg-haylalana-success text-white text-xs font-bold px-2 py-1 rounded">Bonne</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-8">
                            <div className="relative w-32 h-32 flex items-center justify-center border-4 border-haylalana-success rounded-full">
                                <span className="text-3xl font-bold">85%</span>
                            </div>
                            <div className="flex-1 space-y-4">
                                <p className="text-haylalana-text-inverse/80 text-sm">Votre entreprise est en bonne conformité. Quelques documents nécessitent une mise à jour mineure.</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <div className="text-2xl font-bold">12</div>
                                        <div className="text-xs text-haylalana-text-inverse/60">Docs Validés</div>
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <div className="text-2xl font-bold text-haylalana-warning">2</div>
                                        <div className="text-xs text-haylalana-text-inverse/60">À Revoir</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Échéances */}
                <Card className="border-haylalana-border-primary shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-haylalana-accent" />
                            Échéances Fiscales
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <div className="bg-haylalana-bg-secondary w-12 flex flex-col items-center justify-center rounded p-1 text-center">
                                    <span className="text-xs font-bold text-haylalana-text-tertiary">OCT</span>
                                    <span className="text-lg font-bold text-haylalana-heading-primary">15</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Déclaration IRSA</p>
                                    <p className="text-xs text-haylalana-warning">Dans 3 jours</p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <div className="bg-haylalana-bg-secondary w-12 flex flex-col items-center justify-center rounded p-1 text-center">
                                    <span className="text-xs font-bold text-haylalana-text-tertiary">NOV</span>
                                    <span className="text-lg font-bold text-haylalana-heading-primary">15</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Acompte IS</p>
                                    <p className="text-xs text-haylalana-success">Payé</p>
                                </div>
                            </li>
                        </ul>
                        <Button variant="ghost" className="w-full mt-4 text-xs text-haylalana-text-secondary">
                            Voir le calendrier complet
                        </Button>
                    </CardContent>
                </Card>
            </section>

            {/* Outils Rapides */}
            <section>
                <h2 className="text-xl font-bold text-haylalana-heading-primary mb-4">Outils de Gestion</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="hover:shadow-md transition-shadow cursor-pointer border-haylalana-border-primary group">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-haylalana-info-bg rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Calculator className="w-6 h-6 text-haylalana-info" />
                            </div>
                            <h3 className="font-semibold text-haylalana-heading-primary">Simulateur Salaire</h3>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow cursor-pointer border-haylalana-border-primary group">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-haylalana-warning-bg rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FileText className="w-6 h-6 text-haylalana-warning" />
                            </div>
                            <h3 className="font-semibold text-haylalana-heading-primary">Gen. Contrats</h3>
                        </CardContent>
                    </Card>

                    {/* Placeholder pour futures fonctionnalités */}
                    <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed border-2 border-haylalana-border-primary bg-transparent hover:bg-haylalana-bg-secondary/50 group">
                        <CardContent className="p-6 flex flex-col items-center text-center justify-center h-full">
                            <span className="text-haylalana-text-tertiary text-sm font-medium group-hover:text-haylalana-text-primary">Plus d'outils bientôt</span>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
