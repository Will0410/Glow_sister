"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import { checkoutAction } from "@/lib/actions";

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, setQuantity, removeItem, totalPrice } = useCart();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleCheckout() {
    setError(null);
    startTransition(async () => {
      const result = await checkoutAction(items);
      if (result?.error) {
        setError(result.error);
      }
    });
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-glow-line bg-glow-surface shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-glow-line px-5 py-4">
          <h2 className="font-display text-lg font-medium text-glow-ink">Sua sacola</h2>
          <button
            onClick={onClose}
            className="text-xl leading-none text-glow-ink-soft transition hover:text-glow-ink"
            aria-label="Fechar carrinho"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-glow-ink-soft">
              Sua sacola está vazia. Explore o catálogo e adicione seus favoritos.
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.product.id} className="flex gap-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-glow-line">
                    {item.product.image ? (
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className={`flex h-full w-full items-center justify-center bg-gradient-to-br text-xl ${item.product.gradient}`}
                      >
                        {item.product.emoji}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <span className="text-sm font-medium text-glow-ink">
                      {item.product.name}
                    </span>
                    <span className="text-xs text-glow-ink-soft">
                      {formatPrice(item.product.price)}
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <button
                        onClick={() =>
                          setQuantity(item.product.id, item.quantity - 1)
                        }
                        className="h-6 w-6 rounded-full border border-glow-line text-sm text-glow-ink transition hover:border-glow-ink/40"
                        aria-label="Diminuir quantidade"
                      >
                        −
                      </button>
                      <span className="w-5 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() =>
                          setQuantity(item.product.id, item.quantity + 1)
                        }
                        className="h-6 w-6 rounded-full border border-glow-line text-sm text-glow-ink transition hover:border-glow-ink/40"
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-2 text-xs text-glow-ink-soft underline underline-offset-2 hover:text-glow-rose-deep"
                      >
                        remover
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-glow-line px-5 py-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-glow-ink-soft">Subtotal</span>
            <span className="font-display text-lg font-medium text-glow-ink">
              {formatPrice(totalPrice)}
            </span>
          </div>
          {error && (
            <p className="mb-3 rounded-lg border border-glow-rose-deep/20 bg-glow-blush/60 px-3 py-2 text-xs text-glow-rose-deep">
              {error}
            </p>
          )}
          <button
            onClick={handleCheckout}
            disabled={items.length === 0 || isPending}
            className="glow-gradient-bg w-full rounded-full py-3.5 text-sm font-semibold text-glow-on-accent transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isPending ? "Redirecionando..." : "Finalizar compra"}
          </button>
          <p className="mt-2 text-center text-[11px] text-glow-ink-soft/70">
            Pagamento processado com segurança pelo Mercado Pago
          </p>
        </div>
      </aside>
    </>
  );
}
