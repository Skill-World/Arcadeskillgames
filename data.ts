// src/data.ts
import { Product, BlogPost, Solution, LanguageCode } from './types';
import { t } from './utils/i18n';

export const getProducts = (lang: LanguageCode): Product[] => [
  {
    id: '4K-Titan-Vertical-Skill-43-cabinet',
    name: '43" 4K Titan Vertical Skill Cabinet (Empty Shell)',
    category: 'cabinet_only',
    description: 'Premier 43-inch 4K UHD gaming cabinet shell. Designed for maximum player engagement with addressable RGB Halo lighting and industrial-grade steel construction.',
    imageUrl: 'https://picsum.photos/800/1200?random=43', // 建议替换为真实的43寸立式机图片
    features: ['43" 4K UHD PCAP Touch', 'Addressable LED Halo Lighting', '1.2mm Cold Rolled Steel', '36/10 Pin Pre-Wired'],
    
    // 🔥 坦克页深度内容升级
    tankPage: {
      headline: 'Dominating Revenue: The 43" 4K Vertical Titan Cabinet',
      subHeadline: 'Why settle for 1080P? Give your players the immersive experience they demand and watch your location revenue skyrocket.',
      
      // ✅ 痛点分析
      painPoints: [
        { 
          icon: 'ShieldAlert', 
          title: 'Physical Security Issues', 
          description: 'Standard wooden cabinets are easily breached. Our 1.2mm laser-cut steel body with a triple-locking bar is built to withstand high-traffic environments.' 
        },
        { 
          icon: 'Monitor', 
          title: 'Unresponsive Touchscreens', 
          description: 'Say goodbye to "ghost touches." Our industrial PCAP screens remain accurate even after 50 million taps, reducing downtime significantly.' 
        },
        { 
          icon: 'Zap', 
          title: 'Complex Maintenance', 
          description: 'Minutes lost are dollars lost. Our "Easy-Access" swing-out door allows you to swap game boards or clear bill jams in under 60 seconds.' 
        }
      ],

      // ✅ 详细参数
      technicalSpecs: [
        { label: 'Monitor', value: '43-inch 4K UHD (3840 x 2160) Industrial LCD' },
        { label: 'Touch Type', value: '10-Point Capacitive (PCAP) with 3mm Tempered Glass' },
        { label: 'Cabinet Material', value: '1.2mm Cold Rolled Steel + UV Resistant Powder Coat' },
        { label: 'Lighting', value: 'Smart Addressable RGB LED (Sync-Ready)' },
        { label: 'Power Supply', value: 'Pre-installed 450W Gaming Grade PSU' },
        { label: 'Compatibility', value: 'Plug-and-Play for 36/10 Pin Nudge Boards' }
      ],

      // ✅ 竞品对比
      comparison: {
        competitorLabel: 'Standard 43" Import Cabinets',
        rows: [
          { feature: 'Resolution', us: 'True 4K Ultra HD', them: '1080P Upscaled' },
          { feature: 'Touch Tech', us: 'Sealed PCAP (Anti-Dust)', them: 'Exposed IR Frame' },
          { feature: 'Wiring', us: 'Labeled UL Copper Wire', them: 'Non-labeled Generic Mix' }
        ]
      },

      // ✅ 买家指南
      buyerGuide: [
        { 
          title: 'Step 1: Check your Game Dimensions', 
          content: 'Ensure your game board supports 4K resolution output via HDMI for the best visual results. We can provide converters if needed.' 
        },
        { 
          title: 'Step 2: Peripheral Selection', 
          content: 'This shell is pre-punched for ICT A6/PA7 and Pyramid 7600. For MEI acceptors, please request a custom faceplate.' 
        }
      ],

      // ✅ 成功案例
      caseStudy: {
        title: '40% Growth in C-Store Revenue',
        content: '"We replaced three 21-inch units with two of these 43-inch Titans. The footprint stayed the same, but our weekly hold increased by 40% because people simply prefer the big screen."',
        author: 'David K., Route Distributor'
      },

      // ✅ FAQ
      faqs: [
      { 
        question: 'How do I adjust the hold/payout percentage on this unit?', 
        answer: 'Hold percentages are controlled via your game board settings. Our pre-wired 36/10 harness includes a service button inside the door that grants you instant access to the on-screen setup menu for adjustments.' 
      },
      { 
        question: 'Is the 4K monitor compatible with older game boards?', 
        answer: 'Yes. Our 43" monitor includes an industrial scaler that automatically detects and optimizes signals from 1080P, 720P, and even legacy VGA boards, ensuring no stretching or distortion.' 
      },
      { 
        question: 'What are the power requirements for a 43-inch cabinet?', 
        answer: 'A single Titan 43" cabinet draws roughly 350-400W during peak play. We recommend a dedicated 15A or 20A circuit for every 3-4 machines to maintain electrical safety and prevent interference.' 
      },
      { 
        question: 'How durable is the touchscreen glass in high-traffic areas?', 
        answer: 'The screen is protected by 3mm tempered, chemically-strengthened glass. It is anti-glare, anti-fingerprint, and rated for 50 million+ touches—designed specifically for unattended public venues.' 
      },
      { 
        question: 'Does the LED Halo lighting sync with the game play?', 
        answer: 'Yes! The addressable RGB Halo lighting can be connected directly to your game board\'s LED header, allowing the colors to change and flash in sync with wins, bonuses, and attract modes.' 
      },
      { 
        question: 'What is the shipping weight and how many fit on a pallet?', 
        answer: 'Each Titan 43" cabinet weighs approx 145 lbs (66kg). We ship them fully assembled on standard pallets. For maximum shipping efficiency, we can fit 2 units per pallet for LTL freight.' 
      }
      ],

      // ✅ 交互与 SEO
      ctaText: 'Get Wholesale Quote Today',
      pdfUrl: '/downloads/titan-43-specs.pdf',
      
      seo: {
        metaTitle: '43" Vertical Skill Game Cabinet | 4K Touch Gaming Shell',
        metaDescription: 'Shop our wholesale 43-inch vertical skill gaming cabinets. Factory direct metal shells with 4K UHD PCAP touchscreens. Perfect for Nudge and Skill games.',
        keywords: [
          '43 Inch Vertical Skill Cabinet',
          '4K Touch Screen Gaming Shell',
          'Wholesale Nudge Game Cabinets',
          'Empty Arcade Cabinet Manufacturer'
        ]
      }
    }
  },
{
  id: 'j-curve-43-cabinet',
  name: '43" J-Curve 4K Elite Skill Cabinet (Empty Shell)',
  category: 'cabinet_only',
  description: 'The ultimate immersive experience for premium venues. Features a massive 43-inch J-Curved 4K display with high-fidelity PCAP touch and dynamic sync-lighting.',
  imageUrl: 'https://picsum.photos/800/1200?random=431', // 建议替换为真实的 J-Curve 机柜图
  features: ['43" 4K J-Curve Display', 'Pro-Grade PCAP Multi-Touch', 'Sync-LED RGB Lighting', 'Dual-Lock Security Body'],
  
  tankPage: {
    headline: 'Redefine Your Revenue with the 43" J-Curve 4K Elite',
    subHeadline: 'Elevate your route from "Basic" to "Premium". The J-Curve design is proven to increase play time by 30% through superior ergonomics and immersion.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Monitor', 
        title: 'Glare & Reflection Issues', 
        description: 'Traditional flat screens suffer from harsh overhead lighting reflections. Our J-curve design and AG coating eliminate glare, keeping the focus on the game.' 
      },
      { 
        icon: 'LayoutGrid', 
        title: 'Outdated Aesthetic', 
        description: 'Old wooden cabinets fail to attract younger, tech-savvy players. The Titan J-Curve offers a futuristic, casino-grade aesthetic that demands attention.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Screen Vulnerability', 
        description: 'Most curved screens are fragile. We use 3mm chemically-strengthened glass with a Mohs hardness of 7H to withstand the toughest locations.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Monitor Type', value: '43" J-Curve 4K UHD Industrial LED' },
      { label: 'Curvature Rate', value: 'R1500 Optimized for Eye-Comfort' },
      { label: 'Touch System', value: 'Projected Capacitive (PCAP) with <5ms Response' },
      { label: 'Chassis Material', value: '1.2mm Cold Rolled Steel (Reinforced Structure)' },
      { label: 'Audio System', value: 'Dual 20W Full-Range Speakers + Dedicated Subwoofer' },
      { label: 'Wiring', value: 'Pre-wired 36/10 Pin + 3x Serial Ports + LAN' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Flat 43" Imports',
      rows: [
        { feature: 'Visual Immersion', us: 'J-Curve 1500R (High)', them: 'Flat Panel (Low)' },
        { feature: 'Glass Durability', us: '3mm Tempered PCAP', them: '1.5mm Generic Glass' },
        { feature: 'Lighting Sync', us: 'Software-Integrated RGB', them: 'Static LED Strips' }
      ]
    },

    // ✅ 4. 买家指南
    buyerGuide: [
      { 
        title: 'Monitor Calibration', 
        content: 'Our J-Curve screens are factory-calibrated for high brightness. Ensure your game board supports 4K resolution to take full advantage of the pixel density.' 
      },
      { 
        title: 'Power Distribution', 
        content: 'Due to the large 4K panel and audio sub-woofer, this unit draws peak 4.5A. Use a surge-protected power strip for high-density deployments.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Luxury Lounge Transition Success',
      content: '"We replaced six 21-inch units with four of these J-Curve Elites in our lounge area. The collection doubled within the first month because players felt they were getting a high-end experience worth their time."',
      author: 'Mark S., Vending Route Owner'
    },

    // ✅ 6. 扩展 FAQ (6条)
    faqs: [
      { 
        question: 'What is the difference between J-Curve and C-Curve?', 
        answer: 'J-Curve features a straight lower section and a curved top, making it ideal for vertical skill games where the main interface is at eye level. C-Curve is fully curved and typically used for specific cinematic titles.' 
      },
      { 
        question: 'Can the LED lighting be turned off or changed?', 
        answer: 'Yes. The RGB Halo is controlled by an internal remote or can be synced via software to match your specific branding or game theme.' 
      },
      { 
        question: 'Does the curved screen require special mounting?', 
        answer: 'No. The monitor is securely integrated into our custom steel chassis. The entire cabinet is as stable as any standard upright unit.' 
      },
      { 
        question: 'Is this cabinet compatible with Link-style games?', 
        answer: 'Absolutely. It is specifically designed to handle the high-resolution graphics of modern "Link" and "Fusion" style skill games.' 
      },
      { 
        question: 'What happens if the glass is damaged?', 
        answer: 'The glass is modular. Unlike cheap imports, you can replace the PCAP touch glass assembly without replacing the entire 4K panel, saving you $500+ in repairs.' 
      },
      { 
        question: 'How is the unit shipped safely?', 
        answer: 'We use heavy-duty double-layered pallets with custom foam inserts for the curved section. Shipping damage rate is less than 0.5%.' 
      }
    ],

    // ✅ 7. 互动与 SEO
    ctaText: 'Inquire for Elite Pricing',
    pdfUrl: '/downloads/elite-43-jcurve.pdf',
    
    seo: {
      metaTitle: '43" J-Curve 4K Elite Skill Cabinet | Immersive Arcade Shell',
      metaDescription: 'Maximize venue revenue with the 43-inch J-curve curved skill game cabinet. 4K resolution, PCAP touch, factory-direct wholesale pricing for operators.',
      keywords: [
        '43 Inch Curved Skill Cabinet',
        'J-Curve Arcade Machine Shell',
        'Curved Touch Screen Gaming Cabinet',
        'High-end Skill Game Cabinet'
      ]
    }
  }
},
{
  id: 'slant-top-43-curved',
  name: '43" 4K Slant Top Curved Skill Cabinet (Empty Shell)',
  category: 'cabinet_only',
  description: 'The ultimate luxury ergonomic gaming shell. 4K J-Curve display with a slant-top design optimized for high-end VIP lounges and long-session play.',
  imageUrl: '/images/slant-top-43.jpg', 
  features: ['43" 4K Curved PCAP Touch', 'Ergonomic Slant-Top Design', 'Premium 2.1 Sound System', 'Anti-Pry 1.2mm Steel Body'],
  
  tankPage: {
    headline: 'High-End Comfort, Higher Revenue: The Slant Top 4K Elite',
    subHeadline: 'Upgrade your route with the most ergonomic cabinet in the industry. Designed to keep players comfortable and engaged for hours.',
    
    // ✅ 痛点分析
    painPoints: [
      { 
        icon: 'Armchair', 
        title: 'Player Fatigue', 
        description: 'Standard upright cabinets cause neck strain over time. Our slant-top angle is mathematically designed for peak ergonomic comfort.' 
      },
      { 
        icon: 'Eye', 
        title: 'Light Reflection', 
        description: 'Glossy flat screens in gas stations create blinding glare. The R1500 curve and AG coating ensure a perfect view from any sitting position.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Security Risk', 
        description: 'Generic cabinets lack internal protection. Our shell features a secondary internal vault for game boards and cash boxes.' 
      }
    ],

    // ✅ 详细参数
    technicalSpecs: [
      { label: 'Monitor', value: '43" 4K UHD J-Curve Industrial Display' },
      { label: 'Ergonomics', value: '15-Degree Slant-Top Operating Surface' },
      { label: 'Touch Panel', value: 'Zero-Bezel PCAP Multi-Touch (3mm Tempered)' },
      { label: 'Audio', value: 'Built-in 2.1 Channel Stereo with Bass Subwoofer' },
      { label: 'Wiring', value: 'Pre-wired 36/10 Pin Nudge Harness + LAN Support' },
      { label: 'Security', value: 'Dual High-Security Tubular Locks' }
    ],

    // ✅ 竞品对比
    comparison: {
      competitorLabel: 'Standard Upright Cabinets',
      rows: [
        { feature: 'Player Comfort', us: 'High (Sit-Down Slant)', them: 'Low (Standing/Bar Stool)' },
        { feature: 'Display Quality', us: '4K Curved J-Type', them: '1080P Flat Panel' },
        { feature: 'Body Build', us: 'Automotive Grade Steel', them: 'Thin Iron or Wood' }
      ]
    },

    // ✅ 买家指南
    buyerGuide: [
      { 
        title: '1. Venue Floor Planning', 
        content: 'This unit has a larger footprint than upright models (approx 24" deep). Ensure you have adequate aisle space for chairs.' 
      },
      { 
        title: '2. Game Board Sync', 
        content: 'Works best with 4K-ready Link and Nudge boards. We can provide custom cable adapters for VGA legacy boards upon request.' 
      }
    ],

    // ✅ 成功案例
    caseStudy: {
      title: 'VIP Lounge Hold Increase',
      content: '"We replaced four bar-top units with two 43-inch Slant Tops. Even with fewer machines, our net revenue increased because players stayed at the machines 3x longer than before."',
      author: 'Mark T., Route Distributor'
    },

    // ✅ FAQ (6条)
    faqs: [
      { 
        question: 'Does it come with the bill acceptor?', 
        answer: 'No, this is an empty shell. It is pre-cut for ICT and Pyramid validators. We can pre-install them for a surcharge.' 
      },
      { 
        question: 'Is the screen glass replaceable?', 
        answer: 'Yes, the 3mm PCAP touch glass is modular and can be replaced independently of the 4K panel if damaged.' 
      },
      { 
        question: 'Can I use a Link board in this cabinet?', 
        answer: 'Yes, the high-resolution vertical 4K screen is ideal for modern Link titles. The wiring is fully compatible.' 
      },
      { 
        question: 'What is the power draw?', 
        answer: 'Approx 4.2A peak including screen, LED lighting, and sound system. We recommend a surge-protected outlet.' 
      },
      { 
        question: 'Is shipping fully assembled?', 
        answer: 'Yes, we ship these units fully assembled on specialized foam-padded pallets to prevent any damage to the curved glass.' 
      },
      { 
        question: 'Can the LED colors be customized?', 
        answer: 'The RGB strips are addressable. You can use the internal controller to set any solid color or sync them to the game music.' 
      }
    ],

    // ✅ SEO 与交互
    ctaText: 'Get Wholesale Quote',
    pdfUrl: '/downloads/slant-top-43-specs.pdf',
    
    seo: {
      metaTitle: '43" Slant Top Curved Skill Cabinet | Premium VIP Gaming Shell',
      metaDescription: 'Shop the most ergonomic 43-inch curved slant top skill game cabinet. Factory direct pricing for route operators. 4K UHD PCAP touch and steel body.',
      keywords: [
        'Slant Top Skill Cabinet',
        '43 Inch Curved Gaming Shell',
        'Professional Arcade Housing Wholesale',
        'VIP Lounge Gaming Cabinet'
      ]
    }
  }
},
{
  id: 'vertical-43-cabinet-pro',
  name: '43" 4K Vertical Elite Skill Cabinet (Empty Shell)',
  category: 'cabinet_only',
  description: 'The definitive 43-inch vertical gaming platform. A seamless 4K visual experience designed for Link and Nudge games. Built for durability and high-impact visual attraction.',
  imageUrl: '/images/vertical-43-pro.jpg', // 建议在 public/images/ 放入图片
  features: ['43" 4K Vertical UHD Display', 'Industrial PCAP Touchscreen', 'Custom RGB Side Lighting', 'Heavy-Duty 1.2mm Steel Shell'],
  
  tankPage: {
    headline: 'Upgrade to 4K: The Future of High-Yield Skill Gaming',
    subHeadline: 'Dominate your location with the 43" Vertical Elite. Engineered for the professional route operator who refuses to compromise on security and player experience.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Monitor', 
        title: 'Screen Lag and Mis-touches', 
        description: 'Cheaper IR frames struggle with lighting interference. Our sealed PCAP touch technology ensures 100% accuracy, essential for skill-based "Nudge" actions.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Vulnerability to Theft', 
        description: 'Standard cabinets use thin metal or wood. Our cabinet features a 1.2mm reinforced steel body with a triple-point locking bar to prevent unauthorized access.' 
      },
      { 
        icon: 'Zap', 
        title: 'Maintenance Complexity', 
        description: 'Cramped interiors lead to wiring errors and overheating. We provide a spacious internal layout with pre-labeled 36/10 pin harnesses for 5-minute board swaps.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Monitor Size', value: '43" Diagonal Vertical (Portrait Mode)' },
      { label: 'Resolution', value: '3840 x 2160 UHD (4K) Industrial IPS' },
      { label: 'Touch System', value: '10-Point PCAP Multi-Touch (3mm Tempered)' },
      { label: 'Body Construction', value: '1.2mm Cold Rolled Steel with Powder Coat' },
      { label: 'Cooling System', value: 'Dual 120mm Silent Ball-Bearing Fans' },
      { label: 'Pre-Wiring', value: 'Standard 36/10 Pin + Service/Volume Buttons' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard 21.5" or Generic 43" Imports',
      rows: [
        { feature: 'Visual Real Estate', us: '100% 4K Vertical Surface', them: 'Dual 21" or 1080P Stretched' },
        { feature: 'Body Material', us: 'Industrial Grade Steel', them: 'Plastic / Thin Aluminum' },
        { feature: 'Technical Support', us: 'Lifetime Component Access', them: 'No After-Sales Parts' }
      ]
    },

    // ✅ 4. 买家指南
    buyerGuide: [
      { 
        title: 'Choosing Your Board', 
        content: 'This cabinet is optimized for 4K. Ensure your game board (Link or Nudge) supports HDMI output at 3840x2160 for the sharpest graphics and highest player attraction.' 
      },
      { 
        title: 'Customizing Your Branding', 
        content: 'We offer custom acrylic headers and side panel decals for bulk orders. Contact us to get your logo pre-installed before shipping.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Location Profit Growth of 48%',
      content: '"We swapped out four old 21-inch machines for three of these 43-inch Elites in our Pennsylvania route. The weekly hold increased by 48% because players gravitated toward the high-definition visuals and comfortable screen height."',
      author: 'Chris L., Master Route Operator'
    },

    // ✅ 6. 扩展 FAQ (6条)
    faqs: [
      { 
        question: 'Does the cabinet come with a bill acceptor pre-installed?', 
        answer: 'This is an "Empty Shell" product. It is pre-punched for ICT A6, PA7, and Pyramid 7600. We can pre-install your choice of acceptor for an additional fee upon request.' 
      },
      { 
        question: 'What is the standard warranty on the 43" monitor?', 
        answer: 'We provide a 1-year factory warranty on the 4K display and touch controller. Replacement parts are stocked in our US-based distribution centers for fast shipping.' 
      },
      { 
        question: 'Can I use my existing 36/10 pin game board?', 
        answer: 'Yes! The internal harness is 100% compatible with industry-standard 36/10 pin connectors used in most Nudge and Skill titles.' 
      },
      { 
        question: 'Is the monitor visible from wide angles?', 
        answer: 'We use premium IPS panels with 178/178 degree viewing angles. This ensures the game looks vibrant and sharp to spectators from all sides of the location.' 
      },
      { 
        question: 'How many units fit in a standard LTL shipment?', 
        answer: 'We can fit 2 fully assembled 43" units per standard double pallet. For wholesale orders of 10+ units, we optimize freight for the lowest possible per-unit cost.' 
      },
      { 
        question: 'Are custom LED colors available?', 
        answer: 'The side RGB lighting is addressable. You can change the lighting patterns and colors to match your specific branding using the internal remote controller.' 
      }
    ],

    // ✅ 7. 互动与 SEO
    ctaText: 'Get Wholesale Quote',
    pdfUrl: '/downloads/elite-43-vertical-specs.pdf',
    
    seo: {
      metaTitle: '43" Vertical Skill Game Cabinet | 4K Touch Gaming Shell',
      metaDescription: 'Wholesale 43-inch vertical arcade cabinets. Factory direct metal shells with 4K UHD touchscreens. Perfect for Link and Nudge games. Inquire for pricing.',
      keywords: [
        '43 Inch Vertical Arcade Cabinet',
        'Touch Screen Skill Game Shell',
        'Commercial Amusement Device Housing',
        'Wholesale Gaming Kiosk'
      ]
    }
  }
},
  {
    id: 'vertical-dual-screen-cabinet',
    name: '21.5" Dual Screen Vertical Skill Cabinet (Metal Shell)',
    category: 'cabinet_only', 
    description: 'The industry standard for Link-style skill games. Features dual PCAP touchscreens and immersive LED Halo lighting. Built for route operators who demand durability.',
    imageUrl: '/images/21 inch touch dual screen.jpg', 
    features: ['Dual 21.5" FHD Screens', 'Halo LED Lighting', '1.2mm Cold Rolled Steel', 'Nudge Board Ready'],
    
    // 🔥 坦克页数据更新（替换原有的 tankPage 内容）
    tankPage: {
      headline: 'The Ultimate Vertical Cabinet for High-Performance Routes',
      subHeadline: 'Dominate your territory with the "Vegas-Grade" metal cabinet designed specifically for Nudge and Link skill games. Engineered for 24/7 uptime in smoke shops, gas stations, and game rooms.',
      
      painPoints: [
        { 
          icon: 'ShieldAlert', 
          title: 'Stop Theft & Break-ins', 
          description: 'Standard wood cabinets are a security risk. Our cabinet uses 1.2mm Cold Rolled Steel with a 3-point locking bar system that makes prying virtually impossible.' 
        },
        { 
          icon: 'Monitor', 
          title: 'Eliminate Touch Failures', 
          description: 'Cheap IR screens drift and fail in dusty environments. We use sealed PCAP (Projected Capacitive) Touch glass—the same tech found in casino slots—for pixel-perfect accuracy.' 
        },
        { 
          icon: 'Zap', 
          title: 'Plug-and-Play Wiring', 
          description: 'Don\'t waste hours soldering. Every cabinet comes pre-harnessed with labeled 36/10 Pin connectors (Nudge Standard) and includes drops for Bill Acceptors and Printers.' 
        }
      ],

      technicalSpecs: [
        { label: 'Dual Displays', value: '2x 21.5" FHD (1920x1080) IPS Panels' },
        { label: 'Touch System', value: 'PCAP Multi-Touch (Chemically Bonded Glass)' },
        { label: 'Construction', value: '1.2mm Industrial Steel + Powder Coat' },
        { label: 'Lighting', value: 'App-Controlled RGB Halo (Syncs to Game)' },
        { label: 'IO Interface', value: '36/10 Pin Nudge Harness / SAS Ready' },
        { label: 'Dimensions', value: '72" (H) x 23" (W) x 20" (D) - Slim Footprint' }
      ],

      comparison: {
        competitorLabel: 'Generic Imports',
        rows: [
          { feature: 'Touch Response', us: '< 5ms (PCAP)', them: '> 20ms (IR Frame)' },
          { feature: 'Security', us: 'Steel Drill-Proof Body', them: 'Plywood / Particle Board' },
          { feature: 'Warranty', us: '1 Year Full Replacement', them: 'None / DOA Only' }
        ]
      },

      buyerGuide: [
        { 
          title: '1. Verify Your Game Board Connection', 
          content: 'Before ordering, check if your game board uses a standard 36/10 Pin harness (common for Nudge games) or JAMMA. We can pre-wire the cabinet for either.' 
        },
        { 
          title: '2. Select Your Bill Acceptor', 
          content: 'The door is pre-cut to fit standard ICT A6 or Pyramid 7600 bill validators. If you use MEI, let us know so we can include the correct mounting bracket.' 
        },
        { 
          title: '3. Plan Your Floor Space', 
          content: 'At only 23 inches wide, you can fit 4 of these cabinets in the same space as 3 standard wide-bodies. Perfect for maximizing revenue per square foot.' 
        }
      ],

      caseStudy: {
        title: 'Doubled Revenue in 3 Months',
        content: '"I replaced my old wood cabinets with these metal verticals. The LED halo lighting draws people in from the street, and I haven\'t had a single bill jam or screen failure in 90 days. My collections are up 40% purely due to uptime."',
        author: 'Mike D., Master Route Operator'
      },

      faqs: [
        { 
          question: 'Does this cabinet come with the game board included?', 
          answer: 'No, this is a "Shell Only" product. You must install your own game board (PCB). We sell compliant boards separately in our Game Board section, or you can use your own.' 
        },
        { 
          question: 'Is it compatible with Banilla / Fusion games?', 
          answer: 'Yes, the 21.5" vertical screen format and 36/10 pin harness are the industry standard for most Nudge and Skill titles, including popular clones.' 
        },
        { 
          question: 'What is the shipping cost for a pallet?', 
          answer: 'We can fit up to 4 units on a single pallet. Shipping typically ranges from $250-$400 depending on your zone in the USA.' 
        }
      ],

      ctaText: 'Get Wholesale Pricing',
      pdfUrl: '#',
      
      seo: {
        metaTitle: 'Vertical Skill Game Cabinet | 21.5" Dual Screen Metal Housing',
        metaDescription: 'Factory direct vertical skill gaming cabinets. Dual 21.5" touchscreens, metal body, Nudge/Link game compatible. Wholesale empty cabinets for operators.',
        keywords: ['Vertical Skill Game Cabinet', 'Dual Screen Arcade Cabinet', 'Metal Nudge Cabinet', 'Skill Game Machine Shell']
      }
    }
  },
{
  id: 'curved-elite-v2-arc',
  name: '43" 4K Curved Elite Arc Skill Cabinet (Empty Shell)',
  category: 'cabinet_only',
  description: 'The ultimate curved arcade shell optimized for Link games. Features a premium R1500 curvature for maximum player immersion and a space-saving slim profile.',
  imageUrl: 'https://picsum.photos/800/1200?random=110', // 建议在 public/images/ 放入 Model V2 实拍图
  features: ['43" R1500 4K Curved Display', '10-Point Flush PCAP Touch', 'Slim-Profile Metal Body', 'Programmable Side RGB'],
  
  tankPage: {
    headline: 'Maximize Floor Efficiency with the Curved V2 Elite',
    subHeadline: 'Dominate your route with high-impact visuals. Engineered for 24/7 uptime and 30% higher player retention compared to standard flat-screen models.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { icon: 'Monitor', title: 'Glare & Eye Strain', description: 'Standard flat screens cause fatigue in long sessions. Our R1500 curve reduces eye-travel distance, keeping players comfortable and engaged.' },
      { icon: 'ShieldAlert', title: 'Route Security Risks', description: 'Thin casings are a liability. We use 1.2mm automotive-grade steel with a 3-point reinforced locking system to protect your internal assets.' },
      { icon: 'Zap', title: 'Maintenance Downtime', description: 'Every minute the door is open is lost profit. Our quick-access design allows for tool-less peripheral swaps in under 60 seconds.' }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Panel', value: '43" 4K UHD J-Type Curved IPS' },
      { label: 'Curvature Rate', value: 'R1500 (Golden Viewing Curve)' },
      { label: 'Touch Interface', value: 'All-Weather Projected Capacitive (PCAP)' },
      { label: 'Lighting System', value: 'Sync-Addressable LED Strips with Attract Mode' },
      { label: 'Wiring', value: 'Pre-wired 36/10 Pin Standard Harness' },
      { label: 'Cabinet Material', value: 'Reinforced 1.2mm Cold Rolled Steel' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Curved Imports',
      rows: [
        { feature: 'Visual Depth', us: 'R1500 High-Immerse', them: 'R3000 Shallow Curve' },
        { feature: 'Steel Thickness', us: '1.2mm Industrial Grade', them: '0.8mm Thin Sheet' },
        { feature: 'Touch Reliability', us: 'Sealed PCAP (Anti-Dust)', them: 'Exposed IR Frame' }
      ]
    },

    // ✅ 4. 买家指南 (交互：点击表单发送资料)
    buyerGuide: [
      { title: 'Floor Planning Guide', content: 'Our Model V2 has a 10% smaller footprint. Contact us with your venue dimensions for a free CAD layout proposal.' },
      { title: 'Board Synchronization', content: 'For best results, pair with 4K Link-Sync boards. Enter your email below to receive our full compatibility matrix.' }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: '35% Revenue Jump in Multi-Link Route',
      content: '"We swapped five old flat-screen uprights for four Curved V2 Elites. The weekly hold increased by 35% because the machines attracted a much longer dwell time from high-value players."',
      author: 'Master Route Operator, Georgia'
    },

    // ✅ 6. 扩展 FAQ (6条)
    faqs: [
      { question: 'Is the 43" screen native 4K?', answer: 'Yes, it is a native 3840x2160 industrial panel with a built-in scaler for backward compatibility.' },
      { question: 'Can I use ICT or Pyramid bill acceptors?', answer: 'The shell is pre-cut for all major brands including ICT PA7 and Pyramid 7600. Custom faceplates are available.' },
      { question: 'What is the advantage of R1500 vs R3000 curve?', answer: 'R1500 is a tighter curve that matches the natural human eye arc at sitting distance, maximizing the 3D effect.' },
      { question: 'Does it ship fully assembled?', answer: 'Yes, we ship these units fully assembled and palletized to prevent shipping damage to the curved glass.' },
      { question: 'Is the RGB lighting syncable?', answer: 'Yes, the side lights can be controlled by an internal remote or synced to the game board via a dedicated header.' },
      { question: 'Can I replace the touch glass independently?', answer: 'Yes, the PCAP assembly is modular and can be serviced separately from the 4K panel.' }
    ],

    // ✅ 7. 交互与 SEO
    ctaText: 'Request Wholesale Quote',
    pdfUrl: '/downloads/curved-elite-v2-arc-specs.pdf',
    
    seo: {
      metaTitle: '43" Curved Arcade Shell | Wholesale Skill Game Cabinet Model V2',
      metaDescription: 'Shop factory-direct 43-inch curved arcade cabinet shells. 4K UHD resolution, R1500 curvature, and PCAP touch. Optimized for high-engagement skill games.',
      keywords: [
        '43 Inch Curved Arcade Cabinet Shell',
        'Skill Game Machine Hardware Wholesale',
        'Curved Touch Screen Gaming Housing',
        'Model V2 Gaming Cabinet'
      ]
    }
  }
},
{
  id: 'slim-vertical-43-v5',
  name: '43" Slim 4K Vertical Link Cabinet (Empty Shell)',
  category: 'cabinet_only',
  description: 'A space-saving 43-inch vertical gaming shell with an ultra-slim bezel. Engineered for high-density venues to maximize revenue per square foot without compromising visual impact.',
  imageUrl: 'https://picsum.photos/800/1200?random=v5', // 请替换为真实 Model 5 图片
  features: ['Ultra-Slim 24" Chassis', '4K Industrial PCAP Touch', 'Enhanced Vault Security', 'High-Efficiency Airflow'],
  
  tankPage: {
    headline: 'Maximize Your Floor Potential with the V5 Slim Vertical',
    subHeadline: 'Why settle for less? Fit 5 units where you used to fit 4. The V5 is the ultimate choice for high-traffic, limited-space locations.',
    
    // ✅ 痛点分析
    painPoints: [
      { icon: 'Maximize', title: 'Limited Floor Space', description: 'Standard cabinets are too wide for many convenience store layouts. Our V5 Slim chassis allows you to add extra machines to your route.' },
      { icon: 'ShieldAlert', title: 'Physical Security Concerns', description: 'Unattended machines are targets. We use a recessed door system and 1.2mm cold-rolled steel that leaves zero pry points for intruders.' },
      { icon: 'Zap', title: 'Technical Downtime', description: 'Complex wiring ruins productivity. The V5 features a "Slide-and-Lock" harness tray for 30-second logic board installations.' }
    ],

    // ✅ 详细参数
    technicalSpecs: [
      { label: 'Monitor Size', value: '43" Portrait Industrial Display' },
      { label: 'Resolution', value: '3840 x 2160 UHD 4K' },
      { label: 'Chassis Width', value: 'Only 24 Inches (Ultra-Slim Bezel)' },
      { label: 'Touch Coating', value: 'Oleophobic Anti-Fingerprint Layer' },
      { label: 'Cooling', value: 'High-Static Pressure Internal Fans' },
      { label: 'Acceptor Ready', value: 'Pre-punched for ICT PA7 and Pyramid 7600' }
    ],

    // ✅ 竞品对比
    comparison: {
      competitorLabel: 'Standard 43" Vertical Imports',
      rows: [
        { feature: 'Overall Width', us: '24 Inches', them: '28-30 Inches' },
        { feature: 'Touch Reliability', us: 'Nano-Coated PCAP', them: 'Generic IR Frame' },
        { feature: 'Locking System', us: '3-Point Electronic Bolt', them: 'Standard Cam Lock' }
      ]
    },

    // ✅ 买家指南 (互动：点击发送 PDF)
    buyerGuide: [
      { title: '1. Revenue Optimization', content: 'For C-stores, we recommend banking 3 units. Click "Download Layout Guide" to receive a free PDF floor plan via email.' },
      { title: '2. Grounding Requirements', content: 'Always ensure your AC outlet is grounded to protect the high-sensitivity PCAP screen.' }
    ],

    // ✅ 成功案例
    caseStudy: {
      title: 'C-Store Route Revenue Up 22%',
      content: '"By swapping standard cabinets for the V5 Slim, I was able to fit one additional machine into 6 of my gas station locations. My total route revenue jumped 22% immediately."',
      author: 'Kevin L., Route Owner'
    },

    // ✅ FAQ (6条)
    faqs: [
      { question: 'Does it fit standard 36/10 pin boards?', answer: 'Yes, it comes pre-wired with a standard harness compatible with Banilla, Fusion, and most Skill titles.' },
      { question: 'What is the screen response time?', answer: 'The PCAP touch panel has a response time of <8ms, perfect for fast-paced skill games.' },
      { question: 'Can I add a printer?', answer: 'Yes, it includes a pre-cut slot and mounting brackets for the ICT GP-58 or similar thermal printers.' },
      { question: 'Is the monitor 4K native?', answer: 'Absolutely. It is a native 3840x2160 IPS panel with 178-degree viewing angles.' },
      { question: 'How do you ship them?', answer: 'We ship 2 units per double-pallet, fully assembled and wrapped in protective foam to prevent scratches.' },
      { question: 'Are the LED bezels customizable?', answer: 'Yes, the side LED strips are addressable. You can sync them to your game board software.' }
    ],

    // ✅ SEO 与交互
    ctaText: 'Get Quote & Layout PDF',
    pdfUrl: '/downloads/slim-v5-vertical-specs.pdf',
    
    seo: {
      metaTitle: '43" Slim Vertical Arcade Cabinet Shell | Wholesale Skill Game Machine',
      metaDescription: 'Shop the slim 43-inch vertical arcade cabinet shell. 4K UHD touch screen, reinforced security, and compact design for high-density routes.',
      keywords: [
        'Vertical Arcade Cabinet Shell',
        '43 Inch Touch Screen Game Machine Housing',
        'Skill Game Cabinet Wholesale',
        'Slim Arcade Housing Manufacturer'
      ]
    }
  }
},
{
  id: 'vertical-43-aura-v7',
  name: '43" 4K Aura Elite Vertical Skill Cabinet (Model 7)',
  category: 'cabinet_only',
  description: 'The premier choice for high-end routes. Features the signature Aura dynamic lighting system and a native 4K PCAP touch display for maximum player immersion.',
  imageUrl: '/images/model-7-aura.jpg', 
  features: ['43" 4K Ultra-HD Portrait Display', 'Signature Aura RGB Halo Lighting', 'Heavy-Duty 1.2mm Steel Vault Shell', 'Precision 10-Point PCAP Touch'],
  
  tankPage: {
    headline: 'Command Attention, Increase Revenue: The Aura Model 7',
    subHeadline: 'Elevate your location from ordinary to extraordinary. The 43" Aura Series is designed to drive 30%+ higher player retention through immersive 4K visuals and dynamic lighting.',
    
    // ✅ 痛点分析 (Pain Point Section)
    painPoints: [
      { icon: 'Monitor', title: 'Low Player Retention', description: 'Small screens fail to engage players. Our 43" 4K UHD display provides a cinematic experience that keeps players seated and engaged for much longer sessions.' },
      { icon: 'ShieldAlert', title: 'Security Vulnerabilities', description: 'Wooden cabinets are liability magnets. Our Model 7 features a 1.2mm laser-cut steel shell with a triple-locking bar system that renders prying attempts useless.' },
      { icon: 'Zap', title: 'Complicated Maintenance', description: 'Minutes lost are dollars lost. The Aura Series features a quick-swap internal layout with labeled wiring, allowing your team to clear jams or swap boards in under 60 seconds.' }
    ],

    // ✅ 详细参数 (Parameters Section)
    technicalSpecs: [
      { label: 'Monitor', value: '43" 4K UHD (3840 x 2160) Industrial IPS Grade' },
      { label: 'Touch System', value: '10-Point Projected Capacitive (PCAP) with 3mm Tempered' },
      { label: 'Body Build', value: 'Automotive Grade 1.2mm Cold Rolled Steel' },
      { label: 'Lighting', value: 'Aura-Dynamic Programmable RGB (Software Sync Ready)' },
      { label: 'Harnessing', value: 'Standard 36/10 Pin Copper Core with Service Buttons' },
      { label: 'Cooling', value: 'Dual High-Static Pressure Silent Exhaust Fans' }
    ],

    // ✅ 竞品对比 (Comparison Section)
    comparison: {
      competitorLabel: 'Generic 43" Upright Cabinets',
      rows: [
        { feature: 'Display Quality', us: 'True 4K UHD Industrial', them: '1080P Stretched Panel' },
        { feature: 'Touch Type', us: 'Sealed PCAP (Dust-Proof)', them: 'Exposed IR Frame (Sensitive)' },
        { feature: 'Build Material', us: '1.2mm Reinforced Steel', them: '0.8mm Metal or Plywood' }
      ]
    },

    // ✅ 买家指南 (Buyer's Guide Section)
    buyerGuide: [
      { title: 'Choosing Your Peripherals', content: 'The Aura Model 7 is pre-punched for ICT PA7 and Pyramid bill validators. For distributors using MEI Cashflow, please request the custom mounting plate at checkout.' },
      { title: 'Revenue Optimization', content: 'Our "Slim-Fit" chassis allows you to fit 5 units in a standard 10ft bank. Enter your email to get our "Route Layout Efficiency Guide" PDF sent to your inbox instantly.' }
    ],

    // ✅ 成功案例 (Case Study Section)
    caseStudy: {
      title: 'Location Net Rev Rose by 38%',
      content: '"We replaced six bar-top units with four Aura Model 7s. The foot traffic increased significantly as spectators were drawn to the vibrant 4K screens. Our ROI was achieved in record time."',
      author: 'Master Distributor, Georgia Route'
    },

    // ✅ FAQ (6条)
    faqs: [
      { question: 'Is the monitor compatible with 1080P game boards?', answer: 'Yes, the monitor includes an industrial scaler that automatically optimizes 1080P, 720P, and VGA signals for a sharp, clear image.' },
      { question: 'What is the standard warranty coverage?', answer: 'We offer a 1-year factory warranty on the 4K panel and touch assembly. Replacement parts are stocked in our US warehouse for immediate shipping.' },
      { question: 'Does it support Sas or Sas-Link protocols?', answer: 'The cabinet internal harness is sas-ready. We can include the Sas harness adapter upon request for route accounting integration.' },
      { question: 'How is the unit shipped to prevent glass damage?', answer: 'We use double-layered shock-absorbing foam and ship units on specialized heavy-duty pallets to ensure 0% arrival damage.' },
      { question: 'Can the LED Halo colors be customized?', answer: 'Yes, the internal RGB controller allows you to choose between 20 solid colors or dynamic cycles to match your venue\'s branding.' },
      { question: 'What bill validators are pre-wired?', answer: 'The unit comes pre-wired for standard 12V pulse acceptors, including ICT, Pyramid, and MEI series.' }
    ],

    // ✅ SEO 逻辑与 Meta 字段
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/aura-v7-full-specs.pdf',
    
    seo: {
      metaTitle: '43" Vertical Skill Game Cabinet Model 7 | Aura Series Shell',
      metaDescription: 'Shop wholesale 43-inch vertical skill gaming cabinets. Aura series features 4K UHD touchscreens, 1.2mm steel bodies, and dynamic halo lighting. Perfect for route operators.',
      keywords: [
        '43 Inch Vertical Skill Game Cabinet',
        'Vertical Arcade Cabinet Wholesale',
        '4K Skill Machine Housing',
        'Aura Gaming Cabinet Model 7'
      ]
    }
  }
}
];

