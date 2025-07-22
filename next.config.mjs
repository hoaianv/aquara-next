/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
