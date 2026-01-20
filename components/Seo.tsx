import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SeoProps, LanguageCode } from '../types';
import { LANGUAGES, DEFAULT_LANG } from '../utils/i18n';

const Seo: React.FC<SeoProps> = ({ title, description, canonicalPath, schema }) => {
  const { lang } = useParams();
  const location = useLocation();
  const currentLang = (lang as LanguageCode) || DEFAULT_LANG;

  // Base domain
  const baseUrl = 'https://www.arcadeskillgames.com';
  
  // Clean path logic
  const cleanPath = canonicalPath || location.pathname.replace(`/${currentLang}`, '');
  const canonicalUrl = `${baseUrl}/${currentLang}${cleanPath === '/' ? '' : cleanPath}`;

  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | Arcade Skill Games`;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Update Schema.org JSON-LD
    let scriptSchema = document.querySelector('script[type="application/ld+json"]');
    if (!scriptSchema) {
      scriptSchema = document.createElement('script');
      scriptSchema.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptSchema);
    }
    if (schema) {
      scriptSchema.textContent = JSON.stringify(schema);
    }

    // 5. Open Graph Tags
    const setMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:url', canonicalUrl);
    setMeta('og:locale', currentLang);

    // 6. Hreflang Tags (CRITICAL for Multi-language SEO)
    // Tells Google: "This page is English, that one is Spanish"
    LANGUAGES.forEach((l) => {
      const hrefLangUrl = `${baseUrl}/${l.code}${cleanPath === '/' ? '' : cleanPath}`;
      let linkHreflang = document.querySelector(`link[hreflang="${l.code}"]`);
      if (!linkHreflang) {
        linkHreflang = document.createElement('link');
        linkHreflang.setAttribute('rel', 'alternate');
        linkHreflang.setAttribute('hreflang', l.code);
        document.head.appendChild(linkHreflang);
      }
      linkHreflang.setAttribute('href', hrefLangUrl);
    });

    // Cleanup function not strictly necessary for head tags in this simple implementation,
    // but good practice would be to remove them on unmount if this was a component library.

  }, [title, description, canonicalUrl, schema, currentLang, cleanPath]);

  return null;
};

export default Seo;