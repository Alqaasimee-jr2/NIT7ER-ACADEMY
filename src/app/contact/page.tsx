'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { FOUNDER_INFO } from '@/data/academyData';
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { N7BrandMark } from '@/components/N7BrandMark';

function ContactFormContent() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Cohort Admission Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please complete your name, email, and inquiry message.');
      return;
    }

    if (!email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          category,
          message,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to dispatch inquiry.');
      }

      setSubmittedRef(data.refCode);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg('An unexpected error occurred. Please try WhatsApp directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappInquiryText = encodeURIComponent(
    `Hello Director Abdullah Qaasim-Falade!\n\n` +
      `• Reference: ${submittedRef || 'DIRECT-WEB'}\n` +
      `• Name: ${fullName || 'Prospective Candidate'}\n` +
      `• Focus: ${category}\n` +
      `• Email: ${email || 'N/A'}\n` +
      `• Phone: ${phone || 'N/A'}\n\n` +
      `Message: ${message || 'I would like to inquire about NIT7ER Academy programs and admission strategy.'}`
  );

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header Banner */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 bg-white space-y-4 border border-[#D9E6F0] shadow-xs relative overflow-hidden">
        <div
          className="absolute -right-8 -top-8 w-64 h-64 opacity-10 pointer-events-none bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('/brand/shapes-accent.png')` }}
        />
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring"></span>
            <span className="font-bold text-[#12345B]">COMMUNICATIONS DESK // DIRECT CONSULTATIONS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#12345B] tracking-tight leading-tight">
            Admissions Desk &amp; Direct Inquiries
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-normal">
            Direct communication for prospective candidates, cohort admissions, and curriculum questions.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-[#64748B]">
            <span className="px-2.5 py-0.5 rounded-full bg-[#EEF7FC] text-[#12345B] border border-[#D9E6F0] font-bold">
              [ACTIVE LINE: +234 707 076 3135]
            </span>
            <span>•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#EEF7FC] text-[#1769AA] border border-[#D9E6F0] font-bold">
              [&lt;24H RESPONSE SLA]
            </span>
          </div>
        </div>
      </section>

      {/* 3 Core Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: WhatsApp (Primary) */}
        <div className="technical-border curve-soft p-6 bg-white border border-[#D9E6F0] rounded-2xl space-y-4 shadow-xs flex flex-col justify-between hover:border-[#1769AA] transition-all">
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0] font-bold">
                PRIMARY CHANNEL
              </span>
              <span className="flex items-center gap-1 text-[#1769AA]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6AD3C] pulse-ring"></span>
                <span>Instant Messaging</span>
              </span>
            </div>

            <div className="w-10 h-10 rounded-xl bg-[#12345B] text-[#E6AD3C] flex items-center justify-center shadow-xs">
              <MessageCircle className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-black text-[#12345B]">
                WhatsApp Direct Hotline
              </h3>
              <p className="text-xs font-mono font-bold text-[#1769AA]">
                {FOUNDER_INFO.phone}
              </p>
              <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                Fastest way to verify cohort openings, discuss application prerequisites, or schedule a diagnostic call.
              </p>
            </div>
          </div>

          <a
            href={FOUNDER_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-press inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white text-xs font-mono font-bold rounded-full transition-colors shadow-2xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#E6AD3C]" />
            <span>OPEN WHATSAPP CHAT</span>
          </a>
        </div>

        {/* Card 2: Official Email */}
        <div className="technical-border curve-soft p-6 bg-white border border-[#D9E6F0] rounded-2xl space-y-4 shadow-xs flex flex-col justify-between hover:border-[#1769AA] transition-all">
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0] font-bold">
                ACADEMIC DESK
              </span>
              <span className="text-[#64748B]">&lt;24H Response</span>
            </div>

            <div className="w-10 h-10 rounded-xl bg-[#12345B] text-[#E6AD3C] flex items-center justify-center shadow-xs">
              <Mail className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-black text-[#12345B]">
                Institutional Email
              </h3>
              <p className="text-xs font-mono font-bold text-[#1769AA] truncate">
                {FOUNDER_INFO.email}
              </p>
              <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                For formal corporate inquiries, curriculum proposals, and institutional partnerships.
              </p>
            </div>
          </div>

          <a
            href={`mailto:${FOUNDER_INFO.email}`}
            className="btn-press inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-[#D9E6F0] bg-[#EEF7FC] hover:bg-white text-[#12345B] text-xs font-mono font-bold rounded-full transition-colors shadow-2xs"
          >
            <Mail className="w-3.5 h-3.5 text-[#1769AA]" />
            <span>COMPOSE EMAIL</span>
          </a>
        </div>

        {/* Card 3: Lagos Studio */}
        <div className="technical-border curve-soft p-6 bg-white border border-[#D9E6F0] rounded-2xl space-y-4 shadow-xs flex flex-col justify-between hover:border-[#1769AA] transition-all">
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0] font-bold">
                PHYSICAL HUB
              </span>
              <span className="text-[#64748B]">Lagos, Nigeria</span>
            </div>

            <div className="w-10 h-10 rounded-xl bg-[#12345B] text-[#E6AD3C] flex items-center justify-center shadow-xs">
              <MapPin className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-black text-[#12345B]">
                Studio Headquarters
              </h3>
              <p className="text-xs font-mono font-bold text-[#1769AA]">
                {FOUNDER_INFO.location}
              </p>
              <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                Where software architectures, cognitive regulation tools, and editorial prose are forged.
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="btn-press inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-[#D9E6F0] bg-[#EEF7FC] hover:bg-white text-[#12345B] text-xs font-mono font-bold rounded-full transition-colors shadow-2xs"
          >
            <Compass className="w-3.5 h-3.5 text-[#1769AA]" />
            <span>READ FOUNDER STORY</span>
          </Link>
        </div>
      </div>

      {/* Main Interactive Inquiry Section */}
      <section className="technical-border curve-asymmetric p-6 sm:p-10 bg-white border border-[#D9E6F0] shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Details & Instructions */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <span className="label-mono px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0] text-[10px]">
                INQUIRY DISPATCH
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#12345B] tracking-tight">
                Submit an Institutional Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Fill out the diagnostic brief. Inquiries are audited and routed directly to Director Abdullah Qaasim-Falade.
              </p>
            </div>

            <div className="p-4 bg-[#EEF7FC]/70 border border-[#D9E6F0] rounded-2xl space-y-2.5 text-xs text-[#64748B]">
              <div className="flex items-center gap-2 text-[#12345B] font-bold font-mono">
                <Clock className="w-4 h-4 text-[#1769AA]" />
                <span>Response SLA Expectations</span>
              </div>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Admissions inquiries: Evaluated within 12–24 hours</li>
                <li>Strategic consultations: Scheduled for 45-min diagnostic video call</li>
                <li>Zero marketing automation or automated solicitation</li>
              </ul>
            </div>

            <div className="p-4 bg-[#FAFCFE] border border-[#D9E6F0] rounded-2xl space-y-2">
              <span className="label-mono text-[9px] text-[#64748B] block">LOOKING FOR ADMISSION?</span>
              <p className="text-xs text-[#64748B]">
                If you already know your faculty track, complete the full multi-step diagnostic intake directly:
              </p>
              <Link
                href="/apply"
                className="gold-link inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#12345B] pt-1"
              >
                <span>OPEN INTAKE APPLICATION PORTAL</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            {submittedRef ? (
              <div className="p-8 bg-[#EEF7FC]/60 border border-[#D9E6F0] rounded-2xl text-center space-y-5 shadow-2xs">
                <div className="w-12 h-12 bg-[#12345B] text-[#E6AD3C] rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="label-mono px-3 py-0.5 bg-white text-[#1769AA] rounded-full border border-[#D9E6F0] inline-block font-bold text-[10px]">
                    INQUIRY DISPATCHED
                  </span>
                  <h3 className="text-xl font-black text-[#12345B]">
                    Inquiry Reference: {submittedRef}
                  </h3>
                  <p className="text-xs text-[#64748B] max-w-md mx-auto">
                    Thank you, {fullName}. Your brief has been routed to Director Abdullah Qaasim-Falade.
                  </p>
                </div>

                <div className="pt-2 max-w-sm mx-auto">
                  <a
                    href={`https://wa.me/2347070763135?text=${whatsappInquiryText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-press inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#12345B] hover:bg-[#1769AA] text-white font-mono text-xs font-bold rounded-full shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E6AD3C]" />
                    <span>EXPEDITE ON WHATSAPP (1-TAP)</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 font-bold text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label className="block font-bold text-[#12345B] mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Babatunde Lawal"
                    className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] rounded-xl text-[#1F2937] focus:outline-none focus:border-[#1769AA]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#12345B] mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] rounded-xl text-[#1F2937] focus:outline-none focus:border-[#1769AA]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#12345B] mb-1">
                      WHATSAPP NUMBER
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 701 234 5678"
                      className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] rounded-xl text-[#1F2937] focus:outline-none focus:border-[#1769AA]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#12345B] mb-1">
                    INQUIRY CATEGORY
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] rounded-xl text-[#1F2937] focus:outline-none focus:border-[#1769AA]"
                  >
                    <option value="Cohort Admission Inquiry">Cohort Admission &amp; Program Selection</option>
                    <option value="1-on-1 Diagnostic Consultation">1-on-1 Strategy &amp; Diagnostic Session</option>
                    <option value="Corporate / Team Training">Corporate / Team Engineering Sprints</option>
                    <option value="Curriculum Sponsorship">Curriculum &amp; Fellowship Sponsorship</option>
                    <option value="General Studio Inquiry">General Studio Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#12345B] mb-1">
                    BRIEF INQUIRY OR MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your goals, questions, or target timeline..."
                    className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] rounded-xl text-[#1F2937] focus:outline-none focus:border-[#1769AA]"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#64748B]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1769AA]" />
                    <span>Direct founder transmission</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-press inline-flex items-center gap-2 px-6 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white font-bold rounded-full transition-colors shadow-sm disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 text-[#E6AD3C]" />
                    <span>{isSubmitting ? 'TRANSMITTING...' : 'DISPATCH INQUIRY'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 font-mono text-xs text-[#64748B]">LOADING COMMUNICATIONS DESK...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
