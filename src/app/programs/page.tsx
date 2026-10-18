import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FACULTIES } from '@/data/academyData';
import {
  ArrowRight,
  Clock,
  BookOpen,
  Cpu,
  Brain,
  PenTool,
  Monitor,
  Layers,
} from 'lucide-react';
import {
  CreativeTechDiagram,
  CognitiveSystemsDiagram,
  WritingDiagram,
  ComputerEducationDiagram,
} from '@/components/illustrations/FacultyDiagrams';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { StickyFacultyNav } from '@/components/ui/StickyFacultyNav';

export const metadata: Metadata = {
  title: 'Academic Catalog // 4 Disciplines & 12 Specialized Tracks',
  description:
    'Explore the 4 foundational faculties and 12 specialized programs of NIT7ER Academy: Software Engineering, Cognitive Performance, Professional Writing, and Computer Education.',
};

export default function ProgramsPage() {
  const renderDiagram = (id: string) => {
    switch (id) {
      case 'creative-tech':
        return <CreativeTechDiagram className="w-full h-44 sm:h-52" />;
      case 'cognitive-performance':
        return <CognitiveSystemsDiagram className="w-full h-44 sm:h-52" />;
      case 'writing-thought-leadership':
        return <WritingDiagram className="w-full h-44 sm:h-52" />;
      case 'computer-education':
        return <ComputerEducationDiagram className="w-full h-44 sm:h-52" />;
      default:
        return null;
    }
  };

  const getFacultyIcon = (id: string) => {
    switch (id) {
      case 'creative-tech':
        return <Cpu className="w-5 h-5 text-[#1769AA]" />;
      case 'cognitive-performance':
        return <Brain className="w-5 h-5 text-[#1769AA]" />;
      case 'writing-thought-leadership':
        return <PenTool className="w-5 h-5 text-[#1769AA]" />;
      case 'computer-education':
        return <Monitor className="w-5 h-5 text-[#1769AA]" />;
      default:
        return <Layers className="w-5 h-5 text-[#1769AA]" />;
    }
  };

  const totalPrograms = FACULTIES.reduce((acc, f) => acc + f.programs.length, 0);

  return (
    <div className="space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ label: 'Curriculum & Academic Catalog' }]} />

      {/* 1. Header Banner & Wayfinder Intro */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 lg:p-12 bg-white space-y-8 border border-[#D9E6F0] shadow-xs relative overflow-hidden">
        <div
          className="absolute -right-8 -top-8 w-64 h-64 opacity-10 pointer-events-none bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('/brand/shapes-accent.png')` }}
        />
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-[11px] sm:text-xs font-mono max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring shrink-0"></span>
            <span className="font-bold text-[#12345B] truncate">ACADEMIC CATALOG // 4 FACULTIES • 12 TRACKS</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#12345B] tracking-tight leading-[1.12]">
            Curriculum Engineered for True Mastery.
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal max-w-2xl">
            Choose a faculty below to explore its focused syllabus, sprint modules, and capstone deliverable specifications.
          </p>

          <div className="pt-1 flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#64748B]">
            <span className="px-3.5 py-1.5 rounded-full bg-[#EEF7FC] text-[#12345B] border border-[#D9E6F0] font-bold">
              [4 FOUNDATIONAL FACULTIES]
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#EEF7FC] text-[#12345B] border border-[#D9E6F0] font-bold">
              [{totalPrograms} SPECIALIZED TRACKS]
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#EEF7FC] text-[#1769AA] border border-[#D9E6F0] font-bold">
              [100% VERIFIED CAPSTONE DEFENSE]
            </span>
          </div>
        </div>

        {/* Quick Anchor Grid */}
        <div className="pt-6 border-t border-[#D9E6F0] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {FACULTIES.map((fac) => (
            <a
              key={fac.id}
              href={`#${fac.id}`}
              className="btn-press flex items-start justify-between p-4 sm:p-5 bg-[#FAFCFE] hover:bg-[#EEF7FC] border border-[#D9E6F0] hover:border-[#1769AA] rounded-2xl text-left transition-all group"
            >
              <div className="space-y-1.5 min-w-0 pr-2">
                <div className="flex items-center gap-2 font-mono text-xs text-[#1769AA] font-bold">
                  {getFacultyIcon(fac.id)}
                  <span>FACULTY {fac.number}</span>
                </div>
                <h4 className="font-display text-sm sm:text-base font-bold text-[#12345B] leading-snug group-hover:text-[#1769AA]">
                  {fac.title}
                </h4>
                <span className="text-xs font-mono text-[#64748B] block">
                  {fac.programs.length} Specialized Tracks
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#E6AD3C] shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>
      </section>

      {/* 2. The 4 Scannable Faculty Cards */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9E6F0] pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#E6AD3C] pulse-ring"></span>
              <span className="font-bold text-[#12345B]">DISCIPLINE OVERVIEW</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#12345B] tracking-tight mt-2">
              Explore Our 4 Academic Faculties
            </h2>
          </div>
          <span className="text-xs sm:text-sm font-mono text-[#64748B]">
            Click any faculty or track to inspect detailed syllabi &amp; sprint modules
          </span>
        </div>

        <StickyFacultyNav />

        <div className="grid grid-cols-1 gap-8">
          {FACULTIES.map((faculty) => (
            <article
              key={faculty.id}
              id={faculty.id}
              className="technical-border curve-asymmetric p-6 sm:p-8 lg:p-10 bg-white border border-[#D9E6F0] rounded-2xl shadow-xs hover:border-[#1769AA] transition-all scroll-mt-36 space-y-6"
            >
              {/* Card Header & Schematic */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                <div className="lg:col-span-7 space-y-3.5">
                  <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-[#64748B]">
                    <span className="font-display text-2xl font-extrabold text-[#12345B]">
                      {faculty.number}
                    </span>
                    <span className="px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] text-[#12345B] font-bold rounded-full">
                      {faculty.badge}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#1769AA]" />
                      <span>{faculty.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-[#1769AA]" />
                      <span>{faculty.format}</span>
                    </span>
                  </div>

                  <Link
                    href={`/programs/${faculty.id}`}
                    className="inline-block hover:text-[#1769AA] transition-colors"
                  >
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#12345B] hover:text-[#1769AA] tracking-tight transition-colors">
                      {faculty.title}
                    </h3>
                  </Link>

                  <p className="text-sm sm:text-base font-mono text-[#1769AA] font-semibold italic">
                    &ldquo;{faculty.tagline}&rdquo;
                  </p>

                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                    {faculty.description}
                  </p>
                </div>

                {/* Right Schematic Preview */}
                <div className="lg:col-span-5 p-5 rounded-2xl bg-[#EEF7FC]/60 border border-[#D9E6F0] flex flex-col justify-center items-center shadow-2xs">
                  <span className="label-mono text-xs text-[#64748B] self-start mb-2 font-bold">
                    SCHEMATIC // {faculty.number}
                  </span>
                  {renderDiagram(faculty.id)}
                </div>
              </div>

              {/* Program Tracks Pill Grid */}
              <div className="pt-4 border-t border-[#D9E6F0] space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="font-bold text-[#12345B]">
                    INCLUDED TRACKS ({faculty.programs.length} SPECIALIZED SYLLABI):
                  </span>
                  <span className="text-[#1769AA] font-semibold">Culminates in Capstone Deliverable</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {faculty.programs.map((prog) => (
                    <Link
                      key={prog.id}
                      id={prog.id}
                      href={`/programs/${faculty.id}/${prog.id}`}
                      className="btn-press p-4 sm:p-5 bg-[#FAFCFE] hover:bg-[#EEF7FC] border border-[#D9E6F0] hover:border-[#1769AA] rounded-2xl space-y-2 transition-all flex flex-col justify-between group/track scroll-mt-28"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between font-mono text-xs">
                          <span className="font-bold text-[#1769AA] group-hover/track:text-[#12345B] transition-colors">
                            {prog.code}
                          </span>
                          <span className="px-2.5 py-0.5 bg-white border border-[#D9E6F0] text-[#64748B] rounded-md text-[11px] font-medium">
                            {prog.level}
                          </span>
                        </div>
                        <h5 className="font-display text-sm sm:text-base font-bold text-[#12345B] group-hover/track:text-[#1769AA] transition-colors leading-snug">
                          {prog.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-2">
                          {prog.tagline}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#D9E6F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs sm:text-sm font-mono text-[#64748B]">
                  Lead Focus: <span className="text-[#12345B] font-bold">{faculty.leadAnchor}</span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href={`/programs/${faculty.id}`}
                    className="btn-press inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-mono font-bold rounded-full transition-colors shadow-sm"
                  >
                    <span>ENTER FACULTY HUB</span>
                    <ArrowRight className="w-4 h-4 text-[#E6AD3C]" />
                  </Link>

                  <Link
                    href={`/apply?track=${faculty.id}`}
                    className="btn-press inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-[#EEF7FC] hover:bg-[#D9E6F0] text-[#12345B] text-xs font-mono font-bold rounded-full transition-colors"
                  >
                    <span>APPLY FOR FACULTY {faculty.number}</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Comprehensive Comparison Matrix */}
      <section className="technical-border curve-asymmetric p-5 sm:p-8 bg-white border border-[#D9E6F0] rounded-2xl space-y-6 shadow-xs overflow-hidden">
        <div className="border-b border-[#D9E6F0] pb-3 space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring"></span>
            <span className="font-bold text-[#12345B]">ACADEMIC MATRIX</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#12345B] tracking-tight">
            Comparison Matrix Across All 4 Disciplines
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Side-by-side synthesis of duration, sprint structure, core focus, and capstone requirements.
          </p>
        </div>

        {/* Mobile Comparison Card Stack (< 768px) */}
        <div className="grid grid-cols-1 gap-3.5 md:hidden">
          {FACULTIES.map((fac) => (
            <div
              key={fac.id}
              className="p-4 rounded-xl bg-[#FAFCFE] border border-[#D9E6F0] space-y-3 font-mono text-xs"
            >
              <div className="flex items-start justify-between gap-2 border-b border-[#D9E6F0] pb-2.5">
                <div>
                  <span className="text-[10px] font-bold text-[#1769AA] block">{fac.badge}</span>
                  <h4 className="font-sans text-sm font-black text-[#12345B]">{fac.title}</h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#EEF7FC] text-[#12345B] font-bold text-[10px] shrink-0">
                  {fac.programs.length} Tracks
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-[10px] text-[#64748B] block">DURATION</span>
                  <span className="font-bold text-[#12345B]">{fac.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#64748B] block">MODEL</span>
                  <span className="font-bold text-[#12345B]">{fac.format}</span>
                </div>
              </div>

              <div className="text-[11px] pt-1 border-t border-[#D9E6F0]/60">
                <span className="text-[10px] text-[#64748B] block">CAPSTONE DELIVERABLE</span>
                <span className="text-[#12345B] font-medium">
                  {fac.programs[0]?.capstoneProject.deliverable || 'Production System'}
                </span>
              </div>

              <Link
                href={`/programs/${fac.id}`}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#EEF7FC] hover:bg-[#12345B] text-[#12345B] hover:text-white font-bold transition-colors"
              >
                <span>Explore {fac.badge} Hub</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop Comparison Table (>= 768px) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#D9E6F0] bg-[#EEF7FC]/70 text-[#12345B]">
                <th className="p-3.5 font-bold">Faculty Discipline</th>
                <th className="p-3.5 font-bold">Duration</th>
                <th className="p-3.5 font-bold">Tracks</th>
                <th className="p-3.5 font-bold">Instruction Model</th>
                <th className="p-3.5 font-bold">Capstone Deliverable</th>
                <th className="p-3.5 font-bold text-right">Hub Route</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9E6F0]">
              {FACULTIES.map((fac) => (
                <tr key={fac.id} className="hover:bg-[#FAFCFE] transition-colors">
                  <td className="p-3.5">
                    <div className="font-bold text-[#12345B]">{fac.title}</div>
                    <div className="text-xs text-[#1769AA]">{fac.badge}</div>
                  </td>
                  <td className="p-3.5 text-[#64748B] whitespace-nowrap">{fac.duration}</td>
                  <td className="p-3.5 text-[#12345B] font-bold whitespace-nowrap">
                    {fac.programs.length} Tracks
                  </td>
                  <td className="p-3.5 text-[#64748B]">{fac.format}</td>
                  <td className="p-3.5 text-[#12345B]">
                    {fac.programs[0]?.capstoneProject.deliverable || 'Production System'}
                  </td>
                  <td className="p-3.5 text-right whitespace-nowrap">
                    <Link
                      href={`/programs/${fac.id}`}
                      className="inline-flex items-center gap-1 font-bold text-[#1769AA] hover:text-[#12345B]"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 text-[#E6AD3C]" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Comparative Trust & FAQ Knowledge Base */}
      <FAQAccordion />

      {/* 5. Diagnostic Intake & Admissions CTA */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 bg-gradient-to-r from-[#12345B] via-[#1769AA] to-[#12345B] text-white space-y-4 rounded-2xl shadow-md border border-[#12345B]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full font-mono text-xs font-bold text-[#E6AD3C] border border-white/20">
              COHORT ADMISSION PROCESS
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Unsure Which Faculty Matches Your Technical Trajectory?
            </h3>
            <p className="text-xs sm:text-sm text-[#EEF7FC] leading-relaxed">
              Complete our diagnostic intake. Our studio directors evaluate your background, portfolio, and stamina to recommend the exact curriculum track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              href="/apply"
              className="btn-press inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E6AD3C] hover:bg-[#F5C842] text-[#12345B] text-xs font-mono font-bold rounded-full transition-colors shadow-sm"
            >
              <span>START DIAGNOSTIC INTAKE</span>
              <ArrowRight className="w-4 h-4 text-[#12345B]" />
            </Link>

            <Link
              href="/contact"
              className="btn-press inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold rounded-full border border-white/20 transition-colors"
            >
              <span>TALK TO ADMISSIONS</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
