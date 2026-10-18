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
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Applebot-Extended',
          'CCBot',
          'cohere-ai',
          'Bytespider',
        ],
        allow: [
          '/',
          '/programs',
          '/programs/creative-tech',
          '/programs/cognitive-performance',
          '/programs/writing-thought-leadership',
          '/programs/computer-education',
          '/team',
          '/labs',
          '/about',
          '/apply',
          '/contact',
          '/flow7',
          '/llms.txt',
          '/llms-full.txt',
        ],
        disallow: ['/api/apply', '/api/contact'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
