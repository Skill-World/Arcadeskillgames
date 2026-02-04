import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import { Menu, X, Gamepad2, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageRoute } from '../types';
import { LANGUAGES } from '../utils/i18n';
import { SEO } from './SEO';
import { LeadForm } from './LeadForm';
import { FloatingSidebar } from './FloatingSidebar';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ 核心同步逻辑：监听 URL 参数并强制切换 i18next 状态
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const getPath = (route: string) => `/${lang}${route === '/' ? '' : route}`;

  const productCategories = [
    { name: t('nav.cat.machines'), id: 'skill_based_game_board' },
    { name: t('nav.cat.cabinets'), id: 'cabinet_only' },
    { name: t('nav.cat.boards'), id: 'game_board' },
  ];

  const venueCategories = [
    { id: 'distributors', key: 'distributor' },
    { id: 'game-agents', key: 'agent' },
    { id: 'custom-kits', key: 'custom' },
    { id: 'game-rooms', key: 'gameroom' },
    { id: 'arcades', key: 'arcade' },
    { id: 'gas-stations', key: 'gas' },
    { id: 'convenience-stores', key: 'cstore' },
    { id: 'barbershops', key: 'barber' },
    { id: 'tattoo-studios', key: 'tattoo' },
    { id: 'laundromats', key: 'laundry' },
    { id: 'internet-cafes', key: 'icafe' },
    { id: 'lounges', key: 'lounge' }
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    const currentPathWithoutLang = location.pathname.replace(`/${lang}`, '');
    navigate(`/${newLang}${currentPathWithoutLang}${location.search}`);
  };

  const isActive = (path: string) => {
    const fullPath = getPath(path);
    if (path === PageRoute.HOME) {
      return location.pathname === `/${lang}` || location.pathname === `/${lang}/`;
    }
    return location.pathname.startsWith(fullPath);
  }

  return (
    <div className="flex flex-col min-h-screen bg-brand-900 text-slate-100 font-sans">
      <SEO 
        title={t('hero.title')} 
        description={t('hero.subtitle')} 
        keywords="Skill-Based Game Board, Nudge Game Board, Redemption Game PCB" 
        lang={lang || 'en'} 
        path={location.pathname.replace(`/${lang}/`, '')} 
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to={`/${lang}`} className="flex items-center gap-2 group">
              <div className="p-2 bg-brand-500 rounded-lg group-hover:neon-glow transition-all duration-300">
                <Gamepad2 className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter text-white">ARCADE</span>
                <span className="text-xs font-semibold text-brand-400 tracking-widest uppercase">Skill Games</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to={getPath(PageRoute.HOME)} className={`text-sm font-medium transition-colors hover:text-brand-400 ${isActive(PageRoute.HOME) ? 'text-brand-400' : 'text-slate-300'}`}>
                {t('nav.home')}
              </Link>
              <Link to={getPath(PageRoute.ABOUT)} className={`text-sm font-medium transition-colors hover:text-brand-400 ${isActive(PageRoute.ABOUT) ? 'text-brand-400' : 'text-slate-300'}`}>
                {t('nav.about')}
              </Link>

              {/* Products Dropdown */}
              <div className="relative group" onMouseEnter={() => setIsProductDropdownOpen(true)} onMouseLeave={() => setIsProductDropdownOpen(false)}>
                <button className={`flex items-center text-sm font-medium transition-colors hover:text-brand-400 ${isActive(PageRoute.PRODUCTS) ? 'text-brand-400' : 'text-slate-300'}`}>
                  {t('nav.products')} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-64 rounded-xl shadow-xl bg-brand-800 border border-slate-700 animate-fade-in z-50 overflow-hidden">
                    <div className="py-2">
                      <Link to={getPath(PageRoute.PRODUCTS)} className="block px-4 py-3 text-sm text-slate-300 hover:bg-brand-700 hover:text-white border-b border-slate-700/50">
                        {t('nav.products')}
                      </Link>
                      {productCategories.map((cat) => (
                        <Link key={cat.id} to={`${getPath(PageRoute.PRODUCTS)}?category=${cat.id}`} className="block px-4 py-3 text-sm text-slate-300 hover:bg-brand-700 hover:text-white">
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Venue Solutions Dropdown */}
              <div className="relative group">
                <Link to={getPath(PageRoute.SOLUTIONS)} className={`flex items-center text-sm font-medium transition-colors hover:text-brand-400 ${isActive(PageRoute.SOLUTIONS) ? 'text-brand-400' : 'text-slate-300'}`}>
                  {t('nav.solutions')} <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <div className="absolute left-0 hidden group-hover:block w-72 bg-brand-800 border border-slate-700 rounded-xl shadow-2xl py-3 z-50 animate-fade-in">
                  <div className="grid grid-cols-1 gap-1 max-h-[60vh] overflow-y-auto px-2 scrollbar-thin">
                    {venueCategories.map((cat) => (
                      <Link key={cat.id} to={`/${lang}/solutions/${cat.id}`} className="block px-4 py-2 text-sm text-slate-300 hover:bg-brand-700 hover:text-brand-400 rounded-lg transition-colors">
                        {t(`sol.${cat.key}.title`)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to={getPath(PageRoute.BLOG)} className={`text-sm font-medium transition-colors hover:text-brand-400 ${isActive(PageRoute.BLOG) ? 'text-brand-400' : 'text-slate-300'}`}>
                {t('nav.blog')}
              </Link>
              <Link to={getPath(PageRoute.CONTACT)} className={`text-sm font-medium transition-colors hover:text-brand-400 ${isActive(PageRoute.CONTACT) ? 'text-brand-400' : 'text-slate-300'}`}>
                {t('nav.contact')}
              </Link>
              
              {/* Language Selector */}
              <div className="relative flex items-center bg-brand-800 rounded-md px-2 py-1 border border-slate-700">
                <Globe className="h-4 w-4 text-slate-400 mr-2" />
                <select value={lang} onChange={handleLanguageChange} className="bg-transparent text-sm text-slate-300 focus:outline-none cursor-pointer appearance-none pr-4">
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code} className="bg-brand-900">
                      {l.flag} {l.code.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <Link to={getPath(PageRoute.CONTACT)} className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-500/25">
                {t('tank.cta.sticky')}
              </Link>
            </div>

            {/* Mobile Nav Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="text-slate-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div> 
        </div>

        {/* Mobile Nav Content */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-brand-800 border-t border-slate-700 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-4 pb-8 space-y-2">
              {[
                { name: 'nav.home', route: PageRoute.HOME },
                { name: 'nav.about', route: PageRoute.ABOUT },
                { name: 'nav.products', route: PageRoute.PRODUCTS },
                { name: 'nav.solutions', route: PageRoute.SOLUTIONS },
                { name: 'nav.blog', route: PageRoute.BLOG },
                { name: 'nav.contact', route: PageRoute.CONTACT },
              ].map((item) => (
                <Link
                  key={item.route}
                  to={getPath(item.route)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-4 rounded-xl text-lg font-bold uppercase italic tracking-tight transition-all ${
                    isActive(item.route) ? 'text-brand-400 bg-brand-500/10' : 'text-slate-300 hover:bg-brand-700'
                  }`}
                >
                  {t(item.name)}
                </Link>
              ))}
              
              {/* Mobile Language Selector Integration */}
              <div className="px-4 py-4 flex items-center justify-between border-t border-slate-700/50 mt-4">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-brand-400" />
                  <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">{t('nav.language')}</span>
                </div>
                <select 
                  value={lang} 
                  onChange={(e) => { handleLanguageChange(e); setIsMobileMenuOpen(false); }} 
                  className="bg-brand-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white"
                >
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code}>{l.flag} {l.code.toUpperCase()}</option>
                  ))}
                </select>
              </div>

              <div className="pt-6">
                <Link
                  to={getPath(PageRoute.CONTACT)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-brand-500 hover:bg-brand-600 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-brand-500/20 active:scale-95 transition-all"
                >
                  {t('tank.cta.sticky')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
  {/* ✅ 正确：给外层加 key，这样切换语言时内容会正确刷新 */}
  <div key={lang}>
    <Outlet />
  </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-900 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
           &copy; {new Date().getFullYear()} Arcade Skill Games. All rights reserved.
        </div>
      </footer>

      {/* ✅ 全局组件自动继承 Layout 的 i18n 状态 */}
      <FloatingSidebar />
      <LeadForm />
    </div>
  );
};

export default Layout;
