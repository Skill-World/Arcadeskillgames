import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // ✅ 引入 SEO 管理器
import './utils/i18n'; // ✅ 初始化多语言引擎

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail'; 
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HelmetProvider> {/* ✅ 必须包裹在最外层以支持动态 SEO 标签 */}
      <BrowserRouter> {/* ✅ 核心修改：移除 # 井号的关键 */}
        <Routes>
          {/* 1. 根目录自动重定向到默认语言英文版 /en */}
          <Route path="/" element={<Navigate to="/en" replace />} />
          
          {/* 2. 多语言主路由结构 */}
          {/* ✅ 注意：Layout 现在作为 element 传递，页面组件作为子路由嵌套在其中 */}
          <Route path="/:lang" element={<Layout children={undefined} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            
            {/* 产品列表坦克页 */}
            <Route path="products" element={<Products />} />
            {/* 产品详情坦克页：使用 /product/:id 结构更利于搜索引擎识别 */}
            <Route path="product/:id" element={<ProductDetail />} />
            
            <Route path="solutions" element={<Solutions />} />
            <Route path="solutions/:slug" element={<SolutionDetail />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* 3. 错误路径回退 */}
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;