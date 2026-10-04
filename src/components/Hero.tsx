import React, { useEffect, useRef } from 'react';
import heroImg from '../assets/images/quinceanera_pink_purple_hero_1790874276656.jpg';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle sparkling particles in pink and purple
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;
      color: string;
    }> = [];

    const colors = ['#F472B6', '#EC4899', '#C084FC', '#A855F7', '#FCE7F3'];
    const particleCount = Math.min(45, Math.floor(window.innerWidth / 25));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.4 + 0.1),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.7 + 0.2,
        fadeSpeed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += p.fadeSpeed;

        if (p.opacity > 0.85 || p.opacity < 0.15) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Background Image with Measured Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Valentina Sofía - Quinceañera en vestido rosa y atmósfera violeta de alta costura"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05] scale-[1.02] transform transition-transform duration-[12000ms] hover:scale-105"
        />
        {/* Measured dark gradient overlay in plum / violet night tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0616] via-[#0B0616]/65 to-[#0B0616]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0616]/30 to-[#0B0616]/85" />
      </div>

      {/* Canvas for subtle pink & purple sparkles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center pb-8 sm:pb-12 pt-24 mt-auto flex flex-col items-center justify-end">
        {/* Kicker in Primary Pink */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-[#F472B6] font-semibold mb-4">
          MIS XV AÑOS
        </p>

        {/* Quinceañera Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-cinzel font-normal tracking-wide text-[#FDF2F8] uppercase mb-4 drop-shadow-md">
          Valentina Sofía
        </h1>

        {/* Event Date in Secondary Purple */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-medium tracking-[0.25em] text-[#C084FC] mb-10">
          <span>21</span>
          <span className="text-[#F472B6]/60">·</span>
          <span>NOVIEMBRE</span>
          <span className="text-[#F472B6]/60">·</span>
          <span>2026</span>
        </div>

        {/* Action button pills: Pink Primary & Purple Secondary */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#detalles"
            className="px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#9333EA] rounded-full shadow-[0_4px_25px_rgba(236,72,153,0.45)] hover:shadow-[0_6px_35px_rgba(168,85,247,0.65)] hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap"
          >
            Detalles del Evento
          </a>
          <a
            href="#rsvp"
            className="px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#FDF2F8] bg-[#160C29]/80 border border-[#C084FC]/50 rounded-full hover:bg-[#241242] hover:border-[#F472B6] hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm"
          >
            Confirmar Asistencia
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C084FC] font-medium">
            SCROLL PARA DESCUBRIR ↓
          </span>
          <div className="w-5 h-8 rounded-full border border-[#C084FC]/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#F472B6] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
