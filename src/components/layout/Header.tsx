"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, Search, ShoppingCart, Store, UserRound, X } from "lucide-react";
import { categories } from "@/data/categories";
import { useShop } from "@/context/ShopContext";

export function Header() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useShop();
  return (
    <>
      <div className="bg-brand-900 px-4 py-2 text-center text-xs font-medium tracking-wide text-white sm:text-sm">
        Welcome to Abdulmart — your everyday essentials, delivered with ease!
      </div>
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-4 sm:px-6 lg:flex-nowrap lg:gap-6">
          <button className="rounded-lg p-2 text-stone-700 hover:bg-stone-100 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link href="/" className="flex shrink-0 items-center gap-2 text-brand-800" aria-label="Abdulmart home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700 text-white"><Store size={23} /></span>
            <span className="text-xl font-extrabold tracking-tight">Abdul<span className="text-brand-600">mart</span></span>
          </Link>
          <div className="hidden shrink-0 text-xs leading-5 text-stone-500 xl:block">Deliver to<br /><strong className="text-stone-800">Nigeria</strong></div>
          <form action="/search" className="order-last flex h-11 w-full overflow-hidden rounded-xl border border-stone-300 bg-stone-50 focus-within:border-brand-600 focus-within:ring-2 focus-within:ring-brand-100 lg:order-none lg:flex-1">
            <label className="sr-only" htmlFor="site-search">Search products</label>
            <input id="site-search" name="q" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search groceries, household essentials..." className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />
            <button className="flex w-12 items-center justify-center bg-brand-700 text-white transition hover:bg-brand-800" aria-label="Search"><Search size={19} /></button>
          </form>
          <Link href="/wishlist" className="hidden items-center gap-2 text-sm font-semibold text-stone-700 hover:text-brand-700 sm:flex"><Heart size={20} /> <span className="hidden xl:inline">Wishlist</span></Link>
          <Link href="/account" className="flex items-center gap-2 rounded-lg p-2 text-stone-700 hover:bg-brand-50 hover:text-brand-700" aria-label="Your account">
            <UserRound size={20} /><span className="hidden text-sm font-semibold sm:inline">Account</span>
          </Link>
          <Link href="/cart" className="relative flex items-center gap-2 rounded-lg p-2 text-stone-700 hover:bg-brand-50 hover:text-brand-700" aria-label={`Shopping cart, ${itemCount} items`}>
            <ShoppingCart size={22} /><span className="hidden text-sm font-semibold sm:inline">Cart</span>
            {itemCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-[11px] font-bold text-stone-900">{itemCount}</span>}
          </Link>
        </div>
        <nav aria-label="Product categories" className={`${menuOpen ? "block" : "hidden"} border-t border-stone-100 lg:block`}>
          <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6">
            <Link href="/products" onClick={() => setMenuOpen(false)} className="shrink-0 rounded-full px-3 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50">All Products</Link>
            {categories.map((category) => <Link key={category.slug} href={`/categories/${category.slug}`} onClick={() => setMenuOpen(false)} className="shrink-0 rounded-full px-3 py-2 text-sm text-stone-600 hover:bg-brand-50 hover:text-brand-800">{category.name}</Link>)}
          </div>
        </nav>
      </header>
    </>
  );
}
