// src/components/home/hero-section.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <header className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      
      {/* Background pattern (optionnel) */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" aria-hidden="true" />
      
      {/* Overlay avec effet de gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" aria-hidden="true" />
      
      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Badge ou tag (optionnel) */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <Sparkles className="w-4 h-4 text-yellow-300" aria-hidden="true" />
          <span className="text-sm font-medium">100% gratuit et accessible</span>
        </div>
        
        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Vos droits à Madagascar,{' '}
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            expliqués simplement
          </span>
        </h1>
        
        {/* Sous-titre */}
        <p className="text-lg sm:text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed text-blue-50">
          Haylalàna démocratise l'accès au droit en rendant les informations 
          juridiques accessibles à tous, dans un langage clair et compréhensible.
        </p>
        
        {/* Description secondaire */}
        <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto text-blue-100">
          Que vous soyez enfant, jeune ou adulte, découvrez vos droits 
          et apprenez à les faire respecter.
        </p>
        
        {/* Boutons avec shadcn/ui */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          
          {/* Bouton principal avec asChild pour Link */}
          <Button 
            asChild 
            size="lg"
            className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold text-lg px-8 py-6 h-auto"
          >
            <Link href="/contenus">
              Découvrir mes droits
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
          
          {/* Bouton secondaire */}
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold text-lg px-8 py-6 h-auto"
          >
            <Link href="/a-propos">
              En savoir plus
            </Link>
          </Button>
        </div>
        
        {/* Statistiques / Badges sociaux */}
        <div className="flex flex-wrap gap-8 justify-center items-center text-sm sm:text-base">
          
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-yellow-400/20">
              <Users className="w-5 h-5 text-yellow-300" aria-hidden="true" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">1000+</div>
              <div className="text-blue-200 text-xs">Utilisateurs</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-yellow-400/20">
              <BookOpen className="w-5 h-5 text-yellow-300" aria-hidden="true" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">50+</div>
              <div className="text-blue-200 text-xs">Articles</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-yellow-400/20">
              <Sparkles className="w-5 h-5 text-yellow-300" aria-hidden="true" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">100%</div>
              <div className="text-blue-200 text-xs">Gratuit</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
