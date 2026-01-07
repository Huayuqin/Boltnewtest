export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  role: string;
  duration: string;
  tools_used: string[];
  hero_image_url: string;
  images: string[];
  category: string;
  order_index: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}
