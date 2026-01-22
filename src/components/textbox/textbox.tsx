import * as React from "react";
import { type ComponentPropsWithoutRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/utils/cn";

type Props = {
    error?: string;
    registration: Partial<UseFormRegisterReturn>;
} & Omit<ComponentPropsWithoutRef<"input">, "ref">;

export const Textbox = React.forwardRef<HTMLInputElement, Props>(
    ({ error, registration, className, ...props }, ref) => {
        return (
            <input
                ref={ref}
                {...registration}
                {...props}
                className={cn(
                    "h-9 border border-gray-300 rounded px-1.5 text-sm",
                    className
                )}
            />
        );
    }
);
