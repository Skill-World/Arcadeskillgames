import { 
  Zap, Droplets, Store, Scissors, PenTool, Wifi, 
  Armchair, Dices, ShieldCheck, Hammer, Utensils, Truck 
} from 'lucide-react';

export const homeData = {
  // 1. 权威数据矩阵
  stats: [
    { label: 'Proprietary Games', value: '666+', sub: 'Original Math Models' },
    { label: 'Monthly Sales', value: '3,000+', sub: 'Units Shipped Globally' },
    { label: 'R&D Heritage', value: '28+ Yrs', sub: 'Industry Pioneers' },
    { label: 'Customization', value: '100%', sub: 'Any Skill-Based Board' }
  ],

  // 2. 痛点共鸣
  painPoints: [
    {
      title: "Rising Utility Costs?",
      desc: `While fuel and retail margins shrink, our skill games provide a 100% passive revenue stream to offset your rising utility bills without extra labor.`,
      icon: "TrendingDown"
    },
    {
      title: "Wasted 'Dead Space'?",
      desc: `Stop paying rent for empty corners. Our 3sqft vertical kiosks generate more net profit than a full aisle of retail snacks or vending.`,
      icon: "Maximize"
    },
    {
      title: "Unreliable Vendors?",
      desc: `Burned by 'clone' machines and disappearing brokers? We are a 28-year source factory with direct engineer support and vault-grade security.`,
      icon: "ShieldAlert"
    }
  ],

  // 3. 12个行业分类
  venues: [
    { id: 'gas-stations', title: 'Gas Stations', icon: Zap, desc: 'Maximize profit per sq ft.' },
    { id: 'laundromats', title: 'Laundromats', icon: Droplets, desc: 'Offset utility bills effortlessly.' },
    { id: 'convenience-stores', title: 'C-Stores', icon: Store, desc: 'High-ROI impulse play design.' },
    { id: 'barbershops', title: 'Barbershops', icon: Scissors, desc: 'Monetize the wait & upgrade vibe.' },
    { id: 'tattoo-studios', title: 'Tattoo Studios', icon: PenTool, desc: 'Engage entourages with edgy logic.' },
    { id: 'internet-cafes', title: 'Internet Cafes', icon: Wifi, desc: 'Revenue between matches.' },
    { id: 'lounges', title: 'Lounges', icon: Armchair, desc: 'Social catalyst to increase check size.' },
    { id: 'arcades', title: 'Arcade Venues', icon: Dices, desc: 'Elite multiplayer hardware.' },
    { id: 'game-agents', title: 'Game Agents', icon: ShieldCheck, desc: 'Secure your route & fleet.' },
    { id: 'custom-kits', title: 'Custom Kits', icon: Hammer, desc: 'Build your own brand (OEM).' },
    { id: 'restaurants', title: 'Restaurants', icon: Utensils, desc: 'Table-side social entertainment.' },
    { id: 'truck-stops', title: 'Truck Stops', icon: Truck, desc: 'Unattended high-hold revenue.' },
  ],

  // 4. 核心产品线 (9款热销)
showcase: {
  boards: [
    { 
      id: "golden-empires-777", // ✅ 必填：用于生成默认链接
      name: "Fire Kirin: Original", 
      tags: "Legendary", 
      desc: "The legendary logic that dominates the US market. 100% original math.",
      link: "" // 💡 留空则自动跳转到 /en/products/fire-kirin-original
    },
    { 
      id: "golden-empire-nudge",
      name: "Golden Empire Nudge", 
      tags: "Compliance", 
      desc: "Verified skill-based mechanics with pre-reveal logic for retail zones.",
      link: "" 
    },
    { 
      id: "dragon-hunter",
      name: "Dragon Hunter", 
      tags: "High Hold", 
      desc: "Precision-engineered math models for high professional retention.",
      link: ""
    }
  ],
  cabinets: [
    { 
      id: "titan-vertical-43",
      name: '43" Titan Vertical', 
      tags: "C-Store Top Pick", 
      desc: "Ultra-slim 1.2mm reinforced steel construction with 4K UHD touch.",
      link: "" 
    },
    { 
      id: "fish-table-8-player",
      name: "8-Player Fish Table", 
      tags: "Social Hub", 
      desc: "Industrial LG/Samsung 4K Panels with dual-lock vault security.",
      link: "" 
    },
    { 
      id: "vip-slant-top",
      name: "VIP Slant-Top", 
      tags: "Luxury", 
      desc: "Ergonomic furniture-grade design for lounges and private clubs.",
      link: "" 
    }
  ],
  logic: [
    { 
      id: "universal-pcb-10pin",
      name: "36/10 Pin Universal", 
      tags: "Tech-Ready", 
      desc: "Seamlessly upgrade 90% of existing cabinets with 28yr factory logic.",
      link: "" 
    },
    { 
      id: "nudge-plus-logic",
      name: "Nudge-Plus Logic", 
      tags: "Smart Tech", 
      desc: "Pre-Reveal compliance logic with native 4K output and remote audit.",
      link: "" 
    },
    { 
      id: "linked-network-board",
      name: "Linked Network Board", 
      tags: "Route Control", 
      desc: "Remote accounting & global leaderboards via secure SAS 6.0.",
      link: "" 
    }
  ]
},

  // 5. 客户证言 (ROI 案例)
  testimonials: [
    {
      quote: `The 43" Titan generates $2,400 monthly profit in just 3 sq ft. It pays my entire gas station's utility bill every single month.`,
      author: "Mike D.",
      role: "Gas Station Owner",
      metrics: "$2,400/Mo Net Profit"
    },
    {
      quote: `My laundromat wait-time is now a $1,500/week revenue stream. The Fire Kirin logic is a crowd favorite in Chicago.`,
      author: "Sarah L.",
      role: "Laundromat Owner",
      metrics: "$1,500/Week Revenue"
    },
    {
      quote: `Switching to ASG's source factory boards increased my route margin by 30%. Their tech support is for life.`,
      author: "Antonio R.",
      role: "Route Operator",
      metrics: "+30% Margin Growth"
    }
  ]
};
