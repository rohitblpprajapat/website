import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'surajmarbles.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shubhstonex.com',
      },
      {
        protocol: 'https',
        hostname: 'rmmarbles.com',
      },
      {
        protocol: 'https',
        hostname: 'uploads-ssl.webflow.com',
      },
      {
        protocol: 'https',
        hostname: 'www.stonexglobal.com',
      },
      {
        protocol: 'https',
        hostname: 'wordpress-826134-4189514.cloudwaysapps.com',
      }
    ],
  },
};

export default nextConfig;
