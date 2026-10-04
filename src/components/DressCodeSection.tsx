import React from 'react';
import { FloralDecor, CrownXvLogo } from './FloralDecor';

import dressPinkImg from '../assets/images/quinceanera_hero_editorial_1790873697577.jpg';
import dressPurpleImg from '../assets/images/quinceanera_pink_purple_hero_1790874276656.jpg';
import dressLookbook from '../assets/images/dresscode_attire_guide_1790875057022.jpg';

export const DressCodeSection: React.FC = () => {
  const outfitExamples = [
    {
      title: 'Vestido de Noche',
      tag: 'Para Ellas',
      img: dressPinkImg,
      alt: 'Ejemplo de vestido largo formal en tono rosa',
    },
    {
      title: 'Traje Formal Marino',
      tag: 'Para Ellos',
      img: dressLookbook,
      alt: 'Ejemplo de traje sastre masculino en tono azul noche',
    },
    {
      title: 'Vestido de Gala Violeta',
      tag: 'Para Ellas',
      img: dressPurpleImg,
      alt: 'Ejemplo de vestido de noche en tono violeta',
    },
    {
      title: 'Traje de Etiqueta Oscuro',
      tag: 'Para Ellos',
      img: dressLookbook,
      alt: 'Ejemplo de traje clásico formal oscuro con corbata',
    },
  ];

  return (
    <section id="dresscode" className="relative py-20 sm:py-28 bg-[#1A0A25] text-[#FDF2F8] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-[#EC4899]/12 via-[#9333EA]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Floral Embellishments */}
      <FloralDecor position="top-left" />
      <FloralDecor position="top-right" />
      <FloralDecor position="bottom-left" />
      <FloralDecor position="bottom-right" />

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 text-center">
        {/* Crown XV logo header */}
        <div className="mb-4 flex justify-center">
          <CrownXvLogo light={true} />
        </div>

        {/* Title matching reference: "Código de vestimenta" */}
        <h2 className="text-2xl sm:text-4xl font-serif text-white mb-1">
          Código de vestimenta
        </h2>

        <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#C084FC] font-semibold mb-8">
          FORMAL / ELEGANTE
        </p>

        {/* 4 Vertical Cards Side-by-Side */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-8">
          {outfitExamples.map((item, index) => (
            <div
              key={index}
              className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[9/16] shadow-xl border border-white/15 relative bg-[#2A1435] group"
            >
              <img
                src={item.img}
                alt={item.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
            </div>
          ))}
        </div>

        {/* Caption underneath */}
        <p className="text-xs sm:text-sm text-slate-300 font-light mb-2">
          Elegancia, estilo y mucha actitud.
        </p>
        <div className="text-xs text-[#F472B6]">
          ❦
        </div>
      </div>
    </section>
  );
};
