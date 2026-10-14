import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass } from 'lucide-react';
import { N7BrandMark } from '@/components/N7BrandMark';
import { StatCounter } from '@/components/ui/StatCounter';
import { FacultyOverviewGrid } from '@/components/ui/FacultyOverviewGrid';
import { LabsShowcase } from '@/components/ui/LabsShowcase';
import { EnrollmentRoadmap } from '@/components/ui/EnrollmentRoadmap';
import { FounderManifesto } from '@/components/ui/FounderManifesto';

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (OAUMods Architecture + Pure Essence Curves) */}
      {/* ========================================================= */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 lg:p-12 bg-white shadow-sm space-y-8 relative overflow-hidden">
        {/* Subtle Decorative Background Contour */}
        <div
          className="absolute -top-10 -right-10 w-96 h-96 opacity-10 pointer-events-none bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('/brand/contour-blob.png')` }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5">
            {/* Studio Badge with Pure Essence Pulse Ring */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring"></span>
              <span className="font-bold text-[#12345B]">NIT7ER STUDIO // EDUCATIONAL INCUBATOR</span>
            </div>

            {/* Main Headline with Shimmer Gradient */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#12345B] leading-[1.12] tracking-tight">
              <span className="shimmer-text">The Institute of Applied Creative Technology, Systems &amp; Mind.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl font-normal">
              Practical education in software engineering, cognitive execution, technical writing, and computer fundamentals. Built for builders who ship real production software.
            </p>

            {/* Action Buttons with Pure Essence Pill Geometry & Button Press */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/apply"
                className="btn-press inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#12345B] hover:bg-[#1769AA] text-white font-mono font-bold text-xs sm:text-sm tracking-tight rounded-full transition-all shadow-md border border-[#12345B]"
              >
                <span>START DIAGNOSTIC INTAKE</span>
                <ArrowRight className="w-4 h-4 text-[#E6AD3C]" />
              </Link>
              <Link
                href="/programs"
                className="btn-press inline-flex items-center gap-2 px-5 py-3.5 border border-[#D9E6F0] bg-[#EEF7FC]/70 hover:bg-[#EEF7FC] text-[#12345B] font-mono font-bold text-xs sm:text-sm rounded-full transition-colors"
              >
                <Compass className="w-4 h-4 text-[#1769AA]" />
                <span>EXPLORE 4 FACULTIES</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Studio Cohort Showcase */}
          <div className="lg:col-span-5">
            <div className="curve-soft bg-gradient-to-b from-[#EEF7FC] to-white border border-[#D9E6F0] p-5 shadow-xs relative overflow-hidden group">
              <div className="flex items-center justify-between pb-3 border-b border-[#D9E6F0]/80">
                <div className="flex items-center gap-2">
                  <N7BrandMark size="xs" variant="gold" />
                  <span className="label-mono text-[#12345B] font-bold text-[10px]">
                    Lagos Studio Cohort
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#1769AA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6AD3C] pulse-ring"></span>
                  <span>Active Session</span>
                </div>
              </div>

              {/* Official Illustration Vector Art */}
              <div className="relative w-full h-48 sm:h-56 flex items-center justify-center py-2">
                <Image
                  src="/brand/illustration-team-tight.png"
                  alt="NIT7ER Studio Team and Cohort"
                  width={1191}
                  height={910}
                  className="w-full h-full object-contain drop-shadow-xs transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
              </div>

              <div className="pt-2.5 border-t border-[#D9E6F0]/80 flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                <span>Systems • Mind • Code</span>
                <span className="text-[#12345B] font-bold">2026/2027 Cohort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. STAT COUNTER METRICS STRIP                             */}
      {/* ========================================================= */}
      <StatCounter />

      {/* ========================================================= */}
      {/* 3. THE 4 FOUNDATIONAL FACULTIES OVERVIEW                  */}
      {/* ========================================================= */}
      <FacultyOverviewGrid />

      {/* ========================================================= */}
      {/* 4. INCUBATED LABS & PROOF OF WORK                         */}
      {/* ========================================================= */}
      <LabsShowcase limit={3} />

      {/* ========================================================= */}
      {/* 5. 4-STAGE STUDIO TRAJECTORY                              */}
      {/* ========================================================= */}
      <EnrollmentRoadmap />

      {/* ========================================================= */}
      {/* 6. FOUNDER'S INSTITUTIONAL MANIFESTO                      */}
      {/* ========================================================= */}
      <FounderManifesto />

      {/* ========================================================= */}
      {/* 7. ADMISSIONS INTAKE ACTIVE BANNER                        */}
      {/* ========================================================= */}
      <section className="curve-asymmetric bg-gradient-to-r from-[#12345B] via-[#1769AA] to-[#12345B] text-white p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl border border-[#12345B] relative overflow-hidden">
        {/* Subtle Brand Shapes Accent Watermark */}
        <div
          className="absolute -right-8 -bottom-8 w-60 h-60 opacity-15 pointer-events-none bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('/brand/shapes-accent.png')` }}
        />
        <div className="space-y-2 max-w-xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-[11px] font-mono font-bold border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#E6AD3C] pulse-ring"></span>
            <span>ADMISSIONS INTAKE ACTIVE</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Ready to Build Systems That Stand Up to Reality?
          </h2>
          <p className="text-xs sm:text-sm text-[#EEF7FC] leading-relaxed">
            Applications for the upcoming cohort are open. Select your program and complete the diagnostic intake.
          </p>
        </div>

        <Link
          href="/apply"
          className="btn-press inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#E6AD3C] hover:bg-[#F5C842] text-[#12345B] font-mono font-bold text-xs sm:text-sm rounded-full shadow-md transition-colors shrink-0"
        >
          <span>START DIAGNOSTIC INTAKE</span>
          <ArrowRight className="w-4 h-4 text-[#12345B]" />
        </Link>
      </section>
    </div>
  );
}
