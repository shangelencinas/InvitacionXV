import React, { useState, useEffect } from 'react';
import { soundTrack } from '../utils/audio';

interface OpeningCurtainProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const OpeningCurtain: React.FC<OpeningCurtainProps> = ({ onOpen, isOpen }) => {
  const [opening, setOpening] = useState(false);
  const [audioPrompt, setAudioPrompt] = useState(true);

  const handleOpen = () => {
    setOpening(true);
    if (audioPrompt) {
      soundTrack.play();
    }
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflowX = 'hidden';
    };
  }, [isOpen]);

  if (isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#FAF5FB] via-[#FDF2F8] to-[#F5EEFB] text-center px-4 py-8 overflow-y-auto overflow-x-hidden transition-all duration-1000 ease-out ${
        opening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient lighting in Pink & Purple */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial from-[#F472B6]/25 via-[#C084FC]/15 to-transparent blur-3xl opacity-70 animate-shimmer-subtle" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[550px] h-[450px] bg-radial from-[#FBCFE8]/30 via-transparent to-transparent blur-3xl opacity-60" />

        {/* Floating sparkle dots */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(244,114,182,0.25)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* Frame */}
      <div className="relative max-w-lg w-full mx-auto py-12 px-6 sm:px-10 rounded-3xl bg-white/85 backdrop-blur-xl border border-[#F472B6]/40 shadow-[0_20px_50px_rgba(168,85,247,0.12),0_0_35px_rgba(244,114,182,0.15)]">
        {/* Corner filigree accents in Pink & Purple */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#F472B6]/60 rounded-tl-sm" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C084FC]/60 rounded-tr-sm" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#C084FC]/60 rounded-bl-sm" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#F472B6]/60 rounded-br-sm" />

        {/* Small emblem badge */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FDF2F8] to-[#FCE7F3] border border-[#F472B6]/50 flex items-center justify-center shadow-md">
            <span className="text-[#DB2777] text-xl font-serif">XV</span>
          </div>
        </div>

        {/* Kicker (Pink) */}
        <p className="text-xs uppercase tracking-[0.35em] text-[#DB2777] font-semibold mb-3">
          Estás invitado a celebrar mis XV años
        </p>

        {/* Main Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cinzel tracking-wider text-[#2D1047] mb-3">
          Valentina Sofía
        </h1>

        {/* Date (Purple) */}
        <p className="text-xs font-medium tracking-[0.25em] text-[#7E22CE] mb-8">
          21 · NOVIEMBRE · 2026 · HERMOSILLO, SONORA
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#F472B6]/60" />
          <span className="text-xs text-[#C084FC]">✦</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#F472B6]/60" />
        </div>

        {/* Audio preference toggle on opening */}
        <div className="flex items-center justify-center gap-2 mb-8 text-xs text-[#553569]">
          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={audioPrompt}
              onChange={(e) => setAudioPrompt(e.target.checked)}
              className="accent-[#EC4899] w-4 h-4 rounded cursor-pointer"
            />
            <span className="text-[#553569] font-medium">
              {audioPrompt ? 'Música de ambiente activada 🎵' : 'Silencio al ingresar'}
            </span>
          </label>
        </div>

        {/* Primary Open Button: Pink to Purple gradient */}
        <button
          onClick={handleOpen}
          disabled={opening}
          className="group relative inline-flex items-center justify-center px-9 py-3.5 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#9333EA] rounded-full shadow-[0_4px_25px_rgba(236,72,153,0.4)] hover:shadow-[0_6px_35px_rgba(168,85,247,0.55)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
        >
          <span className="relative z-10 flex items-center justify-center">
            ABRIR INVITACIÓN
          </span>
          <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        </button>

        {/* Bottom subtle note */}
        <p className="text-[11px] text-[#7E578F] mt-6 tracking-wide">
          Toca el botón para ingresar a la celebración
        </p>
      </div>
    </div>
  );
};
