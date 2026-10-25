"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, HeartHandshake, PackageCheck, ShieldCheck } from "lucide-react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductImage } from "@/components/ProductImage";

const benefits = [
  { title: "Quality Products", text: "Thoughtfully selected everyday essentials.", icon: BadgeCheck },
  { title: "Convenient Shopping", text: "Find the things you need in one place.", icon: PackageCheck },
  { title: "Everyday Value", text: "Clear sample pricing across the catalogue.", icon: HeartHandshake },
  { title: "Checkout Preview", text: "A frontend demo only; no payments are processed.", icon: ShieldCheck },
];

export function HomeSections() {
  const featured = products.filter((product) => product.featured).slice(0, 8);
  const bestSellers = products.filter((product) => product.bestSeller);
  const offers = products.filter((product) => product.originalPrice);
  const recent = products.filter((product) => product.recentlyAdded);
  return <>
    <section className="relative isolate overflow-hidden rounded-[2rem] bg-brand-900 px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
      <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-100">Everyday essentials, made easy</span>
          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Everything You Need, <span className="text-emerald-300">All in One Place.</span></h1>
          <p className="mt-5 max-w-xl leading-7 text-emerald-50/80">Shop groceries, frozen foods, beauty essentials, and everyday household products at Abdulmart.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/products" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-amber-300 px-5 font-bold text-stone-900 transition hover:bg-amber-200">Shop Now <ArrowRight size={18} /></Link><Link href="#categories" className="inline-flex min-h-12 items-center rounded-xl border border-white/30 px-5 font-semibold hover:bg-white/10">Explore Categories</Link></div>
          <p className="mt-5 text-xs text-emerald-100/70">Demonstration products and prices only; availability is not verified.</p>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <ProductImage src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85" alt="Fresh produce arranged in a grocery market" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl" />
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white p-4 text-stone-900 shadow-xl sm:left-4"><p className="text-xs font-semibold text-stone-500">Your neighbourhood shop</p><p className="mt-1 font-bold">A little bit of everything.</p></div>
        </div>
      </div>
    </section>
    <section className="my-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(({ title, text, icon: Icon }) => <div key={title} className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700"><Icon size={20} /></span><div><h2 className="font-bold">{title}</h2><p className="mt-1 text-xs leading-5 text-stone-500">{text}</p></div></div>)}</section>
    <section id="categories" className="py-8"><div className="mb-6 flex items-end justify-between"><div><p className="text-sm font-semibold text-brand-700">Browse the aisles</p><h2 className="mt-1 text-2xl font-extrabold">Shop by Category</h2></div><Link href="/products" className="text-sm font-bold text-brand-700 hover:underline">View all</Link></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{categories.filter((category) => category.name !== "Kitchen Essentials").map((category) => <Link key={category.slug} href={`/categories/${category.slug}`} className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-1 hover:shadow-card"><ProductImage src={`https://images.unsplash.com/${category.image}?auto=format&fit=crop&w=400&q=80`} alt="" className="aspect-square w-full object-cover" /><div className="p-3"><h3 className="text-sm font-bold group-hover:text-brand-700">{category.name}</h3><p className="mt-1 line-clamp-2 text-xs text-stone-500">{category.description}</p></div></Link>)}</div></section>
    <ProductSection title="Featured Products" eyebrow="Handpicked for you" items={featured} />
    <section className="my-14 overflow-hidden rounded-3xl bg-amber-100 px-6 py-8 sm:flex sm:items-center sm:justify-between sm:px-10"><div><p className="text-sm font-bold text-amber-900">Good finds, everyday value</p><h2 className="mt-1 text-2xl font-extrabold text-stone-900">Special Offers</h2><p className="mt-2 max-w-xl text-sm text-stone-700">A selection of sample offers. Any discount shown is calculated from the displayed prices.</p></div><Link href="/products" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-800 px-5 py-3 text-sm font-bold text-white hover:bg-brand-900 sm:mt-0">Shop offers <ArrowRight size={17} /></Link></section>
    <ProductSection title="Special Offers" eyebrow="Limited-time demo prices" items={offers} />
    <ProductSection title="Best Sellers" eyebrow="Popular picks" items={bestSellers} />
    <ProductSection title="Recently Added" eyebrow="Fresh to the catalogue" items={recent} />
    <Newsletter />
  </>;
}

function ProductSection({ title, eyebrow, items }: { title: string; eyebrow: string; items: typeof products }) {
  return <section className="py-8"><div className="mb-6 flex items-end justify-between"><div><p className="text-sm font-semibold text-brand-700">{eyebrow}</p><h2 className="mt-1 text-2xl font-extrabold">{title}</h2></div><Link href="/products" className="text-sm font-bold text-brand-700 hover:underline">Shop all</Link></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">{items.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>;
}

function Newsletter() {
  return <section className="my-12 rounded-3xl bg-brand-50 px-6 py-10 text-center sm:px-12"><p className="text-sm font-bold text-brand-700">Stay in the loop</p><h2 className="mt-2 text-2xl font-extrabold">A little good news in your inbox</h2><p className="mx-auto mt-2 max-w-lg text-sm text-stone-600">Sign up for Abdulmart updates. This demo validates your email locally and does not send or store it.</p><form className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row" onSubmit={(event) => { event.preventDefault(); const form = event.currentTarget; if (form.reportValidity()) { window.alert("Thanks for your interest! This frontend demo does not submit email addresses."); form.reset(); } }}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required placeholder="Your email address" className="min-h-12 flex-1 rounded-xl border border-stone-300 bg-white px-4 text-sm outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100" /><button className="min-h-12 rounded-xl bg-brand-700 px-5 font-bold text-white hover:bg-brand-800">Subscribe</button></form></section>;
}
