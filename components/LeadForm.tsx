import React, { useState, useEffect } from 'react';
import { X, Send, Loader2 } from 'lucide-react'; // 确保这些图标已安装

export const LeadForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- 关键：信号监听逻辑 ---
  useEffect(() => {
    // 定义收到信号后的动作：打开表单
    const handleOpenSignal = () => {
      setIsOpen(true);
    };

    // 在全局窗口(window)注册名为 'openLeadForm' 的监听器
    window.addEventListener('openLeadForm', handleOpenSignal);

    // 清理函数：当组件销毁时，移除监听器防止内存泄漏
    return () => {
      window.removeEventListener('openLeadForm', handleOpenSignal);
    };
  }, []);

  // 如果表单未开启，则不渲染任何内容
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] p-8 md:p-12 relative shadow-2xl animate-in zoom-in-95 duration-300">
        
        {/* 关闭按钮 */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase">Thank You!</h2>
            <p className="text-slate-500">Your request has been sent. Our team will contact you within 24 hours.</p>
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-black text-slate-900 uppercase italic leading-none mb-2">
                Request <span className="text-brand-500">Wholesale</span> Pricing
              </h2>
              <p className="text-slate-500">Direct factory support and exclusive pricing lists.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsSubmitting(true); setTimeout(() => { setIsSubmitting(false); setIsSuccess(true); }, 1500); }}>
              <div>
                <label className="block text-xs font-black uppercase text-slate-400 mb-2 ml-1">Full Name</label>
                <input required type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-brand-500 outline-none transition-all" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-slate-400 mb-2 ml-1">Email Address</label>
                <input required type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-brand-500 outline-none transition-all" placeholder="email@business.com" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-slate-400 mb-2 ml-1">Industry / Venue Type</label>
                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-brand-500 outline-none transition-all appearance-none">
                  <option>Gas Station / C-Store</option>
                  <option>Laundromat</option>
                  <option>Game Route Operator</option>
                  <option>Other / Custom Inquiry</option>
                </select>
              </div>
              
              <button 
                disabled={isSubmitting}
                className="w-full bg-brand-500 hover:bg-brand-600 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-brand-500/20 uppercase tracking-widest flex items-center justify-center gap-3 mt-4"
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send My Request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
