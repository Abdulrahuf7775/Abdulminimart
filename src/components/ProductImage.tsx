"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";

export function ProductImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className={`flex items-center justify-center bg-stone-100 text-stone-400 ${className}`} role="img" aria-label={alt}>
      <ImageOff aria-hidden="true" />
    </div>;
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}
