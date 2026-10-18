import React from 'react';
import Link from 'next/link';
import { FOUNDER_INFO } from '@/data/academyData';
import { ArrowRight } from 'lucide-react';
import { N7BrandMark } from '@/components/N7BrandMark';

export function FounderManifesto() {
  return (
    <section className="technical-border curve-asymmetric p-6 sm:p-10 lg:p-12 bg-white space-y-6 shadow-xs border border-[#D9E6F0] relative overflow-hidden">
      {/* Subtle Contour Watermark */}
      <div
        className="absolute -right-10 -bottom-10 w-80 h-80 opacity-10 pointer-events-none bg-contain bg-no-repeat"
        style={{ backgroundImage: `url('/brand/contour-blob.png')` }}
      />
      <div className="flex items-center justify-between border-b border-[#D9E6F0] pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <N7BrandMark size="md" variant="gold" />
          <span className="label-mono px-3 py-1 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
            THE INSTITUTIONAL MANIFESTO
          </span>
        </div>
        <span className="label-mono text-xs text-[#64748B] hidden sm:block">
          DIR: ABDULLAH QAASIM-FALADE
        </span>
      </div>

      <div className="max-w-4xl space-y-5 relative z-10">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#12345B] tracking-tight leading-tight">
          Mastery is the discipline of shipping real work.
        </h2>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#EEF7FC]/70 border-l-4 border-[#1769AA] text-[#1F2937] text-sm sm:text-base lg:text-lg leading-relaxed italic">
          &ldquo;We focus on genuine capability. At NIT7ER Academy, you build software that runs in production, sustain deep focus, write clear technical arguments, and master fundamental computing.&rdquo;
        </div>

        <div className="pt-4 border-t border-[#D9E6F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-display text-base font-bold text-[#12345B]">
              {FOUNDER_INFO.name}
            </h4>
            <p className="label-mono text-xs text-[#64748B] mt-0.5">
              {FOUNDER_INFO.title} {'//'} {FOUNDER_INFO.location}
            </p>
          </div>

          <Link
            href="/about"
            className="btn-press inline-flex items-center gap-2 px-5 py-2.5 bg-[#EEF7FC] hover:bg-[#D9E6F0] rounded-full text-xs sm:text-sm font-mono font-bold text-[#12345B] transition-colors self-start sm:self-auto"
          >
            <span>READ FOUNDER STORY &amp; THESIS</span>
            <ArrowRight className="w-4 h-4 text-[#E6AD3C]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
