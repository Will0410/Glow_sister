"use client";

import { useMemo, useState } from "react";
import { products, categoryLabels } from "@/lib/products";
import { ProductCategory } from "@/lib/types";
import ProductCard from "./ProductCard";

const filters: Array<{ label: string; value: ProductCategory | "todos" }> = [
  { label: "Todos", value: "todos" },
  ...(Object.entries(categoryLabels) as [ProductCategory, string][]).map(
    ([value, label]) => ({ label, value })
  ),
];

export default function ProductGrid() {
  const [active, setActive] = useState<ProductCategory | "todos">("todos");

  const visibleProducts = useMemo(
    () =>
      active === "todos"
        ? products
        : products.filter((product) => product.category === active),
    [active]
  );

  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
      <div className="mb-14 flex flex-col gap-6 border-b border-glow-line pb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-glow-gold">
            Catálogo
          </span>
          <h2 className="mt-2 font-display text-4xl font-medium text-glow-ink sm:text-5xl">
            Nossos produtos
          </h2>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                active === filter.value
                  ? "glow-gradient-bg border-transparent text-glow-on-accent"
                  : "border-glow-line text-glow-ink-soft hover:border-glow-gold/40 hover:text-glow-ink"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
