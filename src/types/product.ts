export type ProductCategory =
  | "Frozen Foods"
  | "Groceries"
  | "Beverages"
  | "Snacks"
  | "Cosmetics"
  | "Personal Care"
  | "Household Cleaning"
  | "Baby Products"
  | "Kitchen Essentials";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
  bestSeller?: boolean;
  recentlyAdded?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface OrderSummary {
  subtotal: number;
  deliveryFee: number;
  total: number;
}
