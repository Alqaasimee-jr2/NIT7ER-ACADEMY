'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { FOUNDER_INFO } from '@/data/academyData';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  link?: {
    label: string;
    href: string;
  };
}

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'INSTITUTIONAL // FRANCHISE',
      question: 'What is NIT7ER Academy and how does it relate to NIT7ER Studio?',
      answer:
        'NIT7ER Academy is the dedicated educational and talent-engineering division of NIT7ER Studio (an active commercial creative technology and systems architecture agency based in Lagos). The Academy exists because conventional computer science degrees and bootcamps fail to produce engineers ready for real commercial software. Academy students train inside simulated studio sprints and top graduates apprentice directly on live agency client deliverables.',
      link: {
        label: 'Visit NIT7ER Studio Agency ↗',
        href: FOUNDER_INFO.studioUrl,
      },
    },
    {
      category: 'PEDAGOGY // STANDARDS',
      question: 'How is NIT7ER Academy different from traditional coding bootcamps?',
      answer:
        'Conventional bootcamps teach students to memorize syntax, copy tutorial code, and pass multiple-choice tests. At NIT7ER, we treat code as a consequence of systems thinking. Students build from scratch, write architectural documentation, eliminate digital distractions using the Flow7 protocol, and must publicly defend their production capstone deliverables before studio directors before receiving credentials.',
    },
    {
      category: 'COGNITIVE STAMINA // FLOW7',
      question: 'What is the Flow7 cognitive performance protocol?',
      answer:
        'Flow7 is our proprietary mental operating system and focus-stamina training protocol. High-leverage engineering requires sustained, uninterrupted concentration. Flow7 trains students through daily reality logging, attention auditing, cognitive friction removal, and 4-6 hour deep-work sprints, transforming erratic coders into disciplined, high-output builders.',
      link: {
        label: 'Explore the Flow7 Engine ↗',
        href: '/flow7',
      },
    },
    {
      category: 'APPRENTICESHIP // CLIENT CODE',
      question: 'Do students work on real commercial client agency projects?',
      answer:
        'Yes. Our apprenticeship model is built directly around NIT7ER Studio client projects. Once students pass their Stage Gate validations and defend their capstone architecture, top performers enter live client sprints alongside senior directors, gaining verified production experience that outshines standard junior portfolios.',
    },
    {
      category: 'ADMISSIONS // PREREQUISITES',
      question: 'What are the admission requirements and who is this built for?',
      answer:
        'NIT7ER Academy is built for self-driven individuals: aspiring software engineers, creative technologists, systems architects, and technical writers who crave mastery over superficial certificates. Prerequisites depend on the track: foundational faculties welcome ambitious beginners, while advanced engineering tracks require baseline programming aptitude screened through our 3-step diagnostic intake.',
      link: {
        label: 'Start Diagnostic Intake ↗',
        href: '/apply',
      },
    },
    {
      category: 'CREDENTIALS // DEFENSE',
      question: 'How does certification work at NIT7ER Academy?',
      answer:
        'We do not issue attendance certificates. Graduation requires a "Verified Capstone Architecture Defense." Students present their live, deployed production software or systems publication before a jury of active practitioners and directors. This verified defense serves as proof of commercial readiness.',
    },
  ];

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-mt-24 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D9E6F0] pb-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5 text-[#1769AA]" />
            <span className="font-bold text-[#12345B]">KNOWLEDGE BASE // FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#12345B] tracking-tight">
            Clear Answers on Standards, Sprints &amp; Structure.
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
            Everything you need to know about our studio sprint model, agency connection, Flow7 focus protocol, and capstone defense standards.
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-[#1769AA] shrink-0">
          <ShieldCheck className="w-4 h-4 text-[#E6AD3C]" />
          <span className="font-bold">VERIFIED REPOSITORY OF FACTS</span>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`technical-border curve-soft border transition-all rounded-2xl overflow-hidden bg-white ${
                isOpen
                  ? 'border-[#1769AA] shadow-sm'
                  : 'border-[#D9E6F0] hover:border-[#1769AA]/40'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
                className="w-full btn-press p-5 sm:p-6 flex items-start justify-between text-left gap-4"
              >
                <div className="space-y-1.5">
                  <span className="label-mono text-[10px] text-[#1769AA] font-bold block">
                    {faq.category}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#12345B] leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`p-2 rounded-full border transition-all shrink-0 mt-0.5 ${
                    isOpen
                      ? 'bg-[#12345B] text-white border-[#12345B] rotate-180'
                      : 'bg-[#EEF7FC] text-[#1769AA] border-[#D9E6F0]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#D9E6F0]/60 space-y-4 animate-fadeIn">
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-4xl">
                    {faq.answer}
                  </p>
                  {faq.link && (
                    <div className="pt-1">
                      <Link
                        href={faq.link.href}
                        target={faq.link.href.startsWith('http') ? '_blank' : undefined}
                        rel={faq.link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-[#1769AA] hover:text-[#12345B] underline underline-offset-4 transition-colors"
                      >
                        <span>{faq.link.label}</span>
                        {faq.link.href.startsWith('http') ? (
                          <ExternalLink className="w-3.5 h-3.5" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5" />
                        )}
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
