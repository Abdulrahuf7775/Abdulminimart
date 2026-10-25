"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export function ProductActions({ productId, productName, inStock }: { productId: string; productName: string; inStock: boolean }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, wishlist, toggleWishlist } = useShop();
  const saved = wishlist.includes(productId);
  return <div className="mt-7 flex flex-wrap items-center gap-3">
    <div className="flex h-12 items-center rounded-xl border border-stone-300"><button aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="h-full px-4 text-lg">−</button><span className="min-w-8 text-center font-bold">{quantity}</span><button aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} className="h-full px-4 text-lg">+</button></div>
    <button disabled={!inStock} onClick={() => addToCart(productId, quantity)} className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 font-bold text-white hover:bg-brand-800 disabled:bg-stone-300"><ShoppingCart size={18} /> Add to Cart</button>
    <button aria-label={saved ? `Remove ${productName} from wishlist` : `Add ${productName} to wishlist`} onClick={() => toggleWishlist(productId)} className="flex h-12 w-12 items-center justify-center rounded-xl border border-stone-300 text-stone-700 hover:text-rose-600"><Heart size={20} fill={saved ? "currentColor" : "none"} /></button>
  </div>;
}
