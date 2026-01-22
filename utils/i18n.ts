// src/utils/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LanguageCode } from '../types';

// 1. 导出语言列表
export const LANGUAGES: { code: LanguageCode; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

// 2. 导出默认语言 (解决你之前的 Vercel 报错)
export const DEFAULT_LANG: LanguageCode = 'en';

// 3. 将你的翻译字典填入 resources 结构中
const resources = {
  en: {
    translation: {
        // Nav
    'nav.home': 'Home', 
    'nav.about': 'About Us', 
    'nav.products': 'Products', 
    'nav.cat.machines': 'Skill-Based Game Board', 
    'nav.cat.cabinets': 'Empty Cabinets', 
    'nav.cat.boards': 'Game Kits / Boards', 
    'nav.solutions': 'Venue Solutions', 
    'nav.blog': 'Market Insights', 
    'nav.contact': 'Contact',
    
    // Tank Page UI Labels
    'tank.pain.title': 'The Challenge',
    'tank.pain.subtitle': 'Why traditional revenue models are failing this sector.',
    'tank.stats.title': 'Market Impact',
    'tank.compare.title': 'Why Skill Games Win',
    'tank.compare.us': 'With Arcade Skill Games',
    'tank.compare.them': 'Alternative / Competitors',
    'tank.guide.title': 'Buyer\'s Guide: How to Start',
    'tank.faq.title': 'Frequently Asked Questions',
    'tank.testi.title': 'Success Stories',
    'tank.cta.sticky': 'Get a Quote',
    
    // ... existing keys ...
    'cat.desc.machines': 'Turnkey solutions for venue owners. Includes cabinet, monitor, game board, harness, and bill validator. Plug & Play ready for Gas Stations and Game Rooms.',
    'cat.desc.cabinets': 'High-security metal and wood enclosures. Pre-wired (JAMMA/Pulse) for distributors who have their own software. No game board included.',
    'cat.desc.boards': 'PCB upgrades and software kits. Replace old games with high-retention Nudge or Fish Hunter titles. Includes I/O board and manual.',
    'hero.title': 'Manufacturer of High-Performance Skill Games',
    'hero.subtitle': 'Direct from our 25-year R&D Factory. We engineer compliant Nudge, Shooting, and Reflex-based amusement machines designed for high player engagement and stable ROI.',
    'cta.explore': 'View Skill Cabinets', 'cta.distributor': 'OEM/ODM Services',
    'sol.page.title': 'Industry Solutions',
    'sol.page.subtitle': 'Select your business type below. We have specialized revenue models for every environment.',
    'sol.dist.title': 'Game Distributors',
    'sol.dist.audience': 'Wholesalers, Import/Export',
    'sol.dist.desc': 'Source directly from the factory. High-volume discounts on containers of empty cabinets or skill based game board.',
    'sol.dist.full': 'As a master distributor, you need reliable supply chains and margin protection. We offer container-load pricing, priority spare parts shipping, and unbranded "White Label" cabinets so you can build your own brand identity.',
    'sol.agent.title': 'Game Agents',
    'sol.agent.audience': 'Route Operators, Regional Agents',
    'sol.agent.desc': 'Manage your territory with exclusive game titles. We protect your region with software-locked location codes.',
    'sol.agent.full': 'Protect your route. Our software allows Agents to set "Location Codes" preventing machines from being moved or operated by competitors. We offer robust backend accounting tools to manage revenue splits with your venue partners.',
    'sol.custom.title': 'Custom Game Kit Owners',
    'sol.custom.audience': 'Proprietary Venues, Brand Owners',
    'sol.custom.desc': 'Your Brand, Your Game. We develop custom software skins and math models for venue owners who want exclusivity.',
    'sol.custom.full': 'Stop offering the same generic games as the shop next door. We can reskin our proven "Nudge" or "Fish" engines with your venue\'s logo, custom sound effects, and unique jackpot structures. Own the experience.',
    'sol.gameroom.title': 'Game Rooms',
    'sol.gameroom.audience': 'Dedicated Adult Gaming Centers',
    'sol.gameroom.desc': 'Maximize floor revenue. Our linked Vertical Cabinet banks create a casino-style atmosphere.',
    'sol.gameroom.full': 'For dedicated game rooms, visual impact is key. Our "Link-Ready" vertical cabinets can be banked together with a shared Progressive Jackpot sign, driving higher player engagement and longer session times.',
    'sol.arcade.title': 'Arcade Venues',
    'sol.arcade.audience': 'FECs, Family Arcades, Boardwalks',
    'sol.arcade.desc': 'High-energy multiplayer attractions. Fish Hunter tables that support 4, 6, 8, or 10 simultaneous players.',
    'sol.arcade.full': 'Arcades thrive on social excitement. Our large-format Fish Tables act as the centerpiece of your floor. They are ticket-redemption ready and feature "Boss Battles" that encourage cooperative play among groups of friends.',
    'sol.gas.title': 'Gas Stations',
    'sol.gas.audience': 'Fuel Stations, Truck Stops',
    'sol.gas.desc': 'Turn small corners into profit centers. Compact cabinets designed for high-traffic, quick-turnover environments.',
    'sol.gas.full': 'Gas station customers are in a hurry. Our "Quick-Play" software logic is tuned for fast sessions. The cabinets are reinforced with steel security bars and dual-locks to ensure safety in 24-hour unattended environments.',
    'sol.cstore.title': 'Convenience Stores',
    'sol.cstore.audience': 'C-Stores, Bodegas, Mini-Marts',
    'sol.cstore.desc': 'Impulse entertainment. Countertop kiosks and slim vertical units that fit near the checkout counter.',
    'sol.cstore.full': 'Maximize your counter space. Our Countertop Skill Kiosks take up zero floor space but capture the change from cash transactions. Perfect for upsells and increasing customer dwell time in-store.',
    'sol.barber.title': 'Barbershops',
    'sol.barber.audience': 'Barbers, Salons',
    'sol.barber.desc': 'Monetize the wait. Keep customers entertained while they wait for their haircut.',
    'sol.barber.full': 'Waiting is boring. Turn that dead time into revenue. A vertical skill cabinet in your waiting area not only generates extra cash flow but keeps customers happy and engaged while they wait for a chair to open.',
    'sol.tattoo.title': 'Tattoo Studios',
    'sol.tattoo.audience': 'Tattoo & Piercing Shops',
    'sol.tattoo.desc': 'Edgy games for edgy environments. High-volatility skill games that match your shop\'s aesthetic.',
    'sol.tattoo.full': 'Your clients spend hours in the chair or waiting for friends. Our machines feature darker, sharper graphics themes (e.g., Zombies, Dragons) that fit perfectly with the tattoo studio vibe, offering high-stakes skill challenges.',
    'sol.laundry.title': 'Laundromats',
    'sol.laundry.audience': 'Coin Laundry, Washaterias',
    'sol.laundry.desc': 'The ultimate dwell-time location. Customers are stuck for 45 minutes—give them something fun to do.',
    'sol.laundry.full': 'Laundromats have the highest captive audience dwell time of any street location. Our data shows that laundromat players have long session times. We recommend comfortable "Sit-Down" cabinets for these locations.',
    'sol.cafe.title': 'Internet Cafes',
    'sol.cafe.audience': 'Cyber Cafes, LAN Centers',
    'sol.cafe.desc': 'Add variety to your PC lineup. Skill games provide a break from competitive esports gaming.',
    'sol.cafe.full': 'Diversify your revenue. While PC rentals have low margins, skill games offer high ROI. Place a row of Nudge machines behind your PC stations to capture revenue from gamers taking a break between matches.',
    'sol.lounge.title': 'Entertainment Lounges',
    'sol.lounge.audience': 'Private Clubs, VIP Lounges, Hookah Bars',
    'sol.lounge.desc': 'Premium furniture-grade cabinets. 4K screens and ergonomic seating for a VIP experience.',
    'sol.lounge.full': 'For upscale lounges, the machine must look as good as the decor. We offer luxury "Slant-Top" cabinets with leather armrests, gold-trim finishes, and 4K ultra-HD screens that complement a high-end atmosphere.',
    'home.f1.title': '100% Skill-Based Mechanics', 'home.f1.desc': 'Our software relies strictly on player dexterity, strategy, and reaction time. Zero "chance" elements, ensuring legal operation in skill-regulated markets.',
    'home.f2.title': 'Factory Direct Support', 'home.f2.desc': 'Stop waiting for middlemen. We manufacture every component. Get instant access to spare parts, technical schematics, and 24/7 engineering support.',
    'home.f3.title': 'Proven Revenue Models', 'home.f3.desc': 'From Gas Stations to Game Rooms, our cabinets are built to maximize dwell time and replay value through engaging, competitive gameplay.',
    'home.top_performers': 'Top Rated Amusement Machines', 'home.top_performers_sub': 'Precision-engineered hardware for demanding commercial environments.', 
    'home.view_all': 'View Manufacturing Catalog', 'home.learn_details': 'Tech Specs',
    'about.title': '25 Years of Game R&D Excellence', 
    'about.intro': 'We are not just a reseller. We are the architects of the modern skill gaming industry.',
    'about.mission': 'Engineering Entertainment', 'about.mission.desc': 'Our in-house team develops proprietary game boards that blend stunning graphics with legitimate skill challenges.',
    'about.vision': 'Global Compliance', 'about.vision.desc': 'We customize software parameters to meet specific regulations in PA, GA, VA, and international markets.',
    'about.why': 'The Factory Advantage', 'about.exp': 'In-House Manufacturing', 'about.comp': 'Custom Software Dev', 'about.supp': 'Direct Parts Supply',
    'contact.title': 'Partner with the Manufacturer', 'contact.subtitle': 'Eliminate agent fees. Get factory-direct pricing for your route or venue.',
    'contact.name': 'Contact Name', 'contact.email': 'Business Email', 
    'contact.phone': 'Phone / WhatsApp',
    'contact.message': 'Describe your venue or distribution needs (e.g., Custom software request, Bulk order)...', 
    'contact.send': 'SEND',
    'contact.ai.title': 'Venue Optimization AI', 'contact.ai.desc': 'Analyze your floor plan to find the perfect skill game mix.',
    'blog.read_more': 'Read Technical Brief',
    'prod.p1.name': 'Titan Vertical Skill Machine', 
    'prod.p1.desc': 'COMPLETE UNIT. A premium 43" amusement terminal. Features the "Nudge" skill engine where players must manually align symbols. Includes ICT bill acceptor and printer. Ready to operate.',
    'prod.p2.name': 'Ocean King 3: Strategic Hunter (Kit)', 
    'prod.p2.desc': 'GAME BOARD ONLY. PCB Upgrade kit for existing fish tables. 100% Skill: Players use aim and timing to capture targets. Compatible with standard I/O Keypads and Joysticks.',
    'prod.p3.name': 'Reflex Countertop Kiosk', 
    'prod.p3.desc': 'COMPLETE UNIT. Compact bar-top machine. Players rely on reaction speed to stop the light on the prize. Zero footprint design for bars.',
    'prod.p4.name': 'Vegas-Style Steel Cabinet', 
    'prod.p4.desc': 'EMPTY CABINET. Reinforced steel body security enclosure. Pre-wired dual harness (36/10 pin). Ready for your proprietary game board installation. No monitor included.',
    'blog.b1.title': 'Defining "Skill": The Legal Distinction', 'blog.b1.excerpt': 'How Nudge and Shooting mechanics separate amusement devices from prohibited gambling machines.',
    'blog.b2.title': 'Maintenance Guide: Reducing Downtime', 'blog.b2.excerpt': 'Factory tips for keeping your bill acceptors and touchscreens in peak condition.',
    'blog.b3.title': 'The Psychology of Replay', 'blog.b3.excerpt': 'Why players prefer games where their actions directly control the outcome.',
    }
  },
  es: {
    translation: {
    'nav.home': 'Inicio', 
    'nav.solutions': 'Soluciones',
    'sol.page.title': 'Soluciones Comerciales',
    'tank.pain.title': 'El Desafío',
    'tank.stats.title': 'Impacto de Mercado',
    'tank.compare.title': 'Por qué Ganamos',
    // ... basic mapping
    }
  }
};

// 4. 标准化初始化 (让 i18next 接管路由识别)
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANG,
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      lookupFromPathIndex: 0 // 核心：从 URL 的第一位识别语言，如 /en/product/...
    },
    interpolation: {
      escapeValue: false 
    }
  });

// 5. 保留这个工具函数，防止其他组件报错
export function isLanguageCode(code: string): code is LanguageCode {
  return LANGUAGES.some(l => l.code === code);
}


// utils/i18n.ts

// ... 前面的 i18n.init 代码保持不变 ...

/**
 * ✅ 核心修复：手动导出 t 函数，供 data.ts 等逻辑文件使用
 * 它会根据传入的 lang 参数，从 i18next 引擎中提取对应的翻译内容
 */
export const t = (lang: string, key: string): string => {
  return i18n.t(key, { lng: lang });
};

export function isLanguageCode(code: string): code is LanguageCode {
  return LANGUAGES.some(l => l.code === code);
}
export default i18n;