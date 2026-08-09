import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-coral text-ink-deep hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(237,115,95,0.35)] active:translate-y-0",
        "on-dark":
          "border-[1.5px] border-hero-text/70 text-hero-text hover:bg-hero-text/10 hover:border-hero-text hover:-translate-y-0.5",
        "on-coral":
          "bg-ink-deep text-hero-text hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(14,49,44,0.35)] active:translate-y-0",
        outline:
          "border-[1.5px] border-ink/25 text-ink hover:border-coral hover:text-coral-text",
        ghost: "text-ink hover:text-coral-text",
      },
      size: {
        default: "h-auto px-6 py-3",
        sm: "h-auto px-4 py-2 text-[13.5px]",
        lg: "h-auto px-7 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
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
