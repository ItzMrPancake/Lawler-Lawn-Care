import { ServiceItem, PricingPlan, Testimonial, ServiceAreaInfo, PortfolioItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Lawler Lawn Care',
  website: 'http://www.lawlerlawncare.com/',
  domain: 'lawlerlawncare.com',
  phone: '(817) 555-5296',
  rawPhone: '8175555296',
  email: 'service@lawlerlawncare.com',
  location: 'Mansfield, TX & Dallas-Fort Worth Metro',
  hours: 'Monday – Saturday: 7:00 AM – 6:30 PM',
  emergencyResponse: 'Same-day weather reschedule notifications via SMS',
  rating: 4.9,
  reviewCount: 134,
  yearsInBusiness: 16,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'mowing-striping',
    number: '01',
    title: 'Precision Mowing & Perimeter Edging',
    category: 'mowing',
    shortDesc: 'Crisp diamond striping, razor-sharp sidewalk string edging, and 100% hardscape cleanup.',
    fullDesc: 'Using commercial Toro and Scag turf mowers with razor-honed blades changed daily. Every cut includes precision trimming around obstacles, razor edging along sidewalks and driveways, and thorough blow-down of all walkways, patios, and driveways.',
    features: [
      'Commercial-grade precision mulching or bag collection',
      'Vertical mechanical blade edging on all paved perimeters',
      'Obstacle string-trimming flush to turf height',
      'High-velocity hardscape debris blowing'
    ],
    startingPrice: '$45 / cut',
    tag: 'Core Service',
    iconName: 'Scissors',
  },
  {
    id: 'turf-health',
    number: '02',
    title: 'Custom Turf Nutrition & Weed Defense',
    category: 'health',
    shortDesc: '6-stage tailored agronomic program to eradicate crabgrass, broadleaf weeds, and foster deep emerald roots.',
    fullDesc: 'Tailored for Bermuda, St. Augustine, and Zoysia turf grasses. Our balanced schedule delivers pre-emergent weed barriers before seed germination, targeted spot eradication, and slow-release granular nitrogen, iron, and potassium.',
    features: [
      'Spring & Autumn pre-emergent weed barriers',
      'Targeted broadleaf and sedge eradication treatments',
      'Slow-release granular micro-nutrients & soil conditioning',
      'Surface insect and grub preventative treatments'
    ],
    startingPrice: '$65 / app',
    tag: 'Agronomic Health',
    iconName: 'ShieldCheck',
  },
  {
    id: 'aeration-seeding',
    number: '03',
    title: 'Core Aeration & Dethatching',
    category: 'health',
    shortDesc: 'Relieves dense clay soil compaction, pull 2-3 inch plugs, and supercharges root oxygenation.',
    fullDesc: 'Compacted soil chokes root systems from moisture and nutrients. Our mechanical hollow-tine aerator pulls thousands of soil plugs across your yard, dramatically improving drainage, microbial life, and root depth.',
    features: [
      'Deep mechanical core plug extraction (2.5 - 3 inches)',
      'Relieves heavy foot traffic and clay compaction',
      'Optimizes water absorption and reduces runoff',
      'Optional premium overseeding for shade or transitional zones'
    ],
    startingPrice: '$135 / service',
    tag: 'Soil Vitality',
    iconName: 'Droplets',
  },
  {
    id: 'shrub-trimming',
    number: '04',
    title: 'Hedge Sculpting & Bush Shaping',
    category: 'landscaping',
    shortDesc: 'Artisanal architectural pruning for boxwoods, hollies, ornamental grasses, and privacy screens.',
    fullDesc: 'Sharp, healthy cuts tailored to each plant species. We contour hedges, remove dead inner wood, balance symmetry, and haul away every single branch and leaf clipping for a pristine property line.',
    features: [
      'Species-specific growth height timing',
      'Laser-level hedge leveling and beveling',
      'Internal thinning for disease and fungus prevention',
      'Full leaf rake-out and off-site disposal included'
    ],
    startingPrice: '$75 / visit',
    tag: 'Detail Sculpting',
    iconName: 'Flower2',
  },
  {
    id: 'seasonal-cleanups',
    number: '05',
    title: 'Spring Revival & Autumn Leaf Removal',
    category: 'landscaping',
    shortDesc: 'Total property resets: dead stalk clearing, leaf bagging, curb vacuuming, and flowerbed refreshing.',
    fullDesc: 'Heavy leaves rot turf and harbor winter pests. Our cleanup crews clear every corner, flowerbed, fence line, and porch using commercial blowers and vacuum mulchers to leave your property completely immaculate.',
    features: [
      'Thorough leaf clearing from turf, landscape beds, and decks',
      'Dormant perennial cut-backs and ornamental grass trimming',
      'Stick, acorn, and storm debris removal',
      'High-volume bagging or eco-friendly curb mulch collection'
    ],
    startingPrice: '$150 / service',
    tag: 'Seasonal Reset',
    iconName: 'Sparkles',
  },
  {
    id: 'mulch-flowerbeds',
    number: '06',
    title: 'Premium Mulch Installation & Bed Weeding',
    category: 'landscaping',
    shortDesc: 'Double-shredded organic dark brown/black cedar mulch with crisp spade bed trenching.',
    fullDesc: 'A 2-3 inch layer of fresh shredded hardwood mulch regulates soil temperatures, suppresses weed seeds, and locks in vital hydration while giving your home striking curb appeal and rich contrast.',
    features: [
      'Hand-weed removal and pre-emergent bed application',
      'Spade trench edging around all flowerbeds for crisp borders',
      'Premium triple-shredded black, dark brown, or cedar mulch',
      'Careful clearance around tree trunks to prevent root rot'
    ],
    startingPrice: '$95 / yard installed',
    tag: 'Curb Appeal',
    iconName: 'Layers',
  },
  {
    id: 'commercial-grounds',
    number: '07',
    title: 'Commercial Property & HOA Maintenance',
    category: 'commercial',
    shortDesc: 'Turnkey groundskeeping for retail centers, corporate offices, medical facilities, and HOA communities.',
    fullDesc: 'First impressions drive customer trust and tenant retention. We provide scheduled contract maintenance, dedicated account managers, digital completion photo logs, and $2M general liability coverage.',
    features: [
      'Rigorous scheduled service days with zero tenant disruption',
      'Comprehensive parking lot and sidewalk blow-down',
      'Trash and light lot debris pickup during each service',
      'Direct client portal with digital service time-stamps'
    ],
    startingPrice: 'Custom B2B SLA',
    tag: 'Enterprise & HOA',
    iconName: 'Building2',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic-cut',
    name: 'Precision Cut & Edge',
    tagline: 'Reliable weekly or bi-weekly mowing to keep your turf neat and manicured all season.',
    weeklyPrice: 42,
    biweeklyPrice: 52,
    features: [
      'Professional precision rotary cut at optimal seasonal height',
      'Vertical blade edging on all sidewalks, driveway & curbs',
      'String line trimming along foundations, fences & trees',
      '100% hardscape blower clean-up of clippings',
      'Automated service arrival SMS alerts'
    ],
    idealFor: 'Standard residential lots wanting dependable, clean weekly striping without the sweat.'
  },
  {
    id: 'lawler-signature',
    name: 'Lawler Signature Care',
    tagline: 'The complete healthy lawn package combining precision mowing with proactive weed and feed.',
    isPopular: true,
    weeklyPrice: 68,
    biweeklyPrice: 79,
    features: [
      'Everything in Precision Cut & Edge',
      '6-Step Fertilizer & Weed Defense program included',
      'Spring & Fall pre-emergent crabgrass barriers',
      'Free mid-season soil pH health audit',
      'Priority scheduling during peak weather windows',
      '10% discount on aeration & mulch projects'
    ],
    idealFor: 'Homeowners wanting lush green grass and zero weeds without managing messy chemicals.'
  },
  {
    id: 'estate-complete',
    name: 'Estate Comprehensive',
    tagline: 'White-glove landscape groundskeeping with hedge trimming and seasonal cleanups included.',
    weeklyPrice: 115,
    biweeklyPrice: 135,
    features: [
      'Everything in Lawler Signature Care',
      'Monthly shrub, hedge, and ornamental pruning',
      'Annual Fall Core Aeration included',
      'Bi-annual flowerbed weed treatment & bed spade edging',
      'Spring and Fall property leaf cleanup credits',
      'Dedicated lead technician & phone line'
    ],
    idealFor: 'Large properties, executive homes, or busy owners who want an immaculate exterior 365 days a year.'
  }
];

