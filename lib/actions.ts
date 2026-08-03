"use server";

import { redirect } from "next/navigation";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { CartItem } from "./types";

type CheckoutResult = { error: string } | undefined;

// Server Actions redact thrown Error messages in production by default, so
// expected/handled failures (missing config, API error) are returned as data
// instead of thrown — that way the real message reaches the client safely.
export async function checkoutAction(items: CartItem[]): Promise<CheckoutResult> {
  if (!items.length) {
    return { error: "Carrinho vazio." };
  }

  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken) {
    return {
      error:
        "Pagamento ainda não configurado. Defina MP_ACCESS_TOKEN nas variáveis de ambiente com o Access Token do Mercado Pago.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  let checkoutUrl: string | undefined;
  try {
    const client = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: items.map((item) => ({
          id: item.product.id,
          title: item.product.name,
          description: item.product.description,
          quantity: item.quantity,
          currency_id: "BRL",
          unit_price: item.product.price,
        })),
        back_urls: {
          success: `${siteUrl}/checkout/sucesso`,
          pending: `${siteUrl}/checkout/pendente`,
          failure: `${siteUrl}/checkout/falha`,
        },
        auto_return: "approved",
        statement_descriptor: "GLOW SISTER",
      },
    });

    checkoutUrl = result.init_point ?? result.sandbox_init_point;
  } catch {
    return {
      error:
        "Não foi possível conectar ao Mercado Pago. Verifique se o Access Token está correto e tente novamente.",
    };
  }

  if (!checkoutUrl) {
    return { error: "Não foi possível gerar o link de pagamento." };
  }

  redirect(checkoutUrl);
}
