import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getSolutions, getProducts } from '../data';
import { 
  Check, ArrowRight, HelpCircle, Quote, BarChart, ChevronDown, ChevronUp, 
  AlertTriangle, ShieldCheck, TrendingUp, X, Lock, Maximize, Minimize, 
  Coins, Clock, Users, Palette, Smartphone, Eye, Battery, Copy, 
  Moon, LayoutGrid, User, Wrench, DollarSign, ShieldAlert, TrendingDown, 
  Phone, Mail, MessageCircle, FileText, Download,
  Play, Image as ImageIcon
} from 'lucide-react';
import { LanguageCode } from '../types';
import { DEFAULT_LANG, t } from '../utils/i18n';
import { SEO } from '../components/SEO';

// 注意：这里不再需要在此处导入 LeadForm，因为它已经在 Layout.tsx 中全局挂载了

const IconMap: Record<string, React.FC<any>> = {
  AlertTriangle, ShieldCheck, TrendingUp, X, Lock, Maximize, Minimize, 
  Coins, Clock, Users, Palette, Smartphone, Eye, Battery, Copy, 
  Sleep: Moon, LayoutGrid, User, Wrench, DollarSign, ShieldAlert, TrendingDown
};

const SolutionDetail: React.FC = () => {
  const { lang, id } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const solutions = getSolutions(currentLang);
  const solution = solutions.find(s => s.id === id);

  if (!solution) {
    return <Navigate to={`/${currentLang}/solutions`} replace />;
  }

  const allProducts = getProducts(currentLang);
  const recommendedProducts = allProducts.filter(p => p.category === solution.recommendedCategory);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // --- 核心修复：改为触发全局信号 ---
  const triggerLeadForm = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    // 发出全局信号，并传递当前行业名称作为参数
    window.dispatchEvent(new CustomEvent('openLeadForm', { 
      detail: { sector: solution.title } 
    }));
  };

  const solutionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": solution.seo?.metaTitle || solution.title,
    "description": solution.seo?.metaDescription || solution.description,
    "provider": { "@type": "Organization", "name": "Arcade Skill Games" },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Skill Game Solutions",
      "itemListElement": recommendedProducts.map(prod => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Product", "name": prod.name }
      }))
    }
  };

  return (
    <div className="bg-brand-900 min-h-screen animate-fade-in text-slate-200 pb-24 md:pb-0">
      <SEO 
        title={solution.seo?.metaTitle || `${solution.title} | ${t(currentLang, 'hero.title')}`}
        description={solution.seo?.metaDescription || solution.description}
        keywords={solution.seo?.keywords?.join(', ')}
        schema={solutionSchema}
      />

      {/* 1. Hero Section */}
      <div className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-brand-900">
           <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/60 to-transparent z-10"></div>
           <img 
             src={`https://picsum.photos/1920/1080?seed=${solution.id}`} 
             alt={solution.title} 
             className="w-full h-full object-cover opacity-20 transform scale-105" 
           />
        </div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-500/20 text-brand-400 text-sm font-bold tracking-widest mb-6 uppercase border border-brand-500/30">
            <ShieldCheck className="h-4 w-4" /> {solution.targetAudience}
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tight uppercase">
            {solution.title}
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12 italic">
            {solution.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={triggerLeadForm}
              className="bg-brand-500 text-white hover:bg-brand-600 font-extrabold px-10 py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-500/30 group uppercase tracking-widest"
            >
              {solution.ctaText || "Request Factory Pricing"} 
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#guide" className="bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white hover:bg-slate-700 font-bold px-10 py-5 rounded-2xl transition-all uppercase tracking-widest text-sm flex items-center">
              Strategy Roadmap
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-32">
            
            {/* 2. Pain Points */}
            <section>
              <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase italic">{t(currentLang, 'tank.pain.title')}</h2>
              <p className="text-slate-400 mb-12 text-xl max-w-2xl leading-relaxed">{t(currentLang, 'tank.pain.subtitle')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solution.painPoints?.map((pain, idx) => {
                  const Icon = IconMap[pain.icon] || AlertTriangle;
                  return (
                    <div key={idx} className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 flex flex-col gap-6 hover:border-brand-500/30 transition-all group">
                      <div className="bg-red-500/10 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{pain.title}</h3>
                        <p className="text-slate-400 leading-relaxed italic">"{pain.description}"</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 3. 28-Year Source Developer Section */}
            <section className="bg-slate-950 rounded-[40px] p-10 md:p-16 border border-brand-500/20 relative overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 blur-[120px] rounded-full"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-[10px] font-black mb-6 border border-brand-500/30 uppercase tracking-[0.2em]">
                    Source Developer Power
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight uppercase italic">
                    28 Years of Engineering Excellence
                  </h2>
                  <p className="text-slate-300 text-lg leading-loose mb-10">
                    {solution.customizationFocus || "As a premier R&D factory, we simplify the complexity of custom gaming. From exclusive board logic to bespoke cabinet skins."}
                  </p>
                  <ul className="grid grid-cols-1 gap-5 mb-10">
                    {['Custom Logic Development', 'Private Label Cabinet Skins', 'Regional Compliance Hardware', 'Global Logistics Mixed Loading'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-slate-400 font-bold text-xs uppercase tracking-widest">
                        <div className="h-6 w-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500">
                          <Check className="h-4 w-4" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button onClick={triggerLeadForm} className="bg-white text-brand-900 hover:bg-slate-200 font-black px-10 py-5 rounded-2xl transition-all flex items-center gap-3 uppercase tracking-widest text-sm shadow-xl">
                    Inquire Custom Solution <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                <div className="bg-brand-900/50 p-6 rounded-[32px] border border-slate-800 shadow-inner">
                   <div className="aspect-square bg-slate-800 rounded-2xl flex flex-col items-center justify-center border border-slate-700 p-8 text-center group">
                      <Wrench className="h-24 w-24 text-brand-500 opacity-20 mb-6 group-hover:rotate-45 transition-transform duration-700" />
                      <h4 className="text-white font-bold text-xl mb-2">Technical Blueprinting</h4>
                      <p className="text-slate-500 text-sm">Send us your venue photos for a free layout optimization.</p>
                   </div>
                </div>
              </div>
            </section>

            {/* 4. Stats Dashboard */}
            <section className="bg-brand-800/40 rounded-3xl p-12 border border-slate-700 relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <BarChart className="h-64 w-64 text-brand-500" />
               </div>
               <h2 className="text-3xl font-black text-white mb-12 flex items-center gap-3 uppercase tracking-tighter italic">
                 <TrendingUp className="h-8 w-8 text-brand-500" /> {t(currentLang, 'tank.stats.title')}
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                 {solution.stats?.map((stat, idx) => (
                   <div key={idx} className="text-center md:text-left">
                     <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">{stat.value}</div>
                     <div className="text-brand-400 font-black uppercase text-sm tracking-widest mb-2">{stat.label}</div>
                     <div className="text-slate-400 text-base leading-relaxed italic">{stat.subtext}</div>
                   </div>
                 ))}
               </div>
            </section>

            {/* 5. Deep Dive */}
            <section className="prose prose-xl prose-invert max-w-none">
              <h2 className="text-4xl font-black text-white mb-8 leading-snug uppercase tracking-tighter italic">Comprehensive Strategy</h2>
              <div className="text-slate-300 leading-loose text-lg whitespace-pre-wrap">
                {solution.fullDescription}
              </div>
            </section>

            {/* 6. Video Section */}
            {solution.promoVideo && (
              <section className="mt-24 border-t border-slate-800 pt-24">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tighter italic">
                  <Play className="h-8 w-8 text-brand-500 fill-brand-500/20" /> 
                  Performance Showcase
                </h2>
                <div className="relative aspect-video rounded-[40px] overflow-hidden border border-slate-700 shadow-2xl bg-black group">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${solution.promoVideo.id}?rel=0&modestbranding=1`}
                    title={solution.promoVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>
            )}

            {/* 7. Comparison Table */}
            <section className="pt-24">
              <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter italic">{t(currentLang, 'tank.compare.title')}</h2>
              <div className="overflow-hidden rounded-3xl border border-slate-700 mb-8 shadow-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-800/80">
                      <th className="p-6 text-slate-400 font-bold border-b border-slate-700 uppercase text-xs tracking-widest">Key Specification</th>
                      <th className="p-6 text-brand-400 font-black border-b border-slate-700 bg-brand-500/10 w-1/3">{t(currentLang, 'tank.compare.us')}</th>
                      <th className="p-6 text-slate-500 font-medium border-b border-slate-700 w-1/3">{solution.comparison?.competitorLabel}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {solution.comparison?.rows.map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-700/30 hover:bg-brand-800/30 transition-colors">
                        <td className="p-6 text-white font-bold">{row.feature}</td>
                        <td className="p-6 text-white bg-brand-500/5 border-l border-r border-slate-700/50 font-medium text-sm">
                           <div className="flex items-center gap-3">
                             <Check className="h-5 w-5 text-emerald-400" /> {row.us}
                           </div>
                        </td>
                        <td className="p-6 text-slate-500 italic text-sm">
                          <div className="flex items-center gap-3">
                             <X className="h-5 w-5 text-red-900/50" /> {row.them}
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end">
                <button onClick={triggerLeadForm} className="flex items-center gap-2 text-brand-400 font-black uppercase tracking-widest text-xs hover:text-white transition-colors group">
                  <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform" /> 
                  Download Full Technical Specifications
                </button>
              </div>
            </section>

            {/* 8. Venue Gallery */}
            {solution.venueGallery && (
              <section className="mt-32 border-t border-slate-800 pt-24">
                <h2 className="text-4xl font-black text-white mb-12 uppercase tracking-tighter italic flex items-center gap-3">
                  <ImageIcon className="h-8 w-8 text-brand-500" /> Success Environments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {solution.venueGallery.map((img, idx) => (
                    <div key={idx} className="group relative h-72 rounded-[32px] overflow-hidden border border-slate-800 shadow-2xl transition-all hover:border-brand-500/50">
                      <img 
                        src={img} 
                        alt="Success deployment" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 9. Recommended Products */}
            <section className="mt-32">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter italic">Recommended Hardware</h2>
                  <p className="text-slate-400">Optimized for high-yield scalability.</p>
                </div>
                <Link to={`/${currentLang}/products`} className="text-brand-400 font-bold hover:underline uppercase text-xs tracking-widest">Full Catalog</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="bg-slate-800/40 border border-slate-700 rounded-3xl overflow-hidden flex flex-col group hover:border-brand-500 transition-all shadow-lg hover:-translate-y-2">
                    <div className="h-72 overflow-hidden bg-black relative">
                      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                       <h4 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">{product.name}</h4>
                       <p className="text-slate-400 text-base mb-6 line-clamp-2 leading-relaxed italic">{product.description}</p>
                       <button onClick={triggerLeadForm} className="w-full bg-slate-700 hover:bg-brand-500 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all mt-auto flex items-center justify-center gap-2">
                         Request Wholesale Pricing <ArrowRight className="h-4 w-4" />
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 space-y-10">
              
              <div className="bg-slate-900 border border-brand-500/50 rounded-[40px] p-10 shadow-3xl hover:scale-105 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-brand-500 rounded-2xl">
                     <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">Factory Inquiry</h3>
                </div>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed italic">
                  Partner directly with the original source factory.
                </p>
                <ul className="space-y-5 mb-10">
                  {['Tier-1 Wholesale Pricing', '1-Year Factory Warranty', 'Master Tech Training Support'].map((txt) => (
                    <li key={txt} className="flex items-center gap-3 text-xs text-slate-300 font-bold uppercase tracking-widest">
                      <ShieldCheck className="h-5 w-5 text-brand-500" /> {txt}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={triggerLeadForm}
                  className="block w-full bg-brand-500 hover:bg-brand-600 text-white text-center font-black py-5 rounded-2xl transition-all shadow-2xl shadow-brand-500/40 text-sm uppercase tracking-widest group"
                >
                  Download Price List <Download className="ml-2 h-5 w-5 inline group-hover:translate-y-1 transition-transform" />
                </button>
              </div>

              <div className="p-10 bg-slate-800/40 rounded-[32px] border border-slate-700/50 shadow-xl">
                <h4 className="text-white font-black mb-4 uppercase tracking-tighter text-xl italic">Direct Line</h4>
                <div className="text-brand-400 font-black text-2xl flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
                  <Phone className="h-6 w-6" /> +1 (800) 555-0199
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* MOBILE STICKY FOOTER */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-900 border-t border-brand-500/50 p-6 z-50 lg:hidden flex gap-4 backdrop-blur-xl bg-brand-900/90">
         <a href="tel:+18005550199" className="flex-1 bg-slate-800 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 border border-slate-600 active:scale-95 transition-all text-xs uppercase tracking-widest">
            <Phone className="h-5 w-5 text-brand-400" /> Call
         </a>
         <button 
           onClick={triggerLeadForm}
           className="flex-[2] bg-brand-500 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 shadow-2xl active:scale-95 transition-all text-xs uppercase tracking-widest"
          >
            <Download className="h-5 w-5" /> Get Pricing
         </button>
      </div>

      {/* --- 注意：这里不再单独挂载 LeadForm，统一使用 Layout.tsx 里的全局实例 --- */}
    </div>
  );
};

export default SolutionDetail;
