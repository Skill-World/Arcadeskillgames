
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogs } from '../data';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { LanguageCode } from '../types';
import { t, DEFAULT_LANG } from '../utils/i18n';
import { SEO } from '../components/SEO';

const Blog: React.FC = () => {
  const { lang } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  const blogs = getBlogs(currentLang);

  return (
    <div className="bg-brand-900 min-h-screen py-20">
      <SEO 
        title={t(currentLang, 'nav.blog')}
        description="Latest news, compliance updates, and revenue strategies for the skill game industry."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Marketing Insights</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Deep dives into game mechanics, legal frameworks, and profit optimization. 
            Direct from our R&D engineers to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <article key={post.id} className="bg-brand-800 rounded-xl overflow-hidden border border-slate-700 hover:border-brand-500 transition-all hover:-translate-y-1 hover:shadow-2xl flex flex-col group">
              <Link to={`/${currentLang}/blog/${post.slug}`} className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </Link>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-brand-400 font-bold uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-1 bg-brand-900/50 px-2 py-1 rounded">{post.category}</span>
                  <span className="flex items-center gap-1 text-slate-500">{post.readingTime}</span>
                </div>
                <Link to={`/${currentLang}/blog/${post.slug}`}>
                   <h2 className="text-2xl font-bold text-white mb-3 hover:text-brand-400 transition-colors leading-tight">{post.title}</h2>
                </Link>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">{post.excerpt}</p>
                <Link to={`/${currentLang}/blog/${post.slug}`} className="text-brand-400 font-bold text-sm hover:text-white flex items-center gap-2 self-start group-hover:gap-3 transition-all">
                  Read Technical Brief <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
