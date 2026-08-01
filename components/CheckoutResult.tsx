"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/lib/cart-context";

type Variant = "sucesso" | "pendente" | "falha";

const content: Record<
  Variant,
  { emoji: string; title: string; description: string; clearCart: boolean }
> = {
  sucesso: {
    emoji: "🎉",
    title: "Pagamento aprovado!",
    description:
      "Seu pedido foi confirmado. Em breve você recebe os detalhes da entrega.",
    clearCart: true,
  },
  pendente: {
    emoji: "⏳",
    title: "Pagamento em análise",
    description:
      "Assim que a confirmação chegar do Mercado Pago, avisaremos sobre o seu pedido.",
    clearCart: true,
  },
  falha: {
    emoji: "😕",
    title: "Não foi possível concluir o pagamento",
    description: "Nenhum valor foi cobrado. Você pode tentar novamente quando quiser.",
    clearCart: false,
  },
};

export default function CheckoutResult({ variant }: { variant: Variant }) {
  const { emoji, title, description, clearCart } = content[variant];
  const { clear } = useCart();
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");

  useEffect(() => {
    if (clearCart) {
      clear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearCart]);

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 px-6 py-32 text-center">
      <span className="text-6xl">{emoji}</span>
      <h1 className="font-display text-3xl font-medium text-glow-ink">
        {title}
      </h1>
      <p className="text-base text-glow-ink-soft">{description}</p>
      {paymentId && (
        <p className="text-xs text-glow-ink-soft/60">Referência: {paymentId}</p>
      )}
      <Link
        href="/#catalogo"
        className="glow-gradient-bg glow-shadow mt-4 rounded-full px-8 py-4 text-sm font-semibold text-glow-bg transition hover:brightness-110"
      >
        Voltar ao catálogo
      </Link>
    </section>
  );
}
