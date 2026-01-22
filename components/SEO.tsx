// components/SEO.tsx
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, keywords, lang, path }: any) => {
  const siteUrl = "https://arcadeskillgames.vercel.app";
  // ✅ 核心修复：确保 title 永远有一个字符串默认值，防止 Helmet 报错
  const displayTitle = title || "Product"; 
  const displayDesc = description || "High-quality arcade game equipment.";
  const currentFullUrl = `${siteUrl}/${lang}/${path || ''}`;

  return (
    <Helmet>
      <html lang={lang} />
      {/* ✅ 确保传给 title 的是一个明确的字符串 */}
      <title>{`${displayTitle} | Arcade Skill Games`}</title>
      <meta name="description" content={displayDesc} />
      {keywords && <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />}
      
      <link rel="canonical" href={currentFullUrl} />
      <link rel="alternate" hreflang="x-default" href={`${siteUrl}/en/${path || ''}`} />
    </Helmet>
  );
};