

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-1 rounded-lg transition-colors disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "bg-gray-900 text-white hover:bg-gray-800",
                secondary:
                    "text-gray-700 border border-gray-200 hover:bg-gray-50",
                outline: "border border-gray-200 hover:bg-gray-50",
                ghost: "text-gray-500 hover:text-gray-700",
                
            },
            size: {
                sm: "px-3 py-1.5 text-xs",
                md: "px-4 py-2 text-sm font-medium",
                lg: "px-5 py-4 text-base font-medium",
            },
            fullWidth: {
                true: "w-full",
                false: "",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            fullWidth: false,
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export default function Button({
    className,
    variant,
    size,
    fullWidth,
    leftIcon,
    rightIcon,
    type = "button",
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            className={cn(buttonVariants({ variant, size, fullWidth }), className)}
            {...props}
        >
            {leftIcon}
            {children}
            {rightIcon}
        </button>
    );
}

export { buttonVariants };
