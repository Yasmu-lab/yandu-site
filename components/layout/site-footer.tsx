import { FOOTER } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-absolute px-6 py-14 text-bone md:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl italic tracking-[-0.01em]">
            {FOOTER.mark}
          </p>
          <p className="mt-2 text-sm text-silver-veil">{FOOTER.tagline}</p>
          <p className="text-sm text-silver-veil">{FOOTER.links}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-silver-veil md:justify-end">
          {FOOTER.nav.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-bone">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm md:items-end">
          {FOOTER.social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-frost"
            >
              {item.label} ↗
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[1280px] border-t border-graphite pt-6 font-mono text-xs text-silver-veil">
        {FOOTER.copyright}
      </p>
    </footer>
  );
}
