import React, { useState } from 'react';
import { 
  Scissors, 
  ShieldCheck, 
  Droplets, 
  Sparkles, 
  Layers, 
  Building2, 
  Check, 
  ArrowUpRight,
  Flower2
} from 'lucide-react';
import { SERVICES } from '../data/lawnData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Flower2': return <Flower2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default: return <Scissors className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 scroll-mt-20 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>Full-Scope Groundskeeping</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Our Professional Turf & Landscape Services
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base max-w-2xl leading-relaxed">
              Every property has unique sun angles, clay density, and turf varieties. We combine commercial equipment with agronomic expertise for unmatched curb appeal.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-x-auto shrink-0 shadow-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('mowing')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'mowing'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Mowing & Edging
            </button>
            <button
              onClick={() => setActiveCategory('health')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'health'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Turf Health & Weed
            </button>
            <button
              onClick={() => setActiveCategory('landscaping')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'landscaping'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Landscape & Hedges
            </button>
            <button
              onClick={() => setActiveCategory('commercial')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'commercial'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Commercial / HOA
            </button>
          </div>
        </div>

        {/* Commercial Spotlight Banner if commercial selected or all */}
        {(activeCategory === 'all' || activeCategory === 'commercial') && (
          <div className="mb-10 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 grid grid-cols-1 lg:grid-cols-12 shadow-sm transition-colors">
            <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[220px]">
              <img
                src="/src/assets/images/service_shrub_turf_1791231937708.jpg"
                alt="Commercial landscape grounds maintained by Lawler Lawn Care"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                  <span>Commercial Groundskeeping</span>
                  <span aria-hidden="true">·</span>
                  <span>Corporate Campuses & HOAs</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                  High-Visibility Commercial Property Care & Tenant Grounds
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Protect property value and impress clients with dependable, scheduled maintenance. We handle retail centers, professional medical buildings, corporate centers, and subdivision entrances with digital punch-lists.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectService('Commercial Property & HOA Maintenance')}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Request Commercial RFP / Site Audit
                </button>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  Custom billing terms, Net-30 invoicing, and $2M general liability certificates provided.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:translate-y-[-2px] shadow-sm hover:shadow-md group"
            >
              <div>
                {/* Header: Human editorial numbering + icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {/* Editorial Numbering */}
                    <span className="text-xs font-bold text-neutral-400 font-mono tracking-wider">
                      {service.number}.
                    </span>
                  </div>

                  {/* Clean unboxed tag */}
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Short description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Feature list */}
                <div className="space-y-2 border-t border-neutral-100 dark:border-neutral-800/80 pt-4 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer with starting price and action */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">Rates Starting At</span>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white font-mono">{service.startingPrice}</span>
                </div>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 py-1.5 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <span>Book Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
