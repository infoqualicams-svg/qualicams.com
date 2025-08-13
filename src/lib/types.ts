export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  imageHints: string[];
  condition: 'Excellent' | 'Good' | 'Fair';
  description: string;
  longDescription: string;
  specs: { key: string; value: string }[];
  warranty: string;
  rating: number;
  reviewCount: number;
  reviews: Review[];
}
