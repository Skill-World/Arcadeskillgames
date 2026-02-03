import React from 'react';
import { MessageCircle, FileText, ChevronLeft } from 'lucide-react';

export const FloatingSidebar = () => {
  // 触发全局弹窗表单
  const triggerInquiry = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm', { 
      detail: { sector: 'Global Floating Sidebar' } 
    }));
  };

  return (
    /* ✅ 核心修改：移除 hidden md:flex，改为 flex 确保移动端可见 */
    /* 使用 z-[90] 确保在页面内容之上，但低于移动端导航菜单 (z-100) 的遮挡层 */
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] flex flex-col gap-3 pointer-events-none">
      
      {/* WhatsApp 悬浮按钮 */}
      <a 
        href="https://wa.me/1234567890?text=I'm%20interested%20in%20the%202026%20Price%20List" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group pointer-events-auto flex items-center bg-[#25D366] text-white p-3 md:p-4 rounded-l-2xl shadow-2xl hover:pl-8 transition-all duration-300 active:scale-95"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black text-[10px] uppercase tracking-widest whitespace-nowrap">
          WhatsApp Us
        </span>
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 ml-1 md:ml-2" />
      </a>

      {/* 快速询盘按钮 - 触发 LeadForm */}
      <button 
        onClick={triggerInquiry}
        className="group pointer-events-auto flex items-center bg-brand-500 text-white p-3 md:p-4 rounded-l-2xl shadow-2xl hover:pl-8 transition-all duration-300 border-l border-t border-b border-brand-400/30 active:scale-95"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black text-[10px] uppercase tracking-widest whitespace-nowrap">
          Get Free Quote
        </span>
        <FileText className="w-5 h-5 md:w-6 md:h-6 ml-1 md:ml-2" />
      </button>

      {/* 提示装饰：仅在桌面端显示，移动端隐藏以免遮挡内容 */}
      <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-slate-900/50 backdrop-blur-md p-1 rounded-full text-white/50 animate-pulse hidden md:block">
        <ChevronLeft className="w-4 h-4" />
      </div>
    </div>
  );
};
