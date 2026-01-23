import React, { useState } from 'react'; // ✅ 引入 useState
import { useParams, Link, Navigate } from 'react-router-dom';
import { getSolutions, getProducts } from '../data';
import { 
  Check, ArrowRight, HelpCircle, Quote, BarChart, ChevronDown, ChevronUp, 
  AlertTriangle, ShieldCheck, TrendingUp, X, Lock, Maximize, Minimize, 
  Coins, Clock, Users, Palette, Smartphone, Eye, Battery, Copy, 
  Moon, LayoutGrid, User, Wrench, DollarSign, ShieldAlert, TrendingDown, 
  Phone, Mail, MessageCircle, FileText, Download 
} from 'lucide-react';
import { LanguageCode } from '../types';
import { DEFAULT_LANG, t } from '../utils/i18n';
import { SEO } from '../components/SEO';
import { LeadForm } from '../components/LeadForm'; // ✅ 确保你已经创建了该组件

// Helper to map icon string to Component
const IconMap: Record<string, React.FC<any>> = {
  AlertTriangle, ShieldCheck, TrendingUp, X, Lock, Maximize, Minimize, 
  Coins, Clock, Users, Palette, Smartphone, Eye, Battery, Copy, 
  Sleep: Moon, LayoutGrid, User, Wrench, DollarSign, ShieldAlert, TrendingDown
};

