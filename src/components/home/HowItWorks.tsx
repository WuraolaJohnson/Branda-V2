'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Search, Sliders, ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Explore our five core branding categories or search specifically for the solution your brand requires.',
    icon: Search,
    color: 'bg-brand-cream text-brand-navy',
  },
  {
    number: '02',
    title: 'Customize',
    description: 'Select your preferred size, material stock, print quantity, finish options, and turnaround speed.',
    icon: Sliders,
    color: 'bg-brand-mint text-brand-mint-text',
  },
  {
    number: '03',
    title: 'Order',
    description: 'Review transparent pricing, input your delivery address details, and confirm your project with ease.',
    icon: ShoppingBag,
    color: 'bg-brand-peach/40 text-brand-navy',
  },
  {
    number: '04',
    title: 'Delivered',
    description: 'Our senior production team handles execution, quality assurance, and real-time order tracking.',
    icon: CheckCircle2,
    color: 'bg-brand-navy text-white',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      type: 'spring',
      stiffness: 120,
      damping: 14,
    },
  }),
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white border-b border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <Badge variant="coral">Seamless Process</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight">
            How Branda V2 Works
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Eliminate traditional procurement friction. From concept selection to doorstep delivery in four intuitive steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Animated connecting line (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-brand-cream via-brand-coral/40 to-brand-navy/30 origin-left z-0"
          />

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-brand-offwhite rounded-3xl p-8 border border-brand-navy/10 hover:border-brand-coral/30 hover:shadow-card transition-all group flex flex-col justify-between z-10 cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <motion.span
                      initial={{ opacity: 0.3 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                      className="text-4xl font-extrabold font-display text-brand-navy/30 group-hover:text-brand-coral transition-colors duration-300"
                    >
                      {step.number}
                    </motion.span>
                    <motion.div
                      whileHover={{ rotate: [0, -12, 12, 0], scale: 1.15 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy font-display mb-2 group-hover:text-brand-coral transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < STEPS.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-brand-coral/50"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
