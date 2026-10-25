import { notFound } from "next/navigation";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((entry) => entry.slug === slug);
  if (!category) notFound();
  return <><div className="mb-8 rounded-3xl bg-brand-50 px-6 py-8 sm:px-10"><p className="text-sm font-semibold text-brand-700">Shop the collection</p><h1 className="mt-2 text-3xl font-extrabold">{category.name}</h1><p className="mt-2 text-stone-600">{category.description}</p></div><ProductCatalog title={`${category.name} Products`} items={products.filter((product) => product.category === category.name)} /></>;
}
