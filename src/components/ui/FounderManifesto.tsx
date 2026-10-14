import React from 'react';
import Link from 'next/link';
import { FOUNDER_INFO } from '@/data/academyData';
import { GeometricShape, WordAccent } from '@/components/GeometricShapes';
import { ArrowRight, Quote, Sparkles } from 'lucide-react';

export function FounderManifesto() {
  return (
    <section className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
      <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-10 hidden sm:block">
        <GeometricShape type="hexagon" color="gold" size="xl" variant="outline" />
      </div>

      <div className="relative z-10 max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-50 text-[#12345B] text-xs font-black uppercase tracking-wider border border-amber-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>The Institutional Thesis</span>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#12345B] leading-tight">
          Mastery is not academic regurgitation. It is the ruthless discipline of{' '}
          <WordAccent shape="square" color="navy">shipping real systems</WordAccent>.
        </h2>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          &ldquo;Most educational institutions teach students to memorize answers for tests that have zero correlation with real market friction. At NIT7ER Academy, we operate as a studio incubator. You write code that runs in production, you log reality without to-do list guilt, you write prose that convinces decision-makers, and you demystify computing from the silicon up.&rdquo;
        </p>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
          <div>
            <h4 className="text-sm font-black text-[#12345B]">
              {FOUNDER_INFO.name}
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              {FOUNDER_INFO.title} • {FOUNDER_INFO.location}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12345B] hover:text-[#1769AA] transition-colors"
            >
              <span>Read Full Founder Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
