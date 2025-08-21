import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.flaticon.com',
      },
    ],
  },
};

export default nextConfig;
