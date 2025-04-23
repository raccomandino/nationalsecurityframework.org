/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['via.placeholder.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
        },
      ],
    },
    // Add support for TypeScript path aliases
    webpack(config) {
      return config;
    },
  };
  
  module.exports = nextConfig;