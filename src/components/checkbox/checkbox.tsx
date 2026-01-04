import CheckboxComponent from '@mui/material/Checkbox';
import { type CheckboxProps } from "@mui/material";

type Size = "small" | "medium" | "large";

type propsType = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    size?: Size;
} & CheckboxProps;

export const Checkbox = ({
    checked,
    onChange,
    disabled = false,
    size = 'medium',
}: propsType) => {

    return (
        <CheckboxComponent
            checked={checked}
            onChange={(_, value) => {
                onChange(value);
            }}
            disabled={disabled}
            size={size}
        />
    );
};
