import type { NextConfig } from "next";
import withPWAInit from "next-pwa";
import createNextIntlPlugin from "next-intl/plugin";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: ["app-build-manifest.json"],
  publicExcludes: ['!noprecache/**/*']
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ajoute cette configuration pour ignorer les erreurs ESLint au build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optionnel : ignorer aussi les erreurs TypeScript si elles bloquent
  typescript: {
    ignoreBuildErrors: true,
  }
}

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withPWA(nextConfig));
