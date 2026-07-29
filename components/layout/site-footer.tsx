import { LogoMark } from "@/components/logo-mark";
import { NAV_LINKS, SITE } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.08] bg-cream px-6 py-9">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-center gap-4.5 md:justify-between">
        <div className="flex items-center gap-2">
          <LogoMark className="h-5 w-5" />
          <span className="font-heading text-[15px] font-bold text-forest">
            {SITE.name.toLowerCase()}
          </span>
        </div>
        <div className="flex gap-5 text-[13px] font-semibold">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-marigold-text">
              {link.label}
            </a>
          ))}
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-marigold-text"
          >
            Instagram
          </a>
        </div>
        <p className="w-full border-t border-black/[0.06] pt-4.5 text-center font-mono text-[11px] text-moss-text">
          © {year} {SITE.name}. {SITE.areaServed}.
        </p>
      </div>
    </footer>
  );
}
