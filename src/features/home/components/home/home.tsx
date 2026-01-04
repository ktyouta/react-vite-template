import { Box } from '@mui/material';
import { ReactNode } from 'react';
import '../../../../App.css';

type Props = {
    children: ReactNode
}

export const Home = (props: Props) => {

    return (
        <Box
            sx={{
            }}
        >
            {props.children}
        </Box>
    )
};