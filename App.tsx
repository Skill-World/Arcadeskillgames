import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './utils/i18n';

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
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* 1. 自动重定向 */}
          <Route path="/" element={<Navigate to="/en" replace />} />
          
          {/* 2. ✅ 核心修改：直接引用 Layout，不需要传 children 属性 */}
          <Route path="/:lang" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="solutions/:id" element={<SolutionDetail />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;