// src/data.ts
import { Product, BlogPost, Solution, LanguageCode } from './types';
import { t } from './utils/i18n';

export const getProducts = (lang: LanguageCode): Product[] => [
  {
    id: 'p1',
    name: 'Vegas Pro Vertical Nudge Cabinet (43" 4K Touch)',
    category: 'complete_machine',
    description: 'USA market compliant skill gaming cabinet. Features "Pre-Reveal" and "Nudge" mechanics.',
    imageUrl: 'https://picsum.photos/400/600',
    features: ['Mandatory Skill Nudge Mechanics', 'Anti-Cheat Metal Housing', 'ICT Bill Validator Ready', 'PA/GA Compliance Mode']
  },
  {
    id: 'p2',
    name: 'Titan Skill Board (Nudge Series)',
    category: 'game_board',
    description: 'High-retention game board logic. Replaces traditional RNG with player-controlled protocols.',
    imageUrl: 'https://picsum.photos/400/300',
    features: ['Player Reflex Logic', 'Standard 36/10 Pin Harness', 'Touchscreen Support', 'Non-Volatile Memory']
  },
  {
    id: 'p3',
    name: 'Countertop Reflex Kiosk',
    category: 'complete_machine',
    description: 'Compact skill amusement device for limited counter space.',
    imageUrl: 'https://picsum.photos/400/400',
    features: ['Compact Countertop Form Factor', 'Plug-and-Play', 'Reaction-Based Gameplay', 'Cashless Ready']
  },
  /* --- 1. 43" 4K Titan (p4) --- */
  {
    id: 'p4',
    name: '43" 4K Titan Vertical Skill Cabinet (Empty Shell)',
    category: 'cabinet_only',
    description: 'Premier 43-inch 4K UHD gaming cabinet shell. Designed for maximum player engagement.',
    imageUrl: 'https://picsum.photos/800/1200?random=43',
    features: ['43" 4K UHD PCAP Touch', 'Addressable LED Halo Lighting', '1.2mm Cold Rolled Steel', '36/10 Pin Pre-Wired'],
    tankPage: {
      headline: 'Dominating Revenue: The 43" 4K Vertical Titan Cabinet',
      subHeadline: 'Why settle for 1080P? Give your players the immersive experience they demand.',
      painPoints: [
        { icon: 'ShieldAlert', title: 'Physical Security Issues', description: 'Standard wooden cabinets are easily breached. Our 1.2mm laser-cut steel body is built to last.' },
        { icon: 'Monitor', title: 'Unresponsive Touchscreens', description: 'Say goodbye to ghost touches. Our PCAP screens remain accurate even after 50 million taps.' },
        { icon: 'Zap', title: 'Complex Maintenance', description: 'Easy-Access swing-out door allows swap boards or clear bill jams in under 60 seconds.' }
      ],
      technicalSpecs: [
        { label: 'Monitor', value: '43-inch 4K UHD (3840 x 2160) Industrial LCD' },
        { label: 'Touch Type', value: '10-Point Capacitive (PCAP) with 3mm Tempered Glass' },
        { label: 'Cabinet Material', value: '1.2mm Cold Rolled Steel + UV Resistant Powder Coat' },
        { label: 'Lighting', value: 'Smart Addressable RGB LED (Sync-Ready)' },
        { label: 'Power Supply', value: 'Pre-installed 450W Gaming Grade PSU' },
        { label: 'Compatibility', value: 'Plug-and-Play for 36/10 Pin Nudge Boards' }
      ],
      comparison: {
        competitorLabel: 'Standard 43" Import Cabinets',
        rows: [
          { feature: 'Resolution', us: 'True 4K Ultra HD', them: '1080P Upscaled' },
          { feature: 'Touch Tech', us: 'Sealed PCAP (Anti-Dust)', them: 'Exposed IR Frame' },
          { feature: 'Wiring', us: 'Labeled UL Copper Wire', them: 'Non-labeled Generic Mix' }
        ]
      },
      buyerGuide: [
        { title: 'Step 1: Check your Game Dimensions', content: 'Ensure your game board supports 4K resolution output via HDMI.' },
        { title: 'Step 2: Peripheral Selection', content: 'This shell is pre-punched for ICT A6/PA7 and Pyramid 7600.' }
      ],
      caseStudy: {
        title: '40% Growth in C-Store Revenue',
        content: '"We replaced three 21-inch units with two of these 43-inch Titans. Weekly hold increased by 40% because people prefer the big screen."',
        author: 'David K., Route Distributor'
      },
      faqs: [
        { question: 'How do I adjust the hold/payout percentage?', answer: 'Controlled via your game board settings. Harness includes a service button for menu access.' },
        { question: 'Is the 4K monitor compatible with older game boards?', answer: 'Yes. Includes an industrial scaler that detects 1080P, 720P, and VGA boards.' },
        { question: 'What are the power requirements?', answer: 'A single Titan 43" draws roughly 350-400W. Recommend 3-4 units per 20A circuit.' },
        { question: 'How durable is the touchscreen glass?', answer: '3mm tempered glass rated for 50 million+ touches.' },
        { question: 'Does the LED Halo lighting sync?', answer: 'Yes! Connects to board LED header to flash in sync with wins and bonuses.' },
        { question: 'What is the shipping weight?', answer: 'Approx 145 lbs (66kg). We fit 2 units per pallet for LTL freight.' }
      ],
      ctaText: 'Get Wholesale Quote Today',
      pdfUrl: '/downloads/titan-43-specs.pdf',
      seo: {
        metaTitle: '43" Vertical Skill Game Cabinet | 4K Touch Gaming Shell',
        metaDescription: 'Shop our wholesale 43-inch vertical cabinets. Factory direct metal shells with 4K UHD PCAP touchscreens.',
        keywords: ['43 Inch Vertical Skill Cabinet', '4K Touch Screen Gaming Shell', 'Wholesale Nudge Game Cabinets']
      }
    }
  },
  /* --- 2. 43" J-Curve Elite --- */
  {
    id: 'j-curve-43-cabinet',
    name: '43" J-Curve 4K Elite Skill Cabinet (Empty Shell)',
    category: 'cabinet_only',
    description: 'The ultimate immersive experience for premium venues. Features a massive 43-inch J-Curved 4K display.',
    imageUrl: 'https://picsum.photos/800/1200?random=431',
    features: ['43" 4K J-Curve Display', 'Pro-Grade PCAP Multi-Touch', 'Sync-LED RGB Lighting', 'Dual-Lock Security Body'],
    tankPage: {
      headline: 'Redefine Your Revenue with the 43" J-Curve 4K Elite',
      subHeadline: 'Elevate your route from "Basic" to "Premium". Increase play time by 30% through superior immersion.',
      painPoints: [
        { icon: 'Monitor', title: 'Glare & Reflection Issues', description: 'Traditional screens suffer from overhead light reflections. Our J-curve and AG coating eliminate glare.' },
        { icon: 'LayoutGrid', title: 'Outdated Aesthetic', description: 'Futuristic casino-grade aesthetic that demands attention.' },
        { icon: 'ShieldAlert', title: 'Screen Vulnerability', description: '3mm chemically-strengthened glass with a hardness of 7H.' }
      ],
      technicalSpecs: [
        { label: 'Monitor Type', value: '43" J-Curve 4K UHD Industrial LED' },
        { label: 'Curvature Rate', value: 'R1500 Optimized for Eye-Comfort' },
        { label: 'Touch System', value: 'Projected Capacitive (PCAP) with <5ms Response' },
        { label: 'Chassis Material', value: '1.2mm Cold Rolled Steel' }
      ],
      comparison: {
        competitorLabel: 'Standard Flat 43" Imports',
        rows: [
          { feature: 'Visual Immersion', us: 'J-Curve 1500R (High)', them: 'Flat Panel (Low)' },
          { feature: 'Glass Durability', us: '3mm Tempered PCAP', them: '1.5mm Generic Glass' }
        ]
      },
      buyerGuide: [
        { title: 'Monitor Calibration', content: 'Ensure your board supports 4K to take full advantage of the pixel density.' },
        { title: 'Power Distribution', content: 'Unit draws peak 4.5A. Use surge-protected strips for high-density deployments.' }
      ],
      caseStudy: {
        title: 'Luxury Lounge Transition Success',
        content: '"We replaced six 21-inch units with four J-Curve Elites. Collections doubled in the first month."',
        author: 'Mark S., Vending Route Owner'
      },
      faqs: [
        { question: 'What is the difference between J-Curve and C-Curve?', answer: 'J-Curve is straight at bottom and curved at top, making it ideal for vertical skill games.' },
        { question: 'Can the LED lighting be changed?', answer: 'Controlled by internal remote or software sync to match branding.' },
        { question: 'Is the monitor stable?', answer: 'Securely integrated into our custom steel chassis. As stable as any upright unit.' },
        { question: 'Is this cabinet compatible with Link games?', answer: 'Absolutely. Designed for high-res graphics of modern Link and Fusion titles.' },
        { question: 'What happens if the glass is damaged?', answer: 'Modular glass. Replace the PCAP glass without replacing the entire 4K panel.' },
        { question: 'How is the unit shipped?', answer: 'Double-layered pallets with custom foam. Damage rate is less than 0.5%.' }
      ],
      ctaText: 'Inquire for Elite Pricing',
      pdfUrl: '/downloads/elite-43-jcurve.pdf',
      seo: {
        metaTitle: '43" J-Curve 4K Elite Skill Cabinet | Immersive Arcade Shell',
        metaDescription: 'Maximize venue revenue with the 43-inch J-curve cabinet. 4K resolution, PCAP touch.',
        keywords: ['43 Inch Curved Skill Cabinet', 'J-Curve Arcade Machine Shell']
      }
    }
  },
  /* --- 3. 43" Vertical Elite (p-pro) --- */
  {
    id: 'vertical-43-cabinet-pro',
    name: '43" 4K Vertical Elite Skill Cabinet (Empty Shell)',
    category: 'cabinet_only',
    description: 'The definitive 43-inch vertical gaming platform. A seamless 4K visual experience designed for Link and Nudge games.',
    imageUrl: '/images/vertical-43-pro.jpg',
    features: ['43" 4K Vertical UHD Display', 'Industrial PCAP Touchscreen', 'Custom RGB Side Lighting', 'Heavy-Duty 1.2mm Steel Shell'],
    tankPage: {
      headline: 'Upgrade to 4K: The Future of High-Yield Skill Gaming',
      subHeadline: 'Dominate your location with the 43" Vertical Elite. Engineered for professional route operators.',
      painPoints: [
        { icon: 'Monitor', title: 'Screen Lag and Mis-touches', description: 'Sealed PCAP technology ensures 100% accuracy for skill actions.' },
        { icon: 'ShieldAlert', title: 'Vulnerability to Theft', description: '1.2mm reinforced steel body with a triple-point locking bar.' },
        { icon: 'Zap', title: 'Maintenance Complexity', description: 'Pre-labeled 36/10 pin harnesses for 5-minute board swaps.' }
      ],
      technicalSpecs: [
        { label: 'Monitor Size', value: '43" Diagonal Vertical (Portrait Mode)' },
        { label: 'Resolution', value: '3840 x 2160 UHD (4K)' },
        { label: 'Touch System', value: '10-Point PCAP Multi-Touch' },
        { label: 'Body Construction', value: '1.2mm Cold Rolled Steel' }
      ],
      comparison: {
        competitorLabel: 'Standard 21.5" or Generic 43" Imports',
        rows: [
          { feature: 'Visual Real Estate', us: '100% 4K Vertical Surface', them: 'Dual 21" or 1080P' },
          { feature: 'Body Material', us: 'Industrial Grade Steel', them: 'Plastic / Thin Aluminum' }
        ]
      },
      buyerGuide: [
        { title: 'Choosing Your Board', content: 'Ensure your game board supports HDMI 4K output for the sharpest graphics.' },
        { title: 'Customizing Branding', content: 'We offer custom decals for bulk orders. Contact us to get your logo pre-installed.' }
      ],
      caseStudy: {
        title: 'Location Profit Growth of 48%',
        content: '"Swapped four 21" machines for three 43" Elites. Hold increased by 48% due to high-def visuals."',
        author: 'Chris L., Master Route Operator'
      },
      faqs: [
        { question: 'Does the cabinet come with a bill acceptor?', answer: 'Empty Shell. Pre-punched for ICT and Pyramid. Can pre-install upon request.' },
        { question: 'What is the monitor warranty?', answer: '1-year factory warranty on the 4K display and touch controller.' },
        { question: 'Can I use existing 36/10 pin boards?', answer: 'Yes! Harness is 100% compatible with industry standard connectors.' },
        { question: 'Is the monitor visible from wide angles?', answer: 'Premium IPS panels with 178-degree viewing angles.' },
        { question: 'How many fit in a pallet?', answer: '2 fully assembled units per standard double pallet.' },
        { question: 'Are custom LED colors available?', answer: 'Side RGB is addressable. Remote included to match branding.' }
      ],
      ctaText: 'Get Wholesale Quote',
      pdfUrl: '/downloads/elite-43-vertical-specs.pdf',
      seo: {
        metaTitle: '43" Vertical Skill Game Cabinet | 4K Touch Gaming Shell',
        metaDescription: 'Wholesale 43-inch vertical arcade cabinets. Factory direct metal shells.',
        keywords: ['43 Inch Vertical Arcade Cabinet', 'Touch Screen Skill Game Shell']
      }
    }
  },
  /* --- 4. 43" Slant Top Curved (Slant) --- */
  {
    id: 'slant-top-43-curved',
    name: '43" 4K Slant Top Curved Skill Cabinet (Empty Shell)',
    category: 'cabinet_only',
    description: 'The ultimate luxury ergonomic gaming shell. 4K J-Curve display with a slant-top design optimized for VIP lounges.',
    imageUrl: '/images/slant-top-43.jpg',
    features: ['43" 4K Curved PCAP Touch', 'Ergonomic Slant-Top Design', 'Premium 2.1 Sound System', 'Anti-Pry 1.2mm Steel Body'],
    tankPage: {
      headline: 'High-End Comfort, Higher Revenue: The Slant Top 4K Elite',
      subHeadline: 'Upgrade your route with the most ergonomic cabinet. Designed to keep players comfortable for hours.',
      painPoints: [
        { icon: 'Armchair', title: 'Player Fatigue', description: 'Neck strain is mathematically reduced by the slant-top angle.' },
        { icon: 'Eye', title: 'Light Reflection', description: 'The R1500 curve and AG coating ensure perfect view from sitting position.' },
        { icon: 'ShieldAlert', title: 'Security Risk', description: 'Shell features a secondary internal vault for game boards and cash boxes.' }
      ],
      technicalSpecs: [
        { label: 'Monitor', value: '43" 4K UHD J-Curve Industrial Display' },
        { label: 'Ergonomics', value: '15-Degree Slant-Top Operating Surface' },
        { label: 'Touch Panel', value: 'Zero-Bezel PCAP Multi-Touch (3mm Tempered)' },
        { label: 'Audio', value: 'Built-in 2.1 Channel Stereo with Subwoofer' }
      ],
      comparison: {
        competitorLabel: 'Standard Upright Cabinets',
        rows: [
          { feature: 'Player Comfort', us: 'High (Sit-Down Slant)', them: 'Low (Standing)' },
          { feature: 'Display Quality', us: '4K Curved J-Type', them: '1080P Flat' }
        ]
      },
      buyerGuide: [
        { title: '1. Venue Floor Planning', content: 'Ensure you have adequate aisle space for chairs.' },
        { title: '2. Game Board Sync', content: 'Works best with 4K-ready Link and Nudge boards.' }
      ],
      caseStudy: {
        title: 'VIP Lounge Hold Increase',
        content: '"Revenue increased because players stayed at the machines 3x longer than upright models."',
        author: 'Mark T., Route Distributor'
      },
      faqs: [
        { question: 'Does it come with the bill acceptor?', answer: 'No, pre-cut for ICT and Pyramid. Pre-installation available.' },
        { question: 'Is the screen glass replaceable?', answer: 'Yes, 3mm PCAP touch glass is modular.' },
        { question: 'Can I use a Link board in this?', answer: 'Yes, vertical 4K screen is ideal for modern titles.' },
        { question: 'What is the power draw?', answer: 'Approx 4.2A peak including sound and lighting.' },
        { question: 'Is shipping fully assembled?', answer: 'Yes, shipped on specialized foam-padded pallets.' },
        { question: 'Can the LED colors be customized?', answer: 'Addressable RGB strips included with internal controller.' }
      ],
      ctaText: 'Get Wholesale Quote',
      pdfUrl: '/downloads/slant-top-43-specs.pdf',
      seo: {
        metaTitle: '43" Slant Top Curved Skill Cabinet | Premium VIP Gaming Shell',
        metaDescription: 'Shop the most ergonomic 43-inch curved slant top skill game cabinet.',
        keywords: ['Slant Top Skill Cabinet', '43 Inch Curved Gaming Shell']
      }
    }
  },
  /* --- 5. 21.5" Dual Screen --- */
  {
    id: 'vertical-dual-screen-cabinet',
    name: '21.5" Dual Screen Vertical Skill Cabinet (Metal Shell)',
    category: 'cabinet_only',
    description: 'The industry standard for Link-style games with dual PCAP touchscreens.',
    imageUrl: '/images/21-dual-screen.jpg',
    features: ['Dual 21.5" FHD Screens', 'Halo LED Lighting', '1.2mm Cold Rolled Steel', 'Nudge Board Ready'],
    tankPage: {
      headline: 'The Ultimate Vertical Cabinet for High-Performance Routes',
      subHeadline: 'Dominate your territory with the "Vegas-Grade" metal cabinet.',
      painPoints: [
        { icon: 'ShieldAlert', title: 'Stop Theft', description: '3-point locking bar system makes prying impossible.' },
        { icon: 'Monitor', title: 'Eliminate Touch Failures', description: 'Sealed PCAP touch glass found in casino slots.' },
        { icon: 'Zap', title: 'Plug-and-Play', description: 'Pre-harnessed with labeled 36/10 Pin connectors.' }
      ],
      technicalSpecs: [
        { label: 'Dual Displays', value: '2x 21.5" FHD (1920x1080) IPS' },
        { label: 'Construction', value: '1.2mm Industrial Steel' }
      ],
      comparison: {
        competitorLabel: 'Generic Imports',
        rows: [
          { feature: 'Touch Response', us: '< 5ms (PCAP)', them: '> 20ms (IR)' },
          { feature: 'Security', us: 'Steel Body', them: 'Plywood' }
        ]
      },
      buyerGuide: [
        { title: '1. Verify Harness', content: 'Check if your board uses 36/10 Pin or JAMMA.' },
        { title: '2. Plan Floor Space', content: 'At only 23" wide, fits 4 in same space as 3 wide-bodies.' }
      ],
      caseStudy: {
        title: 'Doubled Revenue in 3 Months',
        content: '"Collections up 40% purely due to uptime and attractive LED lighting."',
        author: 'Mike D., Master Route Operator'
      },
      faqs: [
        { question: 'Does it include game board?', answer: 'Shell Only. You must install your own PCB.' },
        { question: 'Is it Banilla compatible?', answer: 'Yes, uses industry standard 36/10 pin harness.' },
        { question: 'Shipping cost?', answer: 'Fits 4 units per pallet. $250-$400 depending on zone.' },
        { question: 'Warranty?', answer: '1 Year Full Replacement.' },
        { question: 'Custom branding?', answer: 'Available for bulk orders.' },
        { question: 'Uptime?', answer: 'Industrial components rated for 24/7 smoke shop use.' }
      ],
      ctaText: 'Get Wholesale Pricing',
      seo: {
        metaTitle: 'Vertical Skill Game Cabinet | 21.5" Dual Screen',
        metaDescription: 'Factory direct vertical gaming cabinets. Dual touchscreens.',
        keywords: ['Dual Screen Arcade Cabinet', 'Metal Nudge Cabinet']
      }
    }
  }
];

