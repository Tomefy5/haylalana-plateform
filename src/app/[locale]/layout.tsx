// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haylalàna - Plateforme juridique malgache",
  description: "Plateforme juridique accessible rendant le droit simple et compréhensible pour tous les Malgaches : enfants, jeunes et adultes. Contenus éducatifs, guides pratiques et ressources juridiques vulgarisées.",
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/haylalana-icon-192x192.png',
    apple: '/icons/haylalana-icon-192x192.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          {/* Navbar apparaît sur toutes les pages */}
          <Navbar />

          {/* Contenu de chaque page */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* Footer optionnel (à créer plus tard) */}
          {/* <Footer /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
