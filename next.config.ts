import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
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
    forceSwcTransforms: false,
  },
  webpack: (config) => {
    return config;
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'obrigado.highwayhack-instrutorivo.store' }],
          destination: '/obrigado/:path*',
        },
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'upsell.highwayhack-instrutorivo.store' }],
          destination: '/upsell/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
