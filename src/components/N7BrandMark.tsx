import React from 'react';

interface N7BrandMarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'gold' | 'carbon' | 'white';
}

export function N7BrandMark({
  className = '',
  size = 'md',
  variant = 'carbon',
}: N7BrandMarkProps) {
  const sizeMap = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorStyles = {
    carbon: {
      bg: 'bg-[#121212]',
      border: 'border-[#121212]',
      glyph: '#FFFFFF',
      accent: '#C9A84C',
    },
    gold: {
      bg: 'bg-[#C9A84C]',
      border: 'border-[#C9A84C]',
      glyph: '#121212',
      accent: '#FFFFFF',
    },
    white: {
      bg: 'bg-white',
      border: 'border-[#E5E5E0]',
      glyph: '#121212',
      accent: '#C9A84C',
    },
  };

  const style = colorStyles[variant];

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-sm ${style.bg} ${style.border} border shadow-xs select-none ${sizeMap[size]} ${className}`}
      aria-label="NIT7ER Logo"
    >
      {/* Corner Bracket Accent */}
      <span
        className="absolute top-0.5 right-0.5 w-1.5 h-1.5 border-t-2 border-r-2"
        style={{ borderColor: style.accent }}
      />
      <span
        className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 border-b-2 border-l-2"
        style={{ borderColor: style.accent }}
      />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3/5 h-3/5"
      >
        {/* N7 Monogram: Left Stem of N */}
        <rect x="18" y="22" width="14" height="56" rx="1.5" fill={style.glyph} />

        {/* Diagonal of N */}
        <path
          d="M28 24 L 64 74 L 74 74 L 38 24 Z"
          fill={style.glyph}
        />

        {/* The 7 Cross & Diagonal */}
        <path
          d="M48 24 L 84 24 L 84 34 L 64 34 L 54 58 L 44 54 L 54 34 L 48 34 Z"
          fill={style.accent}
        />

        {/* Focal Anchor Dot */}
        <circle cx="82" cy="74" r="5" fill={style.accent} />
      </svg>
    </div>
  );
}
