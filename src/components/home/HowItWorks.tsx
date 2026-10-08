'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Search, Sliders, ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

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

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.35 });

  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeArrow, setActiveArrow] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView) {
      setActiveStep(null);
      setActiveArrow(null);
      return;
    }

    // Balanced, comfortable walkthrough: Step 1 -> Arrow 1 -> Step 2 -> Arrow 2 -> Step 3 -> Arrow 3 -> Step 4 -> stop
    const timeline = [
      // 1. Highlight Step 1
      { delay: 200, action: () => { setActiveStep(0); setActiveArrow(null); } },
      // 2. Arrow 1 (moves from 1 to 2)
      { delay: 750, action: () => { setActiveStep(null); setActiveArrow(0); } },
      // 3. Highlight Step 2
      { delay: 1150, action: () => { setActiveStep(1); setActiveArrow(null); } },
      // 4. Arrow 2 (moves from 2 to 3)
      { delay: 1700, action: () => { setActiveStep(null); setActiveArrow(1); } },
      // 5. Highlight Step 3
      { delay: 2100, action: () => { setActiveStep(2); setActiveArrow(null); } },
      // 6. Arrow 3 (moves from 3 to 4)
      { delay: 2650, action: () => { setActiveStep(null); setActiveArrow(2); } },
      // 7. Highlight Step 4 (Delivered!) and hold
      { delay: 3050, action: () => { setActiveStep(3); setActiveArrow(null); } },
      // 8. Settle calmly after holding Step 4
      { delay: 4100, action: () => { setActiveStep(null); setActiveArrow(null); } },
    ];

    const timerIds = timeline.map(({ delay, action }) => setTimeout(action, delay));

    return () => {
      timerIds.forEach(clearTimeout);
    };
  }, [isInView]);

  const handleCardHover = () => {
    setActiveStep(null);
    setActiveArrow(null);
  };

  return (
    <section id="how-it-works" className="py-24 bg-white border-b border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
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

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Animated connecting line through vertical center (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-brand-coral/20 via-brand-coral/40 to-brand-navy/20 origin-left z-0 pointer-events-none"
          />

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isStepActive = activeStep === index;
            const isArrowActive = activeArrow === index;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="relative flex flex-col"
              >
                {/* Interactive Card */}
                <motion.div
                  animate={{
                    y: isStepActive ? -6 : 0,
                    scale: isStepActive ? 1.015 : 1,
                  }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  onMouseEnter={handleCardHover}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className={`relative z-10 bg-brand-offwhite rounded-3xl p-8 border transition-all duration-200 group flex flex-col justify-between h-full cursor-default ${
                    isStepActive
                      ? 'border-brand-coral/40 shadow-card'
                      : 'border-brand-navy/10 hover:border-brand-coral/40 hover:shadow-card'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`text-4xl font-extrabold font-display transition-colors duration-200 inline-block ${
                          isStepActive
                            ? 'text-brand-coral'
                            : 'text-brand-navy/30 group-hover:text-brand-coral'
                        }`}
                      >
                        {step.number}
                      </span>

                      <div
                        className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center shadow-sm transition-all duration-200 ${
                          isStepActive
                            ? 'scale-110 -rotate-6 shadow-md'
                            : 'group-hover:shadow-md group-hover:scale-110 group-hover:-rotate-6'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3
                      className={`text-xl font-bold font-display mb-2 transition-colors duration-200 ${
                        isStepActive
                          ? 'text-brand-coral'
                          : 'text-brand-navy group-hover:text-brand-coral'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Connector arrow between steps */}
                {index < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex absolute left-[calc(100%+16px)] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center"
                  >
                    <motion.div
                      animate={
                        isArrowActive
                          ? {
                              scale: 1.15,
                              x: [0, 6, 0],
                            }
                          : {
                              x: [0, 3, 0],
                              scale: 1,
                            }
                      }
                      transition={
                        isArrowActive
                          ? { duration: 0.3, ease: 'easeInOut' }
                          : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
                      }
                      className={`w-8 h-8 rounded-full border shadow-sm flex items-center justify-center transition-colors duration-200 bg-white ${
                        isArrowActive
                          ? 'border-brand-coral text-brand-coral shadow-md'
                          : 'border-brand-coral/30 text-brand-coral'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
