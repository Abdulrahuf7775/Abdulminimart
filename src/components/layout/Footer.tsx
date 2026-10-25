import Link from "next/link";
import { Store } from "lucide-react";
import { categories } from "@/data/categories";

export function Footer() {
  return <footer className="mt-20 bg-stone-950 text-stone-300">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <Link href="/" className="mb-4 inline-flex items-center gap-2 text-xl font-extrabold text-white"><Store className="text-emerald-400" /> Abdulmart</Link>
        <p className="max-w-xs text-sm leading-6 text-stone-400">Everyday essentials in one convenient place. Browse our frontend shopping demo and discover the Abdulmart experience.</p>
      </div>
      <div><h2 className="mb-4 font-bold text-white">Shop</h2><ul className="space-y-3 text-sm"><li><Link href="/products" className="hover:text-white">All products</Link></li><li><Link href="/categories/groceries" className="hover:text-white">Groceries</Link></li><li><Link href="/categories/frozen-foods" className="hover:text-white">Frozen foods</Link></li><li><Link href="/wishlist" className="hover:text-white">Wishlist</Link></li></ul></div>
      <div><h2 className="mb-4 font-bold text-white">Categories</h2><ul className="grid grid-cols-2 gap-3 text-sm">{categories.slice(0, 6).map((category) => <li key={category.slug}><Link href={`/categories/${category.slug}`} className="hover:text-white">{category.name}</Link></li>)}</ul></div>
      <div><h2 className="mb-4 font-bold text-white">Customer care</h2><p className="text-sm leading-6 text-stone-400">Contact details and support channels will be added by the Abdulmart team.</p><p className="mt-4 text-sm text-stone-400">Privacy Policy · Terms &amp; Conditions</p></div>
    </div>
    <div className="border-t border-stone-800 px-4 py-5 text-center text-xs text-stone-500">© {new Date().getFullYear()} Abdulmart. Frontend prototype — sample products and prices are for demonstration only.</div>
  </footer>;
}
