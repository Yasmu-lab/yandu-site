import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-[transform,box-shadow,background-color,border-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-marigold text-ink hover:bg-marigold-hover hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(224,121,60,0.35)] active:translate-y-0",
        secondary:
          "border-[1.5px] border-moss text-cream hover:bg-white/10 hover:border-cream hover:-translate-y-0.5",
        outline:
          "border-[1.5px] border-forest/30 text-forest hover:border-marigold-text hover:text-marigold-text",
        ghost: "text-forest hover:text-marigold-text",
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
