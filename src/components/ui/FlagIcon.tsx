import React from 'react';
import { cn } from '@/lib/utils';

interface FlagIconProps {
  countryCode: string; // 'ng' | 'us' | 'gb' | 'ca' | 'NGN' | 'USD' | etc.
  className?: string;
}

export const FlagIcon: React.FC<FlagIconProps> = ({ countryCode, className }) => {
  const code = countryCode.toLowerCase();

  const baseStyle = cn(
    'inline-block w-5 h-3.5 rounded-[2px] overflow-hidden flex-shrink-0 border border-black/10 shadow-2xs align-middle select-none',
    className
  );

  if (code === 'ng' || code === 'ngn') {
    return (
      <svg viewBox="0 0 24 16" className={baseStyle} aria-label="Nigeria Flag">
        <rect width="8" height="16" fill="#008751" />
        <rect x="8" width="8" height="16" fill="#FFFFFF" />
        <rect x="16" width="8" height="16" fill="#008751" />
      </svg>
    );
  }

  if (code === 'us' || code === 'usd') {
    return (
      <svg viewBox="0 0 24 16" className={baseStyle} aria-label="USA Flag">
        <rect width="24" height="16" fill="#B22234" />
        <rect y="2.28" width="24" height="2.28" fill="#ffffff" />
        <rect y="6.85" width="24" height="2.28" fill="#ffffff" />
        <rect y="11.42" width="24" height="2.28" fill="#ffffff" />
        <rect width="10" height="9.14" fill="#3C3B6E" />
        <circle cx="2.5" cy="2.3" r="0.65" fill="#ffffff" />
        <circle cx="5" cy="2.3" r="0.65" fill="#ffffff" />
        <circle cx="7.5" cy="2.3" r="0.65" fill="#ffffff" />
        <circle cx="3.75" cy="4.6" r="0.65" fill="#ffffff" />
        <circle cx="6.25" cy="4.6" r="0.65" fill="#ffffff" />
        <circle cx="2.5" cy="6.9" r="0.65" fill="#ffffff" />
        <circle cx="5" cy="6.9" r="0.65" fill="#ffffff" />
        <circle cx="7.5" cy="6.9" r="0.65" fill="#ffffff" />
      </svg>
    );
  }

  if (code === 'gb' || code === 'gbp') {
    return (
      <svg viewBox="0 0 24 16" className={baseStyle} aria-label="UK Flag">
        <rect width="24" height="16" fill="#012169" />
        <path d="M0,0 L24,16 M24,0 L0,16" stroke="#ffffff" strokeWidth="3" />
        <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1.5" />
        <path d="M12,0 V16 M0,8 H24" stroke="#ffffff" strokeWidth="5" />
        <path d="M12,0 V16 M0,8 H24" stroke="#C8102E" strokeWidth="3" />
      </svg>
    );
  }

  if (code === 'ca' || code === 'cad') {
    return (
      <svg viewBox="0 0 24 16" className={baseStyle} aria-label="Canada Flag">
        <rect width="6" height="16" fill="#FF0000" />
        <rect x="6" width="12" height="16" fill="#FFFFFF" />
        <rect x="18" width="6" height="16" fill="#FF0000" />
        <path
          d="M12,3.5 L12.8,6.5 L14.5,5.5 L13.8,7.5 L15.5,8 L13.5,9.5 L14,11.5 L12.5,10.2 L12.5,12.5 L11.5,12.5 L11.5,10.2 L10,11.5 L10.5,9.5 L8.5,8 L10.2,7.5 L9.5,5.5 L11.2,6.5 Z"
          fill="#FF0000"
        />
      </svg>
    );
  }

  return (
    <span className={cn('text-xs font-bold leading-none', className)}>
      {countryCode.toUpperCase()}
    </span>
  );
};
