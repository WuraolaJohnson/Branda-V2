'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

/* ─── spring presets ─── */
const BOUNCE_SPRING = { type: 'spring', stiffness: 500, damping: 16, mass: 0.8 } as const;
const SOFT_SPRING   = { type: 'spring', stiffness: 300, damping: 22 }             as const;

const LETTERS = 'BRANDA'.split('');

export const SplashScreen: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn } = useAuth();
  const [phase, setPhase] = useState<'logo' | 'text' | 'done'>('logo');
  const [isVisible, setIsVisible] = useState(true);
  const ringControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const seq = async () => {
      /* logo bounce-in settle */
      await new Promise((r) => setTimeout(r, 350));
      if (!isMounted) return;

      /* fire impact ring */
      ringControls.start({
        scale: [1, 3.5],
        opacity: [0.5, 0],
        transition: { duration: 0.35, ease: 'easeOut' },
      });

      /* reveal text */
      setPhase('text');

      /* hold, then exit */
      await new Promise((r) => setTimeout(r, 650));
      if (!isMounted) return;

      setPhase('done');
      setIsVisible(false);

      /* After the load up effect, open to the sign in page */
      if (!isLoggedIn && pathname !== '/account/login' && pathname !== '/account/register') {
        router.push('/account/login');
      }
    };

    seq();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on initial mount

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0d1b32',
        overflow: 'hidden',
      }}
    >
      {/* ── dot-grid texture ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
          pointerEvents: 'none',
        }}
      />

      {/* ── ambient glow ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: 560,
            height: 560,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,90,70,0.18) 0%, transparent 68%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* ── centre stage ── */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>

        {/* impact ring */}
        <motion.div
          aria-hidden
          animate={ringControls}
          style={{
            position: 'absolute',
            width: 96,
            height: 96,
            borderRadius: 28,
            border: '3px solid rgba(255,90,70,0.6)',
            pointerEvents: 'none',
            opacity: 0,
          }}
        />

        {/* ── logo badge ── */}
        <motion.div
          initial={{ y: -280, opacity: 0, rotate: -6, scale: 0.85 }}
          animate={{ y: 0,    opacity: 1, rotate:  0, scale: 1   }}
          transition={{ ...BOUNCE_SPRING, delay: 0.02 }}
          style={{
            width: 96,
            height: 96,
            borderRadius: 28,
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow:
              '0 0 0 0 rgba(255,90,70,0), 0 30px 60px rgba(0,0,0,0.45), 0 0 80px rgba(255,90,70,0.35)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display, sans-serif)',
              fontWeight: 900,
              fontSize: '2.65rem',
              color: '#0d1b32',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              userSelect: 'none',
            }}
          >
            B<span style={{ color: '#ff5a46', fontSize: '1.5rem' }}>2</span>
          </span>
        </motion.div>

        {/* ── staggered letter reveal ── */}
        <AnimatePresence>
          {phase === 'text' && (
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                {LETTERS.map((letter, i) => (
                  <motion.span
                    key={letter + i}
                    initial={{ y: 30, opacity: 0, scale: 0.7 }}
                    animate={{ y: 0,  opacity: 1, scale: 1   }}
                    transition={{ ...BOUNCE_SPRING, delay: i * 0.04 }}
                    style={{
                      fontFamily: 'var(--font-display, sans-serif)',
                      fontWeight: 800,
                      fontSize: '2.4rem',
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      display: 'inline-block',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}

                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ ...BOUNCE_SPRING, delay: LETTERS.length * 0.04 + 0.03 }}
                  style={{
                    fontFamily: 'var(--font-sans, sans-serif)',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    color: '#ff5a46',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    marginLeft: 8,
                    alignSelf: 'center',
                    display: 'inline-block',
                  }}
                >
                  V2
                </motion.span>
              </div>

              <motion.p
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0,  opacity: 1 }}
                transition={{ ...SOFT_SPRING, delay: 0.3 }}
                style={{
                  fontFamily: 'var(--font-sans, sans-serif)',
                  fontWeight: 600,
                  fontSize: '0.6rem',
                  color: 'rgba(255,255,255,0.38)',
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                Branding Ecosystem
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
      )}
    </AnimatePresence>
  );
};
