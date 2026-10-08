'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'coral';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-coral/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:scale-100 shadow-sm';

    const variants = {
      primary: 'bg-brand-navy text-white hover:bg-brand-navy-800 hover:shadow-card',
      coral: 'bg-brand-coral text-white hover:bg-brand-coral-hover hover:shadow-card',
      secondary: 'bg-brand-mint text-brand-navy hover:bg-brand-mint-dark',
      outline: 'border-2 border-brand-navy/20 bg-transparent text-brand-navy hover:border-brand-navy hover:bg-brand-navy/5',
      ghost: 'bg-transparent text-brand-navy hover:bg-brand-navy/5 shadow-none',
    };

    const sizes = {
      sm: 'px-3.5 py-1.5 text-xs font-semibold gap-1.5',
      md: 'px-5 py-2.5 text-sm font-semibold gap-2',
      lg: 'px-7 py-3.5 text-base font-bold gap-2.5',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin mr-1.5" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
