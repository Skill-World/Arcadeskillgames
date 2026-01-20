
import { Product, BlogPost, Solution, LanguageCode } from './types';
import { t } from './utils/i18n';

export const getProducts = (lang: LanguageCode): Product[] => [
  {
    id: 'p1',
    name: t(lang, 'prod.p1.name'),
    category: 'complete_machine',
    description: t(lang, 'prod.p1.desc'),
    imageUrl: 'https://picsum.photos/400/600',
    features: ['Skill "Nudge" Mechanics', '43" Touchscreen', 'ICT Bill Validator Included', 'Pre-Wired & Tested']
  },
  {
    id: 'p2',
    name: t(lang, 'prod.p2.name'),
    category: 'game_board',
    description: t(lang, 'prod.p2.desc'),
    imageUrl: 'https://picsum.photos/400/300',
    features: ['Game Board PCB Only', 'Standard JAMMA/IO Harness', 'High Volatility Math', 'Adjustable Difficulty']
  },
  {
    id: 'p3',
    name: t(lang, 'prod.p3.name'),
    category: 'complete_machine',
    description: t(lang, 'prod.p3.desc'),
    imageUrl: 'https://picsum.photos/400/400',
    features: ['Compact Countertop Form Factor', 'Plug-and-Play', 'Reaction-Based Gameplay', 'Cashless Ready']
  },
  {
    id: 'p4',
    name: t(lang, 'prod.p4.name'),
    category: 'cabinet_only',
    description: t(lang, 'prod.p4.desc'),
    imageUrl: 'https://picsum.photos/400/600',
    features: ['Empty Metal Cabinet', 'Button Panel Included', 'Pre-Wired Harness (36/10 Pin)', 'No Monitor / No Game Board']
  }
];

