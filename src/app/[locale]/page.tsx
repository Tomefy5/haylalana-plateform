import { HeroSection } from "@/components/home/hero-section";
import { QuickAccessCards } from "@/components/home/quick-access-cards";
import { ValuesObjectivesSection } from "@/components/home/values-objectives-section";

export default function Home() {


  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Section Valeurs et Objectifs */}
      <ValuesObjectivesSection />

      {/* Accès rapide par âge */}
      <QuickAccessCards />
    </main>

  );
}
