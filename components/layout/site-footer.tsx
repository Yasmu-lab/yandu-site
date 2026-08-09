import { FOOTER } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-absolute px-6 py-14 text-bone md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-normal tracking-[-0.02em]">{FOOTER.mark}</p>
          <p className="mt-2 text-sm text-silver-veil">{FOOTER.tagline}</p>
          <p className="text-sm text-silver-veil">{FOOTER.links}</p>
        </div>

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

      <p className="mx-auto mt-10 max-w-[1200px] border-t border-graphite pt-6 font-mono text-sm text-silver-veil">
        {FOOTER.copyright}
      </p>
    </footer>
  );
}
