// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#850724" }, // Haylalàna brand
    { media: "(prefers-color-scheme: dark)", color: "#A51845" },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: '%s | Haylalàna',
    default: 'Haylalàna - Plateforme juridique malgache',
  },
  description: "Plateforme juridique accessible rendant le droit simple et compréhensible pour tous les Malgaches : enfants, jeunes et adultes. Contenus éducatifs, guides pratiques et ressources juridiques vulgarisées.",
  keywords: ["droit", "madagascar", "juridique", "loi", "éducation", "citoyenneté", "malagasy", "haylalana", "avocat", "législation"],
  authors: [{ name: "Haylalàna Team" }],
  creator: "Haylalàna",
  publisher: "Haylalàna",
  metadataBase: new URL('https://haylalana.mg'), // Remplacer par l'URL réelle
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/haylalana-icon-192x192.png',
    apple: '/icons/haylalana-icon-192x192.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MG',
    url: 'https://haylalana.mg',
    title: 'Haylalàna - Vos droits expliqués simplement',
    description: 'Plateforme juridique accessible pour tous les Malgaches : enfants, jeunes et adultes. Apprenez vos droits simplement.',
    siteName: 'Haylalàna',
    images: [
      {
        url: '/og-image.jpg', // Image à créer
        width: 1200,
        height: 630,
        alt: 'Haylalàna - Plateforme juridique malgache',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haylalàna - Vos droits expliqués simplement',
    description: 'Plateforme juridique accessible pour tous les Malgaches. Apprenez vos droits simplement.',
    images: ['/twitter-image.jpg'], // Image à créer
    creator: '@haylalana',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Await params in Next.js 15+ (if applicable, otherwise standard access)
  // Assuming standard access for now, but Next.js 15 requires awaiting params.
  // Using Promise type for forward compatibility or if using Next 15.
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
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
