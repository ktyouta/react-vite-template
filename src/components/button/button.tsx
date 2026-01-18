import { Button as MUIButton, type ButtonProps } from "@mui/material";
import { type ReactNode } from "react";

type Color = "red" | "blue" | "green";
type Size = "small" | "medium" | "large";

export type PropsType = ButtonProps & {
    colorType: Color,
    sizeType: Size,
    children: ReactNode,
    className?: string,
};

const colorMap: Record<Color, string> = {
    red: "#ef4444",
    blue: "#3b82f6",
    green: "#22c55e",
};

const colorHoverMap: Record<Color, string> = {
    red: "#dc2626",
    blue: "#2563eb",
    green: "#16a34a",
};

const sizeMap: Record<Size, { padding: string; fontSize: string }> = {
    small: { padding: "4px 12px", fontSize: "0.75rem" },
    medium: { padding: "6px 16px", fontSize: "0.875rem" },
    large: { padding: "10px 20px", fontSize: "1rem" },
};

export const Button = (props: PropsType) => {

    return (
        <MUIButton
            variant="contained"
            disableElevation
            {...props}
            sx={{
                backgroundColor: colorMap[props.colorType],
                fontSize: sizeMap[props.sizeType].fontSize,
                padding: sizeMap[props.sizeType].padding,
                textTransform: "none",
                "&:hover": {
                    backgroundColor: colorHoverMap[props.colorType],
                },
                ...props.sx,
            }}
        >
            {props.children}
        </MUIButton>
    );
};
