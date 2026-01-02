'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Download, HelpCircle, ArrowLeft, Info, Coins, Users, Building } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';

export default function TaxSimulatorPage() {
    const router = useRouter();
    const [regime, setRegime] = useState('synthetique'); // synthetique | reel
    const [period, setPeriod] = useState('monthly'); // monthly | yearly

    // Inputs
    const [turnover, setTurnover] = useState(10000000); // CA
    const [expenses, setExpenses] = useState(4000000); // Charges
    const [salaries, setSalaries] = useState(2000000); // Salaires Bruts

    // Constants
    // IS Synthétique: 5% du CA (min 16 000 Ar, simplifié)
    // IS Réel: 20% du Bénéfice (CA - Charges) (min 100 000 Ar ou 5 pour mille du CA, simplifié ici à 20% bénéfice)
    // TVA Réel: 20% de la VA (simplifié: (CA - Charges) * 20%) - Uniquement Réel
    // Charges Sociales (Patronales): CNaPS (13%) + OSTIE (5%) = 18% (Simplifié à 15% pour l'exemple pédago, souvent ~13-18%)
    const SOCIAL_RATE = 0.14; // 14% Patronal count (1% OSTIE / 13% CNAPS) - Simplified
    const TVA_RATE = 0.20;
    const IS_SYNT_RATE = 0.05; // 5%
    const IS_REEL_RATE = 0.20; // 20%

    const multiplier = period === 'monthly' ? 12 : 1;
    const displayMultiplier = period === 'monthly' ? 1 : 1 / 12;

    const results = useMemo(() => {
        const annualTurnover = turnover * multiplier;
        const annualExpenses = expenses * multiplier;
        const annualSalaries = salaries * multiplier;
        const annualProfit = Math.max(0, annualTurnover - annualExpenses - annualSalaries);

        let taxIS = 0;
        let taxTVA = 0;
        let taxSocial = annualSalaries * SOCIAL_RATE;

        if (regime === 'synthetique') {
            taxIS = annualTurnover * IS_SYNT_RATE;
            taxTVA = 0; // Pas de TVA en synthétique
        } else {
            taxIS = annualProfit * IS_REEL_RATE;
            // TVA simplifiée: sur la marge brute hors salaires
            taxTVA = Math.max(0, (annualTurnover - annualExpenses) * TVA_RATE);
        }

        const totalTaxes = taxIS + taxTVA + taxSocial;
        const netProfit = annualProfit - (regime === 'reel' ? taxIS : 0); // En synthétique l'IS est une charge mais bon, simplifions le net

        // Pression fiscale = Total Prélèvements / CA
        const pressure = annualTurnover > 0 ? (totalTaxes / annualTurnover) * 100 : 0;

        return {
            taxIS,
            taxTVA,
            taxSocial,
            totalTaxes,
            netProfit,
            pressure
        };
    }, [turnover, expenses, salaries, regime, multiplier]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('fr-MG', { style: 'currency', currency: 'MGA', maximumFractionDigits: 0 }).format(val * displayMultiplier);
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-haylalana-text-tertiary hover:text-haylalana-brand -ml-2">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Retour au Dashboard
                </Button>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-haylalana-heading-primary flex items-center gap-2">
                        <Calculator className="w-8 h-8 text-haylalana-brand" />
                        Simulateur de Charges
                    </h1>
                    <p className="text-haylalana-text-secondary mt-1">Estimez vos prélèvements fiscaux et sociaux en temps réel.</p>
                </div>
                <Button variant="outline" className="gap-2 border-haylalana-brand text-haylalana-brand hover:bg-haylalana-brand hover:text-white">
                    <Download className="w-4 h-4" /> Exporter la simulation
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Colonne Gauche : Hypothèses */}
                <div className="lg:col-span-5 space-y-6">
                    <Card className="border-haylalana-border-primary shadow-md">
                        <CardHeader className="bg-haylalana-bg-secondary/50 border-b border-haylalana-border-primary">
                            <CardTitle className="text-lg text-haylalana-heading-primary">Vos Hypothèses</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 pt-6">

                            {/* Régime & Période */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Régime Fiscal</Label>
                                    <Select value={regime} onValueChange={setRegime}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="synthetique">Synthétique (AIRS)</SelectItem>
                                            <SelectItem value="reel">Réel</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Période affichée</Label>
                                    <Select value={period} onValueChange={setPeriod}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="monthly">Mensuel</SelectItem>
                                            <SelectItem value="yearly">Annuel</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <Label className="flex items-center gap-2"><Coins className="w-4 h-4" /> Chiffre d'Affaires HT</Label>
                                        <span className="text-sm font-semibold text-haylalana-brand">{formatCurrency(turnover * multiplier)}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100000000"
                                        step="500000"
                                        value={turnover}
                                        onChange={(e) => setTurnover(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-haylalana-brand"
                                    />
                                    <Input
                                        type="number"
                                        value={turnover}
                                        onChange={(e) => setTurnover(Number(e.target.value))}
                                        className="mt-1"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <Label className="flex items-center gap-2"><Building className="w-4 h-4" /> Charges Externes HT</Label>
                                        <span className="text-sm font-semibold text-haylalana-text-secondary">{formatCurrency(expenses * multiplier)}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max={turnover}
                                        step="100000"
                                        value={expenses}
                                        onChange={(e) => setExpenses(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-haylalana-text-secondary"
                                    />
                                    <Input
                                        type="number"
                                        value={expenses}
                                        onChange={(e) => setExpenses(Number(e.target.value))}
                                        className="mt-1"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <Label className="flex items-center gap-2"><Users className="w-4 h-4" /> Masse Salariale Brute</Label>
                                        <span className="text-sm font-semibold text-haylalana-text-secondary">{formatCurrency(salaries * multiplier)}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max={turnover}
                                        step="100000"
                                        value={salaries}
                                        onChange={(e) => setSalaries(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-haylalana-text-secondary"
                                    />
                                    <Input
                                        type="number"
                                        value={salaries}
                                        onChange={(e) => setSalaries(Number(e.target.value))}
                                        className="mt-1"
                                    />
                                </div>
                            </div>

                        </CardContent>
                    </Card>

                    <Card className="bg-blue-50 border-blue-100">
                        <CardContent className="p-4 flex gap-4">
                            <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold text-blue-800 text-sm">Le saviez-vous ?</h4>
                                <p className="text-blue-600 text-sm mt-1">
                                    {regime === 'synthetique'
                                        ? "En régime synthétique, l'impôt est calculé directement sur votre chiffre d'affaires, peu importe vos charges."
                                        : "En régime réel, vous pouvez déduire vos charges réelles pour diminuer votre bénéfice imposable."}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Colonne Droite : Résultats */}
                <div className="lg:col-span-7 space-y-6">

                    {/* Total à payer */}
                    <Card className="bg-haylalana-bg-secondary border-0 shadow-inner">
                        <CardContent className="p-8 text-center">
                            <h3 className="text-lg font-medium text-haylalana-text-secondary mb-2">Total Estimé à Payer ({period === 'monthly' ? 'par mois' : 'par an'})</h3>
                            <div className="text-4xl lg:text-5xl font-extrabold text-haylalana-heading-primary mb-4">
                                {formatCurrency(results.totalTaxes)}
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <span className="text-sm font-medium text-haylalana-text-tertiary">Pression Fiscale Apparente :</span>
                                <span className={`text-sm font-bold ${results.pressure > 30 ? 'text-red-500' : 'text-green-600'}`}>
                                    {results.pressure.toFixed(1)}%
                                </span>
                            </div>
                            <Progress value={Math.min(100, results.pressure * 2)} className="h-2 w-1/2 mx-auto mt-4 bg-gray-300" />
                        </CardContent>
                    </Card>

                    {/* Détail */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Card className="border-haylalana-border-primary hover:border-haylalana-brand transition-colors">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-haylalana-text-secondary">Impôts (IR / IS)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-haylalana-heading-primary">{formatCurrency(results.taxIS)}</div>
                                <p className="text-xs text-haylalana-text-tertiary mt-1">
                                    {regime === 'synthetique' ? '5% du CA' : '20% du Bénéfice'}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-haylalana-border-primary hover:border-haylalana-brand transition-colors">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-haylalana-text-secondary">TVA à reverser</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-haylalana-heading-primary">{formatCurrency(results.taxTVA)}</div>
                                <p className="text-xs text-haylalana-text-tertiary mt-1">
                                    {regime === 'synthetique' ? 'Non assujetti' : '20% sur Valeur Ajoutée'}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-haylalana-border-primary hover:border-haylalana-brand transition-colors">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-haylalana-text-secondary">Charges Sociales</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-haylalana-heading-primary">{formatCurrency(results.taxSocial)}</div>
                                <p className="text-xs text-haylalana-text-tertiary mt-1">~14% Part Patronale</p>
                            </CardContent>
                        </Card>
                    </div>


                    <Card className="bg-green-50/50 border-green-100">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-green-800 text-lg">Reste à vivre (Net estimé)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-green-700">{formatCurrency(results.netProfit - results.totalTaxes + results.taxIS)}</div>
                            {/* Petit hack calcul: results.netProfit a déjà déduit l'IS en Réel, mais totalTaxes inclut IS.
                                    Recalcul propre : CA - Charges - Salaires - Taxes Totales
                                */}
                            <p className="text-sm text-green-600 mt-2">
                                C'est ce qu'il reste dans la trésorerie après paiement de toutes les charges et impôts simulés.
                            </p>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
}
