import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js");

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
  experimental: {
    allowedDevOrigins: ["3000-2422d887-76b9-466c-8ef5-5a60a53eb71e.orchids.cloud"],
    turbo: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [LOADER],
        },
      },
    },
  },
  devIndicators: {
    appIsrStatus: false,
  },
  serverExternalPackages: [],
};

export default nextConfig;
