import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryPhoto } from '../types';

import imgPinkPurpleHero from '../assets/images/quinceanera_pink_purple_hero_1790874276656.jpg';
import imgPortrait from '../assets/images/quinceanera_portrait_story_1790873707568.jpg';
import imgVenue from '../assets/images/jardin_imperial_venue_1790873718650.jpg';
import imgWaltz from '../assets/images/quinceanera_dress_waltz_1790873736890.jpg';
import imgDecor from '../assets/images/quinceanera_details_decor_1790873746719.jpg';
import imgTiara from '../assets/images/quinceanera_tiara_details_1790873760643.jpg';
import imgCake from '../assets/images/quinceanera_cake_sparklers_1790873780623.jpg';

export const PhotoGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos: GalleryPhoto[] = [
    {
      id: 'photo-1',
      src: imgPinkPurpleHero,
      title: 'Sesión Nocturna en Jardín Imperial',
      category: 'Vestido Rosa de Gala',
      aspect: 'landscape',
      caption: 'Vestido de alta costura en delicado rosa con destellos y atmósfera violeta.',
    },
    {
      id: 'photo-2',
      src: imgPortrait,
      title: 'Retrato de Ilusión',
      category: 'Retrato',
      aspect: 'portrait',
      caption: 'Valentina luciendo la tiara de cristales previa a su noche mágica.',
    },
    {
      id: 'photo-3',
      src: imgWaltz,
      title: 'Ensayo del Vals',
      category: 'Tradición',
      aspect: 'landscape',
      caption: 'El tradicional vals con destellos dorados y capas de tul en movimiento.',
    },
    {
      id: 'photo-4',
      src: imgVenue,
      title: 'El Jardín Iluminado',
      category: 'Locación',
      aspect: 'landscape',
      caption: 'Atmósfera nocturna con candelabros de cristal y guirnaldas de luces cálidas.',
    },
    {
      id: 'photo-5',
      src: imgTiara,
      title: 'Detalles & Accesorios',
      category: 'Detalles',
      aspect: 'square',
      caption: 'Zapatillas de satén, tiara real y pétalos de rosas frescas.',
    },
    {
      id: 'photo-6',
      src: imgDecor,
      title: 'Banquete & Montaje Imperial',
      category: 'Decoración',
      aspect: 'landscape',
      caption: 'Cristalería labrada, rosas inglesas y detalles de gala.',
    },
    {
      id: 'photo-7',
      src: imgCake,
      title: 'El Gran Pastel de Quince',
      category: 'Celebración',
      aspect: 'portrait',
      caption: 'Pastel de cinco niveles con rosas artesanales y luces de bengala.',
    },
  ];

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % photos.length);
  }, [lightboxIndex, photos.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  }, [lightboxIndex, photos.length]);

  // Keyboard navigation and body scroll lock for Lightbox
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflowX = 'hidden';
    };
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section id="galeria" className="relative py-24 sm:py-32 bg-transparent border-t border-[#F472B6]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-[#DB2777] font-semibold mb-3">
            Galería Fotográfica
          </p>
          <h2 className="text-3xl sm:text-5xl font-cinzel text-[#2D1047] mb-4">
            Momentos Capturados
          </h2>
          <p className="text-sm text-[#553569] font-normal max-w-lg mx-auto">
            Una mirada a los preparativos, detalles y sesiones fotográficas que dan vida a este sueño.
          </p>
        </div>

        {/* Editorial Masonry / Dynamic Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {photos.map((photo, index) => {
            const isFeatured = index === 0 || index === 3;

            return (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className={`relative rounded-3xl overflow-hidden bg-white/90 border border-[#F472B6]/30 group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ${
                  isFeatured ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3] sm:aspect-[3/4]'
                }`}
              >
                {/* Image */}
                <img
                  src={photo.src}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0616]/90 via-[#0B0616]/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover Reveal Card Meta */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#F472B6] font-semibold block mb-1">
                      {photo.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-cinzel text-[#FDF2F8] leading-snug">
                      {photo.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#241242]/80 border border-[#F472B6]/40 flex items-center justify-center text-[#F472B6] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 shrink-0 ml-3">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#C084FC]/60 transition-colors pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-[#07030D]/96 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8 overflow-y-auto overflow-x-hidden animate-fadeIn">
          {/* Top Bar with counter & close button */}
          <div className="w-full max-w-5xl flex items-center justify-between text-slate-300 py-2">
            <span className="text-xs uppercase tracking-widest text-[#F472B6] font-serif">
              {lightboxIndex + 1} / {photos.length}
            </span>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 rounded-full bg-[#241242] border border-purple-800 text-slate-300 hover:text-white hover:border-[#F472B6] transition-all cursor-pointer"
              aria-label="Cerrar visor"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image Container */}
          <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4 overflow-hidden">
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-[#F472B6]/40 transition-transform duration-300"
            />

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0B0616]/85 border border-[#F472B6]/40 flex items-center justify-center text-[#F472B6] hover:text-white hover:scale-110 hover:border-[#C084FC] transition-all cursor-pointer backdrop-blur-md"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0B0616]/85 border border-[#F472B6]/40 flex items-center justify-center text-[#F472B6] hover:text-white hover:scale-110 hover:border-[#C084FC] transition-all cursor-pointer backdrop-blur-md"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="w-full max-w-2xl text-center py-2">
            <h4 className="text-lg font-cinzel text-[#FDF2F8] mb-1">
              {photos[lightboxIndex].title}
            </h4>
            <p className="text-xs text-[#C084FC] font-light">
              {photos[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
