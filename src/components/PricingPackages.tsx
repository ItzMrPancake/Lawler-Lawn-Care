import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/lawnData';
import { PricingPlan } from '../types';

interface PricingPackagesProps {
  onSelectPlan: (planName: string, frequency: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPlan }) => {
  const [billingFrequency, setBillingFrequency] = useState<'weekly' | 'biweekly'>('weekly');

  return (
    <section id="pricing" className="py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 scroll-mt-20 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest & Predictable</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Transparent Maintenance Plans
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            Choose the level of care your yard demands. All plans include automated digital invoicing after service completion and zero cancelation fees.
          </p>

          {/* Weekly / Bi-Weekly Switcher */}
          <div className="mt-8 inline-flex items-center p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-sm">
            <button
              onClick={() => setBillingFrequency('weekly')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                billingFrequency === 'weekly'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Weekly Schedule (Recommended)
            </button>
            <button
              onClick={() => setBillingFrequency('biweekly')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                billingFrequency === 'biweekly'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Bi-Weekly Schedule
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan: PricingPlan) => {
            const price = billingFrequency === 'weekly' ? plan.weeklyPrice : plan.biweeklyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all relative ${
                  plan.isPopular
                    ? 'bg-white dark:bg-neutral-900 border-2 border-emerald-500 shadow-xl dark:shadow-emerald-950/40 lg:-translate-y-2'
                    : 'bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 min-h-[36px]">{plan.tagline}</p>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-neutral-900 dark:text-white font-display tabular-nums">
                        ${price}
                      </span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        / cut (standard lot)
                      </span>
                    </div>
                    <span className="text-[11px] text-emerald-700 dark:text-emerald-400 block mt-1 font-medium">
                      Billed monthly per service completed
                    </span>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6 bg-white/80 dark:bg-neutral-900/80 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800/80 text-xs text-neutral-700 dark:text-neutral-300">
                    <span className="font-semibold text-neutral-900 dark:text-white block mb-0.5">Best Suited For:</span>
                    {plan.idealFor}
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-200">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name, billingFrequency)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      plan.isPopular
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/20'
                        : 'bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700'
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-neutral-500 dark:text-neutral-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Cancel or pause anytime with 24h notice</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
