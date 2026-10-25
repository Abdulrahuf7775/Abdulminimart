"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import type { Product, ProductCategory } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";
import { categories } from "@/data/categories";

type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "name";

export function ProductCatalog({ items, title = "All Products", initialQuery = "" }: { items: Product[]; title?: string; initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const result = items.filter((product) => {
      const matchesQuery = !normalized || `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(normalized);
      return matchesQuery && (!category || product.category === category) && (!inStockOnly || product.inStock) && (!featuredOnly || product.featured);
    });
    return result.sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "name") return a.name.localeCompare(b.name);
      return Number(b.featured) - Number(a.featured);
    });
  }, [items, query, category, sort, inStockOnly, featuredOnly]);
  return <section>
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div><p className="mb-1 text-sm font-semibold text-brand-700">Find your essentials</p><h1 className="text-3xl font-extrabold tracking-tight text-stone-900">{title}</h1><p className="mt-2 text-sm text-stone-500">{filtered.length} products · sample catalogue</p></div>
      <div className="flex flex-wrap gap-2">
        <label className="sr-only" htmlFor="catalog-search">Search products</label>
        <input id="catalog-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products..." className="min-h-10 min-w-48 rounded-lg border border-stone-300 px-3 text-sm outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100" />
        <label className="sr-only" htmlFor="catalog-category">Filter by category</label>
        <select id="catalog-category" value={category} onChange={(event) => setCategory(event.target.value as ProductCategory | "")} className="min-h-10 rounded-lg border border-stone-300 bg-white px-3 text-sm">
          <option value="">All categories</option>{categories.map((entry) => <option key={entry.slug} value={entry.name}>{entry.name}</option>)}
        </select>
        <label className="sr-only" htmlFor="catalog-sort">Sort products</label>
        <select id="catalog-sort" value={sort} onChange={(event) => setSort(event.target.value as SortOption)} className="min-h-10 rounded-lg border border-stone-300 bg-white px-3 text-sm">
          <option value="featured">Featured</option><option value="price-asc">Price: Low to High</option><option value="price-desc">Price: High to Low</option><option value="rating">Highest Rated</option><option value="name">Alphabetical: A–Z</option>
        </select>
      </div>
    </div>
    <div className="mb-5 flex flex-wrap gap-5 text-sm text-stone-600">
      <label className="flex items-center gap-2"><SlidersHorizontal size={16} /><input type="checkbox" checked={inStockOnly} onChange={(event) => setInStockOnly(event.target.checked)} className="accent-brand-700" /> In stock</label>
      <label className="flex items-center gap-2"><input type="checkbox" checked={featuredOnly} onChange={(event) => setFeaturedOnly(event.target.checked)} className="accent-brand-700" /> Featured only</label>
      {query && <button onClick={() => setQuery("")} className="font-semibold text-brand-700 hover:underline">Clear search</button>}
    </div>
    {filtered.length ? <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      : <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 py-16 text-center"><h2 className="text-lg font-bold">No products found</h2><p className="mt-2 text-sm text-stone-500">Try a different search or clear your filters.</p><button onClick={() => { setQuery(""); setCategory(""); setInStockOnly(false); setFeaturedOnly(false); }} className="mt-4 rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white">Clear filters</button></div>}
  </section>;
}
