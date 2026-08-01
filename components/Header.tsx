"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const { totalItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-glow-line bg-glow-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#topo" className="flex items-center gap-3">
            <Image
              src="/brand/logo.jpg"
              alt="Glow Sister"
              width={52}
              height={52}
              className="rounded-full ring-1 ring-glow-gold/40"
              priority
            />
            <span className="font-display text-xl font-semibold tracking-tight text-glow-ink">
              Glow Sister
            </span>
          </a>

          <nav className="hidden items-center gap-12 text-[13px] font-medium uppercase tracking-[0.14em] text-glow-ink-soft lg:flex">
            <a href="#catalogo" className="transition hover:text-glow-ink">
              Catálogo
            </a>
            <a href="#vip" className="transition hover:text-glow-ink">
              Glow VIP
            </a>
            <a href="#contato" className="transition hover:text-glow-ink">
              Contato
            </a>
          </nav>

          <button
            onClick={() => setCartOpen(true)}
            className="glow-gradient-bg glow-shadow relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-glow-bg transition hover:brightness-110"
            aria-label="Abrir carrinho"
          >
            <span className="hidden sm:inline">Sacola</span>
            <span aria-hidden>·</span>
            <span>{totalItems}</span>
          </button>
        </div>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
