// src/types.ts

// --- PRODUCT SUB-TYPES ---
export interface ProductPainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface ProductComparison {
  competitorLabel: string;
  rows: { feature: string; us: string; them: string }[];
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'skill_based_game_board' | 'cabinet_only' | 'game_board'; 
  description: string;
  imageUrl: string;
  features: string[];
  
  tankPage?: {
    headline: string;
    subHeadline: string;
    videoUrl?: string;
    painPoints: ProductPainPoint[];
    technicalSpecs: { label: string; value: string }[];
    comparison: ProductComparison;
    buyerGuide: { title: string; content: string }[];
    faqs: ProductFAQ[];
    ctaText: string;
    pdfUrl?: string;
    caseStudy?: { title: string; content: string; author: string };
    // ✅ 修正：在此处添加 reviews 字段，解决 data.ts 第 951 行报错
    reviews?: { author: string; rating: number; comment: string }[]; 
    seo: {
      metaTitle: string;
      metaDescription: string;
      keywords: string[];
    };
  };
}

// --- BLOG TYPES ---
export type BlockType = 'h2' | 'h3' | 'paragraph' | 'image' | 'video' | 'list' | 'chart' | 'cta' | 'callout' | 'table';

export interface ChartData { label: string; value: number; }
export interface TableData { headers: string[]; rows: string[][]; }

export interface ContentBlock {
  type: BlockType;
  content: string | string[] | ChartData[] | TableData;
  alt?: string;
  caption?: string;
  url?: string;
}

export interface BlogSeo {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  schema?: object;
}

export interface AuthorProfile {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: AuthorProfile;
  category: string;
  imageUrl: string;
  readingTime: string;
  blocks: ContentBlock[];
  seo: BlogSeo;
}

// --- SOLUTION TYPES ---
export interface PainPoint {
  title: string;
  description: string;
  icon: string;
}

export interface ComparisonRow {
  feature: string;
  us: string;
  them: string;
}

export interface Stat {
  value: string;
  label: string;
  subtext: string;
}

export interface BuyerStep {
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface SeoConfig {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface Solution {
  id: string;
  title: string;
  targetAudience: string;
  description: string;
  fullDescription: string;
  // ✅ 修正：将 benefits 和 icon 设为可选字段（添加 ?），解决 3916 行缺失属性报错
  benefits?: string[]; 
  icon?: string; 
  recommendedCategory: 'skill_based_game_board' | 'cabinet_only' | 'game_board';
  stats: Stat[];
  painPoints: PainPoint[];
  comparison: {
    competitorLabel: string;
    rows: ComparisonRow[];
  };
  buyersGuide: BuyerStep[];
  faqs: FAQ[];
  testimonials: Testimonial[];
  seo: SeoConfig;

  // 扩展可选字段
  recommendedProducts?: { name: string; reason: string }[]; 
  caseStudy?: { title: string; content: string; author: string }; 
  venueGallery?: string[]; 
  promoVideo?: { id: string; title: string; };
  customizationFocus?: string;
  ctaText?: string;
}

export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  PRODUCTS = '/products',
  SOLUTIONS = '/solutions',
  BLOG = '/blog',
  CONTACT = '/contact'
}

export type LanguageCode = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'it' | 'ja' | 'ko' | 'ru' | 'ar';

export interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  schema?: object;
}
