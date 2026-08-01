# Glow Sister — Loja Online

Catálogo e checkout transacional inspirados no Instagram [@_gloowsister](https://www.instagram.com/_gloowsister), construído em Next.js 16 + Tailwind CSS v4, com pagamento via Mercado Pago (Checkout Pro).

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Configurando o pagamento (obrigatório para vender de verdade)

1. Copie `.env.local.example` para `.env.local`.
2. No painel do Mercado Pago (**Suas integrações → Credenciais**), pegue o **Access Token**.
   - Use a credencial de **teste** enquanto ainda está validando o site.
   - Só troque para a credencial de **produção** quando for publicar de verdade.
3. Preencha:
   ```
   MP_ACCESS_TOKEN=seu_access_token_aqui
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```
4. Em produção, atualize `NEXT_PUBLIC_SITE_URL` para o domínio real (usado para montar os links de retorno após o pagamento).

Sem o `MP_ACCESS_TOKEN` configurado, o botão "Finalizar compra" mostra um erro amigável em vez de quebrar.

## Atualizando o catálogo

Os produtos ficam em [lib/products.ts](lib/products.ts). Os itens atuais foram montados a partir dos nomes de produtos mencionados publicamente no Instagram — **preços e imagens são placeholders** (ícones/gradientes) e precisam ser substituídos:

- `price`: valor real em reais.
- Para usar fotos reais, troque o bloco de `emoji`/`gradient` no `ProductCard` por `next/image` apontando para as fotos dos produtos (coloque os arquivos em `public/produtos/`).

## Estrutura

- `app/` — páginas (catálogo na home, retorno do checkout em `checkout/sucesso|pendente|falha`).
- `components/` — UI (Header, Hero, ProductGrid, CartDrawer, WhatsAppButton, Footer).
- `lib/` — dados do catálogo, contexto do carrinho (`cart-context.tsx`) e a Server Action que cria a preferência de pagamento (`actions.ts`).

## Deploy

Qualquer host compatível com Next.js funciona (Vercel é o mais simples). Lembre de configurar `MP_ACCESS_TOKEN` e `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente da hospedagem.
