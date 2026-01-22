
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getBlogs } from '../data';
import { LanguageCode, ContentBlock, ChartData, TableData } from '../types';
import { DEFAULT_LANG } from '../utils/i18n';
import SEO from '../components/SEO';
import { Calendar, User, Clock, ChevronLeft, ArrowRight, Play, ExternalLink, Facebook, Twitter, Linkedin, Share2, List, Hash, Send, MessageSquare } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { lang, slug } = useParams();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;
  
  const blogs = getBlogs(currentLang);
  const postIndex = blogs.findIndex(b => b.slug === slug);
  const post = blogs[postIndex];

  // Logic for Prev/Next
  const prevPost = postIndex > 0 ? blogs[postIndex - 1] : null;
  const nextPost = postIndex < blogs.length - 1 ? blogs[postIndex + 1] : null;
  
  // Logic for Related (exclude current)
  const relatedPosts = blogs.filter(b => b.id !== post?.id).slice(0, 3);

  // Comment Form State
  const [comment, setComment] = useState({ name: '', text: '' });
  const [commentsList, setCommentsList] = useState<{name: string, text: string, date: string}[]>([
      { name: "Alex R.", text: "Great insights on the compliance regulations!", date: "Oct 14, 2024" }
  ]);

  if (!post) {
    return <Navigate to={`/${currentLang}/blog`} replace />;
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if(comment.name && comment.text) {
          setCommentsList([{...comment, date: new Date().toLocaleDateString()}, ...commentsList]);
          setComment({ name: '', text: '' });
      }
  }

  // --- TOC Generation ---
  const toc = post.blocks
    .map((block, index) => ({ ...block, originalIndex: index }))
    .filter(block => block.type === 'h2' || block.type === 'h3')
    .map((block) => ({
      id: `section-${block.originalIndex}`,
      text: block.content as string,
      level: block.type === 'h2' ? 1 : 2
    }));

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // --- Block Renderers ---
  
  const renderParagraph = (content: string, isFirst: boolean) => (
    <p 
      className={`text-lg text-slate-300 leading-8 mb-8 font-light ${isFirst ? 'first-letter:text-5xl first-letter:font-bold first-letter:text-brand-500 first-letter:mr-3 first-letter:float-left' : ''}`}
      dangerouslySetInnerHTML={{ __html: content }} // Supports bold, italic, links from CMS/Data
    />
  );

  const renderH2 = (content: string, id: string) => (
    <h2 id={id} className="scroll-mt-24 text-3xl font-bold text-white mt-16 mb-6 pb-4 border-b border-slate-700 flex items-center gap-3">
      <span className="h-2 w-2 bg-brand-500 rounded-full"></span>
      {content}
    </h2>
  );

  const renderH3 = (content: string, id: string) => (
    <h3 id={id} className="scroll-mt-24 text-xl font-bold text-brand-400 mt-10 mb-4 ml-1">
      {content}
    </h3>
  );

  const renderList = (items: string[]) => (
    <ul className="space-y-4 mb-10 ml-2 bg-brand-800/30 p-6 rounded-xl border-l-4 border-brand-500">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-4 text-slate-300">
           <div className="h-6 w-6 rounded-full bg-brand-900 border border-brand-500/30 flex items-center justify-center flex-shrink-0 text-xs text-brand-500 font-bold mt-0.5">
             {idx + 1}
           </div>
           <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item }}></span>
        </li>
      ))}
    </ul>
  );

  const renderTable = (data: TableData, caption?: string) => (
      <div className="my-12 overflow-x-auto">
          {caption && <div className="text-sm text-slate-400 mb-2 font-bold uppercase tracking-wide">{caption}</div>}
          <table className="w-full text-left border-collapse border border-slate-700 rounded-lg overflow-hidden">
              <thead className="bg-brand-800">
                  <tr>
                      {data.headers.map((h, i) => (
                          <th key={i} className="p-4 text-white font-bold border-b border-slate-600 border-r last:border-r-0 border-slate-700">{h}</th>
                      ))}
                  </tr>
              </thead>
              <tbody>
                  {data.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="border-b border-slate-700/50 hover:bg-brand-800/50 transition-colors">
                          {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-4 text-slate-300 border-r border-slate-700/50 last:border-r-0">{cell}</td>
                          ))}
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );

  const renderImage = (src: string, alt?: string, caption?: string) => (
    <figure className="my-12 group">
      <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl relative">
        <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/10 transition-colors pointer-events-none z-10"></div>
        <img src={src} alt={alt || 'Blog Image'} className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
      </div>
      {caption && <figcaption className="text-center text-slate-500 text-sm mt-4 italic border-l-2 border-brand-500 inline-block px-3">{caption}</figcaption>}
    </figure>
  );

  const renderVideo = (url: string, caption?: string) => (
     <figure className="my-12">
       <div className="aspect-video bg-black rounded-xl overflow-hidden border border-slate-700 relative group cursor-pointer flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.5)]">
         <div className="absolute inset-0 bg-brand-900/40 group-hover:bg-brand-900/20 transition-colors flex flex-col items-center justify-center">
            <div className="h-20 w-20 bg-brand-500/90 backdrop-blur rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">
               <Play className="h-8 w-8 text-white ml-1 fill-white" />
            </div>
         </div>
         <img src={`https://picsum.photos/800/450?blur=2`} alt="Video Thumbnail" className="w-full h-full object-cover opacity-50" />
       </div>
       {caption && <figcaption className="text-center text-slate-500 text-sm mt-4 italic">{caption}</figcaption>}
     </figure>
  );

  const renderChart = (data: ChartData[], caption?: string) => {
    const maxValue = Math.max(...data.map(d => d.value));
    return (
      <div className="my-14 bg-brand-800 p-8 rounded-xl border border-slate-700 shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl"></div>
        {caption && (
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700">
             <h4 className="text-white font-bold text-lg">{caption}</h4>
             <Hash className="h-5 w-5 text-brand-500" />
          </div>
        )}
        <div className="space-y-6">
          {data.map((d, idx) => (
            <div key={idx} className="group">
              <div className="flex justify-between text-sm text-slate-400 mb-2 font-medium tracking-wide">
                <span>{d.label}</span>
                <span className="text-white font-mono">${d.value}</span>
              </div>
              <div className="h-3 bg-brand-900 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full relative group-hover:shadow-[0_0_10px_rgba(96,165,250,0.6)] transition-all duration-1000 w-0 animate-slide-right"
                  style={{ width: `${(d.value / maxValue) * 100}%`, animationFillMode: 'forwards' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCallout = (content: string) => (
    <div className="my-12 relative pl-8 md:pl-0">
       <span className="hidden md:block absolute -left-6 -top-4 text-8xl text-brand-800 font-serif leading-none select-none z-0">"</span>
       <div className="relative z-10 bg-brand-800/50 border-l-4 border-brand-500 p-8 rounded-r-xl italic text-xl text-slate-200 leading-relaxed font-serif">
         {content}
       </div>
    </div>
  );

  const renderCta = (text: string, url: string) => (
    <div className="my-16 relative rounded-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-brand-500 transition-transform duration-500 group-hover:scale-105"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="relative z-10 p-10 flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Want to implement this strategy?</h3>
        <Link to={url} className="inline-flex items-center bg-white text-brand-900 font-bold py-4 px-10 rounded-full transition-all shadow-2xl hover:bg-slate-100 hover:scale-105">
          {text} <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );

  let paragraphCount = 0;

  return (
    <div className="bg-brand-900 min-h-screen text-slate-200 animate-fade-in">
      <SEO 
        title={post.seo.metaTitle}
        description={post.seo.metaDescription}
        schema={post.seo.schema}
      />

      {/* --- HERO HEADER --- */}
      <div className="relative h-[60vh] min-h-[500px] flex items-end pb-12 overflow-hidden">
         <div className="absolute inset-0 z-0">
           <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover filter brightness-50 contrast-125" />
           <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/60 to-transparent"></div>
         </div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link to={`/${currentLang}/blog`} className="inline-flex items-center text-brand-300 hover:text-white mb-6 transition-colors text-xs font-bold uppercase tracking-[0.2em] border border-brand-500/50 rounded-full px-4 py-2 bg-brand-900/50 backdrop-blur">
               <ChevronLeft className="h-3 w-3 mr-2" /> Back to Insights
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 pb-4 border-b border-white/20">
               <div className="flex-1">
                 <div className="flex items-center gap-3 mb-4">
                    <span className="bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">{post.category}</span>
                    <span className="text-slate-300 text-xs flex items-center gap-1"><Clock className="h-3 w-3"/> {post.readingTime}</span>
                 </div>
                 <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-0 drop-shadow-lg">{post.title}</h1>
               </div>
               
               <div className="flex items-center gap-4 bg-brand-900/80 backdrop-blur p-4 rounded-xl border border-white/10 min-w-[200px]">
                  <div className="h-12 w-12 rounded-full bg-brand-500 flex items-center justify-center text-xl font-bold text-white ring-2 ring-brand-400">
                    {post.author.avatar[0]}
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide font-bold">Written By</div>
                    <div className="text-white font-bold">{post.author.name}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: ARTICLE BODY (8 Columns) */}
          <article className="lg:col-span-8">

            {/* --- IN-ARTICLE TABLE OF CONTENTS --- */}
             {toc.length > 0 && (
                <nav className="mb-12 bg-brand-800/30 border-l-4 border-brand-500 rounded-r-xl p-6">
                    <h4 className="text-brand-400 font-bold uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
                        <List className="h-4 w-4" /> In this Article
                    </h4>
                    <ul className="space-y-2">
                         {toc.map((item, i) => (
                           <li key={i}>
                               <button 
                                 onClick={() => scrollToSection(item.id)}
                                 className={`text-left text-sm transition-colors hover:text-white ${
                                   item.level === 1 ? 'text-slate-200 font-semibold' : 'text-slate-400 pl-4'
                                 }`}
                               >
                                 {item.text}
                               </button>
                           </li>
                         ))}
                    </ul>
                </nav>
            )}

            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-brand-400 prose-a:no-underline hover:prose-a:underline">
              {post.blocks.map((block, idx) => {
                const blockId = `section-${idx}`;
                
                switch(block.type) {
                  case 'paragraph': 
                    const isFirst = paragraphCount === 0;
                    paragraphCount++;
                    return <div key={idx}>{renderParagraph(block.content as string, isFirst)}</div>;
                  case 'h2': return <div key={idx}>{renderH2(block.content as string, blockId)}</div>;
                  case 'h3': return <div key={idx}>{renderH3(block.content as string, blockId)}</div>;
                  case 'list': return <div key={idx}>{renderList(block.content as string[])}</div>;
                  case 'image': return <div key={idx}>{renderImage(block.content as string, block.alt, block.caption)}</div>;
                  case 'video': return <div key={idx}>{renderVideo(block.url || '', block.caption)}</div>;
                  case 'chart': return <div key={idx}>{renderChart(block.content as ChartData[], block.caption)}</div>;
                  case 'table': return <div key={idx}>{renderTable(block.content as TableData, block.caption)}</div>;
                  case 'callout': return <div key={idx}>{renderCallout(block.content as string)}</div>;
                  case 'cta': return <div key={idx}>{renderCta(block.content as string, block.url || '#')}</div>;
                  default: return null;
                }
              })}
            </div>

            {/* --- AUTHOR BIO (Enhanced) --- */}
            <div className="mt-20 p-8 bg-brand-800 rounded-2xl border border-slate-700 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-brand-500 to-blue-600 flex items-center justify-center text-3xl font-bold text-white border-4 border-brand-900 shadow-xl flex-shrink-0">
                    {post.author.avatar}
                </div>
                <div>
                    <h3 className="text-white font-bold text-xl mb-1">{post.author.name}</h3>
                    <div className="text-brand-400 text-sm font-semibold mb-4 uppercase tracking-wider">{post.author.role}</div>
                    <p className="text-slate-400 leading-relaxed mb-4">{post.author.bio}</p>
                    <div className="flex justify-center md:justify-start gap-4">
                         <button className="text-slate-500 hover:text-white"><Twitter className="h-5 w-5"/></button>
                         <button className="text-slate-500 hover:text-white"><Linkedin className="h-5 w-5"/></button>
                    </div>
                </div>
            </div>

            {/* --- PREV / NEXT NAVIGATION --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {prevPost ? (
                    <Link to={`/${currentLang}/blog/${prevPost.slug}`} className="group bg-brand-900 border border-slate-700 p-6 rounded-xl hover:border-brand-500 transition-colors text-right md:text-left">
                        <div className="text-xs text-brand-400 font-bold uppercase mb-2 flex items-center gap-2">
                           <ChevronLeft className="h-4 w-4" /> Previous Article
                        </div>
                        <div className="text-white font-bold group-hover:text-brand-400 transition-colors">{prevPost.title}</div>
                    </Link>
                ) : <div />}
                
                {nextPost ? (
                    <Link to={`/${currentLang}/blog/${nextPost.slug}`} className="group bg-brand-900 border border-slate-700 p-6 rounded-xl hover:border-brand-500 transition-colors text-right">
                        <div className="text-xs text-brand-400 font-bold uppercase mb-2 flex items-center justify-end gap-2">
                           Next Article <ArrowRight className="h-4 w-4" />
                        </div>
                        <div className="text-white font-bold group-hover:text-brand-400 transition-colors">{nextPost.title}</div>
                    </Link>
                ) : <div />}
            </div>

            {/* --- COMMENTS SECTION --- */}
            <div className="mt-20 pt-12 border-t border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-brand-500" /> Discussion
                </h3>
                
                {/* Comment List */}
                <div className="space-y-6 mb-12">
                    {commentsList.map((c, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-400 flex-shrink-0">
                                {c.name[0]}
                            </div>
                            <div className="bg-brand-800/50 p-4 rounded-xl rounded-tl-none border border-slate-700/50 flex-1">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-white font-bold text-sm">{c.name}</span>
                                    <span className="text-slate-500 text-xs">{c.date}</span>
                                </div>
                                <p className="text-slate-300 text-sm">{c.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} className="bg-brand-800 p-6 rounded-xl border border-slate-700">
                    <h4 className="text-white font-bold mb-4">Leave a Comment</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input 
                            type="text" 
                            placeholder="Your Name"
                            value={comment.name}
                            onChange={(e) => setComment({...comment, name: e.target.value})}
                            className="bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 w-full"
                        />
                         <input 
                            type="email" 
                            placeholder="Email (Private)"
                            className="bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 w-full"
                        />
                    </div>
                    <textarea 
                        rows={3}
                        placeholder="Join the discussion..."
                        value={comment.text}
                        onChange={(e) => setComment({...comment, text: e.target.value})}
                        className="bg-brand-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 w-full mb-4"
                    ></textarea>
                    <button className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                        <Send className="h-4 w-4" /> Post Comment
                    </button>
                </form>
            </div>

          </article>

          {/* RIGHT: SIDEBAR (4 Columns) */}
          <aside className="lg:col-span-4 space-y-12">
             <div className="sticky top-24 space-y-8">
                
                {/* 1. RELATED POSTS */}
                <div>
                   <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-slate-700 pb-2">Related Articles</h3>
                   <div className="space-y-6">
                     {relatedPosts.map(rp => (
                       <Link key={rp.id} to={`/${currentLang}/blog/${rp.slug}`} className="flex gap-4 group">
                         <div className="h-20 w-24 rounded-lg overflow-hidden flex-shrink-0">
                           <img src={rp.imageUrl} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                         </div>
                         <div>
                           <div className="text-xs text-brand-400 mb-1 font-bold">{rp.date}</div>
                           <h4 className="text-white font-semibold text-sm leading-tight group-hover:text-brand-400 transition-colors line-clamp-2">{rp.title}</h4>
                         </div>
                       </Link>
                     ))}
                   </div>
                </div>

                {/* 2. NEWSLETTER */}
                <div className="bg-gradient-to-br from-brand-500 to-blue-600 rounded-xl p-8 text-center shadow-lg relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-20"><Share2 className="h-24 w-24 text-white" /></div>
                   <h3 className="text-white font-bold text-xl mb-2 relative z-10">Market Intelligence</h3>
                   <p className="text-blue-100 text-sm mb-6 relative z-10">Join 2,000+ distributors receiving our monthly compliance & pricing reports.</p>
                   <Link to={`/${currentLang}/contact`} className="block w-full bg-white text-brand-600 font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors shadow-lg relative z-10">
                     Subscribe Free
                   </Link>
                </div>

             </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
