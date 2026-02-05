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

const PRODUCT_IDS = [
  // Cabinets
  '4K-Titan-Vertical-Skill-43-cabinet',
  'j-curve-43-cabinet',
  'slant-top-43-curved',
  'vertical-43-cabinet-pro',
  'vertical-dual-screen-cabinet',
  'curved-elite-v2-arc',
  'slim-vertical-43-v5',
  'vertical-43-aura-v7',
  // Fish Tables
  'fish-table-98-10player',
  'fish-table-86-10player-dismantle',
  'fish-table-86-10player-welded',
  'fish-table-65-10player-royal-welded',
  'fish-table-86-10player-royal-welded',
  'fish-table-86-10player-royal-v2-welded',
  'fish-table-8-classic-welded',
  // Game Boards & Software
  'fish-game-board-5in1-elite',
  'fish-game-board-airstrike-2-elite',
  'fish-game-board-crab-king-2-elite',
  'fish-game-board-airstrike-3-elite',
  'fish-game-board-crab-king-3-ultra',
  'fish-game-board-crab-king-classic',
  'fish-game-board-crab-king-plus',
  'fish-game-board-fire-kirin-2-elite',
  'fish-game-board-fire-kirin-3-elite',
  'fish-game-board-fire-kirin-plus',
  'fish-game-board-fire-kirin-revenge-elite',
  'fish-game-board-mermaid-warrior-3-elite',
  'fish-game-board-monkey-king-strike-elite',
  'fish-game-board-ocean-monster-3-elite',
  'fish-game-board-panda-vs-alien-elite',
  'fish-game-board-thunder-wings-elite',
  'skill-based-game-board-golden-empires-777',
  'skill-based-game-board-lunars-quest-777',
  'skill-based-game-board-golden-empires-multi',
  'universal-game-logic-board-xtreme-skill-777',
  'nudge-game-board-lunars-quest',
  'redemption-game-PCB-wild-link',
  'nudge-game-board-panda-link',
  'universal-game-logic-board-xtreme-link',
  'skill-based-game-board-panda-link-ii-777'
];

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
