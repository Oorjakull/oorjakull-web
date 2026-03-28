import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/ai",
        destination: "https://oorjakull-six.vercel.app/ai",
      },
      {
        source: "/ai/:path*",
        destination: "https://oorjakull-six.vercel.app/ai/:path*",
      },
      {
        source: "/api/:path*",
        destination: "https://oorjakull-backend.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
