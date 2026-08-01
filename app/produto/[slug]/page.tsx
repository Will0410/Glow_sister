import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabels, formatPrice, products } from "@/lib/products";
import ProductDetailActions from "@/components/ProductDetailActions";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Glow Sister`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
      <Link
        href="/#catalogo"
        className="text-xs font-medium uppercase tracking-[0.14em] text-glow-ink-soft transition hover:text-glow-ink"
      >
        ← Voltar ao catálogo
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-glow-line bg-glow-surface">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br text-7xl ${product.gradient}`}
            >
              <span className="opacity-80">{product.emoji}</span>
            </div>
          )}
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full border border-glow-gold/30 bg-glow-bg/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-glow-gold-light backdrop-blur">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-glow-gold">
              {product.brand} · {categoryLabels[product.category]}
            </span>
            <h1 className="mt-2 font-display text-3xl font-medium text-glow-ink sm:text-4xl">
              {product.name}
            </h1>
          </div>

          <p className="text-2xl font-semibold text-glow-ink">
            {formatPrice(product.price)}
          </p>

          <p className="text-base leading-relaxed text-glow-ink-soft">
            {product.description}
          </p>

          <div className="rounded-2xl border border-glow-line bg-glow-surface p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-glow-gold">
              Detalhes do produto
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-glow-ink-soft">
              {product.details}
            </p>
          </div>

          <ProductDetailActions product={product} />

          <a
            href={`https://wa.me/5511913274863?text=${encodeURIComponent(
              `Oi! Tenho uma dúvida sobre ${product.name} ✨`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-glow-ink-soft underline underline-offset-2 transition hover:text-glow-ink"
          >
            Dúvidas? Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
