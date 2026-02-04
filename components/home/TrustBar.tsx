import React from 'react';
import { homeData } from '../../data/home';

export const TrustBar = () => (
  <section className="bg-slate-950 py-16 border-y border-slate-800">
    <div className="max-w-7xl mx-auto px-4">
      {/* 4组核心数据 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center mb-20">
        {homeData.stats.map((stat, i) => (
          <div key={i} className="space-y-2 group">
            <div className="text-4xl md:text-5xl font-black text-brand-500 tracking-tighter group-hover:scale-110 transition-transform">
              {stat.value}
            </div>
            <div className="text-white font-bold uppercase text-xs tracking-widest">{stat.label}</div>
            <p className="text-slate-500 text-xs italic">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Fire Kirin 3专项背书块 */}
      <div className="bg-gradient-to-br from-brand-500/15 via-slate-900 to-slate-900 rounded-[3rem] border border-brand-500/30 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-32 h-32 bg-slate-800 rounded-3xl p-5 shadow-2xl flex-shrink-0 border border-slate-700">
          <img src="/images/Multiplayer Fish Shooting Game Board Fire Kirin 3.png" alt="Fire Kirin 3" className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase italic">
            Original Developers of <span className="text-brand-500">Fire Kirin</span> Logic
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Yes, we are the source. The game that redefined the US skill-market was born in our R&D labs. Don't settle for clones—leverage the original math models that generate maximum ROI.
          </p>
        </div>
        <button 
  onClick={() => {
    // 派发全局自定义事件，使全局 LeadForm 接收到信号
    window.dispatchEvent(new CustomEvent('openLeadForm', { 
      detail: { sector: 'Fire Kirin Original Logic' } 
    }));
  }}
  // 您现有的 className 保持不变
  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all ..."
>
  INQUIRE ORIGINALS
</button>
      </div>
    </div>
  </section>
);
