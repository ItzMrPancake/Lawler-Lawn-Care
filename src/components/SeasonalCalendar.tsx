import React, { useState } from 'react';
import { Calendar, Sun, CloudRain, Snowflake, Leaf, Check } from 'lucide-react';
import { SEASONAL_GUIDE } from '../data/lawnData';

export const SeasonalCalendar: React.FC = () => {
  const [activeSeasonIdx, setActiveSeasonIdx] = useState(0);

  const getSeasonIcon = (index: number) => {
    switch (index) {
      case 0: return <Leaf className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 1: return <Sun className="w-4 h-4 text-amber-500 dark:text-amber-400" />;
      case 2: return <CloudRain className="w-4 h-4 text-orange-500 dark:text-orange-400" />;
      case 3: return <Snowflake className="w-4 h-4 text-blue-500 dark:text-blue-400" />;
      default: return <Leaf className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const activeSeason = SEASONAL_GUIDE[activeSeasonIdx];

  return (
    <section className="py-16 lg:py-20 bg-neutral-100/50 dark:bg-neutral-900/40 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Agronomic Timing Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            The 4-Season North Texas Lawn Playbook
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            Lawns aren&apos;t static; they respond to soil temperature shifts and rainfall cycles. Here is what your turf requires quarter-by-quarter to stay thick, resilient, and weed-free.
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {SEASONAL_GUIDE.map((season, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSeasonIdx(idx)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                activeSeasonIdx === idx
                  ? 'border-emerald-500 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-md ring-1 ring-emerald-500/50'
                  : 'border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/60 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">{season.season.split(' ')[0]}</span>
                {getSeasonIcon(idx)}
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">{season.theme}</p>
            </button>
          ))}
        </div>

        {/* Selected Season Details Card */}
        <div className="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {activeSeason.season}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                Focus: {activeSeason.theme}
              </h3>
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 self-start sm:self-auto">
              Included in Lawler Signature & Estate Plans
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeSeason.actionSteps.map((step, sIdx) => (
              <div key={sIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800/80">
                <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/80 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
