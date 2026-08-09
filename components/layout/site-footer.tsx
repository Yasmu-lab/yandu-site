import { FOOTER } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 py-14 text-hero-text md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-semibold tracking-tight">{FOOTER.mark}</p>
          <p className="mt-2 text-sm text-hero-text/70">{FOOTER.tagline}</p>
          <p className="text-sm text-hero-text/70">{FOOTER.links}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm font-semibold md:items-end">
          {FOOTER.social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-coral"
            >
              {item.label} ↗
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[1200px] border-t border-hero-text/10 pt-6 font-mono text-xs text-hero-text/50">
        {FOOTER.copyright}
      </p>
    </footer>
  );
}
