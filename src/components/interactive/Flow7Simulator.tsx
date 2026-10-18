'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, CheckCircle2 } from 'lucide-react';

interface SessionRecord {
  id: string;
  discipline: string;
  goal: string;
  durationMinutes: number;
  friction: string;
  timestamp: string;
}

export function Flow7Simulator() {
  const [selectedDuration, setSelectedDuration] = useState<number>(15); // in minutes
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [discipline, setDiscipline] = useState<string>('Creative Tech');
  const [goal, setGoal] = useState<string>('Implement API rate-limiter middleware');
  const [friction, setFriction] = useState<string>('Clean Flow (Zero Distractions)');
  const [completedSessions, setCompletedSessions] = useState<SessionRecord[]>([
    {
      id: 'demo-1',
      discipline: 'Creative Tech',
      goal: 'Architect Next.js server actions',
      durationMinutes: 25,
      friction: 'Clean Flow',
      timestamp: '10:42 AM',
    },
    {
      id: 'demo-2',
      discipline: 'Writing',
      goal: 'Draft ADR for caching strategy',
      durationMinutes: 15,
      friction: 'Minor tab switching',
      timestamp: '11:15 AM',
    },
  ]);

  const logSession = useCallback(() => {
    const newRecord: SessionRecord = {
      id: `session-${Date.now()}`,
      discipline,
      goal: goal || 'Deep Work Session',
      durationMinutes: selectedDuration,
      friction,
      timestamp: 'Just now',
    };
    setCompletedSessions((prev) => [newRecord, ...prev.slice(0, 3)]);
  }, [discipline, goal, selectedDuration, friction]);

  // Timer loop
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          logSession();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, logSession]);

  const handleDurationSelect = (mins: number) => {
    setIsRunning(false);
    setSelectedDuration(mins);
    setTimeLeft(mins * 60);
  };

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(selectedDuration * 60);
  };

  const totalSeconds = selectedDuration * 60;
  const progressPercent = ((totalSeconds - timeLeft) / totalSeconds) * 100;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const disciplines = [
    'Creative Tech',
    'Cognitive Systems',
    'Writing & Specs',
    'Computer Education',
  ];

  const frictionOptions = [
    'Clean Flow (Zero Distractions)',
    'Cognitive Resistance (Friction)',
    'External Interruption',
    'Tooling / Dependency Delay',
  ];

  return (
    <div className="technical-border curve-asymmetric p-6 sm:p-8 bg-white space-y-6 shadow-xs border border-[#D9E6F0]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D9E6F0] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="label-mono px-2.5 py-0.5 bg-[#EEF7FC] text-[#1769AA] rounded-full border border-[#D9E6F0]">
              Interactive Focus System
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1769AA] pulse-ring"></span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#12345B] tracking-tight mt-1">
            Flow7 Focus &amp; Reality Engine
          </h3>
          <p className="text-xs text-[#64748B] max-w-lg mt-0.5">
            Practice sprint tracking: set a target, run a focused session, and log completion friction.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-[#EEF7FC]/70 p-1.5 border border-[#D9E6F0] rounded-full self-start sm:self-auto">
          {[15, 25, 50].map((mins) => (
            <button
              key={mins}
              onClick={() => handleDurationSelect(mins)}
              className={`px-3.5 py-1 text-xs font-mono font-bold rounded-full transition-all ${
                selectedDuration === mins
                  ? 'bg-[#12345B] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#12345B]'
              }`}
            >
              {mins}m
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Core Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive Circular Timer Ring */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#EEF7FC]/60 border border-[#D9E6F0] rounded-2xl relative shadow-2xs">
          <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
            {/* SVG Circular Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="44"
                className="stroke-[#D9E6F0]"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="44"
                className="stroke-[#1769AA] transition-all duration-300"
                strokeWidth="5"
                strokeDasharray="276.46"
                strokeDashoffset={276.46 - (276.46 * progressPercent) / 100}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Timer Readout */}
            <div className="absolute text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-[#12345B] tracking-tight block">
                {formattedTime}
              </span>
              <span className="label-mono text-[9px] text-[#64748B] block">
                {isRunning ? 'BLOCK RUNNING' : 'STATUS: IDLE'}
              </span>
            </div>
          </div>

          {/* Action Buttons with Pure Essence Button Press */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={toggleTimer}
              className="btn-press inline-flex items-center gap-2 px-6 py-2.5 bg-[#12345B] hover:bg-[#1769AA] text-white rounded-full font-mono text-xs font-bold transition-all shadow-sm"
            >
              {isRunning ? <Pause className="w-3.5 h-3.5 text-[#E6AD3C]" /> : <Play className="w-3.5 h-3.5 text-[#E6AD3C]" />}
              <span>{isRunning ? 'PAUSE' : 'START SPRINT'}</span>
            </button>
            <button
              onClick={resetTimer}
              className="p-2.5 border border-[#D9E6F0] rounded-full bg-white text-[#64748B] hover:text-[#12345B] hover:border-[#1769AA] hover:bg-[#EEF7FC] transition-colors shadow-2xs"
              title="Reset Timer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Telemetry & Parameter Inputs */}
        <div className="lg:col-span-7 space-y-4">
          <div className="space-y-1.5">
            <label className="label-mono block text-[#12345B]">
              01. Faculty Discipline Domain
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {disciplines.map((d) => (
                <button
                  key={d}
                  onClick={() => setDiscipline(d)}
                  className={`btn-press px-3 py-2 text-xs font-medium border text-left rounded-xl transition-all ${
                    discipline === d
                      ? 'border-[#1769AA] bg-[#EEF7FC] text-[#12345B] font-bold shadow-2xs'
                      : 'border-[#D9E6F0] bg-white text-[#64748B] hover:border-[#12345B]'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="label-mono block text-[#12345B]">
              02. Single Inviolable Objective
            </label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Define one tangible deliverable for this focus block..."
              className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] text-xs sm:text-sm font-mono text-[#1F2937] rounded-xl focus:outline-none focus:border-[#1769AA] focus:ring-1 focus:ring-[#1769AA]/20"
            />
          </div>

          <div className="space-y-1.5">
            <label className="label-mono block text-[#12345B]">
              03. Observed Friction Variable
            </label>
            <select
              value={friction}
              onChange={(e) => setFriction(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#D9E6F0] text-xs font-mono text-[#1F2937] rounded-xl focus:outline-none focus:border-[#1769AA]"
            >
              {frictionOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Log button */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
            <button
              onClick={logSession}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#1769AA] hover:text-[#12345B] transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E6AD3C] shrink-0" />
              <span>LOG FOCUS SESSION TELEMETRY</span>
            </button>
            <span className="text-[11px] font-mono text-[#64748B]">
              Flow7 Model v2.4
            </span>
          </div>
        </div>
      </div>

      {/* Recent Telemetry Stream */}
      <div className="border-t border-[#D9E6F0] pt-4 space-y-2">
        <span className="label-mono block text-[10px] text-[#64748B]">
          Recent Studio Execution Logs (Telemetry Buffer)
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {completedSessions.slice(0, 3).map((session) => (
            <div
              key={session.id}
              className="p-3.5 bg-[#EEF7FC]/50 border border-[#D9E6F0] rounded-xl text-xs space-y-1 shadow-2xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-1 font-mono text-[10px] text-[#64748B]">
                <span className="font-bold text-[#12345B]">{session.discipline}</span>
                <span>{session.timestamp}</span>
              </div>
              <p className="font-medium text-[#1F2937] truncate text-xs">
                {session.goal}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] text-[#64748B]">
                <span className="text-[#1769AA] font-mono font-bold">{session.durationMinutes}m block</span>
                <span className="italic truncate">{session.friction}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
