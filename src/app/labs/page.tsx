import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { LAB_PROJECTS } from '@/data/academyData';
import { GeometricShape, WordAccent } from '@/components/GeometricShapes';
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
      <section className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
        <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-10 hidden sm:block">
          <GeometricShape type="hexagon" color="gold" size="xl" variant="outline" />
        </div>

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-50 text-[#12345B] text-xs font-black uppercase tracking-wider border border-amber-200">
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            <span>Studio Production &amp; Incubator</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12345B] leading-tight">
            Proof of Work Over{' '}
            <WordAccent shape="hexagon" color="gold">Pedagogical Theory</WordAccent>.
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Every concept taught in NIT7ER Academy originates from live systems built to solve real-world problems. From AI audio lesson monitors and smartboard engines to cognitive awareness journals and architectural campus navigators.
          </p>
        </div>
      </section>

      {/* Grid of Lab Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {LAB_PROJECTS.map((project) => (
          <article
            key={project.id}
            className="na-card p-6 bg-white border border-slate-200 flex flex-col justify-between space-y-5 hover:border-[#12345B] transition-all"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border rounded-xs ${project.badgeColor}`}>
                  {project.badge}
                </span>
                <GeometricShape type={project.shape} color={project.shapeColor} size="sm" />
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  {project.category}
                </span>
                <h2 className="text-xl font-black text-[#12345B] mt-0.5">
                  {project.title}
                </h2>
                <p className="text-xs font-medium text-slate-500 italic mt-0.5">
                  {project.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-amber-500" />
                <span>{project.impact}</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#12345B] hover:border-slate-400 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#12345B] text-white text-xs font-bold hover:bg-[#0A1E36] transition-colors"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    </a>
                  )}
                </div>

                <Link
                  href="/apply"
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                >
                  <span>Build This</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Capstone Pitch Callout */}
      <section className="border border-slate-200 bg-white p-6 sm:p-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1 max-w-xl">
          <h3 className="text-base sm:text-lg font-black text-[#12345B]">
            Have an Idea for an Incubated System?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Students in the Creative Tech and Systems faculties can propose capstones to be officially incubated under the NIT7ER umbrella.
          </p>
        </div>

        <Link
          href="/apply"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#12345B] text-white font-bold text-xs sm:text-sm shadow-xs shrink-0"
        >
          <span>Submit Capstone Proposal</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
        </Link>
      </section>
    </div>
  );
}
