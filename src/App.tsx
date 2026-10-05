import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Estimator } from './components/Estimator';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Services } from './components/Services';
import { SeasonalCalendar } from './components/SeasonalCalendar';
import { PricingPackages } from './components/PricingPackages';
import { ServiceArea } from './components/ServiceArea';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { MobileQuickBar } from './components/MobileQuickBar';

function LawnCareApp() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState<any>(undefined);

  const handleOpenGeneralQuote = () => {
    setQuoteInitialData(undefined);
    setIsQuoteOpen(true);
  };

  const handleBookFromEstimator = (details: {
    lotSize: string;
    frequency: 'weekly' | 'biweekly' | 'onetime';
    services: string[];
    estimatedPrice: string;
  }) => {
    setQuoteInitialData({
      lotSize: details.lotSize,
      frequency: details.frequency,
      service: details.services.join(', '),
      estimatedPrice: details.estimatedPrice,
    });
    setIsQuoteOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setQuoteInitialData({
      service: serviceName,
    });
    setIsQuoteOpen(true);
  };

  const handleSelectPlan = (planName: string, frequency: string) => {
    setQuoteInitialData({
      plan: planName,
      frequency: frequency as any,
    });
    setIsQuoteOpen(true);
  };

  const handleSelectArea = (location: string) => {
    setQuoteInitialData({
      location: location,
    });
    setIsQuoteOpen(true);
  };

  const handlePortfolioQuote = (projectTitle: string) => {
    setQuoteInitialData({
      service: projectTitle,
    });
    setIsQuoteOpen(true);
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col font-sans selection:bg-emerald-600 selection:text-white transition-colors duration-200">
      {/* Navigation with Dark/Light Toggle */}
      <Navbar onOpenQuote={handleOpenGeneralQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenQuote={handleOpenGeneralQuote} 
          onExploreCalculator={scrollToCalculator} 
        />

        <PortfolioGallery 
          onRequestQuoteWithItem={handlePortfolioQuote} 
        />

        <Estimator 
          onBookWithEstimate={handleBookFromEstimator} 
        />

        <BeforeAfterSlider />

        <Services 
          onSelectService={handleSelectService} 
        />

        <SeasonalCalendar />

        <PricingPackages 
          onSelectPlan={handleSelectPlan} 
        />

        <ServiceArea 
          onSelectArea={handleSelectArea} 
        />

        <Testimonials />

        <FaqSection 
          onOpenContact={handleOpenGeneralQuote} 
        />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenGeneralQuote} />

      {/* Mobile Sticky Action Bar */}
      <MobileQuickBar onOpenQuote={handleOpenGeneralQuote} />

      {/* Lead Capture & Scheduling Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialData={quoteInitialData}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LawnCareApp />
    </ThemeProvider>
  );
}
