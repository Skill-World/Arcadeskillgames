import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { getProducts } from '../data';
import { Check, Info } from 'lucide-react';
import Seo from '../components/SEO';
import { LanguageCode } from '../types';
import { DEFAULT_LANG, t } from '../utils/i18n';

const Products: React.FC = () => {
  const { lang } = useParams();
  const [searchParams] = useSearchParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  
  const categoryParam = searchParams.get('category');
  const [filter, setFilter] = useState<'all' | 'skill_based_game_board' | 'cabinet_only' | 'game_board'>('all');

  useEffect(() => {
    if (categoryParam && ['skill_based_game_board', 'cabinet_only', 'game_board'].includes(categoryParam)) {
      setFilter(categoryParam as any);
    } else {
      setFilter('all');
    }
  }, [categoryParam]);

  const allProducts = getProducts(currentLang);
  const filteredProducts = filter === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Products', seoTitle: 'Skill Game Machines & Parts' },
    { id: 'skill_based_game_board', label: 'Skill-Based Game Board', seoTitle: 'Turnkey Skill Machines', desc: t(currentLang, 'cat.desc.machines') },
    { id: 'cabinet_only', label: 'Empty Cabinets', seoTitle: 'Empty Arcade Cabinets', desc: t(currentLang, 'cat.desc.cabinets') },
    { id: 'game_board', label: 'Game Kits / Boards', seoTitle: 'Skill Game Boards', desc: t(currentLang, 'cat.desc.boards') },
  ];

  const currentCategory = categories.find(c => c.id === filter) || categories[0];

  return (
    <div className="py-20 bg-brand-900 min-h-screen">
      <Seo 
        title={currentCategory.seoTitle} 
        description={`Shop ${currentCategory.label}. Factory direct pricing.`} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentCategory.seoTitle}</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">{currentCategory.desc || 'Quality manufacturing solutions.'}</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat.id ? 'bg-brand-500 text-white shadow-lg' : 'bg-brand-800 text-slate-400 hover:bg-brand-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid - 修复后的核心结构 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <article key={product.id} className="bg-brand-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg flex flex-col h-full group">
              
              {/* 1. Image Section (修复了多余的 div 和闭合标签) */}
              <div className="h-72 overflow-hidden bg-black relative">
                <Link to={product.id} className="block w-full h-full">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                </Link>
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-brand-900/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase border border-brand-500/30 text-brand-400">
                  {product.category.replace('_', ' ')}
                </div>
              </div>

              {/* 2. Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-white mb-3">
                  <Link to={product.id} className="hover:text-brand-400 transition-colors">
                    {product.name}
                  </Link>
                </h2>
                <p className="text-slate-400 mb-6 flex-grow">{product.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide mb-3">Key Specs:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-400 text-sm">
                        <Check className="h-4 w-4 text-brand-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={product.id} className="w-full bg-slate-700 hover:bg-brand-500 text-white py-3 rounded-lg font-semibold transition-colors mt-auto text-center block">
                  View Details & Pricing
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
