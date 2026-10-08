'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Sparkles, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackTitle?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  fallbackTitle,
  ...rest
}) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={cn(
          'w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-navy/10 via-brand-mint/20 to-brand-coral/10 p-4 text-center select-none',
          className
        )}
      >
        <div className="w-10 h-10 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center mb-2 text-brand-coral">
          <ImageIcon className="w-5 h-5" />
        </div>
        <span className="text-xs font-bold text-brand-navy/80 line-clamp-1">
          {fallbackTitle || alt || 'Branda Solution'}
        </span>
        <span className="text-[10px] text-brand-muted flex items-center gap-1 mt-0.5">
          <Sparkles className="w-3 h-3 text-brand-coral" /> Verified Creative Asset
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...rest}
    />
  );
};
