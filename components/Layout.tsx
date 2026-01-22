import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import { Menu, X, Gamepad2, Phone, Mail, MapPin, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // ✅ 引入标准钩子
import { PageRoute } from '../types';
import { LANGUAGES } from '../utils/i18n'; // ✅ 只引入语言列表定义
import { SEO } from './SEO'; // ✅ 引入我们之前写的 SEO 坦克组件

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  
  const { t, i18n } = useTranslation(); // ✅ 使用标准的 t 和 i18n
  const { lang } = useParams(); // ✅ 直接从 URL 获取语言参数 (:lang)
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ 核心逻辑：当 URL 中的语言变化时，自动切换翻译引擎语言
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // ✅ 生成带语言前缀的路径辅助函数
  const getPath = (route: string) => `/${lang}${route === '/' ? '' : route}`;

  // 游戏产品分类 (从 i18n 获取翻译)
  const productCategories = [
    { name: t('nav.cat.machines'), id: 'skill_based_game_board' },
    { name: t('nav.cat.cabinets'), id: 'cabinet_only' },
    { name: t('nav.cat.boards'), id: 'game_board' },
  ];

  // ✅ 语言切换处理：保持在当前路径，仅更换语言前缀
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
      {/* ✅ 全局 SEO 默认设置 (Tank Page 逻辑) */}
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
              <Link
                  to={getPath(PageRoute.HOME)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-brand-400 ${isActive(PageRoute.HOME) ? 'text-brand-400' : 'text-slate-300'}`}
              >
                  {t('nav.home')}
              </Link>

              <Link
                  to={getPath(PageRoute.ABOUT)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-brand-400 ${isActive(PageRoute.ABOUT) ? 'text-brand-400' : 'text-slate-300'}`}
              >
                  {t('nav.about')}
              </Link>

              {/* Products Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsProductDropdownOpen(true)}
                onMouseLeave={() => setIsProductDropdownOpen(false)}
              >
                <button 
                  className={`flex items-center text-sm font-medium transition-colors duration-200 hover:text-brand-400 ${isActive(PageRoute.PRODUCTS) ? 'text-brand-400' : 'text-slate-300'}`}
                >
                  {t('nav.products')} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isProductDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-64 rounded-xl shadow-xl bg-brand-800 ring-1 ring-black ring-opacity-5 focus:outline-none border border-slate-700 animate-fade-in z-50 overflow-hidden">
                    <div className="py-2">
                      <Link 
                        to={getPath(PageRoute.PRODUCTS)} 
                        className="block px-4 py-3 text-sm text-slate-300 hover:bg-brand-700 hover:text-white border-b border-slate-700/50"
                      >
                        {t('nav.products')}
                      </Link>
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`${getPath(PageRoute.PRODUCTS)}?category=${cat.id}`}
                          className="block px-4 py-3 text-sm text-slate-300 hover:bg-brand-700 hover:text-white"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                  to={getPath(PageRoute.SOLUTIONS)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-brand-400 ${isActive(PageRoute.SOLUTIONS) ? 'text-brand-400' : 'text-slate-300'}`}
              >
                  {t('nav.solutions')}
              </Link>
              <Link
                  to={getPath(PageRoute.BLOG)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-brand-400 ${isActive(PageRoute.BLOG) ? 'text-brand-400' : 'text-slate-300'}`}
              >
                  {t('nav.blog')}
              </Link>

              <Link
                  to={getPath(PageRoute.CONTACT)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-brand-400 ${isActive(PageRoute.CONTACT) ? 'text-brand-400' : 'text-slate-300'}`}
              >
                  {t('nav.contact')}
              </Link>
              
              {/* Language Switcher */}
              <div className="relative flex items-center bg-brand-800 rounded-md px-2 py-1 border border-slate-700">
                <Globe className="h-4 w-4 text-slate-400 mr-2" />
                <select 
                  value={lang}
                  onChange={handleLanguageChange}
                  className="bg-transparent text-sm text-slate-300 focus:outline-none cursor-pointer appearance-none pr-4"
                  style={{ backgroundImage: 'none' }}
                >
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code} className="bg-brand-900">
                      {l.flag} {l.code.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <Link
                to={getPath(PageRoute.CONTACT)}
                className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-500/25"
              >
                {t('tank.cta.sticky')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <select 
                  value={lang}
                  onChange={handleLanguageChange}
                  className="bg-brand-800 text-white text-xs p-1 rounded border border-slate-700"
                >
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code}>{l.code.toUpperCase()}</option>
                  ))}
              </select>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-brand-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               <Link
                  to={getPath(PageRoute.HOME)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:bg-brand-700 hover:text-white"
                >
                  {t('nav.home')}
                </Link>
                
                {/* Mobile Products Sub-menu */}
                <div className="space-y-1 bg-brand-900/50 rounded-lg p-2">
                  <div className="px-3 py-2 text-brand-400 font-bold uppercase text-xs tracking-wider border-b border-slate-700 mb-2">
                     {t('nav.products')}
                  </div>
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`${getPath(PageRoute.PRODUCTS)}?category=${cat.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white pl-6"
                    >
                      • {cat.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to={getPath(PageRoute.ABOUT)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:bg-brand-700 hover:text-white"
                >
                  {t('nav.about')}
                </Link>
                <Link
                  to={getPath(PageRoute.SOLUTIONS)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:bg-brand-700 hover:text-white"
                >
                  {t('nav.solutions')}
                </Link>
                <Link
                  to={getPath(PageRoute.BLOG)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:bg-brand-700 hover:text-white"
                >
                  {t('nav.blog')}
                </Link>
                <Link
                  to={getPath(PageRoute.CONTACT)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-brand-400 font-bold"
                >
                  {t('nav.contact')}
                </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
      <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-900 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center gap-2 mb-4">
                <Gamepad2 className="h-6 w-6 text-brand-500" />
                <span className="text-lg font-bold text-white">Arcade Skill Games</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{t('nav.products')}</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {productCategories.map((cat) => (
                   <li key={cat.id}>
                     <Link to={`${getPath(PageRoute.PRODUCTS)}?category=${cat.id}`} className="hover:text-brand-400">{cat.name}</Link>
                   </li>
                ))}
              </ul>
            </div>
            
             <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{t('nav.contact')}</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-500" /> 123 Gaming Blvd, Las Vegas, NV</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-500" /> +1 (800) 555-0199</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-500" /> sales@arcadeskillgames.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Arcade Skill Games. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;