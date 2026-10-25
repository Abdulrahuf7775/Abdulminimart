import Link from "next/link";

export default function NotFound() {
  return <div className="py-20 text-center"><p className="text-sm font-bold text-brand-700">404 · Not found</p><h1 className="mt-2 text-3xl font-extrabold">We couldn’t find that page</h1><p className="mt-3 text-stone-500">The product or page may have moved.</p><Link href="/products" className="mt-6 inline-flex rounded-xl bg-brand-700 px-5 py-3 font-bold text-white">Browse Products</Link></div>;
}
