import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      "*.orchids.cloud",
      "localhost:3000"
    ],
  },
};

export default nextConfig;
