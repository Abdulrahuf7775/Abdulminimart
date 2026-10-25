import { ProductCatalog } from "@/components/products/ProductCatalog";
import { products } from "@/data/products";

export const metadata = { title: "All Products" };

export default function ProductsPage() {
  return <ProductCatalog items={products} />;
}
