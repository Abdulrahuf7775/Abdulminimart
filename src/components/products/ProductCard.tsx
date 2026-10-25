"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/types/product";
import { formatNaira } from "@/lib/currency";
import { useShop } from "@/context/ShopContext";
import { ProductImage } from "@/components/ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, wishlist, toggleWishlist } = useShop();
  const saved = wishlist.includes(product.id);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  return <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-0.5 hover:shadow-card">
    <div className="relative">
      <Link href={`/products/${product.slug}`} className="block aspect-[4/3] overflow-hidden bg-stone-100">
        <ProductImage src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
      </Link>
      {discount > 0 && <span className="absolute left-3 top-3 rounded-full bg-amber-300 px-2.5 py-1 text-xs font-bold text-stone-900">{discount}% off</span>}
      <button onClick={() => toggleWishlist(product.id)} aria-label={saved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`} className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow transition ${saved ? "text-rose-600" : "text-stone-500 hover:text-rose-600"}`}><Heart size={18} fill={saved ? "currentColor" : "none"} /></button>
    </div>
    <div className="flex flex-1 flex-col p-4">
      <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-700">{product.category}</span>
      <Link href={`/products/${product.slug}`} className="line-clamp-2 min-h-11 font-semibold text-stone-900 hover:text-brand-700">{product.name}</Link>
      <div className="mt-2 flex items-center gap-1 text-sm"><Star size={15} fill="currentColor" className="text-amber-500" /><span className="font-semibold">{product.rating.toFixed(1)}</span><span className="text-stone-500">({product.reviewCount} demo reviews)</span></div>
      <div className="mt-3 flex items-baseline gap-2"><span className="text-lg font-extrabold text-stone-900">{formatNaira(product.price)}</span>{product.originalPrice && <span className="text-sm text-stone-400 line-through">{formatNaira(product.originalPrice)}</span>}</div>
      <p className={`mt-1 text-xs font-medium ${product.inStock ? "text-emerald-700" : "text-rose-600"}`}>{product.inStock ? "In stock" : "Out of stock"}</p>
      <button onClick={() => addToCart(product.id)} disabled={!product.inStock} className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-700 px-4 text-sm font-bold text-white transition hover:bg-brand-800 disabled:cursor-not-allowed disabled:bg-stone-300"><ShoppingCart size={17} /> Add to Cart</button>
    </div>
  </article>;
}
