import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/lawnData';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs pb-24 md:pb-12 pt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-200 dark:border-neutral-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="font-display font-bold text-lg text-neutral-900 dark:text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Providing premier residential and commercial lawn mowing, turf fertilization, weed control, aeration, and landscape maintenance across Mansfield and South DFW since 2008.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
              <span>Fully Licensed & $2,000,000 General Liability Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">Services</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Precision Mowing & Edging</a></li>
              <li><a href="#services" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Turf Nutrition & Weed Control</a></li>
              <li><a href="#services" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Core Aeration & Seeding</a></li>
              <li><a href="#services" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Hedge & Shrub Sculpting</a></li>
              <li><a href="#services" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Seasonal Property Resets</a></li>
              <li><a href="#services" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Commercial Grounds Care</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">Company</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#portfolio" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Portfolio & Field Gallery</a></li>
              <li><a href="#calculator" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Instant Estimate Tool</a></li>
              <li><a href="#transformation" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Before & After Showcase</a></li>
              <li><a href="#pricing" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Maintenance Plans</a></li>
              <li><a href="#service-area" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Service Route Coverage</a></li>
              <li><a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider">Contact & Dispatch</p>
            <div className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="tabular-nums">{BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & domain acknowledgement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="http://www.lawlerlawncare.com/" className="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors font-mono">
              lawlerlawncare.com
            </a>
            <span>·</span>
            <span>Commercial & Residential Groundskeeping</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
