import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/dashboard/posts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
