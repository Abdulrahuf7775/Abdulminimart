"use client";

import Link from "next/link";
import { LockKeyhole, MapPin, ShoppingBag } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { products } from "@/data/products";
import { formatNaira } from "@/lib/currency";

export default function CheckoutPage() {
  const { cart, subtotal, hydrated } = useShop();
  if (!hydrated) return <p className="py-20 text-center text-stone-500">Loading checkout preview…</p>;
  const fee = cart.length ? 1000 : 0;
  return <><div className="mx-auto max-w-4xl"><div className="rounded-3xl bg-brand-50 px-6 py-8 text-center"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-800"><LockKeyhole /></span><p className="mt-3 text-xs font-extrabold uppercase tracking-widest text-brand-700">Frontend prototype</p><h1 className="mt-2 text-3xl font-extrabold">Checkout Preview</h1><p className="mx-auto mt-2 max-w-xl text-sm text-stone-600">This screen demonstrates a future checkout flow. It does not collect payment or delivery details and cannot place an order.</p></div>
    <div className="mt-7 grid gap-6 md:grid-cols-[1fr_320px]"><section className="space-y-4"><div className="rounded-2xl border border-stone-200 p-5"><h2 className="flex items-center gap-2 font-bold"><MapPin size={18} className="text-brand-700" /> Delivery details</h2><p className="mt-2 text-sm text-stone-500">Delivery address form will be available when account and delivery services are implemented.</p></div><div className="rounded-2xl border border-stone-200 p-5"><h2 className="flex items-center gap-2 font-bold"><ShoppingBag size={18} className="text-brand-700" /> Your order</h2>{cart.length ? <ul className="mt-4 divide-y divide-stone-100">{cart.map((item) => { const product = products.find((entry) => entry.id === item.productId); return product ? <li key={item.productId} className="flex justify-between gap-3 py-3 text-sm"><span>{product.name} × {item.quantity}</span><span className="font-semibold">{formatNaira(product.price * item.quantity)}</span></li> : null; })}</ul> : <p className="mt-3 text-sm text-stone-500">Your cart is empty.</p>}</div></section>
      <aside className="h-fit rounded-2xl border border-stone-200 p-5"><h2 className="font-bold">Summary</h2><div className="mt-4 space-y-3 text-sm"><p className="flex justify-between"><span>Subtotal</span><span>{formatNaira(subtotal)}</span></p><p className="flex justify-between"><span>Delivery (placeholder)</span><span>{formatNaira(fee)}</span></p><p className="flex justify-between border-t border-stone-200 pt-3 font-extrabold"><span>Estimated total</span><span>{formatNaira(subtotal + fee)}</span></p></div><button disabled className="mt-5 min-h-12 w-full cursor-not-allowed rounded-xl bg-stone-300 font-bold text-stone-600">Checkout unavailable in demo</button><Link href="/cart" className="mt-4 block text-center text-sm font-semibold text-brand-700 hover:underline">Back to Cart</Link></aside></div></div></>;
}
