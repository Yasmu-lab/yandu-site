import { TICKER_ITEMS } from "@/content/site";

function TickerGroup() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
      {TICKER_ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.16em] text-bone"
        >
          {item}
          <span className="text-frost">✦</span>
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-graphite bg-vault-ink py-7">
      <span className="sr-only">{TICKER_ITEMS.join(", ")}</span>
      <div className="ticker-track flex w-max">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
}
