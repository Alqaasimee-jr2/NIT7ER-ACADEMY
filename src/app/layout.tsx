import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MarqueeTicker } from '@/components/layout/MarqueeTicker';
import { JsonLd } from '@/components/seo/JsonLd';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { ScrollToTop } from '@/components/ui/QuickUtils';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | NIT7ER Academy',
    default: 'NIT7ER Academy — Creative Technology, Systems & Mind Institute',
  },
  description:
    'A high-performance modern academy for self-driven builders, creators, and entrepreneurs. Fusing full-stack software engineering, Flow7 cognitive systems, structured writing, and computer education.',
  keywords: [
    'NIT7ER',
    'NIT7ER Academy',
    'Creative Technology',
    'Software Engineering',
    'Flow7',
    'Cognitive Performance',
    'Technical Writing',
    'Computer Education',
    'Lagos Tech Institute',
    'Abdullah Qaasim-Falade',
    'Full Stack Web',
    'Flutter Mobile',
    'Applied AI Integration',
  ],
  authors: [{ name: 'Abdullah Qaasim-Falade', url: 'https://github.com/Alqaasimee-jr2' }],
  creator: 'Abdullah Qaasim-Falade',
  publisher: 'NIT7ER Studio',
  metadataBase: new URL('https://nit7er-academy.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NIT7ER Academy — Creative Technology, Systems & Mind Institute',
    description:
      'A high-performance modern academy for self-driven builders, creators, and entrepreneurs. Fusing full-stack software engineering, Flow7 cognitive systems, structured writing, and computer education.',
    siteName: 'NIT7ER Academy',
    url: 'https://nit7er-academy.vercel.app',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/brand/headers/header-glitch-gold-text-tight.png',
        width: 1200,
        height: 630,
        alt: 'NIT7ER Academy — Systems & Mind Institute',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIT7ER Academy — Creative Technology, Systems & Mind Institute',
    description:
      'A high-performance modern academy for self-driven builders, creators, and entrepreneurs.',
    creator: '@abdullah_qaasim',
    images: ['/brand/headers/header-glitch-gold-text-tight.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#FAFCFE] text-[#1F2937] flex flex-col selection:bg-[#EEF7FC] selection:text-[#12345B]">
        <Navbar />
        <MarqueeTicker />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
          {children}
        </main>
        <Footer />
        <CommandPalette />
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
