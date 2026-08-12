import { TRUST_ITEMS } from "@/content/site";

/**
 * Only verifiable statements about how the studio works. No client counts,
 * conversion figures or years of experience.
 */
export function Trust() {
  return (
    <section className="px-6 md:px-10">
      <ul
        data-reveal-group
        className="mx-auto flex max-w-[1320px] flex-wrap items-center gap-x-10 gap-y-4 border-y border-ink/15 py-6"
      >
        {TRUST_ITEMS.map((item) => (
          <li key={item} data-reveal className="type-label flex items-center gap-2.5 text-ink">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
