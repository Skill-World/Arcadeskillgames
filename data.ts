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
},
{
  id: 'fish-table-98-10player',
  name: '98" Deluxe 10-Player Dismantle Table Shell (Empty Cabinet)',
  category: 'cabinet_only',
  description: 'The ultimate revenue engine for large-scale venues. Featuring a massive 98-inch 4K display and a modular dismantle design for easy global shipping and installation.',
  imageUrl: 'https://picsum.photos/1200/800?random=10player', // 建议在 public/images/ 放入 98寸桌机实拍图
  features: ['Industrial 98" 4K UHD Display', '10-Player Modular Design', 'Reinforced 1.5mm Steel Shell', 'Sync-Addressable Halo Lighting'],
  
  tankPage: {
    headline: 'Double Your ROI with the 98" 10-Player Dismantle Elite',
    subHeadline: 'Dominate your venue with a massive 4K visual center-piece. Engineered for route operators who demand maximum player capacity and minimal shipping costs.',
    
    // ✅ 1. 痛点分析 (Pain Points)
    painPoints: [
      { icon: 'Truck', title: 'High Shipping & Entry Costs', description: 'Large 10-player tables are usually expensive to ship and wont fit through standard doors. Our dismantle design reduces shipping volume by 40% and allows for easy installation in any venue without remodeling your entryways.' },
      { icon: 'ShieldAlert', title: 'Physical Security Vulnerabilities', description: 'Wooden cabinets in high-traffic arcades are easy targets for physical tampering. Our machine is constructed from 1.5mm automotive-grade cold-rolled steel with a reinforced vault system to secure your game boards and cash income.' },
      { icon: 'Users', title: 'Stagnant Player Throughput', description: 'Standard 8-player tables limit your peak-hour revenue potential. By adding 2 additional stations in the same footprint, the 10-player Arc Master increases your gross income per square foot by up to 25% during busy weekend shifts.' }
    ],

    // ✅ 2. 详细参数 (Parameters)
    technicalSpecs: [
      { label: 'Display Panel', value: '98" 4K UHD (3840 x 2160) Industrial IPS Grade' },
      { label: 'Player Capacity', value: '10 Stations (Configurable for 4, 6, 8, or 10)' },
      { label: 'Body Construction', value: '1.5mm Reinforced Cold Rolled Steel with Powder Coat' },
      { label: 'Lighting System', value: 'Full-Perimeter Addressable RGB LED (Music Sync Ready)' },
      { label: 'Assembly Type', value: 'Full Dismantle (Modular Body & Monitor Frame)' },
      { label: 'Wiring Harness', value: 'Pre-wired 10-Player Multi-Link Copper Harness' }
    ],

    // ✅ 3. 竞品对比 (Comparison)
    comparison: {
      competitorLabel: 'Standard 8-Player Non-Dismantle Tables',
      rows: [
        { feature: 'Logistics', us: 'Dismantle (Standard Doorway)', them: 'One-Piece (Double Door Required)' },
        { feature: 'Revenue Potential', us: '10 Players (+25% Capacity)', them: '8 Players Max' },
        { feature: 'Shipping Cost', us: 'LTL Modular (Lower)', them: 'Oversized Freight (Higher)' }
      ]
    },

    // ✅ 4. 买家指南 (Interaction Hooks)
    buyerGuide: [
      { title: 'Choosing Your Peripherals', content: 'For a 10-player setup, we recommend the ICT PA7 bill acceptors. Enter your email to download our "10-Player Peripheral Mapping Guide" for optimized station layout and power daisy-chaining.' },
      { title: 'Floor Space Optimization', content: 'The 98" table requires a 12ft x 10ft clearance for comfortable player movement. Click the button below to get a free CAD floor plan layout for your specific room dimensions.' }
    ],

    // ✅ 5. 成功案例 (Case Study)
    caseStudy: {
      title: 'Florida Venue Boosts Revenue by 45%',
      content: '"We replaced two 6-player fish tables with one of these 98-inch 10-player units. Not only did we save on floor space, but the massive 4K screen became a spectator magnet. Total collections for the month rose by 45% as casual observers became regular players."',
      author: 'Rodriguez A., Arcade Operations Manager'
    },

    // ✅ 6. 常见问题 (FAQ - 6条)
    faqs: [
      { question: 'Is the 98" screen native 4K?', answer: 'Yes, it features a native 3840x2160 industrial panel with a 60Hz refresh rate, ensuring that high-speed skill game graphics remain fluid and crisp across the entire massive surface.' },
      { question: 'What is the shipping weight of the modular parts?', answer: 'The total shipping weight is approximately 650 lbs, but since it is dismantled, the heaviest individual component is the 98-inch monitor frame, making it manageable for standard warehouse teams.' },
      { question: 'Does the cabinet support ICT or MEI acceptors?', answer: 'The cabinet is pre-cut with 10 universal faceplates that support ICT, Pyramid, and MEI bill validators. Custom faceplates for ticket printers are available upon request.' },
      { question: 'How do you handle monitor protection?', answer: 'The monitor is protected by 5mm thick chemically-tempered glass that is bonded to the frame to prevent dust and liquid ingress, making it ideal for food-and-drink environments.' },
      { question: 'Can the LED colors be synced to the game?', answer: 'Yes, the RGB controller supports a 12V sync header that connects directly to the game board, allowing the machine to flash or change colors based on wins or attract modes.' },
      { question: 'How much power does the 10-player table draw?', answer: 'The complete setup, including the 98" display and 10 players, draws roughly 750W-800W. We recommend using a surge-protected outlet with a dedicated 20A circuit breaker.' }
    ],

    // ✅ 7. 互动配置与 SEO
    ctaText: 'Get Quote & Floor Plan PDF',
    pdfUrl: '/downloads/10player-98inch-table-specs.pdf',
    
    seo: {
      metaTitle: '10-Player 98" Fish Table Arcade Cabinet | Wholesale Multiplayer Shell',
      metaDescription: 'Shop factory-direct 10-player arcade housing with a massive 98-inch 4K monitor. Dismantle design for reduced shipping costs. Heavy-duty metal construction for skill game routes.',
      keywords: [
        '10 Player Arcade Machine Housing',
        '98 Inch Fish Table Shell',
        'Wholesale Multiplayer Game Cabinet',
        'Multiplayer Skill Game Housing Manufacturer'
      ]
    }
  }
},
{
  id: 'fish-table-86-10player-dismantle',
  name: '86" Deluxe 10-Player Dismantle Table Shell (Empty Cabinet)',
  category: 'cabinet_only',
  description: 'The ultimate visual flagship for high-traffic game rooms. Featuring a massive 86-inch 4K display and a modular dismantle design to reduce shipping and installation costs by 45%.',
  imageUrl: '/images/86-10player-dismantle.jpg', // 建议在 public/images/ 放入对应的86寸机箱图
  features: ['Industrial 86" 4K UHD Display', '10-Player High-Capacity Layout', 'Modular "Dismantle" Structure', 'Reinforced 1.5mm Steel Shell'],
  
  tankPage: {
    headline: 'Dominate Your Venue with the 86" 10-Player Dismantle Titan',
    subHeadline: 'Why sacrifice revenue for space? Our Model 86-D10 combines massive visual impact with a space-efficient modular design that fits through any standard door.',
    
    // ✅ 1. 痛点分析 (Pain Points Section)
    painPoints: [
      { 
        icon: 'Truck', 
        title: 'High Freight & Handling Costs', 
        description: 'Large multiplayer cabinets are usually a shipping nightmare. Our patented dismantle design reduces international freight volume by 45% and allows standard LTL carriers to deliver directly to your venue, saving you thousands in specialized logistics and crane rentals.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Physical Breaches & Theft', 
        description: 'Standard cabinets with simple locks are vulnerable to prying. Our 10-player shell features an internal steel vault system and a secondary locking bar for the 86-inch monitor, ensuring that your logic boards and cash boxes remain secure in unattended high-traffic locations.' 
      },
      { 
        icon: 'Users', 
        title: 'Limited Revenue Throughput', 
        description: '6-player or 8-player tables often result in "waiting lines" during peak hours, which leads to lost collections. By accommodating 10 simultaneous players, the Arc Master increases your gross income per square foot by up to 25% without significantly increasing the floor space footprint.' 
      }
    ],

    // ✅ 2. 详细参数 (Parameters Section)
    technicalSpecs: [
      { label: 'Display Technology', value: '86" 4K UHD (3840 x 2160) IPS Industrial Grade' },
      { label: 'Player Stations', value: '10 Independent Control Decks (Configurable)' },
      { label: 'Body Material', value: '1.5mm Automotive Grade Laser-Cut Cold Rolled Steel' },
      { label: 'Structure Type', value: 'Modular Dismantle (Knock-Down) for Narrow Entry' },
      { label: 'Lighting System', value: 'Programmable RGB Sync-LED with Attract Cycle' },
      { label: 'Glass Protection', value: '5mm Chemically Strengthened Tempered Safety Glass' }
    ],

    // ✅ 3. 竞品对比 (Comparison Section)
    comparison: {
      competitorLabel: 'Generic 86" One-Piece Cabinets',
      rows: [
        { feature: 'Shipping Volume', us: 'Modular (Standard Pallet)', them: 'Oversized (Double Freight)' },
        { feature: 'Door Entry', us: 'Standard Single Door (28")', them: 'Double-Wide Door Only' },
        { feature: 'Body Build', us: '1.5mm Steel Vault', them: '1.0mm or Plywood' }
      ]
    },

    // ✅ 4. 买家指南 (Interactivity: Email for PDF)
    buyerGuide: [
      { 
        title: 'Pre-Order Site Planning', 
        content: 'The Model 86-D10 requires a 12ft x 9ft clearance for optimal player comfort. Enter your email below to receive our "86-Inch Site Preparation Guide" PDF which includes electrical specs and CAD floor layouts.' 
      },
      { 
        title: 'Peripheral Compatibility', 
        content: 'This shell is pre-cut for standard ICT PA7 acceptors. If you use MEI or Global Bill Acceptors, please request our "Universal Faceplate Kit" during the quote phase to ensure a 5-minute install.' 
      }
    ],

    // ✅ 5. 成功案例 (Case Study Section)
    caseStudy: {
      title: 'Location ROI Achieved in 11 Weeks',
      content: '"We swapped out two aging 6-player fish tables for one 86-inch 10-player unit in our Florida FEC. Not only did the floor traffic increase because of the screen size, but the 10-player capacity allowed us to handle peak Friday night rushes that we used to miss out on. The ROI was realized in under 3 months."',
      author: 'A. Miller, Route Operations Manager'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the 86-inch screen a native 4K industrial panel?', answer: 'Yes, we use LG/Samsung industrial panels with a 3840x2160 resolution and 500 nits brightness, ensuring crystal clear graphics and a 178-degree wide viewing angle for all 10 players.' },
      { question: 'What is the shipping lead time for US warehouses?', answer: 'We maintain inventory in our US hubs. Shipping typically takes 3-7 business days via LTL freight. For international orders, sea freight lead time is approximately 25-30 days.' },
      { question: 'Does the cabinet include the game board kit?', answer: 'This product is an "Empty Shell" only. It includes the monitor, wiring, and steel body. You can purchase compatible multiplayer game boards in our Game Kits section separately.' },
      { question: 'How is the power handled for 10 player stations?', answer: 'Every cabinet includes a pre-wired industrial-grade daisy-chain power loom with fused protection for each station, preventing a single short-circuit from bringing down the entire table.' },
      { question: 'Can the LED lighting be customized or turned off?', answer: 'The RGB halo lighting is addressable. You can change colors, patterns, or sync it to the game audio via the internal remote controller or board-link header.' },
      { question: 'Is the monitor glass replaceable if it breaks?', answer: 'Yes, the 5mm tempered glass is modular. We stock replacement glass units in our warehouses for immediate 24-hour dispatch to minimize venue downtime.' }
    ],

    // ✅ 7. 评论版块 (Reviews Section)
    reviews: [
      { author: 'Steve V.', rating: 5, comment: 'The dismantle feature is a lifesaver. We were able to get this huge table into our basement location through a normal door.' },
      { author: 'Mike G.', rating: 5, comment: 'Visual impact is insane. Players gravitate to this over any other machine in the room. Definitely getting another one.' }
    ],

    // ✅ 8. 交互与 SEO 配置
    ctaText: 'Get Quote & Layout Guide',
    pdfUrl: '/downloads/86-10player-dismantle-specs.pdf',
    
    seo: {
      metaTitle: '10 Player Fish Game Housing | 86" Dismantle Arcade Cabinet Shell',
      metaDescription: 'Wholesale 86-inch 10-player multiplayer game table shells. Dismantle design for easy shipping. 4K industrial screen and 1.5mm steel body. Inquire for pricing.',
      keywords: [
        '10 Player Fish Game Housing',
        '86 Inch Multiplayer Game Table Shell',
        'Dismantle Arcade Machine Cabinet',
        'Multiplayer Skill Game Housing Manufacturer'
      ]
    }
  }
},
{
  id: 'fish-table-86-10player-welded',
  name: '86" Deluxe 10-Player Fully Welded Table Shell (Non-Dismantle)',
  category: 'cabinet_only',
  description: 'The definitive high-capacity multiplayer shell. Featuring a massive 86-inch 4K monitor and a fully welded 1.5mm steel body for maximum structural integrity and professional venue aesthetics.',
  imageUrl: 'https://picsum.photos/1200/800?random=10pw', // 建议在 public/images/ 放入产品图
  features: ['Industrial 86" 4K UHD Display', '10-Player Station Capacity', 'Fully Welded 1.5mm Steel Shell', '5mm Tempered Safety Glass'],
  
  tankPage: {
    headline: 'Dominate the Floor with the 86" 10-Player Welded Titan',
    subHeadline: 'Why settle for modular when you can have the strength of a fully welded shell? Engineered for elite venues and the highest possible revenue throughput.',
    
    // ✅ 1. 痛点分析 (Pain Point Section)
    painPoints: [
      { icon: 'Users', title: 'Revenue Bottlenecks', description: 'Standard 6-player tables lead to waiting lines and lost revenue during peak hours. Our 10-player welded titan increases your peak capacity by 25%, ensuring you capture every available dollar in the venue without requiring additional floor space management.' },
      { icon: 'ShieldAlert', title: 'Physical Vulnerability', description: 'Wooden or thin-metal cabinets are easily breached in unattended locations. This unit features a fully welded 1.5mm steel vault system and a secondary locking bar for the massive 86-inch monitor, providing the highest physical security for your logic boards and cash flow.' },
      { icon: 'Wrench', title: 'Structural Degradation', description: 'Dismantle units can rattle and loosen over years of intense public play. Our fully welded automotive-grade steel chassis eliminates structural fatigue, ensuring the machine feels solid and high-end for the life of the product, reducing long-term maintenance costs and technician calls.' }
    ],

    // ✅ 2. 详细参数 (Parameters Section)
    technicalSpecs: [
      { label: 'Display Panel', value: '86" 4K UHD (3840 x 2160) Industrial IPS Grade' },
      { label: 'Player Capacity', value: '10 Dedicated Stations (Configured for 36/10 Pin)' },
      { label: 'Body Material', value: '1.5mm Reinforced Cold Rolled Steel (One-Piece Welded)' },
      { label: 'Glass Safety', value: '5mm Thick Chemically-Tempered Safety Glass' },
      { label: 'Lighting System', value: 'Full-Perimeter Addressable RGB LED (Attract Mode Sync)' },
      { label: 'Wiring Harness', value: 'Industrial-Grade Daisy-Chain Power & 10-Player I/O Loom' }
    ],

    // ✅ 3. 竞品对比 (Comparison Section)
    comparison: {
      competitorLabel: 'Standard 8-Player Dismantle Models',
      rows: [
        { feature: 'Structural Strength', us: 'Max (Fully Welded Chassis)', them: 'Medium (Bolted Joints)' },
        { feature: 'Peak Throughput', us: '10 Players (+25% Capacity)', them: '8 Players Max' },
        { feature: 'Setup Speed', us: 'Instant (No Assembly)', them: 'Slow (2+ Hours Assembly)' }
      ]
    },

    // ✅ 4. 买家指南 (Buyer's Guide)
    buyerGuide: [
      { title: 'Doorway Verification', content: 'As this is a non-dismantle unit, please verify that your location has at least a 34-inch wide doorway to accommodate the cabinet during installation. We recommend commercial double-doors for the easiest access.' },
      { title: 'Floor Space Planning', content: 'Allow for a 12ft x 9ft clearance zone to ensure players can move comfortably around the table. Click the button below to download our full Site Preparation CAD drawing and receive it instantly via email.' }
    ],

    // ✅ 5. 成功案例 (Case Study Section)
    caseStudy: {
      title: 'Location Collects Rose by 45%',
      content: '"We replaced two aging 4-player wooden cabinets with one of these 86-inch 10-player welded units. The visual impact was immediate; foot traffic turned into game time, and the social vibe of 10 people playing together kept customers in the seats 40% longer per session. ROI was hit in 14 weeks."',
      author: 'David K., Multi-Route Operator'
    },

    // ✅ 6. 常见问题 (FAQ Section)
    faqs: [
      { question: 'Does the cabinet ship as a single piece?', answer: 'Yes, this is our "Welded Elite" version, meaning it is shipped fully assembled. This ensures the highest possible structural integrity and eliminates assembly labor for your route technicians.' },
      { question: 'What is the monitor warranty?', answer: 'We provide a comprehensive 12-month factory replacement warranty on the 86-inch 4K panel and its associated driver electronics to ensure your venue experiences zero downtime.' },
      { question: 'Which bill acceptors does it support?', answer: 'The cabinet features 10 universal faceplates pre-cut for ICT PA7 and Pyramid 7600 bill validators. Custom faceplates for ticket printers or MEI units are available for bulk wholesale orders.' },
      { question: 'How is the monitor glass protected?', answer: 'The unit is fitted with a 5mm thick chemically-tempered safety glass cover. It is scratch-resistant and liquid-proof, designed specifically for high-traffic food-and-drink environments.' },
      { question: 'What are the power requirements?', answer: 'The unit draws roughly 6.0A at peak load. We recommend a dedicated 20A circuit with surge protection to handle the display and 10 player touch interfaces safely.' },
      { question: 'How do you prevent shipping damage?', answer: 'We ship every 86-inch welded unit in a custom-built international plywood crate with molded high-density foam inserts, maintaining a near-zero damage rate on LTL shipments across the USA.' }
    ],

    // ✅ 7. 互动配置与 SEO
    ctaText: 'Get Factory-Direct Quote',
    pdfUrl: '/downloads/welded-86-10player-specs.pdf',
    
    seo: {
      metaTitle: '86" 10-Player Fish Table Arcade Cabinet | Wholesale Welded Shell',
      metaDescription: 'Shop factory-direct 10-player arcade housing with a massive 86-inch 4K monitor. Fully welded steel construction for maximum route durability. Inquire for B2B wholesale pricing.',
      keywords: [
        '10 player arcade table housing',
        '86 inch fish game machine shell',
        'wholesale multiplayer amusement cabinet',
        'welded arcade cabinet manufacturer'
      ]
    }
  }
},
{
  id: 'fish-table-65-10player-royal-welded',
  name: '65" Royal 10-Player Fully Welded Table Shell (Non-Dismantle)',
  category: 'cabinet_only',
  description: 'The premier choice for premium venues. Featuring a massive 65-inch 4K monitor and a high-end fully welded 1.5mm steel body for ultimate stability and "Vegas-grade" aesthetics.',
  imageUrl: '/images/65-10player-royal.jpg', // 请在 public/images/ 放入对应的图片
  features: ['65" Industrial 4K UHD Display', 'Royal 10-Player Layout', 'One-Piece Fully Welded Steel', 'Custom dynamic RGB Halo'],
  
  tankPage: {
    headline: 'Royal Prestige, Maximum ROI: The 65" 10-Player Master',
    subHeadline: 'Why settle for modular when you can have the permanence of a Royal welded shell? Engineered for high-traffic routes that demand 24/7 uptime and elite visual impact.',
    
    // ✅ 痛点分析
    painPoints: [
      { icon: 'Users', title: 'Lost Revenue from Waiting lines', description: 'During peak weekend hours, smaller 6-player tables often turn away interested customers. Our 10-player Royal layout increases your peak capacity by 25% or more, ensuring you capture every available dollar on the floor without requiring additional linear wall space.' },
      { icon: 'ShieldAlert', title: 'Security & Structural Weakness', description: 'Wooden or thin-metal housings are prone to structural rattling and are easy targets for tampering. The Royal series features a fully welded 1.5mm steel chassis that provides the highest physical security for your game boards and cash boxes in unattended environments.' },
      { icon: 'Wrench', title: 'Complex Ongoing Maintenance', description: 'Loose joints and complex wiring lead to frequent technician calls. Our one-piece welded design eliminates structural fatigue, while the pre-labeled industrial harnesses allow your team to perform 60-second peripheral swaps to maintain 99% uptime.' }
    ],

    // ✅ 详细参数
    technicalSpecs: [
      { label: 'Display Technology', value: '65" 4K UHD (3840 x 2160) IPS Industrial Grade' },
      { label: 'Player Capacity', value: '10 Independent Stations (36/10 Pin Config)' },
      { label: 'Body Construction', value: '1.5mm Reinforced Cold Rolled Steel (Fully Welded)' },
      { label: 'Glass Interface', value: '5mm Thick Chemically-Tempered Safety Glass' },
      { label: 'Lighting System', value: 'Royal-Sync Addressable RGB LED (Programmable)' },
      { label: 'Security System', value: 'Triple-Point Reinforced Internal Vault Locking' }
    ],

    // ✅ 竞品对比
    comparison: {
      competitorLabel: 'Standard 8-Player Modular Tables',
      rows: [
        { feature: 'Body Rigidity', us: 'Max (One-Piece Welded)', them: 'Medium (Bolted Parts)' },
        { feature: 'Visual Real Estate', us: '100% 4K Industrial 65"', them: 'Generic 55" or 1080P' },
        { feature: 'Service Life', us: '10+ Years (Automotive Steel)', them: '3-5 Years (Plywood/Thin Metal)' }
      ]
    },

    // ✅ 买家指南 (互动：点击发送 PDF)
    buyerGuide: [
      { title: 'Logistics Planning', content: 'As a non-dismantle unit, please ensure your location has a clear 34-inch doorway. We recommend professional white-glove delivery for this 550lb high-value asset.' },
      { title: 'Site Electrical Prep', content: 'Requires a dedicated 20A circuit for optimal performance of the 4K panel and 10 stations. Click the button below to get our full Site Preparation CAD drawing sent to your email.' }
    ],

    // ✅ 成功案例
    caseStudy: {
      title: 'Location Profit Jumped 42%',
      content: '"We replaced two 4-player wood cabinets with one 65-inch 10-player Royal. The social vibe of 10 people playing together kept players in the seats 40% longer. ROI was hit in 12 weeks."',
      author: 'Master Route Operator, Pennsylvania'
    },

    // ✅ FAQ (6条)
    faqs: [
      { question: 'Does the cabinet ship fully assembled?', answer: 'Yes, the Royal Welded edition ships fully assembled and palletized to maintain its superior structural integrity and save you hours of labor.' },
      { question: 'What is the standard warranty on the display?', answer: 'We offer a 12-month factory replacement warranty on the industrial 65-inch 4K panel and its associated driver electronics.' },
      { question: 'Which bill validators are supported?', answer: 'The cabinet features 10 universal faceplates pre-cut for ICT PA7 and Pyramid 7600 series. Custom mounts for MEI are available on request.' },
      { question: 'Is the monitor glass replaceable?', answer: 'Yes, although it is chemically-tempered, the glass is modular and can be replaced independently if damaged in high-traffic venues.' },
      { question: 'Can the LED lighting sync to the game?', answer: 'Yes, the RGB Halo system includes a 12V sync header that connects directly to your game board for dynamic win/loss animations.' },
      { question: 'What is the shipping weight and protection?', answer: 'The unit weighs approx 550 lbs and is shipped in a custom-built international plywood crate with molded foam to ensure 0% arrival damage.' }
    ],

    // ✅ SEO 与 Meta
    ctaText: 'Get Factory Direct Quote',
    pdfUrl: '/downloads/65-10player-royal-specs.pdf',
    
    seo: {
      metaTitle: '10 Player Arcade Cabinet Shell | 65" Royal Welded Fish Table Housing',
      metaDescription: 'Shop factory-direct 10-player Royal arcade housings. 65-inch 4K display, fully welded 1.5mm steel body for maximum durability. Ideal for skill game routes.',
      keywords: [
        '10 Player Arcade Cabinet Shell',
        '65 Inch Fish Table Housing',
        'Commercial Skill Game Cabinet Wholesale',
        'Royal Series Gaming Shell'
      ]
    }
  }
},
{
  id: 'fish-table-86-10player-royal-welded',
  name: '86" Royal 10-Player Fully Welded Table Shell (Non-Dismantle)',
  category: 'cabinet_only',
  description: 'The premier choice for luxury venues. Featuring a massive 86-inch 4K monitor and a high-end fully welded 1.5mm steel body for ultimate stability and "Vegas-grade" aesthetics.',
  imageUrl: '/images/86-10player-royal-welded.jpg', // 请在 public/images/ 放入对应的图片
  features: ['65" Industrial 4K UHD Display', 'Royal 10-Player Layout', 'One-Piece Fully Welded Steel', 'Custom dynamic RGB Halo'],
  
  tankPage: {
    headline: 'Royal Prestige, Maximum ROI: The 86" 10-Player Master',
    subHeadline: 'Why settle for modular when you can have the permanence of a Royal welded shell? Engineered for high-traffic routes that demand 24/7 uptime and elite visual impact.',
    
    // ✅ 痛点分析
    painPoints: [
      { icon: 'Users', title: 'Lost Revenue from Waiting lines', description: 'During peak weekend hours, smaller tables often turn away interested customers. Our 10-player Royal layout increases your peak capacity by 25%, ensuring you capture every available dollar on the floor without requiring additional linear floor space.' },
      { icon: 'ShieldAlert', title: 'Security & Structural Weakness', description: 'Wooden or thin-metal housings are prone to structural rattling and are easy targets for tampering. The Royal series features a fully welded 1.5mm steel chassis that provides the highest physical security for your logic boards and cash boxes in unattended environments.' },
      { icon: 'Wrench', title: 'Complex Ongoing Maintenance', description: 'Loose joints and complex wiring lead to frequent technician calls. Our one-piece welded design eliminates structural fatigue, while the pre-labeled industrial harnesses allow your team to perform 60-second peripheral swaps to maintain 99% uptime.' }
    ],

    // ✅ 详细参数
    technicalSpecs: [
      { label: 'Display Technology', value: '86" 4K UHD (3840 x 2160) IPS Industrial Grade' },
      { label: 'Player Capacity', value: '10 Independent Stations (36/10 Pin Config)' },
      { label: 'Body Construction', value: '1.5mm Reinforced Cold Rolled Steel (Fully Welded)' },
      { label: 'Glass Interface', value: '5mm Thick Chemically-Tempered Safety Glass' },
      { label: 'Lighting System', value: 'Royal-Sync Addressable RGB LED (Programmable)' },
      { label: 'Security System', value: 'Triple-Point Reinforced Internal Vault Locking' }
    ],

    // ✅ 竞品对比
    comparison: {
      competitorLabel: 'Standard 8-Player Modular Tables',
      rows: [
        { feature: 'Body Rigidity', us: 'Max (One-Piece Welded)', them: 'Medium (Bolted Parts)' },
        { feature: 'Visual Real Estate', us: '100% 4K Industrial 86"', them: 'Generic 55" or 1080P' },
        { feature: 'Service Life', us: '10+ Years (Automotive Steel)', them: '3-5 Years (Plywood/Thin Metal)' }
      ]
    },

    // ✅ 买家指南
    buyerGuide: [
      { title: 'Logistics Planning', content: 'As a non-dismantle unit, please ensure your location has a clear 34-inch doorway. We recommend professional white-glove delivery for this 600lb high-value asset.' },
      { title: 'Site Electrical Prep', content: 'Requires a dedicated 20A circuit for optimal performance of the 4K panel and 10 stations. Click the button below to get our full Site Preparation CAD drawing sent to your email.' }
    ],

    // ✅ 成功案例
    caseStudy: {
      title: 'Location Profit Jumped 42%',
      content: '"We replaced two 4-player wood cabinets with one 86-inch 10-player Royal. The social vibe of 10 people playing together kept players in the seats 40% longer. ROI was hit in 14 weeks."',
      author: 'Master Route Operator, Pennsylvania'
    },

    // ✅ FAQ (6条)
    faqs: [
      { question: 'Does the cabinet ship fully assembled?', answer: 'Yes, the Royal Welded edition ships fully assembled and palletized to maintain its superior structural integrity and save you hours of labor.' },
      { question: 'What is the standard warranty on the display?', answer: 'We offer a 12-month factory replacement warranty on the industrial 86-inch 4K panel and its associated driver electronics.' },
      { question: 'Which bill validators are supported?', answer: 'The cabinet features 10 universal faceplates pre-cut for ICT PA7 and Pyramid 7600 series. Custom mounts for MEI are available on request.' },
      { question: 'Is the monitor glass replaceable?', answer: 'Yes, although it is chemically-tempered, the glass is modular and can be replaced independently if damaged in high-traffic venues.' },
      { question: 'Can the LED lighting sync to the game?', answer: 'Yes, the RGB Halo system includes a 12V sync header that connects directly to your game board for dynamic win/loss animations.' },
      { question: 'What is the shipping weight and protection?', answer: 'The unit weighs approx 600 lbs and is shipped in a custom-built international plywood crate with molded foam to ensure 0% arrival damage.' }
    ],

    // ✅ SEO 与 Meta
    ctaText: 'Get Factory Direct Quote',
    pdfUrl: '/downloads/86-10player-royal-welded-specs.pdf',
    
    seo: {
      metaTitle: '10 Player Arcade Table Housing | 86" Royal Welded Fish Table Housing',
      metaDescription: 'Shop factory-direct 10-player Royal arcade housings. 86-inch 4K display, fully welded 1.5mm steel body for maximum durability. Ideal for skill game routes.',
      keywords: [
        '10 Player Arcade Table Housing',
        '86 Inch Fish Table Housing',
        'Commercial Skill Game Cabinet Wholesale',
        'Royal Series Gaming Shell'
      ]
    }
  }
},
{
  id: 'fish-table-86-10player-royal-v2-welded',
  name: '86" Royal V2 10-Player Fully Welded Table Shell (Non-Dismantle)',
  category: 'cabinet_only',
  description: 'The premier luxury flagship for high-end routes. Featuring a massive 86-inch 4K monitor and a high-end fully welded 1.5mm steel body with Halo-Eclipse RGB effects.',
  imageUrl: '/images/86-10player-royal-v2.jpg', // 请在 public/images/ 放入对应的图片
  features: ['Industrial 86" 4K UHD Display', 'Royal V2 10-Player Layout', 'One-Piece Fully Welded 1.5mm Steel', 'Halo-Eclipse RGB Lighting'],
  
  tankPage: {
    headline: 'Elite Visuals, Maximum ROI: The 86" Royal V2 10-Player Master',
    subHeadline: 'Why settle for modular when you can have the structural permanence of a Royal welded shell? Engineered for high-traffic routes that demand zero maintenance and elite impact.',
    
    // ✅ 痛点分析
    painPoints: [
      { 
        icon: 'Users', 
        title: 'Lost Revenue from Seat Bottlenecks', 
        description: 'During peak weekend hours, smaller tables result in customer lines and lost collection opportunities. Our 10-player Royal layout increases your peak capacity by 25%, ensuring you capture every available dollar on the floor without increasing the linear linear wall space requirements.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Security & Structural Vulnerability', 
        description: 'Wooden or thin-metal housings are prone to structural rattling and are soft targets for tampering. The Royal V2 series features a fully welded 1.5mm reinforced steel chassis that provides the highest physical security for your logic boards and cash boxes in high-risk, unattended environments.' 
      },
      { 
        icon: 'Wrench', 
        title: 'Complex Maintenance & Loose Joints', 
        description: 'Joint fatigue and complex wiring lead to frequent, costly technician calls. Our one-piece welded design eliminates structural issues entirely, while the pre-labeled industrial harnesses allow your team to perform 60-second peripheral swaps to maintain 99.9% route uptime.' 
      }
    ],

    // ✅ 详细参数
    technicalSpecs: [
      { label: 'Display Technology', value: '86" 4K UHD (3840 x 2160) IPS Industrial Flagship' },
      { label: 'Player Capacity', value: '10 Dedicated High-Performance Stations' },
      { label: 'Body Construction', value: '1.5mm Automotive Grade Cold Rolled Steel (Full Weld)' },
      { label: 'Glass Interface', value: '5mm Thick Chemically-Tempered Safety Glass Cover' },
      { label: 'Lighting System', value: 'Halo-Eclipse Addressable RGB LED (Remote Sync)' },
      { label: 'Security System', value: 'Triple-Point Reinforced Internal Vault Locking Bar' }
    ],

    // ✅ 竞品对比
    comparison: {
      competitorLabel: 'Generic 8-Player Modular Tables',
      rows: [
        { feature: 'Body Rigidity', us: 'Max (One-Piece Welded)', them: 'Medium (Bolted Parts)' },
        { feature: 'Visual Real Estate', us: '100% 4K Industrial 86"', them: 'Generic 65" or 1080P' },
        { feature: 'Service Life', us: '10+ Years (Automotive Steel)', them: '3-5 Years (Plywood/Thin Metal)' }
      ]
    },

    // ✅ 买家指南 (交互点：下载 PDF)
    buyerGuide: [
      { title: 'Logistics Planning', content: 'As a non-dismantle unit, please ensure your location has a clear 34-inch doorway. We recommend white-glove professional delivery for this 600lb high-value route asset.' },
      { title: 'Site Electrical Prep', content: 'Requires a dedicated 20A circuit for optimal stability of the massive 4K panel and 10 player stations. Click below to get our full Site Preparation CAD drawing and station map.' }
    ],

    // ✅ 成功案例
    caseStudy: {
      title: 'Location Net Profit Jumped 48%',
      content: '"We replaced two 4-player units with one 86-inch 10-player Royal V2. The social atmosphere of 10 people playing together kept players in the seats 40% longer per session. Total ROI was hit in 13 weeks."',
      author: 'Master Route Operator, Pennsylvania Hub'
    },

    // ✅ FAQ (6条)
    faqs: [
      { question: 'Does the cabinet ship fully assembled?', answer: 'Yes, the Royal V2 Welded edition ships fully assembled and palletized to maintain its superior structural integrity and eliminate site assembly labor.' },
      { question: 'What is the standard warranty on the display?', answer: 'We provide a comprehensive 12-month factory replacement warranty on the industrial 86-inch 4K panel and its associated driver electronics.' },
      { question: 'Which bill validators are supported?', answer: 'The cabinet features 10 universal faceplates pre-cut for ICT PA7, Pyramid 7600, and MEI series. Custom faceplates are available for bulk orders.' },
      { question: 'Is the monitor glass liquid-proof?', answer: 'Yes, the 5mm tempered glass is sealed against spills, making it perfect for food and drink environments like convenience stores and taverns.' },
      { question: 'Can the LED lighting sync to the game?', answer: 'Yes, the Halo-Eclipse system includes a 12V sync header that connects directly to your game board for dynamic win/loss animations.' },
      { question: 'What is the shipping weight and protection?', answer: 'The unit weighs approx 600 lbs and is shipped in a custom-built international plywood crate with molded foam to ensure zero arrival damage.' }
    ],

    // ✅ SEO 与 Meta 撰写
    ctaText: 'Get Factory Direct Quote',
    pdfUrl: '/downloads/royal-86-v2-welded-specs.pdf',
    
    seo: {
      metaTitle: '10 Player Multiplayer Arcade Cabinet | 86" 4K Royal V2 Housing',
      metaDescription: 'Shop factory-direct 10-player Royal V2 arcade housings. 86-inch 4K display, fully welded 1.5mm steel body for maximum durability. Ideal for high-traffic skill game routes.',
      keywords: [
        '10 Player Multiplayer Arcade Cabinet',
        '86 Inch 4K Skill Game Housing',
        'Commercial Game Table Shell Wholesale',
        'Royal Series V2 Gaming Shell'
      ]
    }
  }
},
  // ⚠️ 插入位置：src/data.ts -> getProducts 数组内部末尾

