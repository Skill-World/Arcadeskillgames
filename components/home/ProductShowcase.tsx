import React, { useState } from 'react';

// 这里假设你已经按照之前的建议在 data.ts 中添加了 showcase 数据
// 如果没有，可以先用这个静态结构测试
const showcaseData = {
  boards: [
    { name: "Fire Kirin: Original", tags: "Legendary", desc: "The legendary logic that dominates the US market." },
    { name: "Golden Empire Nudge", tags: "Compliance", desc: "Verified skill-based mechanics for retail zones." },
    { name: "Dragon Hunter", tags: "High Hold", desc: "Precision-engineered math models for high retention." }
  ],
  cabinets: [
    { name: '43" Titan Vertical', tags: "C-Store Top Pick", desc: "Ultra-slim 1.2mm reinforced steel construction." },
    { name: "8-Player Fish Table", tags: "Social Hub", desc: "Industrial LG/Samsung 4K Panels with vault security." },
    { name: "VIP Slant-Top", tags: "Luxury", desc: "Ergonomic furniture-grade design for lounges." }
  ],
  logic: [
    { name: "36/10 Pin Universal", tags: "Tech-Ready", desc: "Seamlessly upgrade 90% of existing cabinets." },
    { name: "Nudge-Plus Logic", tags: "Smart Tech", desc: "Pre-Reveal compliance logic with 4K output." },
    { name: "Linked Network Board", tags: "Route Control", desc: "Remote accounting via secure SAS 6.0." }
  ]
};

export const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState<'boards' | 'cabinets' | 'logic'>('boards');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic mb-12">
          Elite <span className="text-brand-500">Selection</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(showcaseData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`px-8 py-3 rounded-xl font-bold uppercase text-sm transition-all ${
                activeTab === key ? 'bg-brand-500 text-white shadow-lg' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {showcaseData[activeTab].map((product, i) => (
            <div key={i} className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 group hover:shadow-xl transition-all">
              <span className="bg-brand-500/10 text-brand-600 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 inline-block">
                {product.tags}
              </span>
              <h4 className="text-2xl font-black text-slate-900 mb-4">{product.name}</h4>
              <p className="text-slate-500 text-sm mb-8">{product.desc}</p>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs group-hover:bg-brand-500 transition-colors">
                View Tech Specs
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
