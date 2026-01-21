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
    features: ['Mandatory Skill Nudge Mechanics', 'Anti-Cheat Metal Housing']
  },
  {
    id: 'p2',
    name: 'Titan Skill Board (Nudge Series)',
    category: 'game_board',
    description: 'High-retention game board logic. Replaces traditional RNG with player-controlled protocols.',
    imageUrl: 'https://picsum.photos/400/300',
    features: ['Player Reflex Logic', 'Standard 36/10 Pin Harness']
  },
  {
    id: 'p3',
    name: 'Countertop Reflex Kiosk',
    category: 'complete_machine',
    description: 'Compact skill amusement device for limited counter space.',
    imageUrl: 'https://picsum.photos/400/400',
    features: ['Compact Countertop Form Factor', 'Plug-and-Play']
  },
  /* --- 1. 43" 垂直平屏机柜 (Titan 版) --- */
  {
    id: 'p4',
    name: '43" 4K Titan Vertical Skill Cabinet (Empty Shell)',
    category: 'cabinet_only',
    description: 'Premier 43-inch 4K UHD gaming cabinet shell. Designed for maximum player engagement with addressable RGB Halo lighting.',
    imageUrl: '/images/titan-43-cabinet.jpg',
    features: ['43" 4K UHD PCAP Touch', 'Addressable LED Halo Lighting', '1.2mm Cold Rolled Steel'],
    tankPage: {
      headline: 'Dominate the Floor with the 43" 4K Titan Vertical Cabinet',
      subHeadline: 'Bigger screens drive 35%+ more revenue. Stop settling for outdated 21" cabinets and give your venue the "Big Screen" advantage.',
      painPoints: [
        { icon: 'ShieldAlert', title: 'Security Weaknesses', description: 'Wooden cabinets are a liability. Our 1.2mm steel shell with a triple-point locking bar ensures security.' },
        { icon: 'Monitor', title: 'Screen Lag & Dead Zones', description: 'Our 4K PCAP touchscreens feature <5ms response time, keeping players engaged.' },
        { icon: 'Zap', title: 'Maintenance Downtime', description: 'Our modular layout allows for 60-second part swaps without specialized tools.' }
      ],
      technicalSpecs: [
        { label: 'Display Panel', value: '43-inch 4K UHD Industrial IPS' },
        { label: 'Touch Interface', value: 'Projected Capacitive (PCAP) Multi-Touch' },
        { label: 'Housing Material', value: '1.2mm Heavy-Duty Cold Rolled Steel' }
      ],
      comparison: {
        competitorLabel: 'Standard 21" or Wood Cabinets',
        rows: [
          { feature: 'Visual Appeal', us: '43" 4K UHD Immersive', them: '21" 1080P Small Screen' },
          { feature: 'Body Durability', us: 'All-Metal (Steel)', them: 'Plywood or Plastic' }
        ]
      },
      buyerGuide: [
        { title: '1. Verify Board Resolution', content: 'Ensure your game board supports HDMI 4K output for maximum impact.' },
        { title: '2. Select Power Config', content: 'The Titan 43" draws approx 3.5A. Plan for 3 units per 15A circuit.' }
      ],
      caseStudy: {
        title: 'Location Collects Jumped 42%',
        content: '"We swapped three 21" units for two 43" Titans. The ROI was achieved in less than 3 months."',
        author: 'David K., Route Operator'
      },
      faqs: [
        { question: 'How do I adjust the hold percentage?', answer: 'Hold percentages are controlled via your game board settings. Our harness includes a service button for easy menu access.' },
        { question: 'Is it compatible with older boards?', answer: 'Yes, our monitor includes an industrial scaler for 1080P and VGA signals.' },
        { question: 'What are the power requirements?', answer: 'Each unit draws 350-400W. We recommend a dedicated circuit for every 4 machines.' },
        { question: 'How durable is the glass?', answer: '3mm tempered, chemically-strengthened glass rated for 50 million+ touches.' },
        { question: 'Does the LED Halo sync?', answer: 'Yes, the RGB Halo can connect to your game board\'s LED header.' },
        { question: 'What is the shipping weight?', answer: 'Approx 145 lbs (66kg). We fit 2 units per pallet for LTL freight.' }
      ],
      ctaText: 'Get Wholesale Quote',
      pdfUrl: '/downloads/titan-43-specs.pdf',
      seo: {
        metaTitle: '43" 4K Titan Vertical Skill Cabinet | Wholesale Empty Shell',
        metaDescription: 'Upgrade your route with the 43-inch 4K Titan vertical cabinet. Factory direct for distributors.',
        keywords: ['43 inch vertical skill cabinet', '4K arcade shell']
      }
    }
  },
  /* --- 2. 43" J型曲面屏机柜 --- */
  {
    id: 'j-curve-43-cabinet',
    name: '43" J-Curve 4K Elite Skill Cabinet (Empty Shell)',
    category: 'cabinet_only',
    description: 'The ultimate immersive experience for premium venues. Features a massive 43-inch J-Curved 4K display.',
    imageUrl: '/images/j-curve.jpg',
    features: ['43" 4K J-Curve Display', 'Pro-Grade PCAP Multi-Touch', 'Sync-LED RGB Lighting'],
    tankPage: {
      headline: 'Redefine Your Revenue with the 43" J-Curve 4K Elite',
      subHeadline: 'Elevate your route from "Basic" to "Premium". J-Curve design is proven to increase play time by 30%.',
      painPoints: [
        { icon: 'Monitor', title: 'Glare Issues', description: 'Our J-curve design and AG coating eliminate harsh overhead reflections.' },
        { icon: 'LayoutGrid', title: 'Outdated Aesthetic', description: 'J-Curve offers a futuristic, casino-grade aesthetic that demands attention.' },
        { icon: 'ShieldAlert', title: 'Screen Vulnerability', description: 'We use 3mm chemically-strengthened glass with a 7H hardness.' }
      ],
      technicalSpecs: [
        { label: 'Monitor Type', value: '43" J-Curve 4K UHD Industrial LED' },
        { label: 'Curvature', value: 'R1500 Optimized' }
      ],
      comparison: {
        competitorLabel: 'Standard Flat 43"',
        rows: [{ feature: 'Visual Immersion', us: 'J-Curve (High)', them: 'Flat Panel (Low)' }]
      },
      buyerGuide: [{ title: 'Calibration', content: 'Our screens are factory-calibrated for high brightness.' }],
      faqs: [
        { question: 'Difference between J and C Curve?', answer: 'J-Curve is straight at the bottom, perfect for vertical skill games.' },
        { question: 'Is the LED customizable?', answer: 'Yes, via internal remote or software sync.' },
        { question: 'Is it stable?', answer: 'Yes, integrated into a custom steel chassis.' },
        { question: 'Link game compatible?', answer: 'Specifically designed for modern Link and Fusion titles.' },
        { question: 'Replaceable glass?', answer: 'Yes, the PCAP glass is modular.' },
        { question: 'Safe shipping?', answer: 'Custom foam inserts for curved sections used on all pallets.' }
      ],
      ctaText: 'Inquire for Elite Pricing',
      seo: {
        metaTitle: '43" J-Curve 4K Elite Skill Cabinet | Curved Arcade Shell',
        metaDescription: 'Maximize venue revenue with the J-curve curved skill game cabinet.',
        keywords: ['43 inch curved skill cabinet', 'J-Curve machine']
      }
    }
  },
  /* --- 3. 43" 垂直平屏 (Elite版) --- */
  {
    id: 'vertical-43-cabinet-pro',
    name: '43" 4K Vertical Elite Skill Cabinet (Empty Shell)',
    category: 'cabinet_only',
    description: 'The definitive 43-inch vertical gaming platform for Link and Nudge games.',
    imageUrl: '/images/vertical-43-pro.jpg',
    features: ['43" 4K Vertical UHD Display', 'Heavy-Duty 1.2mm Steel Shell'],
    tankPage: {
      headline: 'The Future of High-Yield Skill Gaming: Vertical Elite',
      subHeadline: 'Built for the professional route operator who refuses to compromise.',
      painPoints: [
        { icon: 'Monitor', title: 'Touch Lag', description: 'Sealed PCAP technology ensures 100% accuracy.' }
      ],
      technicalSpecs: [
        { label: 'Resolution', value: '3840 x 2160 UHD (4K)' }
      ],
      comparison: {
        competitorLabel: 'Generic 43"',
        rows: [{ feature: 'Body Material', us: 'Industrial Steel', them: 'Thin Metal or Plastic' }]
      },
      buyerGuide: [{ title: 'Board Choice', content: 'Optimized for 4K Nudge/Link boards.' }],
      faqs: [
        { question: 'Pre-installed acceptor?', answer: 'Pre-punched for ICT/Pyramid. Installation available.' },
        { question: 'Monitor warranty?', answer: '1-year factory warranty.' },
        { question: 'Compatible with 36/10 pin?', answer: '100% compatible with industry standard harnesses.' },
        { question: 'Viewing angle?', answer: 'Premium IPS panel with 178-degree wide angles.' },
        { question: 'LTL shipping?', answer: 'Fits 2 units per double pallet.' },
        { question: 'Are custom LED colors available?', answer: 'The side RGB lighting is addressable and remote controlled.' }
      ],
      ctaText: 'Get Wholesale Quote',
      seo: {
        metaTitle: '43" Vertical Elite Skill Cabinet | 4K Gaming Shell',
        metaDescription: 'Wholesale 43-inch vertical shells.',
        keywords: ['vertical skill cabinet']
      }
    }
  },
  /* --- 4. 43" 斜面曲面屏 (Slant Top) --- */
  {
    id: 'slant-top-43-curved',
    name: '43" 4K Slant Top Curved Skill Cabinet (Empty Shell)',
    category: 'cabinet_only',
    description: 'The ultimate luxury ergonomic gaming shell. 4K J-Curve display with a slant-top design.',
    imageUrl: '/images/slant-top-43.jpg', 
    features: ['43" 4K Curved PCAP Touch', 'Ergonomic Slant-Top Design'],
    tankPage: {
      headline: 'High-End Comfort, Higher Revenue: The Slant Top Elite',
      subHeadline: 'Designed to keep players comfortable and engaged for hours.',
      painPoints: [
        { icon: 'Armchair', title: 'Player Fatigue', description: 'Slant-top angle designed for peak sitting comfort.' }
      ],
      technicalSpecs: [
        { label: 'Ergonomics', value: '15-Degree Slant-Top Surface' }
      ],
      comparison: {
        competitorLabel: 'Standard Upright',
        rows: [{ feature: 'Comfort', us: 'High (Sit-Down)', them: 'Low (Standing)' }]
      },
      buyerGuide: [{ title: 'Floor Planning', description: 'Plan for aisle space for chairs.' }],
      faqs: [
        { question: 'Does it include the bill acceptor?', answer: 'No, but pre-cut for ICT/Pyramid.' },
        { question: 'Replaceable glass?', answer: 'Yes, 3mm PCAP glass is modular.' },
        { question: 'Link board compatible?', answer: 'Ideal for high-res Link titles.' },
        { question: 'Power draw?', answer: 'Approx 4.2A peak.' },
        { question: 'Fully assembled?', answer: 'Yes, shipped on specialized padded pallets.' },
        { question: 'Custom LED colors?', answer: 'Addressable RGB strips with internal controller.' }
      ],
      ctaText: 'Get Wholesale Quote',
      seo: {
        metaTitle: '43" Slant Top Curved Skill Cabinet | VIP Shell',
        metaDescription: 'Shop the most ergonomic slant top cabinet.',
        keywords: ['Slant Top Skill Cabinet']
      }
    }
  },
  /* --- 5. 21.5" 双屏机柜 --- */
  {
    id: 'vertical-dual-screen-cabinet',
    name: '21.5" Dual Screen Vertical Skill Cabinet (Metal Shell)',
    category: 'cabinet_only', 
    description: 'The industry standard for Link-style games with dual PCAP touchscreens.',
    imageUrl: '/images/21-dual-screen.jpg', 
    features: ['Dual 21.5" FHD Screens', 'Halo LED Lighting'],
    tankPage: {
      headline: 'The Ultimate Vertical Cabinet for Link Games',
      subHeadline: 'Dominate your territory with the "Vegas-Grade" metal cabinet.',
      painPoints: [{ icon: 'Monitor', title: 'Touch Failures', description: 'Sealed PCAP glass.' }],
      technicalSpecs: [{ label: 'Displays', value: '2x 21.5" FHD IPS' }],
      comparison: { competitorLabel: 'Generic', rows: [{ feature: 'Security', us: 'Steel Body', them: 'Wood' }] },
      buyerGuide: [{ title: 'Harness', content: 'Pre-wired with 36/10 pin.' }],
      faqs: [
        { question: 'Game included?', answer: 'No, shell only.' },
        { question: 'Banilla compatible?', answer: 'Yes, industry standard 36/10 pin.' },
        { question: 'Shipping cost?', answer: 'Fits 4 units per pallet.' },
        { question: 'Warranty?', answer: '1-year.' },
        { question: 'Custom branding?', answer: 'Available on request.' },
        { question: 'Dimensions?', answer: '72" H x 23" W.' }
      ],
      ctaText: 'Get Wholesale Pricing',
      seo: { metaTitle: '21.5" Dual Screen Cabinet', metaDescription: 'Dual screen shells.', keywords: ['dual screen cabinet'] }
    }
  }
];

// --- 以下内容保持 getBlogs 和 getSolutions 不变 ---
export const getBlogs = (lang: LanguageCode): BlogPost[] => [
  /* 你的博客内容 */
];

export const getSolutions = (lang: LanguageCode): Solution[] => [
  /* 你的解决方案内容 */
];
