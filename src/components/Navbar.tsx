import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { soundTrack } from '../utils/audio';

export const Navbar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(soundTrack.getStatus());
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsub = soundTrack.subscribe((playing) => {
      setIsPlaying(playing);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      unsub();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    }
  }, [mobileMenuOpen]);

  const toggleSound = () => {
    soundTrack.toggle();
  };

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Detalles', href: '#detalles' },
    { label: 'Historia', href: '#historia' },
    { label: 'Itinerario', href: '#itinerario' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Galería', href: '#galeria' },
    { label: 'RSVP', href: '#rsvp' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-white/92 backdrop-blur-md border-b border-[#F472B6]/25 py-3 shadow-sm'
            : 'bg-white/40 backdrop-blur-xs py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base sm:text-lg font-cinzel font-semibold tracking-wider text-[#2D1047] hover:text-[#EC4899] transition-colors whitespace-nowrap"
          >
            Valentina Sofía · XV
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold text-[#4C3259]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#EC4899] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#EC4899]/70"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3">
            {/* Music toggle button */}
            <button
              onClick={toggleSound}
              aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-[#F472B6]/40 bg-white/85 text-[#2D1047] hover:border-[#EC4899] hover:text-[#EC4899] transition-all cursor-pointer whitespace-nowrap shadow-xs"
              title={isPlaying ? 'Pausar música ambiental' : 'Activar música ambiental'}
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#EC4899] animate-pulse" />
                  <span className="hidden sm:inline text-[11px] tracking-wider uppercase text-[#BE185D] font-medium">Música ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline text-[11px] tracking-wider uppercase text-slate-500 font-medium">Música</span>
                </>
              )}
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#2D1047] hover:text-[#EC4899] bg-white/85 border border-[#F472B6]/40 hover:border-[#EC4899] transition-all cursor-pointer flex items-center justify-center shadow-xs"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#EC4899]" /> : <Menu className="w-5 h-5 text-[#2D1047]" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 max-h-[calc(100vh-65px)] overflow-y-auto bg-white/98 backdrop-blur-2xl border-b border-[#F472B6]/30 px-6 py-8 shadow-xl z-50">
            <nav className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest font-cinzel font-medium text-[#2D1047] hover:text-[#EC4899] py-2.5 border-b border-purple-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#rsvp"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block w-full py-3 px-6 rounded-full text-xs font-semibold uppercase tracking-widest text-white bg-gradient-to-r from-[#F472B6] to-[#9333EA] shadow-md shadow-pink-500/25 text-center"
                >
                  Confirmar Asistencia
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-xs z-30 transition-opacity"
        />
      )}
    </>
  );
};
