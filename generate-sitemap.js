import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 在 ESM 模式下手动定义 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://arcadeskillgames.com'; 
const LANGUAGES = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ru', 'ja', 'ko', 'ar'];
const STATIC_PAGES = ['', '/about', '/products', '/solutions', '/blog', '/contact'];
const INDUSTRY_IDS = ['distributors', 'game-agents', 'custom-kits', 'game-rooms', 'arcades', 'gas-stations', 'convenience-stores', 'barbershops', 'tattoo-studios', 'laundromats', 'internet-cafes', 'lounges'];

// 为了避免读取 blog.js 的导出冲突，建议在这里先手动维护 ID，或者后续将 blog 改为 json
const BLOG_POST_IDS = [
  'how-to-increase-revenue-in-gas-stations',
  'trends-in-skill-gaming-2026'
];

const PRODUCT_IDS = ['skill-game-board-m8s', 'ultra-high-cabinet', 'game-kits-v2'];

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  LANGUAGES.forEach((lang) => {
    STATIC_PAGES.forEach((page) => {
      xml += `\n  <url><loc>${BASE_URL}/${lang}${page}</loc><priority>${page === '' ? '1.0' : '0.8'}</priority></url>`;
    });
    INDUSTRY_IDS.forEach((id) => {
      xml += `\n  <url><loc>${BASE_URL}/${lang}/solutions/${id}</loc><priority>0.9</priority></url>`;
    });
    BLOG_POST_IDS.forEach((postId) => {
      xml += `\n  <url><loc>${BASE_URL}/${lang}/blog/${postId}</loc><priority>0.7</priority></url>`;
    });
    PRODUCT_IDS.forEach((productId) => {
      xml += `\n  <url><loc>${BASE_URL}/${lang}/products/${productId}</loc><priority>0.9</priority></url>`;
    });
  });

  xml += '\n</urlset>';
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log(`🚀 Sitemap generated successfully!`);
}

generateSitemap();
