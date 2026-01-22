
// src/types.ts

// 定义坦克页需要的复杂子结构
// src/types.ts

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
  // ✅ 统一使用这三个标准 ID
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
    seo: {
      metaTitle: string;
      metaDescription: string;
      keywords: string[];
    };
  };
}

// ... 保持其他内容（BlogPost, Solution, LanguageCode 等）不变

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
  keywords?: string[]; // 数组格式，方便在 data.ts 中编辑
  path: string;        // 必须项：用于生成 Canonical 和 Hreflang 标签
  schema?: object;     // 可选项：用于 JSON-LD 结构化数据
}
