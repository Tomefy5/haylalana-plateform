import type { NextConfig } from "next";
import withPWAInit from "next-pwa";
import createNextIntlPlugin from "next-intl/plugin";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development"
});

const nextConfig: NextConfig = {
  reactStrictMode: true
}

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withPWA(nextConfig));