"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <Link
      href={`/produto/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-glow-line bg-glow-surface transition hover:border-glow-gold/40 hover:shadow-[0_20px_50px_-20px_rgba(255,63,139,0.35)]"
    >
      <div className="relative aspect-square overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br text-4xl ${product.gradient}`}
          >
            <span className="opacity-80">{product.emoji}</span>
          </div>
        )}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full border border-glow-gold/30 bg-glow-bg/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-glow-gold-light backdrop-blur">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-glow-gold">
          {product.brand}
        </span>
        <h3 className="font-display text-lg font-medium leading-snug text-glow-ink">
          {product.name}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-glow-ink-soft">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-semibold text-glow-ink">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="glow-gradient-bg rounded-full px-4 py-2 text-xs font-semibold text-glow-bg transition hover:brightness-110"
          >
            Adicionar
          </button>
        </div>
      </div>
    </Link>
  );
}
