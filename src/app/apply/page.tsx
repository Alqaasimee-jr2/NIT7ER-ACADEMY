'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import confetti from 'canvas-confetti';
import { FACULTIES, FOUNDER_INFO } from '@/data/academyData';
import { GeometricShape } from '@/components/GeometricShapes';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Sparkles,
  Send,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';

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

      // Trigger celebratory confetti
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

  // Pre-formatted WhatsApp backup message
  const whatsappText = encodeURIComponent(
    `Hello NIT7ER Academy! I have completed my intake application.\n\n` +
      `• Reference: ${submissionResult?.refCode || 'N/A'}\n` +
      `• Name: ${fullName}\n` +
      `• Track: ${selectedFacultyObj.title}\n` +
      `• Experience: ${experience}\n` +
      `• Email: ${email}\n` +
      `• Phone: ${phone || 'N/A'}\n\n` +
      `I would like to verify my application status.`
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-50 text-[#12345B] text-xs font-black uppercase tracking-wider border border-amber-200 rounded-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Cohort 2026/2027 Admissions</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#12345B]">
          NIT7ER Academy Application Portal
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          Complete this diagnostic intake to apply. Applications are reviewed directly by Director Abdullah Qaasim-Falade.
        </p>
      </div>

      {/* Success State */}
      {submissionResult ? (
        <div className="na-section p-6 sm:p-10 bg-white border-2 border-emerald-500 text-center space-y-6 shadow-md">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">
              Registration Confirmed
            </span>
            <h2 className="text-2xl font-black text-[#12345B]">
              Application Successfully Logged!
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Your application has been received and queued for review. Save your institutional reference code below:
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg inline-block text-center max-w-xs mx-auto">
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">
              Application Reference Code
            </span>
            <span className="text-xl font-black tracking-widest text-[#12345B]">
              {submissionResult.refCode}
            </span>
          </div>

          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-lg text-left max-w-lg mx-auto space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Recommended: Instant 1-Tap WhatsApp Backup</span>
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              To expedite your profile diagnostic and avoid email spam filters, send your pre-formatted application confirmation directly to the admissions desk on WhatsApp:
            </p>
            <a
              href={`https://wa.me/2349019597944?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send 1-Tap WhatsApp Confirmation</span>
            </a>
          </div>
        </div>
      ) : (
        /* Multi-Step Form */
        <div className="na-section p-6 sm:p-8 bg-white border border-slate-200 space-y-6 shadow-sm">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Step {step} of 3</span>
              <span>
                {step === 1 && 'Select Academic Faculty'}
                {step === 2 && 'Personal Information'}
                {step === 3 && 'Experience & Execution Goals'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#12345B] h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs font-bold text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: Faculty Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#12345B]">
                Choose Your Primary Discipline
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FACULTIES.map((fac) => {
                  const isSelected = fac.id === faculty;
                  return (
                    <button
                      type="button"
                      key={fac.id}
                      onClick={() => setFaculty(fac.id)}
                      className={`p-4 rounded-lg border text-left transition-all space-y-2 ${
                        isSelected
                          ? 'border-[#12345B] bg-slate-50/80 ring-2 ring-[#12345B]/10 shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-[#12345B]">
                          Faculty {fac.number}
                        </span>
                        <GeometricShape type={fac.shape} color={fac.shapeColor} size="sm" />
                      </div>
                      <h4 className="font-bold text-sm text-[#12345B]">
                        {fac.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {fac.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Personal Profile */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#12345B]">
                Personal &amp; Contact Details
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Adebayo Ogunlesi"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#12345B] focus:ring-1 focus:ring-[#12345B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#12345B] focus:ring-1 focus:ring-[#12345B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Phone Number (with Country Code)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 901 234 5678"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#12345B] focus:ring-1 focus:ring-[#12345B]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Experience & Goals */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#12345B]">
                Diagnostic &amp; Intent Declaration
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Current Experience Level
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#12345B] bg-white"
                  >
                    <option value="Self-Taught Beginner">Self-Taught Beginner (Basic Concepts)</option>
                    <option value="Intermediate Builder">Intermediate Builder (Can ship with guidance)</option>
                    <option value="Experienced Professional">Experienced Professional (Upskilling &amp; Systems)</option>
                    <option value="Founder / Entrepreneur">Founder / Solo Entrepreneur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Goal or Intended Capstone Project
                  </label>
                  <textarea
                    rows={3}
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    placeholder="Describe what specific system, tool, or portfolio piece you want to ship during your cohort..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#12345B]"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Portfolio, GitHub or Writing Sample Link (Optional)
                  </label>
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://github.com/yourhandle or personal website"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-[#12345B]"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#12345B] shrink-0" />
                <span>
                  By submitting, you agree to uphold NIT7ER Academy’s daily execution standards and active project defense.
                </span>
              </div>
            </form>
          )}

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={isSubmitting}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#12345B] text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-[#0A1E36] transition-colors"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-amber-400 text-[#12345B] text-xs sm:text-sm font-black shadow-xs hover:bg-amber-300 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Registering Application...' : 'Submit Application'}</span>
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
    <Suspense fallback={<div className="text-center py-20 text-sm font-bold text-slate-400">Loading Application Portal...</div>}>
      <ApplicationFormContent />
    </Suspense>
  );
}