export const SERVICE_AREAS: ServiceAreaInfo[] = [
  { zip: '76063', city: 'Mansfield, TX', serviceDays: 'Monday & Thursday', status: 'active', crew: 'Crew Alpha' },
  { zip: '76001', city: 'Arlington (South), TX', serviceDays: 'Tuesday & Friday', status: 'active', crew: 'Crew Beta' },
  { zip: '76017', city: 'Arlington (SW), TX', serviceDays: 'Tuesday & Friday', status: 'active', crew: 'Crew Beta' },
  { zip: '76028', city: 'Burleson, TX', serviceDays: 'Wednesday & Saturday', status: 'active', crew: 'Crew Gamma' },
  { zip: '76065', city: 'Midlothian, TX', serviceDays: 'Monday & Thursday', status: 'active', crew: 'Crew Alpha' },
  { zip: '75052', city: 'Grand Prairie (South), TX', serviceDays: 'Tuesday & Thursday', status: 'active', crew: 'Crew Delta' },
  { zip: '76060', city: 'Kennedale, TX', serviceDays: 'Wednesday & Friday', status: 'active', crew: 'Crew Beta' },
  { zip: '76140', city: 'Fort Worth (SE), TX', serviceDays: 'Wednesday', status: 'active', crew: 'Crew Gamma' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus & Elena Vance',
    location: 'Mansfield, TX (Heritage High Area)',
    service: 'Lawler Signature Care',
    rating: 5,
    quote: 'We spent two seasons fighting crabgrass with big box store fertilizers and made zero progress. Within 45 days of Lawler taking over, our front lawn turned into a dense emerald carpet. The mowing lines look like a professional baseball stadium every single Thursday.',
    metric: '100% Weed Eradication in 6 Weeks',
  },
  {
    id: 't2',
    name: 'Dr. Robert Hensley',
    location: 'Arlington, TX (Martin Park)',
    service: 'Estate Comprehensive Plan',
    rating: 5,
    quote: 'Reliability is where most lawn companies fail. Lawler Lawn Care has never missed a scheduled day in two full years. Their crew always shuts the back gate securely so my Golden Retrievers are safe, and they blow off the patio cleaner than I ever could.',
    metric: '2 Years Zero Missed Service Days',
  },
  {
    id: 't3',
    name: 'Sarah Jenkins',
    location: 'Midlothian, TX',
    service: 'Core Aeration & Seasonal Cleanup',
    rating: 5,
    quote: 'Our black clay soil was hard as rock. The core aeration and overseeding service completely revived our patchy backyard. The team was courteous, clean, and provided honest advice rather than trying to oversell us.',
    metric: '+85% Root Density & Turf Recovery',
  },
  {
    id: 't4',
    name: 'David Sterling, HOA President',
    location: 'Mansfield Country Club Estates',
    service: 'Commercial & Common Grounds',
    rating: 5,
    quote: 'Managing 14 acres of common area entrances and retention basins requires serious horsepower and communication. Lawler Lawn Care delivers exceptional curb appeal that our residents praise at every monthly board meeting.',
    metric: '14 Acres Managed With Zero Complaints',
  }
];

