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

    // Couleurs par type
    const typeColors = {
        'Avocat': 'bg-blue-100 text-blue-700 border-blue-300',
        'Notaire': 'bg-green-100 text-green-700 border-green-300',
        'Huissier': 'bg-purple-100 text-purple-700 border-purple-300',
    };

    if (professionals.length === 0) {
        return (
            <div className="text-center py-16">
                <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun professionnel trouvé</h3>
                <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((prof) => (
                <Card
                    key={prof.id}
                    className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-blue-400 flex flex-col"
                >
                    <CardHeader className="pb-4">

                        <div className="flex items-start justify-between mb-4">

                            {/* Photo/Avatar */}
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                    {prof.photo}
                                </div>
                            </div>

                            {/* Statut disponibilité */}
                            <div className="flex items-center gap-1 text-xs">
                                {prof.available ? (
                                    <>
                                        <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                                        <span className="text-green-700 font-semibold">Disponible</span>
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="w-4 h-4 text-gray-400" aria-hidden="true" />
                                        <span className="text-gray-500 font-semibold">Non disponible</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Nom */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
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
                            <Badge variant="secondary" className="text-xs">
                                <Award className="w-3 h-3 mr-1" aria-hidden="true" />
                                {prof.experience}
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-4">

                        {/* Localisation */}
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                            <div>
                                <div className="font-semibold text-gray-900">{prof.city}</div>
                                <div className="text-xs">{prof.address}</div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone className="w-4 h-4 text-green-600" aria-hidden="true" />
                                <a href={`tel:${prof.phone}`} className="hover:text-blue-600 hover:underline">
                                    {prof.phone}
                                </a>
                            </div>

                            {prof.email && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Mail className="w-4 h-4 text-red-600" aria-hidden="true" />
                                    <a href={`mailto:${prof.email}`} className="hover:text-blue-600 hover:underline truncate">
                                        {prof.email}
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Spécialités */}
                        <div>
                            <div className="text-xs font-semibold text-gray-700 mb-2">Spécialités :</div>
                            <div className="flex flex-wrap gap-1">
                                {prof.specialties.map((specialty) => (
                                    <span
                                        key={specialty}
                                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200"
                                    >
                                        {specialty}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Langues */}
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Globe className="w-4 h-4" aria-hidden="true" />
                            <span>{prof.languages.join(', ')}</span>
                        </div>
                    </CardContent>

                    <CardFooter className="pt-4">
                        <Button
                            className="w-full bg-blue-600 hover:bg-blue-700 font-semibold"
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
