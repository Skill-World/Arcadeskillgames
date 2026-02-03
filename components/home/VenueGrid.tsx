import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Users, UserCheck, Wrench, LayoutGrid, Gamepad2, Fuel, 
  Store, Scissors, PenTool, Waves, Monitor, Coffee, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';
import { t } from '../../utils/i18n';
import { LanguageCode } from '../../types';

// 1. 行业分类配置：直接加入 name 属性，防止 i18n 丢失导致空白
const venueCategories = [
  { 
    id: 'distributors', key: 'Distributor', name: 'Distributors', icon: Users,
    points: ['28-Year Source Pricing', 'Mixed Loading Logistics', '24/7 Tech Support']
  },
  { 
    id: 'game-agents', key: 'agent', name: 'Game Agents', icon: UserCheck,
    points: ['Exclusive Area Rights', 'Real-time Route Tracking', 'Passive Revenue Share']
  },
  { 
    id: 'custom-kits', key: 'custom', name: 'Custom Kits', icon: Wrench,
    points: ['Proprietary Logic Dev', 'Bespoke Cabinet Skins', 'Unique PCB Design']
  },
  { 
    id: 'game-rooms', key: 'gameroom', name: 'Game Rooms', icon: LayoutGrid,
    points: ['Floor Layout Strategy', 'High-Hold Math Models', 'Vault-Grade Security']
  },
  { 
    id: 'arcades', key: 'arcade', name: 'Arcades', icon: Gamepad2,
    points: ['Anti-Cheat Logic', '4K Ultra-Thin Cabinets', 'Player Retention Tech']
  },
  { 
    id: 'gas-stations', key: 'gas', name: 'Gas Stations', icon: Fuel,
    points: ['3sqft Vertical Profit', 'Offset Utility Bills', '100% Passive Stream']
  },
  { 
    id: 'convenience-stores', key: 'cstore', name: 'Convenience Stores', icon: Store,
    points: ['High Net Profit / Sqft', 'Low-Touch Operation', 'Social Interaction']
  },
  { 
    id: 'barbershops', key: 'barber', name: 'Barber Shops', icon: Scissors,
    points: ['Wait-Time Monetization', 'Wait-List Engagement', 'Compact Design']
  },
  { 
    id: 'tattoo-studios', key: 'tattoo', name: 'Tattoo Studios', icon: PenTool,
    points: ['Audience Synergy', 'Premium Aesthetic', 'High Re-play Rates']
  },
  { 
    id: 'laundromats', key: 'laundry', name: 'Laundromats', icon: Waves,
    points: ['24/7 Unattended Income', 'Weather-Proof Revenue', 'Bill-Pay Synergy']
  },
  { 
    id: 'internet-cafes', key: 'icafe', name: 'Internet Cafes', icon: Monitor,
    points: ['Skill-Based Upgrades', 'PC Gaming Synergy', 'Plug-and-Play Setup']
  },
  { 
    id: 'lounges', key: 'lounge', name: 'Lounges', icon: Coffee,
    points: ['Social Play Interaction', 'Evening Profit Peaks', 'VIP Seating Options']
  }
];

export const VenueGrid = () => {
  const { lang } = useParams<{ lang: LanguageCode }>();

  return (
    <section className="py-24 bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 版块头部 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-6 tracking-tighter">
            Targeted <span className="text-brand-500">Revenue Solutions</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            28 years of factory engineering applied to your specific venue. Select your industry to unlock custom profit blueprints.
          </p>
        </div>

        {/* 12 类行业卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {venueCategories.map((cat) => (
            <Link 
              key={cat.id}
              to={`/${lang}/solutions/${cat.id}`}
              className="group relative bg-brand-900 border border-slate-800 p-8 rounded-[2.5rem] hover:border-brand-500 transition-all duration-500 flex flex-col shadow-2xl overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* 行业图标与名称 */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <cat.icon className="w-6 h-6" />
                  </div>
                  {/* 修正：优先使用代码中定义的 cat.name，如果 i18n 失败则不会显示空白 */}
                  <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-brand-400 transition-colors">
                    {cat.name}
                  </h3>
                </div>

                {/* 核心吸引力要点 (Bullet Points) - 这里直接显示在版块上 */}
                <ul className="space-y-3 mb-10 flex-grow">
                  {cat.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-300 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* 底部按钮 */}
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">
                  <span>Explore Strategy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* 背景大图标装饰 */}
              <cat.icon className="absolute -right-4 -bottom-4 w-24 h-24 text-slate-700/5 group-hover:text-brand-500/10 transition-colors duration-700" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
