'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Star, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { label: 'Verified Satisfaction', value: '99.4', suffix: '%', icon: Star },
  { label: 'Branding Assets Delivered', value: '15000', suffix: '+', display: '15,000+', icon: CheckCircle2 },
  { label: 'Active Corporate Clients', value: '2400', suffix: '+', display: '2,400+', icon: Building2 },
  { label: 'Avg Turnaround Speed', value: '3.5', suffix: ' Days', icon: ShieldCheck },
];

const TESTIMONIALS = [
  {
    quote: "Branda V2 completely streamlined our corporate rebranding. Ordering high-end business cards and onboarding gift boxes across Lagos and NYC was seamless.",
    author: "Amina Yusuf",
    role: "Head of Marketing",
    company: "Apex Global FinTech",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "The quality of tactile paper stock, vector logo deliverables, and digital assets exceeded our expectations. Truly world-class frontend ordering experience.",
    author: "David Vance",
    role: "Creative Director",
    company: "Vance Architecture US",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
];

/**
 * Animated counter that counts up from 0 to the target value when in view.
 */
function AnimatedCounter({ value, suffix, display }: { value: string; suffix: string; display?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  const numericTarget = parseFloat(value);
  const isDecimal = value.includes('.');

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800; // ms
    const steps = 60;
    const increment = numericTarget / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, numericTarget);
      setCount(current);
      if (step >= steps) {
        setCount(numericTarget);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  const formatted = isInView
    ? isDecimal
      ? count.toFixed(1)
      : display && count >= numericTarget
        ? display.replace(suffix, '')
        : Math.floor(count).toLocaleString()
    : '0';

  return (
    <div ref={ref} className="text-xl sm:text-2xl lg:text-4xl font-extrabold font-display text-white mb-1 break-words">
      {formatted}{isInView && suffix}
    </div>
  );
}

const testimonialVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, delay: 0.3 + i * 0.2, ease: 'easeOut' },
  }),
};

export const TrustSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-navy text-white border-b border-brand-navy-800 relative overflow-hidden">
      {/* Animated background orb */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-brand-mint/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <Badge variant="coral">Trust & Reputation</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Built for High-Growth Brands & Enterprises
          </h2>
          <p className="text-sm sm:text-base text-brand-navy-200 leading-relaxed">
            Over 2,400 companies rely on Branda V2 to discover, configure, and maintain their physical and digital brand presence.
          </p>
        </motion.div>

        {/* Stats Grid with animated counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-20">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, type: 'spring', stiffness: 150 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 text-center hover:bg-white/10 transition-all cursor-default group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-2xl bg-brand-coral/20 text-brand-coral flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-coral/30 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} display={stat.display} />
                <div className="text-xs text-brand-navy-200 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials with stagger + hover tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={testimonialVariants}
              whileHover={{ y: -6, rotateY: 2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/[0.08] transition-all backdrop-blur-sm"
            >
              <p className="text-sm sm:text-base text-brand-navy-100 italic leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-coral"
                />
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs text-brand-navy-200">{t.role}, <span className="text-brand-coral">{t.company}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
