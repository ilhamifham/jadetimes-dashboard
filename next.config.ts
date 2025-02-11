import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth?view=log-in",
        permanent: true,
      },
      {
        source: "/dashboard/:user",
        destination: "/dashboard/:user/posts",
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
