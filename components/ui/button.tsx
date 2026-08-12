import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs font-normal uppercase tracking-[0.14em] transition-[border-color,background-color,color,opacity,transform] duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        "ghost-dark": "border border-bone/70 text-bone hover:border-bone",
        "ghost-light": "border border-vault-ink/25 text-vault-ink hover:border-vault-ink",
        "arrow-dark": "bg-charcoal/60 text-bone hover:bg-charcoal/80",
        "solid-light": "bg-bone text-vault-ink hover:bg-ash-mist",
        "solid-dark": "bg-vault-ink text-bone hover:bg-charcoal",
        link: "px-0 py-0 text-vault-ink underline decoration-silver-veil/60 underline-offset-4 hover:decoration-vault-ink",
      },
      size: {
        default: "h-auto px-6 py-3",
        sm: "h-auto px-4 py-2",
        lg: "h-auto px-7 py-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "ghost-dark",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
