"use server";

import { redirect } from "next/navigation";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { CartItem } from "./types";

export async function checkoutAction(items: CartItem[]): Promise<void> {
  if (!items.length) {
    throw new Error("Carrinho vazio.");
  }

  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error(
      "MP_ACCESS_TOKEN não configurado. Defina a variável de ambiente com o Access Token do Mercado Pago."
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

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

  const checkoutUrl = result.init_point ?? result.sandbox_init_point;
  if (!checkoutUrl) {
    throw new Error("Não foi possível gerar o link de pagamento.");
  }

  redirect(checkoutUrl);
}
