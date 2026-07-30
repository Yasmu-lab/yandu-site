import { PROCESS_STEPS } from "@/content/site";

import { ProcessStepCard } from "./process-step";

export function ProcessMobileList() {
  return (
    <div className="flex flex-col gap-5">
      {PROCESS_STEPS.map((step, i) => (
        <ProcessStepCard key={step.step} step={step} index={i} total={PROCESS_STEPS.length} />
      ))}
    </div>
  );
}
