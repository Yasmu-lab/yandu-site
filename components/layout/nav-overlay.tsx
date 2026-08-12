"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { PillLink } from "@/components/ui/primitives";
import { NAV_LINKS, SITE } from "@/content/site";
import { EASE, gsap } from "@/lib/gsap";

export function NavOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Kept mounted through the exit animation so closing is animated too.
  // Adjusted during render rather than in an effect, so opening paints the
  // overlay in the same commit instead of one frame late.
  const [mounted, setMounted] = useState(open);
  const overlayRef = useRef<HTMLDivElement>(null);

  if (open && !mounted) setMounted(true);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    if (!mounted || !overlay) return;

    const ctx = gsap.context(() => {
      const items = overlay.querySelectorAll("[data-nav-item]");

      if (open) {
        gsap.set(overlay, { clipPath: "inset(0 0 100% 0)" });
        gsap
          .timeline()
          .to(overlay, { clipPath: "inset(0 0 0% 0)", duration: 0.55, ease: EASE })
          .fromTo(
            items,
            { opacity: 0, y: 22 },
            { opacity: 1, y: 0, duration: 0.45, ease: EASE, stagger: 0.06 },
            "-=0.25",
          );
      } else {
        gsap.to(overlay, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => setMounted(false),
        });
      }
    }, overlay);

    return () => ctx.revert();
  }, [open, mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      id="nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      className="fixed inset-0 z-90 flex flex-col bg-ink text-stone md:hidden"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <span className="type-wordmark text-xl">Yandu</span>
        <button
          type="button"
          onClick={onClose}
          className="type-label transition-opacity hover:opacity-70"
        >
          Fechar ×
        </button>
      </div>

      <nav className="flex flex-1 flex-col items-start justify-center gap-4 px-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            data-nav-item
            className="type-display text-[13vw] text-stone transition-opacity hover:opacity-60"
          >
            {link.label}
          </a>
        ))}
        <div data-nav-item className="mt-8">
          <PillLink href={SITE.whatsapp} external tone="stone">
            Conversar no WhatsApp
          </PillLink>
        </div>
      </nav>
    </div>
  );
}
