import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FACULTIES } from '@/data/academyData';
import { GeometricShape, WordAccent } from '@/components/GeometricShapes';
import {
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle2,
  Layers,
  Sparkles,
  Award,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Curriculum & Academic Faculties',
  description:
    'Explore the 4 foundational disciplines of NIT7ER Academy: Creative Technology, Cognitive Performance (Flow7), Writing & Thought Leadership, and Computer Education.',
};

export default function ProgramsPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header Banner */}
      <section className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
        <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-10 hidden sm:block">
          <GeometricShape type="hexagon" color="gold" size="xl" variant="outline" />
        </div>

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-50 text-[#12345B] text-xs font-black uppercase tracking-wider border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Academic Catalog</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12345B] leading-tight">
            The 4 Disciplines of the{' '}
            <WordAccent shape="square" color="navy">Modern Polymath</WordAccent>.
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Specialization without integration breeds fragile builders. At NIT7ER Academy, our curriculum is engineered across four pillars: constructing formidable software, mastering self-regulation through Flow7, articulating ideas with crisp prose, and understanding computing from its lowest silicon logic gates.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs font-bold text-slate-500">
            <span>4 Faculties</span>
            <span>•</span>
            <span>16 Production Modules</span>
            <span>•</span>
            <span>100% Project Defense Required</span>
          </div>
        </div>
      </section>

      {/* Deep Dive into Each Faculty */}
      <div className="space-y-12">
        {FACULTIES.map((faculty) => (
          <article
            key={faculty.id}
            id={faculty.id}
            className="na-section p-6 sm:p-10 bg-white border border-slate-200 space-y-8 scroll-mt-24 shadow-sm"
          >
            {/* Faculty Header */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-slate-200 pb-6">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-[#12345B]">
                    {faculty.number}
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border rounded-xs ${faculty.badgeColor}`}>
                    {faculty.badge}
                  </span>
                  <GeometricShape type={faculty.shape} color={faculty.shapeColor} size="sm" />
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#12345B]">
                  {faculty.title}
                </h2>

                <p className="text-xs sm:text-sm font-semibold text-amber-700 italic">
                  &ldquo;{faculty.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {faculty.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-600 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{faculty.duration}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    <span>{faculty.format}</span>
                  </span>
                </div>
              </div>

              {/* Living Proof Box */}
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl lg:max-w-xs shrink-0 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#12345B]">
                  <Layers className="w-4 h-4 text-amber-500" />
                  <span>Living Proof of Concept</span>
                </div>
                <h3 className="text-sm font-black text-[#12345B]">
                  {faculty.livingProof.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {faculty.livingProof.description}
                </p>
                {faculty.livingProof.link && (
                  <a
                    href={faculty.livingProof.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1769AA] hover:underline pt-1"
                  >
                    <span>View Repository / Live App</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Modules Grid */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#12345B]">
                Curriculum Modules &amp; Sprint Structure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faculty.modules.map((mod, i) => (
                  <div
                    key={mod.title}
                    className="p-5 bg-slate-50/70 border border-slate-200 rounded-lg space-y-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#12345B] text-white text-xs font-black flex items-center justify-center">
                        0{i + 1}
                      </span>
                      <h4 className="font-bold text-sm text-[#12345B]">
                        {mod.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {mod.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {mod.topics.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-medium px-2 py-0.5 bg-white border border-slate-200 text-slate-700 rounded-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes & Application Trigger */}
            <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#12345B] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>Graduate Capabilities</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-700">
                  {faculty.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 pt-2 md:pt-0">
                <Link
                  href={`/apply?track=${faculty.id}`}
                  className="na-action inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#12345B] hover:bg-[#0A1E36] text-white text-xs sm:text-sm font-bold shadow-xs"
                >
                  <span>Apply for Faculty {faculty.number}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
