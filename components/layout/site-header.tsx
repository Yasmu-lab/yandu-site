"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LogoMark } from "@/components/logo-mark";
import { NAV_LINKS, SITE } from "@/content/site";
import { cn } from "@/lib/utils";

import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
      setCtaVisible(window.scrollY > window.innerHeight * 0.6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => Boolean(el),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-transparent bg-cream/90 backdrop-blur-md transition-[background-color,box-shadow] duration-300",
          scrolled && "bg-cream/98 border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
        )}
      >
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-4"
      >
        <a href="#main-content" className="flex items-center gap-2">
          <LogoMark className="h-[26px] w-[26px]" />
          <span className="font-heading text-[19px] font-bold text-forest">
            {SITE.name.toLowerCase()}
          </span>
        </a>

        <div className="hidden items-center gap-5 text-[13.5px] font-semibold md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative pb-1 transition-colors hover:text-marigold-text after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:origin-left after:scale-x-0 after:bg-marigold after:transition-transform after:duration-300",
                activeHash === link.href && "text-forest after:scale-x-100",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className={cn(
              "hidden rounded-md bg-forest px-4.5 py-2.5 text-[13px] font-bold text-cream opacity-0 transition-all duration-300 hover:bg-forest-deep md:inline-flex",
              ctaVisible && "opacity-100",
            )}
            style={{ pointerEvents: ctaVisible ? "auto" : "none" }}
          >
            Chama agora
          </a>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded p-2.5 text-forest md:hidden"
          >
            {menuOpen ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
          </button>
        </div>
      </motion.nav>
      </header>

      {/* Rendered outside <header> because its `backdrop-blur` establishes a
          containing block for `position: fixed` descendants, which would
          otherwise cap this full-screen overlay to the header's own height. */}
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
