import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getProducts } from '../data';
import { Check, ShieldAlert, Monitor, Zap, Download, ArrowRight, ChevronRight } from 'lucide-react';
import { LanguageCode } from '../types';
import { DEFAULT_LANG } from '../utils/i18n';
import Seo from '../components/Seo'; // 确保你有这个组件，或者用 Helmet

const ProductDetail: React.FC = () => {
  const { lang, id } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  
  // 1. 找到对应产品
  const products = getProducts(currentLang);
  const product = products.find(p => p.id === id);

  // 找不到产品就跳回列表
  if (!product) {
    return <Navigate to={`/${currentLang}/products`} replace />;
  }

  // 如果没有 tankPage 数据，说明是普通产品，暂时显示简单版
  if (!product.tankPage) {
     return (
       <div className="pt-24 px-8 text-white min-h-screen bg-brand-900">
         <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
         <p className="text-gray-400 mb-8">{product.description}</p>
         <Link to={`/${currentLang}/products`} className="text-brand-400 hover:underline">← Back to Products</Link>
       </div>
     );
  }

  const { tankPage } = product;

  // 动态图标映射
  const iconMap: any = { ShieldAlert, Monitor, Zap };

  return (
    <div className="bg-brand-900 min-h-screen text-slate-200">
      <Seo 
        title={tankPage.seo.metaTitle}
        description={tankPage.seo.metaDescription}
        keywords={tankPage.seo.keywords}
      />

      {/* 1. Hero Section (AIDA: Attention) */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-brand-900">
           <div className="absolute inset-0 bg-gradient-to-b from-brand-900 via-brand-800/50 to-brand-900"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-semibold mb-6">
              <span className="mr-2">★</span> Factory Direct OEM
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              {tankPage.headline}
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              {tankPage.subHeadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-brand-500/25 flex items-center">
                {tankPage.ctaText} <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              {tankPage.pdfUrl && (
                <a href={tankPage.pdfUrl} target="_blank" rel="noreferrer" className="bg-brand-800 hover:bg-brand-700 text-white border border-slate-600 px-8 py-4 rounded-lg font-semibold transition-all flex items-center">
                  <Download className="mr-2 h-5 w-5" /> Download Specs
                </a>
              )}
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-brand-500/20 blur-3xl rounded-full"></div>
             <img src={product.imageUrl} alt={product.name} className="relative rounded-2xl shadow-2xl border border-slate-700 w-full object-cover transform hover:scale-[1.02] transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* 2. Pain Points (AIDA: Interest) */}
      <section className="py-20 bg-brand-950 border-y border-brand-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Operators Switch to Us</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Stop losing money on cheap imports. We solve the hardware problems that kill your route's profitability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tankPage.painPoints.map((point, idx) => {
              const Icon = iconMap[point.icon] || ShieldAlert;
              return (
                <div key={idx} className="bg-brand-900 p-8 rounded-xl border border-slate-800 hover:border-brand-500/50 transition-colors">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Specs & Comparison (AIDA: Desire) */}
      <section className="py-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Specs */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Technical Specifications</h2>
          <div className="space-y-4">
            {tankPage.technicalSpecs.map((spec, idx) => (
              <div key={idx} className="flex justify-between items-center py-4 border-b border-slate-800">
                <span className="text-slate-400">{spec.label}</span>
                <span className="text-white font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Comparison Table */}
        <div className="bg-brand-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6">Us vs. {tankPage.comparison.competitorLabel}</h3>
          <div className="space-y-6">
            {tankPage.comparison.rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-4 text-sm items-center">
                <div className="text-slate-400 font-medium">{row.feature}</div>
                <div className="text-brand-400 font-bold flex items-center"><Check className="h-4 w-4 mr-1" /> {row.us}</div>
                <div className="text-slate-500 decoration-slate-600">{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ & Buyer Guide (Trust) */}
      <section className="py-20 bg-brand-800/30">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl font-bold text-white mb-12 text-center">Buyer's Guide & FAQ</h2>
           <div className="space-y-6">
             {tankPage.faqs.map((faq, idx) => (
               <div key={idx} className="bg-brand-900 border border-slate-700 rounded-lg p-6">
                 <h4 className="text-lg font-bold text-white mb-2">Q: {faq.question}</h4>
                 <p className="text-slate-400">A: {faq.answer}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;
