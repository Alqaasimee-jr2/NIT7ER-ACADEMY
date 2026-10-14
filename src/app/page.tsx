import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck, Flame, Terminal } from 'lucide-react';
import { N7BrandMark } from '@/components/N7BrandMark';
import { StatCounter } from '@/components/ui/StatCounter';
import { QuickLaunchpad } from '@/components/ui/QuickLaunchpad';
import { FacultyTabs } from '@/components/ui/FacultyTabs';
import { LabsShowcase } from '@/components/ui/LabsShowcase';
import { EnrollmentRoadmap } from '@/components/ui/EnrollmentRoadmap';
import { FounderManifesto } from '@/components/ui/FounderManifesto';
import { Flow7Simulator } from '@/components/interactive/Flow7Simulator';

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Authentic NIT7ER Studio Architecture)     */}
      {/* ========================================================= */}
      <section className="technical-border p-6 sm:p-10 lg:p-12 bg-white space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF9F6] border border-[#E5E5E0] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#C9A84C]"></span>
              <span className="font-bold text-[#121212]">NIT7ER STUDIO // EDUCATIONAL INCUBATOR</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121212] leading-[1.12] tracking-tight">
              The Institute of Applied Creative Technology &amp; Systems Discipline.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#71717A] leading-relaxed max-w-2xl font-normal">
              A high-performance modern academy designed for self-driven builders, creators, and entrepreneurs. We merge full-stack software engineering, the Flow7 cognitive reality-tracking model, structured thought leadership, and foundational computer science.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#121212] hover:bg-[#27272A] text-white font-mono font-bold text-xs sm:text-sm tracking-tight transition-all shadow-xs"
              >
                <span>APPLY FOR COHORT ENROLLMENT</span>
                <ArrowRight className="w-4 h-4 text-[#F5C842]" />
              </Link>
              <Link
                href="/programs"
                className="gold-link inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] bg-[#FAF9F6] text-[#121212] font-mono font-bold text-xs sm:text-sm transition-colors"
              >
                <Compass className="w-4 h-4 text-[#C9A84C]" />
                <span>EXPLORE 4 FACULTIES</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Studio Metric Overview Box */}
          <div className="lg:col-span-4 bg-[#FAF9F6] border border-[#E5E5E0] p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-2">
              <span className="label-mono text-[#121212]">
                Studio Standards
              </span>
              <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
            </div>

            <ul className="space-y-3 text-xs text-[#71717A]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#121212] mt-1.5 shrink-0"></span>
                <span><strong className="text-[#121212]">Zero Toy Projects:</strong> Every module terminates in live deployed software or published technical specifications.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></span>
                <span><strong className="text-[#121212]">Flow7 Cognitive Telemetry:</strong> Log daily reality without to-do list guilt to conquer cognitive friction.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B7C28] mt-1.5 shrink-0"></span>
                <span><strong className="text-[#121212]">Polymath Competence:</strong> Code, prose, mind, and machine logic synthesized into one builder.</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-[#E5E5E0] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
              <span>HQ: Lagos // Global Cohort</span>
              <span className="text-[#121212] font-bold">2026/2027</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. STAT COUNTER METRICS STRIP                             */}
      {/* ========================================================= */}
      <StatCounter />

      {/* ========================================================= */}
      {/* 3. LIVE INTERACTIVE FLOW7 FOCUS SIMULATOR                 */}
      {/* ========================================================= */}
      <Flow7Simulator />

      {/* ========================================================= */}
      {/* 4. QUICK-ACTION LAUNCHPAD                                 */}
      {/* ========================================================= */}
      <QuickLaunchpad />

      {/* ========================================================= */}
      {/* 5. THE 4 FOUNDATIONAL FACULTIES & DIAGRAMS                */}
      {/* ========================================================= */}
      <FacultyTabs />

      {/* ========================================================= */}
      {/* 6. INCUBATED LABS & PROOF OF WORK                         */}
      {/* ========================================================= */}
      <LabsShowcase limit={3} />

      {/* ========================================================= */}
      {/* 7. 4-STAGE STUDIO TRAJECTORY                              */}
      {/* ========================================================= */}
      <EnrollmentRoadmap />

      {/* ========================================================= */}
      {/* 8. FOUNDER'S INSTITUTIONAL MANIFESTO                      */}
      {/* ========================================================= */}
      <FounderManifesto />

      {/* ========================================================= */}
      {/* 9. ADMISSIONS INTAKE ACTIVE BANNER                        */}
      {/* ========================================================= */}
      <section className="technical-border bg-[#121212] text-white p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#C9A84C] text-[#121212] text-[10px] font-mono font-bold">
            <Flame className="w-3.5 h-3.5" />
            <span>ADMISSIONS INTAKE ACTIVE</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Ready to Build Systems with Ruthless Discipline?
          </h2>
          <p className="text-xs sm:text-sm text-[#D1D1CB] leading-relaxed">
            Applications for the upcoming NIT7ER cohort are open. Select your discipline, complete our diagnostic intake, and work directly with Abdullah Qaasim-Falade.
          </p>
        </div>

        <Link
          href="/apply"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C9A84C] hover:bg-[#F5C842] text-[#121212] font-mono font-bold text-xs sm:text-sm shadow-xs transition-colors shrink-0"
        >
          <span>START HYBRID APPLICATION</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
