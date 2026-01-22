import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // ✅ 使用标准插件
import { LANGUAGES, DEFAULT_LANG } from '../utils/i18n';
import { LanguageCode } from '../types';

// 注意：这里建议直接使用 any 或者确保你的 SeoProps 包含 title, description, keywords, path
export const SEO = ({ title, description, keywords, path, schema }: any) => {
  const { lang } = useParams();
  const location = useLocation();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;

  // 基础域名 (根据你的 Vercel 分配地址或正式域名修改)
  const siteUrl = 'https://arcadeskillgames.vercel.app';
  
  // 路径清理逻辑：优先使用传入的 path，否则根据当前 URL 自动计算
  const rawPath = path || location.pathname.replace(`/${currentLang}`, '');
  const cleanPath = rawPath === '/' ? '' : (rawPath.startsWith('/') ? rawPath : `/${rawPath}`);
  
  const currentFullUrl = `${siteUrl}/${currentLang}${cleanPath}`;

  return (
    <Helmet>
      {/* 1. 基础 Meta 标签 */}
      <html lang={currentLang as string} />
      <title>{title} | Arcade Skill Games</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* 2. 规范链接 (Canonical URL) - 告诉 Google 哪一个是主页面 */}
      <link rel="canonical" href={currentFullUrl} />

      {/* 3. Open Graph 社交分享标签 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentFullUrl} />
      <meta property="og:locale" content={currentLang as string} />
      <meta property="og:type" content="website" />

      {/* 4. Hreflang 标签 - 核心出海 SEO，告知 Google 其他语言版本的存在 */}
      {LANGUAGES.map((l) => (
        <link 
          key={l.code}
          rel="alternate" 
          hreflang={l.code} 
          href={`${siteUrl}/${l.code}${cleanPath}`} 
        />
      ))}
      {/* 默认语言版本标签 */}
      <link 
        rel="alternate" 
        hreflang="x-default" 
        href={`${siteUrl}/${DEFAULT_LANG}${cleanPath}`} 
      />

      {/* 5. Schema.org 结构化数据 (坦克页产品抓取关键) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};