/* --- BLOGS & SOLUTIONS 保持不变 --- */
export const getBlogs = (lang: LanguageCode): BlogPost[] => [
  {
    id: 'b1',
    slug: 'skill-game-compliance-guide',
    title: 'Distributor Guide: The Legal Difference Between "Skill" and "Chance"',
    excerpt: 'Protect your route. Understand the technical distinction between Nudge and prohibited RNG devices.',
    date: 'Oct 12, 2024',
    author: { name: 'Robert Vance', role: 'Chief Engineer', avatar: 'R', bio: 'Expert in regulatory compliance.' },
    category: 'Compliance',
    readingTime: '8 min read',
    imageUrl: 'https://picsum.photos/1200/600?random=101',
    blocks: [
      { type: 'paragraph', content: 'The outcome is controlled by the player\'s action.' },
      { type: 'h2', content: 'The "Predominance Test"' }
    ],
    seo: { metaTitle: 'Skill Game Compliance Guide', metaDescription: 'Legal guide for distributors.', keywords: ['compliance'] }
  }
];

export const getSolutions = (lang: LanguageCode): Solution[] => [
  {
    id: 'distributors',
    title: t(lang, 'sol.dist.title'),
    targetAudience: t(lang, 'sol.dist.audience'),
    description: t(lang, 'sol.dist.desc'),
    fullDescription: t(lang, 'sol.dist.full'),
    benefits: ['Container-Load Pricing', 'White Label Cabinets'],
    icon: 'Truck',
    recommendedCategory: 'cabinet_only',
    stats: [{ value: '40%', label: 'Margin Increase', subtext: 'vs local importers' }],
    painPoints: [{ title: 'Supply Chain', description: 'Waiting kills momentum.', icon: 'Clock' }],
    comparison: { competitorLabel: 'Importing Directly', rows: [{ feature: 'Lead Time', us: 'In-Stock', them: '8 Weeks' }] },
    buyersGuide: [{ title: 'Select Form Factor', description: 'Choose Vertical or Fish Table.' }],
    faqs: [{ question: 'MOQ?', answer: 'Tiered pricing from 5 units.' }],
    testimonials: [{ quote: "Stabilized our growth.", author: "Mike R.", role: "Distributor", location: "Ohio" }],
    seo: { metaTitle: 'Wholesale Amusement Cabinets', metaDescription: 'OEM Manufacturer.', keywords: ['wholesale'] }
  },
  {
    id: 'lounges',
    title: t(lang, 'sol.lounge.title'),
    targetAudience: t(lang, 'sol.lounge.audience'),
    description: t(lang, 'sol.lounge.desc'),
    fullDescription: t(lang, 'sol.lounge.full'),
    benefits: ['Luxury Finishes', 'Slant-Top Ergonomics'],
    icon: 'Armchair',
    recommendedCategory: 'complete_machine',
    stats: [{ value: 'Premium', label: 'Build', subtext: 'Gold/Chrome trim' }],
    painPoints: [{ title: 'Aesthetics', description: 'Cheap machines look bad.', icon: 'Eye' }],
    comparison: { competitorLabel: 'Standard Bar Top', rows: [{ feature: 'Comfort', us: 'Leather', them: 'Plastic' }] },
    buyersGuide: [{ title: 'Finish', description: 'Match your trim.' }],
    faqs: [{ question: 'Is it classy?', answer: 'Looks like furniture, not a toy.' }],
    testimonials: [{ quote: "Fits bottle service vibe.", author: "Dante", role: "Manager", location: "LV" }],
    seo: { metaTitle: 'Luxury Slant-Top Gaming Cabinets', metaDescription: 'VIP Lounge Equipment.', keywords: ['slant top'] }
  }
];
