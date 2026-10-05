import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Send, Sparkles, Phone } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/lawnData';

interface InitialQuoteData {
  service?: string;
  plan?: string;
  lotSize?: string;
  frequency?: 'weekly' | 'biweekly' | 'onetime';
  location?: string;
  estimatedPrice?: string;
}

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: InitialQuoteData;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Mansfield',
    zip: '76063',
    propertyType: 'residential',
    frequency: 'weekly',
    primaryService: 'Precision Mowing & Perimeter Edging',
    lotSize: 'Up to 1/4 Acre',
    hasPets: false,
    gateCode: '',
    notes: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        primaryService: initialData.service || initialData.plan || prev.primaryService,
        frequency: initialData.frequency || prev.frequency,
        lotSize: initialData.lotSize || prev.lotSize,
        city: initialData.location ? initialData.location.split('(')[0].trim() : prev.city,
      }));
    }
    setSubmitted(false);
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) return;

    const code = `LLC-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefCode(code);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-neutral-900 dark:text-neutral-100 max-h-[90vh] overflow-y-auto transition-colors">
        
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Quote & Scheduling</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                Request Your Property Lawn Care Estimate
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                Zero long-term contracts. We satellite-verify your lot dimensions and text your confirmed quote within 2 hours.
              </p>

              {initialData?.estimatedPrice && (
                <div className="mt-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/40 text-xs text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
                  <span>Pre-calculated Estimate: <strong>{initialData.estimatedPrice}</strong></span>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono">Lot: {initialData.lotSize}</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Mobile Phone (For Quote SMS) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(817) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Email & Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="residential">Residential Home</option>
                    <option value="commercial">Commercial / Office Park</option>
                    <option value="hoa">HOA / Common Grounds</option>
                    <option value="acreage">Large Acreage Estate</option>
                  </select>
                </div>
              </div>

              {/* Street Address & City */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Service Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="1234 Emerald Lawn Dr"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    City / Zip
                  </label>
                  <input
                    type="text"
                    value={`${formData.city}, ${formData.zip}`}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Service & Frequency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.primaryService}
                    onChange={(e) => setFormData({ ...formData, primaryService: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Lawler Signature Care">Lawler Signature Care Plan</option>
                    <option value="Estate Comprehensive">Estate Comprehensive Plan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Desired Frequency
                  </label>
                  <select
                    value={formData.frequency}
                    onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="weekly">Weekly (Recommended for Lawn Health)</option>
                    <option value="biweekly">Bi-Weekly</option>
                    <option value="onetime">One-Time Project / Clean-Up</option>
                  </select>
                </div>
              </div>

              {/* Pets & Gate info */}
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-700 dark:text-neutral-300">
                  <input
                    type="checkbox"
                    checked={formData.hasPets}
                    onChange={(e) => setFormData({ ...formData, hasPets: e.target.checked })}
                    className="rounded text-emerald-600 bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 focus:ring-0"
                  />
                  <span>I have pets (Crew will double-check gate closure)</span>
                </label>

                <input
                  type="text"
                  placeholder="Gate code / Latch notes (optional)"
                  value={formData.gateCode}
                  onChange={(e) => setFormData({ ...formData, gateCode: e.target.value })}
                  className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg text-xs text-neutral-800 dark:text-neutral-200 placeholder-neutral-400 focus:outline-none focus:border-emerald-500 sm:w-60"
                />
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Specific Requests or Problem Areas (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Patchy weed area in back corner, low sprinkler heads, dog run..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl text-xs text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Estimate Request</span>
                </button>
                <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[11px] text-neutral-500 dark:text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                  <span>We respect your privacy. No spam or high-pressure calls ever.</span>
                </div>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/50 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Estimate Request Received!
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-neutral-900 dark:text-white">{formData.name}</strong>. Our route supervisor will measure your property boundaries via GIS mapping and send your confirmed quote to <strong className="text-neutral-900 dark:text-white">{formData.phone}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-sm mx-auto text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Confirmation Ref:</span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{refCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Address:</span>
                <span className="text-neutral-900 dark:text-white truncate max-w-[200px]">{formData.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Service:</span>
                <span className="text-neutral-900 dark:text-white">{formData.primaryService}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Frequency:</span>
                <span className="text-emerald-700 dark:text-emerald-400 capitalize">{formData.frequency}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-medium text-xs rounded-xl transition-colors cursor-pointer"
              >
                Close & Return to Site
              </button>
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs rounded-xl transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Dispatch: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
