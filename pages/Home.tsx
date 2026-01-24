import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// 导入逻辑与数据
import { getProducts } from '../data';
import { SEO } from '../components/SEO';
import { t, DEFAULT_LANG } from '../utils/i18n';
import { LanguageCode } from '../types';

// 导入新开发的营销组件
import { TrustBar } from '../components/home/TrustBar';
import { PainPoints } from '../components/home/PainPoints';
import { VenueGrid } from '../components/home/VenueGrid';
import { ProductShowcase } from '../components/home/ProductShowcase';
import { Testimonials } from '../components/home/Testimonials';

// --- 关键修改：导入 LeadForm 组件 ---
import { LeadForm } from '../components/LeadForm'; 

const Home: React.FC = () => {
  // --- 逻辑层：保留多语言支持 ---
  const { lang } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  const products = getProducts(currentLang);

  // --- SEO层：保留结构化数据与元标签 ---
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arcade Skill Games",
    "url": "https://www.arcadeskillgames.com",
    "description": t(currentLang, 'hero.subtitle'),
    "areaServed": "USA",
    "knowsAbout": ["Skill Games", "Nudge Machines", "Fish Tables", "Fire Kirin Original Logic", "Arcade Cabinets"]
  };

  return (
    <div className="animate-fade-in">
      {/* 1. SEO 头部注入 */}
      <SEO 
        title={`${t(currentLang, 'hero.title')} | 28-Year Source Factory`}
        description={t(currentLang, 'hero.subtitle')}
        schema={homeSchema}
        keywords={['Fire Kirin Original Logic', 'Wholesale Skill Games', 'Nudge Machine Manufacturer', 'Fish Table Distributor', 'PA Skill Games', 'Passive Income for Gas Stations']}
      />

      {/* 2. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-800 via-brand-900 to-black opacity-80"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center pt-10">
          <h2 className="inline-block py-1 px-3 rounded-full bg-brand-500/20 border border-brand-500/50 text-brand-400 text-sm font-bold tracking-wider mb-6 animate-pulse uppercase">
            Original Fire Kirin Logic Developer & 28-Year Manufacturer
          </h2>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight">
            {t(currentLang, 'hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mb-12 leading-relaxed font-light mx-auto">
            {t(currentLang, 'hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to={`/${currentLang}/products`} className="bg-brand-500 hover:bg-brand-600 text-white text-lg px-10 py-5 rounded-lg font-bold shadow-lg transition-all transform hover:scale-105 flex items-center justify-center">
              Browse Wholesale Catalog <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
              className="bg-transparent border-2 border-slate-500 hover:border-brand-400 hover:text-brand-400 text-slate-200 text-lg px-10 py-5 rounded-lg font-bold transition-all"
            >
              Get Free ROI Consultation
            </button>
          </div>
        </div>
      </section>

      {/* 3. 信任背书 (Trust Bar) */}
      <TrustBar />

      {/* 4. 痛点分析 (Pain Points) */}
      <PainPoints />

      {/* 5. 行业分流 (Venue Grid) */}
      <VenueGrid />

      {/* 6. 产品肌肉展示 (Product Showcase) */}
      <ProductShowcase />

      {/* 7. 客户证言 (Testimonials) */}
      <Testimonials />

      {/* 8. 最终转化区 (Final CTA) */}
      <section className="bg-brand-600 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-8 leading-none">
            Claim Your <span className="text-slate-900">Source Factory</span> Pricing Today
          </h2>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openLeadForm'))}
            className="bg-white text-brand-600 font-black px-12 py-6 rounded-2xl text-lg hover:scale-105 transition-transform uppercase tracking-widest shadow-2xl"
          >
            Download 2026 Wholesale Catalog
          </button>
        </div>
      </section>

      {/* 9. SEO 标签云 */}
      <section className="py-12 bg-brand-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">Industry Leading Skill Game Solutions</h2>
          <div className="flex flex-wrap justify-center gap-4">
             {['Original Fire Kirin', 'Skill Games for Sale', 'Nudge Machine Logic', 'Fish Table Manufacturer', '28 Year Factory'].map((tag, i) => (
               <span key={i} className="text-xs text-slate-600 border border-slate-800 rounded-full px-3 py-1 italic">
                 {tag}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* --- 关键修改：在此处挂载 LeadForm 组件 --- */}
      <LeadForm />
    </div>
  );
};

export default Home;
