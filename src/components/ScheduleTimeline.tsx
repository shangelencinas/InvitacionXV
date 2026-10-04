import React from 'react';
import { GlassWater, Crown, Utensils, Music, PartyPopper, Sparkles } from 'lucide-react';
import { FloralDecor, CrownXvLogo } from './FloralDecor';

export const ScheduleTimeline: React.FC = () => {
  const itinerary = [
    {
      time: '7:00 PM',
      title: 'Recepción',
      icon: GlassWater,
    },
    {
      time: '8:00 PM',
      title: 'Presentación',
      icon: Crown,
    },
    {
      time: '8:30 PM',
      title: 'Cena',
      icon: Utensils,
    },
    {
      time: '9:30 PM',
      title: 'Vals',
      icon: Music,
    },
    {
      time: '10:00 PM',
      title: 'Fiesta',
      icon: PartyPopper,
    },
    {
      time: '12:00 AM',
      title: 'Celebración',
      icon: Sparkles,
    },
  ];

  return (
    <section id="itinerario" className="relative py-20 sm:py-28 bg-[#180A24] text-[#FDF2F8] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-[#9333EA]/12 via-[#EC4899]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Floral Embellishments */}
      <FloralDecor position="top-left" />
      <FloralDecor position="top-right" />
      <FloralDecor position="bottom-left" />
      <FloralDecor position="bottom-right" />

      <div className="relative z-10 max-w-md mx-auto px-4 sm:px-6">
        {/* Crown XV logo header */}
        <div className="mb-4 flex justify-center">
          <CrownXvLogo light={true} />
        </div>

        {/* Title matching reference: "Programa del evento" */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-script text-[#FBCFE8] mb-1">
            Programa del evento
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light">
            Una noche llena de momentos especiales
          </p>
        </div>

        {/* Clean Timeline List */}
        <div className="relative pl-6">
          {/* Vertical connecting line */}
          <div className="absolute top-5 bottom-5 left-[2.45rem] w-px bg-white/20" />

          <div className="space-y-6">
            {itinerary.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-5 relative group">
                  {/* Circular Icon Node */}
                  <div className="w-11 h-11 rounded-full bg-[#241242]/90 border border-[#C084FC]/50 flex items-center justify-center shrink-0 z-10 shadow-md text-[#C084FC] group-hover:border-[#F472B6] group-hover:text-[#F472B6] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Time */}
                  <span className="text-xs sm:text-sm font-semibold text-white/90 w-20 shrink-0 tabular-nums">
                    {item.time}
                  </span>

                  {/* Event Title */}
                  <span className="text-sm sm:text-base font-serif text-white group-hover:text-[#FBCFE8] transition-colors">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
