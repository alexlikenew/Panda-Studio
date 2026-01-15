import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  serverExternalPackages: ["jsdom", "isomorphic-dompurify"],
  async redirects() {
    return [];
  },
};

export default nextConfig;
