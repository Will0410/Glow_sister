"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "./CartDrawer";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { totalItems } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-glow-line bg-glow-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-10 sm:py-4">
          <a href="#topo" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <Image
              src="/brand/logo.jpg"
              alt="Glow Sister"
              width={44}
              height={44}
              className="h-10 w-10 shrink-0 rounded-full ring-1 ring-glow-gold/40 sm:h-13 sm:w-13"
              priority
            />
            <span className="truncate font-display text-lg font-semibold tracking-tight text-glow-ink sm:text-xl">
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

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button
              onClick={() => setCartOpen(true)}
              className="glow-gradient-bg glow-shadow relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-glow-on-accent transition hover:brightness-110 sm:gap-2 sm:px-5"
              aria-label="Abrir carrinho"
            >
              <span className="hidden sm:inline">Sacola</span>
              <span aria-hidden>·</span>
              <span>{totalItems}</span>
            </button>
          </div>
        </div>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
