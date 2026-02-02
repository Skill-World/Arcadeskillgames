import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Users, UserCheck, Wrench, LayoutGrid, Gamepad2, Fuel, 
  Store, Scissors, PenTool, Waves, Monitor, Coffee, 
  ArrowRight 
} from 'lucide-react';
import { t } from '../../utils/i18n';
import { LanguageCode } from '../../types';

// 1. 定义行业分类：必须与 Layout.tsx 中的 ID 保持 100% 一致
const venueCategories = [
  { id: 'distributors', key: 'distributor', icon: Users },
  { id: 'game-agents', key: 'agent', icon: UserCheck },
  { id: 'custom-kits', key: 'custom', icon: Wrench },
  { id: 'game-rooms', key: 'gameroom', icon: LayoutGrid },
  { id: 'arcades', key: 'arcade', icon: Gamepad2 },
  { id: 'gas-stations', key: 'gas', icon: Fuel },
  { id: 'convenience-stores', key: 'cstore', icon: Store },
  { id: 'barbershops', key: 'barber', icon: Scissors },
  { id: 'tattoo-studios', key: 'tattoo', icon: PenTool },
  { id: 'laundromats', key: 'laundry', icon: Waves },
  { id: 'internet-cafes', key: 'icafe', icon: Monitor },
  { id: 'lounges', key: 'lounge', icon: Coffee }
];

export const VenueGrid = () => {
  const { lang } = useParams<{ lang: LanguageCode }>();

  return (
    <section className="py-24 bg-brand-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 头部标题区 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-6 leading-none tracking-tighter">
            Targeted <span className="text-brand-500">Revenue Solutions</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Engineered gaming strategies for every high-traffic environment. Select your venue to see 2026 ROI projections.
          </p>
        </div>

        {/* 12 类行业卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {venueCategories.map((cat) => (
            <Link 
              key={cat.id}
              to={`/${lang}/solutions/${cat.id}`} // ✅ 核心：正确链接到对应的坦克页面
              className="group relative bg-brand-900 border border-slate-800 p-8 rounded-[2.5rem] hover:border-brand-500 transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* 背景装饰：大号淡色图标 */}
              <cat.icon className="absolute -right-4 -bottom-4 w-32 h-32 text-slate-700/10 group-hover:text-brand-500/10 transition-colors duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                {/* 行业图标 */}
                <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <cat.icon className="w-7 h-7" />
                </div>

                {/* 标题：使用全局翻译 Key */}
                <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-brand-400 transition-colors">
                  {t(`sol.${cat.key}.title`)}
                </h3>

                {/* 简介语 */}
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow italic">
                  Maximize every square foot with our factory-direct {cat.id.replace('-', ' ')} setups.
                </p>

                {/* 底部按钮 */}
                <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-brand-500 group-hover:translate-x-2 transition-transform">
                  View Full Strategy <ArrowRight className="ml-2 w-3 h-3" />
                </div>
              </div>

              {/* 边框发光装饰 */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-500/30 rounded-[2.5rem] pointer-events-none transition-all"></div>
            </Link>
          ))}
        </div>

        {/* 底部统计背书 */}
        <div className="mt-20 pt-12 border-t border-slate-800/50 flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           {['10k+ Venues', '28yr Factory', '50 States Covered'].map(txt => (
             <span key={txt} className="text-white font-black uppercase tracking-widest text-xs italic">{txt}</span>
           ))}
        </div>
      </div>
    </section>
  );
};
