'use client';

import React, { useState } from 'react';
import { CourseModule } from '@/data/academyData';
import { ChevronDown, ChevronUp, Layers } from 'lucide-react';

interface ProgramModuleDrawerProps {
  modules: CourseModule[];
  programCode: string;
  defaultOpen?: boolean;
}

export function ProgramModuleDrawer({
  modules,
  programCode,
  defaultOpen = false,
}: ProgramModuleDrawerProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="space-y-3 pt-1">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full btn-press flex items-center justify-between p-3 sm:p-3.5 bg-white hover:bg-[#EEF7FC] border border-[#D9E6F0] rounded-xl transition-all text-left group"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="p-1.5 rounded-lg bg-[#EEF7FC] text-[#1769AA] group-hover:bg-[#12345B] group-hover:text-white transition-colors">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#12345B]">
                Sprint Syllabus ({modules.length} Core Modules)
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-[#64748B]">
                • {isOpen ? 'Click to collapse modules' : 'Click to inspect sprint modules & topics'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs text-[#1769AA] font-bold shrink-0">
          <span>{isOpen ? 'COLLAPSE' : 'VIEW MODULES'}</span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-[#E6AD3C] transition-transform" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#E6AD3C] transition-transform" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1 animate-fadeIn">
          {modules.map((mod, mIdx) => (
            <div
              key={mod.title}
              className="p-4 bg-white border border-[#D9E6F0] rounded-xl space-y-2.5 shadow-2xs hover:border-[#1769AA]/40 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#E6AD3C]">
                  [{programCode}-M{mod.number || String(mIdx + 1).padStart(2, '0')}]
                </span>
                <h5 className="font-bold text-xs sm:text-sm text-[#12345B]">
                  {mod.title}
                </h5>
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {mod.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {mod.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs font-mono px-2.5 py-0.5 bg-[#EEF7FC] border border-[#D9E6F0] text-[#12345B] rounded-md"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
