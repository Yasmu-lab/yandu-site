"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="#inicio"
            className={cn(
              "text-lg font-normal tracking-[-0.02em] transition-colors",
              scrolled ? "text-vault-ink" : "text-bone",
            )}
          >
            yandu
          </Link>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-overlay"
            onClick={() => setMenuOpen(true)}
            className={cn(
              "font-mono text-sm uppercase tracking-[0.018em] transition-opacity hover:opacity-70",
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
