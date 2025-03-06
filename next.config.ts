import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      domains: ["bibaanbackend.webspulses.com"], // ✅ Add your external domain here
   },
   typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
