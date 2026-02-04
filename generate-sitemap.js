const fs = require('fs');
const path = require('path');

// 1. 基础配置
const BASE_URL = 'https://arcadeskillgames.com'; 
const LANGUAGES = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ru', 'ja', 'ko', 'ar'];

// 2. 静态页面
const STATIC_PAGES = ['', '/about', '/products', '/solutions', '/blog', '/contact'];

// 3. 12 个行业 ID
const INDUSTRY_IDS = [
  'distributors', 'game-agents', 'custom-kits', 'game-rooms', 
  'arcades', 'gas-stations', 'convenience-stores', 'barbershops', 
  'tattoo-studios', 'laundromats', 'internet-cafes', 'lounges'
];

// 4. 🆕 动态读取博客文章 ID
let BLOG_POST_IDS = [];
try {
  // ⚠️ 注意：Node.js 环境下 require 要求文件使用 module.exports 导出
  const blogData = require('./src/data/blog.js'); 
  BLOG_POST_IDS = blogData.map(post => post.id);
  console.log(`📖 Successfully loaded ${BLOG_POST_IDS.length} blog posts from blog.js`);
} catch (e) {
  console.log('⚠️ 自动读取 blog.js 失败。可能原因：路径不正确、文件不存在或格式非 CommonJS。');
  // 备用方案：如果读取失败，手动保留几个核心页面
  BLOG_POST_IDS = ['how-to-increase-revenue-in-gas-stations', 'trends-in-skill-gaming-2026'];
}

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

    // C. 博客详情页 (动态生成的列表)
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
  
  // 确保目录存在
  if (!fs.existsSync(path.join(__dirname, 'public'))) {
    fs.mkdirSync(path.join(__dirname, 'public'));
  }
  
  fs.writeFileSync(outputPath, xml);
  const totalUrls = LANGUAGES.length * (STATIC_PAGES.length + INDUSTRY_IDS.length + BLOG_POST_IDS.length + PRODUCT_IDS.length);
  console.log(`🚀 Sitemap fully updated! Total paths generated: ${totalUrls}`);
}

generateSitemap();
