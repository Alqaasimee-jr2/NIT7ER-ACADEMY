import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NIT7ER Academy — Systems & Mind Institute',
    short_name: 'NIT7ER Academy',
    description:
      'The institute of applied creative technology, systems architecture, cognitive focus, and computer foundations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFCFE',
    theme_color: '#12345B',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
