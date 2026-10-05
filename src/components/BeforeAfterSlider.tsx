import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformation" className="py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 scroll-mt-20 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Visual Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            See the Lawler Transformation
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
            Drag the slider below to compare a typical neglected Texas suburban yard with our signature 4-week recovery protocol featuring diamond striping and broadleaf weed eradication.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative h-[340px] sm:h-[480px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-neutral-300 dark:border-neutral-700/80 shadow-2xl bg-neutral-100 dark:bg-neutral-900"
          >
            {/* After Image (Full background) */}
            <img
              src="/src/assets/images/lawn_after_manicured_1791231927840.jpg"
              alt="Lawler Lawn Care after treatment with emerald green turf and precision striping"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/src/assets/images/lawn_before_patchy_1791231918161.jpg"
                alt="Overgrown patchy yard before Lawler Lawn Care treatment"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            </div>

            {/* Vertical Divider Line with Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg border-2 border-white ring-2 ring-neutral-900 pointer-events-auto cursor-ew-resize transition-transform hover:scale-110 active:scale-95">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>

            {/* Before Label (Left) */}
            <div className="absolute top-4 left-4 z-10 bg-neutral-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-neutral-800 text-xs font-semibold text-neutral-300 pointer-events-none">
              BEFORE: Overgrown & Dandelion Infested
            </div>

            {/* After Label (Right) */}
            <div className="absolute top-4 right-4 z-10 bg-emerald-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-emerald-600/50 text-xs font-semibold text-emerald-300 pointer-events-none">
              AFTER: Lawler Precision Striping & Health
            </div>

            {/* Hint at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-1.5 pointer-events-none">
              <MoveHorizontal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Slide horizontally to inspect results</span>
            </div>
          </div>

          {/* Transformation highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-neutral-900 dark:text-white font-medium">100% Weed Suppression</strong>
                <p className="text-neutral-600 dark:text-neutral-400 mt-1">Pre-emergent timing stops crabgrass before germination; post-emergent clears existing clover.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-neutral-900 dark:text-white font-medium">Deep Root Oxygenation</strong>
                <p className="text-neutral-600 dark:text-neutral-400 mt-1">Core aeration breaks through dense North Texas clay, allowing water to reach 6+ inches deep.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-neutral-900 dark:text-white font-medium">Surgical Concrete Edging</strong>
                <p className="text-neutral-600 dark:text-neutral-400 mt-1">Crisp 90-degree vertical edging against sidewalks and driveways delivers architectural framing.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