export const SEASONAL_GUIDE = [
  {
    season: 'Spring (March - May)',
    theme: 'Emergence & Pre-Emergent Defense',
    actionSteps: [
      'Scalp winter dormancy and vacuum dead debris to wake up roots',
      'Apply pre-emergent barrier when soil temperatures hit 55°F to stop crabgrass',
      'Begin bi-weekly to weekly mowing schedule as growth surges',
      'Apply high-potassium starter fertilizer to strengthen cell walls'
    ]
  },
  {
    season: 'Summer (June - August)',
    theme: 'Heat Resilience & Hydration',
    actionSteps: [
      'Raise mower blade height by 0.5 inches to shade roots and retain moisture',
      'Targeted spot treatment for stubborn heat weeds like spurge and nutsedge',
      'Apply preventative grub control before beetle larvae feed on root crowns',
      'Calibrate irrigation schedules for deep, infrequent morning watering'
    ]
  },
  {
    season: 'Fall (September - November)',
    theme: 'Root Expansion & Winterizer',
    actionSteps: [
      'Perform mechanical core aeration to relieve summer soil compaction',
      'Second pre-emergent barrier application against winter broadleaf invaders (poa annua)',
      'Apply slow-release nitrogen winterizer to feed deep root storage systems',
      'Continuous leaf vacuuming to prevent damp lawn rot and mold'
    ]
  },
  {
    season: 'Winter (December - February)',
    theme: 'Dormancy Protection & Equipment Prep',
    actionSteps: [
      'Keep turf clear of heavy sticks, debris, and excessive leaf build-up',
      'Perform structural pruning on dormant shrubs, crepe myrtles, and small trees',
      'Service, balance, and precision-sharpen mower blades and commercial decks',
      'Plan spring flowerbed renovations and early compost top-dressing'
    ]
  }
];

