import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "taxidumole.com",
      },
    ],
  },
};

export default nextConfig;
