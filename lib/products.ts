import { Product, ProductCategory } from "./types";

export const categoryLabels: Record<ProductCategory, string> = {
  skincare: "Skincare",
  maquiagem: "Maquiagem",
  essentials: "Essentials",
  vip: "Glow VIP",
};

/**
 * Catálogo montado a partir dos produtos mencionados publicamente no
 * Instagram @_gloowsister. Alguns itens já usam fotos reais baixadas dos
 * posts (campo `image`); os demais caem no fallback emoji/gradiente.
 * Preços ainda são placeholders — o Instagram não expõe valores sem login.
 * Confirme os preços reais antes de publicar a loja.
 */
export const products: Product[] = [
  {
    id: "alleva-serum-clareador",
    slug: "serum-facial-clareador-7-em-1",
    name: "Sérum Facial Clareador 7 em 1",
    brand: "Alleva Skin",
    description: "Sérum facial 30ml com ação clareadora e uniformizadora para a pele.",
    details:
      "Fórmula 7 em 1 que ajuda a uniformizar o tom da pele, reduzir manchas e dar mais luminosidade ao rosto. Uso diário, manhã ou noite.",
    price: 69.9,
    category: "skincare",
    badge: "Mais vendido",
    emoji: "✨",
    gradient: "from-glow-rose/25 to-glow-gold-light/30",
  },
  {
    id: "dermachem-sabonete-rosa-mosqueta",
    slug: "sabonete-facial-rosa-mosqueta",
    name: "Sabonete Facial Rosa Mosqueta",
    brand: "Dermachem",
    description: "Sabonete facial 100ml com rosa mosqueta para pele sensível e extra seca.",
    details:
      "Limpeza suave enriquecida com rosa mosqueta e mix de terpenos, indicado para peles sensíveis e extra secas. Não resseca nem agride.",
    price: 39.9,
    category: "skincare",
    emoji: "🌹",
    gradient: "from-glow-blush to-glow-rose/25",
    image: "/produtos/sabonete-rosa-mosqueta.jpg",
  },
  {
    id: "dermachem-sabonete-primer",
    slug: "sabonete-primer-pre-maquiagem",
    name: "Sabonete Primer Pré-Maquiagem",
    brand: "Dermachem",
    description: "Sabonete facial que limpa, tonifica e prepara a pele para a make.",
    details:
      "Higienização suave que remove impurezas e prepara a pele para receber a maquiagem, deixando o resultado final mais uniforme e duradouro.",
    price: 39.9,
    category: "skincare",
    emoji: "🧼",
    gradient: "from-glow-gold-light to-glow-gold-light/40",
    image: "/produtos/sabonete-primer.jpg",
  },
  {
    id: "rubyrose-gel-sobrancelhas",
    slug: "gel-fixador-de-sobrancelhas",
    name: "Gel Fixador de Sobrancelhas",
    brand: "Ruby Rose",
    description: "Gel fixador 5ml para sobrancelhas alinhadas o dia todo.",
    details:
      "Fixação transparente e de longa duração, disciplina os fios sem deixar a sobrancelha rígida ou esbranquiçada.",
    price: 24.9,
    category: "maquiagem",
    emoji: "💄",
    gradient: "from-glow-blush to-glow-gold-light/60",
    image: "/produtos/gel-sobrancelhas.jpg",
  },
  {
    id: "glow-pink-cheeks",
    slug: "glow-pink-cheeks",
    name: "Glow Pink Cheeks",
    brand: "Glow Beleza",
    description: "Blush cremoso multiuso para bochechas com efeito natural iluminado.",
    details:
      "Textura cremosa de fácil esfumado, pode ser usado nas bochechas e lábios para um efeito \"recém-chegada da praia\".",
    price: 34.9,
    category: "maquiagem",
    badge: "Queridinho",
    emoji: "🌸",
    gradient: "from-glow-rose/20 to-glow-blush",
  },
  {
    id: "glow-corretivo",
    slug: "glow-corretivo",
    name: "Glow Corretivo",
    brand: "Glow Beleza",
    description: "Corretivo de alta cobertura para disfarçar olheiras e imperfeições.",
    details:
      "Cobertura modelável que disfarça olheiras, manchas e imperfeições sem marcar linhas de expressão. Acabamento natural.",
    price: 39.9,
    category: "maquiagem",
    emoji: "🩷",
    gradient: "from-glow-blush to-glow-gold-light/50",
  },
  {
    id: "glow-blush-liquido",
    slug: "glow-blush-liquido",
    name: "Glow Blush Líquido",
    brand: "Glow Beleza",
    description: "Blush líquido de fácil esfumado para um efeito corado natural.",
    details:
      "Textura líquida leve, seca rápido e dura o dia todo. Pode ser aplicado com os dedos direto nas bochechas.",
    price: 32.9,
    category: "maquiagem",
    emoji: "💗",
    gradient: "from-glow-rose/20 to-glow-gold-light/40",
  },
  {
    id: "glow-skin",
    slug: "glow-skin",
    name: "Glow Skin",
    brand: "Glow Beleza",
    description: "Sabonete facial desmaquilante que limpa sem ressecar a pele.",
    details:
      "Remove maquiagem e impurezas com uma limpeza suave, respeitando a barreira natural da pele e preparando o rosto para o restante da rotina de skincare.",
    price: 49.9,
    category: "skincare",
    emoji: "💧",
    gradient: "from-glow-gold-light/60 to-glow-blush",
  },
  {
    id: "kit-glow-essentials",
    slug: "kit-glow-essentials",
    name: "Kit Glow Essentials",
    brand: "Glow Beleza",
    description: "Combo com os itens essenciais da rotina de beleza Glow Sister.",
    details:
      "Kit com uma seleção dos produtos mais usados na rotina diária: skincare + maquiagem básica, com desconto em relação à compra avulsa.",
    price: 129.9,
    category: "essentials",
    badge: "Kit completo",
    emoji: "🎁",
    gradient: "from-glow-rose/25 to-glow-gold-light",
    image: "/produtos/kit-glow-essentials.jpg",
  },
  {
    id: "glow-vip-box",
    slug: "glow-vip-box",
    name: "Glow VIP Box",
    brand: "Glow Sister",
    description: "Assinatura mensal com produtos selecionados e benefícios exclusivos.",
    details:
      "Faça parte do clube Glow VIP e receba mensalmente uma seleção de produtos com condições especiais, frete prioritário e brindes exclusivos.",
    price: 89.9,
    category: "vip",
    badge: "Assinatura",
    emoji: "👑",
    gradient: "from-glow-gold-light to-glow-rose/25",
    image: "/produtos/vip-box.jpg",
  },
];

export function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
