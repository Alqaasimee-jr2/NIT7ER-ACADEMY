import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TeamShowcase } from '@/components/ui/TeamShowcase';
import { ArrowRight, Compass, Users, Code, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Studio Directors & Core Faculty',
  description:
    'Meet the active practitioners, directors, and systems architects behind NIT7ER Academy: Abdullah Qaasim-Falade, Yaasir Olajumoke, and The G3neral.',
};

export default function TeamPage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: 'Studio Directors & Core Faculty' }]} />

      {/* Header Banner */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 bg-white space-y-4 border border-[#D9E6F0] shadow-xs relative overflow-hidden">
        <div
          className="absolute -right-8 -top-8 w-64 h-64 opacity-10 pointer-events-none bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('/brand/shapes-accent.png')` }}
        />

        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#E6AD3C] pulse-ring"></span>
            <span className="font-bold text-[#12345B]">STUDIO FACULTY // CORE DIRECTORS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12345B] tracking-tight leading-tight">
            The Practitioners Behind the Standard.
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
            At NIT7ER Academy, faculty are not textbook instructors. They are active creative technologists, visual leads, and systems architects shipping commercial software every day.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#64748B]">
            <span className="px-3 py-1 rounded-full bg-[#EEF7FC] text-[#12345B] border border-[#D9E6F0] font-bold">
              [100% ACTIVE PRACTITIONERS]
            </span>
            <span className="px-3 py-1 rounded-full bg-[#EEF7FC] text-[#12345B] border border-[#D9E6F0] font-bold">
              [DIRECT APPRENTICESHIP MODEL]
            </span>
            <span className="px-3 py-1 rounded-full bg-[#EEF7FC] text-[#1769AA] border border-[#D9E6F0] font-bold">
              [DAILY STUDIO CRITIQUES]
            </span>
          </div>
        </div>
      </section>

      {/* Core Team Showcase Mount */}
      <TeamShowcase />

      {/* Apprenticeship Pedagogy Banner */}
      <section className="technical-border curve-asymmetric p-6 sm:p-8 bg-[#FAFCFE] border border-[#D9E6F0] rounded-2xl space-y-6 shadow-xs">
        <div className="space-y-2 border-b border-[#D9E6F0] pb-3">
          <span className="label-mono text-xs text-[#1769AA] font-bold block">
            THE STUDIO DIFFERENCE
          </span>
          <h3 className="text-xl font-black text-[#12345B]">
            How Direct Studio Apprenticeship Works
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Traditional courses assign generic sandbox homework. In NIT7ER Academy, you apprentice directly alongside our studio directors:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white border border-[#D9E6F0] rounded-xl space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 font-mono text-xs text-[#1769AA] font-bold">
              <Code className="w-4 h-4 text-[#1769AA]" />
              <span>Production Codebases</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Read and contribute to real systems like Clasquera, Flow7, and OAUMods with strict TypeScript architectures and CI/CD pipelines.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#D9E6F0] rounded-xl space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 font-mono text-xs text-[#1769AA] font-bold">
              <Users className="w-4 h-4 text-[#1769AA]" />
              <span>Live Architectural Reviews</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Receive direct line-by-line feedback on schema design, UI token consistency, and focus stamina metrics.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#D9E6F0] rounded-xl space-y-2 shadow-2xs">
            <div className="flex items-center gap-2 font-mono text-xs text-[#1769AA] font-bold">
              <Award className="w-4 h-4 text-[#E6AD3C]" />
              <span>Audited Capstone Defense</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Before graduating, defend your live deliverable before our core faculty panel with zero fluff and proven market readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 bg-gradient-to-r from-[#12345B] via-[#1769AA] to-[#12345B] text-white space-y-4 rounded-2xl shadow-md border border-[#12345B]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full font-mono text-xs font-bold text-[#E6AD3C] border border-white/20">
              JOIN THE NEXT COHORT
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Ready to Apprentice Under Studio Directors?
            </h3>
            <p className="text-xs sm:text-sm text-[#EEF7FC] leading-relaxed">
              Admission is selective based on discipline, focus stamina, and diagnostic intake.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/apply"
              className="btn-press inline-flex items-center gap-2 px-6 py-3.5 bg-[#E6AD3C] hover:bg-[#F5C842] text-[#12345B] text-xs font-mono font-bold rounded-full transition-colors shadow-sm"
            >
              <span>APPLY FOR ADMISSION</span>
              <ArrowRight className="w-4 h-4 text-[#12345B]" />
            </Link>

            <Link
              href="/programs"
              className="btn-press inline-flex items-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold rounded-full border border-white/20 transition-colors"
            >
              <Compass className="w-4 h-4 text-[#E6AD3C]" />
              <span>EXPLORE CURRICULUM</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
