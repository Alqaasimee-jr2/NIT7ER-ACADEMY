import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nit7er-academy.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // AI & Generative Search Engine Optimization (GEO / AEO)
      {
        userAgent: [
          'Google-Extended',
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Applebot-Extended',
          'CCBot',
        ],
        allow: ['/', '/programs', '/team', '/labs', '/about', '/apply', '/contact', '/flow7'],
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
