import React from 'react';
import Image from 'next/image';

interface N7BrandMarkProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'gold' | 'carbon' | 'white' | 'grey';
  type?: 'icon' | 'logo';
}

export function N7BrandMark({
  className = '',
  size = 'md',
  variant = 'gold',
  type = 'icon',
}: N7BrandMarkProps) {
  if (type === 'logo') {
    const logoMap = {
      gold: '/brand/logo-gold-tight.png',
      carbon: '/brand/logo-black-tight.png',
      white: '/brand/logo-white-tight.png',
      grey: '/brand/logo-grey-tight.png',
    };
    const sizeMap = {
      xs: 'w-20',
      sm: 'w-28',
      md: 'w-36',
      lg: 'w-48',
      xl: 'w-60',
      '2xl': 'w-72',
    };
    return (
      <div className={`relative inline-block select-none ${sizeMap[size] || sizeMap.md} ${className}`}>
        <Image
          src={logoMap[variant] || logoMap.gold}
          alt="NIT7ER Logo"
          width={1367}
          height={322}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    );
  }

  const iconMap = {
    gold: '/brand/icon-gold-tight.png',
    carbon: '/brand/icon-black-tight.png',
    white: '/brand/icon-white-tight.png',
    grey: '/brand/icon-grey-tight.png',
  };

  const sizeMap = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none overflow-hidden rounded-xl ${sizeMap[size] || sizeMap.md} ${className}`}
      aria-label="NIT7ER Emblem"
    >
      <Image
        src={iconMap[variant] || iconMap.gold}
        alt="N7 Monogram"
        width={1287}
        height={1293}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}
