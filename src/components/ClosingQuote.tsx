import React from 'react';
import waltzImg from '../assets/images/quinceanera_dress_waltz_1790873736890.jpg';

export const ClosingQuote: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
      {/* Background with Waltz Photo and luminous light scrim overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={waltzImg}
          alt="El Vals de Valentina Sofía en el gran salón"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.02] scale-100 transition-transform duration-[10000ms] hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5FB] via-[#FAF5FB]/85 to-[#FAF5FB]/40" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Floating emblem */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#F472B6]/40 bg-white/90 backdrop-blur-md mb-8 shadow-sm">
          <span className="font-serif text-lg text-[#DB2777]">✦</span>
        </div>

        {/* Emotion headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel text-[#2D1047] mb-6 leading-tight drop-shadow-xs">
          Gracias por ser parte de este momento tan especial.
        </h2>

        {/* Valentina Signature in cursive calligraphy in Primary Pink */}
        <p className="font-script text-4xl sm:text-6xl text-[#DB2777] mb-10 select-none drop-shadow-xs">
          Con cariño, Valentina Sofía
        </p>

        {/* Re-affirmation of Date and Venue */}
        <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-[#F472B6]/35 max-w-lg mx-auto mb-10 shadow-lg">
          <div className="flex items-center justify-center gap-3 text-sm sm:text-base font-cinzel text-[#7E22CE] mb-2 tracking-widest font-medium">
            <span>21</span>
            <span className="text-[#EC4899]">·</span>
            <span>NOVIEMBRE</span>
            <span className="text-[#EC4899]">·</span>
            <span>2026</span>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#4C3259] font-semibold">
            Jardín Imperial · Hermosillo, Sonora
          </p>
        </div>

        {/* Final Confirmation CTA Button */}
        <div>
          <a
            href="#rsvp"
            className="inline-block px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#9333EA] rounded-full shadow-[0_4px_30px_rgba(236,72,153,0.4)] hover:shadow-[0_6px_40px_rgba(168,85,247,0.55)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            CONFIRMAR ASISTENCIA
          </a>
        </div>
      </div>
    </section>
  );
};
