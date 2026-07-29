"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { NAV_LINKS } from "@/content/site";
import { EASE_YANDU } from "@/lib/motion";

export function MobileNav({
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
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex flex-col bg-forest text-cream md:hidden"
        >
          <motion.nav
            className="flex flex-1 flex-col items-start justify-center gap-2 px-8"
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
                className="font-heading text-4xl font-bold tracking-tight"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              onClick={onClose}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_YANDU } },
              }}
              className="mt-8 rounded-md bg-marigold px-6 py-3.5 font-bold text-ink"
            >
              Chama agora
            </motion.a>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
