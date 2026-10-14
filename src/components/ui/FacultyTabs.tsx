'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FACULTIES, Faculty } from '@/data/academyData';
import { GeometricShape } from '@/components/GeometricShapes';
import { ArrowRight, CheckCircle2, Clock, BookOpen, Layers } from 'lucide-react';

export function FacultyTabs() {
  const [activeTab, setActiveTab] = useState<string>(FACULTIES[0].id);
  const currentFaculty: Faculty = FACULTIES.find((f) => f.id === activeTab) || FACULTIES[0];

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 border border-amber-200">
            Institutional Curriculum
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#12345B] mt-1">
            The 4 Foundational Faculties
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-0.5">
            Select a discipline to examine its syllabus, instructional philosophy, and capstone project.
          </p>
        </div>
        <Link
          href="/programs"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12345B] hover:text-[#1769AA] transition-colors"
        >
          <span>View Full Syllabus Catalog</span>
          <ArrowRight className="w-3.5 h-3.5" />
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
              className={`shrink-0 px-4 py-3 rounded-lg border text-left transition-all flex items-center gap-3 ${
                isActive
                  ? 'bg-[#12345B] text-white border-[#12345B] shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <GeometricShape
                type={fac.shape}
                color={isActive ? 'gold' : fac.shapeColor}
                size="sm"
              />
              <div>
                <span className={`block text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-amber-300' : 'text-slate-400'}`}>
                  Faculty {fac.number}
                </span>
                <span className="block text-xs sm:text-sm font-bold truncate max-w-[190px] sm:max-w-[220px]">
                  {fac.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Faculty Content Card */}
      <div className="na-section p-5 sm:p-8 bg-white border border-slate-200 space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-xs ${currentFaculty.badgeColor}`}>
                {currentFaculty.badge}
              </span>
              <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{currentFaculty.duration}</span>
              </span>
              <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{currentFaculty.format}</span>
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#12345B]">
              {currentFaculty.title}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {currentFaculty.description}
            </p>
          </div>

          {/* Living Proof Box */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg md:max-w-xs shrink-0 space-y-2">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#12345B]">
              <Layers className="w-4 h-4 text-amber-500" />
              <span>Incubated Proof of Work</span>
            </div>
            <h4 className="text-sm font-bold text-[#12345B]">
              {currentFaculty.livingProof.title}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {currentFaculty.livingProof.description}
            </p>
            {currentFaculty.livingProof.link && (
              <a
                href={currentFaculty.livingProof.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#1769AA] hover:underline pt-1"
              >
                <span>Inspect Project Architecture</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Modules Breakdown Grid */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#12345B]">
            Core Modules &amp; Sprint Structure
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {currentFaculty.modules.map((mod, i) => (
              <div
                key={mod.title}
                className="p-4 bg-slate-50/80 border border-slate-200 rounded-lg space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#12345B] text-white text-[10px] font-black flex items-center justify-center">
                    0{i + 1}
                  </span>
                  <h5 className="font-bold text-xs sm:text-sm text-[#12345B]">
                    {mod.title}
                  </h5>
                </div>
                <p className="text-xs text-slate-600">{mod.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {mod.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-[10px] font-medium px-2 py-0.5 bg-white border border-slate-200 text-slate-700 rounded-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes & Direct Apply Link */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Primary Learning Objective
            </span>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{currentFaculty.outcomes[0]}</span>
            </div>
          </div>

          <Link
            href={`/apply?track=${currentFaculty.id}`}
            className="na-action inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#12345B] hover:bg-[#0A1E36] text-white text-xs sm:text-sm font-bold shadow-xs shrink-0"
          >
            <span>Apply for Faculty {currentFaculty.number}</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
