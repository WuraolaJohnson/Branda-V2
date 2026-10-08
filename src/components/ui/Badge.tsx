import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'navy' | 'coral' | 'mint' | 'cream' | 'peach' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'coral',
  className,
}) => {
  const base = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide';

  const variants = {
    coral: 'bg-brand-coral/15 text-brand-navy border border-brand-coral/30',
    navy: 'bg-brand-navy text-white',
    mint: 'bg-brand-mint text-brand-mint-text font-bold',
    cream: 'bg-brand-cream text-brand-navy border border-brand-cream-dark',
    peach: 'bg-brand-peach/40 text-brand-navy border border-brand-peach-dark/30',
    outline: 'border border-brand-navy/20 text-brand-navy bg-transparent',
  };

  return <span className={cn(base, variants[variant], className)}>{children}</span>;
};
