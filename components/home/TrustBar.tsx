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

      {/* Fire Kirin 专项背书块 */}
      <div className="bg-gradient-to-br from-brand-500/15 via-slate-900 to-slate-900 rounded-[3rem] border border-brand-500/30 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-32 h-32 bg-slate-800 rounded-3xl p-5 shadow-2xl flex-shrink-0 border border-slate-700">
          <img src="/images/games/fire-kirin-logo.png" alt="Fire Kirin" className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase italic">
            Original Developers of <span className="text-brand-500">Fire Kirin</span> Logic
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Yes, we are the source. The game that redefined the US skill-market was born in our R&D labs. Don't settle for clones—leverage the original math models that generate maximum ROI.
          </p>
        </div>
        <button className="bg-brand-500 hover:bg-brand-600 text-white font-black px-10 py-5 rounded-2xl transition-all uppercase text-sm tracking-widest shadow-xl shadow-brand-500/20">
          Inquire Originals
        </button>
      </div>
    </div>
  </section>
);
