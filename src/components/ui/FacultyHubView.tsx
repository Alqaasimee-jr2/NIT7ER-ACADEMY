'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Faculty, FACULTIES } from '@/data/academyData';
import {
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle2,
  Award,
  Layers,
  Calendar,
  Compass,
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
import { ProgramModuleDrawer } from '@/components/ui/ProgramModuleDrawer';
import { ProgramSyllabusModal } from '@/components/ui/ProgramSyllabusModal';

interface FacultyHubViewProps {
  faculty: Faculty;
}

export function FacultyHubView({ faculty }: FacultyHubViewProps) {
  // Tab state: 'all' or specific program id
  const [selectedTrackId, setSelectedTrackId] = useState<string>('all');
  const [activeModalProgramId, setActiveModalProgramId] = useState<string | null>(null);

  // Sync with URL hash or query param (e.g. /programs/creative-tech#ct-flutter or ?program=ct-flutter) on mount and on hash change
  useEffect(() => {
    const syncHash = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash.replace('#', '');
      const searchParams = new URLSearchParams(window.location.search);
      const queryTarget = searchParams.get('program') || searchParams.get('open');
      const targetId = hash || queryTarget;

      if (targetId && faculty.programs.some((p) => p.id === targetId)) {
        setSelectedTrackId(targetId);
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
    };
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [faculty.programs]);

  const handleTrackChange = (trackId: string) => {
    setSelectedTrackId(trackId);
    if (typeof window !== 'undefined') {
      if (trackId === 'all') {
        window.history.replaceState(null, '', window.location.pathname);
      } else {
        window.history.replaceState(null, '', `#${trackId}`);
      }
    }
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
        return <Compass className="w-4 h-4 text-[#1769AA]" />;
    }
  };

  const displayedPrograms =
    selectedTrackId === 'all'
      ? faculty.programs
      : faculty.programs.filter((p) => p.id === selectedTrackId);

  const modalProgram = faculty.programs.find((p) => p.id === activeModalProgramId) || null;
  const otherFaculties = FACULTIES.filter((f) => f.id !== faculty.id);

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* 1. Immersive Faculty Banner */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 bg-white space-y-8 border border-[#D9E6F0] shadow-xs relative overflow-hidden">
        <div
          className="absolute -right-8 -top-8 w-64 h-64 opacity-10 pointer-events-none bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('/brand/shapes-accent.png')` }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 border-b border-[#D9E6F0] pb-8">
          <div className="lg:col-span-7 space-y-4">
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

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12345B] tracking-tight leading-tight">
              {faculty.title}
            </h1>

            <p className="text-xs sm:text-sm font-mono text-[#1769AA] font-semibold italic">
              &ldquo;{faculty.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {faculty.description}
            </p>

            {/* Living Proof / Case Study Pill Box */}
            {faculty.caseStudy && (
              <div className="p-4 bg-[#EEF7FC]/70 border border-[#D9E6F0] rounded-xl space-y-1.5 mt-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#1769AA] font-bold">
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
                    <span>INSPECT LAB CASE STUDY</span>
                    <ArrowRight className="w-3 h-3 text-[#E6AD3C]" />
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Architectural Schematic */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-[#EEF7FC]/60 border border-[#D9E6F0] flex flex-col justify-center items-center shadow-xs">
            <span className="label-mono text-xs text-[#64748B] self-start mb-2">
              ARCHITECTURAL PIPELINE SCHEMATIC // {faculty.number}
            </span>
            {renderDiagram(faculty.id)}
            <div className="w-full mt-3 pt-3 border-t border-[#D9E6F0] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#64748B]">
              <span>Lead Anchor:</span>
              <span className="font-bold text-[#12345B] text-right">
                {faculty.leadAnchor}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Hub Stats & CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-[#12345B] font-bold">
              {faculty.programs.length} Specialized Tracks
            </span>
            <span className="px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-[#1769AA] font-bold">
              100% Audited Capstone Defense
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href={`/apply?track=${faculty.id}`}
              className="btn-press inline-flex items-center gap-2 px-5 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-mono font-bold rounded-full transition-colors shadow-sm"
            >
              <span>APPLY FOR FACULTY {faculty.number}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
            </Link>
            <Link
              href="/programs"
              className="btn-press inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-[#D9E6F0] hover:bg-[#EEF7FC] text-[#12345B] text-xs font-mono font-bold rounded-full transition-colors"
            >
              <span>FULL CATALOG</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Interactive Track Selector Tabs */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#D9E6F0] pb-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring"></span>
              <span className="font-bold text-[#12345B]">TRACK SELECTOR</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#12345B] tracking-tight mt-1.5">
              Specialized Syllabi Under Faculty {faculty.number}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
              Select a track below to focus on its syllabus, sprint projects, and capstone deliverable:
            </p>
          </div>

          <div className="text-xs font-mono text-[#64748B]">
            Showing {displayedPrograms.length} of {faculty.programs.length} tracks
          </div>
        </div>

        {/* Tab Pills */}
        <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
          <button
            type="button"
            onClick={() => handleTrackChange('all')}
            className={`btn-press px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all shrink-0 ${
              selectedTrackId === 'all'
                ? 'bg-[#12345B] text-white shadow-xs'
                : 'bg-white text-[#64748B] border border-[#D9E6F0] hover:text-[#12345B] hover:bg-[#EEF7FC]'
            }`}
          >
            All Tracks ({faculty.programs.length})
          </button>
          {faculty.programs.map((prog) => {
            const isActive = selectedTrackId === prog.id;
            return (
              <button
                key={prog.id}
                type="button"
                onClick={() => handleTrackChange(prog.id)}
                className={`btn-press px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#12345B] text-white shadow-xs'
                    : 'bg-white text-[#64748B] border border-[#D9E6F0] hover:text-[#12345B] hover:bg-[#EEF7FC]'
                }`}
              >
                <span className={isActive ? 'text-[#E6AD3C]' : 'text-[#1769AA]'}>{prog.code}</span>
                <span className="truncate max-w-[180px]">{prog.title}</span>
              </button>
            );
          })}
        </div>

        {/* Focused Program Cards */}
        <div className="space-y-6">
          {displayedPrograms.map((program) => (
            <div
              key={program.id}
              id={program.id}
              className="technical-border curve-asymmetric p-5 sm:p-8 bg-[#FAFCFE] border border-[#D9E6F0] rounded-2xl space-y-6 shadow-xs hover:border-[#1769AA]/50 transition-all scroll-mt-24"
            >
              {/* Program Top Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-[#D9E6F0] pb-4">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-[#12345B] text-white rounded-md text-xs font-mono font-bold">
                      {program.code}
                    </span>
                    <span className="px-2.5 py-0.5 bg-[#EEF7FC] border border-[#D9E6F0] text-[#1769AA] rounded-md text-xs font-mono font-bold">
                      {program.level}
                    </span>
                    <span className="text-xs font-mono text-[#64748B] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#1769AA]" />
                      <span>{program.duration}</span>
                    </span>
                    <span className="text-xs font-mono text-[#64748B]">
                      • {program.format}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#12345B] tracking-tight">
                    <Link
                      href={`/programs/${faculty.id}/${program.id}`}
                      className="hover:text-[#1769AA] transition-colors"
                    >
                      {program.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm font-mono text-[#1769AA] italic font-semibold">
                    &ldquo;{program.tagline}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pt-1">
                    {program.description}
                  </p>

                  <div className="pt-1 text-xs text-[#64748B]">
                    <strong className="text-[#12345B] font-mono">Target Candidates:</strong>{' '}
                    {program.targetAudience}
                  </div>
                </div>

                {/* Header Action Buttons */}
                <div className="shrink-0 flex flex-wrap items-center gap-2 pt-2 lg:pt-0">
                  <button
                    type="button"
                    onClick={() => setActiveModalProgramId(program.id)}
                    className="btn-press inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white border border-[#1769AA] hover:bg-[#EEF7FC] text-[#12345B] text-xs font-bold font-mono rounded-full transition-colors shadow-2xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#1769AA]" />
                    <span>QUICK ROADMAP</span>
                  </button>

                  <Link
                    href={`/programs/${faculty.id}/${program.id}`}
                    className="btn-press inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#EEF7FC] border border-[#D9E6F0] hover:border-[#1769AA] text-[#12345B] text-xs font-bold font-mono rounded-full transition-colors"
                  >
                    <span>FULL SYLLABUS PAGE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1769AA]" />
                  </Link>

                  <Link
                    href={`/apply?track=${faculty.id}&program=${program.id}`}
                    className="btn-press inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-bold font-mono rounded-full transition-colors shadow-sm"
                  >
                    <span>APPLY FOR {program.code}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
                  </Link>
                </div>
              </div>

              {/* Collapsible Progressive Disclosure Drawer for Modules & Topics */}
              <ProgramModuleDrawer
                key={`${program.id}-${selectedTrackId}`}
                modules={program.modules}
                programCode={program.code}
                defaultOpen={selectedTrackId !== 'all'}
              />

              {/* Outcomes & Mandatory Capstone Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-1">
                {/* Learning Outcomes */}
                <div className="lg:col-span-6 p-5 bg-white border border-[#D9E6F0] rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="label-mono text-xs text-[#64748B] font-bold">
                      VERIFIED LEARNING OUTCOMES
                    </span>
                    <span className="text-xs font-mono text-[#1769AA]">
                      {program.learningOutcomes.length} Direct Competencies
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-[#1F2937]">
                    {program.learningOutcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1769AA] mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mandatory Capstone Project Card */}
                <div className="lg:col-span-6 p-5 bg-[#EEF7FC]/80 border border-[#D9E6F0] rounded-xl space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-[#1769AA]">
                        <Award className="w-4 h-4 text-[#E6AD3C]" />
                        <span>MANDATORY CAPSTONE PROJECT</span>
                      </div>
                      <span className="px-2 py-0.5 bg-white border border-[#D9E6F0] text-[#12345B] font-bold rounded-md">
                        100% DEFENSE
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-black text-[#12345B]">
                      {program.capstoneProject.title}
                    </h4>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {program.capstoneProject.description}
                    </p>
                  </div>

                  <div className="p-3 bg-white border border-[#D9E6F0] rounded-lg mt-2 space-y-1">
                    <span className="label-mono text-xs text-[#64748B] block">
                      DELIVERABLE SPECIFICATION
                    </span>
                    <span className="text-xs font-mono font-bold text-[#12345B] block">
                      {program.capstoneProject.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Cross-Faculty Wayfinder Bar */}
      <section className="technical-border curve-asymmetric p-6 sm:p-8 bg-white border border-[#D9E6F0] space-y-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D9E6F0] pb-3">
          <div>
            <span className="label-mono text-xs text-[#1769AA] block font-bold">
              EXPLORE OTHER DISCIPLINES
            </span>
            <h3 className="text-lg font-black text-[#12345B]">
              Switch to Another Faculty Hub
            </h3>
          </div>
          <Link
            href="/programs"
            className="gold-link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#12345B]"
          >
            <span>VIEW ALL 4 IN CATALOG</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {otherFaculties.map((other) => (
            <Link
              key={other.id}
              href={`/programs/${other.id}`}
              className="btn-press p-4 bg-[#FAFCFE] hover:bg-[#EEF7FC] border border-[#D9E6F0] hover:border-[#1769AA] rounded-xl transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-[#1769AA] font-bold">
                    {getFacultyIcon(other.id)}
                    <span>FACULTY {other.number}</span>
                  </div>
                  <span className="text-[#64748B]">{other.duration}</span>
                </div>
                <h4 className="text-sm font-bold text-[#12345B] group-hover:text-[#1769AA] transition-colors line-clamp-1">
                  {other.title}
                </h4>
                <p className="text-xs text-[#64748B] line-clamp-2">
                  {other.tagline}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#D9E6F0] text-xs font-mono font-bold text-[#12345B] group-hover:text-[#1769AA]">
                <span>{other.programs.length} Tracks</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Syllabus Modal for Deep Dive */}
      {modalProgram && (
        <ProgramSyllabusModal
          program={modalProgram}
          facultyId={faculty.id}
          isOpen={!!activeModalProgramId}
          onClose={() => setActiveModalProgramId(null)}
        />
      )}
    </div>
  );
}