// ... 下面保持 getBlogs 和 getSolutions 不变 ...
// (请确保你不要把 getBlogs 和 getSolutions 删掉了)

// --- RICH BLOG DATA START ---
export const getBlogs = (lang: LanguageCode): BlogPost[] => [
  {
    id: 'b1',
    slug: 'skill-game-compliance-guide',
    // ✅ 内容营销：解决客户最大的痛点——合法性
    title: 'Distributor Guide: The Legal Difference Between "Skill" and "Chance"',
    excerpt: 'Protect your route. Understand the technical distinction between Nudge/Shooting mechanics and prohibited RNG devices.',
    date: 'Oct 12, 2024',
    author: {
      name: 'Robert Vance',
      role: 'Chief Engineer',
      avatar: 'R',
      bio: 'Robert has spent 25 years designing coin-op hardware. He specializes in regulatory compliance frameworks for US markets.'
    },
    category: 'Compliance',
    readingTime: '8 min read',
    imageUrl: 'https://picsum.photos/1200/600?random=101',
    seo: {
      // ✅ SEO 布局
      metaTitle: 'Skill Game vs. Chance: Legal Compliance Guide for Distributors',
      metaDescription: 'Why Nudge games and Fish tables are legally distinct from casino devices. Understanding the Predominance Test and hand-eye coordination mechanics.',
      keywords: ['skill game compliance', 'nudge mechanics legality', 'predominance of skill', 'amusement device laws', 'PA skill games']
    },
    blocks: [
      {
        type: 'paragraph',
        // ✅ 核心合规文案
        content: 'For distributors, the most common question is: "Is this legal?" The answer lies in the mechanics. Unlike traditional devices where a chip decides the outcome, our <strong>Skill Amusement Devices</strong> require the player to intervene. Whether it is aiming a cannon in a Fish Game or using the Nudge feature to align symbols, the <strong>outcome is controlled by the player\'s action</strong>.'
      },
      {
        type: 'h2',
        content: 'The "Predominance Test"'
      },
      {
        type: 'paragraph',
        content: 'Legal precedents in most jurisdictions rely on the "Predominance Test". Does the player\'s input affect the outcome more than random variables? Our "Nudge" engines are built with this specifically in mind.'
      },
      {
        type: 'table',
        caption: 'Table 1: Feature comparison - Traditional Amusement vs. Skill Amusement',
        content: {
          headers: ['Feature', 'Traditional Arcade', 'Skill Nudge / Reel Game'],
          rows: [
            ['Primary Mechanic', 'Joystick / Button', 'Touchscreen / Nudge Button'],
            ['Outcome Control', 'Physical Physics', 'Logical Puzzle / Reflex'],
            ['Reward Type', 'Tickets / Plush', 'Redemption Points / Cash Value']
          ]
        }
      }
    ]
  },
  {
    id: 'b2',
    slug: 'maintenance-guide-bill-acceptors',
    title: 'Arcade Maintenance: Keeping Bill Validators Running',
    excerpt: 'Reduce downtime on your route. Step-by-step cleaning guides for ICT and Pyramid validators to prevent bill jams.',
    date: 'Sept 28, 2024',
    author: {
      name: 'Tech Support Team',
      role: 'Support',
      avatar: 'T',
      bio: 'Our dedicated factory support team, available 24/7.'
    },
    category: 'Maintenance',
    readingTime: '5 min read',
    imageUrl: 'https://picsum.photos/1200/600?random=102',
    seo: {
      metaTitle: 'Arcade Machine Maintenance: ICT & Pyramid Bill Acceptors',
      metaDescription: 'Reduce downtime on your route. Step-by-step cleaning guides for ICT and Pyramid validators to prevent bill jams and rejection.',
      keywords: ['ICT Bill Acceptor', 'Bill Jam', 'Arcade Maintenance', 'Route Operator Tips'],
      schema: { "@type": "TechArticle" }
    },
    blocks: [
      {
        type: 'paragraph',
        content: 'A jammed bill acceptor means lost revenue. This guide covers the preventative maintenance schedule for the ICT A6 and Pyramid 7600 series validators.'
      },
      {
        type: 'list',
        content: [
          '<strong>2 Flashes:</strong> Stacker Full or Jammed. Check the gear box.',
          '<strong>3 Flashes:</strong> Sensor Dirty. Use compressed air and a specialized cleaning card.'
        ]
      }
    ]
  },
  {
    id: 'b3',
    slug: 'player-psychology-replay-value',
    title: 'The Psychology of Skill Games: Why Players Return',
    excerpt: 'Understanding the difference between "Near Miss" and "Skill Miss". Why players prefer games where their dexterity determines the payout.',
    date: 'Sept 15, 2024',
    author: {
      name: 'Sarah Jenkins',
      role: 'Game Designer',
      avatar: 'S',
      bio: 'Sarah leads the math and logic design team.'
    },
    category: 'Player Psychology',
    readingTime: '6 min read',
    imageUrl: 'https://picsum.photos/1200/600?random=103',
    seo: {
      metaTitle: 'The Psychology of Skill Games: Why Players Return',
      metaDescription: 'Understanding the difference between "Near Miss" and "Skill Miss". Why players prefer games where their dexterity determines the payout.',
      keywords: ['Game Design', 'Player Retention', 'Fish Table Strategy', 'Arcade Psychology', 'Skill Gaming Revenue'],
      schema: { "@type": "Article" }
    },
    blocks: [
      {
        type: 'paragraph',
        content: 'Why do players sit at a <a href="/en/solutions/arcades" class="text-brand-400 hover:underline">Fish Table</a> for 4 hours? The answer lies in the "Illusion of Control" versus "Actual Control". In our games, the control is real.'
      }
    ]
  }
];
// --- RICH BLOG DATA END ---

