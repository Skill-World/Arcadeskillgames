import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { t, DEFAULT_LANG } from '../utils/i18n';
import { LanguageCode } from '../types';
import { SEO } from '../components/SEO';
import { CheckCircle, Award, Globe, Wrench, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const { lang } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;

  return (
    <div className="bg-brand-900 min-h-screen">
      <SEO 
        title={t(currentLang, 'about.title')}
        description={`${t(currentLang, 'about.intro')} 25 Years of manufacturing excellence.`}
      />
      
      {/* Hero Section */}
      <div className="relative bg-brand-800 py-20 border-b border-slate-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t(currentLang, 'about.title')}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We are the <strong>Original Equipment Manufacturer (OEM)</strong>. 
            For 25 years, we have engineered the boards, cabinets, and software that power the world's most profitable game rooms.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Content Block: Factory Story */}
        <div className="prose prose-lg prose-invert mx-auto mb-16">
          <p className="text-xl text-slate-300 leading-relaxed">
            Many suppliers are just middlemen. At <strong>Arcade Skill Games</strong>, we own the process. 
            From the <strong className="text-brand-400">software coding</strong> of our proprietary Nudge engines to the 
            <strong className="text-brand-400">metal fabrication</strong> of our reinforced cabinets, we control every detail.
            <br /><br />
            This means <strong>better pricing</strong> for distributors, <strong>custom features</strong> for venue owners, and 
            <strong>guaranteed compliance</strong> with local skill-game regulations.
          </p>
        </div>

        {/* Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <section className="bg-brand-800 p-8 rounded-xl border border-slate-700 hover:border-brand-500 transition-colors">
            <Cpu className="h-10 w-10 text-brand-500 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">{t(currentLang, 'about.mission')}</h2>
            <p className="text-slate-400">
              {t(currentLang, 'about.mission.desc')} We don't use RNG (Random Number Generators). Our games are engineered to reward <strong>Skill, Strategy, and Reflexes</strong>.
            </p>
          </section>

          <section className="bg-brand-800 p-8 rounded-xl border border-slate-700 hover:border-brand-500 transition-colors">
            <Globe className="h-10 w-10 text-brand-500 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">{t(currentLang, 'about.vision')}</h2>
            <p className="text-slate-400">
              {t(currentLang, 'about.vision.desc')} We stay ahead of legal trends. Our systems include "Compliance Mode" settings for major markets like PA, GA, and VA.
            </p>
          </section>
        </div>

        {/* "Why Factory Direct Matters" */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t(currentLang, 'about.why')}</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <Wrench className="h-6 w-6 text-brand-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{t(currentLang, 'about.exp')}</h3>
                <p className="text-slate-400">
                  Cut the middleman markup. We offer <strong>wholesale tiers</strong> for distributors and volume buyers. Plus, we stock every replacement part you'll ever need.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <CheckCircle className="h-6 w-6 text-brand-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{t(currentLang, 'about.comp')}</h3>
                <p className="text-slate-400">
                  Need a custom game theme? Our R&D team can skin games with your brand, adjust difficulty curves, and integrate specific bill validators (ICT, Pyramid, MEI).
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Award className="h-6 w-6 text-brand-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{t(currentLang, 'about.supp')}</h3>
                <p className="text-slate-400">
                  We stand by our build quality with a comprehensive warranty on all non-consumable parts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to={`/${currentLang}/contact`} 
            className="inline-block bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-brand-500/50 transition-all"
          >
            Talk to Our Engineers
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;