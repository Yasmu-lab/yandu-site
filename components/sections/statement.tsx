import { Label } from "@/components/ui/primitives";
import { STATEMENT } from "@/content/site";

export function Statement() {
  return (
    <section id="estudio" className="bg-ink px-6 py-28 text-stone md:px-10 md:py-40">
      <div className="mx-auto max-w-[1100px]" data-reveal-group>
        <Label className="text-stone/55">{STATEMENT.label}</Label>

        <blockquote
          data-reveal
          className="type-display mt-10 text-[clamp(26px,3.8vw,52px)] text-stone"
        >
          {STATEMENT.quote}
        </blockquote>

        <footer data-reveal className="mt-12 flex items-baseline gap-3">
          <span className="type-display text-[clamp(18px,1.6vw,24px)] text-stone">
            {STATEMENT.author}
          </span>
          <span className="type-label text-stone/55">{STATEMENT.role}</span>
        </footer>
      </div>
    </section>
  );
}
