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

  // --- 1. State 定义 ---
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [aiVenue, setAiVenue] = useState(solutions[0]?.title || 'Bar/Pub');
  const [aiTraffic, setAiTraffic] = useState('Medium');
  const [aiBudget, setAiBudget] = useState('Entry-Level');
  const [aiResult, setAiResult] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [aiEmailSent, setAiEmailSent] = useState(false);

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxxTifn3vuebu-hO7D9AxUXcmr7nJZzDciH17Z3wHRhwAJMtzIWnCKyO9rZ-DN9k602/exec';

  // --- 2. 逻辑处理 ---

  // 左侧表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: "General Contact Us",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }),
      });
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 右侧 AI 咨询提交
  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsThinking(true);
    setAiEmailSent(false);

    try {
      // 获取 AI 建议
      const recommendation = await getGameRecommendation(aiVenue, aiTraffic, aiBudget);
      
      // 同步数据到 Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: "Venue Support Request (AI)",
          venueType: aiVenue,
          traffic: aiTraffic,
          budget: aiBudget,
          message: recommendation 
        }),
      });

      setAiResult(recommendation);
      setAiEmailSent(true);
    } catch (error) {
      console.error("AI recording failed:", error);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="bg-brand-900 min-h-screen py-20 animate-fade-in">
      <SEO
        title={t(currentLang, 'contact.title')}
        description={t(currentLang, 'Arcade Skill Games Team will reply you as soon as possible')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Form */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">{t(currentLang, 'Contact Us')}</h1>
            <p className="text-slate-400 mb-12">{t(currentLang, 'Arcade Skill Games Team will reply you as soon as possible')}</p>

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

            {/* ✅ 绑定 handleSubmit 并增加成功状态判断 */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-brand-800 p-8 rounded-2xl border border-slate-700 min-h-[400px] flex flex-col justify-center">
              {isSuccess ? (
                <div className="text-center animate-in zoom-in duration-300">
                  <div className="bg-emerald-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Our team will contact you shortly.</p>
                  <button onClick={() => setIsSuccess(false)} className="mt-6 text-brand-400 text-sm font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t(currentLang, 'contact.name')}</label>
                    <input required type="text" className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-brand-500 transition-colors" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t(currentLang, 'contact.email')}</label>
                      <input required type="email" className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-brand-500 transition-colors" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">{t(currentLang, 'contact.phone')}</label>
                      <input type="tel" className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-brand-500 transition-colors" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t(currentLang, 'contact.message')}</label>
                    <textarea required rows={4} className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-brand-500 transition-colors" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                  </div>
                  <button disabled={isSubmitting} className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                    {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : t(currentLang, 'contact.send')}
                  </button>
                </>
              )}
            </form>
          </div>

          {/* Right Column: AI Consultant (保持不变，已修正逻辑错误) */}
          <div>
            <div className="bg-gradient-to-br from-brand-800 to-brand-900 rounded-2xl border border-brand-500/30 p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Sparkles className="h-32 w-32 text-brand-500" /></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-brand-500 rounded-lg"><Sparkles className="h-6 w-6 text-white" /></div>
                  <h2 className="text-2xl font-bold text-white">{t(currentLang, 'contact.ai.title')}</h2>
                </div>
                <p className="text-slate-300 mb-8">{t(currentLang, 'contact.ai.desc')}</p>
                <form onSubmit={handleAiSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Venue Type</label>
                    <select value={aiVenue} onChange={(e) => setAiVenue(e.target.value)} className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white">
                      {solutions.map((sol) => (<option key={sol.id} value={sol.title}>{sol.title}</option>))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Traffic</label>
                      <select value={aiTraffic} onChange={(e) => setAiTraffic(e.target.value)} className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white">
                        <option>Low</option><option>Medium</option><option>High</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Budget</label>
                      <select value={aiBudget} onChange={(e) => setAiBudget(e.target.value)} className="w-full bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white">
                        <option>Entry-Level</option><option>Mid-Range</option><option>Premium</option>
                      </select>
                    </div>
                  </div>
                  <button disabled={isThinking} className="w-full bg-slate-700 hover:bg-brand-500 disabled:bg-slate-800 text-white font-bold py-3 rounded-lg transition-all flex justify-center items-center gap-2">
                    {isThinking ? <><Loader2 className="h-5 w-5 animate-spin" /> Processing...</> : 'Contact Support Team'}
                  </button>
                </form>

                {aiResult && (
                  <div className="mt-8 animate-fade-in">
                    {aiEmailSent && (
                      <div className="mb-4 bg-green-500/20 border border-green-500/50 text-green-300 p-4 rounded-lg flex items-center gap-3 text-sm">
                        <CheckCircle className="h-5 w-5" />
                        <span>Inquiry sent to support team!</span>
                      </div>
                    )}
                    <div className="p-4 bg-brand-900/50 rounded-lg border border-brand-500/50">
                      <h4 className="text-brand-400 font-bold mb-2 text-sm uppercase">AI Optimization Report:</h4>
                      <p className="text-slate-200 text-sm leading-relaxed">{aiResult}</p>
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
