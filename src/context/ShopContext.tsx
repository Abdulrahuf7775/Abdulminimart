"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { products } from "@/data/products";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import type { CartItem } from "@/types/product";

interface ShopContextValue {
  cart: CartItem[];
  wishlist: string[];
  hydrated: boolean;
  itemCount: number;
  subtotal: number;
  addToCart: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  toggleWishlist: (productId: string) => void;
}

const ShopContext = createContext<ShopContextValue | null>(null);
const CART_KEY = "abdulmart-cart:";
const WISHLIST_KEY = "abdulmart-wishlist:";

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const currentUserId = useRef<string | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setAuthReady(true);
      return;
    }

    const { data: { subscription } } = createClient().auth.onAuthStateChange((_event, session) => {
      const nextUserId = session?.user.id ?? null;
      if (currentUserId.current !== nextUserId) {
        currentUserId.current = nextUserId;
        setCart([]);
        setWishlist([]);
        setHydrated(false);
      }
      setUserId(nextUserId);
      setAuthReady(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!authReady) return;

    if (!userId) {
      setCart([]);
      setWishlist([]);
      setHydrated(true);
      return;
    }

    try {
      const savedCart: unknown = JSON.parse(localStorage.getItem(`${CART_KEY}${userId}`) || "[]");
      const savedWishlist: unknown = JSON.parse(localStorage.getItem(`${WISHLIST_KEY}${userId}`) || "[]");
      if (Array.isArray(savedCart)) {
        setCart(savedCart.filter((item): item is CartItem =>
          item && typeof item.productId === "string" && Number.isInteger(item.quantity) &&
          item.quantity > 0 && products.some((product) => product.id === item.productId),
        ));
      }
      if (Array.isArray(savedWishlist)) {
        setWishlist(savedWishlist.filter((id): id is string =>
          typeof id === "string" && products.some((product) => product.id === id),
        ));
      }
    } catch {
      localStorage.removeItem(`${CART_KEY}${userId}`);
      localStorage.removeItem(`${WISHLIST_KEY}${userId}`);
      toast.error("Saved shopping data could not be loaded.");
    } finally {
      setHydrated(true);
    }
  }, [authReady, userId]);

  useEffect(() => {
    if (hydrated && userId) localStorage.setItem(`${CART_KEY}${userId}`, JSON.stringify(cart));
  }, [cart, hydrated, userId]);

  useEffect(() => {
    if (hydrated && userId) localStorage.setItem(`${WISHLIST_KEY}${userId}`, JSON.stringify(wishlist));
  }, [wishlist, hydrated, userId]);

  const value = useMemo<ShopContextValue>(() => {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return sum + (product?.price ?? 0) * item.quantity;
    }, 0);

    return {
      cart, wishlist, hydrated, itemCount, subtotal,
      addToCart: (productId, quantity = 1) => {
        if (!userId) {
          const next = `${window.location.pathname}${window.location.search}`;
          window.location.assign(`/login?next=${encodeURIComponent(next)}`);
          return;
        }
        const product = products.find((entry) => entry.id === productId);
        if (!product || !product.inStock) return;
        setCart((current) => {
          const existing = current.find((item) => item.productId === productId);
          return existing
            ? current.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item)
            : [...current, { productId, quantity }];
        });
        toast.success(`${product.name} added to cart`);
      },
      updateQuantity: (productId, quantity) => {
        if (!userId) return;
        if (quantity < 1) return;
        setCart((current) => current.map((item) => item.productId === productId ? { ...item, quantity } : item));
      },
      removeFromCart: (productId) => {
        if (!userId) return;
        const product = products.find((entry) => entry.id === productId);
        setCart((current) => current.filter((item) => item.productId !== productId));
        if (product) toast.success(`${product.name} removed from cart`);
      },
      toggleWishlist: (productId) => {
        if (!userId) {
          const next = `${window.location.pathname}${window.location.search}`;
          window.location.assign(`/login?next=${encodeURIComponent(next)}`);
          return;
        }
        const product = products.find((entry) => entry.id === productId);
        const saved = wishlist.includes(productId);
        setWishlist((current) => saved ? current.filter((id) => id !== productId) : [...current, productId]);
        if (product) toast(saved ? "Removed from wishlist" : "Saved to wishlist");
      },
    };
  }, [cart, wishlist, hydrated, userId]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used inside ShopProvider");
  return context;
}
