import { Box } from '@mui/material';
import { ReactNode } from 'react';
import '../../../../App.css';

type Props = {
    children: ReactNode
}

export const Sample = (props: Props) => {

    return (
        <Box
            sx={{
            }}
        >
            {props.children}
        </Box>
    )
};