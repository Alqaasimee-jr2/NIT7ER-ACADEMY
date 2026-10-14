import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck, Flame, Compass } from 'lucide-react';
import { GeometricShape, WordAccent } from '@/components/GeometricShapes';
import { StatCounter } from '@/components/ui/StatCounter';
import { QuickLaunchpad } from '@/components/ui/QuickLaunchpad';
import { FacultyTabs } from '@/components/ui/FacultyTabs';
import { LabsShowcase } from '@/components/ui/LabsShowcase';
import { EnrollmentRoadmap } from '@/components/ui/EnrollmentRoadmap';
import { FounderManifesto } from '@/components/ui/FounderManifesto';

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Architectural, High-Contrast & Focused)  */}
      {/* ========================================================= */}
      <section className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
        {/* Background Architectural Decors */}
        <div className="absolute -top-8 -right-8 pointer-events-none opacity-20 hidden sm:block">
          <GeometricShape type="hexagon" color="gold" size="xl" variant="outline" />
        </div>
        <div className="absolute bottom-3 right-1/4 pointer-events-none opacity-15 hidden sm:block">
          <GeometricShape type="triangle" color="blue" size="lg" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-[#12345B] text-xs font-black uppercase tracking-wider border border-amber-200 rounded-sm">
              <GeometricShape type="square" color="navy" size="sm" />
              <span>NIT7ER Studio &amp; Educational Incubator</span>
            </div>

            {/* Main Headline with WordAccent */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#12345B] leading-[1.15] tracking-tight">
              The Institute of{' '}
              <WordAccent shape="hexagon" color="gold">Applied Creative Tech</WordAccent>{' '}
              &amp; Systems Discipline.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-normal">
              A high-performance modern academy designed for self-driven builders, creators, and entrepreneurs. We merge full-stack software engineering, the Flow7 cognitive reality-tracking model, structured thought leadership, and foundational computer science.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/apply"
                className="na-action inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#12345B] hover:bg-[#0A1E36] text-white font-black text-xs sm:text-sm border border-[#12345B] shadow-xs transition-colors"
              >
                <span>Apply for Cohort Enrollment</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
              <Link
                href="/programs"
                className="na-action inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-[#12345B] font-bold text-xs sm:text-sm border border-slate-300 shadow-xs transition-colors"
              >
                <Compass className="w-4 h-4 text-[#1769AA]" />
                <span>Explore 4 Faculties</span>
              </Link>
            </div>
          </div>

          {/* Right Card / Studio Mission Overview */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#12345B]">
                Studio Standards
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#12345B] mt-1.5 shrink-0"></span>
                <span><strong>No Theoretical Fluff:</strong> Every module terminates in a production URL or published spec.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
                <span><strong>Reality Logging:</strong> Integrate Flow7 daily tracking to conquer procrastination and measure genuine output.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1769AA] mt-1.5 shrink-0"></span>
                <span><strong>Multi-Disciplinary:</strong> Engineering, writing, cognitive stamina, and computing fundamentals in one mind.</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
              <span>Location: Lagos &amp; Global</span>
              <span className="text-[#12345B] font-black">Cohort 2026/2027</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. STAT COUNTER STRIP                                     */}
      {/* ========================================================= */}
      <StatCounter />

      {/* ========================================================= */}
      {/* 3. QUICK-ACTION LAUNCHPAD                                 */}
      {/* ========================================================= */}
      <QuickLaunchpad />

      {/* ========================================================= */}
      {/* 4. THE 4 FOUNDATIONAL FACULTIES (Interactive Tabs)        */}
      {/* ========================================================= */}
      <FacultyTabs />

      {/* ========================================================= */}
      {/* 5. INCUBATED LABS & PROOF OF WORK                         */}
      {/* ========================================================= */}
      <LabsShowcase limit={3} />

      {/* ========================================================= */}
      {/* 6. 4-STAGE STUDIO TRAJECTORY                              */}
      {/* ========================================================= */}
      <EnrollmentRoadmap />

      {/* ========================================================= */}
      {/* 7. FOUNDER'S INSTITUTIONAL MANIFESTO                      */}
      {/* ========================================================= */}
      <FounderManifesto />

      {/* ========================================================= */}
      {/* 8. ADMISSIONS ENROLLMENT BANNER                           */}
      {/* ========================================================= */}
      <section className="rounded-xl border-2 border-[#12345B] bg-[#12345B] text-white p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-400 text-[#12345B] text-[10px] font-black uppercase tracking-wider rounded-xs">
            <Flame className="w-3.5 h-3.5" />
            <span>Admissions Intake Active</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Ready to Build Systems with Ruthless Discipline?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Applications for the upcoming NIT7ER cohort are open. Select your discipline, complete our diagnostic intake, and work directly with Abdullah Qaasim-Falade.
          </p>
        </div>

        <Link
          href="/apply"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-[#12345B] font-black text-sm shadow-xs transition-colors shrink-0"
        >
          <span>Begin Hybrid Application</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
