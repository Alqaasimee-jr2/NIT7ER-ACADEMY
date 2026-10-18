'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { STUDIO_TEAM, FACULTIES } from '@/data/academyData';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const EDITORIAL_SLIDES = [
  { id: 1, src: '/team/team-cover.png', title: 'Meet Our Team', desc: 'Get to know the faces behind NIT7ER' },
  { id: 2, src: '/team/team-abdullah-qaasim.png', title: 'Abdullah Qaasim', desc: 'Creative Director & Founder' },
  { id: 3, src: '/team/team-yaasir-olajumoke.png', title: 'Yaasir Olajumoke', desc: 'Visual Design Lead' },
  { id: 4, src: '/team/team-the-g3neral.png', title: 'The G3neral', desc: 'User Experience Lead' },
  { id: 5, src: '/team/team-outro.png', title: 'NIT7ER Agency', desc: 'Limitless Design // Oct 2025' },
];

export function TeamShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'slides'>('grid');

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % EDITORIAL_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + EDITORIAL_SLIDES.length) % EDITORIAL_SLIDES.length);
  };

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9E6F0] pb-4">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#E6AD3C] pulse-ring"></span>
            <span className="font-bold text-[#12345B]">STUDIO DIRECTORS // CORE FACULTY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#12345B] tracking-tight">
            The Practitioners Behind the Standard.
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Learn directly alongside active creative directors, designers, and systems architects.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-[#D9E6F0] rounded-full self-start sm:self-auto shadow-2xs">
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded-full transition-all ${
              viewMode === 'grid'
                ? 'bg-[#12345B] text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#12345B]'
            }`}
          >
            Team Cards
          </button>
          <button
            type="button"
            onClick={() => setViewMode('slides')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded-full transition-all flex items-center gap-1.5 ${
              viewMode === 'slides'
                ? 'bg-[#12345B] text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#12345B]'
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#E6AD3C]" />
            <span>Studio Drops</span>
          </button>
        </div>
      </div>

      {/* Grid Mode: 3 Core Faculty Members */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_TEAM.map((member) => {
            const directorFacultyIds: Record<string, string[]> = {
              'abdullah-qaasim': ['creative-tech', 'cognitive-performance'],
              'yaasir-olajumoke': ['writing-thought-leadership', 'creative-tech'],
              'the-g3neral': ['computer-education', 'cognitive-performance'],
            };
            const ledFaculties = FACULTIES.filter((f) =>
              (directorFacultyIds[member.id] || []).includes(f.id)
            );
            return (
              <article
                key={member.id}
                id={member.id}
                className="technical-border curve-soft p-5 bg-white border border-[#D9E6F0] rounded-2xl shadow-xs hover:border-[#1769AA] hover:shadow-md transition-all flex flex-col justify-between group scroll-mt-28"
              >
                <div className="space-y-4">
                  {/* 1:1 Editorial Artwork Frame */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#F5F2EB] border border-[#D9E6F0]/80 shadow-2xs">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      width={1080}
                      height={1080}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold">
                      {member.handle}
                    </div>
                  </div>

                  {/* Member Metadata */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="label-mono px-2 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0] text-[10px] font-bold">
                        {member.role}
                      </span>
                      {member.signature && (
                        <span className="text-[11px] font-serif italic text-[#64748B]">
                          Sig: {member.signature}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-black text-[#12345B] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-[#64748B]">
                      {member.discipline}
                    </p>
                  </div>

                  {/* Personal Manifesto Quote */}
                  <div className="p-3.5 rounded-xl bg-[#EEF7FC]/70 border-l-2 border-[#1769AA] text-xs text-[#1F2937] italic leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                  </div>

                  {/* Led Faculties Links */}
                  {ledFaculties.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <span className="label-mono text-[9px] text-[#64748B] block">
                        DIRECTED FACULTIES
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {ledFaculties.map((f) => (
                          <Link
                            key={f.id}
                            href={`/programs/${f.id}`}
                            className="text-[10px] font-mono font-bold px-2.5 py-1 bg-[#EEF7FC] text-[#12345B] hover:text-[#1769AA] hover:border-[#1769AA] border border-[#D9E6F0] rounded-full transition-colors"
                          >
                            {f.badge}: {f.title.split('&')[0].trim()} →
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Link */}
                {member.url && (
                  <div className="pt-4 mt-4 border-t border-[#D9E6F0] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#64748B]">Directory Verified</span>
                    <a
                      href={member.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-[#1769AA] hover:text-[#12345B] group/link"
                    >
                      <span>Connect Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#E6AD3C] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      {/* Slides Mode: Full 5-Slide Editorial Carousel */}
      {viewMode === 'slides' && (
        <div className="technical-border curve-asymmetric p-6 sm:p-10 bg-white border border-[#D9E6F0] shadow-xs space-y-6">
          <div className="max-w-2xl mx-auto space-y-4 text-center">
            <div className="relative aspect-square w-full max-w-lg mx-auto rounded-2xl overflow-hidden bg-[#F5F2EB] border border-[#D9E6F0] shadow-md">
              <Image
                src={EDITORIAL_SLIDES[activeSlide].src}
                alt={EDITORIAL_SLIDES[activeSlide].title}
                width={1080}
                height={1080}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Slide Metadata */}
            <div className="space-y-1">
              <span className="label-mono text-[11px] text-[#1769AA] font-bold">
                SLIDE 0{activeSlide + 1} OF 0{EDITORIAL_SLIDES.length}
              </span>
              <h3 className="text-xl font-black text-[#12345B]">
                {EDITORIAL_SLIDES[activeSlide].title}
              </h3>
              <p className="text-xs font-mono text-[#64748B]">
                {EDITORIAL_SLIDES[activeSlide].desc}
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={prevSlide}
                className="btn-press p-2.5 rounded-full border border-[#D9E6F0] hover:bg-[#EEF7FC] text-[#12345B] transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {EDITORIAL_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      activeSlide === idx
                        ? 'w-6 bg-[#12345B]'
                        : 'w-2 bg-[#D9E6F0] hover:bg-[#64748B]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                className="btn-press p-2.5 rounded-full border border-[#D9E6F0] hover:bg-[#EEF7FC] text-[#12345B] transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
