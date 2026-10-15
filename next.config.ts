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
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/academics', destination: '/programs', permanent: true },
      { source: '/curriculum', destination: '/programs', permanent: true },
      { source: '/faculties', destination: '/programs', permanent: true },
      { source: '/faculty', destination: '/team', permanent: true },
      { source: '/faculty/:facultyId', destination: '/programs/:facultyId', permanent: true },
      { source: '/directors', destination: '/team', permanent: true },
      { source: '/admissions', destination: '/apply', permanent: true },
      { source: '/intake', destination: '/apply', permanent: true },
      { source: '/story', destination: '/about', permanent: true },
      { source: '/manifesto', destination: '/about', permanent: true },
      { source: '/inquire', destination: '/contact', permanent: true },
      { source: '/consultation', destination: '/contact', permanent: true },
      { source: '/simulator', destination: '/flow7', permanent: true },
      { source: '/focus', destination: '/flow7', permanent: true },
    ];
  },
};

export default nextConfig;
