import React from 'react';
import { TrendingDown, Maximize, ShieldAlert } from 'lucide-react';

const painPoints = [
  {
    title: "Rising Utility Costs?",
    desc: `While fuel and retail margins shrink, our skill games provide a 100% passive revenue stream to offset your rising utility bills without extra labor.`,
    icon: TrendingDown
  },
  {
    title: "Wasted 'Dead Space'?",
    desc: `Stop paying rent for empty corners. Our 3sqft vertical kiosks generate more net profit than a full aisle of retail snacks or vending.`,
    icon: Maximize
  },
  {
    title: "Unreliable Vendors?",
    desc: `Burned by 'clone' machines and disappearing brokers? We are a 28-year source factory with direct engineer support and vault-grade security.`,
    icon: ShieldAlert
  }
];

export const PainPoints = () => (
  <section className="py-24 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-16">
        The Business Owner's <span className="text-brand-500">Reality Check</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {painPoints.map((point, i) => (
          <div key={i} className="group">
            <div className="inline-flex p-6 rounded-3xl bg-brand-500/10 mb-6 group-hover:bg-brand-500 transition-colors">
              <point.icon className="w-10 h-10 text-brand-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{point.title}</h3>
            <p className="text-slate-400 leading-relaxed italic">"{point.desc}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
