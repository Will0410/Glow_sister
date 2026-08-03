import Image from "next/image";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden border-b border-glow-line bg-glow-bg">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-glow-rose/25 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-glow-gold/20 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-36">
        <div className="flex flex-col gap-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-glow-gold/30 bg-glow-surface px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-glow-gold-light">
            Essentials + Glow VIP
          </span>
          <h1 className="max-w-xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-glow-ink sm:text-6xl lg:text-7xl">
            Bem-vinda ao <span className="glow-gradient-text">universo Glow</span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-glow-ink-soft">
            Você merece se sentir incrível. Maquiagem e skincare selecionados
            a dedo, com entrega para todo o Brasil.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <a
              href="#catalogo"
              className="glow-gradient-bg glow-shadow rounded-full px-8 py-4 text-sm font-semibold text-glow-on-accent transition hover:brightness-110"
            >
              Ver catálogo
            </a>
            <a
              href="#vip"
              className="rounded-full border border-glow-gold/40 px-8 py-4 text-sm font-semibold text-glow-gold-light transition hover:border-glow-gold hover:bg-glow-surface"
            >
              Conhecer o Glow VIP
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-glow-gold/25 bg-glow-surface shadow-[0_30px_80px_-30px_rgba(255,63,139,0.35)]">
          <Image
            src="/produtos/sabonete-rosa-mosqueta.jpg"
            alt="Produto Glow Sister"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-glow-gold/20 bg-glow-bg/80 px-5 py-4 backdrop-blur">
            <p className="text-[11px] uppercase tracking-[0.16em] text-glow-gold-light">
              Mais vendido
            </p>
            <p className="font-display text-lg text-glow-ink">
              Sérum Facial Clareador 7 em 1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
