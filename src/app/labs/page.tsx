import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LAB_PROJECTS } from '@/data/academyData';
import { GithubIcon } from '@/components/Icons';
import { ExternalLink, ArrowRight, Code2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NIT7ER Labs & Incubator Showcase',
  description:
    'Explore production systems, edtech engines, and cognitive tools incubated at NIT7ER: Flow7, Clasquera, Lang Huey, OAUMods, and more.',
};

export default function LabsPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Page Header */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 bg-white space-y-4 border border-[#D9E6F0] shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring"></span>
            <span className="font-bold text-[#12345B]">NIT7ER LABS // STUDIO PRODUCTION INCUBATOR</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12345B] tracking-tight leading-tight">
            Proof of Work Over Pedagogical Theory.
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
            Every concept taught in NIT7ER Academy originates from live systems built to solve real-world problems. From AI audio lesson monitors and smartboard engines to cognitive awareness journals and architectural campus navigators.
          </p>
        </div>
      </section>

      {/* Grid of Lab Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {LAB_PROJECTS.map((project, idx) => (
          <article
            key={project.id}
            className="technical-border curve-soft p-6 bg-white flex flex-col justify-between space-y-5 border border-[#D9E6F0] rounded-2xl shadow-xs hover:border-[#1769AA] hover:shadow-md transition-all"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="px-2 py-0.5 rounded-full bg-[#EEF7FC] text-[#1769AA] font-bold border border-[#D9E6F0]">
                  [{project.badge}]
                </span>
                <span className="text-[#64748B]">
                  0{idx + 1} // {project.category}
                </span>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#12345B] tracking-tight">
                  {project.title}
                </h2>
                <p className="text-xs font-mono text-[#1769AA] italic mt-0.5">
                  {project.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-1.5 pt-1">
                <span className="label-mono text-[9px] text-[#64748B] block">
                  DEPLOYED ARCHITECTURE
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 bg-[#EEF7FC]/60 text-[#12345B] border border-[#D9E6F0] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9E6F0] space-y-3">
              <div className="text-[11px] font-mono text-[#64748B] flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#1769AA]" />
                <span>{project.impact}</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#D9E6F0] rounded-full text-xs font-mono font-bold text-[#12345B] hover:border-[#12345B] hover:bg-[#EEF7FC] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>CODE</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-press inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#12345B] text-white text-xs font-mono font-bold rounded-full hover:bg-[#1769AA] transition-colors shadow-2xs"
                    >
                      <span>LIVE SYSTEM</span>
                      <ExternalLink className="w-3 h-3 text-[#E6AD3C]" />
                    </a>
                  )}
                </div>

                <Link
                  href="/apply"
                  className="gold-link text-xs font-mono font-bold text-[#12345B] flex items-center gap-1"
                >
                  <span>BUILD THIS</span>
                  <ArrowRight className="w-3 h-3 text-[#E6AD3C]" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Capstone Pitch Callout */}
      <section className="technical-border curve-asymmetric p-6 sm:p-8 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4 border border-[#D9E6F0] shadow-xs">
        <div className="space-y-1 max-w-xl">
          <span className="label-mono px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
            Incubation Channel
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#12345B] pt-1">
            Have an Idea for an Incubated System?
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Students in the Creative Tech and Systems faculties can propose capstones to be officially incubated under the NIT7ER umbrella.
          </p>
        </div>

        <Link
          href="/apply"
          className="btn-press inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#12345B] text-white font-mono font-bold text-xs sm:text-sm rounded-full hover:bg-[#1769AA] transition-colors shrink-0 shadow-sm"
        >
          <span>SUBMIT CAPSTONE PROPOSAL</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
        </Link>
      </section>
    </div>
  );
}
