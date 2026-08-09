import { TICKER_ITEMS } from "@/content/site";

function TickerGroup() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
      {TICKER_ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.16em] text-ink"
        >
          {item}
          <span className="text-coral">✦</span>
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-bg py-7">
      <span className="sr-only">
        {TICKER_ITEMS.join(", ")}
      </span>
      <div className="ticker-track flex w-max">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
}
