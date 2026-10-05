import React from 'react';
import { Phone, Calculator } from 'lucide-react';
import { BUSINESS_INFO } from '../data/lawnData';

interface MobileQuickBarProps {
  onOpenQuote: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenQuote }) => {
  return (
    <aside aria-label="Mobile quick actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800 px-3 py-2.5 flex items-center gap-2 shadow-2xl transition-colors">
      <a
        href={`tel:${BUSINESS_INFO.rawPhone}`}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700/80 rounded-xl text-neutral-800 dark:text-neutral-200 text-xs font-semibold active:bg-neutral-200 dark:active:bg-neutral-800 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
        <span>Call Now</span>
      </a>

      <button
        onClick={onOpenQuote}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 active:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-md transition-colors cursor-pointer"
      >
        <Calculator className="w-3.5 h-3.5" />
        <span>Instant Quote</span>
      </button>
    </aside>
  );
};
