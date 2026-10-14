import React from 'react';
import Link from 'next/link';
import { FOUNDER_INFO } from '@/data/academyData';
import { ArrowRight, Sparkles } from 'lucide-react';
import { N7BrandMark } from '@/components/N7BrandMark';

export function FounderManifesto() {
  return (
    <section className="technical-border p-6 sm:p-10 bg-white space-y-6">
      <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-3">
        <div className="flex items-center gap-2">
          <N7BrandMark size="sm" variant="gold" />
          <span className="label-mono text-[#C9A84C]">THE INSTITUTIONAL MANIFESTO</span>
        </div>
        <span className="label-mono text-[9px] text-[#71717A] hidden sm:block">
          DIR: ABDULLAH QAASIM-FALADE
        </span>
      </div>

      <div className="max-w-3xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black text-[#121212] tracking-tight leading-tight">
          Mastery is not academic regurgitation. It is the ruthless discipline of shipping real systems.
        </h2>

        <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed">
          &ldquo;Most educational institutions teach students to memorize answers for tests that have zero correlation with real market friction. At NIT7ER Academy, we operate as a studio incubator. You write code that runs in production, you log reality without to-do list guilt, you write prose that convinces decision-makers, and you demystify computing from the silicon up.&rdquo;
        </p>

        <div className="pt-4 border-t border-[#E5E5E0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-[#121212]">
              {FOUNDER_INFO.name}
            </h4>
            <p className="label-mono text-[10px] text-[#71717A] mt-0.5">
              {FOUNDER_INFO.title} // {FOUNDER_INFO.location}
            </p>
          </div>

          <Link
            href="/about"
            className="gold-link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#121212]"
          >
            <span>READ FOUNDER STORY &amp; THESIS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
