'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FACULTIES, Faculty, Program } from '@/data/academyData';
import { ArrowRight, CheckCircle2, Clock, BookOpen, Award, ChevronRight, Calendar } from 'lucide-react';
import { ProgramSyllabusModal } from '@/components/ui/ProgramSyllabusModal';
import { ProgramModuleDrawer } from '@/components/ui/ProgramModuleDrawer';
import {
  CreativeTechDiagram,
  CognitiveSystemsDiagram,
  WritingDiagram,
  ComputerEducationDiagram,
} from '@/components/illustrations/FacultyDiagrams';

export function FacultyTabs() {
  const [activeTab, setActiveTab] = useState<string>(FACULTIES[0].id);
  const currentFaculty: Faculty = FACULTIES.find((f) => f.id === activeTab) || FACULTIES[0];

  // Selected program within active faculty
  const [selectedProgramId, setSelectedProgramId] = useState<string>(
    currentFaculty.programs[0]?.id || ''
  );

  // Syllabus modal state
  const [isSyllabusOpen, setIsSyllabusOpen] = useState<boolean>(false);

  // Sync selected program when faculty changes
  const activeProgram: Program =
    currentFaculty.programs.find((p) => p.id === selectedProgramId) ||
    currentFaculty.programs[0];

  const handleFacultyChange = (facultyId: string) => {
    setActiveTab(facultyId);
    const targetFac = FACULTIES.find((f) => f.id === facultyId) || FACULTIES[0];
    setSelectedProgramId(targetFac.programs[0]?.id || '');
  };

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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#D9E6F0] pb-3">
        <div>
          <span className="label-mono px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
            Academic Architecture
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#12345B] tracking-tight mt-1.5">
            4 Faculties &amp; 12 Specialized Programs
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mt-0.5">
            Select a foundational discipline to inspect its architectural blueprint, specialized program syllabi, and capstone requirements.
          </p>
        </div>
        <Link
          href="/programs"
          className="gold-link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#12345B] shrink-0"
        >
          <span>VIEW FULL CATALOG (12 TRACKS)</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
        </Link>
      </div>

      {/* Tabs Selector Bar (2x2 on mobile/tablet, 4 cols on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {FACULTIES.map((fac) => {
          const isActive = fac.id === activeTab;
          return (
            <button
              key={fac.id}
              onClick={() => handleFacultyChange(fac.id)}
              className={`btn-press px-4 py-3 border text-left transition-all rounded-2xl ${
                isActive
                  ? 'bg-[#12345B] text-white border-[#12345B] shadow-sm'
                  : 'bg-white text-[#64748B] border-[#D9E6F0] hover:border-[#1769AA] hover:text-[#12345B]'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className={`label-mono text-[9px] ${isActive ? 'text-[#E6AD3C]' : 'text-[#64748B]'}`}>
                  FACULTY {fac.number}
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E6AD3C] shrink-0"></span>}
              </div>
              <span className="block text-xs sm:text-sm font-bold line-clamp-1 mt-0.5">
                {fac.title}
              </span>
              <span className="block text-[10px] font-mono mt-0.5 opacity-80">
                {fac.programs.length} Specialized Tracks
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Faculty Content Card */}
      <div className="technical-border curve-asymmetric p-5 sm:p-8 bg-white space-y-8 shadow-xs border border-[#D9E6F0]">
        {/* Top Header & Architectural Vector Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center border-b border-[#D9E6F0] pb-8">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#64748B]">
              <span className="px-2.5 py-0.5 bg-[#EEF7FC] border border-[#D9E6F0] text-[#12345B] font-bold rounded-full">
                {currentFaculty.badge}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#1769AA] shrink-0" />
                <span>{currentFaculty.duration}</span>
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-[#1769AA] shrink-0" />
                <span>{currentFaculty.format}</span>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#12345B] tracking-tight">
              <Link
                href={`/programs/${currentFaculty.id}`}
                className="hover:text-[#1769AA] transition-colors"
              >
                {currentFaculty.title}
              </Link>
            </h3>

            <p className="text-xs sm:text-sm font-mono text-[#1769AA] font-semibold italic">
              &ldquo;{currentFaculty.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {currentFaculty.description}
            </p>

            {currentFaculty.caseStudy && (
              <Link
                href={currentFaculty.caseStudy.link || '/labs'}
                className="group block p-3.5 bg-[#EEF7FC]/70 hover:bg-[#EEF7FC] border border-[#D9E6F0] hover:border-[#1769AA] rounded-xl space-y-1 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="label-mono text-[9px] text-[#1769AA] block font-bold">
                    Incubated Lab Case Study
                  </span>
                  <span className="font-mono text-[10px] font-bold text-[#12345B] group-hover:text-[#1769AA] transition-colors">
                    Inspect Lab →
                  </span>
                </div>
                <h4 className="text-xs font-bold text-[#12345B] group-hover:text-[#1769AA] transition-colors">
                  {currentFaculty.caseStudy.title}
                </h4>
                <p className="text-xs text-[#64748B]">
                  {currentFaculty.caseStudy.description}
                </p>
              </Link>
            )}
          </div>

          {/* Right Column: Architectural Vector Diagram */}
          <div className="lg:col-span-5 p-4 rounded-2xl bg-[#EEF7FC]/60 border border-[#D9E6F0] flex flex-col justify-center items-center shadow-xs">
            <span className="label-mono text-[10px] sm:text-xs text-[#64748B] self-start mb-2">
              ARCHITECTURAL PIPELINE SCHEMATIC // {currentFaculty.number}
            </span>
            {renderDiagram(currentFaculty.id)}
          </div>
        </div>

        {/* Specialized Programs Sub-Selector */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="label-mono text-[#12345B] block">
                Specialized Programs Under Faculty {currentFaculty.number}
              </span>
              <p className="text-xs text-[#64748B]">
                Choose a specific track to inspect its sprint syllabus, target outcomes, and verified capstone deliverable:
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#1769AA] font-bold bg-[#EEF7FC] px-2.5 py-1 rounded-full border border-[#D9E6F0] shrink-0 self-start sm:self-auto">
              {currentFaculty.programs.length} Tracks Available
            </span>
          </div>

          {/* Program Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentFaculty.programs.map((prog) => {
              const isProgActive = prog.id === activeProgram.id;
              return (
                <button
                  key={prog.id}
                  onClick={() => setSelectedProgramId(prog.id)}
                  className={`btn-press p-3.5 text-left border rounded-xl transition-all space-y-1.5 relative ${
                    isProgActive
                      ? 'border-[#12345B] bg-[#EEF7FC] ring-2 ring-[#12345B] shadow-2xs'
                      : 'border-[#D9E6F0] bg-white hover:border-[#1769AA]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 text-xs font-mono">
                    <span className="font-bold text-[#1769AA]">{prog.code}</span>
                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {isProgActive && (
                        <span className="text-[9px] px-2 py-0.5 bg-[#E6AD3C] text-[#12345B] font-bold rounded-full">
                          SELECTED
                        </span>
                      )}
                      <span className="text-[10px] px-2 py-0.5 bg-white border border-[#D9E6F0] text-[#64748B] rounded-full">
                        {prog.level}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#12345B] line-clamp-1">
                    {prog.title}
                  </h4>
                  <p className="text-[11px] text-[#64748B] line-clamp-2 leading-relaxed">
                    {prog.tagline}
                  </p>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-[#64748B]">
                    <span>{prog.duration}</span>
                    <span
                      className={`font-bold flex items-center gap-0.5 ${
                        isProgActive ? 'text-[#12345B]' : 'text-[#1769AA]'
                      }`}
                    >
                      <span>{isProgActive ? '[Active Track]' : 'View Track'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Program Detailed Breakdown */}
        {activeProgram && (
          <div className="p-4 sm:p-6 bg-[#FAFCFE] border border-[#D9E6F0] rounded-2xl space-y-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#D9E6F0] pb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="label-mono px-2 py-0.5 bg-[#12345B] text-white rounded-md text-[10px]">
                    {activeProgram.code}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#1769AA]">
                    {activeProgram.duration} • {activeProgram.level}
                  </span>
                  <Link
                    href={`/programs/${currentFaculty.id}/${activeProgram.id}`}
                    className="font-mono text-[11px] font-bold text-[#12345B] underline decoration-[#E6AD3C] underline-offset-4 hover:text-[#1769AA] transition-colors"
                  >
                    Open Full Track Page →
                  </Link>
                </div>
                <h4 className="text-base sm:text-lg font-black text-[#12345B]">
                  <Link
                    href={`/programs/${currentFaculty.id}/${activeProgram.id}`}
                    className="hover:text-[#1769AA] transition-colors"
                  >
                    {activeProgram.title}
                  </Link>
                </h4>
                <p className="text-xs text-[#64748B] max-w-2xl leading-relaxed">
                  {activeProgram.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsSyllabusOpen(true)}
                  className="btn-press inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white border border-[#1769AA] hover:bg-[#EEF7FC] text-[#12345B] text-xs font-bold font-mono rounded-full transition-colors shadow-2xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#1769AA] shrink-0" />
                  <span>INSPECT {activeProgram.duration.toUpperCase()} ROADMAP</span>
                </button>
                <Link
                  href={`/programs/${currentFaculty.id}/${activeProgram.id}`}
                  className="btn-press inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#EEF7FC] border border-[#D9E6F0] hover:border-[#1769AA] text-[#12345B] text-xs font-bold font-mono rounded-full transition-colors"
                >
                  <span>FULL SYLLABUS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1769AA] shrink-0" />
                </Link>
                <Link
                  href={`/apply?track=${currentFaculty.id}&program=${activeProgram.id}`}
                  className="btn-press inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-bold font-mono rounded-full transition-colors shadow-sm"
                >
                  <span>APPLY FOR {activeProgram.code}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C] shrink-0" />
                </Link>
              </div>
            </div>

            {/* Collapsible Sprint Modules */}
            <ProgramModuleDrawer
              key={activeProgram.code}
              modules={activeProgram.modules}
              programCode={activeProgram.code}
              defaultOpen={false}
            />

            {/* Capstone Project Banner for this Program */}
            <div className="p-4 bg-[#EEF7FC]/80 border border-[#D9E6F0] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#1769AA]">
                  <Award className="w-4 h-4 text-[#E6AD3C] shrink-0" />
                  <span>MANDATORY CAPSTONE DELIVERABLE</span>
                </div>
                <h5 className="text-xs sm:text-sm font-bold text-[#12345B]">
                  {activeProgram.capstoneProject.title}
                </h5>
                <p className="text-xs text-[#64748B] max-w-xl">
                  {activeProgram.capstoneProject.description}
                </p>
              </div>
              <div className="p-3 bg-white border border-[#D9E6F0] rounded-lg shrink-0 text-left sm:text-right sm:max-w-xs">
                <span className="label-mono text-[10px] text-[#64748B] block mb-0.5">VERIFICATION ARTIFACT</span>
                <span className="text-xs font-mono font-bold text-[#12345B] leading-snug block">
                  {activeProgram.capstoneProject.deliverable}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Outcomes & Navigation Bar */}
        <div className="pt-4 border-t border-[#D9E6F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="label-mono text-xs text-[#64748B] block">
              Faculty Institutional Competency
            </span>
            <div className="flex items-start sm:items-center gap-2 text-xs font-medium text-[#12345B]">
              <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5 sm:mt-0" />
              <span>{currentFaculty.outcomes[0]}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            <Link
              href={`/programs/${currentFaculty.id}`}
              className="px-4 py-2.5 text-center text-xs font-mono font-bold text-[#12345B] hover:text-[#1769AA] bg-[#EEF7FC]/60 sm:bg-transparent rounded-full transition-colors"
            >
              Enter Faculty Hub →
            </Link>
            <Link
              href={`/apply?track=${currentFaculty.id}`}
              className="btn-press inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs sm:text-sm font-bold font-mono rounded-full transition-colors shadow-sm"
            >
              <span>APPLY FOR FACULTY {currentFaculty.number}</span>
              <ArrowRight className="w-4 h-4 text-[#E6AD3C] shrink-0" />
            </Link>
          </div>
        </div>
      </div>

      {/* Program Syllabus & Week-by-Week Roadmap Modal */}
      <ProgramSyllabusModal
        program={activeProgram}
        facultyId={currentFaculty.id}
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
      />
    </section>
  );
}