export const FAQS = [
  {
    q: 'Do I need to be at home during my lawn service?',
    a: 'Not at all! As long as our crews have clear access to your front and back yards through an unlocked gate, we will take care of everything. We send an SMS notification when the crew is on the way and another when service is complete with the gate verified shut.'
  },
  {
    q: 'How do you handle pets and locked backyard gates?',
    a: 'Pet safety is a top priority for us. Our technicians verify gates are securely latched before leaving every single property. If your gate has a combination lock or latch code, you can easily provide it in your account notes. We kindly ask that pets remain indoors while the power equipment is running.'
  },
  {
    q: 'What happens when it rains on my scheduled mowing day?',
    a: 'Mowing waterlogged turf causes rutting and clumping that harms grass blades. If severe rain delays your cut, we automatically reschedule your property for the next dry weather window (usually the following day) and notify you via automated text message.'
  },
  {
    q: 'Are there contracts or cancelation penalties?',
    a: 'No forced long-term lock-in contracts for our residential plans. You can pause, adjust frequency, or cancel service at any time with a simple 24-hour notice before your scheduled route day.'
  },
  {
    q: 'What equipment do you use on residential lawns?',
    a: 'We use commercial-grade zero-turn mowers with floating decks and walk-behind mowers to prevent lawn scalping, equipped with razor-sharp mulching blades that are inspected and sharpened daily to deliver surgical cut quality.'
  },
  {
    q: 'How does billing work?',
    a: 'We operate seamless, secure paperless billing. You place a credit card on file, and you are only billed automatically after service has been performed. You receive an itemized digital receipt in your email immediately.'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'striping-heritage',
    title: 'Diamond Striping on Bermuda Turf',
    category: 'striping',
    categoryLabel: 'Precision Striping',
    location: 'Heritage Estates, Mansfield, TX',
    image: './images/gallery_diamond_stripes_1791232171426.jpg',
    description: 'Weekly precision mowing with commercial Toro 60" floating mulching deck and striping roller, alternating diagonal diamond cut pattern at 2.5" height.',
    specs: ['Toro 60" Commercial Zero-Turn', 'Diamond Pattern Striping Kit', 'Weekly Route Schedule', '100% Clippings Recycled']
  },
  {
    id: 'edging-martin',
    title: 'Surgical Concrete Driveway & Curb Edging',
    category: 'edging',
    categoryLabel: 'Perimeter Edging',
    location: 'Martin High District, Arlington, TX',
    image: './images/gallery_razor_edge_1791232183277.jpg',
    description: 'Vertical steel blade mechanical edging along 240 linear feet of sidewalk, driveway, and curbs, creating a razor-sharp 90-degree trench with zero turf tearing.',
    specs: ['Steel Blade Mechanical Edger', '240 Linear Feet Trimmed', 'Zero Turf Scalping', 'High-CFM Blower Cleaned']
  },
  {
    id: 'mulch-hidden-creek',
    title: 'Rich Espresso Mulch & Boxwood Contouring',
    category: 'mulch',
    categoryLabel: 'Mulch & Flowerbeds',
    location: 'Hidden Creek, Burleson, TX',
    image: './images/gallery_mulch_flowerbed_1791232192236.jpg',
    description: 'Deep hand-dug spade trench edging, broadleaf bed weed barrier application, and 7 yards of triple-shredded dark espresso hardwood mulch installed at a 2.5-inch depth.',
    specs: ['7 Yards Organic Cedar Mulch', 'Deep Spade Trench Edging', 'Bed Pre-Emergent Applied', 'Boxwood Architectural Pruning']
  },
  {
    id: 'estate-patio-retreat',
    title: 'Flagstone Patio & Manicured Backyard',
    category: 'backyard',
    categoryLabel: 'Backyard Living',
    location: 'Walnut Creek Country Club, Mansfield, TX',
    image: './images/gallery_estate_patio_1791232201465.jpg',
    description: 'Complete backyard revitalization: core aeration, slow-release nitrogen feeding, and tight tolerance trimming along flagstone walkways and living spaces.',
    specs: ['Estate Comprehensive Plan', 'Core Aeration & Overseed', 'Flagstone Hardscape Clear', 'Pet-Safe Organic Nutrients']
  },
  {
    id: 'commercial-center',
    title: 'Corporate Campus & Medical Plaza Grounds',
    category: 'commercial',
    categoryLabel: 'Commercial Grounds',
    location: 'Matlock Road Professional Center, Arlington, TX',
    image: './images/service_shrub_turf_1791231937708.jpg',
    description: 'High-visibility commercial grounds maintenance with weekly early morning mowing to prevent tenant disturbance, parking island blow-down, and hedge maintenance.',
    specs: ['Weekly Tuesday SLA Route', 'Zero Tenant Disruption', 'Full Parking Island Blow-Down', '$2M Liability Certificate']
  },
  {
    id: 'front-lawn-showcase',
    title: 'Executive Front Lawn Recovery & Striping',
    category: 'striping',
    categoryLabel: 'Precision Striping',
    location: 'South Pointe, Mansfield, TX',
    image: './images/hero_lawn_estate_1791231909354.jpg',
    description: 'Four-week weed eradication and nutritional overhaul transformed yellow patchy grass into a dense, emerald carpet with tournament-grade cross-hatch striping.',
    specs: ['6-Stage Weed & Feed Program', 'Cross-Hatch Cut Pattern', 'Zero Weeds Achieved', 'Enhanced Curb Appeal']
  }
];

