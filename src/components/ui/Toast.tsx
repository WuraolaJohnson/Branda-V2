'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { CheckCircle2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const Toast: React.FC = () => {
  const { toastMessage, dismissToast } = useCart();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-brand-navy text-white px-5 py-3.5 rounded-2xl shadow-elevated border border-white/10"
        >
          <CheckCircle2 className="w-5 h-5 text-brand-coral flex-shrink-0" />
          <span className="text-sm font-medium pr-2">{toastMessage}</span>
          <button
            onClick={dismissToast}
            className="p-1 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
