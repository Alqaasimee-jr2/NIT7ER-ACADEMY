import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({
  items,
  theme = 'light',
}: {
  items: BreadcrumbItem[];
  theme?: 'light' | 'dark';
}) {
  const baseUrl = 'https://nit7er-academy.vercel.app';

  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
      })),
    ],
  };

  const isDark = theme === 'dark';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`flex flex-wrap items-center gap-1.5 text-xs font-mono ${
          isDark ? 'text-white/70 mb-4' : 'text-[#64748B]'
        }`}
      >
        <Link
          href="/"
          className={`flex items-center gap-1 transition-colors ${
            isDark ? 'hover:text-white' : 'hover:text-[#12345B]'
          }`}
          title="Return to Home"
        >
          <Home className={`w-3.5 h-3.5 ${isDark ? 'text-[#E6AD3C]' : 'text-[#1769AA]'}`} />
          <span>Home</span>
        </Link>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight
              className={`w-3 h-3 shrink-0 ${isDark ? 'text-white/40' : 'text-[#94A3B8]'}`}
            />
            {item.href ? (
              <Link
                href={item.href}
                className={`transition-colors ${
                  isDark ? 'hover:text-white' : 'hover:text-[#12345B]'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`font-bold truncate max-w-[200px] sm:max-w-none ${
                  isDark ? 'text-[#E6AD3C]' : 'text-[#12345B]'
                }`}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
