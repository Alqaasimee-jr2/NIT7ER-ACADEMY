import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Flow7Simulator } from '@/components/interactive/Flow7Simulator';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Brain, ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Flow7 Focus Engine & Reality Protocol | NIT7ER Academy',
  description:
    'Interactive cognitive focus simulator and reality logging protocol engineered at NIT7ER Studio to cultivate deep work stamina and eliminate mental friction.',
};

export default function Flow7Page() {
  const principles = [
    {
      title: 'Reality Over Optimism',
      desc: 'Count only minutes of genuine unbroken focus. Friction logging reveals distraction triggers immediately.',
      icon: ShieldCheck,
    },
    {
      title: 'Sprint Micro-Cycles',
      desc: 'High-intensity 15 to 45-minute focused execution blocks with zero context switching.',
      icon: Zap,
    },
    {
      title: 'Attention Stamina Compounding',
      desc: 'Daily reality logs compound into unshakeable cognitive endurance for high-stress engineering.',
      icon: Activity,
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-14">
      <Breadcrumbs
        items={[
          { label: 'Labs & Incubator', href: '/labs' },
          { label: 'Flow7 Reality Engine' },
        ]}
      />

      {/* Header Banner */}
      <section className="technical-border curve-asymmetric p-5 sm:p-10 bg-white space-y-4 border border-[#D9E6F0] shadow-xs relative overflow-hidden">
        <div
          className="absolute -right-8 -top-8 w-64 h-64 opacity-10 pointer-events-none bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('/brand/shapes-accent.png')` }}
        />
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-[10px] sm:text-xs font-mono max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#E6AD3C] pulse-ring shrink-0"></span>
            <span className="font-bold text-[#12345B] truncate">COGNITIVE PERFORMANCE // LAB PROTOCOL</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12345B] tracking-tight leading-tight">
            Flow7 Focus Engine &amp; Reality Simulator
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal max-w-2xl">
            The proprietary reality-tested focus protocol developed by Director Abdullah Qaasim-Falade. Run live deep-work sprints, measure focus velocity, and track friction with zero sugar-coating.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link
              href="/labs/flow7"
              className="px-2.5 py-0.5 rounded-full bg-[#EEF7FC] hover:bg-[#D9E6F0] text-[#12345B] border border-[#D9E6F0] font-bold transition-colors"
            >
              [PROTOCOL 02 // LAB CASE STUDY]
            </Link>
            <Link
              href="/programs/cognitive-performance/deep-work-attention"
              className="px-2.5 py-0.5 rounded-full bg-[#EEF7FC] hover:bg-[#D9E6F0] text-[#1769AA] border border-[#D9E6F0] font-bold transition-colors"
            >
              [CURRICULUM: COG-201 &amp; COG-202]
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Simulator Card */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#D9E6F0]">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-[#1769AA]" />
            <h2 className="text-sm font-bold font-mono text-[#12345B]">
              INTERACTIVE REALITY CONSOLE
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#64748B]">
            Live Browser Session
          </span>
        </div>

        <Flow7Simulator />
      </section>

      {/* 3 Principles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {principles.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="p-6 bg-white border border-[#D9E6F0] rounded-2xl space-y-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EEF7FC] text-[#1769AA] flex items-center justify-center border border-[#D9E6F0]">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#12345B]">
                {p.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {p.desc}
              </p>
            </div>
          );
        })}
      </section>

      {/* Curriculum Callout Banner */}
      <section className="p-6 sm:p-8 bg-[#EEF7FC] border border-[#D9E6F0] rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-1.5 max-w-xl">
          <span className="label-mono text-[10px] text-[#1769AA] font-bold">
            STUDY COGNITIVE PERFORMANCE AT NIT7ER
          </span>
          <h3 className="text-lg font-black text-[#12345B]">
            Want to Master Deep Work and Cognitive Stamina?
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Faculty 02 (Cognitive Performance &amp; Flow Systems) trains builders in deep work protocols, circadian stamina architecture, and deliberate skill compounding.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <Link
            href="/programs/cognitive-performance/deep-work-attention"
            className="btn-press inline-flex items-center justify-center px-4 py-2.5 bg-white border border-[#1769AA] hover:bg-[#EEF7FC] text-[#12345B] text-xs font-bold font-mono rounded-full transition-colors"
          >
            INSPECT COG-201 SYLLABUS
          </Link>
          <Link
            href="/apply?track=cognitive-performance&program=deep-work-attention"
            className="btn-press inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-bold font-mono rounded-full transition-colors shadow-sm"
          >
            <span>APPLY FOR COG-201</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
