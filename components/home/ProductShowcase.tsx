import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // ✅ 引入路由组件
import { homeData } from '../../data/home';
import { LanguageCode } from '../../types';

export const ProductShowcase = () => {
  // ✅ 获取当前 URL 中的语言参数，确保跳转路径正确
  const { lang } = useParams<{ lang: LanguageCode }>();
  const [activeTab, setActiveTab] = useState<'boards' | 'cabinets' | 'logic'>('boards');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic mb-8">
            Elite <span className="text-brand-500">Selection</span>
          </h2>
          
          {/* Tabs 控制器 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(homeData.showcase).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-sm transition-all ${
                  activeTab === key ? 'bg-brand-500 text-white shadow-lg' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {key === 'boards' ? 'Skill-Based Boards' : key === 'cabinets' ? 'Industrial Cabinets' : 'Logic & PCBs'}
              </button>
            ))}
          </div>
        </div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeData.showcase[activeTab].map((product, i) => (
            <div key={i} className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:shadow-2xl transition-all group flex flex-col h-full">
              <div className="flex-grow">
                <span className="bg-brand-500/10 text-brand-600 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 inline-block">
                  {product.tags}
                </span>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{product.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{product.desc}</p>
              </div>

              {/* ✅ 修改点：将 button 替换为 Link，链接到具体产品 ID */}
              <Link 
                to={`/${lang}/products/${product.id}`} 
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs group-hover:bg-brand-500 transition-colors text-center inline-block"
              >
                View Technical Specs
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
