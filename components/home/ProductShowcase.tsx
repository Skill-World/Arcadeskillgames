import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // 引入 Link 和 useParams
import { LanguageCode } from '../../types';

// 假设您的展示数据现在包含真实的产品 ID
const showcaseData = {
  boards: [
    { id: 'fire-kirin-original', name: "Fire Kirin: Original", tags: "Legendary", desc: "The legendary logic that dominates the US market." },
    { id: 'golden-empire', name: "Golden Empire Nudge", tags: "Compliance", desc: "Verified skill-based mechanics for retail zones." },
    // ... 其他产品
  ],
  // ... 其他分类
};

export const ProductShowcase = () => {
  const { lang } = useParams<{ lang: string }>(); // 获取当前语言
  const [activeTab, setActiveTab] = useState<keyof typeof showcaseData>('boards');

  return (
    <section className="py-24 bg-white">
      {/* ... 标题和 Tab 切换逻辑保持不变 ... */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {showcaseData[activeTab].map((product) => (
          <div key={product.id} className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 group">
            {/* ... 标签和标题展示 ... */}
            
            {/* ✅ 核心修改点：将 button 替换为 Link */}
            <Link 
              to={`/${lang}/products/${product.id}`} // 动态生成路径
              className="block w-full py-4 bg-slate-900 text-white text-center rounded-2xl font-bold uppercase tracking-widest text-xs group-hover:bg-brand-500 transition-colors"
            >
              View Technical Specs
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
