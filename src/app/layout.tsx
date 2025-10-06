import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haylalàna",
  description: "Plateforme juridique accessible rendant le droit simple et compréhensible pour tous les Malgaches : enfants, jeunes et adultes. Contenus éducatifs, guides pratiques et ressources juridiques vulgarisées.",
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/haylalana-icon-192x192.png',
    apple: '/icons/haylalana-icon-192x192.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
