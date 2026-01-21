import {
    InputBase,
    InputBaseProps
} from "@mui/material";
import * as React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
    error?: string;
    registration: Partial<UseFormRegisterReturn>;
} & Omit<InputBaseProps, "error">;

export const Textbox = React.forwardRef<HTMLInputElement, Props>(
    ({ error, registration, ...props }, ref) => {
        return (
            <InputBase
                inputRef={ref}
                {...registration}
                {...props}
                sx={{
                    height: 36,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 1,
                    px: 1.5,
                    fontSize: "0.875rem",
                    ...(props.sx ?? {}),
                }}
            />
        );
    }
);
