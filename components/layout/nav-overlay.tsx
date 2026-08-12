"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/content/site";
import { EASE_YANDU } from "@/lib/motion";

export function NavOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE_YANDU }}
          className="fixed inset-0 z-[90] flex flex-col bg-vault-ink text-bone md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5 md:px-10">
            <span className="font-[family-name:var(--font-display)] text-lg italic tracking-[-0.01em]">
              yandu
            </span>
            <button
              type="button"
              onClick={onClose}
              className="font-mono text-sm uppercase tracking-[0.018em] transition-opacity hover:opacity-70"
            >
              Fechar ×
            </button>
          </div>

          <motion.nav
            className="flex flex-1 flex-col items-start justify-center gap-3 px-8 md:px-10"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
          >
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_YANDU } },
                }}
                className="font-[family-name:var(--font-display)] text-4xl font-normal tracking-[-0.01em] transition-colors hover:text-frost"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_YANDU } },
              }}
              className="mt-8"
            >
              <Button asChild variant="solid-light" size="lg">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  Conversar no WhatsApp
                  <span className="accent-mark" aria-hidden="true" />
                </a>
              </Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
