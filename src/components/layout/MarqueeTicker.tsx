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
      className="relative w-full overflow-hidden border-y border-[#12345B]/10 bg-[#12345B] py-2.5 text-white select-none"
      aria-label="Academic Curriculum Tracks"
    >
      {/* Left and Right Edge Fade Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-16 bg-gradient-to-r from-[#12345B] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-16 bg-gradient-to-l from-[#12345B] to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-6 sm:gap-10 hover:[animation-play-state:paused]">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <Link
            key={`${item.code}-${idx}`}
            href={item.href}
            className="group flex items-center gap-2.5 whitespace-nowrap rounded-full px-2 py-0.5 transition-colors hover:bg-white/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E6AD3C] group-hover:scale-125 transition-transform" />
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#E6AD3C]">
              [{item.code}]
            </span>
            <span className="font-mono text-xs font-medium tracking-wider text-white/85 uppercase group-hover:text-white transition-colors">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
