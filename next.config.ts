import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: '/academics', destination: '/programs', permanent: true },
      { source: '/curriculum', destination: '/programs', permanent: true },
      { source: '/faculties', destination: '/programs', permanent: true },
      { source: '/admissions', destination: '/apply', permanent: true },
      { source: '/intake', destination: '/apply', permanent: true },
      { source: '/team', destination: '/about', permanent: true },
      { source: '/story', destination: '/about', permanent: true },
      { source: '/manifesto', destination: '/about', permanent: true },
      { source: '/inquire', destination: '/contact', permanent: true },
      { source: '/consultation', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
