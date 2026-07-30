"use client";

import { motion, useInView } from "framer-motion";
import { Bell, CheckCheck, Inbox } from "lucide-react";
import { useRef } from "react";

const NODES = [
  { x: 40, Icon: Inbox },
  { x: 150, Icon: Bell },
  { x: 260, Icon: CheckCheck },
];

/** Automações: a task moving through a flow on its own, node by node, on a loop. */
export function AutomationFlowDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });

  return (
    <div ref={ref} className="rounded-lg border border-forest/10 bg-cream p-4">
      <svg viewBox="0 0 300 100" className="h-16 w-full" aria-hidden="true">
        <line x1="40" y1="50" x2="260" y2="50" stroke="var(--color-moss)" strokeWidth="2" opacity={0.35} />
        {NODES.map(({ x, Icon }) => (
          <g key={x}>
            <circle cx={x} cy={50} r={16} fill="var(--color-forest)" />
            <foreignObject x={x - 8} y={42} width={16} height={16}>
              <Icon size={16} className="text-cream" />
            </foreignObject>
          </g>
        ))}
        <motion.circle
          r={6}
          fill="var(--color-marigold)"
          initial={{ cx: 40, cy: 50 }}
          animate={inView ? { cx: [40, 150, 260, 150, 40] } : { cx: 40 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] }}
        />
      </svg>
    </div>
  );
}
