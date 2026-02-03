import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { t, DEFAULT_LANG } from '../utils/i18n';
import { LanguageCode } from '../types';
import { SEO } from '../components/SEO';
import { CheckCircle, Award, Globe, Wrench, Cpu, Factory, Layout, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { lang } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;

  return (
    <div className="bg-brand-900 min-h-screen text-slate-200">
      <SEO 
        title={`${t(currentLang, 'about.title')} | The Source of Fire Kirin`}
        description="28 years of engineering excellence in skill-based game boards and customized cabinet assembly."
      />
      
      {/* Hero Section: The Power of the Source */}
      <div className="relative bg-slate-950 py-24 border-b border-brand-500/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500 blur-[120px] rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-black uppercase tracking-widest mb-6">
            <Award className="h-4 w-4" /> 28 Years of R&D Heritage
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">
            The Source Behind <span className="text-brand-500">Fire Kirin</span>
          </h1>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
            We are the original developers of the world-renowned <strong>Fire Kirin logic</strong>. 
            With nearly three decades of industry mastery, we bridge the gap between complex game engineering and venue profitability.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* Core Identity: Engineering & Manufacturing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
              Vertical Integration: <br />
              <span className="text-brand-500">From Workshop to Venue</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              Unlike middlemen, <strong>Arcade Skill Games</strong> operates its own specialized R&D labs and factory workshops. 
              Our 28-year team of software engineers and hardware craftsmen allows us to handle the 
              <strong> full production lifecycle</strong> of skill-based gaming systems.
            </p>
            <ul className="space-y-4">
              {[
                "R&D of proprietary Skill-Based Math Models",
                "Advanced Fish Table Game Board Production",
                "Precision Vertical & Flat Cabinet Assembly",
                "Full Logic & PCB Hardware Engineering"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200 font-bold">
                  <CheckCircle className="h-5 w-5 text-brand-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-800 p-8 rounded-3xl border border-slate-700 text-center">
              <Cpu className="h-12 w-12 text-brand-500 mx-auto mb-4" />
              <div className="text-3xl font-black text-white">Logic</div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-2">Original Math</p>
            </div>
            <div className="bg-brand-800 p-8 rounded-3xl border border-slate-700 text-center">
              <Factory className="h-12 w-12 text-brand-500 mx-auto mb-4" />
              <div className="text-3xl font-black text-white">Workshop</div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-2">CNC Precision</p>
            </div>
          </div>
        </div>

        <hr className="border-slate-800 mb-32" />

        {/* Customization Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 uppercase italic">Custom Solutions for Every Venue</h2>
            <p className="text-slate-400 text-lg">Your location, our engineering. Expand your business footprint.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Layout, 
                title: "Hardware Customization", 
                desc: "Whether you need ultra-slim vertical cabinets for tight spaces or expansive flat tables for social play, our factory assembles to your spec." 
              },
              { 
                icon: Zap, 
                title: "Revenue Expansion", 
                desc: "Our games are engineered to maximize dwell time and reflexes, turning unused floor space into high-yield revenue hubs." 
              },
              { 
                icon: Wrench, 
                title: "Compliance Engineering", 
                desc: "Custom difficulty curves and software adjustments to ensure your boards meet specific local operational standards." 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 hover:border-brand-500 transition-all">
                <feature.icon className="h-12 w-12 text-brand-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Venues Tag Cloud */}
        <div className="bg-brand-500/5 rounded-[3rem] p-12 border border-brand-500/10 text-center mb-32">
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-widest">Optimized for Your Environment</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Convenience Stores", "Internet Cafes", "Gas Stations", "Laundromats", 
              "Arcades", "Game Rooms", "Entertainment Halls", "Route Operations"
            ].map((venue) => (
              <span key={venue} className="px-6 py-2 rounded-full bg-brand-900 border border-slate-700 text-slate-300 font-bold hover:border-brand-500 transition-colors">
                {venue}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-white mb-8 uppercase">Ready to elevate your profits?</h2>
          <Link 
            to={`/${currentLang}/contact`} 
            className="inline-flex items-center gap-3 bg-brand-500 hover:bg-brand-600 text-white font-black py-5 px-12 rounded-2xl shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all uppercase tracking-widest active:scale-95"
          >
            Connect with our R&D Team
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
