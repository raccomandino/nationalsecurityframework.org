import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: ['./node_modules'],
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;