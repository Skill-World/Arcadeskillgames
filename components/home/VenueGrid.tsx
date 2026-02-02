import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Users, UserCheck, Wrench, LayoutGrid, Gamepad2, Fuel, 
  Store, Scissors, PenTool, Waves, Monitor, Coffee, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';
import { t } from '../../utils/i18n';
import { LanguageCode } from '../../types';

// 定义 12 类行业分类及其核心吸引点
const venueCategories = [
  { 
    id: 'distributors', key: 'distributor', icon: Users,
    points: ['Wholesale Container Pricing', 'Mixed Loading Logistics', '24/7 Parts Support']
  },
  { 
    id: 'game-agents', key: 'agent', icon: UserCheck,
    points: ['Passive Revenue Share', 'Remote Route Management', 'Exclusive Area Protection']
  },
  { 
    id: 'custom-kits', key: 'custom', icon: Wrench,
    points: ['Bespoke Logic Dev', 'Private Label Skins', 'Unique Cabinet Design']
  },
  { 
    id: 'game-rooms', key: 'gameroom', icon: LayoutGrid,
    points: ['Floor Layout Optimization', 'Player Retention Math', 'Vault-Grade Security']
  },
  { 
    id: 'arcades', key: 'arcade', icon: Gamepad2,
    points: ['High-Hold Skill Logic', '4K Ultra-Thin Cabinets', 'Anti-Cheat Protection']
  },
  { 
    id: 'gas-stations', key: 'gas', icon: Fuel,
    points: ['3sqft Vertical Footprint', 'Offset Utility Costs', 'Passive Income Hub']
  },
  { 
    id: 'convenience-stores', key: 'cstore', icon: Store,
    points: ['High Net Profit / Sqft', 'Low Maintenance Hardware', 'Social Engagement']
  },
  { 
    id: 'barbershops', key: 'barber', icon: Scissors,
    points: ['Wait-Time Monetization', 'Social Gaming Hub', 'Zero Extra Labor']
  },
  { 
    id: 'tattoo-studios', key: 'tattoo', icon: PenTool,
    points: ['Aesthetic Integration', 'Niche Audience Gaming', 'High Re-play Rates']
  },
  { 
    id: 'laundromats', key: 'laundry', icon: Waves,
    points: ['24/7 Passive Revenue', 'Weather-Proof Income', 'Bill-Pay Synergy']
  },
  { 
    id: 'internet-cafes', key: 'icafe', icon: Monitor,
    points: ['PC Gaming Synergy', 'Skill-Based PCB Logic', 'Plug-and-Play Setup']
  },
  { 
    id: 'lounges', key: 'lounge', icon: Coffee,
    points: ['Social Skill Interaction', 'Ergonomic VIP Seating', 'Evening Profit Peak']
  }
];

export const VenueGrid = () => {
  const { lang } = useParams<{ lang: LanguageCode }>();

  return (
    <section className="py-24 bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              to={`/${lang}/solutions/${cat.id}`} // 核心链接
              className="group relative bg-brand-900 border border-slate-800 p-8 rounded-[2.5rem] hover:border-brand-500 transition-all duration-500 flex flex-col shadow-2xl"
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* 行业名称与图标 */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all">
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-brand-400 transition-colors">
                    {t(`sol.${cat.key}.title`)}
                  </h3>
                </div>

                {/* 吸引力要点 (Bullet Points) */}
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

              {/* 背景装饰 */}
              <cat.icon className="absolute -right-4 -bottom-4 w-24 h-24 text-slate-700/5 group-hover:text-brand-500/10 transition-colors duration-700" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