{
  id: 'fish-table-8-classic-welded',
  name: '8-Player Classic Black Fully Welded Table Shell (Non-Dismantle)',
  category: 'cabinet_only',
  description: 'The industry workhorse for high-retention routes. Featuring a 55-inch display support and a fully welded 1.5mm steel body for maximum security and zero-maintenance durability.',
  imageUrl: '/images/8-player-classic-black.jpg', // 请在 public/images/ 放入对应的图片
  features: ['Fits 55" Industrial 4K Monitor', 'Classic 8-Player Stand-Up Layout', '1.5mm Reinforced Steel Body', 'Anti-Pry Vault Security System'],
  
  tankPage: {
    headline: 'Reliability Meets Revenue: The 8-Player Classic Black Elite',
    subHeadline: 'Why settle for modular when you can have the strength of a fully welded shell? Engineered for high-traffic routes that demand 24/7 uptime and zero structural fatigue.',
    
    // ✅ 痛点分析
    painPoints: [
      { 
        icon: 'ShieldAlert', 
        title: 'Tampering & Security Risks', 
        description: 'Wooden or thin-metal housings are soft targets for break-ins. The Classic Black series features a fully welded 1.5mm reinforced steel chassis and a 3-point locking vault that provides the highest physical security for your game boards and cash boxes in unattended environments.' 
      },
      { 
        icon: 'Wrench', 
        title: 'Joint Fatigue & Noise', 
        description: 'Dismantle units often rattle and loosen over years of intense public play. Our one-piece welded design eliminates structural fatigue and loose joints entirely, ensuring the machine feels solid and high-end for its entire service life, reducing long-term maintenance costs.' 
      },
      { 
        icon: 'TrendingDown', 
        title: 'Lost Revenue from Bottlenecks', 
        description: 'During peak weekend hours, smaller cabinets often turn away interested customers. Our 8-player layout maximizes peak-hour throughput, ensuring you capture every available dollar on the floor without requiring the massive floor space of a 10-player unit.' 
      }
    ],

    // ✅ 详细参数
    technicalSpecs: [
      { label: 'Display Support', value: 'Optimized for 55" 4K UHD Industrial Monitors' },
      { label: 'Player Capacity', value: '8 Independent High-Performance Stations' },
      { label: 'Body Construction', value: '1.5mm Automotive Grade Cold Rolled Steel (Full Weld)' },
      { label: 'Glass Protection', value: '5mm Thick Chemically-Tempered Safety Glass Cover' },
      { label: 'Lighting System', value: 'Integrated RGB Side Accents with Attract Mode' },
      { label: 'Wiring Protocol', value: '8-Station Standard 36/10 Pin Copper Core Harness' }
    ],

    // ✅ 竞品对比
    comparison: {
      competitorLabel: 'Standard 8-Player Modular Shells',
      rows: [
        { feature: 'Structural Integrity', us: 'Max (One-Piece Welded)', them: 'Medium (Bolted/Screwed)' },
        { feature: 'Setup Time', us: 'Instant (Ships Assembled)', them: 'Slow (2+ Hours Field Labor)' },
        { feature: 'Service Life', us: '10+ Years (Heavy Steel)', them: '3-5 Years (Thin Metal/Plywood)' }
      ]
    },

    // ✅ 买家指南 (交互点：下载 PDF)
    buyerGuide: [
      { 
        title: 'Logistics and Move-in', 
        content: 'As this is a non-dismantle unit, please ensure your location has a clear 34-inch doorway. We recommend using a professional pallet jack for installation. Click below to receive our full "8-Player Site Prep CAD" drawing via email.' 
      },
      { 
        title: 'Electrical Planning', 
        content: 'Requires a grounded dedicated 15A or 20A circuit for optimal performance. Enter your email to download our "Power Distribution Map" for high-density venues.' 
      }
    ],

    // ✅ 成功案例
    caseStudy: {
      title: 'NC Operator Achieves ROI in 10 Weeks',
      content: '"We replaced old wood units with these Classic Black steel tables. The collection increased by 35% because the social atmosphere kept players engaged longer. We had zero maintenance calls for structural issues."',
      author: 'Master Route Owner, North Carolina'
    },

    // ✅ FAQ (6条)
    faqs: [
      { question: 'Does it come with a bill acceptor?', answer: 'This is an "Empty Shell" product. It is pre-cut for ICT PA7 and Pyramid 7600 acceptors. We can pre-install them for an additional fee upon request.' },
      { question: 'What is the standard warranty?', answer: 'We provide a 12-month factory replacement warranty on all structural components and the internal wiring harness.' },
      { question: 'Can the cabinet be customized with our logo?', answer: 'Yes, for wholesale orders of 5+ units, we offer custom silk-screened acrylic headers and side panel decals to match your branding.' },
      { question: 'Is the wiring harness compatible with Banilla games?', answer: 'Yes, the pre-installed 36/10 pin harness is the industry standard for Banilla, Fusion, and most Skill Nudge titles.' },
      { question: 'How is it protected during shipping?', answer: 'Every unit is shipped in a custom-built international plywood crate with high-density foam padding to ensure 0% arrival damage.' },
      { question: 'Can I add a thermal printer later?', answer: 'The cabinet includes pre-cut slots and mounting brackets for standard ICT or Nanoptix thermal printers, making field upgrades easy.' }
    ],

    // ✅ SEO 与 Meta 撰写
    ctaText: 'Get Wholesale Quote',
    pdfUrl: '/downloads/8-player-classic-specs.pdf',
    
    seo: {
      metaTitle: '8 Player Fish Game Machine Cabinet | Classic Black Skill Arcade Shell',
      metaDescription: 'Shop factory-direct 8-player Classic Black arcade housings. Optimized for 55-inch monitors, fully welded 1.5mm steel body for maximum durability. Ideal for high-traffic routes.',
      keywords: [
        '8 Player Fish Game Machine Cabinet',
        'Classic Arcade Table Shell',
        'Wholesale Skill Gaming Housing',
        '8 Station Arcade Housing Manufacturer'
      ]
    }
  }
},
{
  id: 'fish-game-board-5in1-elite',
  name: '5-in-1 Elite Skill Fish Table Game Kit (4K UHD)',
  category: 'game_board',
  description: 'The definitive multiplayer skill gaming software kit. Featuring 5 hot titles in 1 board with native 4K output, 30-level difficulty adjustment, and standard 36/10 pin compatibility.',
  imageUrl: '/images/5in1-fish-game-board.jpg', // 请在 public/images/ 放入对应的图片
  features: ['5 Hot Skill Titles Integrated', 'Native 4K UHD 60FPS Output', '30-Level Skill Window Adjustment', 'SAS & SAS-Link Ready'],
  
  tankPage: {
    headline: 'Command the Floor with the 5-in-1 Elite Fish Game Kit',
    subHeadline: 'Stop player churn and hardware failures. Upgrade your route with the most stable, high-fidelity skill shooting software in the industry.',
    
    // ✅ 1. 痛点分析 (Pain Points)
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'High Maintenance & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal throttling, leading to expensive field service calls. Our Kit-518 utilizes industrial-grade processors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'Users', 
        title: 'Declining Player Engagement', 
        description: 'Single-title boards lose their appeal quickly. With five integrated high-definition themes, you can rotate content to keep the social environment fresh. Players stay longer when they have real skill-based control over varied and immersive gameplay environments.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Inflexible Difficulty Logic', 
        description: 'If a game is too hard or too easy, your hold percentage suffers. Our software features a refined 30-level skill window adjustment, allowing you to perfectly calibrate the hand-eye coordination challenge to match your specific local market and regulatory needs.' 
      }
    ],

    // ✅ 2. 详细参数 (Parameters)
    technicalSpecs: [
      { label: 'Processor', value: 'High-Performance Dual-Core Industrial CPU' },
      { label: 'Output Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Interface', value: 'Standard 36/10 Pin + SAS Accounting Protocol' },
      { label: 'Game Titles', value: '5 Integrated High-Retention Skill Themes' },
      { label: 'Player Count', value: 'Software-Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Encryption', value: 'Anti-Tamper Hardware Security Module (HSM)' }
    ],

    // ✅ 3. 竞品对比 (Comparison)
    comparison: {
      competitorLabel: 'Generic Single-Game Boards',
      rows: [
        { feature: 'Content Variety', us: '5 Integrated Titles', them: '1 Title Only' },
        { feature: 'Visual Quality', us: 'Native 4K UHD (60FPS)', them: '1080P Upscaled' },
        { feature: 'Reliability', us: 'Industrial Componentry', them: 'Consumer Grade / No Warranty' }
      ]
    },

    // ✅ 4. 买家指南 (Interaction Hooks)
    buyerGuide: [
      { 
        title: 'Retrofit & Installation Guide', 
        content: 'Upgrading your existing fish table is simple. Ensure your power supply is rated at least 450W and that your joysticks are cleaned for maximum responsiveness. Enter your email below to receive our full "36/10 Pin Wiring & Retrofit Manual" PDF.' 
      },
      { 
        title: 'Revenue Optimization', 
        content: 'We recommend rotating the lead game title every 60 days to maintain peak attraction. Our sales team can provide a free 12-month "Content Strategy" layout for multi-location route operators upon request.' 
      }
    ],

    // ✅ 5. 成功案例 (Case Study)
    caseStudy: {
      title: 'Georgia Operator Boosts Hold by 40%',
      content: '"After swapping out our aging single-game boards for the Kit-518, our weekly collections increased by 40%. The 5-in-1 variety prevented the usual mid-week slump and kept our regulars engaged for significantly longer sessions. ROI was hit in under a month."',
      author: 'Master Route Owner, Georgia Route'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the board compatible with ICT PA7 bill acceptors?', answer: 'Yes, it is pre-wired to support all standard pulse bill validators including ICT and Pyramid series via the standard harness.' },
      { question: 'Does it support vertical monitor kiosks?', answer: 'The Elite Series supports both horizontal (table) and vertical (upright) screen orientations via a simple toggle in the operator menu.' },
      { question: 'How is the difficulty adjusted?', answer: 'Each title has an independent skill-shot window that can be adjusted from levels 1 to 30 using the password-protected setup menu.' },
      { question: 'Is the software SAS link ready?', answer: 'Yes, the board includes a dedicated SAS communication port for real-time route accounting and location management systems.' },
      { question: 'What happens if the power goes out?', answer: 'The non-volatile memory chip saves all credits and game states instantly, ensuring no player disputes or revenue loss during power events.' },
      { question: 'Can I add a progressive signage board?', answer: 'Absolutely. The board includes a data-link header designed to sync with our external LED progressive signage kits.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/5in1-elite-kit-specs.pdf',
    
    seo: {
      metaTitle: '5-in-1 Fish Table Game Kit | Skill Based Fish Shooting Game Board',
      metaDescription: 'Shop factory-direct 5-in-1 multiplayer fish game boards. Native 4K graphics, 30-level skill adjustment, and 36/10 pin compatibility for route operators. Wholesale pricing.',
      keywords: [
        'Fish Table Game Kit',
        'Skill Based Fish Shooting Game Board',
        'Multiplayer Fish Arcade Software',
        'Fish Game Board Wholesale'
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
