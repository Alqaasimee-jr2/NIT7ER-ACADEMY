import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FACULTIES } from '@/data/academyData';
import {
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle2,
  Layers,
  Award,
  ShieldCheck,
  Cpu,
  Brain,
  PenTool,
  Monitor,
} from 'lucide-react';
import {
  CreativeTechDiagram,
  CognitiveSystemsDiagram,
  WritingDiagram,
  ComputerEducationDiagram,
} from '@/components/illustrations/FacultyDiagrams';

export const metadata: Metadata = {
  title: 'Academic Faculties & 12 Specialized Programs',
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
        return <Cpu className="w-4 h-4 text-[#1769AA]" />;
      case 'cognitive-performance':
        return <Brain className="w-4 h-4 text-[#1769AA]" />;
      case 'writing-thought-leadership':
        return <PenTool className="w-4 h-4 text-[#1769AA]" />;
      case 'computer-education':
        return <Monitor className="w-4 h-4 text-[#1769AA]" />;
      default:
        return null;
    }
  };

  const totalPrograms = FACULTIES.reduce((acc, f) => acc + f.programs.length, 0);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header Banner */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 bg-white space-y-5 border border-[#D9E6F0] shadow-xs relative overflow-hidden">
        {/* Subtle Brand Shapes Accent Watermark */}
        <div
          className="absolute -right-8 -top-8 w-64 h-64 opacity-10 pointer-events-none bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('/brand/shapes-accent.png')` }}
        />
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring"></span>
            <span className="font-bold text-[#12345B]">ACADEMIC CATALOG // 4 FACULTIES • 12 SPECIALIZED TRACKS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12345B] tracking-tight leading-tight">
            Curriculum Engineered for True Mastery.
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
            Specialization without integration breeds fragile builders. At NIT7ER Academy, our curriculum is engineered across four pillars: constructing formidable software, mastering self-regulation through quantified awareness, articulating ideas with crisp prose, and understanding computing from its fundamental hardware, operating systems, and productivity suites.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#64748B]">
            <span className="px-2.5 py-0.5 rounded-full bg-[#EEF7FC] text-[#12345B] border border-[#D9E6F0] font-bold">
              [4 FOUNDATIONAL FACULTIES]
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#EEF7FC] text-[#12345B] border border-[#D9E6F0] font-bold">
              [{totalPrograms} SPECIALIZED PROGRAMS]
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#EEF7FC] text-[#1769AA] border border-[#D9E6F0] font-bold">
              [100% CAPSTONE DEFENSE]
            </span>
          </div>
        </div>

        {/* Quick Anchor Navigation */}
        <div className="pt-4 border-t border-[#D9E6F0] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 relative z-10">
          {FACULTIES.map((fac) => (
            <a
              key={fac.id}
              href={`#${fac.id}`}
              className="btn-press flex items-center justify-between p-3 bg-[#FAFCFE] hover:bg-[#EEF7FC] border border-[#D9E6F0] rounded-xl text-left transition-colors group"
            >
              <div className="space-y-0.5 min-w-0 pr-2">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#1769AA] font-bold">
                  {getFacultyIcon(fac.id)}
                  <span>FACULTY {fac.number}</span>
                </div>
                <h4 className="text-xs font-bold text-[#12345B] truncate group-hover:text-[#1769AA]">
                  {fac.title}
                </h4>
                <span className="text-[10px] font-mono text-[#64748B] block">
                  {fac.programs.length} Specialized Tracks
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C] shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </section>

      {/* Deep Dive into Each Faculty */}
      <div className="space-y-16">
        {FACULTIES.map((faculty) => (
          <section
            key={faculty.id}
            id={faculty.id}
            className="technical-border curve-asymmetric p-6 sm:p-10 bg-white space-y-10 scroll-mt-24 border border-[#D9E6F0] shadow-xs"
          >
            {/* Faculty Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[#D9E6F0] pb-8">
              <div className="lg:col-span-7 space-y-3.5">
                <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-[#64748B]">
                  <span className="text-2xl font-black text-[#12345B]">
                    {faculty.number}
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#EEF7FC] border border-[#D9E6F0] text-[#12345B] font-bold rounded-full">
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

                <h2 className="text-2xl sm:text-3xl font-black text-[#12345B] tracking-tight">
                  {faculty.title}
                </h2>

                <p className="text-xs sm:text-sm font-mono text-[#1769AA] font-semibold italic">
                  &ldquo;{faculty.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {faculty.description}
                </p>

                {/* Case Study / Living Proof Box */}
                {faculty.caseStudy && (
                  <div className="p-4 bg-[#EEF7FC]/70 border border-[#D9E6F0] rounded-xl space-y-1.5 mt-3">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-[#1769AA] font-bold">
                      <Layers className="w-3.5 h-3.5" />
                      <span>INCUBATED STUDIO LAB CASE STUDY</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#12345B]">
                      {faculty.caseStudy.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {faculty.caseStudy.description}
                    </p>
                    {faculty.caseStudy.link && (
                      <Link
                        href={faculty.caseStudy.link}
                        className="gold-link inline-flex items-center gap-1 text-xs font-mono font-bold text-[#12345B] pt-1"
                      >
                        <span>INSPECT INCUBATED LAB CASE STUDY</span>
                        <ArrowRight className="w-3 h-3 text-[#E6AD3C]" />
                      </Link>
                    )}
                  </div>
                )}
              </div>

              {/* Vector Schematic */}
              <div className="lg:col-span-5 p-4 rounded-2xl bg-[#EEF7FC]/60 border border-[#D9E6F0] flex flex-col justify-center items-center shadow-xs">
                <span className="label-mono text-[8px] text-[#64748B] self-start mb-2">
                  ARCHITECTURAL PIPELINE SCHEMATIC // 0{faculty.number}
                </span>
                {renderDiagram(faculty.id)}
              </div>
            </div>

            {/* Faculty Programs Catalog */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#D9E6F0] pb-3">
                <div>
                  <span className="label-mono text-[9px] text-[#1769AA] block">
                    SPECIALIZED TRACKS
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#12345B]">
                    Programs Under Faculty {faculty.number} ({faculty.programs.length} Tracks)
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#64748B]">
                  Each track culminates in an audited capstone defense
                </span>
              </div>

              {/* Detailed Program Cards */}
              <div className="space-y-8">
                {faculty.programs.map((program, pIdx) => (
                  <div
                    key={program.id}
                    id={program.id}
                    className="p-6 sm:p-7 bg-[#FAFCFE] border border-[#D9E6F0] rounded-2xl space-y-6 shadow-2xs hover:border-[#1769AA]/50 transition-all scroll-mt-24"
                  >
                    {/* Program Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#D9E6F0] pb-4">
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="label-mono px-2.5 py-0.5 bg-[#12345B] text-white rounded-md text-[10px]">
                            {program.code}
                          </span>
                          <span className="label-mono px-2 py-0.5 bg-[#EEF7FC] border border-[#D9E6F0] text-[#1769AA] rounded-md text-[10px]">
                            {program.level}
                          </span>
                          <span className="text-xs font-mono text-[#64748B] flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#1769AA]" />
                            <span>{program.duration}</span>
                          </span>
                          <span className="text-xs font-mono text-[#64748B]">
                            • {program.format}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-black text-[#12345B]">
                          {program.title}
                        </h4>
                        <p className="text-xs font-mono text-[#1769AA] italic font-semibold">
                          &ldquo;{program.tagline}&rdquo;
                        </p>
                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-3xl pt-1">
                          {program.description}
                        </p>
                        <div className="pt-1 text-xs text-[#64748B]">
                          <strong className="text-[#12345B] font-mono">Target Candidates:</strong>{' '}
                          {program.targetAudience}
                        </div>
                      </div>

                      <div className="shrink-0 pt-2 sm:pt-0">
                        <Link
                          href={`/apply?track=${faculty.id}&program=${program.id}`}
                          className="btn-press inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-bold font-mono rounded-full transition-colors shadow-sm"
                        >
                          <span>APPLY FOR {program.code}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
                        </Link>
                      </div>
                    </div>

                    {/* Modules Grid */}
                    <div className="space-y-3">
                      <span className="label-mono text-[10px] text-[#12345B] block">
                        Sprint Syllabus ({program.modules.length} Core Modules)
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {program.modules.map((mod, mIdx) => (
                          <div
                            key={mod.title}
                            className="p-4 bg-white border border-[#D9E6F0] rounded-xl space-y-2 shadow-2xs"
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-[#E6AD3C]">
                                [{program.code}-M0{mIdx + 1}]
                              </span>
                              <h5 className="font-bold text-xs sm:text-sm text-[#12345B]">
                                {mod.title}
                              </h5>
                            </div>
                            <p className="text-xs text-[#64748B] leading-relaxed">
                              {mod.desc}
                            </p>
                            <div className="flex flex-wrap gap-1 pt-1">
                              {mod.topics.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] font-mono px-2 py-0.5 bg-[#EEF7FC] border border-[#D9E6F0] text-[#12345B] rounded-md"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes & Capstone Box */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-2">
                      {/* Learning Outcomes */}
                      <div className="lg:col-span-6 p-4 bg-white border border-[#D9E6F0] rounded-xl space-y-2">
                        <span className="label-mono text-[9px] text-[#64748B] block">
                          Verified Learning Outcomes
                        </span>
                        <div className="space-y-1.5 text-xs text-[#1F2937]">
                          {program.learningOutcomes.map((outcome) => (
                            <div key={outcome} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#1769AA] mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Capstone Deliverable Card */}
                      <div className="lg:col-span-6 p-4 bg-[#EEF7FC]/80 border border-[#D9E6F0] rounded-xl space-y-2 flex flex-col justify-between">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#1769AA] font-bold">
                            <Award className="w-4 h-4 text-[#E6AD3C]" />
                            <span>MANDATORY CAPSTONE PROJECT</span>
                          </div>
                          <h5 className="text-xs sm:text-sm font-bold text-[#12345B]">
                            {program.capstoneProject.title}
                          </h5>
                          <p className="text-xs text-[#64748B] leading-relaxed">
                            {program.capstoneProject.description}
                          </p>
                        </div>
                        <div className="p-2.5 bg-white border border-[#D9E6F0] rounded-lg mt-2">
                          <span className="label-mono text-[8px] text-[#64748B] block">
                            DELIVERABLE SPECIFICATION
                          </span>
                          <span className="text-xs font-mono font-bold text-[#12345B]">
                            {program.capstoneProject.deliverable}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Faculty Action Footer */}
            <div className="pt-6 border-t border-[#D9E6F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="label-mono text-[9px] text-[#64748B] block">
                  Faculty 0{faculty.number} Readiness
                </span>
                <p className="text-xs text-[#64748B]">
                  Admission is selective based on intent, discipline, and execution diagnostic.
                </p>
              </div>

              <Link
                href={`/apply?track=${faculty.id}`}
                className="btn-press inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs sm:text-sm font-bold font-mono rounded-full transition-colors shadow-sm"
              >
                <span>APPLY FOR FACULTY {faculty.number}</span>
                <ArrowRight className="w-4 h-4 text-[#E6AD3C]" />
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
