'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import confetti from 'canvas-confetti';
import { FACULTIES, FOUNDER_INFO } from '@/data/academyData';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Send,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';
import { N7BrandMark } from '@/components/N7BrandMark';

function ApplicationFormContent() {
  const searchParams = useSearchParams();
  const trackParam = searchParams.get('track');

  const [step, setStep] = useState<number>(1);
  const [faculty, setFaculty] = useState<string>(FACULTIES[0].id);
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

  useEffect(() => {
    if (trackParam && FACULTIES.some((f) => f.id === trackParam)) {
      setFaculty(trackParam);
    }
  }, [trackParam]);

  const selectedFacultyObj = FACULTIES.find((f) => f.id === faculty) || FACULTIES[0];

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
      `• Track: ${selectedFacultyObj.title}\n` +
      `• Experience: ${experience}\n` +
      `• Email: ${email}\n` +
      `• Phone: ${phone || 'N/A'}\n\n` +
      `I would like to verify my application status with the director.`
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FAF9F6] border border-[#E5E5E0] text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[#C9A84C]"></span>
          <span className="font-bold text-[#121212]">INTAKE QUEUE // COHORT 2026/2027</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#121212] tracking-tight">
          NIT7ER Academy Diagnostic Intake Portal
        </h1>
        <p className="text-xs sm:text-sm text-[#71717A] max-w-lg mx-auto">
          Complete this diagnostic intake to apply. Applications are reviewed directly by Director Abdullah Qaasim-Falade.
        </p>
      </div>

      {/* Success State */}
      {submissionResult ? (
        <div className="technical-border p-6 sm:p-10 bg-white text-center space-y-6">
          <div className="w-12 h-12 bg-[#121212] text-[#F5C842] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div className="space-y-1.5">
            <span className="label-mono text-[#C9A84C] block">
              REGISTRATION LOGGED &amp; VERIFIED
            </span>
            <h2 className="text-2xl font-black text-[#121212] tracking-tight">
              Application Successfully Queued
            </h2>
            <p className="text-xs sm:text-sm text-[#71717A] max-w-md mx-auto">
              Your profile has been logged in our studio intake queue. Keep your institutional reference code below:
            </p>
          </div>

          <div className="p-4 bg-[#FAF9F6] border border-[#E5E5E0] inline-block text-center max-w-xs mx-auto">
            <span className="label-mono text-[9px] text-[#71717A] block">
              APPLICATION REFERENCE
            </span>
            <span className="text-xl font-mono font-bold tracking-widest text-[#121212]">
              {submissionResult.refCode}
            </span>
          </div>

          <div className="p-5 bg-[#FAF9F6] border border-[#E5E5E0] text-left max-w-lg mx-auto space-y-3">
            <h4 className="label-mono text-[#121212] flex items-center gap-1.5 font-bold">
              <MessageCircle className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>RECOMMENDED: 1-TAP WHATSAPP CONFIRMATION</span>
            </h4>
            <p className="text-xs text-[#71717A] leading-relaxed">
              To expedite your profile diagnostic and avoid email spam delays, dispatch your pre-formatted application confirmation directly to Director Abdullah Qaasim-Falade on WhatsApp:
            </p>
            <a
              href={`https://wa.me/2349019597944?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#121212] hover:bg-[#27272A] text-white font-mono text-xs sm:text-sm font-bold shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#F5C842]" />
              <span>CONFIRM APPLICATION ON WHATSAPP</span>
            </a>
          </div>
        </div>
      ) : (
        /* Multi-Step Form */
        <div className="technical-border p-6 sm:p-8 bg-white space-y-6">
          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-xs font-bold text-[#71717A]">
              <span>[STEP 0{step} OF 03]</span>
              <span className="text-[#121212]">
                {step === 1 && 'CHOOSE ACADEMIC FACULTY'}
                {step === 2 && 'PERSONAL & CONTACT DETAILS'}
                {step === 3 && 'EXPERIENCE & CAPSTONE GOAL'}
              </span>
            </div>
            <div className="w-full bg-[#FAF9F6] border border-[#E5E5E0] h-1.5 overflow-hidden">
              <div
                className="bg-[#C9A84C] h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 flex items-center gap-2 text-xs font-mono font-bold text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: Faculty Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <span className="label-mono block text-[#121212]">
                01. Select Primary Academic Discipline
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FACULTIES.map((fac) => {
                  const isSelected = fac.id === faculty;
                  return (
                    <button
                      type="button"
                      key={fac.id}
                      onClick={() => setFaculty(fac.id)}
                      className={`p-4 border text-left transition-all space-y-1.5 ${
                        isSelected
                          ? 'border-[#121212] bg-[#FAF9F6] ring-1 ring-[#121212]'
                          : 'border-[#E5E5E0] bg-white hover:border-[#121212]'
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="font-bold text-[#C9A84C]">
                          FACULTY {fac.number}
                        </span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[#121212]"></span>}
                      </div>
                      <h4 className="font-bold text-sm text-[#121212]">
                        {fac.title}
                      </h4>
                      <p className="text-xs text-[#71717A] line-clamp-2">
                        {fac.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Personal Details */}
          {step === 2 && (
            <div className="space-y-4">
              <span className="label-mono block text-[#121212]">
                02. Candidate Information
              </span>
              <div className="space-y-3 font-mono">
                <div>
                  <label className="block text-xs font-bold text-[#121212] mb-1">
                    FULL LEGAL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Adebayo Ogunlesi"
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E5E5E0] text-xs sm:text-sm text-[#121212] focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121212] mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E5E5E0] text-xs sm:text-sm text-[#121212] focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121212] mb-1">
                    WHATSAPP PHONE NUMBER (WITH COUNTRY CODE)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 901 234 5678"
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E5E5E0] text-xs sm:text-sm text-[#121212] focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Goals & Experience */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <span className="label-mono block text-[#121212]">
                03. Diagnostic Alignment &amp; Goals
              </span>

              <div className="space-y-3 font-mono">
                <div>
                  <label className="block text-xs font-bold text-[#121212] mb-1">
                    CURRENT EXPERIENCE LEVEL
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E5E5E0] text-xs text-[#121212] focus:outline-none focus:border-[#C9A84C]"
                  >
                    <option value="Self-Taught Beginner">Self-Taught Beginner (Foundational concepts)</option>
                    <option value="Intermediate Builder">Intermediate Builder (Can ship with guidance)</option>
                    <option value="Experienced Professional">Experienced Professional (Upskilling &amp; Systems)</option>
                    <option value="Founder / Entrepreneur">Founder / Solo Entrepreneur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121212] mb-1">
                    INTENDED CAPSTONE DELIVERABLE
                  </label>
                  <textarea
                    rows={3}
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    placeholder="Describe the specific software, cognitive routine, or technical document you intend to ship..."
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E5E5E0] text-xs sm:text-sm text-[#121212] focus:outline-none focus:border-[#C9A84C]"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#121212] mb-1">
                    PORTFOLIO, GITHUB, OR WRITING URL (OPTIONAL)
                  </label>
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://github.com/yourhandle or portfolio"
                    className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E5E5E0] text-xs sm:text-sm text-[#121212] focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>
              </div>

              <div className="p-3 bg-[#FAF9F6] border border-[#E5E5E0] text-xs text-[#71717A] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A84C] shrink-0" />
                <span>
                  By submitting, you commit to NIT7ER Academy’s daily execution standards, reality telemetry, and public capstone defense.
                </span>
              </div>
            </form>
          )}

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-[#E5E5E0] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={isSubmitting}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#E5E5E0] text-xs font-mono font-bold text-[#71717A] hover:text-[#121212] hover:border-[#121212] transition-colors"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121212] text-white text-xs sm:text-sm font-mono font-bold hover:bg-[#27272A] transition-colors"
              >
                <span>CONTINUE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F5C842]" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C9A84C] hover:bg-[#F5C842] text-[#121212] text-xs sm:text-sm font-mono font-bold transition-colors disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'REGISTERING...' : 'SUBMIT APPLICATION FOR REVIEW'}</span>
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
    <Suspense fallback={<div className="text-center py-20 font-mono text-xs text-[#71717A]">LOADING PORTAL...</div>}>
      <ApplicationFormContent />
    </Suspense>
  );
}
