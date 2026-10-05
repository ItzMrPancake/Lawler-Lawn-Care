import React, { useState } from 'react';
import { Camera, MapPin, Check, ArrowRight, X, Sparkles, ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/lawnData';
import { PortfolioItem } from '../types';

interface PortfolioGalleryProps {
  onRequestQuoteWithItem: (title: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onRequestQuoteWithItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/40 scroll-mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Field Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Recent Work & Yard Transformations
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base max-w-2xl leading-relaxed">
              Explore authentic photos from our weekly routes across Mansfield, Arlington, and South DFW. Click any photo to inspect cut patterns, edge depth, and project details.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-x-auto shrink-0 shadow-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveCategory('striping')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'striping'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Diamond Striping
            </button>
            <button
              onClick={() => setActiveCategory('edging')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'edging'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Perimeter Edging
            </button>
            <button
              onClick={() => setActiveCategory('mulch')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'mulch'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Mulch & Beds
            </button>
            <button
              onClick={() => setActiveCategory('backyard')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'backyard'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Backyard Living
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-neutral-200 dark:bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Category Tag (Top Right) */}
                <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-emerald-400 border border-neutral-800">
                  {item.categoryLabel}
                </div>

                {/* Click to inspect prompt on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-950/30 backdrop-blur-[2px]">
                  <span className="px-3.5 py-1.5 bg-neutral-900/90 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-neutral-700 shadow-md">
                    <span>Inspect Project</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Location unboxed metadata */}
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 mb-1.5">
                    <MapPin className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {item.specs[0]}
                  </span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View Detail</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal for detailed project inspection */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-3xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Header */}
              <div className="relative h-64 sm:h-80 w-full bg-neutral-900 shrink-0">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedItem.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedItem.categoryLabel}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {selectedItem.title}
                  </h3>
                </div>
              </div>

              {/* Details Content */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                    Scope of Work & Protocol
                  </h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Specs List */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                    Project Standards & Equipment
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedItem.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2.5 p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-800 dark:text-neutral-200"
                      >
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Want this same cut standard on your property?
                  </p>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        const title = selectedItem.title;
                        setSelectedItem(null);
                        onRequestQuoteWithItem(`Portfolio Project: ${title}`);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Request Work Like This</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
