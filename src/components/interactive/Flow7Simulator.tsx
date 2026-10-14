'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, Flame, Brain, Shield, ArrowRight } from 'lucide-react';

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

  // Timer loop
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      logSession();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

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

  const logSession = () => {
    const newRecord: SessionRecord = {
      id: `session-${Date.now()}`,
      discipline,
      goal: goal || 'Deep Work Session',
      durationMinutes: selectedDuration,
      friction,
      timestamp: 'Just now',
    };
    setCompletedSessions((prev) => [newRecord, ...prev.slice(0, 3)]);
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
    <div className="technical-border p-6 sm:p-8 bg-white rounded-none space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E5E0] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="label-mono text-[#C9A84C]">Live Studio Utility</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-ping"></span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#121212] tracking-tight mt-0.5">
            Flow7 Cognitive Awareness Engine
          </h3>
          <p className="text-xs text-[#71717A] max-w-lg mt-0.5">
            Experience NIT7ER’s proprietary reality-tracking protocol in real-time. Lock a single objective, execute without self-deception, and log your output telemetry.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-[#FAF9F6] p-1 border border-[#E5E5E0] self-start sm:self-auto">
          {[15, 25, 50].map((mins) => (
            <button
              key={mins}
              onClick={() => handleDurationSelect(mins)}
              className={`px-3 py-1 text-xs font-mono font-bold transition-all ${
                selectedDuration === mins
                  ? 'bg-[#121212] text-[#F5C842]'
                  : 'text-[#71717A] hover:text-[#121212]'
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
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-[#FAF9F6] border border-[#E5E5E0] relative">
          <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
            {/* SVG Circular Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="44"
                className="stroke-[#E5E5E0]"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="44"
                className="stroke-[#C9A84C] transition-all duration-300"
                strokeWidth="5"
                strokeDasharray="276.46"
                strokeDashoffset={276.46 - (276.46 * progressPercent) / 100}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Timer Readout */}
            <div className="absolute text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-[#121212] tracking-tight block">
                {formattedTime}
              </span>
              <span className="label-mono text-[9px] text-[#71717A] block">
                {isRunning ? 'BLOCK RUNNING' : 'STATUS: IDLE'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={toggleTimer}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#121212] text-[#FFFFFF] hover:bg-[#27272A] font-mono text-xs font-bold transition-all shadow-xs"
            >
              {isRunning ? <Pause className="w-3.5 h-3.5 text-[#F5C842]" /> : <Play className="w-3.5 h-3.5 text-[#F5C842]" />}
              <span>{isRunning ? 'PAUSE' : 'START SPRINT'}</span>
            </button>
            <button
              onClick={resetTimer}
              className="p-2.5 border border-[#E5E5E0] bg-white text-[#71717A] hover:text-[#121212] hover:border-[#121212] transition-colors"
              title="Reset Timer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Telemetry & Parameter Inputs */}
        <div className="lg:col-span-7 space-y-4">
          <div className="space-y-1.5">
            <label className="label-mono block text-[#121212]">
              01. Faculty Discipline Domain
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {disciplines.map((d) => (
                <button
                  key={d}
                  onClick={() => setDiscipline(d)}
                  className={`px-3 py-2 text-xs font-medium border text-left transition-all ${
                    discipline === d
                      ? 'border-[#C9A84C] bg-[#F9F3E5] text-[#121212] font-bold'
                      : 'border-[#E5E5E0] bg-white text-[#71717A] hover:border-[#121212]'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="label-mono block text-[#121212]">
              02. Single Inviolable Objective
            </label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Define one tangible deliverable for this focus block..."
              className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E5E5E0] text-xs sm:text-sm font-mono text-[#121212] focus:outline-none focus:border-[#C9A84C]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="label-mono block text-[#121212]">
              03. Observed Friction Variable
            </label>
            <select
              value={friction}
              onChange={(e) => setFriction(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E5E5E0] text-xs font-mono text-[#121212] focus:outline-none focus:border-[#C9A84C]"
            >
              {frictionOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Log button */}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={logSession}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C9A84C] hover:text-[#9B7C28] transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>LOG TELEMETRY RECORD MANUAL</span>
            </button>
            <span className="text-[11px] font-mono text-[#71717A]">
              Flow7 Model v2.4
            </span>
          </div>
        </div>
      </div>

      {/* Recent Telemetry Stream */}
      <div className="border-t border-[#E5E5E0] pt-4 space-y-2">
        <span className="label-mono block text-[10px] text-[#71717A]">
          Recent Studio Execution Logs (Telemetry Buffer)
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {completedSessions.slice(0, 3).map((session) => (
            <div
              key={session.id}
              className="p-3 bg-[#FAF9F6] border border-[#E5E5E0] text-xs space-y-1"
            >
              <div className="flex items-center justify-between font-mono text-[10px] text-[#71717A]">
                <span className="font-bold text-[#121212]">{session.discipline}</span>
                <span>{session.timestamp}</span>
              </div>
              <p className="font-medium text-[#121212] truncate text-xs">
                {session.goal}
              </p>
              <div className="flex items-center justify-between text-[10px] text-[#71717A]">
                <span className="text-[#C9A84C] font-mono font-bold">{session.durationMinutes}m block</span>
                <span className="italic">{session.friction}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
