"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export default function WishlistPage() {
  const { wishlist, hydrated } = useShop();
  if (!hydrated) return <p className="py-20 text-center text-stone-500">Loading your wishlist…</p>;
  const saved = products.filter((product) => wishlist.includes(product.id));
  return <><p className="text-sm font-semibold text-brand-700">Your saved picks</p><h1 className="mt-1 text-3xl font-extrabold">Wishlist</h1>{saved.length ? <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{saved.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="mt-8 rounded-3xl border border-dashed border-stone-300 bg-stone-50 px-5 py-16 text-center"><Heart className="mx-auto text-stone-400" size={42} /><h2 className="mt-4 text-xl font-bold">Your wishlist is waiting</h2><p className="mt-2 text-sm text-stone-500">Save products you like and they’ll show up here.</p><Link href="/products" className="mt-5 inline-flex rounded-xl bg-brand-700 px-5 py-3 font-bold text-white">Explore Products</Link></div>}</>;
}
