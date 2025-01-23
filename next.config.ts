import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/user/blog/posts",
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
