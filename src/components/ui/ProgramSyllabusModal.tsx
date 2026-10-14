'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Program } from '@/data/academyData';
import {
  X,
  Clock,
  Layers,
  Award,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { N7BrandMark } from '@/components/N7BrandMark';

interface ProgramSyllabusModalProps {
  program: Program | null;
  facultyId?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ProgramSyllabusModal({
  program,
  facultyId,
  isOpen,
  onClose,
}: ProgramSyllabusModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !program) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${program.code} Detailed Syllabus`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="technical-border curve-asymmetric relative w-full max-w-3xl max-h-[90vh] bg-white border border-[#D9E6F0] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#D9E6F0] bg-[#FAFCFE]">
          <div className="flex items-center gap-3">
            <N7BrandMark size="sm" variant="gold" />
            <div>
              <div className="flex items-center gap-2">
                <span className="label-mono px-2 py-0.5 bg-[#12345B] text-white rounded text-[10px] font-bold">
                  {program.code}
                </span>
                <span className="text-xs font-mono font-bold text-[#1769AA]">
                  {program.duration} • {program.level}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#12345B] mt-0.5 tracking-tight">
                {program.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#12345B] hover:bg-[#EEF7FC] rounded-full transition-colors"
            aria-label="Close syllabus roadmap modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-[#EEF7FC]/70 border border-[#D9E6F0] rounded-xl space-y-0.5">
              <span className="label-mono text-[9px] text-[#64748B] block">TRACK DURATION</span>
              <span className="text-xs sm:text-sm font-bold text-[#12345B]">
                {program.duration}
              </span>
            </div>
            <div className="p-3 bg-[#EEF7FC]/70 border border-[#D9E6F0] rounded-xl space-y-0.5">
              <span className="label-mono text-[9px] text-[#64748B] block">WEEKLY WORKLOAD</span>
              <span className="text-xs sm:text-sm font-bold text-[#12345B]">
                {program.weeklyHours || '10–12 Hrs / Wk'}
              </span>
            </div>
            <div className="p-3 bg-[#EEF7FC]/70 border border-[#D9E6F0] rounded-xl space-y-0.5">
              <span className="label-mono text-[9px] text-[#64748B] block">PROJECTS BUILT</span>
              <span className="text-xs sm:text-sm font-bold text-[#12345B]">
                {program.totalProjects || '4 Shipped Projects'}
              </span>
            </div>
            <div className="p-3 bg-[#EEF7FC]/70 border border-[#D9E6F0] rounded-xl space-y-0.5">
              <span className="label-mono text-[9px] text-[#64748B] block">STUDIO FORMAT</span>
              <span className="text-xs sm:text-sm font-bold text-[#12345B] truncate">
                {program.format}
              </span>
            </div>
          </div>

          {/* Program Overview */}
          <div className="space-y-1.5">
            <span className="label-mono text-[10px] text-[#12345B] block font-bold">
              PROGRAM EXECUTIVE BRIEF
            </span>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Week-by-Week Phases & Projects Breakdown */}
          {program.weeklyPhases && program.weeklyPhases.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D9E6F0] pb-2">
                <span className="label-mono text-[10px] text-[#12345B] font-bold">
                  WEEK-BY-WEEK SPRINT PHASES &amp; SHIPPED DELIVERABLES
                </span>
                <span className="text-[10px] font-mono text-[#1769AA] font-bold">
                  {program.weeklyPhases.length} Structured Phases
                </span>
              </div>

              <div className="space-y-3">
                {program.weeklyPhases.map((phase, idx) => (
                  <div
                    key={phase.weeks}
                    className="p-4 bg-[#FAFCFE] border border-[#D9E6F0] rounded-xl space-y-2 hover:border-[#1769AA] transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-[#EEF7FC] text-[#12345B] border border-[#D9E6F0] rounded text-[10px] font-mono font-bold">
                          {phase.weeks}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#12345B]">
                          {phase.title}
                        </h4>
                      </div>
                      <span className="label-mono text-[9px] text-[#64748B]">
                        PHASE 0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Sprint Project Card */}
                    <div className="p-2.5 bg-white border border-[#D9E6F0] rounded-lg flex items-start gap-2 text-xs">
                      <Terminal className="w-4 h-4 text-[#E6AD3C] shrink-0 mt-0.5" />
                      <div>
                        <span className="label-mono text-[9px] text-[#12345B] block font-bold">
                          SPRINT PROJECT #{idx + 1}
                        </span>
                        <span className="text-[#1F2937] font-medium text-[11px] sm:text-xs">
                          {phase.sprintProject}
                        </span>
                      </div>
                    </div>

                    {/* Tools */}
                    {phase.tools && phase.tools.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {phase.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[9px] font-mono px-2 py-0.5 bg-[#EEF7FC]/70 border border-[#D9E6F0] text-[#12345B] rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modules Overview */}
          <div className="space-y-3">
            <span className="label-mono text-[10px] text-[#12345B] block font-bold">
              CORE CURRICULAR MODULES ({program.modules.length} MODULES)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {program.modules.map((mod, i) => (
                <div
                  key={mod.title}
                  className="p-3 bg-white border border-[#D9E6F0] rounded-xl space-y-1.5 shadow-2xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#E6AD3C]">
                      [0{i + 1}]
                    </span>
                    <h5 className="font-bold text-xs text-[#12345B] line-clamp-1">
                      {mod.title}
                    </h5>
                  </div>
                  <p className="text-[11px] text-[#64748B] line-clamp-2 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Capstone Deliverable Banner */}
          <div className="p-4 bg-gradient-to-r from-[#12345B] to-[#1769AA] text-white rounded-xl space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E6AD3C]">
              <Award className="w-4 h-4 text-[#E6AD3C]" />
              <span>FINAL GRADUATION CAPSTONE REQUIREMENT</span>
            </div>
            <h5 className="text-sm font-bold text-white">
              {program.capstoneProject.title}
            </h5>
            <p className="text-xs text-[#EEF7FC] leading-relaxed">
              {program.capstoneProject.description}
            </p>
            <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[11px] font-mono">
              <span className="text-[#E6AD3C] font-bold">Verification Artifact:</span>
              <span className="text-white truncate max-w-xs sm:max-w-md">
                {program.capstoneProject.deliverable}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 border-t border-[#D9E6F0] bg-[#FAFCFE] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono font-bold text-[#64748B] hover:text-[#12345B] transition-colors"
          >
            ← Close Roadmap
          </button>

          <Link
            href={`/apply?track=${facultyId || 'creative-tech'}&program=${program.id}`}
            onClick={onClose}
            className="btn-press inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-bold font-mono rounded-full transition-colors shadow-sm"
          >
            <span>APPLY FOR {program.code} INTAKE</span>
            <ArrowRight className="w-4 h-4 text-[#E6AD3C]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
