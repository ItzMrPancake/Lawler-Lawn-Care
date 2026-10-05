import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/lawnData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Local Reputation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Trusted Across Mansfield & Surrounding Neighborhoods
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            Real feedback from local homeowners, busy families, and HOA directors who rely on our promptness and attention to yard detail every week.
          </p>
        </div>

        {/* Quantified stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <div className="text-3xl font-extrabold text-neutral-900 dark:text-white font-display tabular-nums">16+</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Years Operating in Texas</div>
          </div>
          <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-display tabular-nums">4.9★</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Average Review Score</div>
          </div>
          <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <div className="text-3xl font-extrabold text-neutral-900 dark:text-white font-display tabular-nums">99.4%</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">On-Time Route Reliability</div>
          </div>
          <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-display tabular-nums">100%</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Customer Gate Safety Audit</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between relative group hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {/* Quantified proof tag */}
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 font-mono">
                    {t.metric}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">{t.name}</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.location}</p>
                </div>
                <span className="text-xs text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-800">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
