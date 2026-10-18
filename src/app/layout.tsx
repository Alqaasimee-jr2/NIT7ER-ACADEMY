import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MarqueeTicker } from '@/components/layout/MarqueeTicker';
import { JsonLd } from '@/components/seo/JsonLd';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { ScrollToTop, NavigationScrollReset } from '@/components/ui/QuickUtils';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const fontSans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

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
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#FAFCFE] text-[#1F2937] font-sans antialiased flex flex-col selection:bg-[#EEF7FC] selection:text-[#12345B]">
        <NavigationScrollReset />
        <Navbar />
        <MarqueeTicker />
        <main className="flex-1 max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-8 sm:py-12 lg:py-16 space-y-14 sm:space-y-20">
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
