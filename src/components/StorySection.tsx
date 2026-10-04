import React from 'react';
import portraitImg from '../assets/images/quinceanera_portrait_story_1790873707568.jpg';
import parentsImg from '../assets/images/quinceanera_parents_portrait_1790876247658.jpg';

export const StorySection: React.FC = () => {
  return (
    <section id="historia" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background ambient accents in Pink & Purple */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-radial from-[#F472B6]/15 via-[#C084FC]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-radial from-[#FBCFE8]/30 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#DB2777] font-semibold mb-3">
            Nuestra Celebración
          </p>
          <h2 className="text-3xl sm:text-5xl font-cinzel text-[#2D1047] mb-4">
            Un momento muy especial
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#DB2777]/70" />
            <span className="text-xs text-[#7E22CE]">✦</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#DB2777]/70" />
          </div>
        </div>

        {/* 2-Column Split: Editorial Image & Heartfelt Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Portrait Column with luxury photo frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md px-2 sm:px-0">
              {/* Outer decorative layered border rings */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-2xl border border-[#F472B6]/45 transform -rotate-1 pointer-events-none shadow-[0_0_25px_rgba(244,114,182,0.2)]" />
              <div className="absolute -inset-1 rounded-2xl border border-[#C084FC]/40 transform rotate-1 pointer-events-none" />

              {/* Main Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/60 group">
                <img
                  src={portraitImg}
                  alt="Valentina Sofía - Retrato editorial en vestido de quinceañera"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover filter brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />

                {/* Subtle caption badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-[#F472B6]/40 text-center shadow-xs">
                  <p className="text-xs font-serif italic text-[#2D1047]">
                    &ldquo;Soñar con este día y verlo hecho realidad...&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Calligraphy Monogram in Primary Pink */}
            <span className="font-script text-5xl sm:text-6xl text-[#DB2777] mb-2 select-none drop-shadow-xs">
              Valentina
            </span>

            <h3 className="text-2xl sm:text-3xl font-cinzel text-[#2D1047] mb-6">
              El comienzo de un nuevo capítulo
            </h3>

            <blockquote className="font-serif italic text-lg sm:text-xl text-[#2D1047] leading-relaxed border-l-3 border-[#EC4899] pl-5 mb-6">
              &ldquo;Después de tantos momentos, aprendizajes, risas y sueños, ha llegado una fecha que siempre recordaré. Quiero compartir esta noche tan especial con las personas que forman parte de mi vida.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-[#553569] font-normal leading-relaxed mb-6">
              Cada paso que he dado me ha traído a este instante lleno de ilusión. Celebrar mis quince años no es solo una fiesta, sino la oportunidad de agradecer por tener personas tan maravillosas como tú en mi camino.
            </p>

            <div className="pt-4 border-t border-purple-200/80 flex items-center gap-3 sm:gap-4 text-xs text-[#6B4D7B] font-medium">
              <span className="text-[#7E22CE] font-serif text-sm">21 · 11 · 2026</span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Hermosillo, Sonora</span>
              <span aria-hidden="true">·</span>
              <span>Jardín Imperial</span>
            </div>
          </div>
        </div>

        {/* Padres Section: Soft watercolor light theme (matches reference image) */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#FFF5FA] via-[#FDF2F8] to-[#F8EDFB] border border-[#F472B6]/40 p-8 sm:p-14 text-center max-w-xl mx-auto shadow-[0_20px_50px_rgba(168,85,247,0.1),0_0_35px_rgba(244,114,182,0.15)] backdrop-blur-md">
          {/* Top Title in elegant italic script/serif */}
          <h3 className="font-serif italic text-3xl sm:text-4xl text-[#2D1047] tracking-wide mb-3">
            Con mucho amor
          </h3>

          {/* Delicate Top Divider */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#EC4899]/70" />
            <span className="text-[11px] text-[#EC4899]">✦</span>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#EC4899]/70" />
          </div>

          {/* Circular Portrait Frame with Floral / Laurel Wreath Accents */}
          <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 mb-8 flex items-center justify-center">
            {/* Soft Ambient Halo */}
            <div className="absolute inset-0 rounded-full bg-radial from-[#F472B6]/25 via-[#C084FC]/15 to-transparent blur-xl pointer-events-none" />

            {/* Outer Rose-Gold Laurel Wreath Ring */}
            <div className="absolute inset-1 rounded-full border-2 border-[#F472B6]/70 shadow-[0_0_25px_rgba(244,114,182,0.3)]" />
            <div className="absolute inset-3 rounded-full border border-[#C084FC]/40" />

            {/* Left Decorative Botanical Leaves (SVG) */}
            <svg
              className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-32 sm:h-40 text-[#EC4899]/75 pointer-events-none"
              viewBox="0 0 40 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M35 10 C15 40, 5 80, 25 150" />
              <path d="M28 25 C12 28, 5 35, 10 40 C15 45, 24 38, 26 30" fill="currentColor" fillOpacity="0.3" />
              <path d="M20 55 C6 58, 2 68, 6 74 C12 78, 19 70, 20 62" fill="currentColor" fillOpacity="0.3" />
              <path d="M16 90 C3 95, 2 106, 8 112 C15 116, 18 106, 17 97" fill="currentColor" fillOpacity="0.3" />
              <path d="M22 125 C12 130, 10 140, 16 145 C22 148, 24 138, 23 131" fill="currentColor" fillOpacity="0.3" />
            </svg>

            {/* Right Decorative Botanical Leaves (SVG) */}
            <svg
              className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-32 sm:h-40 text-[#EC4899]/75 pointer-events-none transform -scale-x-100"
              viewBox="0 0 40 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M35 10 C15 40, 5 80, 25 150" />
              <path d="M28 25 C12 28, 5 35, 10 40 C15 45, 24 38, 26 30" fill="currentColor" fillOpacity="0.3" />
              <path d="M20 55 C6 58, 2 68, 6 74 C12 78, 19 70, 20 62" fill="currentColor" fillOpacity="0.3" />
              <path d="M16 90 C3 95, 2 106, 8 112 C15 116, 18 106, 17 97" fill="currentColor" fillOpacity="0.3" />
              <path d="M22 125 C12 130, 10 140, 16 145 C22 148, 24 138, 23 131" fill="currentColor" fillOpacity="0.3" />
            </svg>

            {/* Main Circular Portrait Photo */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-white shadow-xl">
              <img
                src={parentsImg}
                alt="María Fernanda Hernández y Carlos Hernández - Padres de la Quinceañera"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_20%] filter brightness-[0.98] contrast-[1.02] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Parents Names on two elegant lines */}
          <div className="mb-4 text-center">
            <h4 className="font-serif text-[23px] text-[#2D1047] tracking-wide leading-tight">
              María Fernanda Hernández
            </h4>
            <h4 className="font-serif text-[23px] text-[#2D1047] tracking-wide leading-tight mt-1.5">
              Carlos Hernández
            </h4>
          </div>

          {/* Intermediate Divider */}
          <div className="flex items-center justify-center gap-2 my-5">
            <div className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent to-[#EC4899]/60" />
            <span className="text-[10px] text-[#7E22CE]">✦</span>
            <div className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent to-[#EC4899]/60" />
          </div>

          {/* Sentimental Dedication Message */}
          <p className="font-serif text-sm sm:text-base text-[#4C2663] leading-relaxed max-w-md mx-auto mb-6 text-center font-normal">
            Con enorme alegría queremos acompañar a nuestra hija en este momento tan especial y compartirlo con las personas que más queremos.
          </p>

          {/* Bottom Delicate Ornament Divider */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#EC4899]/50" />
            <span className="text-xs text-[#EC4899]">✦</span>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#EC4899]/50" />
          </div>
        </div>
      </div>
    </section>
  );
};
