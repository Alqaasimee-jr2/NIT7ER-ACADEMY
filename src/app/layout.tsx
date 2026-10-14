import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
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
  ],
  authors: [{ name: 'Abdullah Qaasim-Falade' }],
  metadataBase: new URL('https://nit7er-academy.vercel.app'),
  openGraph: {
    title: 'NIT7ER Academy — Creative Technology, Systems & Mind Institute',
    description:
      'A high-performance modern academy for self-driven builders, creators, and entrepreneurs. Fusing full-stack software engineering, Flow7 cognitive systems, structured writing, and computer education.',
    siteName: 'NIT7ER Academy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIT7ER Academy — Creative Technology, Systems & Mind Institute',
    description:
      'A high-performance modern academy for self-driven builders, creators, and entrepreneurs.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col selection:bg-amber-100 selection:text-[#12345B]">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
