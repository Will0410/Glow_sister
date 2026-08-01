export type ProductCategory = "skincare" | "maquiagem" | "essentials" | "vip";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  description: string;
  details: string;
  price: number;
  category: ProductCategory;
  badge?: string;
  emoji: string;
  gradient: string;
  image?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
