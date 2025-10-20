// src/components/home/quick-access-cards.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Baby, GraduationCap, Briefcase } from 'lucide-react';

const ageCategories = [
  {
    id: 'enfants',
    title: 'Enfants',
    description: 'Contenus adaptés pour les 6-12 ans',
    icon: Baby,
    href: '/contenus/enfants',
  },
  {
    id: 'jeunes',
    title: 'Jeunes',
    description: 'Contenus pour les 13-17 ans',
    icon: GraduationCap,
    href: '/contenus/jeunes',
  },
  {
    id: 'adultes',
    title: 'Adultes',
    description: 'Contenus pour les 18 ans et plus',
    icon: Briefcase,
    href: '/contenus/adultes',
  },
];

export function QuickAccessCards() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-haylalana-bg-secondary"
      aria-labelledby="quick-access-title"
    >
      <div className="container mx-auto max-w-7xl">

        {/* En-tête de section */}
        <div className="text-center mb-12 sm:mb-16">

          {/* Badge décoratif */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-haylalana-brand/10 border border-haylalana-brand/30">
            <span className="text-sm font-semibold text-haylalana-brand">Accès rapide</span>
          </div>

          <h2
            id="quick-access-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-haylalana-heading-primary"
          >
            Choisissez votre catégorie
          </h2>

          <p className="text-base sm:text-lg text-haylalana-text-secondary max-w-2xl mx-auto">
            Accédez rapidement aux contenus adaptés à votre âge
          </p>
        </div>

        {/* Grille de cartes uniformes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ageCategories.map((category) => {
            const IconComponent = category.icon;

            return (
              <Link
                key={category.id}
                href={category.href}
                className="
                  group relative block rounded-2xl overflow-hidden
                  bg-haylalana-bg-primary border-2 border-haylalana-border-primary
                  hover:border-haylalana-brand hover:shadow-xl
                  transform transition-all duration-300 ease-out
                  hover:scale-[1.02] hover:-translate-y-1
                  focus:outline-none focus:ring-4 focus:ring-haylalana-brand focus:ring-offset-2
                "
                aria-label={`Accéder aux contenus pour ${category.title.toLowerCase()}`}
              >
                {/* Contenu de la carte */}
                <div className="relative p-8 sm:p-10">

                  {/* Icône avec fond coloré */}
                  <div className="
                    w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-2xl
                    bg-gradient-to-br from-haylalana-brand to-haylalana-brand-dark
                    flex items-center justify-center
                    transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                  ">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-haylalana-heading-accent">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-haylalana-text-secondary mb-6 text-base sm:text-lg leading-relaxed">
                    {category.description}
                  </p>

                  {/* Bouton d'action */}
                  <div className="inline-flex items-center gap-2 text-haylalana-brand font-semibold group-hover:gap-3 transition-all">
                    Explorer
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>

                {/* Ligne décorative en bas */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-haylalana-brand to-haylalana-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true" />
              </Link>
            );
          })}
        </div>

        {/* Section supplémentaire */}
        <div className="mt-12 text-center">
          <p className="text-haylalana-text-secondary mb-6">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-haylalana-border-secondary text-haylalana-text-primary hover:border-haylalana-brand hover:text-haylalana-brand font-semibold"
          >
            <Link href="/contenus">
              Voir tous les contenus
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
