import { TICKER_ITEMS } from "@/content/site";

function TickerGroup() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
      {TICKER_ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-10 font-[family-name:var(--font-display)] text-2xl italic tracking-[-0.01em] text-bone md:text-3xl"
        >
          {item.charAt(0) + item.slice(1).toLowerCase()}
          <span className="accent-mark" />
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-graphite bg-vault-ink py-6">
      <span className="sr-only">{TICKER_ITEMS.join(", ")}</span>
      <div className="ticker-track flex w-max" aria-hidden="true">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
}
