// src/components/home/hero-section.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <header className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-haylalana-bg-primary via-haylalana-brand/5 to-haylalana-bg-primary">

      {/* Patterns radiaux */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(133,7,36,0.08),transparent_50%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(184,16,109,0.06),transparent_50%)]" aria-hidden="true" />

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">

        {/* Logo Haylalàna dans un cercle décoratif */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Cercle extérieur animé */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-haylalana-brand/20 to-haylalana-accent/20 blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" aria-hidden="true" />

            {/* Cercle principal avec logo */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-white to-haylalana-bg-secondary border-4 border-haylalana-brand/30 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 animate-fade-in">
              <Image
                src="/icons/haylalana-icon-ss-bg.png"
                alt="Logo Haylalàna"
                width={180}
                height={180}
                className="object-contain p-4"
                priority
              />
            </div>

            {/* Éléments décoratifs autour du cercle */}
            <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-haylalana-brand/10 border-2 border-haylalana-brand/30 animate-bounce" aria-hidden="true" style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
            <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-full bg-haylalana-accent/10 border-2 border-haylalana-accent/30 animate-bounce" aria-hidden="true" style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
          </div>
        </div>


        {/* Badge bordeaux solide */}
        <div className="inline-flex items-center gap-2 mb-10 px-5 py-3 rounded-full bg-haylalana-brand text-white shadow-lg">
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm font-medium">100% gratuit et accessible</span>
        </div>

        {/* Titre avec gradient */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10 leading-tight text-haylalana-heading-primary">
          Vos droits à Madagascar,{' '}
          <span className="text-gradient-brand">
            expliqués simplement
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed text-haylalana-text-secondary">
          Haylalàna démocratise l'accès au droit en rendant les informations
          juridiques accessibles à tous, dans un langage clair et compréhensible.
        </p>

        {/* Description secondaire */}
        <p className="text-base sm:text-lg mb-14 max-w-2xl mx-auto text-haylalana-text-tertiary">
          Que vous soyez enfant, jeune ou adulte, découvrez vos droits
          et apprenez à les faire respecter.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">

          <Button
            asChild
            size="lg"
            className="bg-haylalana-brand hover:bg-haylalana-brand-dark text-white font-semibold text-lg px-10 py-7 h-auto transition-all hover:scale-105"
          >
            <Link href="/contenus">
              Découvrir mes droits
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-haylalana-brand text-haylalana-brand hover:bg-haylalana-brand hover:text-white font-semibold text-lg px-10 py-7 h-auto transition-all"
          >
            <Link href="/a-propos">
              En savoir plus
            </Link>
          </Button>
        </div>

        {/* Statistiques */}
        <div className="flex flex-wrap gap-12 justify-center items-center text-sm sm:text-base">

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-haylalana-brand/10">
              <Users className="w-5 h-5 text-haylalana-brand" aria-hidden="true" />
            </div>
            <div className="text-left">
              <div className="font-bold text-haylalana-heading-primary text-lg">1000+</div>
              <div className="text-haylalana-text-tertiary text-xs mt-1">Utilisateurs</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-haylalana-brand/10">
              <BookOpen className="w-5 h-5 text-haylalana-brand" aria-hidden="true" />
            </div>
            <div className="text-left">
              <div className="font-bold text-haylalana-heading-primary text-lg">50+</div>
              <div className="text-haylalana-text-tertiary text-xs mt-1">Articles</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-haylalana-brand/10">
              <Sparkles className="w-5 h-5 text-haylalana-brand" aria-hidden="true" />
            </div>
            <div className="text-left">
              <div className="font-bold text-haylalana-heading-primary text-lg">100%</div>
              <div className="text-haylalana-text-tertiary text-xs mt-1">Gratuit</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
