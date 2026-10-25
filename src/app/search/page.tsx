import { ProductCatalog } from "@/components/products/ProductCatalog";
import { products } from "@/data/products";

export const metadata = { title: "Search" };

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  return <ProductCatalog items={products} title={q ? `Search: ${q}` : "Search Products"} initialQuery={q} />;
}
