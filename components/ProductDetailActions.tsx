"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import { useCart } from "@/lib/cart-context";

export default function ProductDetailActions({ product }: { product: Product }) {
  const { addItem, setQuantity, items } = useCart();
  const [added, setAdded] = useState(false);

  const inCart = items.find((item) => item.product.id === product.id);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleAdd}
        className="glow-gradient-bg glow-shadow w-full rounded-full py-4 text-sm font-semibold text-glow-bg transition hover:brightness-110 sm:w-auto sm:px-10"
      >
        {added ? "Adicionado ✓" : "Adicionar à sacola"}
      </button>

      {inCart && (
        <div className="flex items-center gap-3 text-sm text-glow-ink-soft">
          <span>Na sacola: {inCart.quantity}</span>
          <button
            onClick={() => setQuantity(product.id, inCart.quantity - 1)}
            className="h-7 w-7 rounded-full border border-glow-line text-glow-ink transition hover:border-glow-gold/40"
            aria-label="Diminuir quantidade"
          >
            −
          </button>
          <button
            onClick={() => setQuantity(product.id, inCart.quantity + 1)}
            className="h-7 w-7 rounded-full border border-glow-line text-glow-ink transition hover:border-glow-gold/40"
            aria-label="Aumentar quantidade"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
