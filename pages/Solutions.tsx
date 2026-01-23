import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Building2, Briefcase, Cpu, Zap, Users, Car, 
  ShoppingBag, Scissors, PenTool, Store, Monitor, Beer, ArrowRight, Utensils, Hotel 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { LanguageCode } from '../types';

// ✅ 1. 定义 12 类目标客户数据模型 (对应 i18n 中的 sol.XXX)
const industrySolutions = [
  { id: 'distributor', icon: Building2, key: 'distributor' },
  { id: 'agent', icon: Briefcase, key: 'agent' },
  { id: 'custom-kit', icon: Cpu, key: 'custom' },
  { id: 'game-room', icon: Zap, key: 'gameroom' },
  { id: 'arcade', icon: Users, key: 'arcade' },
  { id: 'gas-station', icon: Car, key: 'gas' },
  { id: 'convenience-store', icon: ShoppingBag, key: 'cstore' },
  { id: 'barbershop', icon: Scissors, key: 'barber' },
  { id: 'tattoo-studio', icon: PenTool, key: 'tattoo' },
  { id: 'laundromat', icon: Store, key: 'laundry' },
  { id: 'internet-cafe', icon: Monitor, key: 'icafe' },
  { id: 'lounge', icon: Beer, key: 'lounge' }
];

const Solutions: React.FC = () => {
  const { lang } = useParams();
  const { t } = useTranslation();
  const currentLang = (lang as LanguageCode) || 'en';

  // 2. SEO Schema 结构化数据 (帮助 Google 理解 12 类行业)
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
      <div className="relative py-24 px-4 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-brand-500/5 blur-[120px] rounded-full -translate-y-1/2"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            {t('sol.page.title')}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t('sol.page.subtitle')}
          </p>
        </div>
      </div>

      {/* ✅ 12 宫格网格布局 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrySolutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <Link 
                key={sol.id} 
                to={`/${currentLang}/solutions/${sol.id}`} 
                className="group relative bg-brand-800/40 border border-slate-800 p-8 rounded-3xl hover:border-brand-500 transition-all flex flex-col h-full shadow-xl hover:shadow-brand-500/10 overflow-hidden"
              >
                {/* 装饰性背景 */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-500/5 rounded-full blur-2xl group-hover:bg-brand-500/10 transition-colors"></div>
                
                {/* 图标 */}
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 group-hover:bg-brand-500 group-hover:border-brand-400 transition-all duration-500 shadow-inner">
                  <Icon className="h-8 w-8 text-brand-400 group-hover:text-white" />
                </div>
                
                {/* 标题 & 描述 */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                  {t(`sol.${sol.key}.title`)}
                </h3>
                
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {t(`sol.${sol.key}.desc`)}
                </p>
                
                {/* 动作按钮 */}
                <div className="flex items-center text-brand-400 font-bold group-hover:text-brand-300 transition-colors">
                  Explore Strategy 
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-800/50 py-20 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Don't See Your Industry?</h2>
          <p className="text-slate-400 mb-10 text-lg">We provide custom OEM/ODM solutions for any environment that requires high-performance skill-based entertainment.</p>
          <Link to={`/${currentLang}/contact`} className="inline-block bg-brand-500 hover:bg-brand-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-500/25">
             Consult with our Engineers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solutions;