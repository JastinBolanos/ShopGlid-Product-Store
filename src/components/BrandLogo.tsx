import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }[size];

  const textClass = {
    sm: 'text-sm tracking-[0.2em]',
    md: 'text-base tracking-[0.25em]',
    lg: 'text-xl tracking-[0.3em]',
  }[size];

  return (
    <div id="brand-logo" className={`flex items-center gap-3 ${className}`}>
      {/* Minimalist emblem representing folded leather / geometric wallet */}
      <div
        className={`${iconDimensions} rounded-md bg-stone-900 text-stone-50 flex items-center justify-center p-1.5 shadow-xs`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          {/* Outer rectangular wallet contour */}
          <rect x="3" y="5" width="18" height="14" rx="2" />
          {/* Fold accent line */}
          <path d="M3 10h18" />
          {/* Inner card slot curve */}
          <path d="M14 14.5a2.5 2.5 0 0 1 2.5-2.5H21" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-semibold uppercase text-stone-900 ${textClass}`}>
            ShopGlid
          </span>
          {size === 'lg' && (
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600 font-light mt-0.5">
              Edición Minimalista
            </span>
          )}
        </div>
      )}
    </div>
  );
};
