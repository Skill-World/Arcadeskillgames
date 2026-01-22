
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TrendingUp, ShieldCheck, DollarSign, ArrowRight } from 'lucide-react';
import { getProducts } from '../data';
import { SEO } from '../components/SEO';
import { t, DEFAULT_LANG } from '../utils/i18n';
import { LanguageCode } from '../types';

const Home: React.FC = () => {
  const { lang } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  
  // Fetch localized products
  const products = getProducts(currentLang);

  // SEO Schema for Home Page
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arcade Skill Games",
    "url": "https://www.arcadeskillgames.com",
    "description": t(currentLang, 'hero.subtitle'),
    "areaServed": "USA",
    "knowsAbout": ["Skill Games", "Nudge Machines", "Fish Tables", "Arcade Cabinets", "Video Shooting Games"]
  };

  return (
    <div className="animate-fade-in">
      {/* 1. SEO Head Injection */}
      <SEO 
        title={t(currentLang, 'hero.title')}
        description={t(currentLang, 'hero.subtitle')}
        schema={homeSchema}
        keywords={['Wholesale Skill Games', 'Nudge Machine Manufacturer', 'Fish Table Distributor', 'PA Skill Games', 'Coin Op Amusement', 'Video Shooting Games', 'Reel Skill Games']}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-800 via-brand-900 to-black opacity-80"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-10">
          <h2 className="inline-block py-1 px-3 rounded-full bg-brand-500/20 border border-brand-500/50 text-brand-400 text-sm font-bold tracking-wider mb-6 animate-pulse">
            WHOLESALE DISTRIBUTOR & MANUFACTURER
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            {t(currentLang, 'hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mb-12 leading-relaxed font-light">
            {t(currentLang, 'hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link to={`/${currentLang}/products`} className="bg-brand-500 hover:bg-brand-600 text-white text-lg px-10 py-5 rounded-lg font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all transform hover:scale-105 flex items-center justify-center">
              {t(currentLang, 'cta.explore')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to={`/${currentLang}/contact`} className="bg-transparent border-2 border-slate-500 hover:border-brand-400 hover:text-brand-400 text-slate-200 text-lg px-10 py-5 rounded-lg font-bold transition-all flex items-center justify-center">
              {t(currentLang, 'cta.distributor')}
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-400 text-sm font-semibold tracking-widest uppercase opacity-70">
            <span>PA Compliant</span>
            <span>GA Master License</span>
            <span>24/7 Support</span>
            <span>Lifetime Warranty</span>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <article className="p-8 bg-brand-900 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors group">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-brand-500/10 mb-6 group-hover:bg-brand-500/20 transition-colors">
                <TrendingUp className="h-10 w-10 text-brand-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t(currentLang, 'home.f1.title')}</h3>
              <p className="text-slate-400 leading-relaxed">{t(currentLang, 'home.f1.desc')}</p>
            </article>
            <article className="p-8 bg-brand-900 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors group">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-brand-500/10 mb-6 group-hover:bg-brand-500/20 transition-colors">
                <ShieldCheck className="h-10 w-10 text-brand-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t(currentLang, 'home.f2.title')}</h3>
              <p className="text-slate-400 leading-relaxed">{t(currentLang, 'home.f2.desc')}</p>
            </article>
            <article className="p-8 bg-brand-900 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors group">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-brand-500/10 mb-6 group-hover:bg-brand-500/20 transition-colors">
                <DollarSign className="h-10 w-10 text-brand-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t(currentLang, 'home.f3.title')}</h3>
              <p className="text-slate-400 leading-relaxed">{t(currentLang, 'home.f3.desc')}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Products Teaser */}
      <section className="py-24 bg-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t(currentLang, 'home.top_performers')}</h2>
              <p className="text-slate-400">{t(currentLang, 'home.top_performers_sub')}</p>
            </div>
            <Link to={`/${currentLang}/products`} className="text-brand-400 hover:text-brand-300 font-semibold flex items-center gap-1">
              {t(currentLang, 'home.view_all')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="group relative overflow-hidden rounded-xl bg-brand-800 border border-slate-700 transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                   <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 z-10">BEST SELLER</div>
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-2">{product.category}</span>
                  <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{product.description}</p>
                  <Link to={`/${currentLang}/products`} className="text-white text-sm font-semibold border-b border-brand-500 pb-0.5 hover:text-brand-400 transition-colors w-max">
                    {t(currentLang, 'home.learn_details')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking SEO Block (Hidden from main visual flow but crawlable) */}
      <section className="py-12 bg-brand-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Popular Industry Applications</h2>
          <div className="flex flex-wrap gap-4">
             {['Pennsylvania Skill Games', 'Georgia COAM Master License', 'Virginia Grey Machine', 'Fish Arcade Tournament', 'Nudge Skill Game', 'Vertical Gaming Cabinet', 'Banilla Games Alternative', 'Pace-O-Matic Competitor', 'Video Shooting Games', 'Reel Skill Games'].map((tag, i) => (
               <Link key={i} to={`/${currentLang}/solutions`} className="text-xs text-slate-600 hover:text-brand-400 transition-colors border border-slate-800 rounded-full px-3 py-1">
                 {tag}
               </Link>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
