import { Asterisk } from "@/components/ui/primitives";
import { HERO } from "@/content/site";

/**
 * Poster ground built only from Yandu's own material: a drafting grid, an
 * outlined echo of the wordmark, and flat panels drifting at their own rates.
 * Every layer stays dark and low-contrast so the wordmark on top reads.
 */
function Ground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div data-parallax="4" className="hero-grid absolute inset-[-8%]" />

      <p
        data-parallax="-7"
        className="hero-ghost absolute -top-[6%] -left-[3%] text-[26vw] whitespace-nowrap"
      >
        {HERO.wordmark}
      </p>

      <div
        data-parallax="-9"
        className="absolute top-[8%] -left-[6%] h-[42%] w-[34%] -rotate-6 bg-slate/70"
      />
      <div
        data-parallax="11"
        className="absolute -right-[4%] bottom-[10%] h-[38%] w-[30%] rotate-6 bg-slate-deep/80"
      />
      <div
        data-parallax="-14"
        className="absolute top-[16%] right-[14%] flex h-16 w-16 rotate-3 items-center justify-center bg-chalk md:h-24 md:w-24"
      >
        <Asterisk className="text-2xl text-ink md:text-4xl" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="px-3 pt-20 pb-3 md:px-4 md:pt-24 md:pb-4">
      <div className="relative flex min-h-[86svh] flex-col justify-between overflow-hidden bg-ink p-6 text-stone md:min-h-[88svh] md:p-10">
        <Ground />

        <p className="type-label relative z-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-stone/70">
          <Asterisk />
          {HERO.lockup.join("  ·  ")}
        </p>

        <div className="relative z-10 flex flex-1 items-center py-12">
          <div>
            <h1 className="type-wordmark text-[clamp(76px,15vw,240px)] text-stone">
              {HERO.wordmark}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone/75 md:text-lg">
              {HERO.tagline}
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap items-end justify-between gap-x-10 gap-y-5 border-t border-stone/20 pt-5">
          <dl className="flex flex-wrap gap-x-10 gap-y-4">
            {HERO.meta.map((item) => (
              <div key={item.label}>
                <dt className="type-label text-stone/55">{item.label}</dt>
                <dd className="mt-1.5 text-sm text-stone">{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="type-label flex items-center gap-2 text-stone/55">
            {HERO.scrollCue}
            <Asterisk />
          </p>
        </div>
      </div>
    </section>
  );
}
