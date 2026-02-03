
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Loader2, CheckCircle } from 'lucide-react';
import { getGameRecommendation } from '../services/geminiService';
import { useParams } from 'react-router-dom';
import { t, DEFAULT_LANG } from '../utils/i18n';
import { LanguageCode } from '../types';
import { SEO } from '../components/SEO';
import { getSolutions } from '../data';

const Contact: React.FC = () => {
  const { lang } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  const solutions = getSolutions(currentLang);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  
  // AI State
  const [aiVenue, setAiVenue] = useState(solutions[0]?.title || 'Bar/Pub');
  const [aiTraffic, setAiTraffic] = useState('Medium');
  const [aiBudget, setAiBudget] = useState('Entry-Level');
  const [aiResult, setAiResult] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [aiEmailSent, setAiEmailSent] = useState(false);

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsThinking(true);
    setAiEmailSent(false);

    // 1. Get Recommendation from Gemini
    const recommendation = await getGameRecommendation(aiVenue, aiTraffic, aiBudget);
    
    // 2. Simulate sending email to support
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network request

    setAiResult(recommendation);
    setAiEmailSent(true);
    setIsThinking(false);
  };

  return (
    <div className="bg-brand-900 min-h-screen py-20 animate-fade-in">
      <SEO
        title={t(currentLang, 'contact.title')}
        description={t(currentLang, 'Arcade Skill Games Team will reply you as soon as possible')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info & Form */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">{t(currentLang, 'Contact Us')}</h1>
            <p className="text-slate-400 mb-12">
              {t(currentLang, 'Arcade Skill Games Team will reply you as soon as possible')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-brand-500 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-slate-400 text-sm">+1 (800) 555-0199</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-brand-500 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-slate-400 text-sm">sales@arcadeskillgames.com</p>
                </div>
              </div>
            </div>

            <form className="space-y-6 bg-brand-800 p-8 rounded-2xl border border-slate-700">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t(currentLang, 'contact.name')}</label>
                <input 
                  type="text" 
                  className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t(currentLang, 'contact.email')}</label>
                    <input 
                      type="email" 
                      className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t(currentLang, 'contact.phone')}</label>
                    <input 
                      type="tel" 
                      className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t(currentLang, 'contact.message')}</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  placeholder="I'm interested in..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-lg transition-all shadow-lg hover:shadow-brand-500/25 uppercase tracking-widest">
                {t(currentLang, 'contact.send')}
              </button>
            </form>
          </div>

          {/* Right Column: AI Consultant */}
          <div>
            <div className="bg-gradient-to-br from-brand-800 to-brand-900 rounded-2xl border border-brand-500/30 p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles className="h-32 w-32 text-brand-500" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-brand-500 rounded-lg">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{t(currentLang, 'contact.ai.title')}</h2>
                </div>
                
                <p className="text-slate-300 mb-8">
                  {t(currentLang, 'contact.ai.desc')}
                </p>

                <form onSubmit={handleAiSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Venue Type</label>
                    <select 
                      value={aiVenue} 
                      onChange={(e) => setAiVenue(e.target.value)}
                      className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500"
                    >
                      {solutions.map((sol) => (
                        <option key={sol.id} value={sol.title}>
                          {sol.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Traffic</label>
                      <select 
                        value={aiTraffic}
                        onChange={(e) => setAiTraffic(e.target.value)}
                        className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500"
                      >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Budget</label>
                      <select 
                        value={aiBudget}
                        onChange={(e) => setAiBudget(e.target.value)}
                        className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500"
                      >
                        <option>Entry-Level</option>
                        <option>Mid-Range</option>
                        <option>Premium</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    disabled={isThinking}
                    className="w-full bg-slate-700 hover:bg-brand-500 disabled:bg-slate-800 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-all flex justify-center items-center gap-2 shadow-lg"
                  >
                    {isThinking ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" /> Processing Inquiry...
                      </>
                    ) : (
                      'Contact Support Team'
                    )}
                  </button>
                </form>

                {aiResult && (
                  <div className="mt-8 animate-fade-in">
                    {/* Success Message for Email */}
                    {aiEmailSent && (
                        <div className="mb-4 bg-green-500/20 border border-green-500/50 text-green-300 p-4 rounded-lg flex items-center gap-3 text-sm">
                            <CheckCircle className="h-5 w-5" />
                            <span>Inquiry sent to support team! Here is your preliminary AI Analysis:</span>
                        </div>
                    )}
                    
                    <div className="p-4 bg-brand-900/50 rounded-lg border border-brand-500/50">
                        <h4 className="text-brand-400 font-bold mb-2 text-sm uppercase">AI Optimization Report:</h4>
                        <p className="text-slate-200 text-sm leading-relaxed">
                        {aiResult}
                        </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
