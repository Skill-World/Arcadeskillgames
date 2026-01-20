
// src/types.ts

// 定义坦克页需要的复杂子结构
export interface ProductPainPoint {
  icon: string; // 图标名称
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
  category: 'complete_machine' | 'game_board' | 'cabinet_only';
  description: string;
  imageUrl: string;
  features: string[];
  
  // 🔥 新增：坦克页专属字段 (可选)
  tankPage?: {
    headline: string; // AIDA: Attention
    subHeadline: string;
    videoUrl?: string; // 产品视频
    painPoints: ProductPainPoint[]; // 痛点分析
    technicalSpecs: { label: string; value: string }[]; // 详细参数
    comparison: ProductComparison; // 对比表格
    buyerGuide: { title: string; content: string }[]; // 买家指南
    faqs: ProductFAQ[]; // FAQ
    ctaText: string; // CTA 按钮文案
    pdfUrl?: string; // 留资下载 PDF
    caseStudy?: { title: string; content: string; author: string }; // 案例
    seo: {
      metaTitle: string;
      metaDescription: string;
      keywords: string[];
    };
  };
}

// ... 其他接口保持不变

// --- NEW BLOG ARCHITECTURE TYPES ---

export type BlockType = 'h2' | 'h3' | 'paragraph' | 'image' | 'video' | 'list' | 'chart' | 'cta' | 'callout' | 'table';

export interface ChartData {
  label: string;
  value: number;
}

export interface TableData {
  headers: string[];
  rows: string[][]; // Array of arrays for rows
}

export interface ContentBlock {
  type: BlockType;
  // Content can be string (html), array (list), object (chart data), or table object
  content: string | string[] | ChartData[] | TableData;
  // Optional metadata for blocks
  alt?: string; // for images
  caption?: string; // for images/charts/tables
  url?: string; // for videos/links
}

export interface BlogSeo {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  schema?: object; // Specific article schema
}

export interface AuthorProfile {
  name: string;
  role: string;
  avatar: string; // URL
  bio: string; // Short bio paragraph
}

export interface BlogPost {
  id: string;
  slug: string; // URL friendly ID
  title: string;
  excerpt: string;
  date: string;
  author: AuthorProfile; // Enhanced author object
  category: string;
  imageUrl: string; // Thumbnail/Banner
  readingTime: string;
  
  // The Body Content
  blocks: ContentBlock[];
  
  // Granular SEO Control
  seo: BlogSeo;
}

// --- END BLOG TYPES ---

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
  icon?: string; // Added optional icon for steps
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

// NEW: Dedicated SEO Config for Solutions Pages
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
  benefits: string[];
  icon: string;
  recommendedCategory: 'complete_machine' | 'cabinet_only' | 'game_board';
  stats: Stat[];
  painPoints: PainPoint[];
  comparison: {
    competitorLabel: string;
    rows: ComparisonRow[];
  };
  buyersGuide: BuyerStep[];
  faqs: FAQ[];
  testimonials: Testimonial[];
  // SEO Injection
  seo: SeoConfig;
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
  canonicalPath?: string;
  schema?: object;
  keywords?: string[]; // Added keywords support
}
