import React, { useState, useEffect } from 'react';
import { Calendar, Download } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { FloralDecor, CrownXvLogo } from './FloralDecor';

export const Countdown: React.FC = () => {
  const targetDate = new Date('2026-11-22T02:00:00Z').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section id="cuenta-regresiva" className="relative py-20 sm:py-28 bg-[#1B0B26] text-[#FDF2F8] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-[#EC4899]/15 via-[#9333EA]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Delicate Floral Watercolor Corner Illustrations */}
      <FloralDecor position="top-left" />
      <FloralDecor position="top-right" />
      <FloralDecor position="bottom-left" />
      <FloralDecor position="bottom-right" />

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 text-center">
        {/* Crown XV logo header */}
        <div className="mb-6 flex justify-center">
          <CrownXvLogo light={true} />
        </div>

        {/* Heading in cursive script */}
        <h2 className="text-5xl sm:text-7xl font-script text-[#FBCFE8] mb-12 select-none drop-shadow-md">
          Faltan...
        </h2>

        {/* 4-column counter with vertical hairline dividers */}
        <div className="grid grid-cols-4 items-center justify-center max-w-md mx-auto mb-14">
          {/* Days */}
          <div className="px-2 text-center">
            <span className="block text-4xl sm:text-6xl font-cinzel font-light text-white tabular-nums mb-2 drop-shadow-sm">
              {pad(timeLeft.days)}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold">
              DÍAS
            </span>
          </div>

          {/* Hours */}
          <div className="px-2 text-center border-l border-white/15">
            <span className="block text-4xl sm:text-6xl font-cinzel font-light text-white tabular-nums mb-2 drop-shadow-sm">
              {pad(timeLeft.hours)}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold">
              HORAS
            </span>
          </div>

          {/* Minutes */}
          <div className="px-2 text-center border-l border-white/15">
            <span className="block text-4xl sm:text-6xl font-cinzel font-light text-white tabular-nums mb-2 drop-shadow-sm">
              {pad(timeLeft.minutes)}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold">
              MINUTOS
            </span>
          </div>

          {/* Seconds */}
          <div className="px-2 text-center border-l border-white/15">
            <span className="block text-4xl sm:text-6xl font-cinzel font-light text-white tabular-nums mb-2 drop-shadow-sm">
              {pad(timeLeft.seconds)}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C084FC] font-semibold">
              SEGUNDOS
            </span>
          </div>
        </div>

        {/* Calendar Box */}
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 shadow-xl max-w-sm mx-auto mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#241242]/80 border border-[#F472B6]/40 flex items-center justify-center mb-3 text-[#F472B6]">
            <Calendar className="w-6 h-6" />
          </div>
          <p className="text-base sm:text-lg font-serif italic text-white mb-1">
            {timeLeft.isPast ? '¡Hoy es el gran día! ✨' : '¡Hoy es el gran día!'}
          </p>
          <span className="text-xs text-[#EC4899]">♥</span>
        </div>

        {/* Add to Calendar Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-[#F472B6]" />
            <span>Agregar a Google Calendar</span>
          </a>
          <button
            onClick={downloadIcsFile}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-[#C084FC]" />
            <span>Descargar .ICS</span>
          </button>
        </div>
      </div>
    </section>
  );
};
