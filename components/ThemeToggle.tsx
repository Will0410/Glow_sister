"use client";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("glow-theme", next);
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema claro/escuro"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-glow-line text-base text-glow-ink transition hover:border-glow-gold/40"
    >
      <span className="theme-icon-sun" aria-hidden>
        ☀️
      </span>
      <span className="theme-icon-moon" aria-hidden>
        🌙
      </span>
    </button>
  );
}
