// src/components/home/values-objectives-section.tsx
import { 
  Heart, 
  BookOpen, 
  Scale, 
  Users, 
  Target, 
  TrendingUp,
  Globe,
  Shield
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Données des valeurs
const values = [
  {
    id: 'accessibilite',
    title: 'Accessibilité',
    description: 'Rendre le droit accessible à tous les Malgaches, sans barrière de langage ou de coût.',
    icon: Heart,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
  },
  {
    id: 'education',
    title: 'Éducation',
    description: 'Former et sensibiliser chaque citoyen sur ses droits fondamentaux dès le plus jeune âge.',
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    id: 'justice',
    title: 'Justice',
    description: 'Promouvoir l\'équité et aider chacun à faire valoir ses droits légitimes.',
    icon: Scale,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    id: 'inclusion',
    title: 'Inclusion',
    description: 'Garantir que personne ne soit laissé pour compte dans l\'accès à l\'information juridique.',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
];

// Données des objectifs avec statistiques
const objectives = [
  {
    id: 'reach',
    title: 'Toucher 100 000 personnes',
    description: 'en 2 ans',
    icon: Users,
    stat: '100K+',
    color: 'text-blue-600',
  },
  {
    id: 'content',
    title: 'Créer 500 contenus',
    description: 'articles, vidéos et guides',
    icon: BookOpen,
    stat: '500+',
    color: 'text-purple-600',
  },
  {
    id: 'impact',
    title: 'Former 50 écoles',
    description: 'partenaires éducatifs',
    icon: Target,
    stat: '50+',
    color: 'text-green-600',
  },
  {
    id: 'growth',
    title: 'Expansion nationale',
    description: 'dans toutes les régions',
    icon: Globe,
    stat: '22',
    color: 'text-orange-600',
  },
];

export function ValuesObjectivesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Valeurs */}
        <div className="mb-20 sm:mb-24">
          
          {/* En-tête Valeurs */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
              <Shield className="w-4 h-4 text-blue-600" aria-hidden="true" />
              <span className="text-sm font-semibold text-blue-700">Nos valeurs</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Les principes qui nous guident
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Haylalàna est fondé sur des valeurs fortes qui orientent chaque décision 
              et chaque action pour servir au mieux la population malgache.
            </p>
          </div>
          
          {/* Grille des cartes de valeurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              
              return (
                <Card 
                  key={value.id}
                  className="border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group"
                >
                  <CardContent className="p-6 sm:p-8">
                    
                    {/* Icône */}
                    <div 
                      className={`
                        w-14 h-14 sm:w-16 sm:h-16 rounded-2xl 
                        ${value.bgColor} 
                        flex items-center justify-center mb-5
                        group-hover:scale-110 transition-transform duration-300
                      `}
                      aria-hidden="true"
                    >
                      <IconComponent className={`w-7 h-7 sm:w-8 sm:h-8 ${value.color}`} />
                    </div>
                    
                    {/* Titre */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Section Objectifs */}
        <div>
          
          {/* En-tête Objectifs */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-green-50 border border-green-200">
              <Target className="w-4 h-4 text-green-600" aria-hidden="true" />
              <span className="text-sm font-semibold text-green-700">Nos objectifs</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Notre vision pour Madagascar
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Des objectifs ambitieux mais réalisables pour transformer 
              l'accès au droit à Madagascar dans les années à venir.
            </p>
          </div>
          
          {/* Grille des objectifs avec stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {objectives.map((objective) => {
              const IconComponent = objective.icon;
              
              return (
                <div
                  key={objective.id}
                  className="relative group"
                >
                  {/* Carte avec effet de gradient au hover */}
                  <div className="
                    relative p-8 rounded-2xl border-2 border-gray-200
                    bg-gradient-to-br from-white to-gray-50
                    hover:border-blue-300 hover:shadow-xl
                    transition-all duration-300
                    overflow-hidden
                  ">
                    
                    {/* Effet de brillance au survol */}
                    <div className="
                      absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent
                      opacity-0 group-hover:opacity-20
                      transform -translate-x-full group-hover:translate-x-full
                      transition-all duration-1000
                    " aria-hidden="true" />
                    
                    {/* Contenu */}
                    <div className="relative z-10">
                      
                      {/* Icône */}
                      <div className="mb-4">
                        <IconComponent 
                          className={`w-10 h-10 ${objective.color} group-hover:scale-110 transition-transform`} 
                          aria-hidden="true"
                        />
                      </div>
                      
                      {/* Statistique en grand */}
                      <div className={`text-4xl sm:text-5xl font-bold mb-2 ${objective.color}`}>
                        {objective.stat}
                      </div>
                      
                      {/* Titre */}
                      <h3 className="text-lg sm:text-xl font-bold mb-1 text-gray-900">
                        {objective.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Call-to-action supplémentaire (optionnel) */}
          <div className="mt-12 text-center">
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Vous partagez notre vision ? Rejoignez-nous dans cette mission !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/nous-rejoindre"
                className="
                  inline-flex items-center gap-2 px-6 py-3 
                  bg-blue-600 text-white font-semibold rounded-lg
                  hover:bg-blue-700 transition-colors
                  focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2
                "
              >
                Nous rejoindre
                <TrendingUp className="w-5 h-5" aria-hidden="true" />
              </a>
              
              <a
                href="/partenaires"
                className="
                  inline-flex items-center gap-2 px-6 py-3
                  border-2 border-gray-300 text-gray-700 font-semibold rounded-lg
                  hover:border-blue-600 hover:text-blue-600 transition-colors
                  focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-offset-2
                "
              >
                Devenir partenaire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