const SolutionDetail: React.FC = () => {
  const { lang, id } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false); // ✅ 控制弹窗逻辑

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

  // ✅ 统一交互处理函数
  const triggerLeadForm = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsLeadFormOpen(true);
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

      {/* 1. Hero Section (AIDA: Attention) */}
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
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tight">
            {solution.title}
          </h1>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            {solution.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* ✅ 交互点：主按钮触发弹窗 */}
            <button 
              onClick={triggerLeadForm}
              className="bg-brand-500 text-white hover:bg-brand-600 font-extrabold px-10 py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-500/30 group"
            >
              {solution.ctaText || t(currentLang, 'tank.cta.sticky')} 
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#guide" className="bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white hover:bg-slate-700 font-bold px-10 py-5 rounded-2xl transition-all">
              Strategy Roadmap
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-8 space-y-32">
            
            {/* 2. Pain Points (AIDA: Interest) */}
            <section>
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">{t(currentLang, 'tank.pain.title')}</h2>
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

            {/* 3. 28-Year Source Developer Section (AIDA: Desire - EEAT) */}
            <section className="bg-slate-950 rounded-[40px] p-10 md:p-16 border border-brand-500/20 relative overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 blur-[120px] rounded-full"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-[10px] font-black mb-6 border border-brand-500/30 uppercase tracking-[0.2em]">
                    Source Developer Power
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                    28 Years of Custom Engineering Excellence
                  </h2>
                  <p className="text-slate-300 text-lg leading-loose mb-10">
                    {(solution as any).customizationFocus || "As a premier R&D factory, we simplify the complexity of custom gaming. From exclusive board logic to bespoke cabinet skins, our 28-year team builds the exact technical tools your specific market demands."}
                  </p>
                  <ul className="grid grid-cols-1 gap-5 mb-10">
                    {['Custom Logic Development', 'Private Label Cabinet Skins', 'Regional Compliance Hardware', 'Global Logistics Mixed Loading'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-slate-400 font-medium">
                        <div className="h-6 w-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-500">
                          <Check className="h-4 w-4" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button onClick={triggerLeadForm} className="bg-white text-brand-900 hover:bg-slate-200 font-black px-10 py-5 rounded-2xl transition-all flex items-center gap-3">
                    Inquire Custom Solution <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                <div className="bg-brand-900/50 p-6 rounded-[32px] border border-slate-800 shadow-inner">
                   <div className="aspect-square bg-slate-800 rounded-2xl flex flex-col items-center justify-center border border-slate-700 p-8 text-center group">
                      <Wrench className="h-24 w-24 text-brand-500 opacity-20 mb-6 group-hover:rotate-45 transition-transform duration-700" />
                      <h4 className="text-white font-bold text-xl mb-2">Technical Blueprinting</h4>
                      <p className="text-slate-500 text-sm">Send us your CAD files or venue photos for a free layout optimization.</p>
                   </div>
                </div>
              </div>
            </section>

            {/* 4. Stats Dashboard (AIDA: Desire) */}
            <section className="bg-brand-800/40 rounded-3xl p-12 border border-slate-700 relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <BarChart className="h-64 w-64 text-brand-500" />
               </div>
               <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                 <TrendingUp className="h-8 w-8 text-brand-500" /> {t(currentLang, 'tank.stats.title')}
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                 {solution.stats?.map((stat, idx) => (
                   <div key={idx} className="text-center md:text-left">
                     <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">{stat.value}</div>
                     <div className="text-brand-400 font-black uppercase text-sm tracking-widest mb-2">{stat.label}</div>
                     <div className="text-slate-400 text-base leading-relaxed">{stat.subtext}</div>
                   </div>
                 ))}
               </div>
            </section>

            {/* 5. Deep Dive (EEAT Content) */}
            <section className="prose prose-xl prose-invert max-w-none">
              <h2 className="text-4xl font-extrabold text-white mb-8 leading-snug">Comprehensive Strategy for {solution.title}</h2>
              <div className="text-slate-300 leading-loose text-lg whitespace-pre-wrap">
                {solution.fullDescription}
              </div>
            </section>

            {/* 6. Comparison Table (Interactive) */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">{t(currentLang, 'tank.compare.title')}</h2>
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
                        <td className="p-6 text-white bg-brand-500/5 border-l border-r border-slate-700/50 font-medium">
                           <div className="flex items-center gap-3">
                             <Check className="h-5 w-5 text-emerald-400" /> {row.us}
                           </div>
                        </td>
                        <td className="p-6 text-slate-500 italic">
                          <div className="flex items-center gap-3">
                             <X className="h-5 w-5 text-red-900/50" /> {row.them}
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* ✅ 交互点：下载详细参数触发弹窗 */}
              <div className="flex justify-end">
                <button onClick={triggerLeadForm} className="flex items-center gap-2 text-brand-400 font-bold hover:text-white transition-colors group">
                  <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform" /> 
                  Download Technical Specification (PDF)
                </button>
              </div>
            </section>

            {/* 7. Recommended Products (Cross-sell) */}
            <section className="mt-32">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">Recommended Hardware</h2>
                  <p className="text-slate-400">Optimized for high-yield {solution.id} locations.</p>
                </div>
                <Link to={`/${currentLang}/products`} className="text-brand-400 font-bold hover:underline">View Full Catalog</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="bg-slate-800/40 border border-slate-700 rounded-3xl overflow-hidden flex flex-col group hover:border-brand-500 transition-all shadow-lg hover:-translate-y-2">
                    <div className="h-72 overflow-hidden bg-black relative">
                      <div className="absolute top-4 right-4 bg-brand-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full z-10 uppercase tracking-widest shadow-xl">Best ROI</div>
                      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                       <h4 className="text-2xl font-bold text-white mb-3">{product.name}</h4>
                       <p className="text-slate-400 text-base mb-6 line-clamp-2 leading-relaxed">{product.description}</p>
                       <ul className="mb-8 space-y-3">
                          {product.features.slice(0,3).map((f, i) => (
                            <li key={i} className="text-sm text-slate-500 flex items-center gap-2 font-medium">
                              <Check className="h-4 w-4 text-brand-500"/> {f}
                            </li>
                          ))}
                       </ul>
                       <button onClick={triggerLeadForm} className="w-full bg-slate-700 hover:bg-brand-500 text-white py-4 rounded-xl font-bold transition-all mt-auto flex items-center justify-center gap-2">
                         Request Pricing <ArrowRight className="h-4 w-4" />
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Buyer's Guide (AIDA: Interest - Timeline) */}
            <section id="guide" className="pt-24 border-t border-slate-800">
              <h2 className="text-4xl font-bold text-white mb-12">{t(currentLang, 'tank.guide.title')}</h2>
              <div className="relative border-l-4 border-brand-500/20 ml-6 space-y-16">
                {solution.buyersGuide?.map((step, idx) => (
                  <div key={idx} className="relative pl-12 group">
                    <div className="absolute -left-[14px] top-0 h-6 w-6 rounded-full bg-brand-500 border-4 border-brand-900 group-hover:scale-125 transition-transform shadow-lg shadow-brand-500/50"></div>
                    <h3 className="text-2xl font-bold text-white mb-4">Step {idx + 1}: {step.title}</h3>
                    <p className="text-slate-400 text-lg leading-loose italic">"{step.description}"</p>
                  </div>
                ))}
                {/* ✅ 交互点：最后一步触发弹窗 */}
                <div className="relative pl-12">
                   <div className="absolute -left-[14px] top-0 h-6 w-6 rounded-full bg-brand-400 border-4 border-brand-900 animate-pulse"></div>
                   <h3 className="text-2xl font-bold text-brand-400 mb-6">Final Step: Secure Your Order</h3>
                   <button onClick={triggerLeadForm} className="inline-flex items-center gap-3 px-8 py-4 bg-brand-500/10 border border-brand-500 text-brand-400 rounded-2xl hover:bg-brand-500 hover:text-white transition-all font-black uppercase text-sm tracking-widest shadow-xl">
                      Request Full PDF Roadmap <Download className="h-5 w-5" />
                   </button>
                </div>
              </div>
            </section>

            {/* 9. FAQ (AIDA: Logic) */}
            <section className="pt-24 border-t border-slate-800">
              <h2 className="text-4xl font-bold text-white mb-12">{t(currentLang, 'tank.faq.title')}</h2>
              <div className="space-y-6">
                {solution.faqs?.map((faq, idx) => (
                  <div key={idx} className="border border-slate-700/50 rounded-2xl bg-slate-800/30 overflow-hidden hover:border-brand-500/30 transition-all">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center p-8 text-left hover:bg-slate-700/30 transition-colors"
                    >
                      <span className="text-lg font-bold text-white max-w-[90%]">{faq.question}</span>
                      {openFaq === idx ? <ChevronUp className="h-6 w-6 text-brand-400" /> : <ChevronDown className="h-6 w-6 text-slate-500" />}
                    </button>
                    {openFaq === idx && (
                      <div className="p-8 pt-0 text-slate-400 text-lg leading-loose border-t border-slate-700/50 bg-brand-900/20 animate-in slide-in-from-top-2 duration-300">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 10. Testimonials & Reviews (AIDA: Desire) */}
            <section className="pt-24 border-t border-slate-800">
               <h2 className="text-4xl font-bold text-white mb-12">{t(currentLang, 'tank.testi.title')}</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {solution.testimonials?.map((testi, idx) => (
                   <div key={idx} className="bg-brand-800/40 p-10 rounded-[32px] border border-slate-700 relative group">
                     <Quote className="h-12 w-12 text-brand-500/10 absolute top-8 right-8 group-hover:scale-110 transition-transform" />
                     <p className="text-slate-300 italic text-xl leading-relaxed mb-8 font-light">"{testi.quote}"</p>
                     <div className="flex items-center gap-4">
                       <div className="h-12 w-12 rounded-2xl bg-brand-500 flex items-center justify-center font-black text-white shadow-lg shadow-brand-500/20">
                         {testi.author[0]}
                       </div>
                       <div>
                         <div className="text-white font-black text-base">{testi.author}</div>
                         <div className="text-brand-400 text-xs font-bold uppercase tracking-widest">{testi.role}, {testi.location}</div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </section>

          </div>

          {/* RIGHT SIDEBAR (Sticky - Desktop Only) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 space-y-10">
              
              {/* Main CTA Card (AIDA: Action) */}
              <div className="bg-slate-900 border border-brand-500/50 rounded-[40px] p-10 shadow-[0_30px_60px_-12px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-brand-500 rounded-2xl shadow-xl shadow-brand-500/20">
                     <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tight">Project Inquiry</h3>
                </div>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Ready to optimize your revenue? Get a custom quote specifically tailored for <strong>{solution.id}</strong> scalability.
                </p>
                <ul className="space-y-5 mb-10">
                  {['Tier-1 Wholesale Pricing', '1-Year Factory Warranty', 'Master Tech Training Support'].map((txt) => (
                    <li key={txt} className="flex items-center gap-3 text-sm text-slate-300 font-bold uppercase tracking-wide">
                      <ShieldCheck className="h-5 w-5 text-brand-500" /> {txt}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={triggerLeadForm}
                  className="block w-full bg-brand-500 hover:bg-brand-600 text-white text-center font-black py-5 rounded-2xl transition-all shadow-2xl shadow-brand-500/40 text-lg group"
                >
                  Download Price List <Download className="ml-2 h-5 w-5 inline group-hover:translate-y-1 transition-transform" />
                </button>
                <div className="text-center mt-6">
                  <span className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-black">Official Factory Direct</span>
                </div>
              </div>

              {/* Contact Mini */}
              <div className="p-10 bg-slate-800/40 rounded-[32px] border border-slate-700/50 shadow-xl">
                <h4 className="text-white font-black mb-4 uppercase tracking-tighter text-xl">Direct Line</h4>
                <p className="text-slate-400 text-base mb-8 leading-relaxed">
                  Speak directly with an R&D engineer specializing in {solution.id} hardware.
                </p>
                <div className="text-brand-400 font-black text-2xl flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
                  <Phone className="h-6 w-6" /> +1 (800) 555-0199
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* MOBILE STICKY FOOTER CTA (Action) */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-900 border-t border-brand-500/50 p-6 z-50 lg:hidden flex gap-4 animate-slide-up shadow-[0_-10px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl bg-brand-900/90">
         <a href="tel:+18005550199" className="flex-1 bg-slate-800 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 border border-slate-600 active:scale-95 transition-all">
            <Phone className="h-5 w-5 text-brand-400" /> Call
         </a>
         <button 
           onClick={triggerLeadForm}
           className="flex-[2] bg-brand-500 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-95 transition-all"
          >
            <Download className="h-5 w-5" /> Get Pricing
         </button>
      </div>

      {/* ✅ 全局弹窗拦截器 */}
      {isLeadFormOpen && (
        <LeadForm 
          onClose={() => setIsLeadFormOpen(false)} 
          targetSector={id || 'Distributor'} 
        />
      )}

    </div>
  );
};

export default SolutionDetail;
