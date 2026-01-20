
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import { DEFAULT_LANG } from './utils/i18n';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {/* Root redirect to default language */}
          <Route path="/" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />
          
          {/* Language Parameter Routes */}
          <Route path="/:lang">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="solutions" element={<Solutions />} />
            {/* Dynamic Route for Solution Details */}
            <Route path="solutions/:slug" element={<SolutionDetail />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
