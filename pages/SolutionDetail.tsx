
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getSolutions, getProducts } from '../data';
import { Check, ArrowRight, HelpCircle, Quote, BarChart, ChevronDown, ChevronUp, AlertTriangle, ShieldCheck, TrendingUp, X, Lock, Maximize, Minimize, Coins, Clock, Users, Palette, Smartphone, Eye, Battery, Copy, Moon, LayoutGrid, User, Wrench, DollarSign, ShieldAlert, TrendingDown, Phone, Mail, MessageCircle } from 'lucide-react';
import { LanguageCode } from '../types';
import { DEFAULT_LANG, t } from '../utils/i18n';
import { SEO } from '../components/SEO';

// Helper to map icon string to Component
const IconMap: Record<string, React.FC<any>> = {
  AlertTriangle, ShieldCheck, TrendingUp, X, Lock, Maximize, Minimize, Coins, Clock, Users, Palette, Smartphone, Eye, Battery, Copy, Sleep: Moon, LayoutGrid, User, Wrench, DollarSign, ShieldAlert, TrendingDown
};

const SolutionDetail: React.FC = () => {
  const { lang, id } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  
  const solutions = getSolutions(currentLang);
  const solution = solutions.find(s => s.id === id);

  // If slug doesn't exist, redirect
  if (!solution) {
    return <Navigate to={`/${currentLang}/solutions`} replace />;
  }

  // Filter products
  const allProducts = getProducts(currentLang);
  const recommendedProducts = allProducts.filter(p => p.category === solution.recommendedCategory);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Construct Rich Snippet for Service/Product
  const solutionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": solution.seo?.metaTitle || solution.title,
    "description": solution.seo?.metaDescription || solution.description,
    "provider": {
      "@type": "Organization",
      "name": "Arcade Skill Games"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Skill Game Solutions",
      "itemListElement": recommendedProducts.map(prod => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": prod.name
        }
      }))
    }
  };

  return (
    <div className="bg-brand-900 min-h-screen animate-fade-in text-slate-200 pb-24 md:pb-0">
      <SEO 
        title={solution.seo?.metaTitle || `${solution.title} | ${t(currentLang, 'hero.title')}`}
        description={solution.seo?.metaDescription || solution.description}
        keywords={solution.seo?.keywords}
        schema={solutionSchema}
      />

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-900">
           <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/80 to-transparent z-10"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-800/50 to-transparent opacity-50 z-10"></div>
           <img 
             src={`https://picsum.photos/1920/1080?seed=${solution.id}`} 
             alt={solution.title} 
             className="w-full h-full object-cover opacity-30 transform scale-105" 
           />
        </div>
        
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-500 text-white text-sm font-bold tracking-widest mb-6 uppercase shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            {solution.targetAudience}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">{solution.title}</h1>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">{solution.description}</p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
             <Link to={`/${currentLang}/contact`} className="bg-white text-brand-900 hover:bg-slate-200 font-bold px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2">
               {t(currentLang, 'tank.cta.sticky')} <ArrowRight className="h-5 w-5" />
             </Link>
             <a href="#guide" className="bg-transparent border border-slate-500 text-slate-300 hover:border-white hover:text-white font-bold px-8 py-4 rounded-full transition-colors">
               Read Buyer's Guide
             </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* 1. Pain Points (The Challenge) */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-2">{t(currentLang, 'tank.pain.title')}</h2>
              <p className="text-slate-400 mb-8 text-lg">{t(currentLang, 'tank.pain.subtitle')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solution.painPoints?.map((pain, idx) => {
                  const Icon = IconMap[pain.icon] || AlertTriangle;
                  return (
                    <div key={idx} className="bg-brand-800 p-6 rounded-xl border border-slate-700/50 flex gap-4 hover:border-brand-500/30 transition-colors">
                      <div className="bg-red-500/10 p-3 rounded-lg h-min">
                        <Icon className="h-6 w-6 text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2">{pain.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{pain.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 text-center md:text-left">
                <Link to={`/${currentLang}/contact`} className="inline-flex items-center text-brand-400 font-semibold hover:text-white transition-colors">
                  Have a specific problem? Talk to us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </section>

            {/* 2. Stats Dashboard */}
            <section className="bg-brand-800 rounded-2xl p-8 border border-slate-700 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <BarChart className="h-48 w-48 text-brand-500" />
               </div>
               <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                 <TrendingUp className="h-6 w-6 text-brand-500" /> {t(currentLang, 'tank.stats.title')}
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                 {solution.stats?.map((stat, idx) => (
                   <div key={idx} className="text-center md:text-left">
                     <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">{stat.value}</div>
                     <div className="text-brand-400 font-bold uppercase text-xs tracking-wider mb-1">{stat.label}</div>
                     <div className="text-slate-500 text-sm">{stat.subtext}</div>
                   </div>
                 ))}
               </div>
            </section>

            {/* 3. Deep Dive Content */}
            <section className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white">Why {solution.title} Choose Us</h2>
              <p className="text-slate-300 leading-loose">{solution.fullDescription}</p>
            </section>

            {/* 4. Comparison Table */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">{t(currentLang, 'tank.compare.title')}</h2>
              <div className="overflow-hidden rounded-xl border border-slate-700 mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-800">
                      <th className="p-4 text-slate-400 font-medium border-b border-slate-700">Feature</th>
                      <th className="p-4 text-brand-400 font-bold border-b border-slate-700 bg-brand-500/10 w-1/3">{t(currentLang, 'tank.compare.us')}</th>
                      <th className="p-4 text-slate-500 font-medium border-b border-slate-700 w-1/3">{solution.comparison?.competitorLabel}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {solution.comparison?.rows.map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-700/50 hover:bg-brand-800/30 transition-colors">
                        <td className="p-4 text-white font-medium">{row.feature}</td>
                        <td className="p-4 text-white bg-brand-500/5 border-l border-r border-slate-700/50">
                           <div className="flex items-center gap-2">
                             <Check className="h-4 w-4 text-green-400" /> {row.us}
                           </div>
                        </td>
                        <td className="p-4 text-slate-500">
                          <div className="flex items-center gap-2">
                             <X className="h-4 w-4 text-red-900/50" /> {row.them}
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* INTERACTION: Mid-Page CTA Breakout */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl my-4 group">
               <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-400 transition-transform duration-700 group-hover:scale-105"></div>
               <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Stop Losing Revenue Today</h3>
                     <p className="text-brand-100 font-medium text-lg">Upgrade your {solution.targetAudience} setup with factory-direct pricing.</p>
                  </div>
                  <Link to={`/${currentLang}/contact`} className="bg-white text-brand-600 hover:bg-slate-100 font-bold px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105 whitespace-nowrap flex items-center">
                     Get My Price List <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
               </div>
            </div>

            {/* 5. Recommended Products */}
            <section className="mt-24">
              <h2 className="text-3xl font-bold text-white mb-8">Recommended Hardware</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="bg-brand-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col group hover:border-brand-500 transition-all">
                    <div className="h-56 overflow-hidden bg-black relative">
                      <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 z-10">TOP PICK</div>
                      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                       <h4 className="text-xl font-bold text-white mb-2">{product.name}</h4>
                       <p className="text-slate-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                       <ul className="mb-6 space-y-1">
                          {product.features.slice(0,2).map((f, i) => (
                            <li key={i} className="text-xs text-slate-500 flex items-center gap-1"><Check className="h-3 w-3 text-brand-500"/>{f}</li>
                          ))}
                       </ul>
                       <Link to={`/${currentLang}/products`} className="w-full bg-slate-700 hover:bg-brand-500 text-white py-2 rounded text-center font-semibold transition-colors mt-auto">
                         View Details
                       </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Buyer's Guide (Timeline) */}
            <section id="guide">
              <h2 className="text-3xl font-bold text-white mb-8">{t(currentLang, 'tank.guide.title')}</h2>
              <div className="relative border-l-2 border-brand-500/30 ml-4 space-y-12">
                {solution.buyersGuide?.map((step, idx) => (
                  <div key={idx} className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-brand-500 border-4 border-brand-900 group-hover:bg-white transition-colors"></div>
                    <h3 className="text-xl font-bold text-white mb-2">Step {idx + 1}: {step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                ))}
                {/* Final Step CTA */}
                 <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-brand-400 border-4 border-brand-900 animate-pulse"></div>
                    <h3 className="text-xl font-bold text-brand-400 mb-2">Step {solution.buyersGuide.length + 1}: Contact Factory</h3>
                    <Link to={`/${currentLang}/contact`} className="inline-block mt-2 px-6 py-2 bg-brand-500/10 border border-brand-500 text-brand-400 rounded-lg hover:bg-brand-500 hover:text-white transition-colors font-semibold">
                      Initiate Order Process
                    </Link>
                  </div>
              </div>
            </section>

             {/* 7. FAQ */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8">{t(currentLang, 'tank.faq.title')}</h2>
              <div className="space-y-4">
                {solution.faqs?.map((faq, idx) => (
                  <div key={idx} className="border border-slate-700 rounded-lg bg-brand-800 overflow-hidden">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-brand-700/50 transition-colors"
                    >
                      <span className="font-semibold text-white">{faq.question}</span>
                      {openFaq === idx ? <ChevronUp className="h-5 w-5 text-brand-400" /> : <ChevronDown className="h-5 w-5 text-slate-500" />}
                    </button>
                    {openFaq === idx && (
                      <div className="p-6 pt-0 text-slate-400 border-t border-slate-700/50 bg-brand-900/30">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* FAQ Interaction */}
              <div className="mt-8 text-center p-6 bg-brand-800/50 rounded-xl border border-dashed border-slate-600">
                 <p className="text-slate-400 mb-4 font-medium">Don't see your question listed?</p>
                 <Link to={`/${currentLang}/contact`} className="inline-flex items-center text-brand-400 font-bold hover:text-white transition-colors bg-brand-900 px-6 py-2 rounded-full border border-brand-500/30">
                    <MessageCircle className="mr-2 h-4 w-4" /> Ask an Engineer Directly <ArrowRight className="ml-2 h-4 w-4" />
                 </Link>
              </div>
            </section>

             {/* 8. Testimonials */}
             <section>
               <h2 className="text-3xl font-bold text-white mb-8">{t(currentLang, 'tank.testi.title')}</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {solution.testimonials?.map((testi, idx) => (
                   <div key={idx} className="bg-brand-800 p-8 rounded-xl border border-slate-700 relative">
                     <Quote className="h-8 w-8 text-brand-500/20 absolute top-6 right-6" />
                     <p className="text-slate-300 italic mb-6">"{testi.quote}"</p>
                     <div className="flex items-center gap-3">
                       <div className="h-10 w-10 rounded-full bg-brand-500 flex items-center justify-center font-bold text-white">
                         {testi.author[0]}
                       </div>
                       <div>
                         <div className="text-white font-bold text-sm">{testi.author}</div>
                         <div className="text-brand-400 text-xs">{testi.role}, {testi.location}</div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </section>

          </div>

          {/* RIGHT SIDEBAR (Sticky - Desktop Only) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              {/* Main CTA Card */}
              <div className="bg-brand-800 border border-brand-500 rounded-2xl p-6 shadow-[0_0_30px_rgba(59,130,246,0.15)] animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-brand-500 rounded-lg">
                     <HelpCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Ready to Scale?</h3>
                </div>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Get a custom quote specifically tailored for <strong>{solution.targetAudience}</strong> needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-slate-400"><Check className="h-4 w-4 text-brand-500"/> Factory Direct Pricing</li>
                  <li className="flex items-center gap-2 text-sm text-slate-400"><Check className="h-4 w-4 text-brand-500"/> 1-Year Warranty</li>
                  <li className="flex items-center gap-2 text-sm text-slate-400"><Check className="h-4 w-4 text-brand-500"/> Tech Support Included</li>
                </ul>
                <Link 
                  to={`/${currentLang}/contact`}
                  className="block w-full bg-brand-500 hover:bg-brand-600 text-white text-center font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-500/25 mb-4 text-lg"
                >
                  {t(currentLang, 'tank.cta.sticky')}
                </Link>
                <div className="text-center">
                  <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">No Middlemen</span>
                </div>
              </div>

              {/* Contact Mini */}
              <div className="p-6 bg-brand-900/50 rounded-xl border border-slate-700">
                <h4 className="text-white font-bold mb-2">Questions?</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Speak directly with a {solution.title} specialist.
                </p>
                <div className="text-brand-400 font-bold text-lg flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +1 (800) 555-0199
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* MOBILE STICKY FOOTER CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-900 border-t border-brand-500/50 p-4 z-50 lg:hidden flex gap-4 animate-slide-up shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
         <a href="tel:+18005550199" className="flex-1 bg-slate-800 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 border border-slate-600 active:scale-95 transition-transform">
           <Phone className="h-5 w-5 text-brand-400" /> Call
         </a>
         <Link to={`/${currentLang}/contact`} className="flex-[2] bg-brand-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.4)] active:scale-95 transition-transform">
           <Mail className="h-5 w-5" /> Get Quote
         </Link>
      </div>

    </div>
  );
};

export default SolutionDetail;
