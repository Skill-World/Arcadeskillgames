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

// 2. 导出默认语言
export const DEFAULT_LANG: LanguageCode = 'en';

// 3. 翻译字典
const resources = {
  en: {
    translation: {
      'nav.home': 'Home', 
      'nav.about': 'About Us', 
      'nav.products': 'Products', 
      'nav.cat.machines': 'Skill-Based Game Board', 
      'nav.cat.cabinets': 'Empty Cabinets', 
      'nav.cat.boards': 'Game Kits / Boards', 
      'nav.solutions': 'Venue Solutions', 
      'nav.blog': 'Market Insights', 
      'nav.contact': 'Contact',
      'tank.pain.title': 'The Challenge',
      'tank.pain.subtitle': 'Why traditional revenue models are failing this sector.',
      'tank.stats.title': 'Market Impact',
      'tank.compare.title': 'Why Skill Games Win',
      'tank.compare.us': 'With Arcade Skill Games',
      'tank.compare.them': 'Alternative / Competitors',
      'tank.guide.title': "Buyer's Guide: How to Start",
      'tank.faq.title': 'Frequently Asked Questions',
      'tank.testi.title': 'Success Stories',
      'tank.cta.sticky': 'Get a Quote',
      'cat.desc.machines': 'Turnkey solutions for venue owners. Includes cabinet, monitor, game board, harness, and bill validator. Plug & Play ready for Gas Stations and Game Rooms.',
      'cat.desc.cabinets': 'High-security metal and wood enclosures. Pre-wired (JAMMA/Pulse) for distributors who have their own software. No game board included.',
      'cat.desc.boards': 'PCB upgrades and software kits. Replace old games with high-retention Nudge or Fish Hunter titles. Includes I/O board and manual.',
      'hero.title': 'Manufacturer of High-Performance Skill Games',
      'hero.subtitle': 'Direct from our 25-year R&D Factory. We engineer compliant Nudge, Shooting, and Reflex-based amusement machines designed for high player engagement and stable ROI.',
      'cta.explore': 'View Skill Cabinets', 
      'cta.distributor': 'OEM/ODM Services',
      'sol.page.title': 'Industry Solutions',
      'sol.page.subtitle': 'Select your business type below. We have specialized revenue models for every environment.',
      'home.f1.title': '100% Skill-Based Mechanics', 
      'home.f1.desc': 'Our software relies strictly on player dexterity, strategy, and reaction time. Zero "chance" elements, ensuring legal operation in skill-regulated markets.',
      'home.f2.title': 'Factory Direct Support', 
      'home.f2.desc': 'Stop waiting for middlemen. We manufacture every component. Get instant access to spare parts, technical schematics, and 24/7 engineering support.',
      'home.f3.title': 'Proven Revenue Models', 
      'home.f3.desc': 'From Gas Stations to Game Rooms, our cabinets are built to maximize dwell time and replay value through engaging, competitive gameplay.',
      'home.top_performers': 'Top Rated Amusement Machines', 
      'home.top_performers_sub': 'Precision-engineered hardware for demanding commercial environments.', 
      'home.view_all': 'View Manufacturing Catalog', 
      'home.learn_details': 'Tech Specs',
      'about.title': '25 Years of Game R&D Excellence', 
      'about.intro': 'We are not just a reseller. We are the architects of the modern skill gaming industry.',
      'contact.title': 'Partner with the Manufacturer', 
      'contact.subtitle': 'Eliminate agent fees. Get factory-direct pricing for your route or venue.',
      'prod.p1.name': 'Titan Vertical Skill Machine', 
      'prod.p1.desc': 'COMPLETE UNIT. A premium 43" amusement terminal. Features the "Nudge" skill engine where players must manually align symbols. Includes ICT bill acceptor and printer. Ready to operate.',
      'blog.b1.title': 'Defining "Skill": The Legal Distinction',
      'blog.b3.title': 'The Psychology of Replay', 
      'blog.b3.excerpt': 'Why players prefer games where their actions directly control the outcome.',
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
    }
  }
};

// 4. 标准化初始化
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANG,
    react: { useSuspense: false }, // ✅ 必须加，防止白屏
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      lookupFromPathIndex: 0
    },
    interpolation: {
      escapeValue: false 
    }
  });

// 5. 导出逻辑函数
/**
 * 导出兼容 data.ts 的 t 函数
 */
export const t = (lang: string, key: string): string => {
  return i18n.t(key, { lng: lang });
};

/**
 * 语言校验函数
 */
export function isLanguageCode(code: string): code is LanguageCode {
  return LANGUAGES.some(l => l.code === code);
}

export default i18n;