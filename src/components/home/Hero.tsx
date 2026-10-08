'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { MarketCode } from '@/data/types';
import { MARKETS } from '@/data/markets';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  marketCode: MarketCode;
}

const chipVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, delay: 0.35 + i * 0.1, type: 'spring', stiffness: 200 },
  }),
};

export const Hero: React.FC<HeroProps> = ({ marketCode }) => {
  const market = MARKETS[marketCode] || MARKETS.ng;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-offwhite via-brand-mint/20 to-brand-offwhite py-16 lg:py-24 border-b border-brand-navy/5">
      {/* Animated decorative background orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-coral/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-brand-mint/40 blur-3xl pointer-events-none"
      />
      {/* Extra subtle orb */}
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-1/3 w-60 h-60 rounded-full bg-brand-cream/30 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cream/80 border border-brand-cream-dark/40 shadow-sm"
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-4 h-4 text-brand-coral" />
              </motion.span>
              <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                All-in-One Branding & Print Ecosystem
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy font-display tracking-tight leading-[1.1]"
            >
              {market.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {market.heroSubtitle}
            </motion.p>

            {/* Micro feature chips with staggered spring animation */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-brand-navy">
              {[
                { icon: CheckCircle2, text: 'Enterprise Turnarounds' },
                { icon: ShieldCheck, text: '100% Quality Guaranteed' },
                { icon: Zap, text: 'Real-Time Configuration' },
              ].map((chip, i) => {
                const Icon = chip.icon;
                return (
                  <motion.div
                    key={chip.text}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={chipVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-xl border border-brand-navy/10 shadow-sm cursor-default"
                  >
                    <Icon className="w-4 h-4 text-brand-coral" />
                    <span>{chip.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link href={`/${marketCode}/services`}>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="coral" size="lg" className="w-full sm:w-auto shadow-card group animate-glow-pulse">
                    Explore Services
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <Link href={`/${marketCode}#how-it-works`}>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    How It Works
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Right Hero Composition (Layered Visual Cards) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateY: 8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Featured Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white bg-white group">
                <div className="relative h-72 sm:h-96 w-full">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1200&auto=format&fit=crop"
                    alt="Branda V2 Identity Showcase"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 500px"
                    fallbackTitle="Branda V2 Identity Showcase"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-1">
                  <Badge variant="coral">Featured Identity Solution</Badge>
                  <h3 className="text-xl font-bold font-display">360° Visual Brand Architecture</h3>
                  <p className="text-xs text-white/80">Logos, stationeries & complete design systems</p>
                </div>
              </div>

              {/* Floating Badge Card 2 — offset float animation */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
                className="absolute -bottom-6 -right-6 bg-brand-navy text-white p-4 rounded-2xl shadow-elevated border border-white/20 flex items-center gap-3 hidden sm:flex animate-float-slow"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-10 h-10 rounded-xl bg-brand-mint text-brand-navy flex items-center justify-center font-extrabold text-sm"
                >
                  4.9★
                </motion.div>
                <div>
                  <div className="text-xs font-bold">15,000+ Orders</div>
                  <div className="text-[11px] text-brand-navy-200">99.4% Verified Satisfaction</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
