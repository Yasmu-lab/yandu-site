"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
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
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
          scrolled
            ? "bg-bone/90 shadow-[0_1px_0_rgba(15,17,26,0.08)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/#inicio"
            className={cn(
              "font-[family-name:var(--font-display)] text-lg italic tracking-[-0.01em] transition-colors",
              scrolled ? "text-vault-ink" : "text-bone",
            )}
          >
            yandu
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-60",
                  scrolled ? "text-vault-ink" : "text-bone",
                )}
              >
                {link.label}
              </a>
            ))}
            <Button asChild variant={scrolled ? "solid-dark" : "solid-light"} size="sm">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                Vamos conversar
              </a>
            </Button>
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-overlay"
            onClick={() => setMenuOpen(true)}
            className={cn(
              "font-mono text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-70 md:hidden",
              scrolled ? "text-vault-ink" : "text-bone",
            )}
          >
            Menu
          </button>
        </nav>
      </header>

      <NavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
