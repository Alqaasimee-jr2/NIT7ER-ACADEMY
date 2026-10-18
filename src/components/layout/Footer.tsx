import React from 'react';
import Link from 'next/link';
import { N7BrandMark } from '@/components/N7BrandMark';
import { FOUNDER_INFO } from '@/data/academyData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/Icons';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#D9E6F0] bg-white pt-14 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Vision */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-2.5">
              <Link href="/" className="inline-block group">
                <N7BrandMark type="logo" variant="gold" size="md" className="transition-transform group-hover:scale-105" />
              </Link>
              <div>
                <span className="label-mono inline-block px-2.5 py-1 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0] text-[10px] leading-snug">
                  Institute of Applied Creative Technology // Lagos &amp; Global
                </span>
              </div>
            </div>

            <p className="text-sm text-[#64748B] leading-relaxed max-w-sm">
              Practical education in software engineering, cognitive focus, technical writing, and computing foundations.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={FOUNDER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#D9E6F0] rounded-full flex items-center justify-center text-[#64748B] hover:text-[#12345B] hover:border-[#12345B] hover:bg-[#EEF7FC] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#D9E6F0] rounded-full flex items-center justify-center text-[#64748B] hover:text-[#12345B] hover:border-[#12345B] hover:bg-[#EEF7FC] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#D9E6F0] rounded-full flex items-center justify-center text-[#64748B] hover:text-[#12345B] hover:border-[#12345B] hover:bg-[#EEF7FC] transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={FOUNDER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#D9E6F0] bg-[#EEF7FC] text-[#12345B] rounded-full flex items-center justify-center hover:border-[#1769AA] hover:text-[#1769AA] transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Academic Faculties */}
          <div className="md:col-span-4 space-y-3">
            <span className="label-mono block text-[#12345B]">
              Academic Disciplines
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#64748B]">
              <li>
                <Link href="/programs/creative-tech" className="gold-link">
                  01. Creative Tech &amp; Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/programs/cognitive-performance" className="gold-link">
                  02. Cognitive Performance &amp; Systems (Flow7)
                </Link>
              </li>
              <li>
                <Link href="/programs/writing-thought-leadership" className="gold-link">
                  03. Writing &amp; Thought Leadership
                </Link>
              </li>
              <li>
                <Link href="/programs/computer-education" className="gold-link">
                  04. Computer Education &amp; Digital Foundations
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/programs" className="font-mono text-xs font-bold text-[#1769AA] hover:text-[#12345B] transition-colors">
                  View All 12 Program Tracks →
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Links & Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <span className="label-mono block text-[#12345B]">
              Incubator &amp; Studio
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#64748B]">
              <li>
                <Link href="/team" className="gold-link flex items-center gap-1">
                  <span>Studio Directors &amp; Faculty</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E6AD3C] shrink-0" />
                </Link>
              </li>
              <li>
                <Link href="/labs" className="gold-link flex items-center gap-1">
                  <span>NIT7ER Labs Showcase</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E6AD3C] shrink-0" />
                </Link>
              </li>
              <li>
                <Link href="/flow7" className="gold-link flex items-center gap-1">
                  <span>Flow7 Focus Simulator</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E6AD3C] shrink-0" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="gold-link flex items-center gap-1">
                  <span>Founder Thesis &amp; Story</span>
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="gold-link flex items-center gap-1 font-bold text-[#1769AA]">
                  <span>Knowledge Base &amp; FAQ</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E6AD3C] shrink-0" />
                </Link>
              </li>
              <li>
                <Link href="/apply" className="font-bold text-[#12345B] hover:text-[#1769AA] transition-colors">
                  Apply for Admission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="gold-link flex items-center gap-1">
                  <span>Contact &amp; Admissions Desk</span>
                </Link>
              </li>
              <li>
                <a
                  href={FOUNDER_INFO.studioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-link flex items-center gap-1"
                >
                  <span>NIT7ER Studio Central</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E6AD3C] shrink-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* NIT7ER Franchise Ecosystem Section */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#FAFCFE] border border-[#D9E6F0]/80 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E6AD3C] pulse-ring shrink-0"></span>
              <span className="font-mono text-xs font-bold text-[#12345B]">
                THE NIT7ER FRANCHISE ECOSYSTEM &amp; LIVE SYSTEMS
              </span>
            </div>
            <a
              href={FOUNDER_INFO.studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#1769AA] hover:text-[#12345B] transition-colors"
            >
              <span>Explore NIT7ER Studio Commercial Agency</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E6AD3C] shrink-0" />
            </a>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">
            NIT7ER Academy operates as the talent incubation and systems research division of <strong className="text-[#12345B]">NIT7ER Studio</strong> — an active commercial creative technology and systems engineering agency. Academy candidates learn through production sprints and top graduates directly apprentice on client deliverables.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#12345B] mr-1">
              Case Studies:
            </span>
            {[
              { id: 'flow7', label: 'Flow7 Engine' },
              { id: 'clasquera', label: 'Clasquera AI' },
              { id: 'lang-huey', label: 'Lang Huey Offline' },
              { id: 'oaumods', label: 'OAUMods Compass' },
              { id: 'restaurante', label: 'Restaurante Web' },
              { id: 'pr-guardian', label: 'PR Pre-Flight Guardian' },
            ].map((lab) => (
              <Link
                key={lab.id}
                href={`/labs/${lab.id}`}
                className="rounded-lg border border-[#D9E6F0] bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-[#12345B] hover:border-[#1769AA] hover:text-[#1769AA] transition-colors"
              >
                {lab.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D9E6F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] text-center sm:text-left">
          <p>© 2026 NIT7ER Academy. All rights reserved. Directed by <Link href="/about" className="text-[#12345B] font-semibold hover:text-[#1769AA] transition-colors">{FOUNDER_INFO.name}</Link>.</p>
          <div className="flex items-center gap-4">
            <span className="label-mono flex items-center gap-1.5 text-[#12345B]">
              <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring shrink-0"></span>
              <span>Next.js 16 • React 19 • Tailwind v4</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
