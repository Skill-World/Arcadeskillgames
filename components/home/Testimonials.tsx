import React from 'react';
import { homeData } from '../../data/home';
import { Quote } from 'lucide-react';

export const Testimonials = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl text-left">
          <h2 className="text-4xl font-black text-slate-900 uppercase italic leading-none mb-4">
            Real ROI, <span className="text-brand-500">Real Owners.</span>
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Don't take our word for it. Hear from the shop owners and operators who use our hardware to secure their financial freedom.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {homeData.testimonials.map((t, i) => (
          <div key={i} className="relative bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
            <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-500/10" />
            <div className="inline-block px-4 py-1 bg-brand-500 text-white font-black text-[10px] uppercase tracking-tighter rounded-full mb-6">
              {t.metrics}
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
              "{t.quote}"
            </p>
            <div className="border-t border-slate-200 pt-6">
              <div className="font-black text-slate-900">{t.author}</div>
              <div className="text-slate-500 text-sm">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
