export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'mowing' | 'health' | 'landscaping' | 'commercial';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  startingPrice: string;
  tag: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  isPopular?: boolean;
  weeklyPrice: number;
  biweeklyPrice: number;
  features: string[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  quote: string;
  rating: number;
  metric: string;
}

export interface ServiceAreaInfo {
  zip: string;
  city: string;
  serviceDays: string;
  status: 'active' | 'waitlist';
  crew: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'striping' | 'edging' | 'mulch' | 'backyard' | 'commercial';
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
  specs: string[];
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  propertyType: 'residential' | 'commercial';
  lotSize: string;
  frequency: 'weekly' | 'biweekly' | 'onetime';
  services: string[];
  notes?: string;
  gateLocked?: boolean;
  hasPets?: boolean;
}
