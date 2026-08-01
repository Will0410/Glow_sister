export default function Footer() {
  return (
    <footer id="contato" className="border-t border-glow-line bg-glow-bg">
      <div id="vip" className="border-b border-glow-line">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-glow-gold">
            Assinatura
          </span>
          <h2 className="mt-2 font-display text-4xl font-medium text-glow-ink">
            Glow <span className="glow-gradient-text">VIP</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-glow-ink-soft">
            Assine e receba benefícios exclusivos, frete prioritário e
            condições especiais em cada compra.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-3 sm:px-10">
        <div>
          <span className="font-display text-xl font-medium text-glow-ink">
            Glow Sister
          </span>
          <p className="mt-3 text-sm leading-relaxed text-glow-ink-soft">
            Maquiagem e skincare selecionados, com entrega para todo o
            Brasil.
          </p>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-glow-gold">
            Navegação
          </span>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-glow-ink-soft">
            <li>
              <a href="#catalogo" className="transition hover:text-glow-ink">
                Catálogo
              </a>
            </li>
            <li>
              <a href="#vip" className="transition hover:text-glow-ink">
                Glow VIP
              </a>
            </li>
          </ul>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-glow-gold">
            Contato
          </span>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-glow-ink-soft">
            <li>
              <a
                href="https://www.instagram.com/_gloowsister"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-glow-ink"
              >
                @_gloowsister
              </a>
            </li>
            <li>Envios para todo o Brasil</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-glow-line px-6 py-6 text-center text-xs text-glow-ink-soft/70 sm:px-10">
        © {new Date().getFullYear()} Glow Sister. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
