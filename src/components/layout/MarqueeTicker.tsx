'use client';

import React from 'react';
import Link from 'next/link';
import { FACULTIES } from '@/data/academyData';

const TICKER_ITEMS = FACULTIES.flatMap((faculty) =>
  faculty.programs.map((program) => ({
    code: program.code,
    title: program.title,
    href: `/programs/${faculty.id}/${program.id}`,
  }))
);

export function MarqueeTicker() {
  return (
    <div
      className="relative w-full bg-[#EEF7FC] border-y border-[#D9E6F0] py-2.5 overflow-hidden select-none"
      aria-label="Academic Curriculum Tracks"
    >
      {/* Left and Right Edge Fade Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-16 bg-gradient-to-r from-[#EEF7FC] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-16 bg-gradient-to-l from-[#EEF7FC] to-transparent" />

      <div className="marquee-track flex items-center gap-8 sm:gap-10">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <Link
            key={`${item.code}-${idx}`}
            href={item.href}
            className="group flex items-center gap-2.5 shrink-0 whitespace-nowrap rounded-full px-2.5 py-0.5 transition-colors hover:bg-[#D9E6F0]/60"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6AD3C] group-hover:scale-125 transition-transform" />
            <span className="font-mono text-[11px] font-bold tracking-wider text-[#1769AA] group-hover:text-[#12345B] transition-colors">
              {item.code}:
            </span>
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-wider text-[#12345B] group-hover:text-[#1769AA] transition-colors">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
