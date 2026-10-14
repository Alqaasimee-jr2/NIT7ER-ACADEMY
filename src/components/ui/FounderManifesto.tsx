import React from 'react';
import Link from 'next/link';
import { FOUNDER_INFO } from '@/data/academyData';
import { ArrowRight } from 'lucide-react';
import { N7BrandMark } from '@/components/N7BrandMark';

export function FounderManifesto() {
  return (
    <section className="technical-border curve-asymmetric p-6 sm:p-10 bg-white space-y-6 shadow-xs border border-[#D9E6F0]">
      <div className="flex items-center justify-between border-b border-[#D9E6F0] pb-3">
        <div className="flex items-center gap-2">
          <N7BrandMark size="sm" variant="gold" />
          <span className="label-mono px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
            THE INSTITUTIONAL MANIFESTO
          </span>
        </div>
        <span className="label-mono text-[9px] text-[#64748B] hidden sm:block">
          DIR: ABDULLAH QAASIM-FALADE
        </span>
      </div>

      <div className="max-w-3xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black text-[#12345B] tracking-tight leading-tight">
          Mastery is not academic regurgitation. It is the ruthless discipline of shipping real systems.
        </h2>

        <div className="p-5 rounded-2xl bg-[#EEF7FC]/70 border-l-4 border-[#1769AA] text-[#1F2937] text-xs sm:text-sm leading-relaxed italic">
          &ldquo;Most educational institutions teach students to memorize answers for tests that have zero correlation with real market friction. At NIT7ER Academy, we operate as a studio incubator. You write code that runs in production, you log reality without to-do list guilt, you write prose that convinces decision-makers, and you demystify computing from the silicon up.&rdquo;
        </div>

        <div className="pt-4 border-t border-[#D9E6F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-[#12345B]">
              {FOUNDER_INFO.name}
            </h4>
            <p className="label-mono text-[10px] text-[#64748B] mt-0.5">
              {FOUNDER_INFO.title} // {FOUNDER_INFO.location}
            </p>
          </div>

          <Link
            href="/about"
            className="btn-press inline-flex items-center gap-2 px-4 py-2 bg-[#EEF7FC] hover:bg-[#D9E6F0] rounded-full text-xs font-mono font-bold text-[#12345B] transition-colors"
          >
            <span>READ FOUNDER STORY &amp; THESIS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
