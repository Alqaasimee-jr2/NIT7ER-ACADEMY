'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FACULTIES, Faculty } from '@/data/academyData';
import { ArrowRight, CheckCircle2, Clock, BookOpen, Layers } from 'lucide-react';
import {
  CreativeTechDiagram,
  CognitiveSystemsDiagram,
  WritingDiagram,
  ComputerEducationDiagram,
} from '@/components/illustrations/FacultyDiagrams';

export function FacultyTabs() {
  const [activeTab, setActiveTab] = useState<string>(FACULTIES[0].id);
  const currentFaculty: Faculty = FACULTIES.find((f) => f.id === activeTab) || FACULTIES[0];

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
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E5E5E0] pb-3">
        <div>
          <span className="label-mono text-[#C9A84C]">Academic Structure</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#121212] tracking-tight mt-1">
            The 4 Foundational Faculties
          </h2>
          <p className="text-xs sm:text-sm text-[#71717A] max-w-xl mt-0.5">
            Select a discipline to examine its architectural blueprint, sprint syllabus, and live studio proof of work.
          </p>
        </div>
        <Link
          href="/programs"
          className="gold-link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#121212] shrink-0"
        >
          <span>VIEW FULL SYLLABUS DOSSIER</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C]" />
        </Link>
      </div>

      {/* Tabs Selector Bar */}
      <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
        {FACULTIES.map((fac) => {
          const isActive = fac.id === activeTab;
          return (
            <button
              key={fac.id}
              onClick={() => setActiveTab(fac.id)}
              className={`shrink-0 px-4 py-3 border text-left transition-all ${
                isActive
                  ? 'bg-[#121212] text-white border-[#121212] shadow-xs'
                  : 'bg-white text-[#71717A] border-[#E5E5E0] hover:border-[#121212] hover:text-[#121212]'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className={`label-mono text-[9px] ${isActive ? 'text-[#F5C842]' : 'text-[#71717A]'}`}>
                  FACULTY {fac.number}
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]"></span>}
              </div>
              <span className="block text-xs sm:text-sm font-bold truncate max-w-[200px] mt-0.5">
                {fac.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Faculty Content Card */}
      <div className="technical-border p-5 sm:p-8 bg-white space-y-8">
        {/* Top Header & Architectural Vector Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#E5E5E0] pb-8">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-3 text-xs font-mono text-[#71717A]">
              <span className="px-2 py-0.5 bg-[#FAF9F6] border border-[#E5E5E0] text-[#121212] font-bold">
                {currentFaculty.badge}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#C9A84C]" />
                <span>{currentFaculty.duration}</span>
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-[#C9A84C]" />
                <span>{currentFaculty.format}</span>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#121212] tracking-tight">
              {currentFaculty.title}
            </h3>

            <p className="text-xs sm:text-sm font-mono text-[#C9A84C] font-semibold italic">
              &ldquo;{currentFaculty.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed">
              {currentFaculty.description}
            </p>

            <div className="p-3 bg-[#FAF9F6] border border-[#E5E5E0] space-y-1">
              <span className="label-mono text-[9px] text-[#C9A84C] block">
                Incubated Proof of Work
              </span>
              <h4 className="text-xs font-bold text-[#121212]">
                {currentFaculty.livingProof.title}
              </h4>
              <p className="text-xs text-[#71717A]">
                {currentFaculty.livingProof.description}
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Vector Diagram */}
          <div className="lg:col-span-5 p-3 bg-[#FAF9F6] border border-[#E5E5E0] flex flex-col justify-center items-center">
            <span className="label-mono text-[8px] text-[#71717A] self-start mb-2">
              ARCHITECTURAL PIPELINE SCHEMATIC // 0{currentFaculty.number}
            </span>
            {renderDiagram(currentFaculty.id)}
          </div>
        </div>

        {/* Modules Breakdown */}
        <div className="space-y-4">
          <span className="label-mono block text-[#121212]">
            Curriculum Sprint Modules
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentFaculty.modules.map((mod, i) => (
              <div
                key={mod.title}
                className="p-4 bg-[#FAF9F6] border border-[#E5E5E0] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#C9A84C]">
                    [0{i + 1}]
                  </span>
                  <h5 className="font-bold text-xs sm:text-sm text-[#121212]">
                    {mod.title}
                  </h5>
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
        <div className="pt-4 border-t border-[#E5E5E0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="label-mono text-[9px] text-[#71717A] block">
              Core Graduate Capability
            </span>
            <div className="flex items-center gap-2 text-xs font-medium text-[#121212]">
              <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0" />
              <span>{currentFaculty.outcomes[0]}</span>
            </div>
          </div>

          <Link
            href={`/apply?track=${currentFaculty.id}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#121212] hover:bg-[#27272A] text-white text-xs sm:text-sm font-bold font-mono transition-colors shrink-0"
          >
            <span>APPLY FOR FACULTY {currentFaculty.number}</span>
            <ArrowRight className="w-4 h-4 text-[#F5C842]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
