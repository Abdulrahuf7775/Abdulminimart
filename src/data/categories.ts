import type { ProductCategory } from "@/types/product";

export interface Category {
  name: ProductCategory;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  { name: "Groceries", slug: "groceries", description: "Pantry staples for every day.", image: "photo-1542838132-92c53300491e" },
  { name: "Frozen Foods", slug: "frozen-foods", description: "Frozen favourites, ready when you are.", image: "photo-1607623814075-e51df1bdc82f" },
  { name: "Beverages", slug: "beverages", description: "Refreshing drinks for every moment.", image: "photo-1544145945-f90425340c7e" },
  { name: "Cosmetics", slug: "cosmetics", description: "Simple care for your daily routine.", image: "photo-1608248543803-ba4f8c70ae0b" },
  { name: "Personal Care", slug: "personal-care", description: "Everyday essentials for feeling your best.", image: "photo-1608248543803-ba4f8c70ae0b" },
  { name: "Snacks", slug: "snacks", description: "Little treats for any time of day.", image: "photo-1621939514649-280e2aa2f2db" },
  { name: "Household Cleaning", slug: "household-cleaning", description: "Keep your home fresh and tidy.", image: "photo-1585421514738-01798e348b17" },
  { name: "Baby Products", slug: "baby-products", description: "Thoughtful essentials for little ones.", image: "photo-1519689680058-324335c77eba" },
  { name: "Kitchen Essentials", slug: "kitchen-essentials", description: "Useful basics for your home kitchen.", image: "photo-1556911220-bff31c812dba" },
];
