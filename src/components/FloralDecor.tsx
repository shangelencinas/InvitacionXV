import React from 'react';

interface FloralDecorProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export const FloralDecor: React.FC<FloralDecorProps> = ({ position, className = '' }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return '';
      case 'top-right':
        return 'scale-x-[-1]';
      case 'bottom-left':
        return 'scale-y-[-1]';
      case 'bottom-right':
        return 'scale-[-1]';
      default:
        return '';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
      default:
        return '';
    }
  };

  return (
    <div
      className={`absolute ${getPositionClasses()} pointer-events-none z-0 opacity-70 ${className}`}
      aria-hidden="true"
    >
      <svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-24 h-24 sm:w-36 sm:h-36 ${getTransform()}`}
      >
        {/* Soft watercolor leafy branches */}
        <path
          d="M0,0 Q35,40 15,80 Q50,55 90,60 Q60,95 40,130"
          stroke="#C084FC"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          fill="none"
        />
        {/* Delicate petals in pink and lavender */}
        <circle cx="28" cy="42" r="14" fill="#F472B6" fillOpacity="0.25" />
        <circle cx="28" cy="42" r="8" fill="#EC4899" fillOpacity="0.35" />
        <circle cx="32" cy="38" r="4" fill="#FBCFE8" fillOpacity="0.6" />

        <circle cx="65" cy="22" r="12" fill="#C084FC" fillOpacity="0.25" />
        <circle cx="65" cy="22" r="7" fill="#A855F7" fillOpacity="0.35" />

        <circle cx="18" cy="90" r="11" fill="#F472B6" fillOpacity="0.25" />
        <circle cx="18" cy="90" r="6" fill="#DB2777" fillOpacity="0.3" />

        <circle cx="75" cy="62" r="13" fill="#E9D5FF" fillOpacity="0.35" />
        <circle cx="75" cy="62" r="7" fill="#C084FC" fillOpacity="0.4" />

        <circle cx="48" cy="95" r="9" fill="#F472B6" fillOpacity="0.2" />

        {/* Small gold sparkle dots */}
        <circle cx="45" cy="18" r="2" fill="#D4AF37" fillOpacity="0.6" />
        <circle cx="95" cy="48" r="2" fill="#D4AF37" fillOpacity="0.6" />
        <circle cx="30" cy="115" r="1.5" fill="#D4AF37" fillOpacity="0.6" />
      </svg>
    </div>
  );
};

export const CrownXvLogo: React.FC<{ light?: boolean; className?: string }> = ({ light = false, className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Crown Icon */}
      <svg
        width="28"
        height="18"
        viewBox="0 0 28 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`mb-0.5 ${light ? 'text-[#FAF7F2]' : 'text-[#4A1E56]'}`}
      >
        <path
          d="M2 14L5 4L11 9L14 2L17 9L23 4L26 14H2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="14" cy="2" r="1.5" fill="currentColor" />
        <circle cx="5" cy="4" r="1.2" fill="currentColor" />
        <circle cx="23" cy="4" r="1.2" fill="currentColor" />
        <line x1="2" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      {/* XV Text */}
      <span
        className={`text-xl sm:text-2xl font-cinzel font-normal tracking-[0.2em] leading-none ${
          light ? 'text-[#FAF7F2]' : 'text-[#4A1E56]'
        }`}
      >
        XV
      </span>
    </div>
  );
};
