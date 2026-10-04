import React from 'react';
import parentsImg from '../assets/images/parents_portrait_1790875030186.jpg';
import { FloralDecor, CrownXvLogo } from './FloralDecor';

export const ParentsSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#1B0A28] text-[#FDF2F8] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-[#EC4899]/12 via-[#9333EA]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Floral Embellishments */}
      <FloralDecor position="top-left" />
      <FloralDecor position="top-right" />
      <FloralDecor position="bottom-left" />
      <FloralDecor position="bottom-right" />

      <div className="relative z-10 max-w-lg mx-auto px-4 sm:px-6 text-center">
        {/* Crown XV logo header */}
        <div className="mb-4 flex justify-center">
          <CrownXvLogo light={true} />
        </div>

        {/* Title matching reference: "Con mucho amor" in cursive */}
        <h2 className="text-4xl sm:text-6xl font-script text-[#FBCFE8] mb-8">
          Con mucho amor
        </h2>

        {/* Circular photo with concentric rings and floral border */}
        <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-8 flex items-center justify-center">
          {/* Concentric rings */}
          <div className="absolute inset-0 rounded-full border border-[#F472B6]/40 animate-pulse" />
          <div className="absolute inset-2 rounded-full border-2 border-[#C084FC]/30 shadow-[0_0_25px_rgba(244,114,182,0.2)]" />

          {/* Photo container */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl relative z-10">
            <img
              src={parentsImg}
              alt="María Fernanda y Carlos Hernández - Padres"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Parents Names */}
        <h3 className="text-xl sm:text-2xl font-serif text-white mb-1">
          María Fernanda Hernández
        </h3>
        <h3 className="text-xl sm:text-2xl font-serif text-white mb-6">
          Carlos Hernández
        </h3>

        {/* Message */}
        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-md mx-auto">
          Con enorme alegría queremos acompañar a nuestra hija en este momento tan especial y compartirlo con las personas que más queremos.
        </p>

        {/* Heart ornament */}
        <div className="mt-6 text-[#F472B6] text-xs">
          ♥
        </div>
      </div>
    </section>
  );
};
