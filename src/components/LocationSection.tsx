import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { FloralDecor, CrownXvLogo } from './FloralDecor';

export const LocationSection: React.FC = () => {
  const venueName = "Jardín Imperial";
  const address = "Blvd. de los Ángeles #250, Hermosillo, Sonora";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${venueName}, ${address}`)}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(`${venueName}, ${address}`)}`;

  return (
    <section id="ubicacion" className="relative py-20 sm:py-28 bg-[#180A26] text-[#FDF2F8] overflow-hidden">
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

        {/* Title matching reference: "¿Dónde será?" */}
        <h2 className="text-4xl sm:text-5xl font-script text-[#FBCFE8] mb-2">
          ¿Dónde será?
        </h2>

        <h3 className="text-2xl sm:text-3xl font-serif text-white mb-1">
          Jardín Imperial
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 font-light mb-8">
          Blvd. de los Ángeles #250<br />
          Hermosillo, Sonora
        </p>

        {/* Styled Dark Map Card */}
        <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#160D20] mb-8 aspect-[16/10] sm:aspect-[16/9]">
          <div className="absolute inset-0 bg-[#14081E] overflow-hidden">
            {/* Roads & vector map lines in night aesthetic */}
            <svg className="w-full h-full opacity-70" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="250" fill="#14081E" />
              {/* Subtle Garden & Parks */}
              <path d="M20,30 Q80,10 120,50 L100,120 L30,90 Z" fill="#1C271E" opacity="0.8" />
              <path d="M260,140 Q340,110 380,160 L360,230 L280,210 Z" fill="#1C271E" opacity="0.8" />
              {/* Roads */}
              <path d="M0,80 Q200,90 400,70" stroke="#311746" strokeWidth="12" />
              <path d="M0,80 Q200,90 400,70" stroke="#F472B6" strokeOpacity="0.4" strokeWidth="3" />
              <path d="M180,0 L210,250" stroke="#311746" strokeWidth="14" />
              <path d="M180,0 L210,250" stroke="#C084FC" strokeOpacity="0.4" strokeWidth="3" />
              <path d="M50,250 L320,0" stroke="#251036" strokeWidth="10" />
            </svg>

            {/* Google Maps Marker & Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-[#241242]/95 px-4 py-2 rounded-full shadow-2xl border border-[#F472B6]/40 backdrop-blur-md">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-red-600 to-pink-600 flex items-center justify-center text-white shadow-md shrink-0">
                <MapPin className="w-4 h-4 fill-current" />
              </div>
              <span className="text-xs font-semibold text-white whitespace-nowrap">
                Jardín Imperial
              </span>
            </div>
          </div>
        </div>

        {/* Buttons: Primary Gradient & Secondary Glass */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-[#F472B6] to-[#9333EA] text-white shadow-[0_4px_25px_rgba(236,72,153,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>ABRIR UBICACIÓN</span>
            <MapPin className="w-4 h-4 text-white" />
          </a>

          <a
            href={wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-medium uppercase tracking-wider bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            <Navigation className="w-3.5 h-3.5 text-[#F472B6]" />
            <span>Waze</span>
          </a>
        </div>
      </div>
    </section>
  );
};
