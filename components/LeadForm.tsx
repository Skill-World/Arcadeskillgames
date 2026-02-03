import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Loader2, ShieldCheck, FileText } from 'lucide-react';

interface LeadFormProps {
  onClose?: () => void;
  initialSector?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onClose, initialSector }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [currentSector, setCurrentSector] = useState(initialSector || 'General');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    volume: '1-5 units',
    message: ''
  });

  useEffect(() => {
    const handleOpen = (e: any) => {
      const sector = e.detail?.sector || 'General';
      setCurrentSector(sector);
      setIsOpen(true);
      setStatus('idle');
    };

    window.addEventListener('openLeadForm', handleOpen);
    return () => window.removeEventListener('openLeadForm', handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      console.log('Capture Success:', { ...formData, sector: currentSector });
      setStatus('success');
    }, 1500);
  };

  if (!isOpen) return null;

  // 成功状态视图 (已优化移动端)
  if (status === 'success') {
    return (
      <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={handleClose} />
        <div className="relative bg-brand-900 border border-brand-500/30 p-8 md:p-10 rounded-[40px] max-w-md w-full text-center shadow-2xl animate-in zoom-in duration-300">
          <div className="bg-emerald-500/20 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="h-10 w-10 md:h-12 md:h-12 text-emerald-500" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter">Inquiry Received</h3>
          <p className="text-slate-400 mb-10 leading-relaxed font-medium text-sm md:text-base">Our {currentSector} specialist will send the 2026 Price List to your inbox within 12 hours.</p>
          <button onClick={handleClose} className="w-full py-5 bg-white text-brand-900 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
            Close Window
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6">
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" onClick={handleClose} />
      
      {/* 表单主体 - 核心修改点：增加 max-h 和 flex-col */}
      <div className="relative bg-brand-900 border border-slate-700 rounded-[32px] max-w-4xl w-full flex flex-col md:flex-row overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-12 duration-500 max-h-[90vh]">
        
        {/* 固定在顶部的关闭按钮 - 优化：在移动端增加背景色确保可见性 */}
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 z-[60] bg-slate-900/50 md:bg-transparent p-2 rounded-full text-slate-400 hover:text-white hover:rotate-90 transition-all"
        >
          <X className="h-6 w-6" />
        </button>

        {/* 左侧：营销话术 - 优化：增加内部滚动支持 */}
        <div className="hidden md:flex md:w-5/12 bg-slate-950 p-10 flex-col justify-between border-r border-slate-800 overflow-y-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-black uppercase tracking-widest mb-8">
              Official Factory Access: {currentSector}
            </div>
            <h2 className="text-3xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
              Get Tier-1 <span className="text-brand-500">Wholesale</span> Pricing
            </h2>
            <p className="text-slate-500 mb-10 text-sm leading-relaxed">
              Connect directly with our 28-year engineering team. We prioritize inquiries from registered {currentSector} operators.
            </p>
            <ul className="space-y-6">
              {[
                { icon: FileText, text: "2026 Wholesale Price Matrix" },
                { icon: ShieldCheck, text: "Logic Compliance Documentation" },
                { icon: Send, text: "Mixed Container Logistics PDF" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 font-bold text-xs uppercase tracking-wide">
                  <div className="bg-brand-500/10 p-2 rounded-lg text-brand-500">
                    <item.icon className="h-4 w-4" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800/50 text-[10px] text-slate-600 font-medium uppercase tracking-[0.2em]">
            Arcade Skill Games © 2026
          </div>
        </div>

        {/* 右侧：输入表单 - 核心修改：overflow-y-auto 允许在该区域滑动 */}
        <div className="w-full md:w-7/12 p-6 md:p-10 bg-brand-900/50 relative overflow-y-auto custom-scrollbar">
          {/* 移动端显示的简短标题 */}
          <div className="md:hidden mb-8 pr-8">
            <h2 className="text-xl font-black text-white uppercase italic tracking-tighter">
              {currentSector} Inquiry
            </h2>
            <div className="h-1 w-12 bg-brand-500 mt-2"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input required type="text" placeholder="e.g. John Smith" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-brand-500 transition-all"
                  onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Work Email</label>
                <input required type="email" placeholder="john@company.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-brand-500 transition-all"
                  onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Estimated Purchase Volume</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-500 transition-all cursor-pointer"
                onChange={e => setFormData({...formData, volume: e.target.value})}>
                <option value="1-5 units">Personal Venue (1-5 units)</option>
                <option value="5-20 units">Route Expansion (5-20 units)</option>
                <option value="20-50 units">Master Agent (20-50 units)</option>
                <option value="50+ units">Bulk Distributor (50+ units)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Specific Requirements</label>
              <textarea rows={3} placeholder="Tell us about your target location or custom needs..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none focus:border-brand-500 transition-all"
                onChange={e => setFormData({...formData, message: e.target.value})} />
            </div>

            <button disabled={status === 'submitting'} type="submit" className="w-full bg-brand-500 hover:bg-brand-600 text-white font-black py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm disabled:opacity-50">
              {status === 'submitting' ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>Submit project Inquiry <Send className="h-4 w-4" /></>
              )}
            </button>
          </form>
          
          <p className="mt-8 text-center text-[10px] text-slate-600 uppercase tracking-widest md:hidden">
            Arcade Skill Games © 2026
          </p>
        </div>
      </div>
    </div>
  );
};
