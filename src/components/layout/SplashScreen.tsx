'use client';

import React, { useEffect, useState } from 'react';

export const SplashScreen: React.FC = () => {
  const [isFading, setIsFading] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    // Start smooth fade-out at 1.1s
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1100);

    // Completely unmount from DOM at 1.5s
    const removeTimer = setTimeout(() => {
      setIsGone(true);
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (isGone) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d1b32] overflow-hidden select-none transition-opacity duration-400 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
      style={{
        // Guaranteed CSS-level fadeout fallback in case of delayed client hydration
        animation: 'splashFadeOut 0.4s ease-out 1.15s forwards',
      }}
    >
      {/* Dot-grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Ambient coral glow behind logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[520px] h-[520px] rounded-full bg-brand-coral/20 blur-[90px]"
          style={{ animation: 'b2GlowPulse 2s ease-in-out infinite' }}
        />
      </div>

      {/* Center Stage */}
      <div className="relative flex flex-col items-center gap-7 z-10">
        {/* Expanding Impact Ring */}
        <div
          className="absolute w-24 h-24 rounded-[28px] border-2 border-brand-coral/60 pointer-events-none"
          style={{
            animation: 'ringPing 1.2s cubic-bezier(0, 0, 0.2, 1) forwards',
          }}
        />

        {/* B2 Logo Badge */}
        <div
          className="w-24 h-24 rounded-[28px] bg-white flex items-center justify-center shadow-2xl transition-all duration-700 ease-out transform"
          style={{
            animation: 'b2Bounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
            boxShadow:
              '0 20px 50px rgba(0,0,0,0.5), 0 0 60px rgba(255,90,70,0.3)',
          }}
        >
          <span className="font-display font-black text-4xl text-brand-navy leading-none tracking-tight">
            B<span className="text-brand-coral text-2xl font-bold ml-0.5">2</span>
          </span>
        </div>

        {/* BRANDA V2 Letters & Subtitle */}
        <div
          className="flex flex-col items-center gap-1.5 transition-all duration-500 ease-out"
          style={{
            animation: 'b2FadeIn 0.5s ease-out 0.35s forwards',
            opacity: 0,
          }}
        >
          <div className="flex items-baseline gap-1">
            <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-wider">
              BRANDA
            </span>
            <span className="font-sans font-bold text-xs sm:text-sm text-brand-coral tracking-widest uppercase ml-1.5 px-1.5 py-0.5 rounded bg-brand-coral/10 border border-brand-coral/20">
              V2
            </span>
          </div>

          <p className="font-sans font-semibold text-[10px] sm:text-xs text-white/40 tracking-[0.3em] uppercase">
            Branding Ecosystem
          </p>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes b2Bounce {
          0% {
            opacity: 0;
            transform: translateY(-120px) scale(0.8) rotate(-4deg);
          }
          60% {
            opacity: 1;
            transform: translateY(10px) scale(1.05) rotate(1deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
        @keyframes ringPing {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          75% {
            transform: scale(2.8);
            opacity: 0;
          }
          100% {
            transform: scale(3.2);
            opacity: 0;
          }
        }
        @keyframes b2FadeIn {
          0% {
            opacity: 0;
            transform: translateY(14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes b2GlowPulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(1.08);
          }
        }
        @keyframes splashFadeOut {
          0% {
            opacity: 1;
            visibility: visible;
          }
          95% {
            opacity: 0;
            visibility: visible;
            pointer-events: none;
          }
          100% {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }
        }
      `,
        }}
      />
    </div>
  );
};
