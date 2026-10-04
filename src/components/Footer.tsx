import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#FAF5FB] via-[#F6ECF9] to-[#EFE2F5] py-16 sm:py-20 px-4 sm:px-6 overflow-hidden border-t border-[#F472B6]/25">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#F472B6]/20 via-[#C084FC]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Decorative Floral Branch - Bottom Left Corner */}
      <svg
        className="absolute bottom-0 left-0 w-44 sm:w-64 h-44 sm:h-64 pointer-events-none opacity-50 sm:opacity-65"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M0 200 Q40 140 100 120 T180 80" stroke="#EC4899" strokeWidth="1.5" strokeOpacity="0.5" />
        <path d="M0 170 Q50 130 90 90" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.4" />
        {/* Flower 1 */}
        <circle cx="45" cy="140" r="14" fill="#C084FC" fillOpacity="0.3" />
        <circle cx="45" cy="140" r="6" fill="#DB2777" fillOpacity="0.75" />
        <circle cx="35" cy="132" r="7" fill="#FBCFE8" fillOpacity="0.5" />
        <circle cx="55" cy="132" r="7" fill="#FBCFE8" fillOpacity="0.5" />
        <circle cx="35" cy="148" r="7" fill="#FBCFE8" fillOpacity="0.5" />
        <circle cx="55" cy="148" r="7" fill="#FBCFE8" fillOpacity="0.5" />
        {/* Flower 2 */}
        <circle cx="105" cy="110" r="18" fill="#A855F7" fillOpacity="0.25" />
        <circle cx="105" cy="110" r="7" fill="#DB2777" fillOpacity="0.8" />
        <circle cx="93" cy="100" r="8" fill="#FCE7F3" fillOpacity="0.6" />
        <circle cx="117" cy="100" r="8" fill="#FCE7F3" fillOpacity="0.6" />
        <circle cx="93" cy="120" r="8" fill="#FCE7F3" fillOpacity="0.6" />
        <circle cx="117" cy="120" r="8" fill="#FCE7F3" fillOpacity="0.6" />
        {/* Leaves */}
        <path d="M60 160 C50 150 45 135 60 130 C75 125 70 145 60 160 Z" fill="#EC4899" fillOpacity="0.35" />
        <path d="M120 125 C130 115 145 110 140 95 C135 80 115 85 120 125 Z" fill="#A855F7" fillOpacity="0.3" />
        <path d="M20 190 C15 175 10 165 25 155 C40 145 35 175 20 190 Z" fill="#EC4899" fillOpacity="0.35" />
      </svg>

      {/* Decorative Floral Branch - Top Right Corner */}
      <svg
        className="absolute top-0 right-0 w-44 sm:w-64 h-44 sm:h-64 pointer-events-none opacity-50 sm:opacity-65 transform rotate-180"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M0 200 Q40 140 100 120 T180 80" stroke="#EC4899" strokeWidth="1.5" strokeOpacity="0.5" />
        <path d="M0 170 Q50 130 90 90" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.4" />
        {/* Flower */}
        <circle cx="50" cy="135" r="16" fill="#C084FC" fillOpacity="0.3" />
        <circle cx="50" cy="135" r="7" fill="#DB2777" fillOpacity="0.75" />
        <circle cx="38" cy="125" r="8" fill="#FBCFE8" fillOpacity="0.5" />
        <circle cx="62" cy="125" r="8" fill="#FBCFE8" fillOpacity="0.5" />
        <circle cx="38" cy="145" r="8" fill="#FBCFE8" fillOpacity="0.5" />
        <circle cx="62" cy="145" r="8" fill="#FBCFE8" fillOpacity="0.5" />
        {/* Leaves */}
        <path d="M70 155 C60 145 55 130 70 125 C85 120 80 140 70 155 Z" fill="#EC4899" fillOpacity="0.35" />
      </svg>

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Crown Tiara Icon */}
        <div className="mb-2">
          <svg
            className="w-10 h-8 sm:w-11 sm:h-9 text-[#DB2777] mx-auto drop-shadow-sm"
            viewBox="0 0 32 24"
            fill="currentColor"
          >
            {/* Crown Base */}
            <rect x="3" y="19" width="26" height="3" rx="1.5" fill="#DB2777" />
            {/* Crown Spikes */}
            <path
              d="M3 17 L5 7 L10.5 12.5 L16 3 L21.5 12.5 L27 7 L29 17 Z"
              fill="url(#crownGradientLight)"
            />
            {/* Pearls / Jewels on tops */}
            <circle cx="16" cy="3" r="1.8" fill="#FFFFFF" />
            <circle cx="5" cy="7" r="1.4" fill="#FFFFFF" />
            <circle cx="27" cy="7" r="1.4" fill="#FFFFFF" />
            <circle cx="10.5" cy="12.5" r="1.2" fill="#FFFFFF" />
            <circle cx="21.5" cy="12.5" r="1.2" fill="#FFFFFF" />
            <defs>
              <linearGradient id="crownGradientLight" x1="3" y1="3" x2="29" y2="19" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F472B6" />
                <stop offset="0.5" stopColor="#DB2777" />
                <stop offset="1" stopColor="#9333EA" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Monogram "XV" */}
        <div className="text-4xl sm:text-5xl font-cinzel font-normal tracking-[0.18em] text-[#2D1047] select-none leading-none mb-3">
          XV
        </div>

        {/* Quinceañera Full Name */}
        <h3 className="text-2xl sm:text-3xl font-cinzel tracking-[0.22em] text-[#2D1047] uppercase mb-2 font-medium">
          VALENTINA SOFÍA
        </h3>

        {/* Event Date */}
        <p className="text-sm sm:text-base font-cinzel tracking-[0.28em] text-[#7E22CE] mb-10 font-medium">
          21 · 11 · 2026
        </p>

        {/* Back to Top Circular Button & Label */}
        <div className="flex flex-col items-center justify-center mb-10">
          <button
            onClick={scrollToTop}
            aria-label="Volver al inicio"
            className="w-13 h-13 rounded-full border border-[#F472B6]/60 hover:border-[#DB2777] bg-white hover:bg-pink-50 text-[#DB2777] flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer group"
          >
            <ArrowUp className="w-5 h-5 text-[#DB2777] group-hover:-translate-y-1 transition-transform" />
          </button>
          <button
            onClick={scrollToTop}
            className="text-[11px] sm:text-xs font-cinzel tracking-[0.28em] uppercase text-[#4C3259] hover:text-[#DB2777] mt-3.5 transition-colors cursor-pointer font-semibold"
          >
            VOLVER AL INICIO
          </button>
        </div>

        {/* Social Media Icons (Instagram, Facebook, TikTok) */}
        <div className="flex items-center justify-center gap-7 text-[#4C3259]">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full hover:bg-pink-100 hover:text-[#DB2777] transition-all hover:scale-110"
          >
            <svg
              className="w-5 h-5 fill-none stroke-currentColor stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 rounded-full hover:bg-pink-100 hover:text-[#DB2777] transition-all hover:scale-110"
          >
            <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="p-2 rounded-full hover:bg-pink-100 hover:text-[#DB2777] transition-all hover:scale-110"
          >
            <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.34 6.34 0 0 0-1-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.59a8.28 8.28 0 0 0 4.91 1.6V6.74a4.85 4.85 0 0 1-1-.05z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
