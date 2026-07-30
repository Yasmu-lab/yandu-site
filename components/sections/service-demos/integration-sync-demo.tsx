"use client";

import { motion, useInView } from "framer-motion";
import { FileSpreadsheet, ShoppingCart } from "lucide-react";
import { useRef } from "react";

/** Integrações: two systems exchanging data both ways, continuously, on their own. */
export function IntegrationSyncDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });

  return (
    <div ref={ref} className="rounded-lg border border-forest/10 bg-cream p-4">
      <svg viewBox="0 0 300 100" className="h-16 w-full" aria-hidden="true">
        <path d="M40,50 Q150,15 260,50" stroke="var(--color-moss)" strokeWidth="2" fill="none" opacity={0.3} />
        <path d="M40,50 Q150,85 260,50" stroke="var(--color-moss)" strokeWidth="2" fill="none" opacity={0.3} />

        <g>
          <circle cx={40} cy={50} r={16} fill="var(--color-forest)" />
          <foreignObject x={32} y={42} width={16} height={16}>
            <ShoppingCart size={16} className="text-cream" />
          </foreignObject>
        </g>
        <g>
          <circle cx={260} cy={50} r={16} fill="var(--color-forest)" />
          <foreignObject x={252} y={42} width={16} height={16}>
            <FileSpreadsheet size={16} className="text-cream" />
          </foreignObject>
        </g>

        <motion.circle
          r={5}
          fill="var(--color-marigold)"
          initial={{ cx: 40, cy: 50 }}
          animate={inView ? { cx: [40, 150, 260], cy: [50, 15, 50] } : { cx: 40, cy: 50 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          r={5}
          fill="var(--color-marigold-on-dark)"
          initial={{ cx: 260, cy: 50 }}
          animate={inView ? { cx: [260, 150, 40], cy: [50, 85, 50] } : { cx: 260, cy: 50 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
