// src/components/home/quick-access-cards.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ageCategories = [
  {
    id: 'enfants',
    title: 'Enfants',
    description: 'Contenus adaptés pour les 6-12 ans',
    emoji: '🧒',
    href: '/contenus/enfants',
    gradient: 'from-pink-500 to-pink-600',
    hoverGradient: 'hover:from-pink-600 hover:to-pink-700',
  },
  {
    id: 'jeunes',
    title: 'Jeunes',
    description: 'Contenus pour les 13-17 ans',
    emoji: '👨‍🎓',
    href: '/contenus/jeunes',
    gradient: 'from-purple-500 to-purple-600',
    hoverGradient: 'hover:from-purple-600 hover:to-purple-700',
  },
  {
    id: 'adultes',
    title: 'Adultes',
    description: 'Contenus pour les 18 ans et plus',
    emoji: '👔',
    href: '/contenus/adultes',
    gradient: 'from-blue-600 to-blue-700',
    hoverGradient: 'hover:from-blue-700 hover:to-blue-800',
  },
];

export function QuickAccessCards() {
  return (
    <section 
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-labelledby="quick-access-title"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* En-tête de section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="quick-access-title" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
          >
            Choisissez votre catégorie
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Accédez rapidement aux contenus adaptés à votre âge
          </p>
        </div>
        
        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ageCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className={`
                group relative block rounded-2xl overflow-hidden
                bg-gradient-to-br ${category.gradient} ${category.hoverGradient}
                shadow-lg hover:shadow-2xl
                transform transition-all duration-300 ease-out
                hover:scale-[1.02] hover:-translate-y-1
                focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2
              `}
              aria-label={`Accéder aux contenus pour ${category.title.toLowerCase()}`}
            >
              {/* Contenu de la carte */}
              <div className="relative p-8 sm:p-10 text-white">
                
                {/* Effet de shine au hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-white" aria-hidden="true" />
                
                {/* Emoji / Icône */}
                <div className="text-6xl sm:text-7xl mb-6 transform group-hover:scale-110 transition-transform" aria-hidden="true">
                  {category.emoji}
                </div>
                
                {/* Titre */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  {category.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/90 mb-6 text-base sm:text-lg">
                  {category.description}
                </p>
                
                {/* Bouton/Lien avec shadcn/ui */}
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/20 p-0 h-auto font-semibold group-hover:gap-3 transition-all"
                  asChild
                >
                  <span className="inline-flex items-center gap-2">
                    Explorer
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
