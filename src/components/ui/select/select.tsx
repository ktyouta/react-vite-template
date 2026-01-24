import * as React from "react";
import { type ComponentPropsWithoutRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/utils/cn";

type Option = {
    value: string;
    label: string;
};

type Props = {
    options: Option[];
    registration?: Partial<UseFormRegisterReturn>;
    placeholder?: string;
} & Omit<ComponentPropsWithoutRef<"select">, "ref">;

export const Select = React.forwardRef<HTMLSelectElement, Props>(
    ({ options, registration, placeholder, className, ...props }, ref) => {
        return (
            <select
                ref={ref}
                {...registration}
                {...props}
                className={cn(
                    "h-9 border border-gray-300 rounded px-2 text-sm bg-white",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    className
                )}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }
);

Select.displayName = "Select";
