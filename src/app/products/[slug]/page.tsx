import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Heart, ShoppingCart, Star } from "lucide-react";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { ProductImage } from "@/components/ProductImage";
import { products, getProductBySlug } from "@/data/products";
import { formatNaira } from "@/lib/currency";
import { ProductActions } from "@/components/products/ProductActions";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = products.filter((entry) => entry.category === product.category && entry.id !== product.id).slice(0, 4);
  return <><Link href="/products" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"><ArrowLeft size={17} /> Back to products</Link><div className="grid gap-8 lg:grid-cols-2"><div className="overflow-hidden rounded-3xl bg-stone-100"><ProductImage src={product.image} alt={product.name} className="aspect-square w-full object-cover" /></div><div className="py-2"><Link href={`/categories/${product.category.toLowerCase().replaceAll(" ", "-")}`} className="text-sm font-bold text-brand-700">{product.category}</Link><h1 className="mt-2 text-3xl font-extrabold tracking-tight">{product.name}</h1><p className="mt-3 flex items-center gap-2 text-sm"><Star size={17} fill="currentColor" className="text-amber-500" /><b>{product.rating.toFixed(1)}</b><span className="text-stone-500">({product.reviewCount} demonstration reviews)</span></p><div className="mt-5 flex items-center gap-3"><span className="text-3xl font-extrabold">{formatNaira(product.price)}</span>{product.originalPrice && <span className="text-lg text-stone-400 line-through">{formatNaira(product.originalPrice)}</span>}</div><p className={`mt-3 text-sm font-semibold ${product.inStock ? "text-emerald-700" : "text-rose-600"}`}>{product.inStock ? "In stock (sample listing)" : "Out of stock"}</p><p className="mt-5 leading-7 text-stone-600">{product.description}</p><ProductActions productId={product.id} productName={product.name} inStock={product.inStock} /><div className="mt-8 border-t border-stone-200 pt-5"><h2 className="font-bold">Product information</h2><p className="mt-2 text-sm leading-6 text-stone-500">This is a demonstration product listing. Product details, ratings, stock, and prices are sample data and should be verified before any real-world sale.</p></div></div></div>{related.length > 0 && <div className="mt-16"><ProductCatalog title="You May Also Like" items={related} /></div>}</>;
}
