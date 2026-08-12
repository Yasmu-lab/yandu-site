import { Label } from "@/components/ui/primitives";
import { STATEMENT } from "@/content/site";

export function Statement() {
  return (
    <section id="estudio" className="bg-ink px-6 py-24 text-cream md:px-10 md:py-32">
      <div className="mx-auto max-w-[1100px]" data-reveal-group>
        <Label className="text-cream/55">{STATEMENT.label}</Label>

        <blockquote
          data-reveal
          className="type-display mt-10 text-[clamp(26px,3.8vw,52px)] text-cream"
        >
          {STATEMENT.quote}
        </blockquote>

        <footer data-reveal className="mt-12 flex items-baseline gap-3">
          <span className="type-display text-[clamp(18px,1.6vw,24px)] text-cream">
            {STATEMENT.author}
          </span>
          <span className="type-label text-cream/55">{STATEMENT.role}</span>
        </footer>
      </div>
    </section>
  );
}
