'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Program } from '@/data/academyData';
import { Calendar, ArrowRight } from 'lucide-react';
import { ProgramSyllabusModal } from '@/components/ui/ProgramSyllabusModal';

interface ProgramCardActionProps {
  program: Program;
  facultyId: string;
}

export function ProgramCardAction({ program, facultyId }: ProgramCardActionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="btn-press inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white border border-[#1769AA] hover:bg-[#EEF7FC] text-[#12345B] text-xs font-bold font-mono rounded-full transition-colors shadow-2xs"
        >
          <Calendar className="w-3.5 h-3.5 text-[#1769AA]" />
          <span>INSPECT {program.duration.toUpperCase()} ROADMAP</span>
        </button>

        <Link
          href={`/apply?track=${facultyId}&program=${program.id}`}
          className="btn-press inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-bold font-mono rounded-full transition-colors shadow-sm"
        >
          <span>APPLY FOR {program.code}</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
        </Link>
      </div>

      <ProgramSyllabusModal
        program={program}
        facultyId={facultyId}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
