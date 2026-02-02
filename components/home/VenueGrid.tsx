import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { t } from '../../utils/i18n';
import { LanguageCode } from '../../types';
import { ArrowUpRight } from 'lucide-react';

// 确保这里的 ID 和 Key 与 Layout.tsx 中的 venueCategories 完全一致
const venueCategories = [
  { id: 'distributors', key: 'distributor' },
  { id: 'game-agents', key: 'agent' },
  { id: 'gas-stations', key: 'gas' },
  { id: 'laundromats', key: 'laundry' },
  { id: 'convenience-stores', key: 'cstore' },
  { id: 'lounges', key: 'lounge' },
  // ... 其他分类
];

export const VenueGrid = () => {
  const { lang } = useParams<{ lang: LanguageCode }>();

  return (
    <section className="py-24 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black text-white uppercase italic mb-12 text-center">
          Targeted <span className="text-brand-500">Revenue Solutions</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {venueCategories.map((cat) => (
            <Link 
              key={cat.id}
              to={`/${lang}/solutions/${cat.id}`} // ✅ 这里的路径必须与路由配置一致
              className="group relative bg-slate-800/50 border border-slate-700 p-8 rounded-[2rem] hover:border-brand-500 transition-all overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-400 transition-colors">
                  {t(`sol.${cat.key}.title`)} {/* ✅ 使用与导航栏一致的翻译 Key */}
                </h3>
                <div className="flex items-center text-xs text-slate-500 font-black uppercase tracking-widest">
                  View Strategy <ArrowUpRight className="ml-1 w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
              {/* 背景装饰 */}
              <div className="absolute -right-4 -bottom-4 text-slate-700/20 font-black text-6xl italic group-hover:text-brand-500/10 transition-colors">
                {cat.id.slice(0, 2).toUpperCase()}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
