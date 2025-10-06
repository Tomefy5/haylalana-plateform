declare module "next-pwa" {
    import type { NextConfig } from "next";

    type PWAOptions = {
        dest?: string;
        register?: boolean;
        skipWaiting?: boolean;
        disable?: boolean;
        buildExcludes?: string[];
        [key: string]: any;
    };

    export default function withPWAInit(options: PWAOptions): (nextConfig: NextConfig) => NextConfig;
}