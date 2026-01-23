import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LanguageCode } from '../types';

// 1. 导出 10 种目标语言列表 (已移除中文)
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

export const DEFAULT_LANG: LanguageCode = 'en';

// 2. 翻译字典 - 补全所有缺失的 Key 以修复截图中的原始代码显示问题
const resources = {
  en: {
    translation: {
      // 导航栏
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.products': 'Products',
      'nav.solutions': 'Venue Solutions',
      'nav.blog': 'Market Insights', // ✅ 修复 nav.blog 显示问题
      'nav.contact': 'Contact',
      'nav.cat.machines': 'Skill-Based Game Board',
      'nav.cat.cabinets': 'Empty Cabinets',
      'nav.cat.boards': 'Game Kits / Boards',

      // 首页 & 通用
      'hero.title': 'Manufacturer of High-Performance Skill Games',
      'hero.subtitle': 'Direct from our 25-year R&D Factory. We engineer compliant Nudge, Shooting, and Reflex-based amusement machines.', // ✅ 修复 hero.subtitle
      'tank.cta.sticky': 'Get a Quote', // ✅ 修复 tank.cta.sticky
      'sol.common.view_strategy': 'View Strategy Details',

      // 坦克页通用模块
      'tank.pain.title': 'The Challenge',
      'tank.pain.subtitle': 'Why traditional models are failing this sector.',
      'tank.stats.title': 'Market Impact',
      'tank.compare.title': 'Why Skill Games Win',
      'tank.compare.us': 'With Arcade Skill Games',
      'tank.guide.title': "Buyer's Guide",
      'tank.faq.title': 'Frequently Asked Questions',
      'tank.testi.title': 'Success Stories',

      // 12 类目标客户方案内容
      'sol.page.title': 'Industry Solutions',
      'sol.page.subtitle': 'Industry-specific gaming solutions to maximize your floor revenue.',
      'sol.distributor.title': 'Game Distributors', 'sol.distributor.desc': 'Factory-direct wholesale and global logistics.', 'sol.distributor.audience': 'Distributors',
      'sol.agent.title': 'Game Agents', 'sol.agent.desc': 'Advanced route management and territory protection.', 'sol.agent.audience': 'Operators',
      'sol.custom.title': 'Custom Kits / Private Labels', 'sol.custom.desc': 'Tailored software and branding for venue owners.', 'sol.custom.audience': 'Venue Owners',
      'sol.gameroom.title': 'Game Rooms', 'sol.gameroom.desc': 'Turnkey skill-game setups for dedicated venues.',
      'sol.arcade.title': 'Arcade Venues', 'sol.arcade.desc': 'High-durability cabinets for entertainment centers.',
      'sol.gas.title': 'Gas Stations', 'sol.gas.desc': 'High-earning machines for travel center optimization.',
      'sol.cstore.title': 'Convenience Stores', 'sol.cstore.desc': 'Maximize small-footprint ROI with compliant gaming.',
      'sol.barber.title': 'Barbershops', 'sol.barber.desc': 'Entertainment for clients to boost passive income.',
      'sol.tattoo.title': 'Tattoo Studios', 'sol.tattoo.desc': 'Premium entertainment for wait-times in studios.',
      'sol.laundry.title': 'Laundromats', 'sol.laundry.desc': 'Turn laundry wait-time into consistent revenue.',
      'sol.icafe.title': 'Internet Cafes', 'sol.icafe.desc': 'Diversify offerings with skill-based hardware.',
      'sol.lounge.title': 'Entertainment Lounges', 'sol.lounge.desc': 'Enhance atmosphere with competitive skill play.',
    }
  },
  es: { // 西语 (同理补全 nav.blog 等)
    translation: {
      'nav.home': 'Inicio', 'nav.solutions': 'Soluciones', 'nav.blog': 'Perspectiva del mercado',
      'sol.page.title': 'Soluciones Comerciales', 'tank.cta.sticky': 'Solicitar presupuesto',
      'sol.distributor.title': 'Distribuidores', 'sol.laundry.title': 'Lavanderías'
    }
  },
  // 其他语种建议至少补全 nav.blog 和 sol.page.title 确保导航不崩
  fr: { translation: { 'nav.home': 'Accueil', 'nav.solutions': 'Solutions', 'nav.blog': 'Aperçu du marché', 'sol.page.title': 'Solutions de Sites' } },
  de: { translation: { 'nav.home': 'Startseite', 'nav.solutions': 'Lösungen', 'nav.blog': 'Markteinblicke', 'sol.page.title': 'Standortlösungen' } },
  pt: { translation: { 'nav.home': 'Início', 'nav.solutions': 'Soluções', 'nav.blog': 'Insights de mercado', 'sol.page.title': 'Soluções para Locais' } },
  it: { translation: { 'nav.home': 'Home', 'nav.solutions': 'Soluzioni', 'nav.blog': 'Approfondimenti', 'sol.page.title': 'Soluzioni per Sedi' } },
  ru: { translation: { 'nav.home': 'Главная', 'nav.solutions': 'Решения', 'nav.blog': 'Обзор рынка', 'sol.page.title': 'Решения для площадок' } },
  ja: { translation: { 'nav.home': 'ホーム', 'nav.solutions': 'ソリューション', 'nav.blog': '市場の洞察', 'sol.page.title': '会場別ソリューション' } },
  ko: { translation: { 'nav.home': '홈', 'nav.solutions': '솔루션', 'nav.blog': '시장 인사이트', 'sol.page.title': '장소 솔루션' } },
  ar: { translation: { 'nav.home': 'الرئيسية', 'nav.solutions': 'الحلول', 'nav.blog': 'رؤى السوق', 'sol.page.title': 'حلول المواقع' } }
};

// 3. 标准化初始化
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANG,
    react: { useSuspense: false },
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      lookupFromPathIndex: 0
    },
    interpolation: { escapeValue: false }
  });

// 4. 导出逻辑函数
export const t = (lang: string, key: string): string => {
  return i18n.t(key, { lng: lang });
};

export function isLanguageCode(code: string): code is LanguageCode {
  return LANGUAGES.some(l => l.code === code);
}

export default i18n;