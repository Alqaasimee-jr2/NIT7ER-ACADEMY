'use client';

import React, { useState, useEffect } from 'react';
import { FACULTIES } from '@/data/academyData';
import { Cpu, Brain, PenTool, Monitor, Compass } from 'lucide-react';

export function StickyFacultyNav() {
  const [activeSection, setActiveSection] = useState<string>('');

  const getIcon = (id: string) => {
    switch (id) {
      case 'creative-tech':
        return <Cpu className="w-3.5 h-3.5 text-[#1769AA]" />;
      case 'cognitive-performance':
        return <Brain className="w-3.5 h-3.5 text-[#1769AA]" />;
      case 'writing-thought-leadership':
        return <PenTool className="w-3.5 h-3.5 text-[#1769AA]" />;
      case 'computer-education':
        return <Monitor className="w-3.5 h-3.5 text-[#1769AA]" />;
      default:
        return <Compass className="w-3.5 h-3.5 text-[#1769AA]" />;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
      }
    );

    FACULTIES.forEach((fac) => {
      const el = document.getElementById(fac.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-16 sm:top-20 z-30 bg-[#FAFCFE]/95 backdrop-blur-md border border-[#D9E6F0] rounded-2xl p-2 shadow-xs mb-8 transition-all">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="label-mono text-[9px] text-[#64748B] pl-2 hidden md:inline shrink-0 font-bold">
          QUICK JUMP:
        </span>
        {FACULTIES.map((fac) => {
          const isActive = activeSection === fac.id;
          return (
            <a
              key={fac.id}
              href={`#${fac.id}`}
              className={`btn-press shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                isActive
                  ? 'bg-[#12345B] text-white shadow-xs'
                  : 'bg-white text-[#64748B] hover:text-[#12345B] hover:bg-[#EEF7FC] border border-[#D9E6F0]'
              }`}
            >
              <span className="shrink-0">{getIcon(fac.id)}</span>
              <span>{fac.badge}</span>
              <span className="opacity-70 text-[10px]">({fac.programs.length})</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
