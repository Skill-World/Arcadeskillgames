import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getProducts } from '../data';
import { Check, Info } from 'lucide-react';
import Seo from '../components/Seo';
import { LanguageCode } from '../types';
import { DEFAULT_LANG, t } from '../utils/i18n';

const Products: React.FC = () => {
  const { lang } = useParams();
  const [searchParams] = useSearchParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  
  // Get category from URL (e.g. ?category=complete_machine) or default to 'all'
  const categoryParam = searchParams.get('category');
  const [filter, setFilter] = useState<'all' | 'complete_machine' | 'cabinet_only' | 'game_board'>('all');

  useEffect(() => {
    if (categoryParam && ['complete_machine', 'cabinet_only', 'game_board'].includes(categoryParam)) {
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
    { 
      id: 'all', 
      label: 'All Products', 
      seoTitle: 'Skill Game Machines & Parts' 
    },
    { 
      id: 'complete_machine', 
      label: 'Complete Machines', // 对应文档: Complete Machines
      seoTitle: 'Turnkey Skill Machines (Ready-to-Play)', 
      desc: t(currentLang, 'cat.desc.machines') 
    },
    { 
      id: 'cabinet_only', 
      label: 'Empty Cabinets', // ✅ 修改：强制显示文档要求的 "Empty Cabinets"
      seoTitle: 'Empty Arcade Cabinets (No Board)', 
      desc: t(currentLang, 'cat.desc.cabinets') 
    },
    { 
      id: 'game_board', 
      label: 'Game Kits / Boards', // ✅ 修改：强制显示文档要求的 "Game Kits / Boards"
      seoTitle: 'Skill Game Boards & Kits', 
      desc: t(currentLang, 'cat.desc.boards') 
    },
  ];

  const currentCategory = categories.find(c => c.id === filter) || categories[0];

  // Dynamic Product List Schema
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredProducts.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.imageUrl,
        "category": product.category
      }
    }))
  };

  return (
    <div className="py-20 bg-brand-900 min-h-screen">
      <Seo 
        title={currentCategory.seoTitle}
        description={`Shop ${currentCategory.label}. ${currentCategory.desc || 'High quality amusement devices.'} Factory direct pricing.`}
        schema={productListSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {currentCategory.seoTitle}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {currentCategory.desc || 'Explore our full range of manufacturing solutions.'}
          </p>
        </div>

        {/* SEO Education Section - Explaining the difference */}
        {filter === 'all' && (
          <div className="bg-brand-800/50 border border-brand-500/30 rounded-xl p-6 mb-12 flex gap-4 items-start">
            <Info className="h-6 w-6 text-brand-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Not sure what you need?</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><strong className="text-brand-400">Complete Machines:</strong> Best for Venue Owners. Includes cabinet, monitor, game board, and bill acceptor. Ready to plug in.</li>
                <li><strong className="text-brand-400">Empty Cabinets:</strong> Best for Distributors who have their own game boards. Metal body + wiring only.</li>
                <li><strong className="text-brand-400">Game Boards:</strong> Software/PCB only. Update your existing machines with new "Nudge" or "Fish" games.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat.id 
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25' 
                  : 'bg-brand-800 text-slate-400 hover:bg-brand-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <article key={product.id} className="bg-brand-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg hover:shadow-brand-500/10 transition-all flex flex-col h-full">
              <div className="h-72 overflow-hidden bg-black relative">
                 <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover opacity-90" />
                 
                 {/* Category Badge */}
                 <div className="absolute top-4 right-4 bg-brand-900/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase border border-brand-500/30 shadow-lg text-brand-400">
                   {product.category.replace('_', ' ')}
                 </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-white mb-3">{product.name}</h2>
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

                <button className="w-full bg-slate-700 hover:bg-brand-500 text-white py-3 rounded-lg font-semibold transition-colors mt-auto">
                  Request Pricing
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
