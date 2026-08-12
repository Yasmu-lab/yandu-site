"use client";

import { useEffect, useState } from "react";

import { NAV_LINKS, SITE } from "@/content/site";
import { cn } from "@/lib/utils";

import { NavOverlay } from "./nav-overlay";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled ? "bg-stone/85 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <a href="#inicio" className="type-wordmark text-xl text-ink">
            Yandu
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="type-label text-ink transition-opacity hover:opacity-55"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="type-label rounded-full bg-ink px-5 py-2.5 text-stone transition-colors hover:bg-slate"
            >
              Vamos conversar
            </a>
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-overlay"
            onClick={() => setMenuOpen(true)}
            className="type-label text-ink transition-opacity hover:opacity-60 md:hidden"
          >
            Menu
          </button>
        </nav>
      </header>

      <NavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
