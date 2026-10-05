import React, { useState } from 'react';
import { Phone, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { BUSINESS_INFO } from '../data/lawnData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Zone 1: Single text element wordmark (never wraps) */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg shrink-0 whitespace-nowrap"
        >
          <span className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm shadow-emerald-900/40 group-hover:bg-emerald-500 transition-colors shrink-0">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors whitespace-nowrap">
            {BUSINESS_INFO.name}
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-300 shrink-0">
          <a 
            href="#services" 
            className="hover:text-neutral-900 dark:hover:text-white transition-colors py-1 whitespace-nowrap hover:underline underline-offset-8 decoration-emerald-500"
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            className="hover:text-neutral-900 dark:hover:text-white transition-colors py-1 whitespace-nowrap hover:underline underline-offset-8 decoration-emerald-500"
          >
            Portfolio
          </a>
          <a 
            href="#calculator" 
            className="hover:text-neutral-900 dark:hover:text-white transition-colors py-1 whitespace-nowrap hover:underline underline-offset-8 decoration-emerald-500"
          >
            Calculator
          </a>
          <a 
            href="#transformation" 
            className="hidden xl:inline-block hover:text-neutral-900 dark:hover:text-white transition-colors py-1 whitespace-nowrap hover:underline underline-offset-8 decoration-emerald-500"
          >
            Transformations
          </a>
          <a 
            href="#pricing" 
            className="hover:text-neutral-900 dark:hover:text-white transition-colors py-1 whitespace-nowrap hover:underline underline-offset-8 decoration-emerald-500"
          >
            Pricing
          </a>
          <a 
            href="#service-area" 
            className="hidden xl:inline-block hover:text-neutral-900 dark:hover:text-white transition-colors py-1 whitespace-nowrap hover:underline underline-offset-8 decoration-emerald-500"
          >
            Service Areas
          </a>
          <a 
            href="#faq" 
            className="hover:text-neutral-900 dark:hover:text-white transition-colors py-1 whitespace-nowrap hover:underline underline-offset-8 decoration-emerald-500"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: Actions + Dark Mode Toggle (never wraps) */}
        <div className="hidden md:flex items-center gap-2.5 xl:gap-3 shrink-0">
          
          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all cursor-pointer shrink-0"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
          </button>

          {/* Phone affordance (always single-line) */}
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="flex items-center gap-1.5 text-xs xl:text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white px-2.5 xl:px-3 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="tabular-nums whitespace-nowrap">{BUSINESS_INFO.phone}</span>
          </a>

          {/* Primary CTA */}
          <button
            onClick={onOpenQuote}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs xl:text-sm font-semibold px-3.5 xl:px-4 py-2.5 rounded-lg shadow-sm shadow-emerald-950/20 transition-all active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get Free Quote
          </button>
        </div>

        {/* Mobile / Tablet Menu Trigger */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          {/* Mobile Dark mode button */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 shrink-0"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            aria-label="Call Lawler Lawn Care"
            className="p-2 text-emerald-600 dark:text-emerald-400 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 shrink-0"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 focus:outline-none shrink-0"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2 text-base font-medium text-neutral-700 dark:text-neutral-300">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white"
            >
              Portfolio Gallery
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white"
            >
              Estimate Calculator
            </a>
            <a
              href="#transformation"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white"
            >
              Transformations
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white"
            >
              Plans & Pricing
            </a>
            <a
              href="#service-area"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white"
            >
              Service Areas
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white"
            >
              FAQ
            </a>
          </div>

          <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_INFO.rawPhone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-800 dark:text-neutral-200 font-medium text-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="tabular-nums">Call Us: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold text-sm shadow-md transition-colors whitespace-nowrap cursor-pointer"
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
