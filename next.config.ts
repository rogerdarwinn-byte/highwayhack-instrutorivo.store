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
        // Obrigado subdomain - root
        {
          source: '/',
          has: [{ type: 'host', value: 'obrigado.highwayhack-instrutorivo.store' }],
          destination: '/obrigado',
        },
        // Obrigado subdomain - paths
        {
          source: '/:path+',
          has: [{ type: 'host', value: 'obrigado.highwayhack-instrutorivo.store' }],
          destination: '/obrigado/:path+',
        },
        // Upsell subdomain - root
        {
          source: '/',
          has: [{ type: 'host', value: 'upsell.highwayhack-instrutorivo.store' }],
          destination: '/upsell',
        },
        // Upsell subdomain - paths
        {
          source: '/:path+',
          has: [{ type: 'host', value: 'upsell.highwayhack-instrutorivo.store' }],
          destination: '/upsell/:path+',
        },
      ],
    };
  },
};

export default nextConfig;
