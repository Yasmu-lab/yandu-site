import { Asterisk } from "@/components/ui/primitives";
import { FOOTER, SITE } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-slate px-6 pt-20 pb-8 text-stone md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_auto] md:gap-20">
          <div>
            <p className="type-label text-stone/60">{FOOTER.tagline}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone/80">
              {SITE.areaServed} · Atendimento remoto para todo o Brasil.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="type-label text-stone/60">Navegar</p>
            {FOOTER.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone/85 transition-colors hover:text-stone"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="type-label text-stone/60">{FOOTER.contactLabel}</p>
            {FOOTER.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone/85 transition-colors hover:text-stone"
              >
                {item.label} ↗
              </a>
            ))}
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-stone/85 transition-colors hover:text-stone"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        {/* The wordmark signs off at the full width of the container. Drawn as
            SVG text so it scales to the container exactly at any viewport,
            with textLength closing the last few pixels via tracking alone.
            Purely decorative -- the accessible name is in the header. */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 316"
          className="mt-20 w-full select-none"
        >
          <text
            x="0"
            y="308"
            fontSize="430"
            textLength="1000"
            lengthAdjust="spacing"
            className="type-wordmark fill-stone"
          >
            {FOOTER.wordmark.toUpperCase()}
          </text>
        </svg>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-stone/20 pt-6">
          <p className="type-label text-stone/60">{FOOTER.copyright}</p>
          <Asterisk className="text-stone/60" />
        </div>
      </div>
    </footer>
  );
}
