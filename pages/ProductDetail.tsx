import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getProducts } from '../data';
import { 
  Check, ShieldAlert, Monitor, Zap, Download, ChevronRight, 
  Play, Star, BookOpen, PenTool, LayoutGrid, MessageSquare, Phone
} from 'lucide-react';
import { LanguageCode } from '../types';
import { DEFAULT_LANG } from '../utils/i18n';
import Seo from '../components/SEO';

const ProductDetail: React.FC = () => {
  const { lang, id } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  
  // 表单状态
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const products = getProducts(currentLang);
  const product = products.find(p => p.id === id);

  if (!product) {
    return <Navigate to={`/${currentLang}/products`} replace />;
  }

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

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", formData);
    alert(`Thank you ${formData.name}! Your inquiry for ${product.name} has been sent. We will contact you at ${formData.email} or ${formData.phone} shortly.`);
    setShowForm(false);
  };

  const openForm = () => setShowForm(true);

  return (
    <div className="bg-brand-900 min-h-screen text-slate-200 font-sans">
      <Seo 
        title={tankPage.seo.metaTitle}
        description={tankPage.seo.metaDescription}
        keywords={tankPage.seo.keywords}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-400/20 bg-brand-500/10 text-brand-400 text-sm font-bold mb-8">
              <span className="mr-2 text-yellow-400">★★★★★</span> OEM Direct Manufacturer
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
              {tankPage.headline}
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed border-l-4 border-brand-500 pl-6">
              {tankPage.subHeadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={openForm} className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center group">
                {tankPage.ctaText} <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={openForm} className="bg-brand-900 border border-slate-600 hover:border-brand-400 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center hover:bg-brand-800">
                <Download className="mr-2 h-5 w-5 text-slate-400" /> Get Full Spec PDF
              </button>
            </div>
          </div>
          <div className="relative">
             <img src={product.imageUrl} alt={product.name} className="relative rounded-2xl shadow-2xl border border-slate-700/50 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built to Solve Operator Problems</h2>
            <p className="text-lg text-slate-400">We don't just build boxes; we build revenue-generating assets. Here is how we tackle your biggest route challenges.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tankPage.painPoints.map((point, idx) => {
              const Icon = iconMap[point.icon] || ShieldAlert;
              return (
                <div key={idx} className="bg-brand-900/50 p-8 rounded-2xl border border-slate-800 hover:border-brand-500/50 transition-all">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-brand-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SPECS & COMPARISON */}
      <section className="py-24 bg-brand-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-white mb-8">Technical Specifications</h2>
            <div className="bg-slate-950/50 rounded-2xl border border-slate-800 overflow-hidden">
              {tankPage.technicalSpecs.map((spec, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center py-5 px-6 border-b border-slate-800 last:border-0">
                  <span className="w-40 text-slate-400 text-sm font-semibold uppercase tracking-wider">{spec.label}</span>
                  <span className="text-white font-medium text-lg mt-1 sm:mt-0">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Titan vs. Generic Imports</h3>
                <div className="space-y-6 mb-8">
                  {tankPage.comparison.rows.map((row, idx) => (
                    <div key={idx} className="pb-6 border-b border-slate-700 last:border-0 last:pb-0">
                      <div className="text-slate-400 text-sm mb-2 uppercase tracking-wide font-bold text-center">{row.feature}</div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-brand-500/10 rounded-lg p-3 border border-brand-500/30">
                           <div className="text-brand-400 font-bold text-lg mb-1">Titan</div>
                           <div className="text-white text-sm">{row.us}</div>
                        </div>
                        <div className="bg-red-500/5 rounded-lg p-3 border border-red-500/10 opacity-70">
                           <div className="text-slate-500 font-bold text-lg mb-1">Other</div>
                           <div className="text-slate-400 text-sm">{row.them}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={openForm} className="w-full bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg">
                  Inquire for Wholesale Price
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ & BUYER'S GUIDE */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
           <div className="mb-20">
             <div className="text-center mb-12">
               <BookOpen className="w-12 h-12 text-brand-500 mx-auto mb-4" />
               <h2 className="text-3xl font-bold text-white mb-4">Operator's Buying Guide</h2>
               <p className="text-slate-400">Maximize your ROI with these deployment tips.</p>
             </div>
             <div className="space-y-6">
               {tankPage.buyerGuide.map((step, idx) => (
                 <div key={idx} className="flex gap-6">
                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-900 border border-brand-500 text-brand-400 flex items-center justify-center font-bold text-xl">{idx + 1}</div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                     <p className="text-slate-400 leading-relaxed">{step.content}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
           <div className="h-px bg-slate-800 my-16"></div>
           <div>
             <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
             <div className="grid gap-6">
               {tankPage.faqs.map((faq, idx) => (
                 <div key={idx} className="bg-brand-900 border border-slate-800 rounded-xl p-6 hover:border-brand-400 transition-colors group">
                   <h4 className="text-lg font-bold text-white mb-3 flex items-start">
                     <span className="text-brand-500 mr-2">Q:</span> {faq.question}
                   </h4>
                   <p className="text-slate-400 pl-6 leading-relaxed border-l-2 border-slate-700 group-hover:border-brand-500 transition-colors">
                     {faq.answer}
                   </p>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* 5. CTA FOOTER */}
      <section className="py-20 bg-brand-600 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Route?</h2>
        <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">Our factory is ready to support your expansion. Order direct and save on middleman markups.</p>
        <button onClick={openForm} className="bg-white text-brand-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl">
          Order Direct Now
        </button>
      </section>

      {/* 询盘表单 (Modal) */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-brand-900 border border-slate-700 p-8 rounded-3xl max-w-lg w-full shadow-2xl relative overflow-y-auto max-h-[90vh]">
            <button onClick={() => setShowForm(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors text-2xl">✕</button>
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Inquiry for {product.name}</h3>
                <p className="text-slate-400 text-sm">Please fill out the form below and our B2B sales team will get back to you within 12 hours.</p>
            </div>
            
            <form onSubmit={handleInquiry} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center"><Star className="w-3 h-3 text-red-500 mr-1" /> Your Name</label>
                    <input 
                    type="text" required 
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all" 
                    placeholder="Full Name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center"><Star className="w-3 h-3 text-red-500 mr-1" /> Email Address</label>
                    <input 
                    type="email" required 
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all" 
                    placeholder="name@company.com"
                    />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center"><Star className="w-3 h-3 text-red-500 mr-1" /> Whatsapp / Phone</label>
                <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                    type="text" required 
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all" 
                    placeholder="+1 (555) 000-0000"
                    />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center"><MessageSquare className="w-3 h-3 mr-1" /> Message (Optional)</label>
                <textarea 
                  rows={4}
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none" 
                  placeholder="Tell us about your location or quantity needs..."
                />
              </div>

              <button type="submit" className="w-full bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                Submit Inquiry Now
              </button>
              
              <p className="text-center text-xs text-slate-500 mt-4">By submitting, you agree to receive B2B sales communications regarding this equipment.</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
