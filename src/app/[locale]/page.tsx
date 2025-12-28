import { HeroSection } from "@/components/home/hero-section";
import { QuickAccessCards } from "@/components/home/quick-access-cards";
import { ValuesSection } from "@/components/home/values-section";
import { ObjectivesSection } from "@/components/home/objectives-section";

export default function Home() {


  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      <section className="py-16 sm:py-20 lg:py-24 bg-haylalana-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Valeurs */}
          <ValuesSection />

          {/* Section Objectifs */}
          <ObjectivesSection />
        </div>
      </section>

      {/* Accès rapide par âge */}
      <QuickAccessCards />
    </main>

  );
}
