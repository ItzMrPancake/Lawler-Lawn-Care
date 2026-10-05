import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Clock, Users, ArrowRight } from 'lucide-react';
import { SERVICE_AREAS } from '../data/lawnData';

interface ServiceAreaProps {
  onSelectArea: (location: string) => void;
}

export const ServiceArea: React.FC<ServiceAreaProps> = ({ onSelectArea }) => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    area?: typeof SERVICE_AREAS[0];
    searched: boolean;
  }>({ found: false, searched: false });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return;

    const match = SERVICE_AREAS.find(
      (a) => a.zip.includes(cleanQuery) || a.city.toLowerCase().includes(cleanQuery)
    );

    if (match) {
      setSearchResult({ found: true, area: match, searched: true });
    } else {
      setSearchResult({ found: false, searched: true });
    }
  };

  return (
    <section id="service-area" className="py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 scroll-mt-20 bg-neutral-100/40 dark:bg-neutral-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Service Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Mansfield & South DFW Service Routes
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            We run optimized, tight-radius crew routes across Mansfield, Arlington, Burleson, Midlothian, and adjacent communities to guarantee punctual arrival and minimum yard downtime.
          </p>
        </div>

        {/* Interactive Zip / City Search Box */}
        <div className="bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 mb-10 max-w-3xl shadow-sm transition-colors">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (searchResult.searched) setSearchResult({ found: false, searched: false });
                }}
                placeholder="Enter your Zip Code or City (e.g. 76063, Mansfield, Arlington)..."
                className="w-full pl-11 pr-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700/80 rounded-xl text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer shrink-0"
            >
              Check Availability
            </button>
          </form>

          {/* Search Result Feedback */}
          {searchResult.searched && (
            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              {searchResult.found && searchResult.area ? (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Direct Service Available in {searchResult.area.city} ({searchResult.area.zip})!</span>
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-300 flex items-center gap-4 pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Routes: {searchResult.area.serviceDays}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{searchResult.area.crew}</span>
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onSelectArea(`${searchResult.area?.city} (${searchResult.area?.zip})`)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shrink-0 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Schedule Route Cut</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">Zip or City not on standard route map?</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      We routinely service nearby properties or dispatch custom bids for acreage and commercial estates.
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectArea(query || 'DFW Metro')}
                    className="px-4 py-2 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-800 dark:text-white text-xs font-medium rounded-lg shrink-0 transition-colors cursor-pointer"
                  >
                    Inquire for Custom Dispatch
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Coverage Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.zip}
              className="p-5 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">{area.zip}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active Route" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-2">{area.city}</h4>
              <div className="space-y-1 text-xs text-neutral-500 dark:text-neutral-400">
                <p className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-neutral-400" />
                  <span>{area.serviceDays}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Users className="w-3 h-3 text-neutral-400" />
                  <span>Assigned: {area.crew}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
