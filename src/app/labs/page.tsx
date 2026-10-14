import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LAB_PROJECTS } from '@/data/academyData';
import { GithubIcon } from '@/components/Icons';
import { ExternalLink, ArrowRight, Layers, Code2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NIT7ER Labs & Incubator Showcase',
  description:
    'Explore production systems, edtech engines, and cognitive tools incubated at NIT7ER: Flow7, Clasquera, Lang Huey, OAUMods, and more.',
};

export default function LabsPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Page Header */}
      <section className="technical-border p-6 sm:p-10 bg-white space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FAF9F6] border border-[#E5E5E0] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C]"></span>
            <span className="font-bold text-[#121212]">NIT7ER LABS // STUDIO PRODUCTION INCUBATOR</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#121212] tracking-tight leading-tight">
            Proof of Work Over Pedagogical Theory.
          </h1>

          <p className="text-sm sm:text-base text-[#71717A] leading-relaxed font-normal">
            Every concept taught in NIT7ER Academy originates from live systems built to solve real-world problems. From AI audio lesson monitors and smartboard engines to cognitive awareness journals and architectural campus navigators.
          </p>
        </div>
      </section>

      {/* Grid of Lab Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {LAB_PROJECTS.map((project, idx) => (
          <article
            key={project.id}
            className="technical-border p-6 bg-white flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="text-[#C9A84C] font-bold">
                  [{project.badge}]
                </span>
                <span className="text-[#71717A]">
                  0{idx + 1} // {project.category}
                </span>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#121212] tracking-tight">
                  {project.title}
                </h2>
                <p className="text-xs font-mono text-[#71717A] italic mt-0.5">
                  {project.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-1.5 pt-1">
                <span className="label-mono text-[9px] text-[#A1A1AA] block">
                  DEPLOYED ARCHITECTURE
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 bg-[#FAF9F6] text-[#121212] border border-[#E5E5E0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E5E0] space-y-3">
              <div className="text-[11px] font-mono text-[#71717A] flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>{project.impact}</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E5E0] text-xs font-mono font-bold text-[#121212] hover:border-[#121212] transition-colors"
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#121212] text-white text-xs font-mono font-bold hover:bg-[#27272A] transition-colors"
                    >
                      <span>LIVE SYSTEM</span>
                      <ExternalLink className="w-3 h-3 text-[#F5C842]" />
                    </a>
                  )}
                </div>

                <Link
                  href="/apply"
                  className="gold-link text-xs font-mono font-bold text-[#121212] flex items-center gap-1"
                >
                  <span>BUILD THIS</span>
                  <ArrowRight className="w-3 h-3 text-[#C9A84C]" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Capstone Pitch Callout */}
      <section className="technical-border p-6 sm:p-8 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1 max-w-xl">
          <span className="label-mono text-[#C9A84C] block">Incubation Channel</span>
          <h3 className="text-base sm:text-lg font-bold text-[#121212]">
            Have an Idea for an Incubated System?
          </h3>
          <p className="text-xs sm:text-sm text-[#71717A]">
            Students in the Creative Tech and Systems faculties can propose capstones to be officially incubated under the NIT7ER umbrella.
          </p>
        </div>

        <Link
          href="/apply"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#121212] text-white font-mono font-bold text-xs sm:text-sm hover:bg-[#27272A] transition-colors shrink-0"
        >
          <span>SUBMIT CAPSTONE PROPOSAL</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#F5C842]" />
        </Link>
      </section>
    </div>
  );
}
