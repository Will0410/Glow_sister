const WHATSAPP_NUMBER = "5511913274863";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Oi! Vim pelo site e queria saber mais sobre os produtos Glow Sister ✨"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg transition hover:scale-105"
      aria-label="Falar no WhatsApp"
    >
      💬
    </a>
  );
}
