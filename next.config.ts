import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    allowedDevOrigins: [
      "3000-2422d887-76b9-466c-8ef5-5a60a53eb71e.orchids.cloud",
      "*.orchids.cloud",
      "localhost:3000"
    ],
  },
  devIndicators: {
    appIsrStatus: false,
  },
  serverExternalPackages: [],
};

export default nextConfig;
