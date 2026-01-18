import { type CheckboxProps } from "@mui/material";
import CheckboxComponent from '@mui/material/Checkbox';

type Size = "small" | "medium" | "large";

type PropsType = {
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
    ...rest
}: PropsType) => {

    return (
        <CheckboxComponent
            checked={checked}
            onChange={(_, value) => {
                onChange(value);
            }}
            disabled={disabled}
            size={size}
            {...rest}
        />
    );
};
