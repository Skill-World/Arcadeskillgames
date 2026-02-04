import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LanguageCode } from '../types';

// 1. 导出 10 种目标语言列表
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

// 2. 翻译字典
const resources = {
  // --- 🇺🇸 English (Base - 保持您的原始代码不变) ---
  en: {
    translation: {
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.products': 'Products',
      'nav.solutions': 'Venue Solutions',
      'nav.blog': 'Market Insights',
      'nav.contact': 'Contact',
      'nav.cat.machines': 'Skill-Based Game Board',
      'nav.cat.cabinets': 'Empty Cabinets',
      'nav.cat.boards': 'Game Kits / Boards',
      'hero.title': 'Manufacturer of High-Performance Skill Games',
      'hero.subtitle': 'Direct from our 28-year R&D Factory. We engineer compliant Nudge, Shooting, and Reflex-based amusement machines.',
      'tank.cta.sticky': 'Get a Quote',
      'sol.common.view_strategy': 'View Strategy Details',
      'about.title': 'The Source Behind Fire Kirin',
      'about.mission': 'Our Mission',
      'about.mission.desc': 'Engineering high-performance skill-based entertainment that rewards strategy and reflexes.',
      'about.vision': 'Our Vision',
      'about.vision.desc': 'Leading the global amusement market with 100% compliant, proprietary game logic.',
      'about.why': 'Why Factory Direct Matters',
      'about.exp': '28 Years of R&D Power',
      'about.comp': 'Custom Compliance Engineering',
      'about.supp': 'Direct Factory Support',
      'contact.name': 'Your Name',
      'contact.email': 'Email Address',
      'contact.phone': 'Phone Number',
      'contact.message': 'Message Details',
      'contact.ai.title': 'Game Venue Solution Support',
      'contact.ai.desc': 'Our system matches you with the best engineer based on your venue type.',
      'CONTACT.SEND': 'Contact Support Team',
      'sol.page.title': 'Industry Solutions',
      'sol.page.subtitle': 'Industry-specific gaming solutions to maximize your floor revenue.',
      'sol.distributor.title': 'Game Distributors', 'sol.distributor.desc': 'Factory-direct wholesale and global logistics.',
      'sol.agent.title': 'Game Agents', 'sol.agent.desc': 'Advanced route management and territory protection.',
      'sol.custom.title': 'Custom Kits / Private Labels', 'sol.custom.desc': 'Tailored software and branding for venue owners.',
      'sol.gameroom.title': 'Game Rooms', 'sol.gameroom.desc': 'Turnkey skill-game setups for dedicated venues.',
      'sol.arcade.title': 'Arcade Venues', 'sol.arcade.desc': 'High-durability cabinets for entertainment centers.',
      'sol.gas.title': 'Gas Stations', 'sol.gas.desc': 'High-earning machines for travel center optimization.',
      'sol.cstore.title': 'Convenience Stores', 'sol.cstore.desc': 'Maximize small-footprint ROI with compliant gaming.',
      'sol.barber.title': 'Barbershops', 'sol.barber.desc': 'Entertainment for clients to boost passive income.',
      'sol.tattoo.title': 'Tattoo Studios', 'sol.tattoo.desc': 'Premium entertainment for wait-times in studios.',
      'sol.laundry.title': 'Laundromats', 'sol.laundry.desc': 'Turn laundry wait-time into consistent revenue.',
      'sol.icafe.title': 'Internet Cafes', 'sol.icafe.desc': 'Diversify offerings with skill-based hardware.',
      'sol.lounge.title': 'Entertainment Lounges', 'sol.lounge.desc': 'Enhance atmosphere with competitive skill play.',
      'tank.pain.title': 'The Challenge',
      'tank.pain.subtitle': 'Why traditional models are failing this sector.',
      'tank.stats.title': 'Market Impact',
      'tank.compare.title': 'Why Skill Games Win',
      'tank.compare.us': 'With Arcade Skill Games',
      'tank.guide.title': "Buyer's Guide",
      'tank.faq.title': 'Frequently Asked Questions',
      'tank.testi.title': 'Success Stories',
    }
  },

  // --- 🇪🇸 Español ---
  es: {
    translation: {
      'nav.home': 'Inicio', 'nav.about': 'Nosotros', 'nav.products': 'Productos', 'nav.solutions': 'Soluciones', 'nav.blog': 'Perspectiva del mercado', 'nav.contact': 'Contacto',
      'hero.title': 'Fabricante de juegos de habilidad de alto rendimiento',
      'tank.cta.sticky': 'Solicitar presupuesto',
      'contact.ai.title': 'Especialista en Configuración IA',
      'CONTACT.SEND': 'Contactar Soporte',
      'sol.page.title': 'Soluciones Industriales',
      'sol.gas.title': 'Gasolineras', 'sol.arcade.title': 'Arcades', 'sol.lounge.title': 'Salones de Relax', 'sol.barber.title': 'Barberías',
      'sol.cstore.title': 'Tiendas de Conveniencia', 'sol.tattoo.title': 'Estudios de Tatuaje', 'sol.laundry.title': 'Lavanderías',
      'sol.distributor.desc': 'Factory-direct wholesale and global logistics support for bulk buyers.',
    }
  },

  // --- 🇫🇷 Français ---
  fr: {
    translation: {
      'nav.home': 'Accueil', 'nav.about': 'À Propos', 'nav.products': 'Produits', 'nav.solutions': 'Solutions', 'nav.blog': 'Aperçu du marché', 'nav.contact': 'Contact',
      'hero.title': 'Fabricant de jeux de compétence haute performance',
      'tank.cta.sticky': 'Obtenir un devis',
      'CONTACT.SEND': 'Contacter Support',
      'sol.page.title': 'Solutions de Sites',
      'sol.gas.title': 'Stations-service', 'sol.arcade.title': 'Arcades', 'sol.lounge.title': 'Salons VIP',
    }
  },

  // --- 🇩🇪 Deutsch ---
  de: {
    translation: {
      'nav.home': 'Startseite', 'nav.about': 'Über uns', 'nav.products': 'Produkte', 'nav.solutions': 'Standortlösungen', 'nav.blog': 'Markteinblicke', 'nav.contact': 'Kontakt',
      'hero.title': 'Hersteller von Hochleistungs-Skill-Games',
      'tank.cta.sticky': 'Angebot anfordern',
      'CONTACT.SEND': 'Support kontaktieren',
      'sol.page.title': 'Branchenlösungen',
      'sol.gas.title': 'Tankstellen', 'sol.arcade.title': 'Spielhallen', 'sol.lounge.title': 'Lounges',
    }
  },

  // --- 🇵🇹 Português ---
  pt: {
    translation: {
      'nav.home': 'Início', 'nav.about': 'Sobre Nós', 'nav.products': 'Produtos', 'nav.solutions': 'Soluções', 'nav.blog': 'Insights de mercado', 'nav.contact': 'Contato',
      'hero.title': 'Fabricante de Jogos de Habilidade de Alto Desempenho',
      'tank.cta.sticky': 'Solicitar orçamento',
      'CONTACT.SEND': 'Contatar Suporte',
      'sol.page.title': 'Soluções para Locais',
      'sol.gas.title': 'Postos de Gasolina', 'sol.arcade.title': 'Arcades', 'sol.lounge.title': 'Lounges',
    }
  },

  // --- 🇮🇹 Italiano ---
  it: {
    translation: {
      'nav.home': 'Home', 'nav.about': 'Chi Siamo', 'nav.products': 'Prodotti', 'nav.solutions': 'Soluzioni per Sedi', 'nav.blog': 'Approfondimenti', 'nav.contact': 'Contatti',
      'hero.title': 'Produttore di Skill Game ad Alte Prestazioni',
      'tank.cta.sticky': 'Ottieni un preventivo',
      'CONTACT.SEND': 'Contatta Supporto',
      'sol.page.title': 'Soluzioni Industriali',
      'sol.gas.title': 'Stazioni di Servizio', 'sol.arcade.title': 'Sale Giochi', 'sol.lounge.title': 'Sale Lounge',
    }
  },

  // --- 🇷🇺 Русский ---
  ru: {
    translation: {
      'nav.home': 'Главная', 'nav.about': 'О нас', 'nav.products': 'Продукция', 'nav.solutions': 'Решения для площадок', 'nav.blog': 'Обзор рынка', 'nav.contact': 'Контакты',
      'hero.title': 'Производитель высокопроизводительных скилл-игр',
      'tank.cta.sticky': 'Узнать цену',
      'CONTACT.SEND': 'Связаться с поддержкой',
      'sol.page.title': 'Отраслевые решения',
      'sol.gas.title': 'АЗС', 'sol.arcade.title': 'Аркады', 'sol.lounge.title': 'Лаундж-зоны',
    }
  },

  // --- 🇯🇵 日本語 ---
  ja: {
    translation: {
      'nav.home': 'ホーム', 'nav.about': '会社概要', 'nav.products': '製品情報', 'nav.solutions': '会場別ソリューション', 'nav.blog': '市場の洞察', 'nav.contact': 'お問い合わせ',
      'hero.title': '高性能スキルゲームメーカー',
      'tank.cta.sticky': '見積もりを依頼',
      'CONTACT.SEND': 'サポートに連絡',
      'sol.page.title': '業界別ソリューション',
      'sol.gas.title': 'ガソリンスタンド', 'sol.arcade.title': 'ゲームセンター', 'sol.lounge.title': 'ラウンジ',
    }
  },

  // --- 🇰🇷 한국어 ---
  ko: {
    translation: {
      'nav.home': '홈', 'nav.about': '회사 소개', 'nav.products': '제품 정보', 'nav.solutions': '장소 솔루션', 'nav.blog': '시장 인사이트', 'nav.contact': '문의하기',
      'hero.title': '고성능 스킬 게임 제조업체',
      'tank.cta.sticky': '견적 받기',
      'CONTACT.SEND': '지원팀에 문의',
      'sol.page.title': '산업별 솔루션',
      'sol.gas.title': '주유소', 'sol.arcade.title': '아케이드', 'sol.lounge.title': '라운지',
    }
  },

  // --- 🇸🇦 العربية ---
  ar: {
    translation: {
      'nav.home': 'الرئيسية', 'nav.about': 'من نحن', 'nav.products': 'المنتجات', 'nav.solutions': 'حلول المواقع', 'nav.blog': 'رؤى السوق', 'nav.contact': 'اتصل بنا',
      'hero.title': 'الشركة المصنعة لألعاب المهارة عالية الأداء',
      'tank.cta.sticky': 'احصل على عرض سعر',
      'CONTACT.SEND': 'اتصل بالدعم',
      'sol.page.title': 'حلول الصناعة',
      'sol.gas.title': 'محطات الوقود', 'sol.arcade.title': 'صالات الألعاب', 'sol.lounge.title': 'صالات الاستراحة',
    }
  }
};

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

export const t = (lang: string, key: string): string => {
  return i18n.t(key, { lng: lang });
};

export function isLanguageCode(code: string): code is LanguageCode {
  return LANGUAGES.some(l => l.code === code);
}

export default i18n;
