import { Button } from '@/components/ui/button';
import { User, Building2, CheckCircle } from 'lucide-react';

interface RoleSelectionProps {
    onSelectRole: (role: 'citizen' | 'pro') => void;
}

export function RoleSelection({ onSelectRole }: RoleSelectionProps) {
    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-haylalana-heading-primary mb-2">Qui êtes-vous ?</h2>
                <p className="text-haylalana-text-secondary">Choisissez le type de compte qui vous correspond</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Carte Citoyen */}
                <button
                    onClick={() => onSelectRole('citizen')}
                    className="group relative p-6 text-left border-2 border-haylalana-border-primary rounded-xl hover:border-haylalana-brand hover:bg-haylalana-brand/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-haylalana-brand/20 shadow-sm hover:shadow-lg"
                >
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-haylalana-brand">
                        <CheckCircle className="w-6 h-6" />
                    </div>

                    <div className="w-12 h-12 rounded-full bg-haylalana-brand/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <User className="w-6 h-6 text-haylalana-brand" />
                    </div>

                    <h3 className="text-lg font-bold text-haylalana-heading-primary mb-2">Citoyen / Étudiant</h3>
                    <p className="text-sm text-haylalana-text-secondary leading-relaxed">
                        Pour ceux qui veulent apprendre leurs droits, suivre des quiz et consulter des guides pratiques.
                    </p>

                    <div className="mt-4 pt-4 border-t border-haylalana-border-primary/50">
                        <span className="text-xs font-semibold text-haylalana-brand uppercase tracking-wider">Avantage clé</span>
                        <p className="text-sm font-medium text-haylalana-heading-secondary mt-1">Suivez vos progrès personnels</p>
                    </div>
                </button>

                {/* Carte Pro */}
                <button
                    onClick={() => onSelectRole('pro')}
                    className="group relative p-6 text-left border-2 border-haylalana-border-primary rounded-xl hover:border-haylalana-brand hover:bg-haylalana-brand/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-haylalana-brand/20 shadow-sm hover:shadow-lg"
                >
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-haylalana-brand">
                        <CheckCircle className="w-6 h-6" />
                    </div>

                    <div className="w-12 h-12 rounded-full bg-haylalana-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Building2 className="w-6 h-6 text-haylalana-accent" />
                    </div>

                    <h3 className="text-lg font-bold text-haylalana-heading-primary mb-2">Entreprise / Pro</h3>
                    <p className="text-sm text-haylalana-text-secondary leading-relaxed">
                        Pour les startups et PME qui veulent gérer leur conformité et accéder aux outils professionnels.
                    </p>

                    <div className="mt-4 pt-4 border-t border-haylalana-border-primary/50">
                        <span className="text-xs font-semibold text-haylalana-accent uppercase tracking-wider">Avantage clé</span>
                        <p className="text-sm font-medium text-haylalana-heading-secondary mt-1">Gérez vos obligations légales</p>
                    </div>
                </button>
            </div>
        </div>
    );
}
