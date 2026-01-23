import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Building2, Briefcase, Cpu, Zap, Users, Car, 
  ShoppingBag, Scissors, PenTool, Store, Monitor, Beer, ArrowRight 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { LanguageCode } from '../types';

// ✅ 1. 核心 12 类目标客户数据（与 Layout 导航同步）
const industrySolutions = [
  { id: 'distributors', icon: Building2, key: 'distributor' },
  { id: 'agents', icon: Briefcase, key: 'agent' },
  { id: 'custom-kits', icon: Cpu, key: 'custom' },
  { id: 'game-rooms', icon: Zap, key: 'gameroom' },
  { id: 'arcades', icon: Users, key: 'arcade' },
  { id: 'gas-stations', icon: Car, key: 'gas' },
  { id: 'convenience-stores', icon: ShoppingBag, key: 'cstore' },
  { id: 'barbershops', icon: Scissors, key: 'barber' },
  { id: 'tattoo-studios', icon: PenTool, key: 'tattoo' },
  { id: 'laundromats', icon: Store, key: 'laundry' },
  { id: 'internet-cafes', icon: Monitor, key: 'icafe' },
  { id: 'lounges', icon: Beer, key: 'lounge' }
];

const Solutions: React.FC = () => {
  const { lang } = useParams();
  const { t } = useTranslation();
  const currentLang = (lang as LanguageCode) || 'en';

  // 2. SEO Schema (让 Google 理解这是一个 12 类方案的列表)
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": industrySolutions.map((sol, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://arcadeskillgames.vercel.app/${currentLang}/solutions/${sol.id}`,
      "name": t(`sol.${sol.key}.title`)
    }))
  };

  return (
    <div className="bg-brand-900 min-h-screen">
      <SEO 
        title={t('sol.page.title')} 
        description={t('sol.page.subtitle')} 
        lang={currentLang}
        path="solutions"
        schema={seoSchema}
      />

      {/* Hero Section */}
      <div className="bg-slate-950 py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-500/5 blur-[100px] rounded-full -translate-y-1/2"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t('sol.page.title')}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('sol.page.subtitle')}
          </p>
        </div>
      </div>

      {/* ✅ 3. 交替排列的 12 类方案列表 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {industrySolutions.map((sol, index) => {
            const Icon = sol.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={sol.id} 
                className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Visual Side (带占位图和图标遮罩) */}
                <div className="lg:w-1/2 relative group cursor-pointer">
                  <Link to={`/${currentLang}/solutions/${sol.id}`}>
                    <div className="relative h-[300px] md:h-[450px] overflow-hidden rounded-3xl border border-slate-700 shadow-2xl">
                      <div className="absolute inset-0 bg-brand-900/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                      <img 
                        src={`https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800&random=${index}`} 
                        alt={t(`sol.${sol.key}.title`)} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      {/* 悬浮显示的装饰图标 */}
                      <div className="absolute top-6 left-6 z-20 p-4 bg-brand-500 rounded-2xl shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-bold mb-6">
                    {t(`sol.${sol.key}.title`).toUpperCase()} STRATEGY
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {t(`sol.${sol.key}.title`)}
                  </h2>
                  <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                    {t(`sol.${sol.key}.desc`)}
                  </p>
                  
                  {/* 核心价值点（SEO 增强） */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {['Revenue Optimization', 'Compliance Security', 'Technical Support'].map((item, i) => (
                      <div key={i} className="flex items-center text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-2"></div>
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/${currentLang}/solutions/${sol.id}`} 
                    className="inline-flex items-center bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:translate-x-2"
                  >
                    View Full Industry Breakdown <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-950 py-24 border-t border-slate-800 text-center px-4">
         <h2 className="text-4xl font-bold text-white mb-6">Custom Private Label Solutions</h2>
         <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
           We engineer exclusive software and hardware for multi-location venue owners.
         </p>
         <Link to={`/${currentLang}/contact`} className="bg-white text-brand-900 px-10 py-4 rounded-full font-extrabold hover:bg-slate-100 transition-colors">
            Get Engineering Consultation
         </Link>
      </div>
    </div>
  );
};

export default Solutions;