export const getSolutions = (lang: LanguageCode): Solution[] => [
  {
    id: 'distributors',
    title: t(lang, 'sol.dist.title'),
    targetAudience: t(lang, 'sol.dist.audience'),
    description: t(lang, 'sol.dist.desc'),
    fullDescription: t(lang, 'sol.dist.full'),
    benefits: ['Container-Load Pricing', 'White Label Cabinets', 'Priority Parts Supply'],
    icon: 'Truck',
    recommendedCategory: 'cabinet_only',
    painPoints: [
      { title: 'Supply Chain Instability', description: 'Waiting months for overseas shipments kills momentum.', icon: 'Clock' },
      { title: 'Margin Erosion', description: 'Buying from middlemen cuts into your wholesale profit.', icon: 'TrendingDown' },
      { title: 'Inventory Stagnation', description: 'Generic cabinets with no spare parts catalog mean dead inventory.', icon: 'Wrench' }
    ],
    comparison: {
      competitorLabel: 'Importing Directly',
      rows: [
        { feature: 'Lead Time', us: 'In-Stock US Warehouse', them: '6-8 Weeks Ocean Freight' },
        { feature: 'Support', us: 'English Tech Support', them: 'No Support / Timezone Gap' },
        { feature: 'Warranty', us: '1 Year Comprehensive', them: 'DOA Only' }
      ]
    },
    stats: [
      { value: '40%', label: 'Margin Increase', subtext: 'vs buying from local importers' },
      { value: '24h', label: 'Part Shipping', subtext: 'For critical components' },
      { value: 'OEM', label: 'Branding', subtext: 'Your logo, your boot screen' }
    ],
    buyersGuide: [
      { title: 'Select Form Factor', description: 'Choose between Vertical Metal Cabinets (best for Nudge games) or Fish Table Shells.' },
      { title: 'Define Harness', description: 'We pre-wire for 36/10 Pin or Standard JAMMA based on your game board inventory.' },
      { title: 'Custom Branding', description: 'Submit your logo for custom acrylic headers and side decals.' }
    ],
    faqs: [
      { question: 'What is the MOQ for wholesale pricing?', answer: 'We offer tiered pricing starting at 5 units. Full container pricing applies to orders of 40+ units.' },
      { question: 'Can I buy cabinets without monitors?', answer: 'Yes, we supply "Shell Only" or "Cabinet + Harness" configurations for distributors who source their own screens.' }
    ],
    testimonials: [
      { quote: "Switching to Arcade Skill Games for our cabinet supply stabilized our route growth. No more waiting on containers.", author: "Mike R.", role: "Distributor", location: "Ohio" }
    ],
    seo: {
      metaTitle: 'Wholesale Amusement Machines & Cabinets | Factory Direct Distributor',
      metaDescription: 'Buy amusement cabinets in bulk. We are the OEM manufacturer for skill games, vertical cabinets, and fish tables. Container-load pricing available.',
      keywords: ['wholesale arcade machines', 'arcade cabinet manufacturer', 'bulk skill games', 'buy amusement machines', 'gaming cabinet OEM']
    }
  },
  {
    id: 'game-agents',
    title: t(lang, 'sol.agent.title'),
    targetAudience: t(lang, 'sol.agent.audience'),
    description: t(lang, 'sol.agent.desc'),
    fullDescription: t(lang, 'sol.agent.full'),
    benefits: ['Route Management Tools', 'Location Lock Software', 'Revenue Split Tracking'],
    icon: 'Briefcase',
    recommendedCategory: 'game_board',
    painPoints: [
      { title: 'Location Poaching', description: 'Competitors stealing your best spots by swapping boards.', icon: 'ShieldAlert' },
      { title: 'Data Discrepancies', description: 'Venues under-reporting cash intake.', icon: 'DollarSign' }
    ],
    comparison: {
      competitorLabel: 'Generic Boards',
      rows: [
        { feature: 'Security', us: 'Location Code Lock', them: 'Universal Key' },
        { feature: 'Accounting', us: 'Digital Audit Log', them: 'Analog Meters Only' }
      ]
    },
    stats: [
      { value: '100%', label: 'Route Protection', subtext: 'With software locks' },
      { value: 'Top 3', label: 'Performance', subtext: 'Our math models vs competitors' },
      { value: '24/7', label: 'Uptime', subtext: 'Industrial grade PCBs' }
    ],
    buyersGuide: [
      { title: 'Audit Your Route', description: 'Identify underperforming locations that need a software refresh.' },
      { title: 'Test the Mechanics', description: 'Order a sample kit to verify the skill element matches your market compliance needs.' }
    ],
    faqs: [
      { question: 'Can I reset the board if I move it?', answer: 'Yes, as the master agent, you have a reset key to move boards between locations.' },
      { question: 'Does it support bill acceptors?', answer: 'Our boards support ICT, Pyramid, and MEI bill acceptors via Pulse or RS232.' }
    ],
    testimonials: [
      { quote: "The location lock feature saved my best route from being taken over by a competitor.", author: "Sarah L.", role: "Route Operator", location: "Georgia" }
    ],
    seo: {
      metaTitle: 'Skill Game Route Management Solutions | Secure Nudge Boards',
      metaDescription: 'Protect your route with our location-locked game boards. Advanced accounting features for Route Operators and Master Agents.',
      keywords: ['route operator games', 'skill game route management', 'nudge board location lock', 'arcade route protection']
    }
  },
  {
    id: 'custom-kits',
    title: t(lang, 'sol.custom.title'),
    targetAudience: t(lang, 'sol.custom.audience'),
    description: t(lang, 'sol.custom.desc'),
    fullDescription: t(lang, 'sol.custom.full'),
    benefits: ['Exclusive Math Models', 'Custom Boot Screens', 'Brand Protection'],
    icon: 'Cpu',
    recommendedCategory: 'game_board',
    painPoints: [
      { title: 'Market Saturation', description: 'Everyone has the same "Fire Link" clone.', icon: 'Copy' },
      { title: 'Brand Confusion', description: 'Players don\'t remember generic games.', icon: 'HelpCircle' }
    ],
    comparison: {
      competitorLabel: 'Off-the-shelf Kits',
      rows: [
        { feature: 'Graphics', us: 'Custom Assets', them: 'Stock Assets' },
        { feature: 'Exclusivity', us: 'Territory Lock', them: 'Sold to Everyone' }
      ]
    },
    stats: [
      { value: 'Unique', label: 'IP Ownership', subtext: 'You own the skin' },
      { value: '30%', label: 'Higher Retention', subtext: 'Due to exclusive content' },
      { value: 'R&D', label: 'In-House Team', subtext: '25 years experience' }
    ],
    buyersGuide: [
      { title: 'Concept Phase', description: 'Send us your logo, color palette, and desired theme (e.g. Western, Space).' },
      { title: 'Parameter Tuning', description: 'Select your game difficulty and skill window settings.' }
    ],
    faqs: [
      { question: 'What is the minimum order for custom software?', answer: 'We typically require a commitment of 50-100 license keys for full custom development.' },
      { question: 'Can you modify the payout percentage?', answer: 'Yes, we can hard-code specific hold percentages based on your local regulations.' }
    ],
    testimonials: [
      { quote: "Having our own branded game gave us credibility that generic kits never did.", author: "James T.", role: "Brand Owner", location: "Texas" }
    ],
    seo: {
      metaTitle: 'Custom Arcade Software Development | OEM Skill Games',
      metaDescription: 'Create your own proprietary skill game. We offer custom graphics, math models, and software development for exclusive venue branding.',
      keywords: ['custom arcade software', 'OEM skill games', 'game board development', 'proprietary arcade games']
    }
  },
  {
    id: 'game-rooms',
    // ✅ 避开 Casino，使用 Adult Arcade / Game Room
    title: 'Equipment for Adult Arcades & Game Rooms',
    targetAudience: 'Entertainment Centers',
    description: 'Build a legal skill gaming destination. Linked vertical cabinets and multiplayer fish tables that keep players engaged for hours.',
    fullDescription: 'Modern adult arcades require equipment that offers genuine gameplay depth. Our "Ocean King" style fish tables and Nudge cabinets create a social, competitive environment where players compete against the machine or each other using hand-eye coordination.',
    benefits: ['Multiplayer Social Play', 'Linked Progressive Rewards', 'High-End LED Visuals'],
    icon: 'Gamepad2',
    recommendedCategory: 'complete_machine',
    painPoints: [
      { title: 'Player Boredom', description: 'Standalone machines lack the excitement of linked play.', icon: 'Sleep' },
      { title: 'Visual Clutter', description: 'Mismatched cabinets look unprofessional.', icon: 'LayoutGrid' }
    ],
    comparison: {
      competitorLabel: 'Standard Arcade',
      rows: [
        { feature: 'Community Play', us: 'Linked Progressive', them: 'Standalone Only' },
        { feature: 'Atmosphere', us: 'Premium LED', them: 'Dim/Old Lighting' }
      ]
    },
    stats: [
      { value: '2x', label: 'Revenue', subtext: 'Linked vs Standalone' },
      { value: '55"', label: 'Signage', subtext: 'Overhead Display' },
      { value: 'LED', label: 'Sync Lighting', subtext: 'Attract Mode' }
    ],
    buyersGuide: [
      { title: 'Floor Planning', description: 'Arrange vertical cabinets in banks of 4 or 6 against walls.' },
      { title: 'Central Feature', description: 'Place a Fish Table in the center to drive social traffic.' }
    ],
    faqs: [
      { question: 'How many machines can link together?', answer: 'Our progressive link system supports up to 64 machines on a single local network.' },
      { question: 'Do I need a server?', answer: 'A local management server is included with bank purchases of 8+ units.' }
    ],
    testimonials: [
      { quote: "The linked signage draws people in from the street. It changed the vibe of our room completely.", author: "Elena G.", role: "Venue Owner", location: "Florida" }
    ],
    seo: {
      metaTitle: 'Adult Arcade Machines | Skill Game Room Equipment Manufacturer',
      metaDescription: 'Outfit your game room with compliant skill games. Multiplayer fish arcade tables and vertical nudge cabinets. Direct factory OEM.',
      keywords: ['adult arcade machines', 'skill game room equipment', 'fish table arcade game', 'multiplayer shooting game', 'entertainment center cabinets']
    }
  },
  {
    id: 'arcades',
    title: t(lang, 'sol.arcade.title'),
    targetAudience: t(lang, 'sol.arcade.audience'),
    description: t(lang, 'sol.arcade.desc'),
    fullDescription: t(lang, 'sol.arcade.full'),
    benefits: ['Multiplayer Fish Tables', 'Ticket Redemption', 'Social Gaming'],
    icon: 'Dices',
    recommendedCategory: 'complete_machine',
    painPoints: [
      { title: 'Single Player Limits', description: '1-player games limit revenue throughput.', icon: 'User' },
      { title: 'Maintenance', description: 'Cheap joysticks break constantly.', icon: 'Wrench' }
    ],
    comparison: {
      competitorLabel: 'Claw Machines',
      rows: [
        { feature: 'Players', us: 'Up to 10 Simultaneous', them: '1 Player' },
        { feature: 'Skill Cap', us: 'High Ceiling', them: 'Luck Based' }
      ]
    },
    stats: [
      { value: '10', label: 'Max Players', subtext: 'Per Fish Table' },
      { value: '4K', label: 'Resolution', subtext: '85 inch Screen' },
      { value: 'High', label: 'Social Factor', subtext: 'Group Play' }
    ],
    buyersGuide: [
      { title: 'Space Check', description: 'Ensure you have 10ft x 8ft clearance for an 8-player table.' },
      { title: 'Power Needs', description: 'Dedicated 15A circuit recommended for large LED tables.' }
    ],
    faqs: [
      { question: 'Can these output tickets?', answer: 'Yes, we can install ticket dispensers or integrate with card swipe systems like Embed.' },
      { question: 'Is it suitable for kids?', answer: 'Yes, we have "Ocean Party" themes specifically designed for family-friendly FECs.' }
    ],
    testimonials: [
      { quote: "The fish table is the most profitable square footage in my arcade. It's always full.", author: "Mark D.", role: "FEC Manager", location: "California" }
    ],
    seo: {
      metaTitle: 'Fish Table Arcade Machines | Multiplayer Video Shooting Games',
      metaDescription: 'Buy 4, 6, 8, and 10-player Fish Hunter tables. High-quality screens and durable joysticks for FECs and arcades. Video shooting skill games.',
      keywords: ['fish tables for sale', 'ocean king arcade machine', 'multiplayer shooting arcade', 'fish hunter game', 'video shooting game']
    }
  },
  {
    id: 'gas-stations',
    // ✅ 痛点：被动收入，而不是“赌博机”
    title: 'Automated Amusement Kiosks for C-Stores',
    targetAudience: 'Gas Stations & Convenience Stores',
    description: 'Turn 3sqft of dead floor space into high-margin passive revenue with unattended skill amusement machines.',
    fullDescription: 'Convenience store owners face thin margins on retail items. Our skill-based amusement kiosks provide a new revenue stream that requires zero staff interaction. Unlike prohibited devices, these machines reward player dexterity and mental acuity.',
    benefits: ['100% Passive Revenue', 'Small 20" Footprint', 'Theft-Resistant Steel Body'],
    icon: 'Zap',
    recommendedCategory: 'complete_machine',
    painPoints: [
      { title: 'Low Margins', description: 'Retail products offer pennies in profit.', icon: 'TrendingDown' },
      { title: 'Dead Space', description: 'Unused corners generating zero cash flow.', icon: 'Maximize' }
    ],
    comparison: {
      competitorLabel: 'ATM Machine',
      rows: [
        { feature: 'Revenue', us: 'High Daily Gross', them: 'Fixed Fee ($2-3)' },
        { feature: 'Engagement', us: '15+ Mins Dwell', them: '30 Seconds' }
      ]
    },
    stats: [
      { value: '3 sq ft', label: 'Footprint', subtext: 'Fits anywhere' },
      { value: 'Steel', label: 'Construction', subtext: 'Anti-Theft Bar' },
      { value: '24/7', label: 'Operation', subtext: 'Unattended' }
    ],
    buyersGuide: [
      { title: 'Location', description: 'Place near the ATM or Coffee station for maximum visibility.' },
      { title: 'Security', description: 'Bolt the machine to the floor or wall using pre-drilled holes.' }
    ],
    faqs: [
      { question: 'Does it need an attendant?', answer: 'No, it is fully automated with bill acceptors and thermal printers.' },
      { question: 'How much power does it use?', answer: 'Very little. About the same as a standard PC (300W).' }
    ],
    testimonials: [
      { quote: "I put one next to the ice machine. It pays my utility bill every month.", author: "Raj P.", role: "Owner", location: "Convenience Store" }
    ],
    seo: {
      // ✅ SEO 布局：完全避开 gamble
      metaTitle: 'Gas Station Skill Games | Passive Income Amusement Machines',
      metaDescription: 'Buy compact skill gaming cabinets for gas stations. Legal amusement devices that generate passive income per square foot. Wholesale pricing.',
      keywords: ['gas station skill games', 'c-store amusement machine', 'coin operated skill game', 'passive income kiosk', 'legal skill cabinet']
    }
  },
  {
    id: 'convenience-stores',
    title: t(lang, 'sol.cstore.title'),
    targetAudience: t(lang, 'sol.cstore.audience'),
    description: t(lang, 'sol.cstore.desc'),
    fullDescription: t(lang, 'sol.cstore.full'),
    benefits: ['Countertop Models', 'Impulse Play Design', 'Cash-Handling Secure'],
    icon: 'Store',
    recommendedCategory: 'complete_machine',
    painPoints: [
      { title: 'Limited Floor Space', description: 'No room for full cabinets.', icon: 'Minimize' },
      { title: 'Impulse Sales', description: 'Need to capture loose change.', icon: 'Coins' }
    ],
    comparison: {
      competitorLabel: 'Vending Machine',
      rows: [
        { feature: 'Restock', us: 'Never', them: 'Weekly' },
        { feature: 'Margins', us: '100% (Gross)', them: '30-40%' }
      ]
    },
    stats: [
      { value: 'Zero', label: 'Floor Space', subtext: 'Countertop Unit' },
      { value: 'Fast', label: 'Gameplay', subtext: 'Reaction Based' },
      { value: '$1-20', label: 'Play Range', subtext: 'Flexible' }
    ],
    buyersGuide: [
      { title: 'Counter Check', description: 'Requires 20 inches of counter width.' },
      { title: 'Cash Flow', description: 'Great for recycling small bills from register change.' }
    ],
    faqs: [
      { question: 'Is it heavy?', answer: 'Our countertop units weigh about 45lbs, sturdy but movable.' },
      { question: 'What if it breaks?', answer: 'Modular design allows you to swap parts easily.' }
    ],
    testimonials: [
      { quote: "Perfect for my deli counter. Customers play while waiting for sandwiches.", author: "Tony S.", role: "Deli Owner", location: "NJ" }
    ],
    seo: {
      metaTitle: 'Countertop Skill Games for Delis & Bodegas',
      metaDescription: 'Zero floor space required. High-revenue countertop amusement machines for bodegas, delis, and mini-marts. Capture impulse revenue.',
      keywords: ['countertop gaming machine', 'bartop skill game', 'bodega gaming', 'small footprint arcade']
    }
  },
  {
    id: 'barbershops',
    title: t(lang, 'sol.barber.title'),
    targetAudience: t(lang, 'sol.barber.audience'),
    description: t(lang, 'sol.barber.desc'),
    fullDescription: t(lang, 'sol.barber.full'),
    benefits: ['Monetize Wait Times', 'Compact Vertical Units', 'Silent/Attract Modes'],
    icon: 'Scissors',
    recommendedCategory: 'complete_machine',
    painPoints: [
      { title: 'Boredom', description: 'Customers hate waiting.', icon: 'Clock' },
      { title: 'Revenue Cap', description: 'You can only cut so much hair a day.', icon: 'TrendingUp' }
    ],
    comparison: {
      competitorLabel: 'TV / Magazines',
      rows: [
        { feature: 'Revenue', us: 'Generates Cash', them: 'Cost Only' },
        { feature: 'Engagement', us: 'Active', them: 'Passive' }
      ]
    },
    stats: [
      { value: '20m', label: 'Avg Wait', subtext: 'Monetized time' },
      { value: 'Silent', label: 'Mode', subtext: 'No noise pollution' },
      { value: 'Passive', label: 'Income', subtext: 'No labor needed' }
    ],
    buyersGuide: [
      { title: 'Placement', description: 'Place it visible to the waiting chairs but not blocking the flow.' },
      { title: 'Volume', description: 'Set attract mode to silent so it doesn\'t disturb conversation.' }
    ],
    faqs: [
      { question: 'Is it loud?', answer: 'Volume is fully adjustable. You can have sound only during play.' },
      { question: 'Does it take credit cards?', answer: 'We can install cashless systems upon request.' }
    ],
    testimonials: [
      { quote: "My guys love it. It pays for the shop rent.", author: "Marcus", role: "Barber", location: "Atlanta" }
    ],
    seo: {
      metaTitle: 'Barbershop Arcade Machines | Monetize Waiting Areas',
      metaDescription: 'Turn waiting time into profit. Silent-mode skill games specifically designed for barbershops and salons.',
      keywords: ['barbershop vending machine', 'waiting room entertainment', 'salon passive income', 'arcade for barbershop']
    }
  },
  {
    id: 'tattoo-studios',
    title: t(lang, 'sol.tattoo.title'),
    targetAudience: t(lang, 'sol.tattoo.audience'),
    description: t(lang, 'sol.tattoo.desc'),
    fullDescription: t(lang, 'sol.tattoo.full'),
    benefits: ['Themed Graphics (Dark/Edgy)', 'High Volatility', 'High-Value Customers'],
    icon: 'PenTool',
    recommendedCategory: 'complete_machine',
    painPoints: [
      { title: 'Long Sessions', description: 'Friends waiting for clients get bored.', icon: 'Users' },
      { title: 'Aesthetic Mismatch', description: 'Bright/Cartoonish games ruin the vibe.', icon: 'Palette' }
    ],
    comparison: {
      competitorLabel: 'Standard Games',
      rows: [
        { feature: 'Art Style', us: 'Dark/Gothic', them: 'Cartoon/Cute' },
        { feature: 'Challenge', us: 'Hardcore Skill', them: 'Casual' }
      ]
    },
    stats: [
      { value: 'High', label: 'Transaction', subtext: 'Cash heavy clients' },
      { value: 'Art', label: 'Custom', subtext: 'Matches shop decor' },
      { value: 'Steel', label: 'Finish', subtext: 'Industrial look' }
    ],
    buyersGuide: [
      { title: 'Theme Selection', description: 'Choose our "Dragon" or "Zombie" skill titles.' },
      { title: 'Placement', description: 'Lobby area away from sterile zones.' }
    ],
    faqs: [
      { question: 'Can we wrap the cabinet?', answer: 'Yes, send us your shop artwork for a full vinyl wrap.' },
      { question: 'Is it easy to clean?', answer: 'Glass and metal surfaces are sanitizer friendly.' }
    ],
    testimonials: [
      { quote: "Fits our shop perfectly. Clients dump their change in it.", author: "Viper", role: "Artist", location: "Miami" }
    ],
    seo: {
      metaTitle: 'Tattoo Studio Arcade Machines | Edgy & Gothic Themes',
      metaDescription: 'High-stakes skill games with dark aesthetics (Zombies, Dragons) perfect for tattoo parlors and piercing studios.',
      keywords: ['tattoo shop arcade', 'adult skill games', 'gothic arcade cabinet', 'skill game machine']
    }
  },
  {
    id: 'laundromats',
    title: t(lang, 'sol.laundry.title'),
    targetAudience: t(lang, 'sol.laundry.audience'),
    description: t(lang, 'sol.laundry.desc'),
    fullDescription: t(lang, 'sol.laundry.full'),
    benefits: ['Long Session Times', 'Sit-Down Cabinets', 'Dwell Time Monetization'],
    icon: 'Droplets',
    recommendedCategory: 'complete_machine',
    painPoints: [
      { title: 'Captive Audience', description: 'Customers staring at phones for 45 mins.', icon: 'Smartphone' },
      { title: 'Coin Handling', description: 'You already deal with coins, why not get more?', icon: 'Coins' }
    ],
    comparison: {
      competitorLabel: 'Vending',
      rows: [
        { feature: 'Dwell Time', us: '45 Minutes', them: '1 Minute' },
        { feature: 'Revenue', us: '$$$ / sqft', them: '$ / sqft' }
      ]
    },
    stats: [
      { value: '45m', label: 'Wash Cycle', subtext: 'Play time' },
      { value: 'Sit-Down', label: 'Comfort', subtext: 'Encourages long play' },
      { value: 'Cash', label: 'Ecosystem', subtext: 'Synergy with change machines' }
    ],
    buyersGuide: [
      { title: 'Comfort', description: 'Choose our Sit-Down metal cabinets.' },
      { title: 'Visibility', description: 'Place in line of sight of the washers.' }
    ],
    faqs: [
      { question: 'Are they durable?', answer: 'Yes, built for high-traffic public spaces.' },
      { question: 'Do they take quarters?', answer: 'They can, but bill acceptors generate 5x more revenue.' }
    ],
    testimonials: [
      { quote: "Best addition to my washateria. People stay longer.", author: "Mrs. Kim", role: "Owner", location: "Chicago" }
    ],
    seo: {
      metaTitle: 'Laundromat Gaming Machines | Sit-Down Cabinets',
      metaDescription: 'Monetize the 45-minute wash cycle. Comfortable sit-down skill game cabinets designed for laundromats and washaterias.',
      keywords: ['laundromat arcade games', 'washateria gaming', 'coin op laundry games', 'sit down arcade cabinet']
    }
  },
  {
    id: 'internet-cafes',
    title: t(lang, 'sol.cafe.title'),
    targetAudience: t(lang, 'sol.cafe.audience'),
    description: t(lang, 'sol.cafe.desc'),
    fullDescription: t(lang, 'sol.cafe.full'),
    benefits: ['Diversify Revenue', 'PC-Gamer Friendly', 'Tournament Features'],
    icon: 'Wifi',
    recommendedCategory: 'complete_machine',
    painPoints: [
      { title: 'Low PC Margins', description: 'Rental hourly rates are low.', icon: 'TrendingDown' },
      { title: 'Burnout', description: 'Gamers need a break between matches.', icon: 'Battery' }
    ],
    comparison: {
      competitorLabel: 'PC Rental',
      rows: [
        { feature: 'Margin', us: 'High', them: 'Low ($3/hr)' },
        { feature: 'Turnover', us: 'Fast', them: 'Slow' }
      ]
    },
    stats: [
      { value: 'Diversified', label: 'Income', subtext: 'Not just hourly fees' },
      { value: 'Social', label: 'Hub', subtext: 'Gathering spot' },
      { value: 'Skill', label: 'Overlap', subtext: 'Appeals to gamers' }
    ],
    buyersGuide: [
      { title: 'Zone It', description: 'Create a dedicated "Skill Zone" separate from the PC rows.' },
      { title: 'Network', description: 'Link the machines for a cafe-wide leaderboard.' }
    ],
    faqs: [
      { question: 'Do gamers play these?', answer: 'Yes, skill games appeal to the competitive nature of esports players.' },
      { question: 'How much space?', answer: 'A bank of 4 takes up about the same space as 2 PC desks.' }
    ],
    testimonials: [
      { quote: "It pays the rent. The PC rentals just pay the electric bill.", author: "Alex", role: "LAN Center Owner", location: "Seattle" }
    ],
    seo: {
      metaTitle: 'Internet Cafe Prize Games | Skill Games for LAN Centers',
      metaDescription: 'Supplement your PC rental income with high-margin skill games. Perfect for Cyber Cafes and Esports Lounges.',
      keywords: ['internet cafe gaming', 'cyber cafe amusement machines', 'LAN center monetization', 'esports lounge arcade']
    }
  },
  {
    id: 'lounges',
    title: t(lang, 'sol.lounge.title'),
    targetAudience: t(lang, 'sol.lounge.audience'),
    description: t(lang, 'sol.lounge.desc'),
    fullDescription: t(lang, 'sol.lounge.full'),
    benefits: ['Luxury Finishes', 'Slant-Top Ergonomics', '4K UHD Screens'],
    icon: 'Armchair',
    recommendedCategory: 'complete_machine',
    painPoints: [
      { title: 'Aesthetics', description: 'Cheap machines look bad in nice venues.', icon: 'Eye' },
      { title: 'Comfort', description: 'Standing is not for VIPs.', icon: 'Armchair' }
    ],
    comparison: {
      competitorLabel: 'Standard Bar Top',
      rows: [
        { feature: 'Screen', us: '43" 4K', them: '19" LCD' },
        { feature: 'Comfort', us: 'Leather Armrest', them: 'Hard Plastic' }
      ]
    },
    stats: [
      { value: 'Premium', label: 'Build', subtext: 'Gold/Chrome trim' },
      { value: 'VIP', label: 'Experience', subtext: 'Waiter service ready' },
      { value: '4K', label: 'Visuals', subtext: 'Crystal clear' }
    ],
    buyersGuide: [
      { title: 'Finish', description: 'Match the cabinet trim (Gold/Silver) to your lounge hardware.' },
      { title: 'Seating', description: 'Pair with high-quality swivel chairs.' }
    ],
    faqs: [
      { question: 'Is it classy?', answer: 'Absolutely. Our Slant-Top series looks like furniture, not a toy.' },
      { question: 'Can we customize the screen?', answer: 'Yes, we can add your lounge logo to the attract loop.' }
    ],
    testimonials: [
      { quote: "Our VIPs love it. It fits right in with the bottle service vibe.", author: "Dante", role: "Club Manager", location: "Las Vegas" }
    ],
    seo: {
      metaTitle: 'Luxury Slant-Top Gaming Cabinets | VIP Lounge Equipment',
      metaDescription: 'High-end furniture grade gaming cabinets. 4K screens, gold trim, and leather armrests for VIP lounges and private clubs.',
      keywords: ['slant top amusement cabinet', 'luxury gaming machine', 'vip lounge arcade', 'high end entertainment cabinet']
    }
  }
];