// --- RICH BLOG DATA START ---
export const getBlogs = (lang: LanguageCode): BlogPost[] => [
  {
    id: 'b1',
    slug: 'skill-game-compliance-guide-2024',
    title: t(lang, 'blog.b1.title'),
    excerpt: t(lang, 'blog.b1.excerpt'),
    date: 'Oct 12, 2024',
    author: {
      name: 'Robert Vance',
      role: 'Chief Engineer',
      avatar: 'R',
      bio: 'Robert has spent 25 years designing coin-op hardware. He specializes in regulatory compliance frameworks for US markets and consults for major legislative boards.'
    },
    category: 'Compliance',
    readingTime: '8 min read',
    imageUrl: 'https://picsum.photos/1200/600?random=101',
    seo: {
      metaTitle: 'Skill Game Compliance Guide: Nudge & Video Shooting Legitimacy',
      metaDescription: 'A technical deep dive into Nudge and Shooting mechanics. How hand-eye coordination features distinguish amusement devices from prohibited games of chance.',
      keywords: ['Pennsylvania Skill Games', 'Nudge Machine', 'Skill Based Amusement', 'Compliance Mode', 'Legal Coin Op'],
      schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Defining 'Skill': The Legal Distinction",
        "author": { "@type": "Person", "name": "Robert Vance" },
        "datePublished": "2024-10-12"
      }
    },
    blocks: [
      {
        type: 'paragraph',
        content: 'In the rapidly evolving landscape of Coin-Op amusement, the line between <strong>"Skill"</strong> and <strong>"Chance"</strong> is the most critical factor for your business survival. <a href="/en/solutions/game-agents" class="text-brand-400 hover:underline font-bold">Game Agents</a> and venue owners must understand why "Reel-Based Skill Games" are legally distinct from traditional chance-based devices.'
      },
      {
        type: 'h2',
        content: 'The "Predominance Test"'
      },
      {
        type: 'paragraph',
        content: 'Legal precedents in most jurisdictions rely on the "Predominance Test". Does the player\'s input affect the outcome more than random variables? Our "Nudge" engines are built with this specifically in mind. A knowledgeable player can utilize the "Nudge" or "Swap" feature to align winning symbols manually.'
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
      },
      {
        type: 'callout',
        content: 'Fact: In a true skill game, the result is determined by the player\'s dexterity and mental acuity. Every puzzle has a solution.'
      },
      {
        type: 'h2',
        content: 'Video Shooting Mechanics'
      },
      {
        type: 'paragraph',
        content: 'For <a href="/en/solutions/arcades" class="text-brand-400 hover:underline">Fish Tables</a> and video shooting games, the "Skill" element is even more visible. Players must calculate bullet trajectory, target value, and resource management. This creates a "Pay-to-Play" amusement model similar to esports, rather than a wager.'
      }
    ]
  },
  {
    id: 'b2',
    slug: 'maintenance-guide-bill-acceptors',
    title: t(lang, 'blog.b2.title'),
    excerpt: t(lang, 'blog.b2.excerpt'),
    date: 'Sept 28, 2024',
    author: {
      name: 'Tech Support Team',
      role: 'Support',
      avatar: 'T',
      bio: 'Our dedicated factory support team, available 24/7 to help distributors and operators keep their routes running smoothly.'
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
        content: 'A jammed bill acceptor on a Friday night means hundreds of dollars in lost revenue. This guide covers the preventative maintenance schedule for the ICT A6 and Pyramid 7600 series validators used in our <a href="/en/products?category=complete_machine" class="text-brand-400 hover:underline">Vertical Cabinets</a>.'
      },
      {
        type: 'video',
        content: 'Maintenance Tutorial',
        url: 'https://www.youtube.com/embed/dummy-video-id', // Placeholder
        caption: 'Video: Cleaning the sensor array in under 2 minutes.'
      },
      {
        type: 'h2',
        content: 'Common Error Codes'
      },
      {
        type: 'list',
        content: [
          '<strong>2 Flashes:</strong> Stacker Full or Jammed. Check the gear box.',
          '<strong>3 Flashes:</strong> Sensor Dirty. Use compressed air and a specialized cleaning card.',
          '<strong>7 Flashes:</strong> Motor Failure. Requires part replacement.'
        ]
      },
      {
        type: 'h3',
        content: 'The 30-Day Checklist'
      },
      {
        type: 'paragraph',
        content: 'Every time you collect cash, perform these three quick checks to ensure your hardware lasts for years.'
      },
      {
        type: 'cta',
        content: 'Order Spare Bill Validators',
        url: '/en/contact'
      }
    ]
  },
  {
    id: 'b3',
    slug: 'player-psychology-replay-value',
    title: t(lang, 'blog.b3.title'),
    excerpt: t(lang, 'blog.b3.excerpt'),
    date: 'Sept 15, 2024',
    author: {
      name: 'Sarah Jenkins',
      role: 'Game Designer',
      avatar: 'S',
      bio: 'Sarah leads the math and logic design team. She has a background in behavioral psychology and applies it to create engaging game loops.'
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
      },
      {
        type: 'h2',
        content: 'Visualizing Engagement'
      },
      {
        type: 'paragraph',
        content: 'In our Ocean King series, the "Boss Battle" mechanic requires team coordination. This social element creates a sticky environment that solo games cannot replicate.'
      },
      {
        type: 'image',
        content: 'https://picsum.photos/800/400?random=105',
        alt: 'Players gathering around a fish table',
        caption: 'Social proof: Crowds attract more crowds.'
      },
      {
        type: 'h3',
        content: 'The "Practice Makes Perfect" Loop'
      },
      {
        type: 'paragraph',
        content: 'Because the outcome depends on reflexes, a loss feels like a personal failure to execute, rather than bad luck. This triggers a psychological drive to "try again and do it better", which drives coin-in without relying on chance mechanics.'
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
    title: t(lang, 'sol.gameroom.title'),
    targetAudience: t(lang, 'sol.gameroom.audience'),
    description: t(lang, 'sol.gameroom.desc'),
    fullDescription: t(lang, 'sol.gameroom.full'),
    benefits: ['Link-Ready Banks', 'Community Jackpots', 'High-Impact Visuals'],
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
      metaTitle: 'Adult Game Room Equipment | Linked Skill Cabinets',
      metaDescription: 'Outfit your gaming center with linked progressive skill games. High-revenue vertical cabinets with synchronized signage displays.',
      keywords: ['adult game room machines', 'linked arcade games', 'progressive skill games', 'game room cabinets']
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
    title: t(lang, 'sol.gas.title'),
    targetAudience: t(lang, 'sol.gas.audience'),
    description: t(lang, 'sol.gas.desc'),
    fullDescription: t(lang, 'sol.gas.full'),
    benefits: ['Security Reinforced', 'Small Footprint', 'Automated Operation'],
    icon: 'Zap',
    recommendedCategory: 'complete_machine',
    painPoints: [
      { title: 'Dead Space', description: 'Empty corners generating zero revenue.', icon: 'Maximize' },
      { title: 'Security Risks', description: 'Fear of break-ins for cash equipment.', icon: 'Lock' }
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
      metaTitle: 'Gas Station Skill Games | Passive Revenue Kiosks',
      metaDescription: 'Maximize C-store profits with compact amusement machines. Security-reinforced cabinets designed specifically for gas stations and truck stops.',
      keywords: ['gas station arcade game', 'convenience store skill games', 'passive revenue kiosks', 'c-store gaming']
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
