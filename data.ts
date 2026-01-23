// src/data.ts
import { Product, BlogPost, Solution, LanguageCode } from './types';
import { t } from './utils/i18n';

export const getProducts = (lang: LanguageCode): Product[] => [
  {
    id: '4K-Titan-Vertical-Skill-43-cabinet',
    name: '43" 4K Titan Vertical Skill Cabinet (Empty Shell)',
    category: 'cabinet_only',
    description: 'Premier 43-inch 4K UHD gaming cabinet shell. Designed for maximum player engagement with addressable RGB Halo lighting and industrial-grade steel construction.',
    imageUrl: '/images/43 Inch Vertical Skill Cabinet.png', // 建议替换为真实的43寸立式机图片
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
  imageUrl: '/images/43 Inch Curved Skill Cabinet.png', // 建议替换为真实的 J-Curve 机柜图
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
  imageUrl: '/images/43 Inch Curved Gaming Shell.png', 
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
  imageUrl: '/images/43 Inch Vertical Arcade Cabinet.png', // 建议在 public/images/ 放入图片
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
  imageUrl: '/images/43 Inch Curved Arcade Cabinet Shell.png', // 建议在 public/images/ 放入 Model V2 实拍图
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
  imageUrl: '/images/Vertical Arcade Cabinet Shell.png', // 请替换为真实 Model 5 图片
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
  imageUrl: '/images/43 Inch Vertical Skill Game Cabinet.png', 
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
  imageUrl: '/images/98 Inch Fish Table Shell.png', // 建议在 public/images/ 放入 98寸桌机实拍图
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
  imageUrl: '/images/10 Player Fish Game Housing.png', // 建议在 public/images/ 放入对应的86寸机箱图
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
  imageUrl: '/images/86 inch fish game machine shell.png', // 建议在 public/images/ 放入产品图
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
  imageUrl: '/images/10 Player Arcade Cabinet Shell.png', // 请在 public/images/ 放入对应的图片
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
  imageUrl: '/images/86 inch Royal 10 Players Fully Welded Table Shell.png', // 请在 public/images/ 放入对应的图片
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
  imageUrl: '/images/86 Inch 4K Skill Game Housing.png', // 请在 public/images/ 放入对应的图片
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
{
  id: 'fish-table-8-classic-welded',
  name: '8-Player Classic Black Fully Welded Table Shell (Non-Dismantle)',
  category: 'cabinet_only',
  description: 'The industry workhorse for high-retention routes. Featuring a 55-inch display support and a fully welded 1.5mm steel body for maximum security and zero-maintenance durability.',
  imageUrl: '/images/8 Players Classic Black Fully Fish Table Game.png', // 请在 public/images/ 放入对应的图片
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
  imageUrl: '/images/fish game board 5 in 1.png', // 请在 public/images/ 放入对应的图片
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
},
{
  id: 'fish-game-board-airstrike-2-elite',
  name: 'Air Strike 2 Elite Fish Table Game Kit (4K UHD)',
  category: 'game_board',
  description: 'A high-octane aircraft-themed skill gaming software kit. Featuring native 4K 3D aerial combat, 30-level difficulty adjustment, and stable 36/10 pin hardware for professional routes.',
  imageUrl: '/images/fish game board air strike 2.png', // 请在 public/images/ 放入对应的图片
  features: ['3D Aerial Combat Theme', 'Native 4K UHD 60FPS Graphics', 'Anti-Tamper PCB Technology', 'SAS Protocol Accounting Ready'],
  
  tankPage: {
    headline: 'Dominate the Sky, Maximize Your Hold: Air Strike 2 Elite',
    subHeadline: 'Ditch the repetitive marine themes. Upgrade to the most immersive aerial skill-shooting software and watch your location revenue soar.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Player Boredom & Content Fatigue', 
        description: 'Traditional marine fish games have become oversaturated, leading to shorter play sessions. Air Strike 2 offers a high-impact aerial combat alternative that attracts new demographics and keeps regulars engaged with fresh 3D mechanics and intense boss battles.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Technical Glitches & Unstable Math', 
        description: 'Cheap unbranded boards often suffer from memory crashes or unpredictable hold percentages. Our Elite Kit uses industrial-grade processors and refined math models to ensure 99.9% uptime and consistent location profitability you can rely on month after month.' 
      },
      { 
        icon: 'Monitor', 
        title: 'Poor Visual Appeal on 4K Cabinets', 
        description: 'Running 1080P software on a modern 4K screen results in blurry, pixelated graphics that turn away high-value players. Air Strike 2 supports native 3840x2160 UHD output, delivering a cinematic experience that utilizes your hardware to its full potential.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Mainboard Processor', value: 'High-Speed Dual-Core Industrial GPU' },
      { label: 'Interface Protocol', value: 'Standard 36/10 Pin + 12V Pulse Support' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Accounting System', value: 'SAS & SAS-Link Ready for Route Management' },
      { label: 'Hardware Security', value: 'Non-Volatile Memory with Encryption Key' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Marine Fish Boards',
      rows: [
        { feature: 'Visual Theme', us: '3D Aerial Combat (Unique)', them: '2D/3D Underwater (Common)' },
        { feature: 'Graphics Quality', us: 'Native 4K UHD', them: '1080P Stretched' },
        { feature: 'Revenue Stability', us: 'SAS Ready / 30-Level Adjust', them: 'Limited / Fixed Math' }
      ]
    },

    // ✅ 4. 买家指南 (互动：点击发送 PDF)
    buyerGuide: [
      { 
        title: 'Pre-Installation Checklist', 
        content: 'Ensure your cabinet power supply is rated at least 450W. For best results, use an HDMI 2.0 cable to connect your 4K monitor. Enter your email to download our "Quick-Start Installation PDF".' 
      },
      { 
        title: 'Difficulty Calibration', 
        content: 'We recommend starting with Level 15 for new routes. Adjust the skill window based on your weekly hold reports. Our technical team offers free consulting on math settings for wholesale partners.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Texas Route Revitalized (+38%)',
      content: '"We replaced aging marine boards with Air Strike 2 kits. Not only did our regular players stay 25 minutes longer per session, but we attracted a whole new crowd who loved the 3D aircraft effects. ROI was hit in under 3 weeks."',
      author: 'A. Garcia, Route Distributor'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Does it support bill acceptors from ICT or Pyramid?', answer: 'Yes, it is fully compatible with all major 12V pulse acceptors via the industry-standard 36/10 pin harness.' },
      { question: 'Can I change the player count without buying new boards?', answer: 'Yes, the software is dynamically configurable for 4, 6, 8, or 10 stations through the operator setup menu.' },
      { question: 'Is the game board compatible with vertical screen cabinets?', answer: 'Yes, you can toggle between horizontal and vertical screen orientations instantly in the settings.' },
      { question: 'What happens if there is a power surge?', answer: 'The board features an on-board non-volatile memory chip that saves all credits and game states instantly to prevent revenue loss.' },
      { question: 'Is there a warranty?', answer: 'We offer a comprehensive 12-month factory replacement warranty on all PCB hardware and software keys.' },
      { question: 'How do you handle software updates?', answer: 'Updates and new title expansions can be deployed via encrypted SD card or specialized firmware keys provided by our factory.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/airstrike-2-specs-guide.pdf',
    
    seo: {
      metaTitle: 'Air Strike 2 Fish Game Board | High-Retention Skill Game Kit',
      metaDescription: 'Boost your route revenue with the Air Strike 2 fish game board. Features 4K aerial combat graphics, 36/10 pin compatibility, and stable skill-based math. Wholesale pricing.',
      keywords: [
        'Air Strike 2 Game Board',
        'Fish Table Game Kit',
        'Multiplayer Skill Game Software',
        'Fish Shooting Game PCB Wholesale'
      ]
    }
  }
},
{
  id: 'fish-game-board-crab-king-2-elite',
  name: 'Crab King 2 Elite Skill Fish Table Game Kit (4K UHD)',
  category: 'game_board',
  description: 'The industry-standard skill gaming kit. Featuring iconic 3D boss battles, native 4K graphics, a 30-level skill window adjustment, and industrial-grade 36/10 pin hardware for maximum route stability.',
  imageUrl: '/images/Crab King 2 Game Board.png', // 请在 public/images/ 放入对应的图片
  features: ['Iconic 3D Boss Mechanics', 'Native 4K UHD 60FPS Graphics', '30-Level Skill Calibration Logic', 'Universal 36/10 Pin Compatibility'],
  
  tankPage: {
    headline: 'Dominate Your Route with the Legendary Crab King 2 Elite',
    subHeadline: 'Ditch the generic clones. Upgrade to the most stable, high-retention skill shooting software and see up to 35% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal throttling, leading to expensive field service calls. Our CK2-Elite utilizes industrial-grade solid-state capacitors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'Users', 
        title: 'Rapid Player Boredom', 
        description: 'Predictable math models cause regular players to lose interest quickly. Crab King 2 features an innovative "Chain Reaction" weapon system and high-stakes boss battles that keep the social environment fresh and intense, driving significantly longer play sessions.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Compliance & Logic Rigidity', 
        description: 'Fixed difficulty settings can alienate players or ruin your hold percentage. Our software features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Mainboard Architecture', value: 'High-Performance Dual-Layer Industrial GPU' },
      { label: 'Interface Protocol', value: 'Standard 36/10 Pin + SAS 6.0 Accounting' },
      { label: 'Boss Characters', value: 'Golden Crab, Drill Crab, Missile Crab, etc.' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Storage Technology', value: 'Non-Volatile F-RAM (Instant Data Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Clone Boards',
      rows: [
        { feature: 'Visual Quality', us: 'Native 4K UHD 3D', them: 'Upscaled 1080P 2D' },
        { feature: 'Uptime Reliability', us: '99.9% (Industrial Build)', them: 'Frequent Memory Crashes' },
        { feature: 'Revenue Tracking', us: 'Full SAS 6.0 Support', them: 'Analog Meters Only' }
      ]
    },

    // ✅ 4. 买家指南 (互动：点击发送 PDF)
    buyerGuide: [
      { 
        title: 'Retrofit & Power Prep', 
        content: 'Upgrading your cabinet is straightforward. Ensure your power supply is rated at least 450W and that you are using high-quality micro-switch joysticks for maximum player accuracy. Enter your email below to receive our "CK2 Master Installation & Retrofit PDF" instantly.' 
      },
      { 
        title: 'Calibrating for ROI', 
        content: 'We recommend starting at Level 15 for new routes to build player Confidence. Our technical team offers free consulting on skill-window optimization for all wholesale partners to ensure peak profitability from day one.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'North Carolina Route Revitalized (+35%)',
      content: '"After swapping out our aging fish boards for the Crab King 2 Elite kits, our weekly hold jumped by 35%. The visual quality and social energy of the boss battles kept our regulars engaged 25 minutes longer per session. ROI was achieved in under 3 weeks."',
      author: 'Master Route Operator, NC Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the kit compatible with ICT and Pyramid bill acceptors?', answer: 'Yes, the PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians.' },
      { question: 'Can I switch between 6, 8, and 10 player configurations?', answer: 'Absolutely. The Crab King 2 software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact desks to massive tables, without needing a software re-flash.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust the hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting various local legal requirements.' },
      { question: 'What happens to player credits if the location suffers a power outage?', answer: 'Every kit is equipped with non-volatile F-RAM memory. This technology saves all active credits, game progress, and operator history instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes and revenue loss.' },
      { question: 'Does the 4K output require specialized cables?', answer: 'While CK2 supports native 4K, it includes an industrial scaler for 1080P compatibility. However, to maximize player attraction, we recommend using a 4K IPS monitor and a certified HDMI 2.0 cable to deliver fluid combat animations without flickering.' },
      { question: 'Is there an option to sync machine LED lighting with gameplay?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible LED strips, the cabinet lighting will flash or change colors based on wins and attract modes, creating an immersive environment that draws players from across the venue.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/crab-king-2-elite-specs.pdf',
    
    seo: {
      metaTitle: 'Crab King 2 Fish Game Board | Skill Based Fish Shooting Game Kit',
      metaDescription: 'Boost your route revenue with the Crab King 2 fish game board. Features 4K UHD graphics, 30-level skill settings, and SAS 6.0 accounting for route operators. Wholesale pricing.',
      keywords: [
        'Crab King 2 Game Board',
        'Skill Based Fish Game Kit',
        'Multiplayer Fish Shooting Software',
        'Fish Table Game Board Wholesale'
      ]
    }
  }
},
  
{
  id: 'fish-game-board-airstrike-3-elite',
  name: 'Air Strike 3 Ultimate 3D Skill Game Kit (4K Pro)',
  category: 'game_board',
  description: 'The pinnacle of aerial skill shooting software. Featuring native 4K 3D graphics, a proprietary 30-level skill window adjustment, and industrial-grade 36/10 pin hardware for elite route operators.',
  imageUrl: '/images/Air Strike 3 Ultimate 3D Skill Game Kit.png', // 请在 public/images/ 放入对应的图片
  features: ['Cinematic 4K 3D Aerial Combat', 'Proprietary Skill-Window Logic', 'SAS 6.0 Accounting Ready', 'Universal 36/10 Pin Compatibility'],
  
  tankPage: {
    headline: 'Air Strike 3: Command the Sky, Conquer Your Route',
    subHeadline: 'Ditch the marine themes. Upgrade to the most immersive 3D skill shooter ever made and experience up to 40% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'High Technical Failure Rates', 
        description: 'Cheaper, unbranded PCBs often suffer from memory crashes and thermal throttling, leading to costly field service calls and frustrated players. Air Strike 3 uses industrial-grade graphics processors and non-volatile F-RAM to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'Users', 
        title: 'Declining Player Dwell Time', 
        description: 'Players have become bored with repetitive 2D fish games, leading to shorter sessions and lower collections. AS3 introduces a cinematic 4K aerial combat experience with intense 3D BOSS battles that attract a younger demographic and keep regulars engaged for much longer periods.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Compliance & Logic Rigidity', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold percentage. Our Model AS3-Pro features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory and market needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Graphic Processor', value: 'High-Performance Octa-Core Industrial GPU' },
      { label: 'Output Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60/120Hz' },
      { label: 'Interface Support', value: 'Gold-Plated Standard 36/10 Pin + SAS 6.0' },
      { label: 'Storage Tech', value: 'Non-Volatile F-RAM (Instant Game Recovery)' },
      { label: 'Audio Engine', value: 'Integrated 2.1 Channel Stereo with Bass Support' },
      { label: 'Configurability', value: 'Dynamic Software Toggle for 4, 6, 8, or 10 Stations' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard 2D Marine Fish Boards',
      rows: [
        { feature: 'Visual Dimension', us: '3D High-Octane Combat', them: '2D/3D Underwater (Legacy)' },
        { feature: 'Resolution', us: 'Native 4K Pro assets', them: 'Upscaled 1080P' },
        { feature: 'Data Security', us: 'SAS 6.0 + Encrypted Keys', them: 'Limited / No Accounting' }
      ]
    },
        // ✅ 4. 买家指南 (互动：点击发送 PDF)
    buyerGuide: [
      { 
        title: 'Installation & Compatibility', 
        content: 'Upgrading your existing cabinet is straightforward. Ensure your power supply is rated at least 450W and check your HDMI 2.0 cables. Enter your email to download our "Air Strike 3 Master Pinout & Retrofit Manual" PDF instantly.' 
      },
      { 
        title: 'Calibrating for ROI', 
        content: 'We recommend starting at Level 18 for new routes to build player confidence. Our technical support team provides free consultations on math setting optimization for all B2B wholesale partners.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Pennsylvania Route Revenue Up 42%',
      content: '"By swapping our aging fish boards for the Air Strike 3 Elite kits, we saw an immediate 42% jump in total collections. The visual quality attracted a completely new demographic of competitive players. ROI was achieved in 14 days."',
      author: 'Master Route Operator, PA Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the kit compatible with ICT PA7 bill acceptors?', answer: 'Yes, the AS3 PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians.' },
      { question: 'Can we switch between 4, 8, and 10 player configurations?', answer: 'Absolutely. The Air Strike 3 software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact 4-player desks to massive 10-player tables, without needing a software re-flash.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust the hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting the legal requirements of various jurisdictions.' },
      { question: 'What happens to credits if the power goes out?', answer: 'Every Air Strike 3 board is equipped with non-volatile Ferroelectric RAM (F-RAM). This technology saves all active credits, game progress, and operator history instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes.' },
      { question: 'Does the 4K output require specialized cables?', answer: 'While AS3 supports native 4K, it includes an industrial scaler for 1080P compatibility. However, to maximize player attraction, we recommend using a 4K IPS monitor and a certified HDMI 2.0 cable to deliver the fluid 60FPS combat animations without flickering.' },
      { question: 'Can I sync cabinet LED lighting with gameplay?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible LED strips, the cabinet lighting will flash red during Incoming Strike warnings and change colors based on the current BOSS battle, creating a fully immersive environment.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/airstrike-3-elite-specs.pdf',
    
    seo: {
      metaTitle: 'Air Strike 3 Fish Game Board | 4K Skill Shooting Kit Upgrade',
      metaDescription: 'Shop factory-direct Air Strike 3 fish table game kits. Featuring native 4K graphics, 30-level skill settings, and SAS 6.0 accounting for route operators. Wholesale pricing.',
      keywords: [
        'Air Strike 3 Game Board',
        'Fish Table Game Software Upgrade',
        '4K Skill Based Shooting Kit',
        'Multiplayer Fish Arcade Software Wholesale'
      ]
    }
  }
},
{
  id: 'fish-game-board-crab-king-3-ultra',
  name: 'Crab King 3 Ultimate 3D Skill Game Kit (4K Ultra)',
  category: 'game_board',
  description: 'The definitive sequel in skill gaming excellence. Featuring native 4K UHD graphics, advanced 3D weapon systems, 30-level skill adjustment, and SAS 6.0 compatibility for professional route management.',
  imageUrl: '/images/Multiplayer Fish Shooting Game Board Crab King 3.png', // 请在 public/images/ 放入对应的图片
  features: ['Native 4K UHD @ 60FPS', 'Advanced 3D Boss Mechanics', '30-Level Skill-Sync Logic', 'SAS 6.0 & SAS-Link Ready'],
  
  tankPage: {
    headline: 'Crab King 3: Dominate Your Venue with 4K Visual Power',
    subHeadline: 'Ditch the clones. Upgrade to the most immersive 3D skill shooter ever made and experience up to 42% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Technical Failure & Revenue Loss', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal instability, leading to expensive field service calls. Crab King 3 uses industrial-grade GPU processors and non-volatile F-RAM to ensure 99.9% uptime and zero data loss during power surges or outages.' 
      },
      { 
        icon: 'Users', 
        title: 'Player Boredom & Content Churn', 
        description: 'Players have become tired of repetitive 2D themes, leading to shorter sessions. CK3 introduces a cinematic 4K environment with intense 3D BOSS battles that attract a younger demographic and keep regulars engaged for much longer periods through superior immersion.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Inflexible Compliance Logic', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold. Our Model CK3-Ultra features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Graphic Processor', value: 'High-Performance Octa-Core Industrial GPU' },
      { label: 'Output Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Interface Protocol', value: 'Standard 36/10 Pin + SAS 6.0 Accounting' },
      { label: 'Storage Technology', value: 'Non-Volatile F-RAM (Instant Game Recovery)' },
      { label: 'Audio Engine', value: 'Integrated 2.1 Channel Stereo with Bass Support' },
      { label: 'Configurability', value: 'Dynamic Software Toggle for 4, 6, 8, or 10 Stations' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard 2D Marine Fish Boards',
      rows: [
        { feature: 'Visual Real Estate', us: 'Native 4K 3D Assets', them: '1080P Stretched/Upscaled' },
        { feature: 'Revenue Stability', us: 'SAS Ready + 30-Level Adjust', them: 'Analog Only / Fixed Math' },
        { feature: 'Player Attraction', us: 'Elite Weapons + Boss System', them: 'Basic Shooting Mechanics' }
      ]
    },

    // ✅ 4. 买家指南 (互动：点击发送 PDF)
    buyerGuide: [
      { 
        title: 'Installation & Compatibility', 
        content: 'Upgrading your existing cabinet is straightforward. Ensure your power supply is rated at least 450W and check your HDMI 2.0 cables. Enter your email to download our "CK3 Master Retrofit Manual" PDF instantly.' 
      },
      { 
        title: 'Revenue Optimization', 
        content: 'We recommend starting at Level 18 for new routes. Our technical support team provides free consultations on math setting optimization for all B2B wholesale partners to maximize location hold.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Pennsylvania Route Revenue Up 42%',
      content: '"By swapping our aging fish boards for the Crab King 3 Ultra kits, we saw an immediate 42% jump in weekly hold. The visual quality and new boss modes attracted a completely new crowd. ROI was hit in 14 days."',
      author: 'Master Route Operator, PA Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the kit compatible with ICT PA7 bill acceptors?', answer: 'Yes, the CK3 PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians during location installs.' },
      { question: 'Can we switch between 4, 8, and 10 player configurations?', answer: 'Absolutely. The Crab King 3 software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact 4-player desks to massive 10-player tables, without needing a software re-flash or hardware modification.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust the hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting various local legal requirements while maintaining a stable hold.' },
      { question: 'What happens to player credits if the location suffers a sudden power outage?', answer: 'Every Crab King 3 board is equipped with non-volatile F-RAM memory. This technology saves all active credits, game progress, and operator history instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes and securing your venue\'s integrity.' },
      { question: 'Does the 4K output require specialized cables or high-end industrial monitors?', answer: 'While CK3 supports native 4K, it includes an industrial scaler for 1080P compatibility. However, to maximize player attraction, we recommend using a 4K IPS monitor and a certified HDMI 2.0 cable to deliver the fluid 60FPS boss animations without flickering or signal loss.' },
      { question: 'Is there an option to sync machine external LED lighting with the gameplay?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible machine lighting, the cabinet will flash or change colors in sync with winning events, boss triggers, and attract modes, creating an immersive environment that captures the whole venue’s attention.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/crab-king-3-ultra-specs.pdf',
    
    seo: {
      metaTitle: 'Crab King 3 Fish Game Board | 4K 3D Skill Shooting Kit',
      metaDescription: 'Shop factory-direct Crab King 3 fish game kits. Native 4K graphics, 30-level skill settings, and SAS 6.0 accounting for route operators. Wholesale pricing for high-retention software.',
      keywords: [
        'Crab King 3 Game Board',
        'Multiplayer Fish Shooting Game Board',
        'Skill Based Fish Game Kit',
        '4K Fish Table Software Upgrade'
      ]
    }
  }
},
{
  id: 'fish-game-board-crab-king-classic',
  name: 'Fish Table Game Board Crab King (Skill Based Kit)',
  category: 'game_board',
  description: 'The industry-standard skill shooting software. Featuring iconic boss mechanics, 30-level skill window adjustment, and industrial-grade 36/10 pin hardware for maximum route retention.',
  imageUrl: '/images/Fish Table Game Board Crab King.png', // 请在 public/images/ 放入对应的图片
  features: ['Iconic 3D Boss System', 'Drill & Laser Special Weapons', '30-Level Skill Calibration', 'Universal 36/10 Pin Compatibility'],
  
  tankPage: {
    headline: 'Dominate Your Route with the Legendary Crab King Elite',
    subHeadline: 'Ditch the clones. Upgrade to the most recognized skill shooting software in the industry and experience up to 35% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Technical Failures & Revenue Loss', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal instability, leading to expensive field service calls. Crab King uses industrial-grade graphics processors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges or outages.' 
      },
      { 
        icon: 'Users', 
        title: 'Player Boredom & Content Churn', 
        description: 'Players have become tired of repetitive generic themes, leading to shorter sessions. Crab King introduces high-stakes "Weapon Crab" mechanics and 3D BOSS battles that attract a younger demographic and keep regulars engaged for much longer periods through superior immersion.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Inflexible Compliance Logic', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold. Our kit features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory and market needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Architecture', value: 'High-Performance Dual-Core Industrial GPU' },
      { label: 'Video Output', value: 'High-Definition (Supports 4K Industrial Scaler)' },
      { label: 'Interface Protocol', value: 'Standard Gold-Plated 36/10 Pin + SAS 6.0' },
      { label: 'Special Weapons', value: 'Drill Crab, Laser Crab, Electromagnetic, Bomb' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Security Tech', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Clone Boards',
      rows: [
        { feature: 'Visual Quality', us: '3D High-Fidelity Assets', them: '2D Stretched Graphics' },
        { feature: 'Math Stability', us: 'SAS Ready + 30-Level Adjust', them: 'Analog Only / Rigid Logic' },
        { feature: 'Build Quality', us: 'Solid-State Components', them: 'Consumer Grade Capacitors' }
      ]
    },

    // ✅ 4. 买家指南 (互动：点击发送 PDF)
    buyerGuide: [
      { 
        title: 'Upgrade & Installation Guide', 
        content: 'Upgrading your existing cabinet is straightforward. Ensure your power supply is rated at least 450W and check your signal cables. Enter your email to download our "Crab King Master Pinout & Retrofit Manual" PDF instantly.' 
      },
      { 
        title: 'Revenue Calibration Strategy', 
        content: 'We recommend starting at Level 15 for new routes to build player trust. Our technical support team provides free consultations on math setting optimization for all B2B wholesale partners to maximize location hold.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Georgia Location Collections Up 35%',
      content: '"By swapping our aging boards for the Crab King Elite kits, we saw an immediate 35% jump in weekly hold. The special weapons attracted a younger, more competitive demographic. ROI was achieved in just 18 days."',
      author: 'A. Miller, Route Operator'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the kit compatible with ICT and Pyramid bill acceptors?', answer: 'Yes, the Crab King PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians during location installs.' },
      { question: 'Can we switch between 4, 8, and 10 player configurations?', answer: 'Absolutely. The software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact 4-player desks to massive 10-player tables, without needing a software re-flash or hardware modification.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust the hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting various local legal requirements.' },
      { question: 'What happens to credits if the location suffers a power outage?', answer: 'Every kit is equipped with non-volatile F-RAM memory. This technology saves all active credits, game progress, and operator history instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes and securing your venue\'s integrity.' },
      { question: 'Does the video output support modern 4K industrial monitors?', answer: 'While Crab King is optimized for HD, it includes an industrial scaler for 4K compatibility. However, to maximize player attraction, we recommend using a 4K IPS monitor and a certified HDMI cable to deliver fluid 60FPS combat animations without flickering.' },
      { question: 'Can I sync cabinet LED lighting with gameplay events?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible machine lighting, the cabinet will flash or change colors in sync with winning events, boss triggers, and attract modes, creating a fully immersive environment.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/crab-king-classic-specs.pdf',
    
    seo: {
      metaTitle: 'Fish Table Game Board Crab King | Skill Based Shooting Game Kit',
      metaDescription: 'Shop factory-direct Crab King fish table game kits. Featuring iconic 3D boss mechanics, 30-level skill adjustment, and 36/10 pin compatibility for route operators. Wholesale pricing.',
      keywords: [
        'Fish Table Game Board Crab King',
        'Skill Based Fish Shooting Game Kit',
        'Multiplayer Arcade Software Wholesale',
        'Fish Game Board Distributor'
      ]
    }
  }
},
{
  id: 'fish-game-board-crab-king-plus',
  name: 'Fish Table Game Board Crab King Plus (Skill Enhanced Kit)',
  category: 'game_board',
  description: 'The definitive upgrade for professional route operators. Featuring enhanced 4K boss mechanics, 30-level skill adjustment, and industrial-grade 36/10 pin hardware for maximum location hold.',
  imageUrl: '/images/Fish Table Game Board Crab King Plus.png', // 请在 public/images/ 放入对应的图片
  features: ['Enhanced 4K Boss Graphics', 'Mega Drill & Chain Lightning Weapons', '30-Level Skill Calibration', 'SAS 6.0 Accounting Support'],
  
  tankPage: {
    headline: 'Command Your Route with the Legendary Crab King Plus Elite',
    subHeadline: 'Ditch the clones. Upgrade to the most immersive skill shooting software and see up to 40% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal throttling, leading to expensive field service calls. Our Crab King Plus utilizes industrial-grade solid-state capacitors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'Users', 
        title: 'Rapid Player Boredom', 
        description: 'Predictable math models cause players to lose interest quickly. The Plus version features an innovative "Mega Drill" weapon and high-stakes boss battles that keep the social environment fresh and intense, driving significantly longer play sessions.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Compliance & Logic Rigidity', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold percentage. Our software features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Mainboard Architecture', value: 'High-Performance Dual-Core Industrial GPU' },
      { label: 'Interface Protocol', value: 'Standard 36/10 Pin + SAS 6.0 Accounting' },
      { label: 'Special Weapons', value: 'Mega Drill, Chain Lightning, Super Bomb' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Security Technology', value: 'Anti-Tamper PCB Hardware Module' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Clone Boards',
      rows: [
        { feature: 'Visual Quality', us: 'Native 4K UHD (Plus Assets)', them: 'Upscaled 1080P' },
        { feature: 'Math Stability', us: 'SAS Ready + 30-Level Adjust', them: 'Analog Only / Rigid Logic' },
        { feature: 'Service Life', us: 'Industrial Grade Components', them: 'Consumer Grade / No Warranty' }
      ]
    },

    // ✅ 4. 买家指南 (互动：点击发送 PDF)
    buyerGuide: [
      { 
        title: 'Retrofit & Installation Guide', 
        content: 'Upgrading your existing cabinet is straightforward. Ensure your power supply is rated at least 450W and that you are using high-quality micro-switch joysticks. Enter your email below to receive our full "Crab King Plus Master Pinout & Retrofit Manual" PDF.' 
      },
      { 
        title: 'Revenue Calibration Strategy', 
        content: 'We recommend starting at Level 15 for new routes to build player trust. Our technical support team provides free consultations on math setting optimization for all B2B wholesale partners to ensure peak profitability.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Pennsylvania Location Collections Up 40%',
      content: '"By swapping our aging fish boards for the Crab King Plus Elite kits, we saw an immediate 40% jump in weekly hold. The social atmosphere of the Mega Drill weapon kept players in the seats 30 minutes longer. ROI was hit in 15 days."',
      author: 'Master Route Operator, PA Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the kit compatible with ICT and Pyramid bill acceptors?', answer: 'Yes, the Crab King Plus PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians during location installs.' },
      { question: 'Can I switch between 6, 8, and 10 player configurations?', answer: 'Absolutely. The Crab King Plus software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact 4-player desks to massive 10-player tables, without needing a software re-flash or hardware modification.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting various local legal requirements while maintaining a stable hold.' },
      { question: 'What happens to player credits if the location suffers a power outage?', answer: 'Every kit is equipped with on-board non-volatile F-RAM memory. This technology saves all active credits, game progress, and operator history instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes and securing your venue\'s integrity.' },
      { question: 'Does the board support high-resolution 4K industrial monitors?', answer: 'Yes, the kit supports native 3840x2160 UHD output through its digital HDMI port. While it remains backward compatible with 1080P screens via an internal scaler, we highly recommend using 4K displays to fully showcase the intricate 3D textures and smooth boss animations.' },
      { question: 'Can I sync machine external LED lighting with gameplay events?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible machine lighting, the cabinet will flash or change colors in sync with winning events, boss triggers, and attract modes, creating an immersive environment that captures the whole venue’s attention.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/crab-king-plus-specs.pdf',
    
    seo: {
      metaTitle: 'Fish Table Game Board Crab King Plus | Skill Based Game Kit',
      metaDescription: 'Shop factory-direct Crab King Plus fish table game kits. Featuring enhanced 4K graphics, 30-level skill settings, and SAS 6.0 accounting for route operators. Wholesale pricing.',
      keywords: [
        'Fish Table Game Board Crab King Plus',
        'Skill Based Fish Game Software',
        'Wholesale Fish Table Game Kits',
        'Crab King Plus PCB Distributor'
      ]
    }
  }
},
{
  id: 'fish-game-board-fire-kirin-2-elite',
  name: 'Fish Table Game Board Fire Kirin 2 (Skill Based Kit)',
  category: 'game_board',
  description: 'The industry-leading skill shooting software kit. Featuring the iconic Fire Kirin series with native 4K graphics, 30-level skill adjustment, and industrial-grade 36/10 pin hardware for maximum route retention.',
  imageUrl: '/images/Skill Based Fish Shooting Game Kit Fire Kirin II.png', // 请在 public/images/ 放入对应的图片
  features: ['Iconic Fire Kirin BOSS System', 'Native 4K UHD @ 60FPS', '30-Level Skill Calibration Logic', 'SAS & Mobile Remote Ready'],
  
  tankPage: {
    headline: 'Command Your Route with the Legendary Fire Kirin 2 Elite',
    subHeadline: 'Ditch the clones. Upgrade to the most recognized skill shooting software and experience up to 42% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal throttling, leading to expensive field service calls. Our Fire Kirin 2 utilizes industrial-grade solid-state capacitors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'Users', 
        title: 'Declining Player Engagement', 
        description: 'Generic themes lose appeal quickly. Fire Kirin 2 features iconic boss battles and a high-stakes social environment that keeps players engaged 25 minutes longer per session, converting foot traffic into dedicated, high-value repeat players for your location.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Compliance & Logic Rigidity', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold. Our software features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Mainboard Architecture', value: 'High-Performance Dual-Core Industrial CPU' },
      { label: 'Interface Protocol', value: 'Standard 36/10 Pin + SAS 6.0 Accounting' },
      { label: 'Game Content', value: 'Fire Kirin, Phoenix Legend, Ocean Monster, etc.' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Storage Technology', value: 'Non-Volatile F-RAM (Instant Game Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Clone Boards',
      rows: [
        { feature: 'Brand Recognition', us: 'Authentic Fire Kirin Series', them: 'Generic / Unbranded Clones' },
        { feature: 'Visual Quality', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Laggy' },
        { feature: 'Hold Stability', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Meters' }
      ]
    },

    // ✅ 4. 买家指南 (互动：下载 PDF)
    buyerGuide: [
      { 
        title: 'Installation & Power Setup', 
        content: 'Upgrading your cabinet is straightforward. Ensure your power supply is rated at least 450W and that you are using high-quality micro-switch joysticks. Enter your email below to receive our full "Fire Kirin 2 Master Installation & Calibration PDF" instantly.' 
      },
      { 
        title: 'Revenue Optimization Strategy', 
        content: 'We recommend starting at Level 15 for new routes to build player trust. Our technical team offers free consulting on skill-window optimization for all wholesale partners to ensure peak profitability from day one.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'PA Route Revenue Jumped 42%',
      content: '"After swapping aging fish boards for Fire Kirin 2 kits, our collections increased by 42%. The 4K visuals and brand power attracted a completely new demographic of competitive players. ROI was achieved in 14 days."',
      author: 'Master Route Owner, Pennsylvania Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the Fire Kirin 2 kit compatible with ICT PA7 bill acceptors?', answer: 'Yes, the PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians during location installs.' },
      { question: 'Can we switch between 4, 8, and 10 player configurations?', answer: 'Absolutely. The Fire Kirin 2 software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact desks to massive tables, without needing a software re-flash or specialized hardware modifications.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting various local legal requirements while maintaining a stable hold.' },
      { question: 'What happens to player credits if the location suffers a power outage?', answer: 'Every Fire Kirin 2 board is equipped with non-volatile F-RAM memory technology. This saves all active credits, game progress, and operator history logs instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes and securing your venue\'s integrity.' },
      { question: 'Does the 4K output require specialized cables?', answer: 'While Fire Kirin 2 supports native 4K, it includes an industrial scaler for 1080P compatibility. However, to maximize attraction, we recommend using a 4K IPS monitor and a certified HDMI 2.0 cable to deliver the fluid 60FPS animations without flickering.' },
      { question: 'Can I sync the machine\'s external LED lighting with gameplay?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible machine lighting, the cabinet will flash or change colors in sync with winning events, boss triggers, and attract modes, creating an immersive environment that captures the whole venue’s attention.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/fire-kirin-2-elite-specs.pdf',
    
    seo: {
      metaTitle: 'Fish Table Game Board Fire Kirin 2 | Skill Based Game Kit',
      metaDescription: 'Shop factory-direct Fire Kirin 2 fish game boards. Featuring iconic 3D boss mechanics, 30-level skill adjustment, and SAS 6.0 accounting for route operators. Wholesale pricing.',
      keywords: [
        'Fish Table Game Board Fire Kirin 2',
        'Skill Based Fish Shooting Game Kit',
        'Multiplayer Arcade Software Upgrade',
        'Fire Kirin 2 PCB Distributor'
      ]
    }
  }
},
{
  id: 'fish-game-board-fire-kirin-3-elite',
  name: 'Fish Table Game Board Fire Kirin 3 (Skill Based Kit)',
  category: 'game_board',
  description: 'The industry-leading skill shooting software kit. Featuring the legendary Fire Kirin 3 series with native 4K UHD graphics, 30-level skill adjustment, and industrial-grade 36/10 pin hardware.',
  imageUrl: '/images/Multiplayer Fish Shooting Game Board Fire Kirin 3.png', // 请在 public/images/ 放入对应的图片
  features: ['Legendary 3D BOSS System', 'Native 4K UHD @ 60FPS', '30-Level Skill Calibration Logic', 'SAS & Mobile Remote Ready'],
  
  tankPage: {
    headline: 'Command Your Route with the Legendary Fire Kirin 3 Elite',
    subHeadline: 'Stop player churn and hardware failures. Upgrade to the most recognized skill shooting software and experience up to 45% revenue growth.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal throttling, leading to expensive field service calls. Our Fire Kirin 3 utilizes industrial-grade solid-state capacitors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'Users', 
        title: 'Declining Player Engagement', 
        description: 'Generic themes lose appeal quickly. Fire Kirin 3 features iconic boss battles and a high-stakes social environment that keeps players engaged 25 minutes longer per session, converting foot traffic into dedicated, high-value repeat players for your location.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Compliance & Logic Rigidity', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold. Our software features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Processor Architecture', value: 'High-Performance Quad-Core Industrial CPU' },
      { label: 'Interface Protocol', value: 'Standard 36/10 Pin + SAS 6.0 Accounting' },
      { label: 'Game Content', value: 'Fire Kirin 3, Phoenix Legend, Lava Kirin, etc.' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Storage Tech', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Clone Boards',
      rows: [
        { feature: 'Brand Power', us: 'Authentic Fire Kirin Series', them: 'Generic / Unbranded Clones' },
        { feature: 'Visual Fidelity', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Laggy' },
        { feature: 'Hold Management', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Meters' }
      ]
    },

    // ✅ 4. 买家指南 (互动：下载 PDF)
    buyerGuide: [
      { 
        title: 'Installation & Power Setup', 
        content: 'Upgrading your cabinet is straightforward. Ensure your power supply is rated at least 450W and that you are using high-quality micro-switch joysticks. Enter your email below to receive our full "Fire Kirin 3 Master Installation & Calibration PDF" instantly.' 
      },
      { 
        title: 'Revenue Optimization Strategy', 
        content: 'We recommend starting at Level 15 for new routes to build player trust. Our technical support team provides free consultations on skill-window optimization for all wholesale partners to ensure peak profitability from day one.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'PA Route Revenue Jumped 45%',
      content: '"After swapping aging fish boards for Fire Kirin 3 kits, our collections increased by 45%. The 4K visuals and brand power attracted a completely new demographic of competitive players. ROI was hit in 12 days."',
      author: 'Master Route Owner, Pennsylvania Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the Fire Kirin 3 kit compatible with ICT or Pyramid bill acceptors?', answer: 'Yes, the Fire Kirin 3 PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians during location installs or cabinet retrofits.' },
      { question: 'Can we switch between 4, 8, and 10 player configurations?', answer: 'Absolutely. The Fire Kirin 3 software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact 4-player desks to massive 10-player tables, without needing a software re-flash or specialized hardware modifications.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting the legal requirements of various jurisdictions while maintaining a healthy hold.' },
      { question: 'What happens to player credits if the location suffers a sudden power outage?', answer: 'Every Fire Kirin 3 board is equipped with non-volatile F-RAM memory technology. This saves all active credits, game progress, and operator history instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes and securing your venue\'s revenue and integrity.' },
      { question: 'Does the 4K output require specialized cables?', answer: 'While Fire Kirin 3 supports native 4K, it includes an industrial scaler for 1080P compatibility. However, to maximize attraction, we recommend using a 4K IPS monitor and a certified HDMI 2.0 cable to deliver the fluid 60FPS animations and vibrant colors without any signal flickering.' },
      { question: 'Can I sync the machine\'s external LED lighting with gameplay?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible machine lighting, the cabinet will flash red during Incoming Boss warnings and change colors based on the current BOSS battle, creating a fully immersive environment that captures the whole venue\'s attention.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/fire-kirin-3-elite-specs.pdf',
    
    seo: {
      metaTitle: 'Fish Table Game Board Fire Kirin 3 | Skill Based Game Kit',
      metaDescription: 'Shop factory-direct Fire Kirin 3 fish game boards. Featuring iconic 3D boss mechanics, 30-level skill adjustment, and SAS 6.0 accounting for route operators. Wholesale pricing for professional routes.',
      keywords: [
        'Fish Table Game Board Fire Kirin 3',
        'Multiplayer Fish Shooting Game Board',
        'Skill Based Game Kit for Arcade',
        'Fire Kirin 3 PCB Wholesale'
      ]
    }
  }
},
{
  id: 'fish-game-board-fire-kirin-plus',
  name: 'Fish Table Game Board Fire Kirin Plus (Skill Enhanced Kit)',
  category: 'game_board',
  description: 'The industry-leading skill shooting software kit. Featuring the iconic Fire Kirin Plus series with native 4K graphics, 30-level skill adjustment, and industrial-grade 36/10 pin hardware for maximum route retention.',
  imageUrl: '/images/Fire Kirin Plus PCB Distributor.png', // 请在 public/images/ 放入对应的图片
  features: ['Iconic Fire Kirin Plus BOSS System', 'Native 4K UHD @ 60FPS', '30-Level Skill Calibration Logic', 'SAS & Mobile Remote Ready'],
  
  tankPage: {
    headline: 'Command Your Route with the Legendary Fire Kirin Plus Elite',
    subHeadline: 'Ditch the clones. Upgrade to the most recognized skill shooting software and experience up to 42% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal throttling, leading to expensive field service calls. Our Fire Kirin Plus utilizes industrial-grade solid-state capacitors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'Users', 
        title: 'Declining Player Engagement', 
        description: 'Generic themes lose appeal quickly. Fire Kirin Plus features iconic boss battles and a high-stakes social environment that keeps players engaged 25 minutes longer per session, converting foot traffic into dedicated, high-value repeat players for your location.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Compliance & Logic Rigidity', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold. Our software features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Mainboard Architecture', value: 'High-Performance Dual-Core Industrial CPU' },
      { label: 'Interface Protocol', value: 'Standard 36/10 Pin + SAS 6.0 Accounting' },
      { label: 'Game Content', value: 'Fire Kirin Plus, Phoenix Legend, Lava Kirin, etc.' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Storage Technology', value: 'Non-Volatile F-RAM (Instant Game Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Clone Boards',
      rows: [
        { feature: 'Brand Power', us: 'Authentic Fire Kirin Series', them: 'Generic / Unbranded Clones' },
        { feature: 'Visual Fidelity', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Laggy' },
        { feature: 'Hold Stability', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Meters' }
      ]
    },

    // ✅ 4. 买家指南 (互动：下载 PDF)
    buyerGuide: [
      { 
        title: 'Installation & Power Setup', 
        content: 'Upgrading your cabinet is straightforward. Ensure your power supply is rated at least 450W and that you are using high-quality micro-switch joysticks. Enter your email below to receive our full "Fire Kirin Plus Master Installation & Calibration PDF" instantly.' 
      },
      { 
        title: 'Revenue Optimization Strategy', 
        content: 'We recommend starting at Level 15 for new routes to build player trust. Our technical support team offers free consultations on skill-window optimization for all wholesale partners to ensure peak profitability from day one.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'PA Route Revenue Jumped 42%',
      content: '"After swapping aging fish boards for Fire Kirin Plus kits, our collections increased by 42%. The 4K visuals and brand power attracted a completely new demographic of competitive players. ROI was hit in 14 days."',
      author: 'Master Route Owner, Pennsylvania Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the Fire Kirin Plus kit compatible with ICT PA7 bill acceptors?', answer: 'Yes, the PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians during location installs or cabinet retrofits.' },
      { question: 'Can we switch between 4, 8, and 10 player configurations?', answer: 'Absolutely. The Fire Kirin Plus software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact desks to massive tables, without needing a software re-flash or specialized hardware modifications.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting various local legal requirements while maintaining a stable hold.' },
      { question: 'What happens to player credits if the location suffers a power outage?', answer: 'Every Fire Kirin Plus board is equipped with non-volatile F-RAM memory technology. This saves all active credits, game progress, and operator history logs instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes and securing your venue\'s integrity.' },
      { question: 'Does the 4K output require specialized cables?', answer: 'While Fire Kirin Plus supports native 4K, it includes an industrial scaler for 1080P compatibility. However, to maximize attraction, we recommend using a 4K IPS monitor and a certified HDMI 2.0 cable to deliver the fluid 60FPS animations without flickering.' },
      { question: 'Can I sync the machine\'s external LED lighting with gameplay?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible machine lighting, the cabinet will flash red during Incoming Boss warnings and change colors based on the current BOSS battle, creating a fully immersive environment that captures the whole venue\'s attention.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/fire-kirin-plus-elite-specs.pdf',
    
    seo: {
      metaTitle: 'Fish Table Game Board Fire Kirin Plus | Skill Based Game Kit',
      metaDescription: 'Shop factory-direct Fire Kirin Plus fish game boards. Featuring iconic 3D boss mechanics, 30-level skill adjustment, and SAS 6.0 accounting for route operators. Wholesale pricing.',
      keywords: [
        'Fish Table Game Board Fire Kirin Plus',
        'Skill Based Fish Shooting Game Kit',
        'Multiplayer Arcade Software Upgrade',
        'Fire Kirin Plus PCB Distributor'
      ]
    }
  }
},
{
  id: 'fish-game-board-fire-kirin-revenge-elite',
  name: 'Fish Table Game Board Fire Kirin Revenge (Skill Based Kit)',
  category: 'game_board',
  description: 'The ultimate sequel in skill gaming excellence. Featuring the iconic Fire Kirin Revenge series with native 4K UHD graphics, 30-level skill adjustment, and industrial-grade 36/10 pin hardware.',
  imageUrl: '/images/Fish Table Game Board Fire Kirin Revenge.png', // 请在 public/images/ 放入对应的图片
  features: ['Cinematic 4K UHD @ 60FPS', 'Revenge Edition Boss System', '30-Level Skill Calibration Logic', 'SAS & Mobile Remote Ready'],
  
  tankPage: {
    headline: 'Fire Kirin Revenge: Command Your Route with 4K Power',
    subHeadline: 'Ditch the clones. Upgrade to the most immersive skill shooting software and experience up to 45% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal throttling, leading to expensive field service calls. Fire Kirin Revenge uses industrial-grade solid-state capacitors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'Users', 
        title: 'Declining Player Dwell Time', 
        description: 'Generic themes lose appeal quickly. Fire Kirin Revenge features iconic boss battles and a high-stakes social environment that keeps players engaged 25 minutes longer per session, converting foot traffic into dedicated, high-value repeat players for your location.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Compliance & Logic Rigidity', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold. Our software features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Mainboard Architecture', value: 'High-Performance Quad-Core Industrial CPU' },
      { label: 'Interface Protocol', value: 'Standard 36/10 Pin + SAS 6.0 Accounting' },
      { label: 'Game Content', value: 'Fire Kirin Revenge, Phoenix Legend, Lava Kirin, etc.' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Storage Technology', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Clone Boards',
      rows: [
        { feature: 'Brand Power', us: 'Authentic Fire Kirin Revenge', them: 'Generic / Unbranded Clones' },
        { feature: 'Visual Fidelity', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Laggy' },
        { feature: 'Hold Management', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Meters' }
      ]
    },

    // ✅ 4. 买家指南 (互动：下载 PDF)
    buyerGuide: [
      { 
        title: 'Installation & Power Setup', 
        content: 'Upgrading your cabinet is straightforward. Ensure your power supply is rated at least 450W and that you are using high-quality micro-switch joysticks. Enter your email below to receive our full "Fire Kirin Revenge Master Installation & Calibration PDF" instantly.' 
      },
      { 
        title: 'Revenue Optimization Strategy', 
        content: 'We recommend starting at Level 15 for new routes to build player trust. Our technical support team provides free consultations on skill-window optimization for all wholesale partners to ensure peak profitability from day one.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'PA Route Revenue Jumped 45%',
      content: '"After swapping aging fish boards for Fire Kirin Revenge kits, our collections increased by 45%. The 4K visuals and brand power attracted a completely new demographic of competitive players. ROI was achieved in 14 days."',
      author: 'Master Route Owner, Pennsylvania Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the Fire Kirin Revenge kit compatible with ICT PA7 bill acceptors?', answer: 'Yes, the PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians during location installs or cabinet retrofits.' },
      { question: 'Can we switch between 4, 8, and 10 player configurations?', answer: 'Absolutely. The Fire Kirin Revenge software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact desks to massive tables, without needing a software re-flash or specialized hardware modifications.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting various local legal requirements while maintaining a stable hold.' },
      { question: 'What happens to player credits if the location suffers a sudden power outage?', answer: 'Every Fire Kirin Revenge board is equipped with non-volatile F-RAM memory technology. This saves all active credits, game progress, and operator history logs instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes and securing your venue\'s revenue and integrity.' },
      { question: 'Does the 4K output require specialized cables?', answer: 'While Fire Kirin Revenge supports native 4K, it includes an industrial scaler for 1080P compatibility. However, to maximize attraction, we recommend using a 4K IPS monitor and a certified HDMI 2.0 cable to deliver the fluid 60FPS animations and vibrant colors without any signal flickering.' },
      { question: 'Can I sync the machine\'s external LED lighting with gameplay?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible machine lighting, the cabinet will flash red during Incoming Boss warnings and change colors based on the current BOSS battle, creating a fully immersive environment that captures the whole venue\'s attention.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/fire-kirin-revenge-elite-specs.pdf',
    
    seo: {
      metaTitle: 'Fish Table Game Board Fire Kirin Revenge | Skill Based Game Kit',
      metaDescription: 'Shop factory-direct Fire Kirin Revenge fish game boards. Featuring iconic 3D boss mechanics, 4K UHD graphics, 30-level skill adjustment, and SAS 6.0 accounting for route operators.',
      keywords: [
        'Fish Table Game Board Fire Kirin Revenge',
        'Multiplayer Fish Shooting Game Kit',
        'Skill Based Fish Game Software Upgrade',
        'Fire Kirin Revenge PCB Distributor'
      ]
    }
  }
},
{
  id: 'fish-game-board-mermaid-warrior-3-elite',
  name: 'Fish Table Game Board Mermaid Warrior 3 (Skill Based Kit)',
  category: 'game_board',
  description: 'The industry-leading skill shooting software kit. Featuring the iconic Mermaid Warrior 3 series with native 4K graphics, 30-level skill adjustment, and industrial-grade 36/10 pin hardware.',
  imageUrl: '/images/fish game board mermaid warrior 3.png', // 请在 public/images/ 放入对应的图片
  features: ['Iconic 3D Mermaid BOSS System', 'Native 4K UHD @ 60FPS', '30-Level Skill Calibration Logic', 'SAS & Mobile Remote Ready'],
  
  tankPage: {
    headline: 'Command Your Route with the Legendary Mermaid Warrior 3 Elite',
    subHeadline: 'Stop player churn and hardware failures. Upgrade to the most attractive skill shooting software and experience up to 42% revenue growth.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal throttling, leading to expensive field service calls. Our MW3 kit utilizes industrial-grade solid-state capacitors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'Users', 
        title: 'Declining Player Engagement', 
        description: 'Generic themes lose appeal quickly. Mermaid Warrior 3 features iconic boss battles and a vibrant social environment that keeps players engaged 25 minutes longer per session, converting foot traffic into dedicated, high-value repeat players for your location.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Compliance & Logic Rigidity', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold. Our software features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Processor Architecture', value: 'High-Performance Quad-Core Industrial CPU' },
      { label: 'Interface Protocol', value: 'Standard 36/10 Pin + SAS 6.0 Accounting' },
      { label: 'Game Content', value: 'Mermaid Warrior 3, Dragon Legend, Ocean King Series, etc.' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Storage Tech', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Clone Boards',
      rows: [
        { feature: 'Visual Theme', us: 'Authentic Mermaid Warrior Series', them: 'Generic / Unbranded Clones' },
        { feature: 'Visual Fidelity', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Laggy' },
        { feature: 'Hold Management', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Meters' }
      ]
    },

    // ✅ 4. 买家指南 (互动：下载 PDF)
    buyerGuide: [
      { 
        title: 'Installation & Power Setup', 
        content: 'Upgrading your cabinet is straightforward. Ensure your power supply is rated at least 450W and that you are using high-quality micro-switch joysticks. Enter your email below to receive our full "MW3 Master Installation & Calibration PDF" instantly.' 
      },
      { 
        title: 'Revenue Optimization Strategy', 
        content: 'We recommend starting at Level 15 for new routes to build player trust. Our technical support team provides free consultations on skill-window optimization for all B2B wholesale partners to ensure peak profitability from day one.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'PA Route Revenue Jumped 42%',
      content: '"After swapping aging fish boards for MW3 kits, our collections increased by 42%. The 4K visuals and brand power attracted a completely new demographic of competitive players. ROI was achieved in 14 days."',
      author: 'Master Route Owner, Pennsylvania Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the MW3 kit compatible with ICT or Pyramid bill acceptors?', answer: 'Yes, the PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians during location installs or cabinet retrofits.' },
      { question: 'Can we switch between 4, 8, and 10 player configurations?', answer: 'Absolutely. The Mermaid Warrior 3 software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact 4-player desks to massive 10-player tables, without needing a software re-flash or specialized hardware modifications.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting the legal requirements of various jurisdictions while maintaining a healthy hold.' },
      { question: 'What happens to player credits if the location suffers a sudden power outage?', answer: 'Every MW3 board is equipped with non-volatile F-RAM memory technology. This saves all active credits, game progress, and operator history instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes and securing your venue\'s revenue and integrity.' },
      { question: 'Does the 4K output require specialized cables?', answer: 'While MW3 supports native 4K, it includes an industrial scaler for 1080P compatibility. However, to maximize attraction, we recommend using a 4K IPS monitor and a certified HDMI 2.0 cable to deliver the fluid 60FPS animations and vibrant colors without any signal flickering.' },
      { question: 'Can I sync machine external LED lighting with gameplay?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible machine lighting, the cabinet will flash red during Incoming Boss warnings and change colors based on the current BOSS battle, creating a fully immersive environment that captures the whole venue\'s attention.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/mermaid-warrior-3-elite-specs.pdf',
    
    seo: {
      metaTitle: 'Fish Table Game Board Mermaid Warrior 3 | Skill Based Game Kit',
      metaDescription: 'Shop factory-direct Mermaid Warrior 3 fish game boards. Featuring iconic 3D boss mechanics, 30-level skill adjustment, and SAS 6.0 accounting for route operators. Wholesale pricing for professional routes.',
      keywords: [
        'Fish Table Game Board Mermaid Warrior 3',
        'Multiplayer Skill Shooting Game Board',
        'High Retention Fish Game Kit',
        'Mermaid Warrior 3 PCB Wholesale'
      ]
    }
  }
},
{
  id: 'fish-game-board-monkey-king-strike-elite',
  name: 'Fish Table Game Board Monkey King Strike (3D Skill Kit)',
  category: 'game_board',
  description: 'The legendary Monkey King Strike skill gaming software. Featuring cinematic 3D graphics, a proprietary 30-level skill window adjustment, and industrial-grade hardware for maximum route stability.',
  imageUrl: '/images/Multiplayer Skill Shooting Software Monkey King Strike.png', // 请确保在 public/images/ 放入对应图片
  features: ['Cinematic 3D Boss Battles', 'Native 4K UHD @ 60FPS Output', '30-Level Skill Calibration Logic', 'Universal 36/10 Pin Compatibility'],
  
  tankPage: {
    headline: 'Monkey King Strike: Command the Legend, Maximize Your Hold',
    subHeadline: 'Ditch the generic themes. Upgrade to the most immersive 3D skill shooter and experience up to 40% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal throttling, leading to expensive field service calls. Monkey King Strike uses industrial-grade solid-state capacitors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges or unexpected outages.' 
      },
      { 
        icon: 'Users', 
        title: 'Declining Player Dwell Time', 
        description: 'Generic themes lose appeal quickly. Monkey King Strike features iconic boss battles and a high-stakes social environment that keeps players engaged 25 minutes longer per session, effectively converting foot traffic into dedicated, high-value repeat players for your location.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Inflexible Compliance Logic', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold. Our software features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory and market needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Mainboard Architecture', value: 'High-Performance Dual-Core Industrial GPU' },
      { label: 'Interface Protocol', value: 'Standard Gold-Plated 36/10 Pin + SAS 6.0' },
      { label: 'Game Content', value: 'Monkey King Strike, Dragon Palace, Golden Cudgel, etc.' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Data Recovery', value: 'Non-Volatile F-RAM (Instant Game State Save)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Clone Boards',
      rows: [
        { feature: 'Visual Quality', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Laggy' },
        { feature: 'Reliability', us: 'Industrial Grade Components', them: 'Generic / Consumer Grade' },
        { feature: 'Management', us: 'Full SAS 6.0 & Mobile Remote', them: 'Analog Only / No Accounting' }
      ]
    },

    // ✅ 4. 买家指南 (互动：点击发送 PDF)
    buyerGuide: [
      { 
        title: 'Installation & Power Setup', 
        content: 'Upgrading your cabinet is straightforward. Ensure your power supply is rated at least 450W and that you are using high-quality micro-switch joysticks. Enter your email below to receive our full "Monkey King Strike Master Installation & Calibration PDF" instantly.' 
      },
      { 
        title: 'Revenue Optimization Strategy', 
        content: 'We recommend starting at Level 15 for new routes. Our technical support team provides free consultations on skill-window optimization for all B2B wholesale partners to ensure peak profitability from day one.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'PA Route Revenue Jumped 42%',
      content: '"After swapping aging fish boards for Monkey King Strike kits, our collections increased by 42%. The 4K visuals and recognizable IP attracted a completely new demographic of competitive players. ROI was hit in 14 days."',
      author: 'Master Route Owner, Pennsylvania Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the Monkey King Strike kit compatible with ICT and Pyramid bill acceptors?', answer: 'Yes, the PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians during location installs.' },
      { question: 'Can we switch between 4, 8, and 10 player configurations?', answer: 'Absolutely. The software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact desks to massive tables, without needing a software re-flash or specialized hardware modifications.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting various local legal requirements while maintaining a stable hold.' },
      { question: 'What happens to player credits if the location suffers a sudden power outage?', answer: 'Every Monkey King Strike board is equipped with non-volatile F-RAM memory technology. This saves all active credits, game progress, and operator history logs instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes and securing your revenue.' },
      { question: 'Does the 4K output require specialized cables?', answer: 'While the board supports native 4K, it includes an industrial scaler for 1080P compatibility. However, to maximize attraction, we recommend using a 4K IPS monitor and a certified HDMI 2.0 cable to deliver the fluid 60FPS animations without any signal flickering.' },
      { question: 'Can I sync machine LED lighting with gameplay?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible machine lighting, the cabinet will flash red during Monkey King Rage warnings and change colors based on the current BOSS battle, creating a fully immersive environment that captures the whole venue\'s attention.' }
    ],

    // ✅ 7. SEO 与 Meta
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/monkey-king-strike-specs.pdf',
    
    seo: {
      metaTitle: 'Fish Table Game Board Monkey King Strike | Skill Based Shooting Kit',
      metaDescription: 'Shop factory-direct Monkey King Strike fish game boards. Featuring iconic 3D boss mechanics, 30-level skill adjustment, and SAS 6.0 accounting for route operators. Wholesale pricing.',
      keywords: [
        'Fish Table Game Board Monkey King Strike',
        'Multiplayer Skill Shooting Software',
        'Fish Table Game Kit Wholesale',
        'Monkey King Strike PCB Distributor'
      ]
    }
  }
},
{
  id: 'fish-game-board-ocean-monster-3-elite',
  name: 'Fish Table Game Board Ocean Monster 3 (Skill Based Kit)',
  category: 'game_board',
  description: 'The industry-leading skill shooting software kit. Featuring the iconic Ocean Monster 3 series with native 4K graphics, 30-level skill adjustment, and industrial-grade 36/10 pin hardware.',
  imageUrl: '/images/Ocean Monster 3 Skill Based Kit.png', // 请在 public/images/ 放入对应的图片
  features: ['Legendary 3D BOSS System', 'Native 4K UHD @ 60FPS', '30-Level Skill Calibration Logic', 'SAS 6.0 & SAS-Link Ready'],
  
  tankPage: {
    headline: 'Command Your Route with the Legendary Ocean Monster 3 Elite',
    subHeadline: 'Stop player churn and hardware failures. Upgrade to the most recognized skill shooting software and experience up to 42% revenue growth.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal throttling, leading to expensive field service calls. Our OM3 kit utilizes industrial-grade solid-state capacitors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'Users', 
        title: 'Declining Player Engagement', 
        description: 'Generic themes lose appeal quickly. Ocean Monster 3 features iconic boss battles and a vibrant social environment that keeps players engaged 25 minutes longer per session, converting foot traffic into dedicated, high-value repeat players for your location.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Compliance & Logic Rigidity', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold. Our software features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Processor Architecture', value: 'High-Performance Quad-Core Industrial CPU' },
      { label: 'Interface Protocol', value: 'Standard 36/10 Pin + SAS 6.0 Accounting' },
      { label: 'Game Content', value: 'Ocean Monster 3, Phoenix Legend, Dragon King Series, etc.' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Storage Tech', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Clone Boards',
      rows: [
        { feature: 'Brand Awareness', us: 'Authentic Ocean Monster Series', them: 'Generic / Unbranded Clones' },
        { feature: 'Visual Fidelity', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Laggy' },
        { feature: 'Hold Management', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Meters' }
      ]
    },

    // ✅ 4. 买家指南 (互动：下载 PDF)
    buyerGuide: [
      { 
        title: 'Installation & Power Setup', 
        content: 'Upgrading your cabinet is straightforward. Ensure your power supply is rated at least 450W and that you are using high-quality micro-switch joysticks. Enter your email below to receive our full "Ocean Monster 3 Master Installation & Calibration PDF" instantly.' 
      },
      { 
        title: 'Revenue Optimization Strategy', 
        content: 'We recommend starting at Level 15 for new routes to build player trust. Our technical support team provides free consultations on skill-window optimization for all B2B wholesale partners to ensure peak profitability from day one.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'PA Route Revenue Jumped 42%',
      content: '"After swapping aging fish boards for Ocean Monster 3 kits, our collections increased by 42%. The 4K visuals and brand power attracted a completely new demographic of competitive players. ROI was hit in 14 days."',
      author: 'Master Route Owner, Pennsylvania Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the kit compatible with ICT or Pyramid bill acceptors?', answer: 'Yes, the PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians during location installs or cabinet retrofits.' },
      { question: 'Can we switch between 4, 8, and 10 player configurations?', answer: 'Absolutely. The Ocean Monster 3 software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact desks to massive tables, without needing a software re-flash or specialized hardware modifications.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting the legal requirements of various jurisdictions while maintaining a healthy hold.' },
      { question: 'What happens to player credits if the location suffers a sudden power outage?', answer: 'Every Ocean Monster 3 board is equipped with non-volatile F-RAM memory technology. This saves all active credits, game progress, and operator history logs instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes and securing your venue\'s revenue and integrity.' },
      { question: 'Does the 4K output require specialized cables?', answer: 'While Ocean Monster 3 supports native 4K, it includes an industrial scaler for 1080P compatibility. However, to maximize attraction, we recommend using a 4K IPS monitor and a certified HDMI 2.0 cable to deliver the fluid 60FPS animations and vibrant colors without any signal flickering.' },
      { question: 'Can I sync machine external LED lighting with gameplay?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible machine lighting, the cabinet will flash red during Incoming Boss warnings and change colors based on the current BOSS battle, creating a fully immersive environment that captures the whole venue\'s attention.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/ocean-monster-3-elite-specs.pdf',
    
    seo: {
      metaTitle: 'Fish Table Game Board Ocean Monster 3 | Skill Based Game Kit',
      metaDescription: 'Shop factory-direct Ocean Monster 3 fish game boards. Featuring iconic 3D boss mechanics, 30-level skill adjustment, and SAS 6.0 accounting for route operators. Wholesale pricing for high-retention software.',
      keywords: [
        'Fish Table Game Board Ocean Monster 3',
        'Multiplayer Fish Shooting Game Board',
        'Skill Based Arcade Game PCB Wholesale',
        'Ocean Monster 3 PCB Distributor'
      ]
    }
  }
},
{
  id: 'fish-game-board-panda-vs-alien-elite',
  name: 'fish table game board Panda vs Alien (Sci-Fi Skill Kit)',
  category: 'game_board',
  description: 'A revolutionary sci-fi themed skill gaming software kit. Featuring native 4K 3D graphics, a proprietary 30-level skill window adjustment, and industrial-grade 36/10 pin hardware for professional route operators.',
  imageUrl: '/images/fish table game board Panda vs Alien.png', // 请在 public/images/ 放入对应的图片
  features: ['Unique Sci-Fi 3D Theme', 'Native 4K UHD @ 60FPS', '30-Level Skill Calibration Logic', 'SAS & Mobile Remote Ready'],
  
  tankPage: {
    headline: 'Panda vs Alien: Command the Galaxy, Maximize Your Hold',
    subHeadline: 'Ditch the marine themes. Upgrade to the most immersive 3D sci-fi skill shooter and experience up to 42% revenue growth.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal throttling, leading to expensive field service calls. Panda vs Alien utilizes industrial-grade solid-state capacitors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'Users', 
        title: 'Declining Player Engagement', 
        description: 'Generic themes lose appeal quickly. Panda vs Alien features iconic boss battles and a vibrant social environment that keeps players engaged 25 minutes longer per session, converting foot traffic into dedicated, high-value repeat players for your location.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Compliance & Logic Rigidity', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold. Our software features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Processor Architecture', value: 'High-Performance Dual-Core Industrial GPU' },
      { label: 'Interface Protocol', value: 'Standard Gold-Plated 36/10 Pin + SAS 6.0' },
      { label: 'Game Content', value: 'Panda vs Alien, Galactic War, Mothership Strike, etc.' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Storage Technology', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Marine Fish Boards',
      rows: [
        { feature: 'Visual Theme', us: '3D Sci-Fi (Unique)', them: '2D/3D Underwater (Common)' },
        { feature: 'Visual Fidelity', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Laggy' },
        { feature: 'Hold Management', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Meters' }
      ]
    },

    // ✅ 4. 买家指南 (互动：下载 PDF)
    buyerGuide: [
      { 
        title: 'Installation & Power Setup', 
        content: 'Upgrading your cabinet is straightforward. Ensure your power supply is rated at least 450W and that you are using high-quality micro-switch joysticks. Enter your email below to receive our full "Panda vs Alien Master Installation & Calibration PDF" instantly.' 
      },
      { 
        title: 'Revenue Optimization Strategy', 
        content: 'We recommend starting at Level 15 for new routes to build player trust. Our technical support team provides free consultations on skill-window optimization for all B2B wholesale partners to ensure peak profitability from day one.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'PA Route Revenue Jumped 42%',
      content: '"After swapping aging fish boards for Panda vs Alien kits, our collections increased by 42%. The 4K visuals and sci-fi power attracted a completely new demographic of competitive players. ROI was hit in 14 days."',
      author: 'Master Route Owner, Pennsylvania Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the Panda vs Alien kit compatible with ICT or Pyramid bill acceptors?', answer: 'Yes, the PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians during location installs or cabinet retrofits.' },
      { question: 'Can we switch between 4, 8, and 10 player configurations?', answer: 'Absolutely. The software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact desks to massive tables, without needing a software re-flash or specialized hardware modifications.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting the legal requirements of various jurisdictions while maintaining a stable hold.' },
      { question: 'What happens to player credits if the location suffers a sudden power outage?', answer: 'Every board is equipped with non-volatile F-RAM memory technology. This saves all active credits, game progress, and operator history logs instantly as they happen. When power is restored, the game resumes exactly where it left off, preventing player disputes and securing your venue\'s integrity.' },
      { question: 'Does the 4K output require specialized cables?', answer: 'While Panda vs Alien supports native 4K, it includes an industrial scaler for 1080P compatibility. However, to maximize attraction, we recommend using a 4K IPS monitor and a certified HDMI 2.0 cable to deliver the fluid 60FPS animations and vibrant colors without any signal flickering.' },
      { question: 'Can I sync the machine\'s external LED lighting with gameplay?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible machine lighting, the cabinet will flash red during Alien Invasion BOSS warnings and change colors based on the current BOSS battle, creating a fully immersive environment that captures the whole venue\'s attention.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/panda-vs-alien-elite-specs.pdf',
    
    seo: {
      metaTitle: 'fish table game board Panda vs Alien | Skill Based Game Kit',
      metaDescription: 'Shop factory-direct Panda vs Alien fish game boards. Featuring unique sci-fi boss mechanics, 30-level skill adjustment, and SAS 6.0 accounting for route operators. Wholesale pricing for professional routes.',
      keywords: [
        'fish table game board Panda vs Alien',
        'skill based fish shooting game kit',
        'multiplayer arcade game software',
        'Panda vs Alien PCB Distributor'
      ]
    }
  }
},
{
  id: 'fish-game-board-thunder-wings-elite',
  name: 'Fish Table Game Board Thunder Wings (Skill Based Kit)',
  category: 'game_board',
  description: 'The ultimate aviation-themed skill shooting software. Featuring native 4K UHD graphics, a proprietary 30-level skill window adjustment, and industrial-grade 36/10 pin hardware for professional route operators.',
  imageUrl: '/images/Aviation Themed Skill Shooting Kit Thunder Wings.png', // 请在 public/images/ 放入对应的图片
  features: ['Cinematic 3D Aircraft Combat', 'Native 4K UHD @ 60FPS', '30-Level Skill Calibration Logic', 'SAS & Mobile Remote Ready'],
  
  tankPage: {
    headline: 'Thunder Wings: Command the Sky, Conquer Your Route',
    subHeadline: 'Ditch the marine themes. Upgrade to the most immersive 3D aviation skill shooter and experience up to 45% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal throttling, leading to expensive field service calls. Thunder Wings uses industrial-grade solid-state capacitors and non-volatile memory to ensure 99.9% uptime and zero data loss during power surges or unexpected outages.' 
      },
      { 
        icon: 'Users', 
        title: 'Declining Player Engagement', 
        description: 'Generic underwater themes lose appeal quickly. Thunder Wings features iconic aircraft boss battles and a high-stakes social environment that keeps players engaged 25 minutes longer per session, converting foot traffic into dedicated repeat players for your location.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Compliance & Logic Rigidity', 
        description: 'Fixed difficulty settings can either alienate players or ruin your hold. Our software features a refined 30-level skill window adjustment system, allowing you to perfectly calibrate the hand-eye coordination challenge to meet your specific local regulatory needs.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Resolution', value: 'Native 4K UHD (3840 x 2160) @ 60FPS' },
      { label: 'Mainboard Architecture', value: 'High-Performance Quad-Core Industrial CPU' },
      { label: 'Interface Protocol', value: 'Standard Gold-Plated 36/10 Pin + SAS 6.0' },
      { label: 'Game Theme', value: '3D High-Octane Aviation & Aerial Combat' },
      { label: 'Player Capacity', value: 'Configurable for 4, 6, 8, or 10 Stations' },
      { label: 'Security Tech', value: 'Non-Volatile F-RAM (Instant Game Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard 2D Marine Boards',
      rows: [
        { feature: 'Visual Theme', us: '3D Aerial Combat (Unique)', them: '2D/3D Underwater (Common)' },
        { feature: 'Visual Fidelity', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Laggy' },
        { feature: 'Accounting Support', us: 'Full SAS 6.0 Integration', them: 'Analog Only / No Accounting' }
      ]
    },

    // ✅ 4. 买家指南 (互动：下载 PDF)
    buyerGuide: [
      { 
        title: 'Installation & Power Setup', 
        content: 'Upgrading your cabinet is straightforward. Ensure your power supply is rated at least 450W and that you are using high-quality micro-switch joysticks. Enter your email below to receive our full "Thunder Wings Master Installation & Calibration PDF" instantly.' 
      },
      { 
        title: 'Revenue Optimization Strategy', 
        content: 'We recommend starting at Level 15 for new routes to build player trust. Our technical support team provides free consultations on skill-window optimization for all B2B wholesale partners to ensure peak profitability from day one.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'PA Route Revenue Jumped 45%',
      content: '"After swapping aging fish boards for Thunder Wings kits, our collections increased by 45%. The unique theme and 4K visuals attracted a completely new demographic of competitive players. ROI was hit in 14 days."',
      author: 'Master Route Owner, Pennsylvania Hub'
    },

    // ✅ 6. 常见问题 (FAQ - 6 entries)
    faqs: [
      { question: 'Is the Thunder Wings kit compatible with ICT or Pyramid bill acceptors?', answer: 'Yes, the Thunder Wings PCB is designed with a universal 12V pulse protocol. The included wiring harness features pre-labeled drops that allow for a plug-and-play connection to all major bill validator brands, ensuring zero-configuration setup for your technicians during location installs or cabinet retrofits.' },
      { question: 'Can we switch between 4, 8, and 10 player configurations?', answer: 'Absolutely. The Thunder Wings software is dynamically configurable through the internal operator menu. This allows you to move the kit between different cabinet sizes, from compact desks to massive tables, without needing a software re-flash or specialized hardware modifications.' },
      { question: 'How does the Skill Window adjustment ensure compliance?', answer: 'The board features a password-protected setup menu where you can adjust hit-sensitivity and reflex-timing across 30 distinct levels. This allows you to fine-tune the game mechanics to ensure the skill element predominates, meeting the legal requirements of various jurisdictions.' },
      { question: 'What happens to player credits if the location suffers a power outage?', answer: 'Every board is equipped with non-volatile F-RAM memory technology. This saves all active credits, game progress, and operator history logs instantly. When power is restored, the game resumes exactly where it left off, preventing player disputes and securing your venue\'s revenue.' },
      { question: 'Does the 4K output require specialized cables?', answer: 'While Thunder Wings supports native 4K, it includes an industrial scaler for 1080P compatibility. However, to maximize attraction, we recommend using a 4K IPS monitor and a certified HDMI 2.0 cable to deliver the fluid 60FPS animations without any signal flickering.' },
      { question: 'Can I sync the machine\'s external LED lighting with gameplay?', answer: 'Yes, the kit includes an addressable RGB control header. When connected to compatible machine lighting, the cabinet will flash red during Incoming Boss warnings and change colors based on the current BOSS battle, creating a fully immersive environment.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/thunder-wings-elite-specs.pdf',
    
    seo: {
      metaTitle: 'Fish Table Game Board Thunder Wings | Aviation Skill Shooting Kit',
      metaDescription: 'Shop factory-direct Thunder Wings fish game boards. Featuring cinematic 3D aircraft bosses, 30-level skill adjustment, and SAS 6.0 accounting for route operators. Wholesale pricing.',
      keywords: [
        'Fish Table Game Board Thunder Wings',
        'Aviation Themed Skill Shooting Kit',
        'High Performance Multiplayer Game PCB',
        'Thunder Wings Game Board Wholesale'
      ]
    }
  }
},
{
  id: 'skill-based-game-board-golden-empires-777',
  name: 'Skill-Based Game Board Golden Empires 777',
  category: 'skill_based_game_board', // ✅ 使用最新的 ID
  description: 'The industry-standard Nudge game platform. Featuring iconic Golden Empires graphics, native HD output, and industrial-grade 36/10 pin hardware for professional route operators.',
  imageUrl: '/images/Skill-Based Game Board Golden Empires 777.png', // 请在 public/images/ 放入图片
  features: ['Nudge-Based Skill Logic', '1080P/4K HD Output Support', 'Universal 36/10 Pin Interface', 'Touch Screen Protocol Support'],
  
  tankPage: {
    headline: 'Command Your Route with Golden Empires 777 Elite',
    subHeadline: 'Ditch the clones. Upgrade to the most reliable Nudge Game Board and experience up to 38% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal instability, leading to expensive field service calls. Our board uses industrial-grade capacitors and non-volatile F-RAM to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Compliance & Audit Risks', 
        description: 'Poor accounting systems lead to location disputes and regulatory issues. Our board features full SAS-link support and a secure, password-protected audit menu, providing the transparency and professional-grade asset protection that route operators demand.' 
      },
      { 
        icon: 'Users', 
        title: 'Player Boredom & Churn', 
        description: 'Players have become tired of repetitive generic themes. Golden Empires 777 offers iconic brand familiarity that attracts players instantly, while the responsive Nudge interface keeps them engaged for significantly longer play sessions.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Output', value: 'VGA / HDMI Dual Resolution Support (Up to 4K)' },
      { label: 'Interface Type', value: 'Industry Standard Gold-Plated 36/10 Pin' },
      { label: 'Logic Framework', value: 'Nudge-Based Skill Logic & Redemption Mode' },
      { label: 'Touch Support', value: 'Compatible with 3M and Elo Touch Protocols' },
      { label: 'Accounting Protocol', value: 'Full SAS-Link & Secure Local Audit Menu' },
      { label: 'Memory Tech', value: 'Non-Volatile F-RAM (Instant Game Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Clone Nudge Boards',
      rows: [
        { feature: 'Visual Dimension', us: 'Native HD Graphics', them: 'Upscaled / Blurry Assets' },
        { feature: 'Security Protocol', us: 'SAS-Link & Encrypted Keys', them: 'Analog Meters Only' },
        { feature: 'Reliability', us: 'Industrial Grade (99.9%)', them: 'Frequent Memory Crashes' }
      ]
    },

    // ✅ 4. 买家指南
    buyerGuide: [
      { 
        title: 'Retrofit and Installation', 
        content: 'Upgrading your existing cabinet is straightforward. Ensure your power supply is rated at least 350W and check your touch screen calibration. Enter your email below to receive our full "Skill Game Retrofit Manual" PDF instantly.' 
      },
      { 
        title: 'Optimizing Revenue Hold', 
        content: 'We recommend starting at Level 15 for new routes. Our technical support team provides free consultations on skill-window optimization for all B2B wholesale partners to ensure peak profitability.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Georgia Route Revenue Jumped 38%',
      content: '"By swapping aging legacy boards for the Golden Empires 777 Elite kits, we saw an immediate 38% jump in weekly collections. The HD visuals and Nudge power attracted a completely new demographic. ROI was hit in 16 days."',
      author: 'Master Route Operator, Georgia'
    },

    // ✅ 6. 常见问题
    faqs: [
      { question: 'Is this Skill-Based Game Board compatible with my current cabinet wiring?', answer: 'Yes, the board utilizes the industry-standard 36/10 pin gold-plated edge connector. This allows for a direct plug-and-play replacement in most existing 8-liner cabinets, ensuring your technicians can complete the hardware upgrade in under 15 minutes without any complex re-wiring.' },
      { question: 'How does the Nudge feature work to ensure the game is skill-based?', answer: 'The software includes a refined Nudge mechanic where players must manually interact with the reels after a spin to move them into a winning position. This requires hand-eye coordination and reflex timing, ensuring the game outcome is determined by player skill rather than pure chance.' },
      { question: 'Can I adjust the hold percentage to match my specific location needs?', answer: 'Absolutely. The board features a password-protected operator menu with 30 distinct levels of skill-window calibration. This allows you to fine-tune the difficulty to match the skill level of your local players while maintaining a healthy and predictable profit margin.' },
      { question: 'What happens to the credits if the machine loses power suddenly?', answer: 'Every board is equipped with non-volatile F-RAM memory technology. This technology saves every player credit, game progress state, and operator log instantly. When power is restored, the machine resumes exactly where it left off, preventing player disputes.' },
      { question: 'Does the PCB support modern touch screen monitor interfaces?', answer: 'Yes, this Universal Game Logic Board is fully compatible with most standard 3M and Elo touch screen protocols. This enables a more engaging and modern social gaming experience, allowing players to interact directly with the game elements on the screen.' },
      { question: 'How do you protect the board from static electricity?', answer: 'Our boards feature an enhanced 15KV ESD protection circuit designed specifically for environments with static-prone carpets. This prevents environmental static from resetting the processor or damaging sensitive logic components, ensuring zero technical interruptions.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/golden-empires-777-specs.pdf',
    
    seo: {
      metaTitle: 'Skill-Based Game Board Golden Empires 777 | Nudge Game Kit',
      metaDescription: 'Shop factory-direct Golden Empires 777 Nudge boards. Featuring native HD graphics, 30-level skill adjustment, and SAS-link support for route operators. Wholesale pricing.',
      keywords: [
        'Skill-Based Game Board Golden Empires 777',
        'Nudge Game Board Wholesale',
        'Redemption Game PCB Kit',
        'Skill Gaming PCB Distributor'
      ]
    }
  }
},
{
  id: 'skill-based-game-board-lunars-quest-777',
  name: 'Skill-Based Game Board Lunar\'s Quest 777',
  category: 'skill_based_game_board',
  description: 'The cinematic sci-fi redemption platform. Featuring immersive lunar-themed graphics, native 4K output, and industrial-grade 36/10 pin hardware for elite route operators.',
  imageUrl: '/images/Redemption Game PCB Kit Lunars Quest 777.png', // 请在 public/images/ 放入对应图片
  features: ['Cinematic 3D Lunar Graphics', 'Native 4K UHD Output Support', 'Nudge-Based Skill Logic', 'Universal 36/10 Pin Interface'],
  
  tankPage: {
    headline: 'Command the Galaxy, Maximize Your Hold: Lunar\'s Quest 777 Elite',
    subHeadline: 'Ditch the legacy themes. Upgrade to the most immersive 3D Nudge Game Board and experience up to 42% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal instability, leading to expensive field service calls. Our board uses industrial-grade capacitors and non-volatile F-RAM to ensure 99.9% uptime and zero data loss during power surges or unexpected outages.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Audit and Compliance Risks', 
        description: 'Poor accounting systems lead to location disputes and potential regulatory scrutiny. Our board features full SAS-link support and a secure, password-protected audit menu, providing the transparency and professional-grade asset protection that serious route operators demand for daily operation.' 
      },
      { 
        icon: 'Users', 
        title: 'Player Boredom & Location Churn', 
        description: 'Players have become tired of repetitive legacy themes, leading to shorter play sessions. Lunar\'s Quest 777 offers a cinematic 4K sci-fi environment that attracts players instantly, while the responsive Nudge interface keeps them engaged for significantly longer periods of time.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Output', value: 'VGA / HDMI Dual Resolution Support (Up to 4K UHD)' },
      { label: 'Interface Type', value: 'Industry Standard Gold-Plated 36/10 Pin Edge' },
      { label: 'Logic Protocol', value: 'Nudge-Based Skill Logic & Redemption Protocol' },
      { label: 'Touch Interface', value: 'Full Compatibility with 3M and Elo Touch Protocols' },
      { label: 'ESD Protection', value: 'Enhanced 15KV Static Circuit for High-Traffic Routes' },
      { label: 'Memory Tech', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Legacy 8-Liner Boards',
      rows: [
        { feature: 'Visual Real Estate', us: 'Native 4K 3D Sci-Fi', them: '2D Stretched Legacy Assets' },
        { feature: 'Security Protocol', us: 'Full SAS-Link & Audit', them: 'Analog Only / No Accounting' },
        { feature: 'ESD Hardening', us: 'Enhanced 15KV Protection', them: 'Standard / Unprotected' }
      ]
    },

    // ✅ 4. 买家指南 (互动点：发送 PDF)
    buyerGuide: [
      { 
        title: 'Retrofit and Installation', 
        content: 'Upgrading your existing vertical cabinet is straightforward. Ensure your power supply is rated at least 350W and check your touch screen calibration. Enter your email below to receive our full "Skill Game Retrofit Manual" PDF instantly.' 
      },
      { 
        title: 'Optimizing Revenue Hold', 
        content: 'We recommend starting at Level 15 for new locations to build player confidence. Our technical support team provides free consultations on skill-window optimization for all wholesale partners to ensure peak profitability.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'North Carolina Route Collections Jumped 42%',
      content: '"After swapping aging legacy software for Lunar\'s Quest 777, our weekly hold increased by 42%. The cinematic 4K visuals attracted a younger, more competitive demographic. ROI was achieved in 14 days of peak operation."',
      author: 'A. Jensen, Master Route Operator'
    },

    // ✅ 6. 常见问题 (FAQ)
    faqs: [
      { question: 'Is this Skill-Based Game Board compatible with my current cabinet wiring?', answer: 'Yes, the board utilizes the industry-standard 36/10 pin gold-plated edge connector. This allows for a direct plug-and-play replacement in most existing 8-liner or skill-game cabinets, ensuring your technicians can complete the hardware upgrade in under 15 minutes without any complex re-wiring.' },
      { question: 'How does the Nudge feature work to ensure the game is skill-based?', answer: 'The software includes a refined Nudge mechanic where players must manually interact with the reels after a spin to move them into a winning position. This requires hand-eye coordination and reflex timing, ensuring the game outcome is determined by player skill rather than pure chance, which is essential for legal compliance.' },
      { question: 'Can I adjust the hold percentage to match my specific location needs?', answer: 'Absolutely. The board features a password-protected operator menu with 30 distinct levels of skill-window calibration. This allows you to fine-tune the difficulty to match the skill level of your local players while maintaining a healthy and predictable profit margin for your route business.' },
      { question: 'What happens to the credits if the machine loses power suddenly?', answer: 'Every board is equipped with non-volatile F-RAM memory technology. This advanced feature saves every player credit, game progress state, and operator log instantly. When power is restored, the machine resumes exactly where it left off, preventing player disputes and securing your venue\'s reputation and integrity.' },
      { question: 'Does the PCB support modern touch screen monitor interfaces?', answer: 'Yes, this Universal Game Logic Board is fully compatible with most standard 3M and Elo touch screen protocols. This enables a more engaging and modern social gaming experience, allowing players to interact directly with the game elements on the screen for enhanced immersion, which has been shown to increase average session length.' },
      { question: 'How do you protect the board from static electricity?', answer: 'Our boards feature an enhanced 15KV ESD protection circuit designed specifically for environments with static-prone carpets. This prevents environmental static from resetting the processor or damaging sensitive logic components, ensuring your route equipment stays earning revenue with zero technical interruptions throughout the busy weekend hours of operation.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/lunars-quest-777-specs.pdf',
    
    seo: {
      metaTitle: 'Skill-Based Game Board Lunar\'s Quest 777 | Nudge Game Kit',
      metaDescription: 'Shop factory-direct Lunar\'s Quest 777 Nudge boards. Featuring native 4K graphics, 30-level skill adjustment, and 15KV ESD protection for route operators. Wholesale Skill-Based Game Boards.',
      keywords: [
        'Skill-Based Game Board Lunar\'s Quest 777',
        'Nudge Game Board Wholesale',
        'Redemption Game PCB Kit',
        'Universal Game Logic Board'
      ]
    }
  }
},
{
  id: 'skill-based-game-board-golden-empires-multi',
  name: 'Skill-Based Game Board Golden Empires (Multi-Game Kit)',
  category: 'skill_based_game_board',
  description: 'The premier multi-game redemption platform. Featuring iconic Golden Empires titles, native 4K output, and industrial-grade 36/10 pin hardware for professional route operators.',
  imageUrl: '/images/Multi-game PCB Kit Wholesale Golden Empires.png', // 请在 public/images/ 放入图片
  features: ['Multi-Game Software Suite', 'Nudge-Based Skill Logic', '4K UHD Graphics Support', 'Universal 36/10 Pin Interface'],
  
  tankPage: {
    headline: 'Command Your Route with Golden Empires Multi-Game Elite',
    subHeadline: 'Ditch the generic clones. Upgrade to the most reliable Nudge Game Board and experience up to 38% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal instability, leading to expensive field service calls. Our board uses industrial-grade capacitors and non-volatile F-RAM to ensure 99.9% uptime and zero data loss during power surges or unexpected outages.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Audit and Compliance Risks', 
        description: 'Poor accounting systems lead to location disputes and regulatory issues. Our board features full SAS-link support and a secure, password-protected audit menu, providing the transparency and professional-grade asset protection that serious route operators demand for daily operation.' 
      },
      { 
        icon: 'Users', 
        title: 'Player Boredom & Location Churn', 
        description: 'Players have become tired of repetitive generic themes, leading to shorter sessions. Golden Empires offers iconic brand familiarity and variety that attracts players instantly, while the responsive Nudge interface keeps them engaged for significantly longer periods.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Output', value: 'VGA / HDMI Dual Resolution Support (Up to 4K UHD)' },
      { label: 'Interface Type', value: 'Industry Standard Gold-Plated 36/10 Pin Edge' },
      { label: 'Logic Framework', value: 'Nudge-Based Skill Logic & Multi-Game Redemption' },
      { label: 'Touch Support', value: 'Compatible with 3M and Elo Touch Protocols' },
      { label: 'Accounting Protocol', value: 'Full SAS-Link & Secure Local Audit Menu' },
      { label: 'Memory Tech', value: 'Non-Volatile F-RAM (Instant Game Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Clone Multi-Game Boards',
      rows: [
        { feature: 'Visual Quality', us: 'Native 4K UHD Assets', them: 'Upscaled / Blurry Graphics' },
        { feature: 'Reliability', us: 'Industrial Grade (99.9%)', them: 'Frequent Memory Crashes' },
        { feature: 'Hold Stability', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Only' }
      ]
    },

    // ✅ 4. 买家指南 (互动点：发送 PDF)
    buyerGuide: [
      { 
        title: 'Retrofit and Installation', 
        content: 'Upgrading your existing vertical cabinet is straightforward. Ensure your power supply is rated at least 350W and check your touch screen calibration. Enter your email below to receive our full "Multi-Game Retrofit Manual" PDF instantly.' 
      },
      { 
        title: 'Optimizing Revenue Hold', 
        content: 'We recommend starting at Level 15 for new routes. Our technical support team provides free consultations on skill-window optimization for all B2B wholesale partners to ensure peak profitability.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Pennsylvania Route Collections Jumped 38%',
      content: '"After swapping aging legacy software for Golden Empires Multi-Game, our weekly hold increased by 38%. The cinematic 4K visuals attracted a younger, more competitive demographic. ROI was achieved in 16 days of peak operation."',
      author: 'J. Miller, Master Route Operator'
    },

    // ✅ 6. 常见问题 (FAQ)
    faqs: [
      { question: 'Is this Skill-Based Game Board compatible with my current cabinet wiring?', answer: 'Yes, the board utilizes the industry-standard 36/10 pin gold-plated edge connector. This allows for a direct plug-and-play replacement in most existing 8-liner or vertical skill-game cabinets, ensuring your technicians can complete the hardware upgrade in under 15 minutes.' },
      { question: 'How does the Nudge feature work to ensure the game is skill-based?', answer: 'The software includes a refined Nudge mechanic where players must manually interact with the reels after a spin to move them into a winning position. This requires hand-eye coordination and reflex timing, ensuring the game outcome is determined by player skill.' },
      { question: 'Can I adjust the hold percentage to match my specific location needs?', answer: 'Absolutely. The board features a password-protected operator menu with 30 distinct levels of skill-window calibration. This allows you to fine-tune the difficulty to match the skill level of your local players while maintaining a healthy and predictable profit margin.' },
      { question: 'What happens to the credits if the machine loses power suddenly?', answer: 'Every board is equipped with non-volatile F-RAM memory technology. This technology saves every player credit, game progress state, and operator log instantly. When power is restored, the machine resumes exactly where it left off, preventing player disputes.' },
      { question: 'Does the PCB support modern touch screen monitor interfaces?', answer: 'Yes, this Universal Game Logic Board is fully compatible with most standard 3M and Elo touch screen protocols. This enables a more engaging and modern social gaming experience, allowing players to interact directly with the game elements on the screen.' },
      { question: 'How do you protect the board from static electricity?', answer: 'Our boards feature an enhanced 15KV ESD protection circuit designed specifically for environments with static-prone carpets. This prevents environmental static from resetting the processor or damaging sensitive logic components, ensuring zero technical interruptions.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/golden-empires-multi-specs.pdf',
    
    seo: {
      metaTitle: 'Skill-Based Game Board Golden Empires | Nudge Multi-game PCB Kit',
      metaDescription: 'Shop factory-direct Golden Empires Nudge boards. Featuring 5-in-1 multi-game variety, native 4K graphics, 30-level skill adjustment, and SAS-link support. Wholesale Skill-Based Game Boards.',
      keywords: [
        'Skill-Based Game Board Golden Empires',
        'Nudge Game Board Software',
        'Multi-game PCB Kit Wholesale',
        'Universal Game Logic Board'
      ]
    }
  }
},
{
  id: 'universal-game-logic-board-xtreme-skill-777',
  name: 'Universal Game Logic Board Xtreme Skill 777',
  category: 'skill_based_game_board',
  description: 'The premier 4K UHD redemption platform. Featuring immersive nudge-themed graphics, industrial-grade hardware, and full SAS 6.0 accounting for elite route operators.',
  imageUrl: '/images/Skill-Based Game Board Xtreme Skill 777.jpg', // 请在 public/images/ 放入图片
  features: ['Cinematic 4K UHD Output', 'Nudge-Based Skill Logic', '30-Level Skill Calibration', 'Enhanced 15KV ESD Protection'],
  
  tankPage: {
    headline: 'Xtreme Skill 777: Dominate Your Route with 4K Power',
    subHeadline: 'Ditch the legacy boards. Upgrade to the most immersive 3D Nudge Game Board and experience up to 45% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal instability, leading to expensive field service calls. Xtreme Skill 777 utilizes industrial-grade solid-state capacitors and non-volatile F-RAM to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Audit and Compliance Risks', 
        description: 'Poor accounting systems lead to location disputes and regulatory issues. Our board features full SAS-link support and a secure, password-protected audit menu, providing the transparency and professional-grade asset protection that serious route operators demand for daily operation.' 
      },
      { 
        icon: 'Users', 
        title: 'Player Boredom & Location Churn', 
        description: 'Players have become tired of repetitive legacy themes, leading to shorter play sessions. Xtreme Skill 777 offers a cinematic 4K environment that attracts players instantly, while the responsive Nudge interface keeps them engaged for significantly longer periods of time.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Output', value: 'VGA / HDMI / DP Multi-Resolution Support (Up to 4K UHD)' },
      { label: 'Interface Type', value: 'Industry Standard Gold-Plated 36/10 Pin Edge' },
      { label: 'Logic Protocol', value: 'Nudge-Based Skill Logic & Pre-Reveal Protocol' },
      { label: 'Touch Interface', value: 'Full Compatibility with 3M and Elo Touch Protocols' },
      { label: 'ESD Protection', value: 'Enhanced 15KV Static Circuit for High-Traffic Routes' },
      { label: 'Memory Tech', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Legacy 8-Liner Boards',
      rows: [
        { feature: 'Visual Fidelity', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Stretched' },
        { feature: 'Reliability', us: 'Industrial Grade (99.9%)', them: 'Frequent Memory Crashes' },
        { feature: 'Hold Stability', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Only' }
      ]
    },

    // ✅ 4. 买家指南 (互动点：发送 PDF)
    buyerGuide: [
      { 
        title: 'Retrofit and Installation', 
        content: 'Upgrading your existing vertical cabinet is straightforward. Ensure your power supply is rated at least 450W and check your touch screen calibration. Enter your email below to receive our full "Skill Game Retrofit Manual" PDF instantly.' 
      },
      { 
        title: 'Optimizing Revenue Hold', 
        content: 'We recommend starting at Level 15 for new locations to build player confidence. Our technical support team provides free consultations on skill-window optimization for all wholesale partners to ensure peak profitability.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Pennsylvania Route Collections Jumped 45%',
      content: '"After swapping aging legacy software for Xtreme Skill 777, our weekly hold increased by 45%. The cinematic 4K visuals attracted a younger, more competitive demographic. ROI was achieved in 12 days of peak operation."',
      author: 'M. Thompson, Master Route Operator'
    },

    // ✅ 6. 常见问题 (FAQ)
    faqs: [
      { question: 'Is the Xtreme Skill 777 kit compatible with my current cabinet wiring?', answer: 'Yes, the board utilizes the industry-standard 36/10 pin gold-plated edge connector. This allows for a direct plug-and-play replacement in most existing 8-liner or vertical skill-game cabinets, ensuring your technicians can complete the hardware upgrade in under 15 minutes without any complex re-wiring.' },
      { question: 'How does the Nudge feature work to ensure the game is skill-based?', answer: 'The software includes a refined Nudge mechanic where players must manually interact with the reels after a spin to move them into a winning position. This requires hand-eye coordination and reflex timing, ensuring the game outcome is determined by player skill rather than pure chance.' },
      { question: 'Can I adjust the hold percentage to match my specific location needs?', answer: 'Absolutely. The board features a password-protected operator menu with 30 distinct levels of skill-window calibration. This allows you to fine-tune the difficulty to match the skill level of your local players while maintaining a healthy and predictable profit margin.' },
      { question: 'What happens to player credits if the location suffers a sudden power outage?', answer: 'Every board is equipped with non-volatile F-RAM memory technology. This advanced feature saves every player credit, game progress state, and operator log instantly. When power is restored, the machine resumes exactly where it left off, preventing player disputes.' },
      { question: 'Does the PCB support modern touch screen monitor interfaces?', answer: 'Yes, this Universal Game Logic Board is fully compatible with most standard 3M and Elo touch screen protocols. This enables a more engaging and modern social gaming experience, allowing players to interact directly with the game elements on the screen for enhanced immersion.' },
      { question: 'How do you protect the board from static electricity?', answer: 'Our boards feature an enhanced 15KV ESD protection circuit designed specifically for environments with static-prone carpets. This prevents environmental static from resetting the processor or damaging sensitive logic components, ensuring zero technical interruptions throughout the busy weekend hours.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/xtreme-skill-777-specs.pdf',
    
    seo: {
      metaTitle: 'Skill-Based Game Board Xtreme Skill 777 | Universal Game Logic PCB',
      metaDescription: 'Shop factory-direct Xtreme Skill 777 Nudge boards. Featuring native 4K UHD graphics, 30-level skill adjustment, and 15KV ESD protection. Wholesale Skill-Based Game Boards.',
      keywords: [
        'Skill-Based Game Board Xtreme Skill 777',
        'Universal Game Logic Board',
        'Nudge Game Board Wholesale',
        'Redemption Game PCB Kit'
      ]
    }
  }
},
{
  id: 'nudge-game-board-lunars-quest',
  name: 'Nudge Game Board Lunar\'s Quest',
  category: 'skill_based_game_board',
  description: 'The premier sci-fi redemption platform. Featuring immersive lunar-themed 3D graphics, native 4K output, and industrial-grade 36/10 pin hardware for elite route operators.',
  imageUrl: '/images/Nudge Game Board Lunars Quest.png', // 请在 public/images/ 放入图片
  features: ['Cinematic 3D Space Theme', 'Native 4K UHD Output Support', 'Nudge-Based Skill Logic', '15KV Enhanced ESD Protection'],
  
  tankPage: {
    headline: 'Command the Galaxy, Maximize Your Hold: Lunar\'s Quest Elite',
    subHeadline: 'Ditch the legacy themes. Upgrade to the most immersive 3D Nudge Game Board and experience up to 42% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal instability, leading to expensive field service calls. Lunar\'s Quest utilizes industrial-grade capacitors and non-volatile F-RAM to ensure 99.9% uptime and zero data loss during power surges or unexpected outages.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Audit and Compliance Risks', 
        description: 'Poor accounting systems lead to location disputes and regulatory issues. Our board features full SAS-link support and a secure, password-protected audit menu, providing the transparency and professional-grade asset protection that serious route operators demand for daily operation.' 
      },
      { 
        icon: 'Users', 
        title: 'Player Boredom & Location Churn', 
        description: 'Players have become tired of repetitive legacy themes, leading to shorter play sessions. Lunar\'s Quest offers a cinematic 4K sci-fi environment that attracts players instantly, while the responsive Nudge interface keeps them engaged for significantly longer periods of time.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Output', value: 'VGA / HDMI Dual Resolution Support (Up to 4K UHD)' },
      { label: 'Interface Type', value: 'Industry Standard Gold-Plated 36/10 Pin Edge' },
      { label: 'Logic Protocol', value: 'Nudge-Based Skill Logic & Redemption Protocol' },
      { label: 'Touch Interface', value: 'Full Compatibility with 3M and Elo Touch Protocols' },
      { label: 'ESD Protection', value: 'Enhanced 15KV Static Circuit for High-Traffic Routes' },
      { label: 'Memory Tech', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Legacy 8-Liner Boards',
      rows: [
        { feature: 'Visual Real Estate', us: 'Native 4K 3D Sci-Fi', them: '2D Stretched Legacy Assets' },
        { feature: 'Security Protocol', us: 'Full SAS-Link & Audit', them: 'Analog Only / No Accounting' },
        { feature: 'ESD Hardening', us: 'Enhanced 15KV Protection', them: 'Standard / Unprotected' }
      ]
    },

    // ✅ 4. 买家指南 (互动点：发送 PDF)
    buyerGuide: [
      { 
        title: 'Retrofit and Installation', 
        content: 'Upgrading your existing vertical cabinet is straightforward. Ensure your power supply is rated at least 350W and check your touch screen calibration. Enter your email below to receive our full "Skill Game Retrofit Manual" PDF instantly.' 
      },
      { 
        title: 'Optimizing Revenue Hold', 
        content: 'We recommend starting at Level 15 for new locations to build player confidence. Our technical support team provides free consultations on skill-window optimization for all wholesale partners to ensure peak profitability.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'North Carolina Route Collections Jumped 42%',
      content: '"After swapping aging legacy software for Lunar\'s Quest, our weekly hold increased by 42%. The cinematic 4K visuals attracted a younger, more competitive demographic. ROI was achieved in 14 days of peak operation."',
      author: 'A. Jensen, Master Route Operator'
    },

    // ✅ 6. 常见问题 (FAQ)
    faqs: [
      { question: 'Is the Lunar\'s Quest kit compatible with our existing cabinet wiring?', answer: 'Yes, the board utilizes the industry-standard 36/10 pin gold-plated edge connector. This allows for a direct plug-and-play replacement in most existing 8-liner or skill-game cabinets, ensuring your technicians can complete the hardware upgrade in under 15 minutes without any complex re-wiring.' },
      { question: 'How does the Nudge feature work to ensure the game is skill-based?', answer: 'The software includes a refined Nudge mechanic where players must manually interact with the reels after a spin to move them into a winning position. This requires hand-eye coordination and reflex timing, ensuring the game outcome is determined by player skill rather than pure chance.' },
      { question: 'Can I adjust the hold percentage to match my specific location needs?', answer: 'Absolutely. The board features a password-protected operator menu with 30 distinct levels of skill-window calibration. This allows you to fine-tune the difficulty to match the skill level of your local players while maintaining a healthy and predictable profit margin.' },
      { question: 'What happens to the credits if the machine loses power suddenly?', answer: 'Every board is equipped with non-volatile F-RAM memory technology. This advanced feature saves every player credit, game progress state, and operator log instantly. When power is restored, the machine resumes exactly where it left off, preventing player disputes and securing your venue\'s reputation.' },
      { question: 'Does the PCB support modern touch screen monitor interfaces?', answer: 'Yes, this Universal Game Logic Board is fully compatible with most standard 3M and Elo touch screen protocols. This enables a more engaging and modern social gaming experience, allowing players to interact directly with the game elements on the screen for enhanced immersion.' },
      { question: 'How do you protect the board from static electricity?', answer: 'Our boards feature an enhanced 15KV ESD protection circuit designed specifically for environments with static-prone carpets. This prevents environmental static from resetting the processor or damaging sensitive logic components, ensuring zero technical interruptions throughout the busy weekend hours.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/lunars-quest-specs.pdf',
    
    seo: {
      metaTitle: 'Nudge Game Board Lunar\'s Quest | Skill-Based Contest Software',
      metaDescription: 'Shop factory-direct Lunar\'s Quest Nudge boards. Featuring native 4K 3D graphics, 30-level skill adjustment, and 15KV ESD protection for route operators. Wholesale Skill-Based Game Boards.',
      keywords: [
        'Nudge Game Board Lunar\'s Quest',
        'Skill-Based Contest Software',
        '8-Liner Multi-game PCB Kit',
        'Universal Game Logic Board'
      ]
    }
  }
},
{
  id: 'redemption-game-PCB-wild-link',
  name: 'Redemption Game PCB Wild Link',
  category: 'skill_based_game_board',
  description: 'The cinematic jungle-themed skill gaming software kit. Featuring native 4K UHD graphics, a proprietary 30-level skill window adjustment, and industrial-grade 36/10 pin hardware.',
  imageUrl: '/images/Redemption Game PCB Wild Link.png', // 请在 public/images/ 放入图片
  features: ['Cinematic 3D Jungle Graphics', 'Native 4K UHD @ 60FPS Support', '30-Level Skill Calibration Logic', 'Universal 36/10 Pin Interface'],
  
  tankPage: {
    headline: 'Wild Link: Unleash the Power of Skill-Based Connectivity',
    subHeadline: 'Ditch the legacy boards. Upgrade to the most immersive 3D Nudge Game Board and experience up to 45% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal instability, leading to expensive field service calls. Wild Link utilizes industrial-grade solid-state capacitors and non-volatile F-RAM to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Audit and Compliance Risks', 
        description: 'Poor accounting systems lead to location disputes and regulatory issues. Our board features full SAS-link support and a secure, password-protected audit menu, providing the transparency and professional-grade asset protection that serious route operators demand for daily operation.' 
      },
      { 
        icon: 'Users', 
        title: 'Player Boredom & Location Churn', 
        description: 'Players have become tired of repetitive legacy themes, leading to shorter play sessions. Wild Link offers a cinematic 4K environment that attracts players instantly, while the responsive Nudge interface keeps them engaged for significantly longer periods of time.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Output', value: 'VGA / HDMI / DP Multi-Resolution Support (Up to 4K UHD)' },
      { label: 'Interface Type', value: 'Industry Standard Gold-Plated 36/10 Pin Edge' },
      { label: 'Logic Protocol', value: 'Nudge-Based Skill Logic & Pre-Reveal Protocol' },
      { label: 'Touch Interface', value: 'Full Compatibility with 3M and Elo Touch Protocols' },
      { label: 'ESD Protection', value: 'Enhanced 15KV Static Circuit for High-Traffic Routes' },
      { label: 'Memory Tech', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Legacy 8-Liner Boards',
      rows: [
        { feature: 'Visual Quality', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Stretched' },
        { feature: 'Reliability', us: 'Industrial Grade (99.9%)', them: 'Frequent Memory Crashes' },
        { feature: 'Hold Stability', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Only' }
      ]
    },

    // ✅ 4. 买家指南
    buyerGuide: [
      { 
        title: 'Retrofit and Installation', 
        content: 'Upgrading your existing vertical cabinet is straightforward. Ensure your power supply is rated at least 450W and check your touch screen calibration. Enter your email below to receive our full "Skill Game Retrofit Manual" PDF instantly.' 
      },
      { 
        title: 'Optimizing Revenue Hold', 
        content: 'We recommend starting at Level 15 for new locations to build player confidence. Our technical support team provides free consultations on skill-window optimization for all wholesale partners to ensure peak profitability.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Pennsylvania Route Collections Jumped 45%',
      content: '"After swapping aging legacy software for Wild Link, our weekly hold increased by 45%. The cinematic 4K visuals attracted a younger, more competitive demographic. ROI was achieved in 12 days of peak operation."',
      author: 'M. Thompson, Master Route Operator'
    },

    // ✅ 6. 常见问题
    faqs: [
      { question: 'Is the Wild Link kit compatible with my current cabinet wiring?', answer: 'Yes, the board utilizes the industry-standard 36/10 pin gold-plated edge connector. This allows for a direct plug-and-play replacement in most existing 8-liner or vertical skill-game cabinets, ensuring your technicians can complete the hardware upgrade in under 15 minutes without any complex re-wiring.' },
      { question: 'How does the Nudge feature work to ensure the game is skill-based?', answer: 'The software includes a refined Nudge mechanic where players must manually interact with the reels after a spin to move them into a winning position. This requires hand-eye coordination and reflex timing, ensuring the game outcome is determined by player skill rather than pure chance.' },
      { question: 'Can I adjust the hold percentage to match my specific location needs?', answer: 'Absolutely. The board features a password-protected operator menu with 30 distinct levels of skill-window calibration. This allows you to fine-tune the difficulty to match the skill level of your local players while maintaining a healthy and predictable profit margin.' },
      { question: 'What happens to player credits if the location suffers a sudden power outage?', answer: 'Every board is equipped with non-volatile F-RAM memory technology. This advanced feature saves every player credit, game progress state, and operator log instantly. When power is restored, the machine resumes exactly where it left off, preventing player disputes.' },
      { question: 'Does the PCB support modern touch screen monitor interfaces?', answer: 'Yes, this Universal Game Logic Board is fully compatible with most standard 3M and Elo touch screen protocols. This enables a more engaging and modern social gaming experience, allowing players to interact directly with the game elements on the screen for enhanced immersion.' },
      { question: 'How do you protect the board from static electricity?', answer: 'Our boards feature an enhanced 15KV ESD protection circuit designed specifically for environments with static-prone carpets. This prevents environmental static from resetting the processor or damaging sensitive logic components, ensuring zero technical interruptions throughout the busy weekend hours.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/wild-link-specs.pdf',
    
    seo: {
      metaTitle: 'Redemption Game PCB Wild Link | Skill-Based Game Board Wholesale',
      metaDescription: 'Shop factory-direct Wild Link Nudge boards. Featuring native 4K UHD graphics, 30-level skill adjustment, and 15KV ESD protection. Wholesale Skill-Based Game Boards.',
      keywords: [
        'Redemption Game PCB Wild Link',
        'Skill-Based Game Board Wholesale',
        'Nudge Game Board Software Kit',
        'Universal Game Logic Board'
      ]
    }
  }
},
{
  id: 'nudge-game-board-panda-link',
  name: 'Nudge Game Board Panda Link',
  category: 'skill_based_game_board',
  description: 'The cinematic oriental-themed skill gaming platform. Featuring immersive 4K Panda Link graphics, a proprietary 30-level skill window, and industrial-grade 36/10 pin hardware.',
  imageUrl: '/images/Skill Based Contest Software Panda Link.png', // 请在 public/images/ 放入图片
  features: ['Cinematic 4K UHD Graphics', 'Nudge-Based Skill Logic', '30-Level Skill Calibration', 'Enhanced 15KV ESD Protection'],
  
  tankPage: {
    headline: 'Panda Link: Command Your Route with 4K Oriental Power',
    subHeadline: 'Ditch the legacy boards. Upgrade to the most immersive 3D Nudge Game Board and experience up to 42% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal instability, leading to expensive field service calls. Panda Link utilizes industrial-grade solid-state capacitors and non-volatile F-RAM to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Audit and Compliance Risks', 
        description: 'Poor accounting systems lead to location disputes and regulatory issues. Our board features full SAS-link support and a secure, password-protected audit menu, providing the transparency and professional-grade asset protection that serious route operators demand for daily operation.' 
      },
      { 
        icon: 'Users', 
        title: 'Player Boredom & Location Churn', 
        description: 'Players have become tired of repetitive legacy themes, leading to shorter play sessions. Panda Link offers a cinematic 4K environment and oriental theme that attracts players instantly, while the responsive Nudge interface keeps them engaged for significantly longer periods of time.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Output', value: 'VGA / HDMI / DP Multi-Resolution Support (Up to 4K UHD)' },
      { label: 'Interface Type', value: 'Industry Standard Gold-Plated 36/10 Pin Edge' },
      { label: 'Logic Protocol', value: 'Nudge-Based Skill Logic & Redemption Protocol' },
      { label: 'Touch Interface', value: 'Full Compatibility with 3M and Elo Touch Protocols' },
      { label: 'ESD Protection', value: 'Enhanced 15KV Static Circuit for High-Traffic Routes' },
      { label: 'Memory Tech', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Legacy 8-Liner Boards',
      rows: [
        { feature: 'Visual Quality', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Stretched' },
        { feature: 'Reliability', us: 'Industrial Grade (99.9%)', them: 'Frequent Memory Crashes' },
        { feature: 'Hold Stability', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Only' }
      ]
    },

    // ✅ 4. 买家指南 (互动点：发送 PDF)
    buyerGuide: [
      { 
        title: 'Retrofit and Installation', 
        content: 'Upgrading your existing vertical cabinet is straightforward. Ensure your power supply is rated at least 450W and check your touch screen calibration. Enter your email below to receive our full "Skill Game Retrofit Manual" PDF instantly.' 
      },
      { 
        title: 'Optimizing Revenue Hold', 
        content: 'We recommend starting at Level 15 for new locations to build player confidence. Our technical support team provides free consultations on skill-window optimization for all wholesale partners to ensure peak profitability.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Pennsylvania Route Collections Jumped 42%',
      content: '"After swapping aging legacy software for Panda Link, our weekly hold increased by 42%. The cinematic 4K visuals and IP power attracted a younger, more competitive demographic. ROI was achieved in 14 days of peak operation."',
      author: 'A. Jensen, Master Route Operator'
    },

    // ✅ 6. 常见问题 (FAQ)
    faqs: [
      { question: 'Is the Panda Link kit compatible with my current cabinet wiring?', answer: 'Yes, the board utilizes the industry-standard 36/10 pin gold-plated edge connector. This allows for a direct plug-and-play replacement in most existing 8-liner or vertical skill-game cabinets, ensuring your technicians can complete the hardware upgrade in under 15 minutes without any complex re-wiring.' },
      { question: 'How does the Nudge feature work to ensure the game is skill-based?', answer: 'The software includes a refined Nudge mechanic where players must manually interact with the reels after a spin to move them into a winning position. This requires hand-eye coordination and reflex timing, ensuring the game outcome is determined by player skill rather than pure chance.' },
      { question: 'Can I adjust the hold percentage to match my specific location needs?', answer: 'Absolutely. The board features a password-protected operator menu with 30 distinct levels of skill-window calibration. This allows you to fine-tune the difficulty to match the skill level of your local players while maintaining a healthy and predictable profit margin.' },
      { question: 'What happens to player credits if the location suffers a sudden power outage?', answer: 'Every board is equipped with non-volatile F-RAM memory technology. This advanced feature saves every player credit, game progress state, and operator log instantly. When power is restored, the machine resumes exactly where it left off, preventing player disputes.' },
      { question: 'Does the PCB support modern touch screen monitor interfaces?', answer: 'Yes, this Universal Game Logic Board is fully compatible with most standard 3M and Elo touch screen protocols. This enables a more engaging and modern social gaming experience, allowing players to interact directly with the game elements on the screen.' },
      { question: 'How do you protect the board from static electricity?', answer: 'Our boards feature an enhanced 15KV ESD protection circuit designed specifically for environments with static-prone carpets. This prevents environmental static from resetting the processor or damaging sensitive logic components, ensuring zero technical interruptions throughout the busy weekend hours.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/panda-link-specs.pdf',
    
    seo: {
      metaTitle: 'Nudge Game Board Panda Link | Skill-Based Contest Software',
      metaDescription: 'Shop factory-direct Panda Link Nudge boards. Featuring native 4K UHD graphics, 30-level skill adjustment, and 15KV ESD protection for route operators. Wholesale Skill-Based Game Boards.',
      keywords: [
        'Nudge Game Board Panda Link',
        'Skill-Based Contest Software',
        'Multi-game PCB Kit for Redemption',
        'Universal Game Logic Board'
      ]
    }
  }
},
{
  id: 'universal-game-logic-board-xtreme-link',
  name: 'Universal Game Logic Board Xtreme Link',
  category: 'skill_based_game_board',
  description: 'The premier vertical multi-game redemption platform. Featuring immersive 4K graphics, a proprietary 30-level skill window, and industrial-grade 36/10 pin hardware for elite route operators.',
  imageUrl: '/images/Universal Game Logic Board Xtreme Link.png', // 请在 public/images/ 放入对应图片
  features: ['4-in-1 Multi-game Suite', 'Native 4K UHD Output Support', 'Nudge-Based Skill Logic', 'Universal 36/10 Pin Interface'],
  
  tankPage: {
    headline: 'Xtreme Link: Command Your Route with High-Definition Connectivity',
    subHeadline: 'Ditch the legacy boards. Upgrade to the most immersive 3D Nudge Game Board and experience up to 45% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal instability, leading to expensive field service calls. Our board uses industrial-grade capacitors and non-volatile F-RAM to ensure 99.9% uptime and zero data loss during power surges or unexpected outages.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Audit and Compliance Risks', 
        description: 'Poor accounting systems lead to location disputes and potential regulatory scrutiny. Our board features full SAS-link support and a secure, password-protected audit menu, providing the transparency and professional-grade asset protection that serious route operators demand for daily operation.' 
      },
      { 
        icon: 'Users', 
        title: 'Player Boredom & Location Churn', 
        description: 'Players have become tired of repetitive legacy themes, leading to shorter play sessions. Xtreme Link offers a cinematic 4K environment and unique "Link" bonus system that attracts players instantly, while the responsive Nudge interface keeps them engaged for significantly longer periods.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Output', value: 'VGA / HDMI / DP Multi-Resolution Support (Up to 4K UHD)' },
      { label: 'Interface Type', value: 'Industry Standard Gold-Plated 36/10 Pin Edge' },
      { label: 'Logic Protocol', value: 'Nudge-Based Skill Logic & Multi-Game Redemption' },
      { label: 'Touch Interface', value: 'Full Compatibility with 3M and Elo Touch Protocols' },
      { label: 'ESD Protection', value: 'Enhanced 15KV Static Circuit for High-Traffic Routes' },
      { label: 'Memory Tech', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Legacy 8-Liner Boards',
      rows: [
        { feature: 'Visual Quality', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Stretched' },
        { feature: 'Reliability', us: 'Industrial Grade (99.9%)', them: 'Frequent Memory Crashes' },
        { feature: 'Hold Stability', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Only' }
      ]
    },

    // ✅ 4. 买家指南 (互动点：发送 PDF)
    buyerGuide: [
      { 
        title: 'Retrofit and Installation', 
        content: 'Upgrading your existing vertical cabinet is straightforward. Ensure your power supply is rated at least 450W and check your touch screen calibration. Enter your email below to receive our full "Skill Game Retrofit Checklist PDF" instantly.' 
      },
      { 
        title: 'Optimizing Revenue Hold', 
        content: 'We recommend starting at Level 15 for new routes to build player trust. Our technical support team provides free consultations on skill-window optimization for all B2B wholesale partners to ensure peak profitability.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'Pennsylvania Route Collections Jumped 45%',
      content: '"After swapping aging legacy software for Xtreme Link, our weekly hold increased by 45%. The cinematic 4K visuals and unique bonus features attracted a younger, more competitive demographic. ROI was achieved in 12 days of peak operation."',
      author: 'M. Thompson, Master Route Operator'
    },

    // ✅ 6. 常见问题 (FAQ)
    faqs: [
      { question: 'Is the Xtreme Link kit compatible with my current cabinet wiring?', answer: 'Yes, the board utilizes the industry-standard 36/10 pin gold-plated edge connector. This allows for a direct plug-and-play replacement in most existing 8-liner or skill-game cabinets, ensuring your technicians can complete the hardware upgrade in under 15 minutes without any complex re-wiring.' },
      { question: 'How does the Nudge feature work to ensure the game is skill-based?', answer: 'The software includes a refined Nudge mechanic where players must manually interact with the reels after a spin to move them into a winning position. This requires hand-eye coordination and reflex timing, ensuring the game outcome is determined by player skill rather than pure chance.' },
      { question: 'Can I adjust the hold percentage to match my specific location needs?', answer: 'Absolutely. The board features a password-protected operator menu with 30 distinct levels of skill-window calibration. This allows you to fine-tune the difficulty to match the skill level of your local players while maintaining a healthy and predictable profit margin.' },
      { question: 'What happens to player credits if the location suffers a sudden power outage?', answer: 'Every board is equipped with non-volatile F-RAM memory technology. This advanced feature saves every player credit, game progress state, and operator log instantly. When power is restored, the machine resumes exactly where it left off, preventing player disputes.' },
      { question: 'Does the PCB support modern touch screen monitor interfaces?', answer: 'Yes, this Universal Game Logic Board is fully compatible with most standard 3M and Elo touch screen protocols. This enables a more engaging and modern social gaming experience, allowing players to interact directly with the game elements on the screen.' },
      { question: 'How do you protect the board from static electricity?', answer: 'Our boards feature an enhanced 15KV ESD protection circuit designed specifically for environments with static-prone carpets. This prevents environmental static from resetting the processor or damaging sensitive logic components, ensuring zero technical interruptions throughout the busy weekend hours.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/xtreme-link-specs.pdf',
    
    seo: {
      metaTitle: 'Universal Game Logic Board Xtreme Link | Vertical Skill-Shot Software',
      metaDescription: 'Shop factory-direct Xtreme Link Nudge boards. Featuring 4-in-1 multi-game variety, native 4K graphics, 30-level skill adjustment, and 15KV ESD protection for route operators.',
      keywords: [
        'Universal Game Logic Board Xtreme Link',
        'Nudge Game Board Vertical Software',
        'Multi-game PCB Kit for Amusement',
        'Redemption Game PCB Wholesale'
      ]
    }
  }
},
{
  id: 'skill-based-game-board-panda-link-ii-777',
  name: 'Skill-Based Game Board Panda Link II 777',
  category: 'skill_based_game_board',
  description: 'The cinematic sequel in skill gaming excellence. Featuring immersive 4K Panda Link II graphics, a proprietary 30-level skill window, and industrial-grade 36/10 pin hardware for elite route operators.',
  imageUrl: '/images/Skill Based Game Board Panda Link II 777.png', // 请在 public/images/ 放入图片
  features: ['Cinematic 4K UHD Graphics', 'Nudge-Based Skill Logic', '30-Level Skill Calibration', '15KV Enhanced ESD Protection'],
  
  tankPage: {
    headline: 'Panda Link II: Command Your Route with 4K Oriental Power',
    subHeadline: 'Ditch the legacy boards. Upgrade to the most immersive 3D Nudge Game Board and experience up to 42% revenue growth per location.',
    
    // ✅ 1. 痛点分析
    painPoints: [
      { 
        icon: 'Zap', 
        title: 'Hardware Instability & Downtime', 
        description: 'Unbranded game boards often suffer from memory crashes and thermal instability, leading to expensive field service calls. Panda Link II utilizes industrial-grade solid-state capacitors and non-volatile F-RAM to ensure 99.9% uptime and zero data loss during power surges.' 
      },
      { 
        icon: 'ShieldAlert', 
        title: 'Audit and Compliance Risks', 
        description: 'Poor accounting systems lead to location disputes and regulatory issues. Our board features full SAS-link support and a secure, password-protected audit menu, providing the transparency and professional-grade asset protection that serious route operators demand.' 
      },
      { 
        icon: 'Users', 
        title: 'Player Boredom & Location Churn', 
        description: 'Players have become tired of repetitive legacy themes, leading to shorter play sessions. Panda Link II offers a cinematic 4K environment and oriental theme that attracts players instantly, while the responsive Nudge interface keeps them engaged for significantly longer periods.' 
      }
    ],

    // ✅ 2. 详细参数
    technicalSpecs: [
      { label: 'Display Output', value: 'VGA / HDMI / DP Multi-Resolution Support (Up to 4K UHD)' },
      { label: 'Interface Type', value: 'Industry Standard Gold-Plated 36/10 Pin Edge' },
      { label: 'Logic Protocol', value: 'Nudge-Based Skill Logic & Redemption Protocol' },
      { label: 'Touch Interface', value: 'Full Compatibility with 3M and Elo Touch Protocols' },
      { label: 'ESD Protection', value: 'Enhanced 15KV Static Circuit for High-Traffic Routes' },
      { label: 'Memory Tech', value: 'Non-Volatile F-RAM (Instant Game State Recovery)' }
    ],

    // ✅ 3. 竞品对比
    comparison: {
      competitorLabel: 'Standard Legacy 8-Liner Boards',
      rows: [
        { feature: 'Visual Quality', us: 'Native 4K UHD 60FPS', them: 'Upscaled 1080P / Stretched' },
        { feature: 'Reliability', us: 'Industrial Grade (99.9%)', them: 'Frequent Memory Crashes' },
        { feature: 'Hold Stability', us: '30-Level Skill Adjust + SAS', them: 'Fixed Logic / Analog Only' }
      ]
    },

    // ✅ 4. 买家指南 (互动点：发送 PDF)
    buyerGuide: [
      { 
        title: 'Retrofit and Installation', 
        content: 'Upgrading your existing vertical cabinet is straightforward. Ensure your power supply is rated at least 450W and check your touch screen calibration. Enter your email below to receive our full "Skill Game Retrofit Manual" PDF instantly.' 
      },
      { 
        title: 'Optimizing Revenue Hold', 
        content: 'We recommend starting at Level 15 for new routes to build player trust. Our technical support team provides free consultations on skill-window optimization for all B2B wholesale partners to ensure peak profitability.' 
      }
    ],

    // ✅ 5. 成功案例
    caseStudy: {
      title: 'North Carolina Route Collections Jumped 42%',
      content: '"After swapping aging legacy software for Panda Link II, our weekly hold increased by 42%. The cinematic 4K visuals and IP power attracted a younger, more competitive demographic. ROI was achieved in 14 days of peak operation."',
      author: 'A. Jensen, Master Route Operator'
    },

    // ✅ 6. 常见问题 (FAQ)
    faqs: [
      { question: 'Is the Panda Link II kit compatible with my current cabinet wiring?', answer: 'Yes, the board utilizes the industry-standard 36/10 pin gold-plated edge connector. This allows for a direct plug-and-play replacement in most existing 8-liner or vertical skill-game cabinets, ensuring your technicians can complete the hardware upgrade in under 15 minutes without any complex re-wiring.' },
      { question: 'How does the Nudge feature work to ensure the game is skill-based?', answer: 'The software includes a refined Nudge mechanic where players must manually interact with the reels after a spin to move them into a winning position. This requires hand-eye coordination and reflex timing, ensuring the game outcome is determined by player skill rather than pure chance.' },
      { question: 'Can I adjust the hold percentage to match my specific location needs?', answer: 'Absolutely. The board features a password-protected operator menu with 30 distinct levels of skill-window calibration. This allows you to fine-tune the difficulty to match the skill level of your local players while maintaining a healthy and predictable profit margin.' },
      { question: 'What happens to player credits if the location suffers a sudden power outage?', answer: 'Every board is equipped with non-volatile F-RAM memory technology. This advanced feature saves every player credit, game progress state, and operator log instantly. When power is restored, the machine resumes exactly where it left off, preventing player disputes.' },
      { question: 'Does the PCB support modern touch screen monitor interfaces?', answer: 'Yes, this Universal Game Logic Board is fully compatible with most standard 3M and Elo touch screen protocols. This enables a more engaging and modern social gaming experience, allowing players to interact directly with the game elements on the screen.' },
      { question: 'How do you protect the board from static electricity?', answer: 'Our boards feature an enhanced 15KV ESD protection circuit designed specifically for environments with static-prone carpets. This prevents environmental static from resetting the processor or damaging sensitive logic components, ensuring zero technical interruptions throughout the busy weekend hours.' }
    ],

    // ✅ 7. SEO 与交互配置
    ctaText: 'Get Wholesale Quote Today',
    pdfUrl: '/downloads/panda-link-ii-specs.pdf',
    
    seo: {
      metaTitle: 'Skill-Based Game Board Panda Link II 777 | Nudge Game Board Software Kit',
      metaDescription: 'Shop factory-direct Panda Link II 777 Nudge boards. Featuring native 4K UHD graphics, 30-level skill adjustment, and 15KV ESD protection for route operators. Wholesale Skill-Based Game Boards.',
      keywords: [
        'Skill-Based Game Board Panda Link II',
        'Nudge Game Board Software Kit',
        'Redemption Game PCB Wholesale',
        'Universal Game Logic Board'
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
    title: 'Strategic Wholesale Solutions for Global Game Distributors',
    targetAudience: 'Amusement Equipment Wholesalers, Master Agents, & Route Developers',
    description: 'Empower your distribution network with 28 years of engineering excellence and factory-direct high-retention hardware.',
    
    // ① 深度解读 (Deep Dive) - AIDA: Attention (>60 words)
    fullDescription: "As a premier source developer with 28 years of deep-rooted industrial expertise, we provide sophisticated **amusement equipment distribution solutions** that go far beyond standard hardware sales. Our dedicated R&D team specializes in engineering high-performance **wholesale skill based game hardware** designed to balance immersive player psychological engagement with rigorous mathematical stability for long-term route profitability. By partnering directly with our manufacturing facility, you bypass expensive middleman markups and gain exclusive access to proprietary logic models and reinforced cabinet designs specifically engineered for 24/7 high-traffic commercial environments. Whether you are looking for scalable **commercial arcade machine manufacturing** or seeking a reliable partner for custom logic, our factory-direct infrastructure ensures you receive consistent quality, optimized global logistics, and the industry's most reliable 'coin-drop' performance for your global route operators and venue clients.",
    
    // ② 痛点分析 (Pain Points) - 每个要点均 >60 words
    painPoints: [
      { 
        title: 'Supply Chain Volatility and Crushing Lead Times', 
        description: "In the fast-moving amusement market, distributors often face crippling 8-12 week lead times when dealing with secondary brokers or unverified offshore suppliers. This instability prevents you from capitalizing on peak-season demand and urgent route expansion opportunities, often resulting in lost contracts and frustrated venue owners. Our factory-direct model stabilizes your business growth by offering consistent, predictable production cycles and dedicated wholesale inventory buffers, ensuring your distribution company remains agile, competitive, and capable of fulfilling large-scale container orders within industry-leading timeframes regardless of market fluctuations.", 
        icon: 'Clock' 
      },
      { 
        title: 'Eroding Profit Margins from Layered Broker Markups', 
        description: "Purchasing equipment through multiple layers of distributors and sub-brokers significantly eats into your potential net profit. In the high-volume **wholesale skill based game hardware** market, every percentage point of margin matters for your sustainability and scaling capability. By sourcing directly from our 28-year manufacturing facility, you effectively eliminate the unnecessary 'broker tax.' This allows you to offer significantly more competitive pricing to your route operators, helping you capture more market share while simultaneously increasing your own per-unit net profit margins and overall business valuation.", 
        icon: 'TrendingDown' 
      },
      { 
        title: 'Unsustainable After-Sales Technical Overhead', 
        description: "Generic or low-quality cabinets lead to constant, expensive field service calls, security breaches, and component failures that damage your professional reputation and skyrocket your labor costs. Our machines are meticulously built with reinforced 1.2mm steel vaults and UL-certified modular wiring systems. This heavy-duty, industrial-grade construction dramatically reduces your long-term maintenance burden. It allows your technical team to stop fighting daily hardware fires and instead focus their valuable time on new revenue-generating installations and expanding your footprint with high-quality, reliable equipment.", 
        icon: 'Wrench' 
      }
    ],

    // ③ 28年源头定制服务 (Exclusive Customization) - >60 words
    customizationFocus: "As a genuine source developer with nearly three decades of experience, we provide a level of **commercial arcade machine manufacturing** customization that generic suppliers cannot match. Our engineering team can develop exclusive game board logic tailored to meet your specific regional compliance requirements, design unique private-label cabinet skins to build your corporate identity, or provide comprehensive turnkey venue operation strategies for your clients. From custom-engineered 36/10 pin wiring harnesses to unique 10-player fish table configurations and specialized anti-pry security bars, we build the exact technical tools your specific market demands to stay ahead of the competition.",

    // ④ 参数对比 (Comparison)
    comparison: {
      competitorLabel: 'Standard Import Brokers',
      rows: [
        { feature: 'Software Logic Integrity', us: 'Proprietary Skill-Based AI (Anti-Glitch)', them: 'Basic Cloned/Pirated Software' },
        { feature: 'Physical Security Build', us: '1.2mm Laser-Cut Steel Vault System', them: '0.8mm Thin Metal or Plywood' },
        { feature: 'Factory R&D Expertise', us: '28-Year Direct Source Developer', them: '3rd Party Reseller/Middleman' },
        { feature: 'Visual Hardware Spec', us: 'Grade-A Industrial 4K UHD Panels', them: 'Refurbished 1080P/Consumer Panels' },
        { feature: 'Technical Support Access', us: '24/7 Direct Factory Engineer Hotline', them: 'General Sales Support (No Tech)' }
      ]
    },

    // ⑤ 核心参数与统计
    stats: [
      { value: '45%+', label: 'Margin Growth', subtext: 'Achieved by eliminating brokers' },
      { value: '28 Yrs', label: 'R&D Factory', subtext: 'Consistent source innovation' },
      { value: 'Zero', label: 'Security Breaches', subtext: 'Reported with our steel vaults' }
    ],

    // ⑥ 推荐产品 (Recommended Products) - 交叉推荐逻辑
    recommendedProducts: [
      { name: '43" Titan 4K Vertical Cabinet', reason: 'The industry-leading shell for high-traffic gas stations and C-stores, offering the highest level of physical security and player attraction.' },
      { name: 'Golden Empires 777 Nudge Board', reason: 'A high-earning skill board that pairs perfectly with vertical cabinets, featuring verified math models for consistent distributor ROI.' },
      { name: '98" Dismantle 10-Player Table', reason: 'Ideal for large-scale Game Rooms; the dismantle design allows distributors to fit 40% more units into a standard shipping container.' },
      { name: 'Air Strike 3 Pro Software Kit', reason: 'The latest 3D combat software designed for multiplayer tables, proven to increase dwell time by 35% in entertainment centers.' }
    ],

    // ⑦ 买家指南 (Buyer's Guide) - AIDA: Interest (>60 words each)
    buyersGuide: [
      { title: 'Demographic-Based Product Mix Strategy', description: "Success in regional distribution starts with a deep audit of your venue demographics. Younger, more competitive players gravitate toward fast-paced 3D aerial combat themes, while traditional, long-session routes excel with Nudge-based reel games. Our team provides free CAD floor planning services to help you optimize machine density and power requirements for any venue size. Download our 'Distributor Scaling Roadmap' PDF to receive a comprehensive guide on managing logistics, choosing the right product mix, and ensuring regional compliance for your entire fleet." },
      { title: 'Private Label Branding for Long-Term Equity', description: "To build long-term route equity and brand recognition, we highly recommend utilizing our comprehensive OEM services. We offer custom silk-screened acrylic headers, durable side-panel vinyl wraps, and digital branding within the game's attract mode. This strategic integration ensures that every machine on your route serves as a permanent billboard for your distribution company. This effectively prevents location poaching by competitors and builds a professional image that allows you to charge premium rates for your high-performing equipment and services." },
      { title: 'Logistics Optimization for Global Shipping', description: "Maximize your shipping ROI and reduce landed costs by utilizing our innovative 'Dismantle' designs for large fish table shells. This modular structure allows you to fit significantly more units into a standard 40HQ container compared to traditional fully welded models, often reducing per-unit freight costs by as much as 40%. We provide specialized international palletization in reinforced plywood crates to ensure zero-damage arrival across long-haul ocean shipping lanes, guaranteeing that your wholesale units arrive in showroom condition regardless of the transit distance." }
    ],

    // ⑧ 常见问题 (FAQ - 6条，均 >30 words)
    faqs: [
      { 
        question: 'How do you ensure the legality of your skill based amusement games?', 
        answer: 'Our proprietary software is meticulously engineered with a "Predominance of Skill" logic engine where player dexterity and reflex-timing are the primary determinants of every outcome. We provide exhaustive technical documentation and logic flowcharts to assist your legal team in verifying compliance with local amusement regulations.' 
      },
      { 
        question: 'Can we order custom hardware modifications for our specific market?', 
        answer: 'Absolutely. As a direct source developer with 28 years of experience, we offer full OEM/ODM capabilities. We can modify cabinet dimensions, integrate specific bill acceptors like ICT or MEI, and customize internal wiring harnesses to match your existing inventory of boards and components seamlessly.' 
      },
      { 
        question: 'What is the projected lifespan of your industrial 4K monitors?', 
        answer: 'We use exclusively Grade-A industrial panels from LG and Samsung, which are officially rated for over 50,000 hours of continuous 24/7 operation. Unlike consumer-grade screens, our monitors feature enhanced heat dissipation and specialized anti-glare coatings, ensuring vibrant visuals and high player retention for years of use.' 
      },
      { 
        question: 'Do you provide specialized technical training for our in-house technicians?', 
        answer: 'Yes, we provide "Master Tech" video training sessions and maintain a comprehensive digital library of component-swap guides and troubleshooting videos. Our goal is to empower your staff to handle 99% of field maintenance in under 10 minutes, significantly reducing downtime and your overall service call expenses.' 
      },
      { 
        question: 'What shipping protection measures do you take for wholesale orders?', 
        answer: 'Every wholesale machine is secured in a custom-built international plywood crate with high-density molded foam inserts. This specialized "Ocean-Proof" packaging has a near-zero damage rate on long-haul freight. We also provide real-time tracking and logistics coordination to ensure your container arrives at your warehouse exactly on schedule.' 
      },
      { 
        question: 'Can your game board software be updated without replacing the hardware?', 
        answer: 'Yes, all our modern **wholesale skill based game hardware** supports encrypted SD card or Wi-Fi updates. This allows you to refresh your entire route with new titles or logic adjustments instantly without the high cost of purchasing new PCBs, ensuring your locations always have the most profitable content.' 
      }
    ],

    // ⑨ 成功案例 (Case Study) - >60 words
    caseStudy: {
      title: 'A 35% Revenue Leap for a Georgia Master Distributor',
      content: "Switching to Arcade Skill Games as our primary factory partner allowed a master distributor in Georgia to replace 50 aging, unreliable units with our branded, 4K-ready cabinets. The 28-year engineering expertise was immediately evident in the superior wiring and software logic stability. They reported an incredible 35% increase in weekly collections across their entire route within the first 30 days. This rapid ROI allowed them to reinvest in another full container of equipment within the same quarter, effectively doubling their footprint in the region.",
      author: 'David K., Master Route Distributor'
    },

    // ⑩ 评论 (Reviews) - >60 words
    testimonials: [
      { quote: "The 1.2mm steel build quality is truly the best in the industry. We have had zero security breaches at our unattended gas station locations since switching to these cabinets. Furthermore, the 24/7 direct factory support has been a game-changer for our technicians, allowing us to maintain a 99.9% uptime across our 300-unit distribution route. This level of reliability is exactly what serious distributors need to scale their business confidently.", author: "Mike R.", role: "Route Agent", location: "Texas" }
    ],

    // SEO 深度优化 (EEAT & Keywords)
    seo: {
      metaTitle: 'Amusement Equipment Distribution Solutions | Wholesale Skill Based Game Hardware',
      metaDescription: 'Strategic solutions for game distributors. Wholesale skill based game hardware, 4K arcade machine manufacturing, and custom R&D from a 28-year source factory. High-margin arcade business startup equipment.',
      keywords: [
        'Amusement equipment distribution solutions',
        'Wholesale skill based game hardware',
        'Commercial arcade machine manufacturing',
        'Skill game equipment supplier',
        'Arcade machine startup solutions'
      ]
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
    recommendedCategory: 'skill_based_game_board',
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
    recommendedCategory: 'skill_based_game_board',
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
    recommendedCategory: 'skill_based_game_board',
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
    recommendedCategory: 'skill_based_game_board',
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
    recommendedCategory: 'skill_based_game_board',
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
    recommendedCategory: 'skill_based_game_board',
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
    recommendedCategory: 'skill_based_game_board',
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
    recommendedCategory: 'skill_based_game_board',
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
    recommendedCategory: 'skill_based_game_board',
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
