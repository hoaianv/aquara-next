/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    formats: ["image/webp"],
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24,
    domains: ["127.0.0.1", "192.168.245.174", "api.ecoflowvn.vn"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "uploads/**",
      },

      {
        protocol: "http",
        hostname: "192.168.245.174",
        port: "8030",
        pathname: "uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.ecoflowvn.vn",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
