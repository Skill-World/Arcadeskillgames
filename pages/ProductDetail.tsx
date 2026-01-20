import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getProducts } from '../data';
import { 
  Check, ShieldAlert, Monitor, Zap, Download, ChevronRight, 
  Play, Star, BookOpen, PenTool, LayoutGrid 
} from 'lucide-react';
import { LanguageCode } from '../types';
import { DEFAULT_LANG } from '../utils/i18n';
import Seo from '../components/Seo';

const ProductDetail: React.FC = () => {
  const { lang, id } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(false);

  const products = getProducts(currentLang);
  const product = products.find(p => p.id === id);

  if (!product) {
    return <Navigate to={`/${currentLang}/products`} replace />;
  }

  // 简单的后备页面（针对没有坦克页数据的产品）
  if (!product.tankPage) {
     return (
       <div className="pt-32 px-8 text-white min-h-screen bg-brand-900">
         <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
            <p className="text-xl text-slate-400 mb-8">{product.description}</p>
            <Link to={`/${currentLang}/products`} className="text-brand-400 hover:underline">← Back to Products</Link>
         </div>
       </div>
     );
  }

  const { tankPage } = product;
  const iconMap: any = { ShieldAlert, Monitor, Zap, PenTool, LayoutGrid };

  // 模拟表单提交
  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Spec sheet sent to ${email}!`);
    setShowForm(false);
  };

  return (
    <div className="bg-brand-900 min-h-screen text-slate-200 font-sans">
      <Seo 
        title={tankPage.seo.metaTitle}
        description={tankPage.seo.metaDescription}
        keywords={tankPage.seo.keywords}
      />

      {/* 1. HERO SECTION: 视觉冲击与核心价值 */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* 背景光效 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-400/20 bg-brand-500/10 text-brand-400 text-sm font-bold mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <span className="mr-2 text-yellow-400">★★★★★</span> #1 Rated for Route Operators
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
              {tankPage.headline}
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed border-l-4 border-brand-500 pl-6">
              {tankPage.subHeadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => window.scrollTo({ top: 2000, behavior: 'smooth' })} className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-brand-500/30 flex items-center justify-center group">
                {tankPage.ctaText} <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button onClick={() => setShowForm(true)} className="bg-brand-900 border border-slate-600 hover:border-brand-400 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center hover:bg-brand-800">
                <Download className="mr-2 h-5 w-5 text-slate-400" /> Download Specs PDF
              </button>
            </div>

            {/* 信任标识 */}
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> 1-Year Warranty</div>
              <div className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> USA Tech Support</div>
              <div className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" /> Fast Shipping</div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group perspective-1000">
             <div className="absolute inset-0 bg-brand-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
             {/* 产品主图 - 增加浮动动画 */}
             <img 
               src={product.imageUrl} 
               alt={product.name} 
               className="relative rounded-2xl shadow-2xl border border-slate-700/50 w-full object-cover transform transition-transform duration-700 hover:rotate-y-6 hover:scale-[1.02]" 
             />
             {/* 视频播放按钮占位符 */}
             <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 cursor-pointer hover:bg-brand-900/90 transition-colors">
                <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center pl-1">
                  <Play className="h-6 w-6 text-white fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Watch Video</div>
                  <div className="text-white font-bold">See It In Action</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS: 深入痛点分析 */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Conventional Cabinets Fail</h2>
            <p className="text-lg text-slate-400">Stop losing money on cheap imports. We solved the 3 biggest hardware problems that kill your route's profitability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tankPage.painPoints.map((point, idx) => {
              const Icon = iconMap[point.icon] || ShieldAlert;
              return (
                <div key={idx} className="bg-brand-900/50 p-8 rounded-2xl border border-slate-800 hover:border-red-500/50 hover:bg-brand-900 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                    <Icon className="h-7 w-7 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">{point.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DEEP DIVE: 深度解析与对比 */}
      <section className="py-24 bg-brand-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 左侧：详细参数列表 */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-white mb-8">Industrial Grade Engineering</h2>
            <div className="bg-slate-950/50 rounded-2xl border border-slate-800 overflow-hidden">
              {tankPage.technicalSpecs.map((spec, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center py-5 px-6 border-b border-slate-800 last:border-0 hover:bg-brand-800/20 transition-colors">
                  <span className="w-40 text-slate-400 text-sm font-semibold uppercase tracking-wider">{spec.label}</span>
                  <span className="text-white font-medium text-lg mt-1 sm:mt-0">{spec.value}</span>
                </div>
              ))}
            </div>
            
            {/* 案例研究卡片 */}
            {tankPage.caseStudy && (
              <div className="mt-12 bg-gradient-to-br from-brand-900 to-slate-900 p-8 rounded-2xl border border-brand-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <Star className="w-32 h-32 text-white fill-current" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">"{tankPage.caseStudy.title}"</h3>
                  <p className="text-slate-300 italic text-lg mb-6 leading-relaxed">
                    {tankPage.caseStudy.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center font-bold text-white">
                      {tankPage.caseStudy.author[0]}
                    </div>
                    <div>
                      <div className="text-white font-bold">{tankPage.caseStudy.author}</div>
                      <div className="text-brand-400 text-sm">Verified Operator</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* 右侧：竞品对比表 (Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl shadow-black/50">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">The Factory Difference</h3>
                <div className="space-y-6">
                  {tankPage.comparison.rows.map((row, idx) => (
                    <div key={idx} className="pb-6 border-b border-slate-700 last:border-0 last:pb-0">
                      <div className="text-slate-400 text-sm mb-2 uppercase tracking-wide font-bold text-center">{row.feature}</div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-brand-500/10 rounded-lg p-3 border border-brand-500/30">
                           <div className="text-brand-400 font-bold text-lg mb-1">Us</div>
                           <div className="text-white text-sm leading-tight">{row.us}</div>
                        </div>
                        <div className="bg-red-500/5 rounded-lg p-3 border border-red-500/10 opacity-70 grayscale">
                           <div className="text-slate-500 font-bold text-lg mb-1">Generic</div>
                           <div className="text-slate-400 text-sm leading-tight">{row.them}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={() => setShowForm(true)} className="w-full mt-8 bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-500/20">
                  Get Wholesale Price List
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BUYER'S GUIDE & FAQ: 信任与决策 */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
           
           {/* 买家指南 */}
           <div className="mb-20">
             <div className="text-center mb-12">
               <BookOpen className="w-12 h-12 text-brand-500 mx-auto mb-4" />
               <h2 className="text-3xl font-bold text-white mb-4">Operator's Buying Guide</h2>
               <p className="text-slate-400">What you need to know before deploying this cabinet.</p>
             </div>
             
             <div className="space-y-6">
               {tankPage.buyerGuide.map((step, idx) => (
                 <div key={idx} className="flex gap-6">
                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-900 border border-brand-500 text-brand-400 flex items-center justify-center font-bold text-xl">
                     {idx + 1}
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                     <p className="text-slate-400 leading-relaxed">{step.content}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="h-px bg-slate-800 my-16"></div>

           {/* FAQ */}
           <div>
             <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
             <div className="grid gap-6">
               {tankPage.faqs.map((faq, idx) => (
                 <div key={idx} className="bg-brand-900 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-colors cursor-pointer">
                   <h4 className="text-lg font-bold text-white mb-3 flex items-start">
                     <span className="text-brand-500 mr-2">Q:</span> {faq.question}
                   </h4>
                   <p className="text-slate-400 pl-6 leading-relaxed border-l-2 border-slate-700">
                     {faq.answer}
                   </p>
                 </div>
               ))}
             </div>
           </div>

        </div>
      </section>

      {/* 5. CTA Footer */}
      <section className="py-20 bg-brand-600 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Upgrade Your Route?</h2>
        <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
          In-stock and ready to ship. Secure your territory with the best hardware in the industry.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-brand-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
            Order Now
          </button>
        </div>
      </section>

      {/* 弹出式表单 (Modal) */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-brand-900 border border-slate-700 p-8 rounded-2xl max-w-md w-full shadow-2xl relative">
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
            <h3 className="text-2xl font-bold text-white mb-2">Download Spec Sheet</h3>
            <p className="text-slate-400 mb-6 text-sm">Enter your email to receive the PDF instantly.</p>
            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none" 
                  placeholder="name@company.com"
                />
              </div>
              <button type="submit" className="w-full bg-brand-500 hover:bg-brand-600 text-white py-3 rounded-lg font-bold transition-all">
                Send PDF Now
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDetail;
