import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getSolutions } from '../data';
import { 
  Store, Truck, Gamepad2, ArrowRight, Cpu, MapPin, 
  Briefcase, Dices, Zap, Scissors, PenTool, Droplets, Wifi, Armchair 
} from 'lucide-react';
import { LanguageCode } from '../types';
import { DEFAULT_LANG, t } from '../utils/i18n';
import Seo from '../components/Seo';

const Solutions: React.FC = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  const solutions = getSolutions(currentLang);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="h-8 w-8" />;
      case 'Briefcase': return <Briefcase className="h-8 w-8" />;
      case 'Cpu': return <Cpu className="h-8 w-8" />;
      case 'Gamepad2': return <Gamepad2 className="h-8 w-8" />;
      case 'Dices': return <Dices className="h-8 w-8" />;
      case 'Zap': return <Zap className="h-8 w-8" />;
      case 'Store': return <Store className="h-8 w-8" />;
      case 'Scissors': return <Scissors className="h-8 w-8" />;
      case 'PenTool': return <PenTool className="h-8 w-8" />;
      case 'Droplets': return <Droplets className="h-8 w-8" />;
      case 'Wifi': return <Wifi className="h-8 w-8" />;
      case 'Armchair': return <Armchair className="h-8 w-8" />;
      default: return <Store className="h-8 w-8" />;
    }
  };

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": solutions.map((sol, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": sol.title,
      "description": sol.description
    }))
  };

  return (
    <div className="bg-brand-900 min-h-screen">
      <Seo 
        title={t(currentLang, 'sol.page.title')}
        description={t(currentLang, 'sol.page.subtitle')}
        schema={seoSchema}
      />

      {/* Hero */}
      <div className="bg-brand-800 py-20 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t(currentLang, 'sol.page.title')}</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t(currentLang, 'sol.page.subtitle')}
          </p>
        </div>
      </div>

      {/* Solutions List - Alternating Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id} 
              onClick={() => navigate(`/${currentLang}/solutions/${solution.id}`)}
              className={`flex flex-col lg:flex-row gap-8 items-stretch group cursor-pointer ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Visual Side */}
              <div className="lg:w-1/2 relative overflow-hidden rounded-2xl border border-slate-700 shadow-xl group-hover:shadow-brand-500/20 transition-all duration-300 min-h-[300px]">
                <div className="absolute inset-0 bg-brand-500/10 mix-blend-overlay z-10 group-hover:bg-brand-500/0 transition-colors"></div>
                {/* Overlay Text for mobile context or extra style */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-900 to-transparent opacity-80 z-20"></div>
                
                <img 
                  src={`https://picsum.photos/800/600?random=${index + 20}`} 
                  alt={solution.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 flex flex-col justify-center p-4 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand-800 rounded-lg text-brand-400 border border-slate-700 group-hover:text-brand-500 group-hover:border-brand-500 transition-colors">
                    {getIcon(solution.icon)}
                  </div>
                  <h3 className="text-brand-400 font-bold uppercase tracking-wider text-sm">{solution.targetAudience}</h3>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                  {solution.title}
                </h2>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {solution.description}
                </p>

                <div className="bg-brand-800/50 rounded-xl p-5 border border-slate-700 mb-6">
                  <ul className="grid grid-cols-1 gap-3">
                    {solution.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-slate-300 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500 mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  See {solution.title} Solutions <ArrowRight className="ml-2 h-4 w-4 text-brand-500" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
