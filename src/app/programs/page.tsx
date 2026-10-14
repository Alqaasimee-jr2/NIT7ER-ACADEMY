import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FACULTIES } from '@/data/academyData';
import { ArrowRight, Clock, BookOpen, CheckCircle2, Layers, Award } from 'lucide-react';
import {
  CreativeTechDiagram,
  CognitiveSystemsDiagram,
  WritingDiagram,
  ComputerEducationDiagram,
} from '@/components/illustrations/FacultyDiagrams';

export const metadata: Metadata = {
  title: 'Academic Faculties & Curriculum',
  description:
    'Explore the 4 foundational disciplines of NIT7ER Academy: Creative Technology, Cognitive Performance (Flow7), Writing & Thought Leadership, and Computer Education.',
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

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header Banner */}
      <section className="technical-border p-6 sm:p-10 bg-white space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FAF9F6] border border-[#E5E5E0] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C]"></span>
            <span className="font-bold text-[#121212]">ACADEMIC CATALOG // 4 FOUNDATIONAL TRACKS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#121212] tracking-tight leading-tight">
            The 4 Disciplines of the Modern Polymath.
          </h1>

          <p className="text-sm sm:text-base text-[#71717A] leading-relaxed font-normal">
            Specialization without integration breeds fragile builders. At NIT7ER Academy, our curriculum is engineered across four pillars: constructing formidable software, mastering self-regulation through Flow7, articulating ideas with crisp prose, and understanding computing from its lowest silicon logic gates.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#71717A]">
            <span>[4 FACULTIES]</span>
            <span>•</span>
            <span>[16 SPRINT MODULES]</span>
            <span>•</span>
            <span>[PROJECT DEFENSE MANDATORY]</span>
          </div>
        </div>
      </section>

      {/* Deep Dive into Each Faculty */}
      <div className="space-y-12">
        {FACULTIES.map((faculty) => (
          <article
            key={faculty.id}
            id={faculty.id}
            className="technical-border p-6 sm:p-10 bg-white space-y-8 scroll-mt-24"
          >
            {/* Faculty Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[#E5E5E0] pb-8">
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-3 font-mono text-xs text-[#71717A]">
                  <span className="text-xl font-bold text-[#121212]">
                    {faculty.number}
                  </span>
                  <span className="px-2 py-0.5 bg-[#FAF9F6] border border-[#E5E5E0] text-[#121212] font-bold">
                    {faculty.badge}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C9A84C]" />
                    <span>{faculty.duration}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-[#C9A84C]" />
                    <span>{faculty.format}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#121212] tracking-tight">
                  {faculty.title}
                </h2>

                <p className="text-xs sm:text-sm font-mono text-[#C9A84C] font-semibold italic">
                  &ldquo;{faculty.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed">
                  {faculty.description}
                </p>

                {/* Living Proof Box */}
                <div className="p-4 bg-[#FAF9F6] border border-[#E5E5E0] space-y-1.5 mt-3">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-[#C9A84C] font-bold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>INCUBATED PROOF OF WORK</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#121212]">
                    {faculty.livingProof.title}
                  </h3>
                  <p className="text-xs text-[#71717A] leading-relaxed">
                    {faculty.livingProof.description}
                  </p>
                  {faculty.livingProof.link && (
                    <a
                      href={faculty.livingProof.link}
                      target="_blank"
                      rel="noreferrer"
                      className="gold-link inline-flex items-center gap-1 text-xs font-mono font-bold text-[#121212] pt-1"
                    >
                      <span>INSPECT ARCHITECTURE REPOSITORY</span>
                      <ArrowRight className="w-3 h-3 text-[#C9A84C]" />
                    </a>
                  )}
                </div>
              </div>

              {/* Vector Schematic */}
              <div className="lg:col-span-5 p-3 bg-[#FAF9F6] border border-[#E5E5E0] flex flex-col justify-center items-center">
                <span className="label-mono text-[8px] text-[#71717A] self-start mb-2">
                  ARCHITECTURAL PIPELINE SCHEMATIC // 0{faculty.number}
                </span>
                {renderDiagram(faculty.id)}
              </div>
            </div>

            {/* Modules Grid */}
            <div className="space-y-4">
              <span className="label-mono block text-[#121212]">
                Syllabus Sprint Breakdown
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faculty.modules.map((mod, i) => (
                  <div
                    key={mod.title}
                    className="p-5 bg-[#FAF9F6] border border-[#E5E5E0] space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#C9A84C]">
                        [MODULE 0{i + 1}]
                      </span>
                      <h4 className="font-bold text-sm text-[#121212]">
                        {mod.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#71717A] leading-relaxed">
                      {mod.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {mod.topics.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 bg-white border border-[#E5E5E0] text-[#121212]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes & Action */}
            <div className="pt-6 border-t border-[#E5E5E0] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <span className="label-mono text-[9px] text-[#71717A] block">
                  Graduate Verification Outcomes
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-[#121212]">
                  {faculty.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C] mt-0.5 shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 pt-2 md:pt-0">
                <Link
                  href={`/apply?track=${faculty.id}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#121212] hover:bg-[#27272A] text-white text-xs sm:text-sm font-bold font-mono transition-colors"
                >
                  <span>APPLY FOR FACULTY {faculty.number}</span>
                  <ArrowRight className="w-4 h-4 text-[#F5C842]" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
