import React from 'react';
import { homeData } from '../../data/home';
import { ArrowRight } from 'lucide-react';

export const VenueGrid = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-4">
          Targeted <span className="text-brand-500">Revenue Solutions</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          We don't sell generic machines. We provide industry-specific income strategies tailored to your unique venue.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {homeData.venues.map((venue) => (
          <a 
            key={venue.id}
            href={`/solutions/${venue.id}`}
            className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-brand-500 hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors">
              <venue.icon className="w-7 h-7 text-slate-400 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">{venue.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600">
              {venue.desc}
            </p>
            <div className="flex items-center text-brand-500 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
              Explore Solution <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
