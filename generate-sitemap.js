const fs = require('fs');
const path = require('path');

// 1. 基础配置
const BASE_URL = 'https://arcadeskillgames.com'; // ⚠️ 确认域名无误
const LANGUAGES = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ru', 'ja', 'ko', 'ar'];

// 2. 静态页面（每个语言都有的固定页面）
const STATIC_PAGES = ['', '/about', '/products', '/solutions', '/blog', '/contact'];

// 3. 12 个行业 ID
const INDUSTRY_IDS = [
  'distributors', 'game-agents', 'custom-kits', 'game-rooms', 
  'arcades', 'gas-stations', 'convenience-stores', 'barbershops', 
  'tattoo-studios', 'laundromats', 'internet-cafes', 'lounges'
];

// 4. 🆕 博客文章 ID 列表
// 每当你写了新博客，在这里添加它的 URL 路径名 (Slug)
const BLOG_POST_IDS = [
  'how-to-increase-revenue-in-gas-stations',
  'trends-in-skill-gaming-2026',
  'compliance-guide-for-game-operators'
];

// 5. 产品 ID 列表
const PRODUCT_IDS = [
  'skill-game-board-m8s',
  'ultra-high-cabinet',
  'game-kits-v2'
];

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  LANGUAGES.forEach((lang) => {
    // A. 静态页面
    STATIC_PAGES.forEach((page) => {
      xml += `\n  <url><loc>${BASE_URL}/${lang}${page}</loc><priority>${page === '' ? '1.0' : '0.8'}</priority></url>`;
    });

    // B. 12个行业方案
    INDUSTRY_IDS.forEach((id) => {
      xml += `\n  <url><loc>${BASE_URL}/${lang}/solutions/${id}</loc><priority>0.9</priority></url>`;
    });

    // C. 🆕 博客详情页
    BLOG_POST_IDS.forEach((postId) => {
      xml += `\n  <url><loc>${BASE_URL}/${lang}/blog/${postId}</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>`;
    });

    // D. 产品详情页
    PRODUCT_IDS.forEach((productId) => {
      xml += `\n  <url><loc>${BASE_URL}/${lang}/products/${productId}</loc><priority>0.9</priority></url>`;
    });
  });

  xml += '\n</urlset>';

  const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
  if (!fs.existsSync(path.join(__dirname, 'public'))) fs.mkdirSync(path.join(__dirname, 'public'));
  
  fs.writeFileSync(outputPath, xml);
  console.log(`🚀 Sitemap fully updated! Total paths: ${LANGUAGES.length * (STATIC_PAGES.length + INDUSTRY_IDS.length + BLOG_POST_IDS.length + PRODUCT_IDS.length)}`);
}

generateSitemap();
