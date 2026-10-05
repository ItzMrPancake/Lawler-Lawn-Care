import React from 'react';
import { ArrowRight, Phone, ShieldCheck, CheckCircle2, Star, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/lawnData';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreCalculator }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/20 dark:bg-emerald-600/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value proposition & actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-400">
              <span className="font-semibold text-emerald-800 dark:text-emerald-300">EST. 2008</span>
              <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
              <span>Mansfield & DFW Metro Turf Specialists</span>
              <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
              <span className="flex items-center gap-1 text-amber-500 dark:text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>4.9 / 5.0 ({BUSINESS_INFO.reviewCount} Reviews)</span>
              </span>
              <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>2026 Routes Open</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.08] text-balance">
              The Lawn Your Neighbors Envy. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-700 dark:from-emerald-400 dark:via-green-300 dark:to-emerald-500">The Reliability You Deserve.</span>
            </h1>

            {/* Concrete Value Subtitle */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
              We provide precision mowing with tournament diamond striping, science-backed weed defense, deep core aeration, and immaculate property maintenance for residential and commercial estates.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base rounded-xl shadow-lg shadow-emerald-950/20 transition-all hover:translate-y-[-1px] active:translate-y-[0px] cursor-pointer whitespace-nowrap"
              >
                <span>Get Your Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onExploreCalculator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-neutral-900/90 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white font-medium text-base rounded-xl border border-neutral-300 dark:border-neutral-700/80 transition-all whitespace-nowrap cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Calculate Pricing Online</span>
              </button>
            </div>

            {/* Social proof & Trust markers */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                <span>Zero Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                <span>Daily Sharp Blades Guaranteed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset with Scrim Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-2xl group">
              <img
                src="/src/assets/images/hero_lawn_estate_1791231909354.jpg"
                alt="Lawler Lawn Care striped estate lawn with manicured edges and lush green turf"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Measured Scrim for high contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent pointer-events-none" />

              {/* In-image highlight tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/85 backdrop-blur-md p-4 rounded-xl border border-neutral-800/90 flex items-center justify-between text-left">
                <div>
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">The Lawler Standard</p>
                  <p className="text-sm font-medium text-white">Mansfield Residential Estate Turf</p>
                  <p className="text-xs text-neutral-400">Precision cut at 2.75&quot; with diamond striping</p>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.rawPhone}`}
                  className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg shrink-0 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Crew</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
