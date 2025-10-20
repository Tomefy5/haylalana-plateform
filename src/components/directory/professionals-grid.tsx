// src/components/directory/professionals-grid.tsx
import { Professional } from '@/lib/mock-data-directory';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Award, Globe, CheckCircle, XCircle } from 'lucide-react';

interface ProfessionalsGridProps {
    professionals: Professional[];
}

export function ProfessionalsGrid({ professionals }: ProfessionalsGridProps) {

    // Couleurs par type avec palette Haylalàna
    const typeColors = {
        'Avocat': 'bg-haylalana-brand/10 text-haylalana-brand border-haylalana-brand/30',
        'Notaire': 'bg-haylalana-success-bg text-haylalana-success border-haylalana-success/30',
        'Huissier': 'bg-haylalana-accent/10 text-haylalana-accent border-haylalana-accent/30',
    };

    if (professionals.length === 0) {
        return (
            <div className="text-center py-16">
                <MapPin className="w-16 h-16 text-haylalana-border-secondary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-haylalana-heading-primary mb-2">Aucun professionnel trouvé</h3>
                <p className="text-haylalana-text-tertiary">Essayez de modifier vos critères de recherche</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((prof) => (
                <Card
                    key={prof.id}
                    className="hover:shadow-xl transition-all duration-300 group border-2 border-haylalana-border-primary hover:border-haylalana-brand flex flex-col"
                >
                    <CardHeader className="pb-4">

                        <div className="flex items-start justify-between mb-4">

                            {/* Photo/Avatar avec gradient Haylalàna */}
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm text-haylalana-brand rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform border border-haylalana-border-primary shadow-lg">
                                    {prof.photo}
                                </div>

                            </div>

                            {/* Statut disponibilité */}
                            <div className="flex items-center gap-1 text-xs">
                                {prof.available ? (
                                    <>
                                        <CheckCircle className="w-4 h-4 text-haylalana-success" aria-hidden="true" />
                                        <span className="text-haylalana-success font-semibold">Disponible</span>
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="w-4 h-4 text-haylalana-text-muted" aria-hidden="true" />
                                        <span className="text-haylalana-text-muted font-semibold">Non disponible</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Nom */}
                        <h3 className="text-xl font-bold text-haylalana-heading-primary mb-2 group-hover:text-haylalana-brand transition-colors">
                            {prof.name}
                        </h3>

                        {/* Type et expérience */}
                        <div className="flex flex-wrap gap-2 mb-3">
                            <Badge
                                className={`text-xs font-semibold border ${typeColors[prof.type]}`}
                                variant="outline"
                            >
                                {prof.type}
                            </Badge>
                            <Badge variant="secondary" className="text-xs bg-haylalana-bg-secondary text-haylalana-text-primary border-haylalana-border-primary">
                                <Award className="w-3 h-3 mr-1" aria-hidden="true" />
                                {prof.experience}
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-4">

                        {/* Localisation */}
                        <div className="flex items-start gap-2 text-sm text-haylalana-text-secondary">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-haylalana-brand" aria-hidden="true" />
                            <div>
                                <div className="font-semibold text-haylalana-heading-primary">{prof.city}</div>
                                <div className="text-xs">{prof.address}</div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-haylalana-text-secondary">
                                <Phone className="w-4 h-4 text-haylalana-success" aria-hidden="true" />
                                <a href={`tel:${prof.phone}`} className="hover:text-haylalana-brand hover:underline">
                                    {prof.phone}
                                </a>
                            </div>

                            {prof.email && (
                                <div className="flex items-center gap-2 text-sm text-haylalana-text-secondary">
                                    <Mail className="w-4 h-4 text-haylalana-brand" aria-hidden="true" />
                                    <a href={`mailto:${prof.email}`} className="hover:text-haylalana-brand hover:underline truncate">
                                        {prof.email}
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Spécialités */}
                        <div>
                            <div className="text-xs font-semibold text-haylalana-heading-secondary mb-2">Spécialités :</div>
                            <div className="flex flex-wrap gap-1">
                                {prof.specialties.map((specialty) => (
                                    <span
                                        key={specialty}
                                        className="px-2 py-1 bg-haylalana-bg-secondary text-haylalana-text-primary text-xs rounded-md border border-haylalana-border-primary"
                                    >
                                        {specialty}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Langues */}
                        <div className="flex items-center gap-2 text-xs text-haylalana-text-tertiary">
                            <Globe className="w-4 h-4" aria-hidden="true" />
                            <span>{prof.languages.join(', ')}</span>
                        </div>
                    </CardContent>

                    <CardFooter className="pt-4">
                        <Button
                            className="w-full bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold disabled:bg-haylalana-text-muted disabled:cursor-not-allowed"
                            disabled={!prof.available}
                            asChild={prof.available}
                        >
                            {prof.available ? (
                                <a href={`tel:${prof.phone}`}>
                                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                                    Contacter
                                </a>
                            ) : (
                                <>Non disponible actuellement</>
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
