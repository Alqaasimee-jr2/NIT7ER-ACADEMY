'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { FACULTIES } from '@/data/academyData';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Send,
  ShieldCheck,
  AlertCircle,
  Award,
} from 'lucide-react';
import { N7BrandMark } from '@/components/N7BrandMark';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

function ApplicationFormContent() {
  const searchParams = useSearchParams();
  const trackParam = searchParams.get('track');
  const programParam = searchParams.get('program');

  const initialFaculty =
    trackParam && FACULTIES.some((f) => f.id === trackParam) ? trackParam : FACULTIES[0].id;
  const initialFacObj = FACULTIES.find((f) => f.id === initialFaculty) || FACULTIES[0];
  const initialProgram =
    programParam && initialFacObj.programs.some((p) => p.id === programParam)
      ? programParam
      : initialFacObj.programs[0]?.id || '';

  const [step, setStep] = useState<number>(1);
  const [faculty, setFaculty] = useState<string>(initialFaculty);
  const [programId, setProgramId] = useState<string>(initialProgram);

  useEffect(() => {
    if (trackParam && FACULTIES.some((f) => f.id === trackParam)) {
      setFaculty(trackParam);
      const targetFac = FACULTIES.find((f) => f.id === trackParam) || FACULTIES[0];
      if (programParam && targetFac.programs.some((p) => p.id === programParam)) {
        setProgramId(programParam);
      } else {
        setProgramId(targetFac.programs[0]?.id || '');
      }
    } else if (programParam) {
      const matchedFac = FACULTIES.find((f) =>
        f.programs.some((p) => p.id === programParam)
      );
      if (matchedFac) {
        setFaculty(matchedFac.id);
        setProgramId(programParam);
      }
    }
  }, [trackParam, programParam]);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [experience, setExperience] = useState<string>('Intermediate Builder');
  const [goals, setGoals] = useState<string>('');
  const [portfolioUrl, setPortfolioUrl] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    refCode: string;
  } | null>(null);

  const selectedFacultyObj = FACULTIES.find((f) => f.id === faculty) || FACULTIES[0];
  const selectedProgramObj =
    selectedFacultyObj.programs.find((p) => p.id === programId) ||
    selectedFacultyObj.programs[0];

  const handleFacultySelect = (fId: string) => {
    setFaculty(fId);
    const targetFac = FACULTIES.find((f) => f.id === fId) || FACULTIES[0];
    setProgramId(targetFac.programs[0]?.id || '');
  };

  const handleNext = () => {
    setErrorMsg('');
    if (step === 1 && !faculty) {
      setErrorMsg('Please select an academic faculty to proceed.');
      return;
    }
    if (step === 2) {
      if (!fullName.trim() || !email.trim()) {
        setErrorMsg('Please provide both your Full Name and Email address.');
        return;
      }
      if (!email.includes('@')) {
        setErrorMsg('Please enter a valid email address.');
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setErrorMsg('');
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          faculty: selectedFacultyObj.title,
          program: selectedProgramObj
            ? `${selectedProgramObj.code}: ${selectedProgramObj.title}`
            : 'Comprehensive Faculty Track',
          fullName,
          email,
          phone,
          experience,
          goals,
          portfolioUrl,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit application.');
      }

      setSubmissionResult({
        success: true,
        refCode: data.refCode,
      });

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappText = encodeURIComponent(
    `Hello NIT7ER Academy! I have completed my intake application.\n\n` +
      `• Reference: ${submissionResult?.refCode || 'N/A'}\n` +
      `• Name: ${fullName}\n` +
      `• Faculty: ${selectedFacultyObj.title}\n` +
      `• Track: ${selectedProgramObj ? `${selectedProgramObj.code} - ${selectedProgramObj.title}` : 'Comprehensive Track'}\n` +
      `• Experience: ${experience}\n` +
      `• Email: ${email}\n` +
      `• Phone: ${phone || 'N/A'}\n\n` +
      `I would like to verify my application status with Director Abdullah Qaasim-Falade.`
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Breadcrumbs items={[{ label: 'Admissions & Catalog', href: '/programs' }, { label: 'Cohort Application' }]} />

      {/* Header */}
      <div className="text-center space-y-3">
        <N7BrandMark size="xl" variant="gold" className="mx-auto" />
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF7FC] border border-[#D9E6F0] rounded-full text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[#1769AA] pulse-ring"></span>
          <span className="font-bold text-[#12345B]">INTAKE QUEUE // COHORT 2026/2027</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#12345B] tracking-tight">
          Cohort Application &amp; Diagnostic Intake
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B] max-w-lg mx-auto">
          Apply for one of our 12 specialized program tracks. Select your discipline to begin.
        </p>
      </div>

      {/* Success State */}
      {submissionResult ? (
        <div className="technical-border curve-asymmetric p-6 sm:p-10 bg-white text-center space-y-6 border border-[#D9E6F0] shadow-sm">
          <div className="w-14 h-14 bg-[#12345B] text-[#E6AD3C] rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <div className="space-y-1.5">
            <span className="label-mono px-3 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0] inline-block font-bold">
              REGISTRATION LOGGED &amp; VERIFIED
            </span>
            <h2 className="text-2xl font-black text-[#12345B] tracking-tight pt-1">
              Application Successfully Queued
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
              Your candidate profile has been logged in our studio intake queue. Keep your institutional reference code below:
            </p>
          </div>

          <div className="p-4 bg-[#EEF7FC]/70 border border-[#D9E6F0] rounded-2xl inline-block text-center max-w-xs mx-auto shadow-2xs">
            <span className="label-mono text-[9px] text-[#64748B] block">
              APPLICATION REFERENCE
            </span>
            <span className="text-2xl font-mono font-bold tracking-widest text-[#12345B]">
              {submissionResult.refCode}
            </span>
          </div>

          <div className="p-4 bg-[#FAFCFE] border border-[#D9E6F0] rounded-2xl text-left max-w-lg mx-auto space-y-2 text-xs font-mono">
            <span className="label-mono text-[9px] text-[#64748B] block">ENROLLMENT SELECTION</span>
            <div className="text-[#12345B] font-bold">
              {selectedFacultyObj.badge}: {selectedFacultyObj.title}
            </div>
            <div className="text-[#1769AA]">
              Track: {selectedProgramObj?.code} — {selectedProgramObj?.title}
            </div>
            <div className="text-[#64748B] pt-1">
              Candidate: {fullName} ({email})
            </div>
          </div>

          <div className="p-6 bg-[#EEF7FC]/60 border border-[#D9E6F0] rounded-2xl text-left max-w-lg mx-auto space-y-3.5 shadow-2xs">
            <h4 className="label-mono text-[#12345B] flex items-center gap-1.5 font-bold">
              <MessageCircle className="w-4 h-4 text-[#1769AA]" />
              <span>RECOMMENDED: 1-TAP WHATSAPP CONFIRMATION</span>
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              To expedite your profile diagnostic and avoid email spam delays, dispatch your pre-formatted application confirmation directly to Director Abdullah Qaasim-Falade on WhatsApp:
            </p>
            <a
              href={`https://wa.me/2347070763135?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="btn-press inline-flex items-center justify-center gap-2.5 w-full px-5 py-3.5 bg-[#12345B] hover:bg-[#1769AA] text-white font-mono text-xs sm:text-sm font-bold rounded-full shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#E6AD3C]" />
              <span>CONFIRM APPLICATION ON WHATSAPP</span>
            </a>
          </div>
        </div>
      ) : (
        /* Multi-Step Form */
        <div className="technical-border curve-asymmetric p-6 sm:p-8 bg-white space-y-6 border border-[#D9E6F0] shadow-sm">
          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-1 font-mono text-xs font-bold text-[#64748B]">
              <span>[STEP 0{step} OF 03]</span>
              <span className="text-[#12345B]">
                {step === 1 && 'CHOOSE FACULTY & PROGRAM TRACK'}
                {step === 2 && 'PERSONAL & CONTACT DETAILS'}
                {step === 3 && 'EXPERIENCE & CAPSTONE GOAL'}
              </span>
            </div>
            <div className="w-full bg-[#EEF7FC] border border-[#D9E6F0] h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#1769AA] to-[#E6AD3C] h-full rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs font-mono font-bold text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: Faculty & Program Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="label-mono block text-[#12345B]">
                  01. Select Foundational Academic Faculty
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FACULTIES.map((fac) => {
                    const isSelected = fac.id === faculty;
                    return (
                      <button
                        type="button"
                        key={fac.id}
                        onClick={() => handleFacultySelect(fac.id)}
                        className={`btn-press p-4 border text-left transition-all space-y-1.5 rounded-2xl ${
                          isSelected
                            ? 'border-[#12345B] bg-[#EEF7FC] ring-2 ring-[#12345B] shadow-2xs'
                            : 'border-[#D9E6F0] bg-white hover:border-[#1769AA]'
                        }`}
                      >
                        <div className="flex items-center justify-between font-mono text-xs">
                          <span className="font-bold text-[#1769AA]">
                            FACULTY {fac.number}
                          </span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-[#12345B]"></span>}
                        </div>
                        <h4 className="font-bold text-sm text-[#12345B]">
                          {fac.title}
                        </h4>
                        <p className="text-xs text-[#64748B] line-clamp-2">
                          {fac.subtitle}
                        </p>
                        <span className="text-[10px] font-mono text-[#1769AA] block pt-1">
                          {fac.programs.length} Specialized Tracks
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sub-Selection: Specialized Program Track */}
              <div className="space-y-3 pt-4 border-t border-[#D9E6F0]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="label-mono block text-[#12345B]">
                    Select Specialized Program Track in Faculty {selectedFacultyObj.number}
                  </span>
                  {selectedProgramObj && (
                    <Link
                      href={`/programs/${selectedFacultyObj.id}/${selectedProgramObj.id}`}
                      className="text-[11px] font-mono font-bold text-[#1769AA] hover:text-[#12345B] inline-flex items-center gap-1"
                    >
                      <span>Inspect {selectedProgramObj.code} Syllabus</span>
                      <ArrowRight className="w-3 h-3 text-[#E6AD3C]" />
                    </Link>
                  )}
                </div>

                <div className="space-y-2.5">
                  {selectedFacultyObj.programs.map((prog) => {
                    const isProgSelected = prog.id === programId;
                    return (
                      <button
                        type="button"
                        key={prog.id}
                        onClick={() => setProgramId(prog.id)}
                        className={`btn-press w-full p-4 border text-left rounded-xl transition-all space-y-1.5 ${
                          isProgSelected
                            ? 'border-[#1769AA] bg-[#EEF7FC]/70 ring-1 ring-[#1769AA] shadow-2xs'
                            : 'border-[#D9E6F0] bg-white hover:border-[#1769AA]/50'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="label-mono px-2 py-0.5 bg-[#12345B] text-white rounded text-[9px]">
                              {prog.code}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-[#12345B]">
                              {prog.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-mono text-[#64748B]">
                            <span>{prog.duration}</span>
                            <span>•</span>
                            <span className="px-1.5 py-0.5 bg-white border border-[#D9E6F0] rounded">
                              {prog.level}
                            </span>
                            {isProgSelected && (
                              <span className="w-2 h-2 rounded-full bg-[#1769AA]"></span>
                            )}
                          </div>
                        </div>

                        <p className="text-xs text-[#64748B]">
                          {prog.tagline}
                        </p>

                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#1769AA] pt-1">
                          <Award className="w-3.5 h-3.5 text-[#E6AD3C] shrink-0" />
                          <span>Capstone: {prog.capstoneProject.title}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Personal Details */}
          {step === 2 && (
            <div className="space-y-4">
              <span className="label-mono block text-[#12345B]">
                02. Candidate Information
              </span>
              <div className="space-y-3 font-mono">
                <div>
                  <label className="block text-xs font-bold text-[#12345B] mb-1">
                    FULL LEGAL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Adebayo Ogunlesi"
                    className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] rounded-xl text-xs sm:text-sm text-[#1F2937] focus:outline-none focus:border-[#1769AA] focus:ring-1 focus:ring-[#1769AA]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#12345B] mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] rounded-xl text-xs sm:text-sm text-[#1F2937] focus:outline-none focus:border-[#1769AA] focus:ring-1 focus:ring-[#1769AA]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#12345B] mb-1">
                    WHATSAPP PHONE NUMBER (WITH COUNTRY CODE)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 901 234 5678"
                    className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] rounded-xl text-xs sm:text-sm text-[#1F2937] focus:outline-none focus:border-[#1769AA] focus:ring-1 focus:ring-[#1769AA]/20"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Goals & Experience */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <span className="label-mono block text-[#12345B]">
                03. Diagnostic Alignment &amp; Goals
              </span>

              {/* Selected Track Confirmation */}
              <div className="p-3.5 bg-[#EEF7FC]/70 border border-[#D9E6F0] rounded-xl space-y-1 font-mono text-xs">
                <span className="label-mono text-[9px] text-[#64748B] block">SELECTED TRACK</span>
                <div className="text-[#12345B] font-bold">
                  {selectedFacultyObj.badge}: {selectedFacultyObj.title}
                </div>
                <div className="text-[#1769AA]">
                  Track: {selectedProgramObj?.code} — {selectedProgramObj?.title} ({selectedProgramObj?.duration})
                </div>
              </div>

              <div className="space-y-3 font-mono">
                <div>
                  <label className="block text-xs font-bold text-[#12345B] mb-1">
                    CURRENT EXPERIENCE LEVEL
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] rounded-xl text-xs text-[#1F2937] focus:outline-none focus:border-[#1769AA]"
                  >
                    <option value="Self-Taught Beginner">Self-Taught Beginner (Foundational concepts)</option>
                    <option value="Intermediate Builder">Intermediate Builder (Can ship with guidance)</option>
                    <option value="Experienced Professional">Experienced Professional (Upskilling &amp; Systems)</option>
                    <option value="Founder / Entrepreneur">Founder / Solo Entrepreneur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#12345B] mb-1">
                    INTENDED CAPSTONE DELIVERABLE OR MOTIVATION
                  </label>
                  <textarea
                    rows={3}
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    placeholder={`Describe your goals for ${selectedProgramObj ? selectedProgramObj.title : 'this track'}...`}
                    className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] rounded-xl text-xs sm:text-sm text-[#1F2937] focus:outline-none focus:border-[#1769AA]"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#12345B] mb-1">
                    PORTFOLIO, GITHUB, OR WORK SAMPLE (OPTIONAL)
                  </label>
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://github.com/yourhandle or portfolio"
                    className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] rounded-xl text-xs sm:text-sm text-[#1F2937] focus:outline-none focus:border-[#1769AA]"
                  />
                </div>
              </div>

              <div className="p-3.5 bg-[#EEF7FC]/70 border border-[#D9E6F0] rounded-xl text-xs text-[#64748B] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1769AA] shrink-0" />
                <span>
                  By submitting, you commit to NIT7ER Academy’s daily execution standards, reality telemetry, and public capstone defense.
                </span>
              </div>
            </form>
          )}

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-[#D9E6F0] flex flex-wrap items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={isSubmitting}
                className="btn-press inline-flex items-center gap-1.5 px-4 py-2 border border-[#D9E6F0] rounded-full text-xs font-mono font-bold text-[#64748B] hover:text-[#12345B] hover:bg-[#EEF7FC] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>PREVIOUS</span>
              </button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn-press inline-flex items-center gap-2 px-6 py-2.5 bg-[#12345B] text-white text-xs sm:text-sm font-mono font-bold rounded-full hover:bg-[#1769AA] transition-colors shadow-sm ml-auto"
              >
                <span>CONTINUE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E6AD3C]" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="btn-press inline-flex items-center gap-2 px-6 py-2.5 bg-[#E6AD3C] hover:bg-[#F5C842] text-[#12345B] text-xs sm:text-sm font-mono font-bold rounded-full transition-colors disabled:opacity-50 shadow-sm ml-auto"
              >
                <Send className="w-3.5 h-3.5 shrink-0" />
                <span>{isSubmitting ? 'REGISTERING...' : 'SUBMIT APPLICATION'}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 font-mono text-xs text-[#64748B]">LOADING PORTAL...</div>}>
      <ApplicationFormContent />
    </Suspense>
  );
}
