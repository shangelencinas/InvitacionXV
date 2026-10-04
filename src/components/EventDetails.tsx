import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { FloralDecor, CrownXvLogo } from './FloralDecor';

export const EventDetails: React.FC = () => {
  const details = [
    {
      icon: Calendar,
      title: 'FECHA',
      primary: 'Sábado 21 de noviembre de 2026',
      accent: 'text-[#F472B6]',
      bgIcon: 'border-[#F472B6]/40 text-[#F472B6]',
    },
    {
      icon: Clock,
      title: 'HORA',
      primary: '7:00 PM',
      accent: 'text-[#C084FC]',
      bgIcon: 'border-[#C084FC]/40 text-[#C084FC]',
    },
    {
      icon: MapPin,
      title: 'LUGAR',
      primary: 'Jardín Imperial',
      accent: 'text-[#F472B6]',
      bgIcon: 'border-[#F472B6]/40 text-[#F472B6]',
    },
    {
      icon: Sparkles,
      title: 'DRESS CODE',
      primary: 'Formal / Elegante',
      accent: 'text-[#C084FC]',
      bgIcon: 'border-[#C084FC]/40 text-[#C084FC]',
    },
  ];

  return (
    <section id="detalles" className="relative py-20 sm:py-28 bg-[#160A22] text-[#FDF2F8] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-[#9333EA]/12 via-[#EC4899]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Floral Embellishments */}
      <FloralDecor position="top-left" />
      <FloralDecor position="top-right" />
      <FloralDecor position="bottom-left" />
      <FloralDecor position="bottom-right" />

      <div className="relative z-10 max-w-lg mx-auto px-4 sm:px-6">
        {/* Crown XV logo header */}
        <div className="mb-4 flex justify-center">
          <CrownXvLogo light={true} />
        </div>

        {/* Title matching reference: "Detalles del evento" */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-script text-[#FBCFE8] mb-1">
            Detalles del evento
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-[#C084FC]">
            ¡No faltes!
          </p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="w-12 h-px bg-[#F472B6]/40" />
            <span className="text-xs text-[#F472B6]">❦</span>
            <div className="w-12 h-px bg-[#F472B6]/40" />
          </div>
        </div>

        {/* 4 Stacked Rows / Cards matching dark glass style */}
        <div className="space-y-4">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-[#F472B6]/50 transition-all duration-300"
              >
                {/* Outlined Icon Box */}
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 bg-[#241242]/80 ${item.bgIcon}`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text Labels */}
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C084FC] font-semibold mb-0.5">
                    {item.title}
                  </span>
                  <h3 className="text-base sm:text-lg font-cinzel font-medium text-white leading-snug">
                    {item.primary}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
