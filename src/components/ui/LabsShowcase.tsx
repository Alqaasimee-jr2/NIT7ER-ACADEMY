import React from 'react';
import Link from 'next/link';
import { LAB_PROJECTS } from '@/data/academyData';
import { GeometricShape } from '@/components/GeometricShapes';
import { GithubIcon } from '@/components/Icons';
import { ExternalLink, ArrowRight } from 'lucide-react';

export function LabsShowcase({ limit }: { limit?: number }) {
  const projects = limit ? LAB_PROJECTS.slice(0, limit) : LAB_PROJECTS;

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 border border-amber-200">
            NIT7ER Labs Incubator
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#12345B] mt-1">
            Incubated Products &amp; Proof of Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-0.5">
            We don’t teach from textbooks. Every concept in our academy is battle-tested in real production systems built right in our studio.
          </p>
        </div>
        {limit && (
          <Link
            href="/labs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12345B] hover:text-[#1769AA] transition-colors"
          >
            <span>Explore All Labs Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="na-card p-5 sm:p-6 bg-white border border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#12345B] transition-all"
          >
            <div className="space-y-3">
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
                <h3 className="text-lg font-black text-[#12345B] mt-0.5">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 italic mt-0.5">
                  {project.tagline}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
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

            {/* Links and live action */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
              <span className="text-[11px] text-slate-500 font-semibold truncate max-w-[140px]">
                {project.impact}
              </span>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-md text-slate-600 hover:text-[#12345B] hover:bg-slate-100 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#12345B] text-white hover:bg-[#0A1E36] transition-colors"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3 h-3 text-amber-400" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
