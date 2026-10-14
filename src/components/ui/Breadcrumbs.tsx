import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono text-[#64748B]">
        <Link
          href="/"
          className="hover:text-[#12345B] flex items-center gap-1 transition-colors"
          title="Return to Home"
        >
          <Home className="w-3.5 h-3.5 text-[#1769AA]" />
          <span>Home</span>
        </Link>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-[#94A3B8] shrink-0" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#12345B] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#12345B] font-bold truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
