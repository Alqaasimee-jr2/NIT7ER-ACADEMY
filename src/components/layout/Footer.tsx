import React from 'react';
import Link from 'next/link';
import { GeometricShape } from '@/components/GeometricShapes';
import { FOUNDER_INFO } from '@/data/academyData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/Icons';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-14 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Vision */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#12345B] text-amber-400 flex items-center justify-center">
                <GeometricShape type="hexagon" color="gold" size="sm" />
              </div>
              <span className="text-lg font-black tracking-tight text-[#12345B]">
                NIT7ER <span className="text-xs uppercase font-bold text-amber-600">Academy</span>
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              The high-performance institute combining full-stack software engineering, Flow7 cognitive systems, structured writing, and fundamental computer education for serious builders.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={FOUNDER_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#12345B] hover:border-slate-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#12345B] hover:border-slate-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#12345B] hover:border-slate-400 transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-md border border-emerald-200 bg-emerald-50 text-emerald-800 flex items-center justify-center hover:bg-emerald-100 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Academic Faculties */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#12345B]">
              Academic Faculties
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/programs#creative-tech" className="hover:text-[#12345B] transition-colors">
                  01. Creative Tech &amp; Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/programs#cognitive-performance" className="hover:text-[#12345B] transition-colors">
                  02. Cognitive Performance &amp; Systems (Flow7)
                </Link>
              </li>
              <li>
                <Link href="/programs#writing-thought-leadership" className="hover:text-[#12345B] transition-colors">
                  03. Writing &amp; Thought Leadership
                </Link>
              </li>
              <li>
                <Link href="/programs#computer-education" className="hover:text-[#12345B] transition-colors">
                  04. Computer Education &amp; Digital Foundations
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Links & Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-[#12345B]">
              Incubator &amp; Portal
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link href="/labs" className="hover:text-[#12345B] transition-colors flex items-center gap-1">
                  <span>NIT7ER Labs Showcase</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#12345B] transition-colors flex items-center gap-1">
                  <span>Founder Thesis &amp; Philosophy</span>
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-[#12345B] transition-colors font-bold text-[#12345B]">
                  Apply for Admission
                </Link>
              </li>
              <li>
                <a
                  href={FOUNDER_INFO.studioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#12345B] transition-colors flex items-center gap-1"
                >
                  <span>NIT7ER Studio Central</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 NIT7ER Academy. All rights reserved. Directed by {FOUNDER_INFO.name}.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Next.js 16 • React 19 • Tailwind v4</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
