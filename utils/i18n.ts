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

// 2. 翻译字典 - 涵盖 12 类目标客户
const resources = {
  en: {
    translation: {
      'nav.home': 'Home', 'nav.about': 'About Us', 'nav.products': 'Products', 'nav.solutions': 'Venue Solutions', 'nav.contact': 'Contact',
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
      // ... 原有其他 key 保持不变
    }
  },
  es: { // 西语
    translation: {
      'nav.home': 'Inicio', 'nav.solutions': 'Soluciones',
      'sol.page.title': 'Soluciones Comerciales',
      'sol.distributor.title': 'Distribuidores', 'sol.agent.title': 'Agentes de Ruta',
      'sol.custom.title': 'Kits Personalizados', 'sol.gameroom.title': 'Salas de Juego',
      'sol.arcade.title': 'Centros Arcade', 'sol.gas.title': 'Gasolineras',
      'sol.cstore.title': 'Tiendas de Conveniencia', 'sol.barber.title': 'Barberías',
      'sol.tattoo.title': 'Estudios de Tatuaje', 'sol.laundry.title': 'Lavanderías',
      'sol.icafe.title': 'Cibercafés', 'sol.lounge.title': 'Salones de Entretenimiento'
    }
  },
  fr: { // 法语
    translation: {
      'nav.home': 'Accueil', 'nav.solutions': 'Solutions',
      'sol.page.title': 'Solutions de Sites',
      'sol.distributor.title': 'Distributeurs', 'sol.agent.title': 'Agents de Route',
      'sol.custom.title': 'Kits Sur Mesure', 'sol.gameroom.title': 'Salles de Jeux',
      'sol.arcade.title': 'Centres Arcade', 'sol.gas.title': 'Stations-Service',
      'sol.cstore.title': 'Supérettes', 'sol.barber.title': 'Salons de Coiffure',
      'sol.tattoo.title': 'Studios de Tatouage', 'sol.laundry.title': 'Laveries',
      'sol.icafe.title': 'Cybercafés', 'sol.lounge.title': 'Salons de Détente'
    }
  },
  de: { // 德语
    translation: {
      'nav.home': 'Startseite', 'nav.solutions': 'Lösungen',
      'sol.page.title': 'Standortlösungen',
      'sol.distributor.title': 'Distributoren', 'sol.agent.title': 'Routen-Agenten',
      'sol.custom.title': 'Eigene Labels', 'sol.gameroom.title': 'Spielzimmer',
      'sol.arcade.title': 'Spielhallen', 'sol.gas.title': 'Tankstellen',
      'sol.cstore.title': 'Kioske', 'sol.barber.title': 'Barbiere',
      'sol.tattoo.title': 'Tattoo-Studios', 'sol.laundry.title': 'Waschsalons',
      'sol.icafe.title': 'Internet-Cafés', 'sol.lounge.title': 'Lounges'
    }
  },
  pt: { // 葡语
    translation: {
      'nav.home': 'Início', 'nav.solutions': 'Soluções',
      'sol.page.title': 'Soluções para Locais',
      'sol.distributor.title': 'Distribuidores', 'sol.agent.title': 'Agentes de Rota',
      'sol.custom.title': 'Kits Personalizados', 'sol.gameroom.title': 'Salas de Jogos',
      'sol.arcade.title': 'Arcades', 'sol.gas.title': 'Postos de Gasolina',
      'sol.cstore.title': 'Lojas de Conveniência', 'sol.barber.title': 'Barbearias',
      'sol.tattoo.title': 'Estúdios de Tatuagem', 'sol.laundry.title': 'Lavanderias',
      'sol.icafe.title': 'Cybercafés', 'sol.lounge.title': 'Lounges'
    }
  },
  it: { // 意大利语
    translation: {
      'nav.home': 'Home', 'nav.solutions': 'Soluzioni',
      'sol.page.title': 'Soluzioni per Sedi',
      'sol.distributor.title': 'Distributori', 'sol.agent.title': 'Agenti di Percorso',
      'sol.custom.title': 'Kit Personalizzati', 'sol.gameroom.title': 'Sale Giochi',
      'sol.arcade.title': 'Centri Arcade', 'sol.gas.title': 'Stazioni di Servizio',
      'sol.cstore.title': 'Negozi di Alimentari', 'sol.barber.title': 'Barbieri',
      'sol.tattoo.title': 'Studi di Tatuaggi', 'sol.laundry.title': 'Lavanderie',
      'sol.icafe.title': 'Internet Cafè', 'sol.lounge.title': 'Sale Lounge'
    }
  },
  ru: { // 俄语
    translation: {
      'nav.home': 'Главная', 'nav.solutions': 'Решения',
      'sol.page.title': 'Решения для площадок',
      'sol.distributor.title': 'Дистрибьюторы', 'sol.agent.title': 'Агенты сети',
      'sol.custom.title': 'Индивидуальные киты', 'sol.gameroom.title': 'Игровые комнаты',
      'sol.arcade.title': 'Аркадные центры', 'sol.gas.title': 'АЗС',
      'sol.cstore.title': 'Минимаркеты', 'sol.barber.title': 'Барбершопы',
      'sol.tattoo.title': 'Тату-салоны', 'sol.laundry.title': 'Прачечные',
      'sol.icafe.title': 'Интернет-кафе', 'sol.lounge.title': 'Лаундж-зоны'
    }
  },
  ja: { // 日语
    translation: {
      'nav.home': 'ホーム', 'nav.solutions': 'ソリューション',
      'sol.page.title': '会場別ソリューション',
      'sol.distributor.title': '販売代理店', 'sol.agent.title': 'ルートエージェント',
      'sol.custom.title': 'カスタムキット', 'sol.gameroom.title': 'ゲームルーム',
      'sol.arcade.title': 'アーケード会場', 'sol.gas.title': 'ガソリンスタンド',
      'sol.cstore.title': 'コンビニ', 'sol.barber.title': '理髪店',
      'sol.tattoo.title': 'タトゥースタジオ', 'sol.laundry.title': 'コインランドリー',
      'sol.icafe.title': 'ネットカフェ', 'sol.lounge.title': 'ラウンジ'
    }
  },
  ko: { // 韩语
    translation: {
      'nav.home': '홈', 'nav.solutions': '솔루션',
      'sol.page.title': '장소 솔루션',
      'sol.distributor.title': '게임 유통사', 'sol.agent.title': '관리 대리점',
      'sol.custom.title': '커스텀 키트', 'sol.gameroom.title': '게임룸',
      'sol.arcade.title': '아케이드 행사장', 'sol.gas.title': '주유소',
      'sol.cstore.title': '편의점', 'sol.barber.title': '이발소',
      'sol.tattoo.title': '타투 스튜디오', 'sol.laundry.title': '세탁소',
      'sol.icafe.title': 'PC방', 'sol.lounge.title': '라운지'
    }
  },
  ar: { // 阿拉伯语
    translation: {
      'nav.home': 'الرئيسية', 'nav.solutions': 'الحلول',
      'sol.page.title': 'حلول المواقع',
      'sol.distributor.title': 'موزعي الألعاب', 'sol.agent.title': 'وكلاء الطرق',
      'sol.custom.title': 'أطقم مخصصة', 'sol.gameroom.title': 'غرف الألعاب',
      'sol.arcade.title': 'صالات الأركيد', 'sol.gas.title': 'محطات الوقود',
      'sol.cstore.title': 'المتاجر', 'sol.barber.title': 'صالونات الحلاقة',
      'sol.tattoo.title': 'استوديوهات الوشم', 'sol.laundry.title': 'المغاسل',
      'sol.icafe.title': 'مقاهي الإنترنت', 'sol.lounge.title': 'صالات الترفيه'
    }
  }
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