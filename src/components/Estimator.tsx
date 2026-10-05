import React, { useState, useMemo } from 'react';
import { Calculator, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface EstimatorProps {
  onBookWithEstimate: (details: {
    lotSize: string;
    frequency: 'weekly' | 'biweekly' | 'onetime';
    services: string[];
    estimatedPrice: string;
  }) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({ onBookWithEstimate }) => {
  const [lotSize, setLotSize] = useState<'quarter' | 'half' | 'threequarter' | 'acre'>('quarter');
  const [frequency, setFrequency] = useState<'weekly' | 'biweekly' | 'onetime'>('weekly');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['weed-feed']);

  const lotSizeOptions = [
    { id: 'quarter', label: 'Up to 1/4 Acre', desc: 'Standard suburban lot (up to 11,000 sq ft)', baseMow: 42 },
    { id: 'half', label: '1/4 – 1/2 Acre', desc: 'Mid-sized corner lot (11,000 – 22,000 sq ft)', baseMow: 52 },
    { id: 'threequarter', label: '1/2 – 1 Acre', desc: 'Large residential lot (22,000 – 43,000 sq ft)', baseMow: 75 },
    { id: 'acre', label: '1+ Acre Estate', desc: 'Acreage or corner estate (43,000+ sq ft)', baseMow: 110 },
  ];

  const addonOptions = [
    { id: 'weed-feed', name: '6-Stage Turf Nutrition & Weed Defense', desc: 'Pre-emergent & seasonal fertilization', priceRate: 26 },
    { id: 'shrub-trim', name: 'Hedge & Bush Sculpting', desc: 'Monthly shaping and leaf rake-out', priceRate: 35 },
    { id: 'aeration', name: 'Core Aeration & Soil Loosening', desc: 'Deep plug pulling (amortized/seasonal)', priceRate: 18 },
    { id: 'mulch-refresh', name: 'Flowerbed Mulch & Trench Edging', desc: 'Natural shredded hardwood mulch refresh', priceRate: 22 },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const calculatedEstimate = useMemo(() => {
    const selectedLot = lotSizeOptions.find((l) => l.id === lotSize) || lotSizeOptions[0];
    let base = selectedLot.baseMow;

    const lotMultiplier = lotSize === 'quarter' ? 1 : lotSize === 'half' ? 1.3 : lotSize === 'threequarter' ? 1.8 : 2.5;

    let addonsCost = 0;
    selectedAddons.forEach((addonId) => {
      const addon = addonOptions.find((a) => a.id === addonId);
      if (addon) {
        addonsCost += Math.round(addon.priceRate * lotMultiplier);
      }
    });

    const lowEstimate = Math.round((base + addonsCost) * (frequency === 'weekly' ? 0.95 : 1.0));
    const highEstimate = Math.round(lowEstimate * 1.15);

    const monthlyEstimated = frequency === 'weekly' ? lowEstimate * 4 : frequency === 'biweekly' ? lowEstimate * 2 : lowEstimate;

    return {
      low: lowEstimate,
      high: highEstimate,
      monthly: monthlyEstimated,
    };
  }, [lotSize, frequency, selectedAddons]);

  const handleBookEstimate = () => {
    const activeLotLabel = lotSizeOptions.find((l) => l.id === lotSize)?.label || 'Up to 1/4 Acre';
    const serviceNames = ['Precision Mowing & Perimeter Edging'];
    selectedAddons.forEach((id) => {
      const opt = addonOptions.find((a) => a.id === id);
      if (opt) serviceNames.push(opt.name);
    });

    onBookWithEstimate({
      lotSize: activeLotLabel,
      frequency,
      services: serviceNames,
      estimatedPrice: `$${calculatedEstimate.low} – $${calculatedEstimate.high} / visit`,
    });
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-neutral-100/60 dark:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800 scroll-mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Instant Lawn Care Price Calculator
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            Get an instant, transparent ballpark quote for your property in seconds. No high-pressure sales calls, no hidden fees, and zero long-term commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-white dark:bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm transition-colors">
            
            {/* Step 1: Lot Size */}
            <div>
              <label className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                1. Select Approximate Property Size
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lotSizeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setLotSize(opt.id as any)}
                    className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer ${
                      lotSize === opt.id
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-950 dark:text-white ring-1 ring-emerald-500'
                        : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700'
                    }`}
                  >
                    <div className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 flex items-center justify-between">
                      <span>{opt.label}</span>
                      {lotSize === opt.id && <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Frequency */}
            <div>
              <label className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                2. Select Service Frequency
              </label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <button
                  type="button"
                  onClick={() => setFrequency('weekly')}
                  className={`py-2.5 px-3 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                    frequency === 'weekly'
                      ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Weekly (Best Turf)
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('biweekly')}
                  className={`py-2.5 px-3 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                    frequency === 'biweekly'
                      ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Bi-Weekly
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('onetime')}
                  className={`py-2.5 px-3 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                    frequency === 'onetime'
                      ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  One-Time Reset
                </button>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                * Weekly mowing ensures lawn health by never cutting more than 1/3 of the grass blade at once.
              </p>
            </div>

            {/* Step 3: Add-on services */}
            <div>
              <label className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                3. Customize Add-On Services (Optional)
              </label>
              <div className="space-y-2.5">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'border-emerald-500/70 bg-emerald-50 dark:bg-emerald-950/20 text-neutral-900 dark:text-neutral-100'
                          : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                            isChecked
                              ? 'bg-emerald-600 border-emerald-500 text-white'
                              : 'border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{addon.name}</p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">{addon.desc}</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">
                        +${addon.priceRate}/ea
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-white dark:bg-neutral-950 rounded-2xl border border-emerald-500/50 p-6 sm:p-8 shadow-xl relative overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Estimated Rate
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">No commitment required</span>
              </div>

              {/* Price display */}
              <div className="py-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white font-display tabular-nums tracking-tight">
                  ${calculatedEstimate.low} – ${calculatedEstimate.high}
                  <span className="text-base sm:text-lg font-normal text-neutral-500 dark:text-neutral-400 ml-2">/ visit</span>
                </div>
                <div className="text-xs text-emerald-700 dark:text-emerald-400 mt-2 font-medium">
                  Approx. ${calculatedEstimate.monthly} / month for routine maintenance
                </div>
              </div>

              {/* Inclusions summary */}
              <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-300">
                <p className="font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider text-[11px]">Included in your estimate:</p>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Precision rotary mowing at optimal seasonal height</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Vertical blade edging on driveway, sidewalks & curbs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>String weed trimming around all fence lines & beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>100% hardscape blower clean-up of all clippings</span>
                </div>
                {selectedAddons.map((id) => {
                  const addon = addonOptions.find((a) => a.id === id);
                  return (
                    <div key={id} className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{addon?.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* Action */}
              <div className="pt-6">
                <button
                  onClick={handleBookEstimate}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Lock In This Estimate & Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-neutral-500 dark:text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                  <span>Final pricing confirmed in person before any work begins</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
