import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FOUNDER_INFO } from '@/data/academyData';
import { GeometricShape, WordAccent } from '@/components/GeometricShapes';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import {
  Sparkles,
  ShieldCheck,
  Mail,
  Phone,
  MessageCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Philosophy & Founder Story',
  description:
    'The founder story of Abdullah Qaasim-Falade, the genesis of NIT7ER Studio, and the institutional philosophy behind NIT7ER Academy.',
};

export default function AboutPage() {
  const coreTenets = [
    {
      number: '01',
      title: 'Systems Over Memorization',
      desc: 'True competence is proven when you sit before a blank screen, configure an architecture from scratch, and ship it to real users. Memorizing syntax for arbitrary tests produces fragile engineers.',
    },
    {
      number: '02',
      title: 'The Flow7 Reality Protocol',
      desc: 'Most people don’t suffer from a lack of talent; they suffer from self-deception about how they use their time. Logging reality without guilt is the foundation of compound mastery.',
    },
    {
      number: '03',
      title: 'Prose as an Engineering Primitive',
      desc: 'If you cannot explain an architectural choice in crisp, unambiguous sentences, you do not truly understand it. Writing is the highest leverage tool a builder possesses.',
    },
    {
      number: '04',
      title: 'The Polymath Advantage',
      desc: 'The future does not belong to narrow technicians who only know one framework. It belongs to builders who can write software, articulate value, maintain cognitive stamina, and understand computing systems.',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
        <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-10 hidden sm:block">
          <GeometricShape type="hexagon" color="gold" size="xl" variant="outline" />
        </div>

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-50 text-[#12345B] text-xs font-black uppercase tracking-wider border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Institutional Philosophy</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12345B] leading-tight">
            Why We Built{' '}
            <WordAccent shape="square" color="navy">NIT7ER Academy</WordAccent>.
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            A manifesto on engineering rigor, cognitive self-regulation, and modern polymathic competence by founder Abdullah Qaasim-Falade.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="na-section p-6 sm:p-10 bg-white border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
            Founder Biography &amp; Genesis
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#12345B]">
            From Lagos Studio to Educational Incubator
          </h2>

          <p>
            I founded <strong>NIT7ER</strong> in Lagos as a creative technology and internal infrastructure studio. Over years of building bespoke software systems, mobile applications, and proprietary products like <strong>Flow7</strong>, <strong>Clasquera</strong>, and <strong>Lang Huey</strong>, a recurring pattern became impossible to ignore:
          </p>

          <p className="p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-md text-slate-800 font-medium italic">
            &ldquo;Conventional universities and coding bootcamps teach isolated technical fragments while completely ignoring the human cognitive engine that produces the work. Students graduate knowing syntax, but with zero stamina for deep work, no ability to communicate with decision-makers, and zero understanding of how systems live in the real world.&rdquo;
          </p>

          <p>
            NIT7ER Academy is the antidote. We built this institution not to grant paper certificates, but to train self-driven builders who can think with clarity, execute with consistency, and ship systems that hold up under commercial pressure.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold text-[#12345B]">
            <span className="px-3 py-1 bg-slate-100 rounded-md">Creative Technologist</span>
            <span className="px-3 py-1 bg-slate-100 rounded-md">Systems Architect</span>
            <span className="px-3 py-1 bg-slate-100 rounded-md">Founder, Flow7</span>
            <span className="px-3 py-1 bg-slate-100 rounded-md">Lagos, Nigeria</span>
          </div>
        </div>

        {/* Founder Card & Channels */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#12345B] text-amber-400 flex items-center justify-center font-black text-xl shadow-xs">
              AQ
            </div>
            <div>
              <h3 className="text-base font-black text-[#12345B]">
                {FOUNDER_INFO.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {FOUNDER_INFO.title}
              </p>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-200 pt-4">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#12345B]" />
              <a href={`mailto:${FOUNDER_INFO.email}`} className="hover:underline font-medium">
                {FOUNDER_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#12345B]" />
              <a href={`tel:${FOUNDER_INFO.phone}`} className="hover:underline font-medium">
                {FOUNDER_INFO.phone}
              </a>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center gap-2">
            <a
              href={FOUNDER_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#12345B] hover:border-slate-400 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={FOUNDER_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#12345B] hover:border-slate-400 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={FOUNDER_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-md bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors flex items-center gap-1.5 ml-auto"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* The 4 Institutional Tenets */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 border border-amber-200">
            Guiding Philosophy
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#12345B] mt-1">
            Our 4 Operational Tenets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {coreTenets.map((tenet) => (
            <div
              key={tenet.number}
              className="na-card p-6 bg-white border border-slate-200 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-black text-[#12345B] opacity-30">
                  {tenet.number}
                </span>
                <ShieldCheck className="w-4 h-4 text-amber-500" />
              </div>
              <h3 className="font-bold text-base text-[#12345B]">
                {tenet.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tenet.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
