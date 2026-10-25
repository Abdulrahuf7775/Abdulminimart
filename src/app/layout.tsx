import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShopProvider } from "@/context/ShopContext";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Abdulmart | Everyday essentials, made easy", template: "%s | Abdulmart" },
  description: "Shop groceries, frozen foods, beauty essentials, and household products at Abdulmart. Frontend shopping demo.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ShopProvider><Header /><main className="mx-auto min-h-[50vh] max-w-7xl px-4 py-8 sm:px-6 lg:py-10">{children}</main><Footer /><Toaster position="top-center" richColors /></ShopProvider></body></html>;
}
